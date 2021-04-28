package _leggedoauth

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"time"

	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/flyteorg/flytestdlib/logger"

	"github.com/pkg/browser"
	"golang.org/x/oauth2"
)

const (
	Timeout     = 15 * time.Second
	ExpiryBeforeTime = time.Minute
	RefreshTime = 5 * time.Minute
)

type TokenOrchestrator struct {
}

// This is a copy of oauth2.internal.tokenJSON as its not accesible outside.
// This class is required since the json data returned by admin is in this internal format and requires to be converted to
// the oauth2.Token format

type tokenJSON struct {
	AccessToken  string `json:"access_token"`
	TokenType    string `json:"token_type"`
	RefreshToken string `json:"refresh_token"`
	ExpiresIn    int    `json:"expires_in"`
}

func (e *tokenJSON) expiry() (t time.Time) {
	if v := e.ExpiresIn; v != 0 {
		return time.Now().Add(time.Duration(v) * time.Second)
	}
	return
}

func (f TokenOrchestrator) RefreshTheToken(ctx context.Context, clientConf *oauth2.Config, token *oauth2.Token) *oauth2.Token {
	// ClientSecret is empty here. Basic auth is only needed to refresh the token.
	client := newBasicClient(clientConf.ClientID, clientConf.ClientSecret)
	payload := url.Values{
		"grant_type":    {"refresh_token"},
		"refresh_token": {token.RefreshToken},
		"scope":         {"all", "offline"},
	}
	_, body, err := client.Post(clientConf.Endpoint.TokenURL, payload)
	if err != nil {
		logger.Errorf(ctx, "could not refresh token with expiry at %v due to %v", token.Expiry, err)
		return nil
	}
	var internalToken tokenJSON
	if err = json.Unmarshal([]byte(body), &internalToken); err != nil {
		return nil
	}
	refreshedToken := oauth2.Token{
		AccessToken:  internalToken.AccessToken,
		TokenType:    internalToken.TokenType,
		RefreshToken: internalToken.RefreshToken,
		Expiry:       internalToken.expiry(),
	}
	logger.Debugf(ctx, "got a response from the refresh grant for old expiry %v with new expiry %v",
		token.Expiry, refreshedToken.Expiry)

	if err = defaultCacheProvider.SaveToken(ctx, refreshedToken); err != nil {
		logger.Errorf(ctx, "unable to save the refreshed token due to %v", err)
	}
	return &refreshedToken
}

// FetchTokenFromCacheOrRefreshIt Fetch token from cache or refresh it
func (f TokenOrchestrator) FetchTokenFromCacheOrRefreshIt(ctx context.Context, authMetadataClient service.AuthMetadataServiceClient) *oauth2.Token {
	if token, err := defaultCacheProvider.GetToken(ctx); err == nil {
		if token.Expiry.Add(-RefreshTime).Before(time.Now()) {
			// Generate the client config by fetching the discovery endpoint data from admin.
			if clientConf, err = GenerateClientConfig(ctx, authMetadataClient); err != nil {
				return nil
			}
			return f.RefreshTheToken(ctx, clientConf, token)
		} else if token.Expiry.Add(-ExpiryBeforeTime).After(time.Now()) {
			return nil
		}
		return token
	}
	return nil
}

func (f TokenOrchestrator) FetchTokenFromAuthFlow(ctx context.Context, authMetadataClient service.AuthMetadataServiceClient) (*oauth2.Token, error) {
	var err error
	// Generate the client config by fetching the discovery endpoint data from admin.
	if clientConf, err = GenerateClientConfig(ctx, authMetadataClient); err != nil {
		return nil, err
	}
	var redirectURL *url.URL
	if redirectURL, err = url.Parse(clientConf.RedirectURL); err != nil {
		return nil, err
	}
	// Register the call back handler
	http.HandleFunc(redirectURL.Path, callbackHandler(*clientConf)) // the oauth2 callback endpoint

	tokenChannel = make(chan *oauth2.Token, 1)
	errorChannel = make(chan error, 1)
	timeoutChannel = make(chan bool, 1)
	// Run timeout go routine inorder to timeout the authflow incase there are no redirects on the http endpoint
	// created by the app
	go func() {
		time.Sleep(Timeout)
		timeoutChannel <- true
	}()

	pkceCodeVerifier = generateCodeVerifier(64)
	pkceCodeChallenge = generateCodeChallenge(pkceCodeVerifier)
	stateString = state(32)
	nonces = state(32)
	// Replace S256 with one from cient config and provide a support to generate code challenge using the passed
	// in method.
	urlToOpen := clientConf.AuthCodeURL(stateString) + "&nonce=" + nonces + "&code_challenge=" +
		pkceCodeChallenge + "&code_challenge_method=S256"

	go func() {
		if err = http.ListenAndServe(redirectURL.Host, nil); err != nil {
			logger.Fatal(ctx, "Couldn't start the callback http server on host %v due to %v", redirectURL.Host,
				err)
		}
	}()
	fmt.Println("Opening the browser at " + urlToOpen)
	if err = browser.OpenURL(urlToOpen); err != nil {
		return nil, err
	}
	var token *oauth2.Token
	select {
	case err = <-errorChannel:
		return nil, err
	case <-timeoutChannel:
		return nil, fmt.Errorf("timeout occurred during auth flow")
	case token = <-tokenChannel:
		if err = defaultCacheProvider.SaveToken(ctx, *token); err != nil {
			logger.Errorf(ctx, "unable to save the new token due to %v", err)
		}
		return token, nil
	}
}

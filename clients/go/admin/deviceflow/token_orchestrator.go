package deviceflow

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
	"time"

	"golang.org/x/net/context/ctxhttp"
	"golang.org/x/oauth2"

	"github.com/flyteorg/flyteidl/clients/go/admin/cache"
	"github.com/flyteorg/flyteidl/clients/go/admin/oauth"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/flyteorg/flytestdlib/logger"
)

const (
	cliendID       = "client_id"
	deviceCode     = "device_code"
	grantType      = "grant_type"
	scope          = "scope"
	grantTypeValue = "urn:ietf:params:oauth:grant-type:device_code"
)

const (
	errSlowDown    = "slow_down"
	errAuthPending = "authorization_pending"
)

// OAuthTokenOrError containing the token
type OAuthTokenOrError struct {
	*oauth2.Token
	Error string `json:"error,omitempty"`
}

// TokenOrchestrator implements the main logic to initiate device authorization flow
type TokenOrchestrator struct {
	cfg          Config
	clientConfig *oauth.Config
	tokenCache   cache.TokenCache
}

// RefreshToken attempts to refresh the access token if a refresh token is provided.
func (t TokenOrchestrator) RefreshToken(ctx context.Context, token *oauth2.Token) (*oauth2.Token, error) {
	ts := t.clientConfig.TokenSource(ctx, token)
	var refreshedToken *oauth2.Token
	var err error
	refreshedToken, err = ts.Token()
	if err != nil {
		logger.Warnf(ctx, "failed to refresh the token due to %v and will be doing re-auth", err)
		return nil, err
	}

	if refreshedToken != nil {
		logger.Debugf(ctx, "got a response from the refresh grant for old expiry %v with new expiry %v",
			token.Expiry, refreshedToken.Expiry)
		if refreshedToken.AccessToken != token.AccessToken {
			if err = t.tokenCache.SaveToken(refreshedToken); err != nil {
				logger.Errorf(ctx, "unable to save the new token due to %v", err)
				return nil, err
			}
		}
	}

	return refreshedToken, nil
}

// FetchTokenFromCacheOrRefreshIt fetches the token from cache and refreshes it if it'll expire within the
// Config.TokenRefreshGracePeriod period.
func (t TokenOrchestrator) FetchTokenFromCacheOrRefreshIt(ctx context.Context) (token *oauth2.Token, err error) {
	token, err = t.tokenCache.GetToken()
	if err != nil {
		return nil, err
	}

	if !token.Valid() {
		return nil, fmt.Errorf("token from cache is invalid")
	}

	// If token doesn't need to be refreshed, return it.
	if time.Now().Before(token.Expiry.Add(-t.cfg.TokenRefreshGracePeriod.Duration)) {
		logger.Infof(ctx, "found the token in the cache")
		return token, nil
	}
	token.Expiry = token.Expiry.Add(-t.cfg.TokenRefreshGracePeriod.Duration)

	token, err = t.RefreshToken(ctx, token)
	if err != nil {
		return nil, fmt.Errorf("failed to refresh token using cached token. Error: %w", err)
	}

	if !token.Valid() {
		return nil, fmt.Errorf("refreshed token is invalid")
	}

	err = t.tokenCache.SaveToken(token)
	if err != nil {
		return nil, fmt.Errorf("failed to save token in the token cache. Error: %w", err)
	}

	return token, nil
}

// StartDeviceAuthorization will initiate the OAuth2 device authorization flow.
func (t TokenOrchestrator) StartDeviceAuthorization(ctx context.Context, dareq DeviceAuthorizationRequest) (*DeviceAuthorizationResponse, error) {
	v := url.Values{cliendID: {dareq.ClientID}, scope: {dareq.Scope}}
	httpReq, err := http.NewRequest("POST", t.clientConfig.DeviceEndpoint, strings.NewReader(v.Encode()))
	if err != nil {
		return nil, err
	}
	httpReq.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	httpResp, err := ctxhttp.Do(ctx, nil, httpReq)
	if err != nil {
		return nil, err
	}

	body, err := io.ReadAll(httpResp.Body)
	if err != nil {
		return nil, fmt.Errorf("device authorization request failed due to  %v", err)
	}
	if httpResp.StatusCode != http.StatusOK {
		return nil, &oauth2.RetrieveError{
			Response: httpResp,
			Body:     body,
		}
	}

	daresp := &DeviceAuthorizationResponse{}
	err = json.Unmarshal(body, &daresp)
	if err != nil {
		return nil, err
	}

	fmt.Printf("Please open the browser at the url %v and enter following verification code %v\nOR\n", daresp.VerificationURL, daresp.UserCode)
	fmt.Printf("Please open the browser at the url %v containing verification code\n", daresp.VerificationURLComplete)
	return daresp, nil
}

// PollTokenEndpoint polls the token endpoint until the user authorizes/ denies the app or an error occurs other than slow_down or authorization_pending
func (t TokenOrchestrator) PollTokenEndpoint(ctx context.Context, tokReq DeviceAccessTokenRequest, pollInterval int64) (*oauth2.Token, error) {
	v := url.Values{
		cliendID:   {tokReq.ClientID},
		grantType:  {grantTypeValue},
		deviceCode: {tokReq.DeviceCode},
	}

	for {

		httpReq, err := http.NewRequest("POST", t.clientConfig.Endpoint.TokenURL, strings.NewReader(v.Encode()))
		if err != nil {
			return nil, err
		}
		httpReq.Header.Set("Content-Type", "application/x-www-form-urlencoded")

		httpResp, err := ctxhttp.Do(ctx, nil, httpReq)
		if err != nil {
			return nil, err
		}

		body, err := io.ReadAll(httpResp.Body)
		if err != nil {
			return nil, err
		}

		var tokResp DeviceAccessTokenResponse
		err = json.Unmarshal(body, &tokResp)
		if err != nil {
			return nil, err
		}

		// Unmarshalled response if it contains an error then check if we need to increase the polling interval
		if len(tokResp.Error) > 0 {
			if tokResp.Error == errSlowDown || tokResp.Error == errAuthPending {
				pollInterval = pollInterval * 2

			} else {
				return nil, fmt.Errorf("oauth error : %v", tokResp.Error)
			}
		} else {
			// Got the auth token in the response and save it in the cache
			err = t.tokenCache.SaveToken(&tokResp.Token)
			// Saving into the cache is only considered to be a warning in this case.
			if err != nil {
				logger.Warnf(ctx, "failed to save token in the token cache. Error: %w", err)
			}
			return &tokResp.Token, nil
		}
		fmt.Printf("Waiting for %v secs\n", pollInterval)
		time.Sleep(time.Duration(pollInterval) * time.Second)
	}
}

// FetchTokenFromAuthFlow starts a webserver to listen to redirect callback from the authorization server at the end
// of the flow. It then launches the browser to authenticate the user.
func (t TokenOrchestrator) FetchTokenFromAuthFlow(ctx context.Context) (*oauth2.Token, error) {
	ctx, cancelNow := context.WithTimeout(ctx, t.cfg.DeviceFlowTimeout.Duration)
	defer cancelNow()

	var scopes string
	if len(t.clientConfig.Scopes) > 0 {
		scopes = strings.Join(t.clientConfig.Scopes, " ")
	}
	daReq := DeviceAuthorizationRequest{ClientID: t.clientConfig.ClientID, Scope: scopes}
	daResp, err := t.StartDeviceAuthorization(ctx, daReq)
	if err != nil {
		return nil, err
	}

	pollInterval := int64(5) // default value of 5 sec poll interval if the authorization response doesn't have interval set
	if daResp.Interval > 0 {
		pollInterval = daResp.Interval
	}

	tokReq := DeviceAccessTokenRequest{ClientID: t.clientConfig.ClientID, DeviceCode: daResp.DeviceCode, GrantType: grantType}
	return t.PollTokenEndpoint(ctx, tokReq, pollInterval)
}

// NewDeviceFlowTokenOrchestrator creates a new TokenOrchestrator that implements the main logic to start device authorization flow and fetch device code and then poll on the token endpoint until the device authorization is approved/denied by the user
func NewDeviceFlowTokenOrchestrator(ctx context.Context, cfg Config, tokenCache cache.TokenCache, authMetadataClient service.AuthMetadataServiceClient) (TokenOrchestrator, error) {
	clientConf, err := oauth.BuildConfigFromMetadataService(ctx, authMetadataClient)
	if err != nil {
		return TokenOrchestrator{}, err
	}

	return TokenOrchestrator{
		cfg:          cfg,
		clientConfig: clientConf,
		tokenCache:   tokenCache,
	}, nil
}

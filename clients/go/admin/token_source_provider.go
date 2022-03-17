package admin

import (
	"context"
	"fmt"
	"io/ioutil"
	"math"
	"math/rand"
	"strings"
	"sync"
	"time"

	"github.com/flyteorg/flyteidl/clients/go/admin/externalprocess"

	"github.com/flyteorg/flyteidl/clients/go/admin/pkce"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/flyteorg/flytestdlib/logger"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/clientcredentials"
)

// TokenSourceProvider defines the interface needed to provide a TokenSource that is used to
// create a client with authentication enabled.
type TokenSourceProvider interface {
	GetTokenSource(ctx context.Context) (oauth2.TokenSource, error)
}

func NewTokenSourceProvider(ctx context.Context, cfg *Config, tokenCache pkce.TokenCache,
	authClient service.AuthMetadataServiceClient) (TokenSourceProvider, error) {

	var tokenProvider TokenSourceProvider
	var err error
	switch cfg.AuthType {
	case AuthTypeClientSecret:
		tokenURL := cfg.TokenURL
		if len(tokenURL) == 0 {
			metadata, err := authClient.GetOAuth2Metadata(ctx, &service.OAuth2MetadataRequest{})
			if err != nil {
				return nil, fmt.Errorf("failed to fetch auth metadata. Error: %v", err)
			}

			tokenURL = metadata.TokenEndpoint
		}

		clientMetadata, err := authClient.GetPublicClientConfig(ctx, &service.PublicClientAuthConfigRequest{})
		if err != nil {
			return nil, fmt.Errorf("failed to fetch client metadata. Error: %v", err)
		}

		tokenProvider, err = NewClientCredentialsTokenSourceProvider(ctx, cfg, clientMetadata, tokenURL)
		if err != nil {
			return nil, err
		}
	case AuthTypePkce:
		tokenProvider, err = NewPKCETokenSourceProvider(ctx, cfg.PkceConfig, tokenCache, authClient)
		if err != nil {
			return nil, err
		}
	case AuthTypeExternalCommand:
		tokenProvider, err = NewExternalTokenSourceProvider(cfg.Command)
		if err != nil {
			return nil, err
		}
	default:
		return nil, fmt.Errorf("unsupported type %v", cfg.AuthType)
	}

	return tokenProvider, nil
}

type ExternalTokenSourceProvider struct {
	command []string
}

func NewExternalTokenSourceProvider(command []string) (TokenSourceProvider, error) {
	return &ExternalTokenSourceProvider{command: command}, nil
}

func (e ExternalTokenSourceProvider) GetTokenSource(ctx context.Context) (oauth2.TokenSource, error) {
	output, err := externalprocess.Execute(e.command)
	if err != nil {
		return nil, err
	}

	return oauth2.StaticTokenSource(&oauth2.Token{
		AccessToken: strings.Trim(string(output), "\t \n"),
		TokenType:   "bearer",
	}), nil
}

type PKCETokenSourceProvider struct {
	tokenOrchestrator pkce.TokenOrchestrator
}

func NewPKCETokenSourceProvider(ctx context.Context, pkceCfg pkce.Config, tokenCache pkce.TokenCache, authClient service.AuthMetadataServiceClient) (TokenSourceProvider, error) {

	tokenOrchestrator, err := pkce.NewTokenOrchestrator(ctx, pkceCfg, tokenCache, authClient)
	if err != nil {
		return nil, err
	}

	return PKCETokenSourceProvider{tokenOrchestrator: tokenOrchestrator}, nil
}

func (p PKCETokenSourceProvider) GetTokenSource(ctx context.Context) (oauth2.TokenSource, error) {
	return GetPKCEAuthTokenSource(ctx, p.tokenOrchestrator)
}

// Returns the token source which would be used for three legged oauth. eg : for admin to authorize access to flytectl
func GetPKCEAuthTokenSource(ctx context.Context, tokenOrchestrator pkce.TokenOrchestrator) (oauth2.TokenSource, error) {
	// explicitly ignore error while fetching token from cache.
	authToken, err := tokenOrchestrator.FetchTokenFromCacheOrRefreshIt(ctx)
	if err != nil {
		logger.Warnf(ctx, "Failed fetching from cache. Will restart the flow. Error: %v", err)
	}

	if authToken == nil {
		// Fetch using auth flow
		if authToken, err = tokenOrchestrator.FetchTokenFromAuthFlow(ctx); err != nil {
			logger.Errorf(ctx, "Error fetching token using auth flow due to %v", err)
			return nil, err
		}
	}

	return &pkce.SimpleTokenSource{
		CachedToken: authToken,
	}, nil
}

type ClientCredentialsTokenSourceProvider struct {
	ccConfig                     clientcredentials.Config
	MaxDurationBeforeTokenExpiry time.Duration
	RefreshTokenPreemptively     bool
}

func NewClientCredentialsTokenSourceProvider(ctx context.Context, cfg *Config,
	clientMetadata *service.PublicClientAuthConfigResponse, tokenURL string) (TokenSourceProvider, error) {

	secretBytes, err := ioutil.ReadFile(cfg.ClientSecretLocation)
	if err != nil {
		logger.Errorf(ctx, "Error reading secret from location %s", cfg.ClientSecretLocation)
		return nil, err
	}

	secret := strings.TrimSpace(string(secretBytes))
	scopes := cfg.Scopes
	if len(scopes) == 0 {
		scopes = clientMetadata.Scopes
	}
	return ClientCredentialsTokenSourceProvider{
		ccConfig: clientcredentials.Config{
			ClientID:     cfg.ClientID,
			ClientSecret: secret,
			TokenURL:     tokenURL,
			Scopes:       scopes},
		MaxDurationBeforeTokenExpiry: cfg.MaxDurationBeforeTokenExpiry.Duration,
		RefreshTokenPreemptively:     cfg.RefreshTokenPreemptively}, nil
}

func (p ClientCredentialsTokenSourceProvider) GetTokenSource(ctx context.Context) (oauth2.TokenSource, error) {
	if p.RefreshTokenPreemptively {
		source := p.ccConfig.TokenSource(ctx)
		return &customTokenSource{
			new:                          source,
			mu:                           sync.Mutex{},
			t:                            nil,
			maxDurationBeforeTokenExpiry: p.MaxDurationBeforeTokenExpiry,
		}, nil
	}
	return p.ccConfig.TokenSource(ctx), nil
}

type customTokenSource struct {
	new                          oauth2.TokenSource
	mu                           sync.Mutex // guards everything else
	t                            *oauth2.Token
	refreshTime                  time.Time
	refreshed                    bool
	maxDurationBeforeTokenExpiry time.Duration
}

func (s *customTokenSource) Token() (*oauth2.Token, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	if s.t.Valid() {
		if time.Now().After(s.refreshTime) && !s.refreshed {
			t, err := s.new.Token()
			if err != nil {
				s.refreshed = true // don't try to refresh again before expiry
			} else {
				s.t = t
				s.refreshTime = s.t.Expiry.Add(-getRandomDuration(s.maxDurationBeforeTokenExpiry))
				s.refreshed = false
				return s.t, nil
			}
		} else {
			return s.t, nil
		}
	}
	t, err := s.new.Token()
	if err != nil {
		return nil, err
	}
	s.t = t
	s.refreshed = false
	s.refreshTime = s.t.Expiry.Add(-getRandomDuration(s.maxDurationBeforeTokenExpiry))
	return t, nil
}

func getRandomDuration(maxDuration time.Duration) time.Duration {
	rand.Seed(time.Now().UnixNano()) // this changes global random seed
	ms := maxDuration.Seconds()
	msInt := int(math.Round(rand.Float64() * ms))
	return time.Duration(msInt) * time.Second
}

package admin

import (
	"context"
	"fmt"
	"net/url"
	"os"
	"strings"
	"sync"
	"time"

	"golang.org/x/oauth2"
	"golang.org/x/oauth2/clientcredentials"
	"k8s.io/apimachinery/pkg/util/wait"

	"github.com/flyteorg/flyteidl/clients/go/admin/cache"
	"github.com/flyteorg/flyteidl/clients/go/admin/deviceflow"
	"github.com/flyteorg/flyteidl/clients/go/admin/externalprocess"
	"github.com/flyteorg/flyteidl/clients/go/admin/pkce"
	"github.com/flyteorg/flyteidl/clients/go/admin/tokenorchestrator"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/flyteorg/flytestdlib/logger"
)

//go:generate mockery -name TokenSource
type TokenSource interface {
	Token() (*oauth2.Token, error)
}

const (
	audienceKey = "audience"
)

// TokenSourceProvider defines the interface needed to provide a TokenSource that is used to
// create a client with authentication enabled.
type TokenSourceProvider interface {
	GetTokenSource(ctx context.Context) (oauth2.TokenSource, error)
}

func NewTokenSourceProvider(ctx context.Context, cfg *Config, tokenCache cache.TokenCache,
	authClient service.AuthMetadataServiceClient) (TokenSourceProvider, error) {

	var tokenProvider TokenSourceProvider
	var err error

	apiKey := os.Getenv(cfg.APIKeyEnvVar)
	if len(apiKey) > 0 {
		logger.Debugf(ctx, "Using API key from environment variable [%s]", cfg.APIKeyEnvVar)
		cfg.AuthType = AuthTypeAPIKey
	} else if len(cfg.APIKeyLocation) > 0 {
		logger.Debugf(ctx, "Using API Key from file [%s]", cfg.APIKeyLocation)
		cfg.AuthType = AuthTypeAPIKey
	}

	switch cfg.AuthType {
	case AuthTypeAPIKey:
		tokenURL, scopes, audienceValue, err := resolveAuthMetadata(ctx, cfg, authClient)
		if err != nil {
			return nil, err
		}

		tokenProvider, err = NewClientCredentialsTokenSourceProviderFromAPIKey(cfg, scopes, tokenURL, tokenCache, audienceValue)
		if err != nil {
			return nil, err
		}
	case AuthTypeClientSecret:
		tokenURL, scopes, audienceValue, err := resolveAuthMetadata(ctx, cfg, authClient)
		if err != nil {
			return nil, err
		}

		tokenProvider, err = NewClientCredentialsTokenSourceProvider(ctx, cfg, scopes, tokenURL, tokenCache, audienceValue)
		if err != nil {
			return nil, err
		}
	case AuthTypePkce:
		baseTokenOrchestrator, err := tokenorchestrator.NewBaseTokenOrchestrator(ctx, tokenCache, authClient)
		if err != nil {
			return nil, err
		}

		tokenProvider, err = NewPKCETokenSourceProvider(baseTokenOrchestrator, cfg.PkceConfig)
		if err != nil {
			return nil, err
		}
	case AuthTypeExternalCommand:
		tokenProvider, err = NewExternalTokenSourceProvider(cfg.Command)
		if err != nil {
			return nil, err
		}
	case AuthTypeDeviceFlow:
		baseTokenOrchestrator, err := tokenorchestrator.NewBaseTokenOrchestrator(ctx, tokenCache, authClient)
		if err != nil {
			return nil, err
		}

		tokenProvider, err = NewDeviceFlowTokenSourceProvider(baseTokenOrchestrator, cfg.DeviceFlowConfig)
		if err != nil {
			return nil, err
		}
	default:
		return nil, fmt.Errorf("unsupported type %v", cfg.AuthType)
	}

	return tokenProvider, nil
}

func resolveAuthMetadata(ctx context.Context, cfg *Config, authClient service.AuthMetadataServiceClient) (string, []string, string, error) {
	tokenURL := cfg.TokenURL
	if len(tokenURL) == 0 {
		metadata, err := authClient.GetOAuth2Metadata(ctx, &service.OAuth2MetadataRequest{})
		if err != nil {
			return "", nil, "", fmt.Errorf("failed to fetch auth metadata. Error: %v", err)
		}

		tokenURL = metadata.TokenEndpoint
	}

	scopes := cfg.Scopes
	audienceValue := cfg.Audience

	if len(scopes) == 0 || cfg.UseAudienceFromAdmin {
		publicClientConfig, err := authClient.GetPublicClientConfig(ctx, &service.PublicClientAuthConfigRequest{})
		if err != nil {
			return "", nil, "", fmt.Errorf("failed to fetch client metadata. Error: %v", err)
		}
		// Update scopes from publicClientConfig
		if len(scopes) == 0 {
			scopes = publicClientConfig.Scopes
		}
		// Update audience from publicClientConfig
		if cfg.UseAudienceFromAdmin {
			audienceValue = publicClientConfig.Audience
		}
	}
	return tokenURL, scopes, audienceValue, nil
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

func NewPKCETokenSourceProvider(baseTokenOrchestrator tokenorchestrator.BaseTokenOrchestrator, pkceCfg pkce.Config) (TokenSourceProvider, error) {
	tokenOrchestrator, err := pkce.NewTokenOrchestrator(baseTokenOrchestrator, pkceCfg)
	if err != nil {
		return nil, err
	}
	return PKCETokenSourceProvider{tokenOrchestrator: tokenOrchestrator}, nil
}

func (p PKCETokenSourceProvider) GetTokenSource(ctx context.Context) (oauth2.TokenSource, error) {
	return GetPKCEAuthTokenSource(ctx, p.tokenOrchestrator)
}

// Returns the token source which would be used for three legged oauth. eg : for admin to authorize access to flytectl
func GetPKCEAuthTokenSource(ctx context.Context, pkceTokenOrchestrator pkce.TokenOrchestrator) (oauth2.TokenSource, error) {
	// explicitly ignore error while fetching token from cache.
	authToken, err := pkceTokenOrchestrator.FetchTokenFromCacheOrRefreshIt(ctx, pkceTokenOrchestrator.Config.BrowserSessionTimeout)
	if err != nil {
		logger.Warnf(ctx, "Failed fetching from cache. Will restart the flow. Error: %v", err)
	}

	if authToken == nil {
		// Fetch using auth flow
		if authToken, err = pkceTokenOrchestrator.FetchTokenFromAuthFlow(ctx); err != nil {
			logger.Errorf(ctx, "Error fetching token using auth flow due to %v", err)
			return nil, err
		}
	}

	return &pkce.SimpleTokenSource{
		CachedToken: authToken,
	}, nil
}

type ClientCredentialsTokenSourceProvider struct {
	ccConfig           clientcredentials.Config
	tokenRefreshWindow time.Duration
	tokenCache         cache.TokenCache
}

func NewClientCredentialsTokenSourceProviderFromAPIKey(cfg *Config, scopes []string, tokenURL string,
	tokenCache cache.TokenCache, audience string) (TokenSourceProvider, error) {
	apiKey := os.Getenv(cfg.APIKeyEnvVar)
	if len(apiKey) == 0 && len(cfg.APIKeyLocation) == 0 {
		return nil, fmt.Errorf("API key is empty at Env Var [%v]", cfg.APIKeyEnvVar)
	}

	if len(apiKey) == 0 {
		raw, err := os.ReadFile(cfg.APIKeyLocation)
		if err != nil {
			return nil, fmt.Errorf("failed to read API Key from [%v]. Error: %w", cfg.APIKeyLocation, err)
		}

		apiKey = string(raw)
	}

	decoded, err := DecodeAPIKey(apiKey)
	if err != nil {
		return nil, fmt.Errorf("failed to decode API key. Error: %w", err)
	}

	return newClientCredentialsTokenSourceProvider(cfg, decoded.ClientID, decoded.Secret, scopes, tokenURL, tokenCache, audience)
}

func NewClientCredentialsTokenSourceProvider(ctx context.Context, cfg *Config, scopes []string, tokenURL string,
	tokenCache cache.TokenCache, audience string) (TokenSourceProvider, error) {
	var secret string
	if len(cfg.ClientSecretEnvVar) > 0 {
		secret = os.Getenv(cfg.ClientSecretEnvVar)
	} else if len(cfg.ClientSecretLocation) > 0 {
		secretBytes, err := os.ReadFile(cfg.ClientSecretLocation)
		if err != nil {
			logger.Errorf(ctx, "Error reading secret from location %s", cfg.ClientSecretLocation)
			return nil, err
		}
		secret = string(secretBytes)
	}

	return newClientCredentialsTokenSourceProvider(cfg, cfg.ClientID, secret, scopes, tokenURL, tokenCache, audience)
}

func newClientCredentialsTokenSourceProvider(cfg *Config, clientID, secret string, scopes []string, tokenURL string,
	tokenCache cache.TokenCache, audience string) (TokenSourceProvider, error) {
	endpointParams := url.Values{}
	if len(audience) > 0 {
		endpointParams = url.Values{audienceKey: {audience}}
	}
	secret = strings.TrimSpace(secret)
	if tokenCache == nil {
		tokenCache = &cache.TokenCacheInMemoryProvider{}
	}
	return ClientCredentialsTokenSourceProvider{
		ccConfig: clientcredentials.Config{
			ClientID:       clientID,
			ClientSecret:   secret,
			TokenURL:       tokenURL,
			Scopes:         scopes,
			EndpointParams: endpointParams,
		},
		tokenRefreshWindow: cfg.TokenRefreshWindow.Duration,
		tokenCache:         tokenCache,
	}, nil
}

func (p ClientCredentialsTokenSourceProvider) GetTokenSource(ctx context.Context) (oauth2.TokenSource, error) {
	if p.tokenRefreshWindow > 0 {
		source := p.ccConfig.TokenSource(ctx)
		refreshTime := time.Time{}
		if token, err := p.tokenCache.GetToken(); err == nil {
			refreshTime = token.Expiry.Add(-getRandomDuration(p.tokenRefreshWindow))
		}
		return &customTokenSource{
			ctx:                ctx,
			new:                source,
			mu:                 sync.Mutex{},
			tokenRefreshWindow: p.tokenRefreshWindow,
			tokenCache:         p.tokenCache,
			refreshTime:        refreshTime,
		}, nil
	}
	return p.ccConfig.TokenSource(ctx), nil
}

type customTokenSource struct {
	ctx                context.Context
	new                oauth2.TokenSource
	tokenRefreshWindow time.Duration
	mu                 sync.Mutex // guards everything else
	refreshTime        time.Time
	failedToRefresh    bool
	tokenCache         cache.TokenCache
}

// fetchTokenFromCache returns the cached token if available, and a bool indicating if we should try to refresh it.
// This function is not thread safe and should be called with the lock held.
func (s *customTokenSource) fetchTokenFromCache() (*oauth2.Token, bool) {
	token, err := s.tokenCache.GetToken()
	if err != nil {
		logger.Infof(s.ctx, "no token found in cache")
		return nil, false
	}
	if !token.Valid() {
		logger.Infof(s.ctx, "cached token invalid")
		return nil, false
	}
	if time.Now().After(s.refreshTime) && !s.failedToRefresh {
		logger.Infof(s.ctx, "cached token refresh window exceeded")
		return token, true
	}
	return token, false
}

func (s *customTokenSource) Token() (*oauth2.Token, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	cachedToken, needsRefresh := s.fetchTokenFromCache()
	if cachedToken != nil && !needsRefresh {
		return cachedToken, nil
	}

	token, err := s.new.Token()
	if err != nil {
		if needsRefresh {
			logger.Warnf(s.ctx, "failed to refresh token, using last cached token until expired")
			s.failedToRefresh = true
			return cachedToken, nil
		}
		logger.Errorf(s.ctx, "failed to refresh token")
		return nil, err
	}
	logger.Infof(s.ctx, "refreshed token")
	err = s.tokenCache.SaveToken(token)
	if err != nil {
		logger.Warnf(s.ctx, "failed to cache token, using anyway")
	}
	s.failedToRefresh = false
	s.refreshTime = token.Expiry.Add(-getRandomDuration(s.tokenRefreshWindow))
	return token, nil
}

// Get random duration between 0 and maxDuration
func getRandomDuration(maxDuration time.Duration) time.Duration {
	// d is 1.0 to 2.0 times maxDuration
	d := wait.Jitter(maxDuration, 1)
	return d - maxDuration
}

type DeviceFlowTokenSourceProvider struct {
	tokenOrchestrator deviceflow.TokenOrchestrator
}

func NewDeviceFlowTokenSourceProvider(baseTokenOrchestrator tokenorchestrator.BaseTokenOrchestrator, deviceFlowConfig deviceflow.Config) (TokenSourceProvider, error) {

	tokenOrchestrator, err := deviceflow.NewDeviceFlowTokenOrchestrator(baseTokenOrchestrator, deviceFlowConfig)
	if err != nil {
		return nil, err
	}

	return DeviceFlowTokenSourceProvider{tokenOrchestrator: tokenOrchestrator}, nil
}

func (p DeviceFlowTokenSourceProvider) GetTokenSource(ctx context.Context) (oauth2.TokenSource, error) {
	return GetDeviceFlowAuthTokenSource(ctx, p.tokenOrchestrator)
}

// GetDeviceFlowAuthTokenSource Returns the token source which would be used for device auth flow
func GetDeviceFlowAuthTokenSource(ctx context.Context, deviceFlowOrchestrator deviceflow.TokenOrchestrator) (oauth2.TokenSource, error) {
	// explicitly ignore error while fetching token from cache.
	authToken, err := deviceFlowOrchestrator.FetchTokenFromCacheOrRefreshIt(ctx, deviceFlowOrchestrator.Config.TokenRefreshGracePeriod)
	if err != nil {
		logger.Warnf(ctx, "Failed fetching from cache. Will restart the flow. Error: %v", err)
	}

	if authToken == nil {
		// Fetch using auth flow
		if authToken, err = deviceFlowOrchestrator.FetchTokenFromAuthFlow(ctx); err != nil {
			logger.Errorf(ctx, "Error fetching token using auth flow due to %v", err)
			return nil, err
		}
	}

	return &pkce.SimpleTokenSource{
		CachedToken: authToken,
	}, nil
}

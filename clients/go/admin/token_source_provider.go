package admin

import (
	"context"
	"fmt"
	"strings"

	"github.com/flyteorg/flyteidl/clients/go/admin/externalprocess"

	"github.com/flyteorg/flyteidl/clients/go/admin/pkce"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/flyteorg/flytestdlib/logger"
	"golang.org/x/oauth2"
)

// TokenSourceProvider defines the interface needed to provide a TokenSource that is used to
// create a client with authentication enabled.
type TokenSourceProvider interface {
	GetTokenSource(ctx context.Context) (oauth2.TokenSource, error)
}

func NewTokenSourceProvider(ctx context.Context, cfg *Config, tokenCache pkce.TokenCache,
	authClient service.AuthMetadataServiceClient) (TokenSourceProvider, error) {

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

	var tokenProvider TokenSourceProvider
	if cfg.AuthType == AuthTypeClientSecret {
		tokenProvider, err = NewClientCredentialsTokenSourceProvider(ctx, cfg, clientMetadata, tokenURL)
		if err != nil {
			return nil, err
		}
	} else if cfg.AuthType == AuthTypePkce {
		tokenProvider, err = NewPKCETokenSourceProvider(ctx, cfg.PkceConfig, tokenCache, authClient)
		if err != nil {
			return nil, err
		}
	} else if cfg.AuthType == AuthTypeExternalProcess {
		tokenProvider, err = NewExternalTokenSourceProvider(cfg.ExternalCommand)
		if err != nil {
			return nil, err
		}
	} else {
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

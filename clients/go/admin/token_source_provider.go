package admin

import (
	"context"
	"fmt"
	"github.com/flyteorg/flyteidl/clients/go/admin/pkce"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
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

	//var tSource oauth2.TokenSource
	var tokenProvider TokenSourceProvider
	if cfg.AuthType == AuthTypeClientSecret {
		tokenProvider, err = NewClientCredentialsTokenSourceProvider(ctx, cfg, clientMetadata, tokenURL)
		if err != nil {
			return nil, err
		}
	} else if cfg.AuthType == AuthTypePkce {
		tokenProvider, err = pkce.NewPKCETokenSourceProvider(ctx, cfg.PkceConfig, tokenCache, authClient)
		if err != nil {
			return nil, err
		}
	} else {
		return nil, fmt.Errorf("unsupported type %v", cfg.AuthType)
	}

	return tokenProvider, nil
}

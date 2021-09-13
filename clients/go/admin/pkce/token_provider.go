package pkce

import (
	"context"
	"github.com/flyteorg/flyteidl/clients/go/admin"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/flyteorg/flytestdlib/logger"
	"golang.org/x/oauth2"
)

type PkceTokenSourceProvider struct {
	tokenOrchestrator TokenOrchestrator
}

func NewPkceTokenSourceProvider(ctx context.Context, pkceCfg Config, tokenCache TokenCache, authClient service.AuthMetadataServiceClient) (admin.TokenSourceProvider, error) {

	tokenOrchestrator, err := NewTokenOrchestrator(ctx, pkceCfg, tokenCache, authClient)
	if err != nil {
		return nil, err
	}

	return PkceTokenSourceProvider{tokenOrchestrator: tokenOrchestrator}, nil
}

func (p PkceTokenSourceProvider) GetTokenSource(ctx context.Context) (oauth2.TokenSource, error) {
	return  getPkceAuthTokenSource(ctx, p.tokenOrchestrator)
}

func (p PkceTokenSourceProvider) GetAuthType() admin.AuthType{
	return admin.AuthTypePkce
}



// Returns the token source which would be used for three legged oauth. eg : for admin to authorize access to flytectl
func getPkceAuthTokenSource(ctx context.Context, tokenOrchestrator TokenOrchestrator) (oauth2.TokenSource, error) {
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

	return &SimpleTokenSource{
		CachedToken: authToken,
	}, nil
}

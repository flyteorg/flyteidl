package interfaces

import (
	"context"

	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"

	"golang.org/x/oauth2"
)

//go:generate mockery -all -case=underscore

type FetchTokenOrchestrator interface {
	RefreshTheToken(ctx context.Context, clientConf *oauth2.Config, token *oauth2.Token) (*oauth2.Token, error)
	FetchTokenFromCacheOrRefreshIt(ctx context.Context) (*oauth2.Token, error)
	FetchTokenFromAuthFlow(ctx context.Context, authMetadataClient service.AuthMetadataServiceClient) (*oauth2.Token, error)
}

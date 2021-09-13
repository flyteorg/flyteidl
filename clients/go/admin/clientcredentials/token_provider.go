package clientcredentials

import (
	"context"
	"github.com/flyteorg/flyteidl/clients/go/admin"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/flyteorg/flytestdlib/logger"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/clientcredentials"
	"io/ioutil"
	"strings"
)

type ClientCredentialsTokenSourceProvider struct {
	ccConfig clientcredentials.Config
}

func NewClientCredentialsTokenSourceProvider(ctx context.Context, cfg *admin.Config,
	clientMetadata *service.PublicClientAuthConfigResponse, tokenURL string) (admin.TokenSourceProvider, error) {

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
			ClientID: cfg.ClientID,
			ClientSecret: secret,
			TokenURL: tokenURL,
			Scopes: scopes}}, nil
}

func (p ClientCredentialsTokenSourceProvider) GetTokenSource(ctx context.Context) (oauth2.TokenSource, error) {
	return p.ccConfig.TokenSource(ctx), nil
}

func (p ClientCredentialsTokenSourceProvider) GetAuthType() admin.AuthType {
	return admin.AuthTypeClientSecret
}


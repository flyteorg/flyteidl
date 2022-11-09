package admin

import (
	"context"
	"net/url"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"golang.org/x/oauth2"

	tokenCacheMocks "github.com/flyteorg/flyteidl/clients/go/admin/cache/mocks"
	adminMocks "github.com/flyteorg/flyteidl/clients/go/admin/mocks"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
)

type DummyTestTokenSource struct {
	oauth2.TokenSource
}

func (d DummyTestTokenSource) Token() (*oauth2.Token, error) {
	return &oauth2.Token{
		AccessToken: "abc",
	}, nil
}

func TestNewTokenSource(t *testing.T) {
	tokenSource := DummyTestTokenSource{}
	flyteTokenSource := NewCustomHeaderTokenSource(tokenSource, true, "test")
	metadata, err := flyteTokenSource.GetRequestMetadata(context.Background())
	assert.NoError(t, err)
	assert.Equal(t, "Bearer abc", metadata["test"])
}

func TestNewTokenSourceProvider(t *testing.T) {
	ctx := context.Background()

	t.Run("audience from client config", func(t *testing.T) {
		cfg := GetConfig(ctx)
		tokenCache := &tokenCacheMocks.TokenCache{}
		metadataClient := &adminMocks.AuthMetadataServiceClient{}
		metadataClient.OnGetOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(&service.OAuth2MetadataResponse{}, nil)
		metadataClient.OnGetPublicClientConfigMatch(mock.Anything, mock.Anything).Return(&service.PublicClientAuthConfigResponse{}, nil)
		cfg.AuthType = AuthTypeClientSecret
		cfg.Audience = "aud"
		cfg.Scopes = []string{"all"}
		flyteTokenSource, err := NewTokenSourceProvider(ctx, cfg, tokenCache, metadataClient)
		assert.NoError(t, err)
		assert.NotNil(t, flyteTokenSource)
		clientCredSourceProvider, ok := flyteTokenSource.(ClientCredentialsTokenSourceProvider)
		assert.True(t, ok)
		assert.Equal(t, []string{"all"}, clientCredSourceProvider.ccConfig.Scopes)
		assert.Equal(t, url.Values{audienceKey: {"aud"}}, clientCredSourceProvider.ccConfig.EndpointParams)
	})
	t.Run("audience from public client response", func(t *testing.T) {
		cfg := GetConfig(ctx)
		tokenCache := &tokenCacheMocks.TokenCache{}
		metadataClient := &adminMocks.AuthMetadataServiceClient{}
		metadataClient.OnGetOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(&service.OAuth2MetadataResponse{}, nil)
		metadataClient.OnGetPublicClientConfigMatch(mock.Anything, mock.Anything).Return(&service.PublicClientAuthConfigResponse{Audience: "aud", Scopes: []string{"all"}}, nil)
		cfg.AuthType = AuthTypeClientSecret
		cfg.Audience = ""
		cfg.Scopes = []string{}
		flyteTokenSource, err := NewTokenSourceProvider(ctx, cfg, tokenCache, metadataClient)
		assert.NoError(t, err)
		assert.NotNil(t, flyteTokenSource)
		clientCredSourceProvider, ok := flyteTokenSource.(ClientCredentialsTokenSourceProvider)
		assert.True(t, ok)
		assert.Equal(t, []string{"all"}, clientCredSourceProvider.ccConfig.Scopes)
		assert.Equal(t, url.Values{audienceKey: {"aud"}}, clientCredSourceProvider.ccConfig.EndpointParams)
	})
}

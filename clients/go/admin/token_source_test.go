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
	tests := []struct {
		name                 string
		audienceCfg          string
		scopesCfg            []string
		clientConfigResponse service.PublicClientAuthConfigResponse
		expectedAudience     string
		expectedScopes       []string
	}{
		{
			name:                 "audience from client config",
			audienceCfg:          "aud",
			scopesCfg:            []string{"all"},
			clientConfigResponse: service.PublicClientAuthConfigResponse{},
			expectedAudience:     "aud",
			expectedScopes:       []string{"all"},
		},
		{
			name:                 "audience from public client response",
			audienceCfg:          "",
			scopesCfg:            []string{},
			clientConfigResponse: service.PublicClientAuthConfigResponse{Audience: "aud", Scopes: []string{"all"}},
			expectedAudience:     "aud",
			expectedScopes:       []string{"all"},
		},
	}
	for _, test := range tests {
		t.Run("audience from client config", func(t *testing.T) {
			cfg := GetConfig(ctx)
			tokenCache := &tokenCacheMocks.TokenCache{}
			metadataClient := &adminMocks.AuthMetadataServiceClient{}
			metadataClient.OnGetOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(&service.OAuth2MetadataResponse{}, nil)
			metadataClient.OnGetPublicClientConfigMatch(mock.Anything, mock.Anything).Return(&test.clientConfigResponse, nil)
			cfg.AuthType = AuthTypeClientSecret
			cfg.Audience = test.audienceCfg
			cfg.Scopes = test.scopesCfg
			flyteTokenSource, err := NewTokenSourceProvider(ctx, cfg, tokenCache, metadataClient)
			assert.NoError(t, err)
			assert.NotNil(t, flyteTokenSource)
			clientCredSourceProvider, ok := flyteTokenSource.(ClientCredentialsTokenSourceProvider)
			assert.True(t, ok)
			assert.Equal(t, test.expectedScopes, clientCredSourceProvider.ccConfig.Scopes)
			assert.Equal(t, url.Values{audienceKey: {test.expectedAudience}}, clientCredSourceProvider.ccConfig.EndpointParams)
		})
	}
}

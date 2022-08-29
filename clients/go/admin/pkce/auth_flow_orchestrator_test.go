package pkce

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"os"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"golang.org/x/oauth2"

	"github.com/flyteorg/flyteidl/clients/go/admin/cache"
	"github.com/flyteorg/flyteidl/clients/go/admin/mocks"
	"github.com/flyteorg/flyteidl/clients/go/admin/oauth"
	pkceMocks "github.com/flyteorg/flyteidl/clients/go/admin/pkce/mocks"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/flyteorg/flytestdlib/config"
)

func TestRefreshTheToken(t *testing.T) {
	ctx := context.Background()
	clientConf := &oauth.Config{
		Config: &oauth2.Config{
			ClientID: "dummyClient",
		},
	}
	orchestrator := TokenOrchestrator{
		clientConfig: clientConf,
	}
	plan, _ := ioutil.ReadFile("testdata/token.json")
	var tokenData oauth2.Token
	err := json.Unmarshal(plan, &tokenData)
	assert.Nil(t, err)
	t.Run("bad url in config", func(t *testing.T) {
		refreshedToken, err := orchestrator.RefreshToken(ctx, &tokenData)
		assert.Nil(t, refreshedToken)
		assert.NotNil(t, err)
	})
}

func TestFetchFromCache(t *testing.T) {
	ctx := context.Background()
	metatdata := &service.OAuth2MetadataResponse{
		TokenEndpoint:   "/token",
		ScopesSupported: []string{"code", "all"},
	}
	clientMetatadata := &service.PublicClientAuthConfigResponse{
		AuthorizationMetadataKey: "flyte_authorization",
		RedirectUri:              "http://localhost:8089/redirect",
	}
	mockAuthClient := new(mocks.AuthMetadataServiceClient)
	mockAuthClient.OnGetOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(metatdata, nil)
	mockAuthClient.OnGetPublicClientConfigMatch(mock.Anything, mock.Anything).Return(clientMetatadata, nil)

	t.Run("no token in cache", func(t *testing.T) {
		tokenCacheProvider := &cache.TokenCacheInMemoryProvider{}
		orchestrator, err := NewTokenOrchestrator(ctx, Config{}, tokenCacheProvider, mockAuthClient)
		assert.NoError(t, err)
		refreshedToken, err := orchestrator.FetchTokenFromCacheOrRefreshIt(ctx)
		assert.Nil(t, refreshedToken)
		assert.NotNil(t, err)
	})

	t.Run("token in cache", func(t *testing.T) {
		tokenCacheProvider := &cache.TokenCacheInMemoryProvider{}
		orchestrator, err := NewTokenOrchestrator(ctx, Config{}, tokenCacheProvider, mockAuthClient)
		assert.NoError(t, err)
		fileData, _ := os.ReadFile("testdata/token.json")
		var tokenData oauth2.Token
		err = json.Unmarshal(fileData, &tokenData)
		assert.Nil(t, err)
		tokenData.Expiry = time.Now().Add(5 * time.Minute)
		err = tokenCacheProvider.SaveToken(&tokenData)
		assert.Nil(t, err)
		cachedToken, err := orchestrator.FetchTokenFromCacheOrRefreshIt(ctx)
		assert.Nil(t, err)
		assert.NotNil(t, cachedToken)
		assert.Equal(t, tokenData.AccessToken, cachedToken.AccessToken)
	})

	t.Run("expired token in cache", func(t *testing.T) {
		tokenCacheProvider := &cache.TokenCacheInMemoryProvider{}
		orchestrator, err := NewTokenOrchestrator(ctx, Config{}, tokenCacheProvider, mockAuthClient)
		assert.NoError(t, err)
		fileData, _ := os.ReadFile("testdata/token.json")
		var tokenData oauth2.Token
		err = json.Unmarshal(fileData, &tokenData)
		assert.Nil(t, err)
		tokenData.Expiry = time.Now().Add(-20 * time.Minute)
		err = tokenCacheProvider.SaveToken(&tokenData)
		assert.Nil(t, err)
		_, err = orchestrator.FetchTokenFromCacheOrRefreshIt(ctx)
		assert.NotNil(t, err)
	})

	t.Run("token fetch before grace period", func(t *testing.T) {
		mockTokenCacheProvider := new(pkceMocks.TokenCache)
		orchestrator, err := NewTokenOrchestrator(ctx, Config{
			TokenRefreshGracePeriod: config.Duration{Duration: 5 * time.Minute},
		}, mockTokenCacheProvider, mockAuthClient)
		assert.NoError(t, err)
		fileData, _ := os.ReadFile("testdata/token.json")
		var tokenData oauth2.Token
		err = json.Unmarshal(fileData, &tokenData)
		assert.Nil(t, err)
		tokenData.Expiry = time.Now().Add(20 * time.Minute)
		mockTokenCacheProvider.OnGetTokenMatch(mock.Anything).Return(&tokenData, nil)
		mockTokenCacheProvider.OnSaveTokenMatch(mock.Anything).Return(nil)
		assert.Nil(t, err)
		refreshedToken, err := orchestrator.FetchTokenFromCacheOrRefreshIt(ctx)
		assert.Nil(t, err)
		assert.NotNil(t, refreshedToken)
		mockTokenCacheProvider.AssertNotCalled(t, "SaveToken")
	})

	t.Run("token fetch after grace period with refresh", func(t *testing.T) {
		mockTokenCacheProvider := new(pkceMocks.TokenCache)
		orchestrator, err := NewTokenOrchestrator(ctx, Config{
			TokenRefreshGracePeriod: config.Duration{Duration: 5 * time.Minute},
		}, mockTokenCacheProvider, mockAuthClient)
		assert.NoError(t, err)
		fileData, _ := os.ReadFile("testdata/token.json")
		var tokenData oauth2.Token
		err = json.Unmarshal(fileData, &tokenData)
		assert.Nil(t, err)
		tokenData.Expiry = time.Now().Add(20 * time.Minute)
		mockTokenCacheProvider.OnGetTokenMatch(mock.Anything).Return(&tokenData, nil)
		assert.Nil(t, err)
		refreshedToken, err := orchestrator.FetchTokenFromCacheOrRefreshIt(ctx)
		assert.Nil(t, err)
		assert.NotNil(t, refreshedToken)
		mockTokenCacheProvider.AssertNotCalled(t, "SaveToken")
	})
}

func TestFetchFromAuthFlow(t *testing.T) {
	ctx := context.Background()
	t.Run("fetch from auth flow", func(t *testing.T) {
		metatdata := &service.OAuth2MetadataResponse{
			TokenEndpoint:   "/token",
			ScopesSupported: []string{"code", "all"},
		}
		clientMetatadata := &service.PublicClientAuthConfigResponse{
			AuthorizationMetadataKey: "flyte_authorization",
			RedirectUri:              "http://localhost:8089/redirect",
		}

		mockAuthClient := new(mocks.AuthMetadataServiceClient)
		mockAuthClient.OnGetOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(metatdata, nil)
		mockAuthClient.OnGetPublicClientConfigMatch(mock.Anything, mock.Anything).Return(clientMetatadata, nil)
		tokenCache := &cache.TokenCacheInMemoryProvider{}
		orchestrator, err := NewTokenOrchestrator(ctx, Config{}, tokenCache, mockAuthClient)
		assert.NoError(t, err)
		refreshedToken, err := orchestrator.FetchTokenFromAuthFlow(ctx)
		assert.Nil(t, refreshedToken)
		assert.NotNil(t, err)
	})
}

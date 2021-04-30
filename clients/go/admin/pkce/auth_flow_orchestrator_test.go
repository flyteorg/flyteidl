package pkce

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"testing"
	"time"

	"github.com/flyteorg/flyteidl/clients/go/admin/mocks"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/flyteorg/flytestdlib/config"

	"github.com/dgrijalva/jwt-go"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"golang.org/x/oauth2"
)

func TestRefreshTheToken(t *testing.T) {
	ctx := context.Background()
	clientConf := &oauth2.Config{
		ClientID: "dummyClient",
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
	tokenCacheProvider := &TokenCacheInMemoryProvider{}
	orchestrator, err := NewTokenOrchestrator(ctx, Config{TokenRefreshDelta: config.Duration{Duration: time.Second}}, tokenCacheProvider, mockAuthClient)
	assert.NoError(t, err)

	t.Run("no token in cache", func(t *testing.T) {
		refreshedToken, err := orchestrator.FetchTokenFromCacheOrRefreshIt(ctx)
		assert.Nil(t, refreshedToken)
		assert.NotNil(t, err)
	})

	// Returns the same token from cache
	t.Run("access token valid and refresh token valid", func(t *testing.T) {
		currTime := time.Now()
		tokenExpiry := currTime.Add(time.Minute)
		refreshTokenExpiry := currTime.Add(2 * time.Minute)
		accesToken := CreateToken(tokenExpiry)
		refreshToken := CreateToken(refreshTokenExpiry)
		token := &oauth2.Token{
			AccessToken:  accesToken,
			RefreshToken: refreshToken,
			Expiry:       refreshTokenExpiry,
			TokenType:    "bearer",
		}
		_ = tokenCacheProvider.SaveToken(token)
		refreshedToken, err := orchestrator.FetchTokenFromCacheOrRefreshIt(ctx)
		assert.NotNil(t, refreshedToken)
		assert.Equal(t, refreshedToken, token)
		assert.Nil(t, err)
	})

	t.Run("access token expired and refresh token valid will try refresh", func(t *testing.T) {
		currTime := time.Now()
		tokenExpiry := currTime.Add(-time.Minute)
		refreshTokenExpiry := currTime.Add(time.Minute)
		accesToken := CreateToken(tokenExpiry)
		refreshToken := CreateToken(refreshTokenExpiry)
		token := &oauth2.Token{
			AccessToken:  accesToken,
			RefreshToken: refreshToken,
			Expiry:       refreshTokenExpiry,
			TokenType:    "bearer",
		}
		_ = tokenCacheProvider.SaveToken(token)
		refreshedToken, err := orchestrator.FetchTokenFromCacheOrRefreshIt(ctx)
		assert.Nil(t, refreshedToken)
		assert.NotNil(t, err)
	})

	t.Run("access token expired and refresh token expired will return nil", func(t *testing.T) {
		currTime := time.Now()
		tokenExpiry := currTime.Add(-2 * time.Minute)
		refreshTokenExpiry := currTime.Add(-time.Minute)
		accesToken := CreateToken(tokenExpiry)
		refreshToken := CreateToken(refreshTokenExpiry)
		token := &oauth2.Token{
			AccessToken:  accesToken,
			RefreshToken: refreshToken,
			Expiry:       refreshTokenExpiry,
			TokenType:    "bearer",
		}
		_ = tokenCacheProvider.SaveToken(token)
		refreshedToken, err := orchestrator.FetchTokenFromCacheOrRefreshIt(ctx)
		assert.Nil(t, refreshedToken)
		assert.NotNil(t, err)
	})
}

func CreateToken(expiryTime time.Time) string {
	atClaims := jwt.MapClaims{}
	atClaims["authorized"] = true
	atClaims["user_id"] = 1
	atClaims["exp"] = expiryTime.Unix()
	tokenString, _ := jwt.NewWithClaims(jwt.SigningMethodHS256, atClaims).SigningString()
	return tokenString
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
		tokenCache := &TokenCacheInMemoryProvider{}
		orchestrator, err := NewTokenOrchestrator(ctx, Config{}, tokenCache, mockAuthClient)
		assert.NoError(t, err)
		refreshedToken, err := orchestrator.FetchTokenFromAuthFlow(ctx)
		assert.Nil(t, refreshedToken)
		assert.NotNil(t, err)
	})
}

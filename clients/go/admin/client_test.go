package admin

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"sync"
	"testing"
	"time"

	"github.com/flyteorg/flyteidl/clients/go/admin/pkce"

	"github.com/flyteorg/flyteidl/clients/go/admin/mocks"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/flyteorg/flytestdlib/config"
	"github.com/flyteorg/flytestdlib/logger"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"golang.org/x/oauth2"
)

func TestInitializeAndGetAdminClient(t *testing.T) {

	ctx := context.TODO()
	t.Run("legal", func(t *testing.T) {
		u, err := url.Parse("http://localhost:8089")
		assert.NoError(t, err)
		assert.NotNil(t, InitializeAdminClient(ctx, &Config{
			Endpoint: config.URL{URL: *u},
		}))
	})

	t.Run("illegal", func(t *testing.T) {
		once = sync.Once{}
		assert.NotNil(t, InitializeAdminClient(ctx, &Config{}))
	})
}

func TestInitializeMockClientset(t *testing.T) {
	c := InitializeMockClientset()
	assert.NotNil(t, c)
	assert.NotNil(t, c.adminServiceClient)
	assert.NotNil(t, c.authMetadataServiceClient)
}

func TestInitializeMockAdminClient(t *testing.T) {
	c := InitializeMockAdminClient()
	assert.NotNil(t, c)
}

func TestGetAdditionalAdminClientConfigOptions(t *testing.T) {
	u, _ := url.Parse("localhost:8089")
	adminServiceConfig := &Config{
		Endpoint:              config.URL{URL: *u},
		UseInsecureConnection: true,
		PerRetryTimeout:       config.Duration{Duration: 1 * time.Second},
	}

	assert.NoError(t, SetConfig(adminServiceConfig))

	ctx := context.Background()
	t.Run("legal", func(t *testing.T) {
		u, err := url.Parse("http://localhost:8089")
		assert.NoError(t, err)
		clientSet, err := InitializeClients(ctx, &Config{Endpoint: config.URL{URL: *u}})
		assert.NoError(t, err)
		assert.NotNil(t, clientSet)
		assert.NotNil(t, clientSet.AdminClient())
		assert.NotNil(t, clientSet.AuthMetadataClient())
		assert.NotNil(t, clientSet.IdentityClient())
	})

	t.Run("legal-from-config", func(t *testing.T) {
		clientSet, err := InitializeClientsFromConfig(ctx)
		assert.NoError(t, err)
		assert.NotNil(t, clientSet)
		assert.NotNil(t, clientSet.AuthMetadataClient())
		assert.NotNil(t, clientSet.AdminClient())
	})
}

func TestGetAuthenticationDialOptionClientSecret(t *testing.T) {
	ctx := context.Background()

	u, _ := url.Parse("localhost:8089")
	adminServiceConfig := &Config{
		ClientSecretLocation:  "testdata/secret_key",
		Endpoint:              config.URL{URL: *u},
		UseInsecureConnection: true,
		AuthType:              AuthTypeClientSecret,
		PerRetryTimeout:       config.Duration{Duration: 1 * time.Second},
	}
	t.Run("legal", func(t *testing.T) {
		metatdata := &service.OAuth2MetadataResponse{
			TokenEndpoint:   "/token",
			ScopesSupported: []string{"code", "all"},
		}
		clientMetatadata := &service.PublicClientAuthConfigResponse{
			AuthorizationMetadataKey: "flyte_authorization",
		}
		mockAuthClient := new(mocks.AuthMetadataServiceClient)
		mockAuthClient.OnGetOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(metatdata, nil)
		mockAuthClient.OnGetPublicClientConfigMatch(mock.Anything, mock.Anything).Return(clientMetatadata, nil)
		dialOption, err := getAuthenticationDialOption(ctx, adminServiceConfig, mockAuthClient)
		assert.NotNil(t, dialOption)
		assert.Nil(t, err)
	})
	t.Run("error during oauth2Metatdata", func(t *testing.T) {
		mockAuthClient := new(mocks.AuthMetadataServiceClient)
		mockAuthClient.OnGetOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(nil, fmt.Errorf("failed"))
		dialOption, err := getAuthenticationDialOption(ctx, adminServiceConfig, mockAuthClient)
		assert.Nil(t, dialOption)
		assert.NotNil(t, err)
	})
	t.Run("error during flyte client", func(t *testing.T) {
		metatdata := &service.OAuth2MetadataResponse{
			TokenEndpoint:   "/token",
			ScopesSupported: []string{"code", "all"},
		}
		mockAuthClient := new(mocks.AuthMetadataServiceClient)
		mockAuthClient.OnGetOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(metatdata, nil)
		mockAuthClient.OnGetPublicClientConfigMatch(mock.Anything, mock.Anything).Return(nil, fmt.Errorf("failed"))
		dialOption, err := getAuthenticationDialOption(ctx, adminServiceConfig, mockAuthClient)
		assert.Nil(t, dialOption)
		assert.NotNil(t, err)
	})
	incorrectSecretLocConfig := &Config{
		ClientSecretLocation:  "testdata/secret_key_invalid",
		Endpoint:              config.URL{URL: *u},
		UseInsecureConnection: true,
		AuthType:              AuthTypeClientSecret,
		PerRetryTimeout:       config.Duration{Duration: 1 * time.Second},
	}
	t.Run("incorrect client secret loc", func(t *testing.T) {
		metatdata := &service.OAuth2MetadataResponse{
			TokenEndpoint:   "/token",
			ScopesSupported: []string{"code", "all"},
		}
		clientMetatadata := &service.PublicClientAuthConfigResponse{
			AuthorizationMetadataKey: "flyte_authorization",
		}
		mockAuthClient := new(mocks.AuthMetadataServiceClient)
		mockAuthClient.OnGetOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(metatdata, nil)
		mockAuthClient.OnGetPublicClientConfigMatch(mock.Anything, mock.Anything).Return(clientMetatadata, nil)
		dialOption, err := getAuthenticationDialOption(ctx, incorrectSecretLocConfig, mockAuthClient)
		assert.Nil(t, dialOption)
		assert.NotNil(t, err)
	})
}

func Test_getPkceAuthTokenSource(t *testing.T) {
	ctx := context.Background()
	mockAuthClient := new(mocks.AuthMetadataServiceClient)
	metatdata := &service.OAuth2MetadataResponse{
		TokenEndpoint:   "http://localhost:8089/token",
		ScopesSupported: []string{"code", "all"},
	}

	clientMetatadata := &service.PublicClientAuthConfigResponse{
		AuthorizationMetadataKey: "flyte_authorization",
		RedirectUri:              "http://localhost:54545/callback",
	}

	mockAuthClient.OnGetOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(metatdata, nil)
	mockAuthClient.OnGetPublicClientConfigMatch(mock.Anything, mock.Anything).Return(clientMetatadata, nil)

	t.Run("cached token expired", func(t *testing.T) {
		plan, _ := ioutil.ReadFile("pkce/testdata/token.json")
		var tokenData oauth2.Token
		err := json.Unmarshal(plan, &tokenData)
		assert.NoError(t, err)

		// populate the cache
		tokenCache := &pkce.TokenCacheInMemoryProvider{}
		assert.NoError(t, tokenCache.SaveToken(&tokenData))

		orchestrator, err := pkce.NewTokenOrchestrator(ctx, tokenCache, mockAuthClient)
		assert.NoError(t, err)

		http.DefaultServeMux = http.NewServeMux()
		dialOption, err := getPkceAuthTokenSource(ctx, orchestrator)
		assert.Nil(t, dialOption)
		assert.Error(t, err)
	})
}

func ExampleInitializeClients() {
	// Create an AuthClient
	ctx := context.Background()
	cfg := GetConfig(ctx)
	client, err := InitializeAuthMetadataClient(ctx, cfg)
	if err != nil {
		logger.Fatalf(ctx, "failed to initialize auth metadata client. Error: %v", err)
	}

	// To use 2-legged (aka service) OAuth2:
	opts, err := getAuthenticationDialOption(ctx, cfg, client)
	if err != nil {
		logger.Fatalf(ctx, "failed to build service auth dial option. Error: %v", err)
	}

	// Initialize ClientSet from config
	clientSet, err := InitializeClients(ctx, cfg, opts)
	if err != nil {
		logger.Fatalf(ctx, "failed to innitialize clientset from config. Error: %v", err)
	}

	// Access and use the desired client:
	_ = clientSet.AdminClient()
	_ = clientSet.AuthMetadataClient()
	_ = clientSet.IdentityClient()
}

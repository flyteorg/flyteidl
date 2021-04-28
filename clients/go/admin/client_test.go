package admin

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/url"
	"sync"
	"testing"
	"time"

	"github.com/flyteorg/flyteidl/clients/go/admin/mocks"
	mcokauthinterfaces "github.com/flyteorg/flyteidl/clients/go/admin/threelegauth/interfaces/mocks"
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
		AuthType:              "CLIENTSECRET",
		PerRetryTimeout:       config.Duration{Duration: 1 * time.Second},
	}
	t.Run("legal", func(t *testing.T) {
		metatdata := &service.OAuth2MetadataResponse{
			TokenEndpoint:   "/token",
			ScopesSupported: []string{"code", "all"},
		}
		clientMetatadata := &service.FlyteClientResponse{
			AuthorizationMetadataKey: "flyte_authorization",
		}
		mockAuthClient := new(mocks.AuthMetadataServiceClient)
		mockAuthClient.OnOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(metatdata, nil)
		mockAuthClient.OnFlyteClientMatch(mock.Anything, mock.Anything).Return(clientMetatadata, nil)
		dialOption, err := getAuthenticationDialOption(ctx, adminServiceConfig, mockAuthClient)
		assert.NotNil(t, dialOption)
		assert.Nil(t, err)
	})
	t.Run("error during oauth2Metatdata", func(t *testing.T) {
		mockAuthClient := new(mocks.AuthMetadataServiceClient)
		mockAuthClient.OnOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(nil, fmt.Errorf("failed"))
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
		mockAuthClient.OnOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(metatdata, nil)
		mockAuthClient.OnFlyteClientMatch(mock.Anything, mock.Anything).Return(nil, fmt.Errorf("failed"))
		dialOption, err := getAuthenticationDialOption(ctx, adminServiceConfig, mockAuthClient)
		assert.Nil(t, dialOption)
		assert.NotNil(t, err)
	})
	incorrectSecretLocConfig := &Config{
		ClientSecretLocation:  "testdata/secret_key_invalid",
		Endpoint:              config.URL{URL: *u},
		UseInsecureConnection: true,
		AuthType:              "CLIENTSECRET",
		PerRetryTimeout:       config.Duration{Duration: 1 * time.Second},
	}
	t.Run("incorrect client secret loc", func(t *testing.T) {
		metatdata := &service.OAuth2MetadataResponse{
			TokenEndpoint:   "/token",
			ScopesSupported: []string{"code", "all"},
		}
		clientMetatadata := &service.FlyteClientResponse{
			AuthorizationMetadataKey: "flyte_authorization",
		}
		mockAuthClient := new(mocks.AuthMetadataServiceClient)
		mockAuthClient.OnOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(metatdata, nil)
		mockAuthClient.OnFlyteClientMatch(mock.Anything, mock.Anything).Return(clientMetatadata, nil)
		dialOption, err := getAuthenticationDialOption(ctx, incorrectSecretLocConfig, mockAuthClient)
		assert.Nil(t, dialOption)
		assert.NotNil(t, err)
	})
}

func TestGetAuthenticationDialOptionThreeLegAuth(t *testing.T) {
	ctx := context.Background()
	mockAuthClient := new(mocks.AuthMetadataServiceClient)
	u, _ := url.Parse("localhost:8089")
	adminServiceConfig := &Config{
		Endpoint:              config.URL{URL: *u},
		UseInsecureConnection: true,
		AuthType:              "THREELEGGEDAUTH",
		PerRetryTimeout:       config.Duration{Duration: 1 * time.Second},
	}
	metatdata := &service.OAuth2MetadataResponse{
		TokenEndpoint:   "/token",
		ScopesSupported: []string{"code", "all"},
	}
	clientMetatadata := &service.FlyteClientResponse{
		AuthorizationMetadataKey: "flyte_authorization",
	}
	mockAuthClient.OnOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(metatdata, nil)
	mockAuthClient.OnFlyteClientMatch(mock.Anything, mock.Anything).Return(clientMetatadata, nil)
	t.Run("legal from cache", func(t *testing.T) {
		mockTokenOrchestrator := &mcokauthinterfaces.FetchTokenOrchestrator{}
		defaultTokenOrchestrator = mockTokenOrchestrator
		plan, _ := ioutil.ReadFile("threelegauth/testdata/token.json")
		var tokenData oauth2.Token
		err := json.Unmarshal(plan, &tokenData)
		assert.Nil(t, err)
		mockTokenOrchestrator.OnFetchTokenFromCacheOrRefreshItMatch(mock.Anything, mock.Anything).Return(&tokenData)
		dialOption, err := getAuthenticationDialOption(ctx, adminServiceConfig, mockAuthClient)
		assert.NotNil(t, dialOption)
		assert.Nil(t, err)
	})
	t.Run("legal from auth flow", func(t *testing.T) {
		mockTokenOrchestrator := &mcokauthinterfaces.FetchTokenOrchestrator{}
		defaultTokenOrchestrator = mockTokenOrchestrator
		plan, _ := ioutil.ReadFile("threelegauth/testdata/token.json")
		var tokenData oauth2.Token
		err := json.Unmarshal(plan, &tokenData)
		assert.Nil(t, err)
		mockTokenOrchestrator.OnFetchTokenFromCacheOrRefreshItMatch(mock.Anything, mock.Anything).Return(nil)
		mockTokenOrchestrator.OnFetchTokenFromAuthFlowMatch(mock.Anything, mock.Anything).Return(&tokenData, nil)
		dialOption, err := getAuthenticationDialOption(ctx, adminServiceConfig, mockAuthClient)
		assert.NotNil(t, dialOption)
		assert.Nil(t, err)
	})
	t.Run("illegal", func(t *testing.T) {
		mockTokenOrchestrator := &mcokauthinterfaces.FetchTokenOrchestrator{}
		defaultTokenOrchestrator = mockTokenOrchestrator
		mockTokenOrchestrator.OnFetchTokenFromCacheOrRefreshItMatch(mock.Anything, mock.Anything).Return(nil)
		mockTokenOrchestrator.OnFetchTokenFromAuthFlowMatch(mock.Anything, mock.Anything).Return(nil, fmt.Errorf("fail"))
		dialOption, err := getAuthenticationDialOption(ctx, adminServiceConfig, mockAuthClient)
		assert.Nil(t, dialOption)
		assert.NotNil(t, err)
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
	opts, err := NewServiceAuthDialOptions(ctx, cfg, client)
	if err != nil {
		logger.Fatalf(ctx, "failed to build service auth dial option. Error: %v", err)
	}

	// Initialize ClientSet from config
	clientSet, err := InitializeClients(ctx, cfg, opts...)
	if err != nil {
		logger.Fatalf(ctx, "failed to innitialize clientset from config. Error: %v", err)
	}

	// Access and use the desired client:
	_ = clientSet.AdminClient()
	_ = clientSet.AuthMetadataClient()
	_ = clientSet.IdentityClient()
}

package admin

import (
	"context"
	"net/url"
	"sync"
	"testing"
	"time"

	"github.com/flyteorg/flytestdlib/logger"

	"github.com/flyteorg/flytestdlib/config"
	"github.com/stretchr/testify/assert"
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

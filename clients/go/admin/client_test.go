package admin

import (
	"context"
	"net/url"
	"sync"
	"testing"
	"time"

	"github.com/flyteorg/flytestdlib/config"

	"github.com/stretchr/testify/assert"
)

func TestInitializeAndGetAdminClient(t *testing.T) {

	ctx := context.TODO()
	t.Run("legal", func(t *testing.T) {
		u, err := url.Parse("http://localhost:8089")
		assert.NoError(t, err)
		assert.NotNil(t, InitializeAdminClient(ctx, Config{
			Endpoint: config.URL{URL: *u},
		}))
	})

	t.Run("legal-from-config", func(t *testing.T) {
		authClient, err := InitializeAdminClientFromConfig(ctx)
		assert.NoError(t, err)
		assert.NotNil(t, authClient)
	})

	t.Run("illegal", func(t *testing.T) {
		adminConnection = nil
		once = sync.Once{}
		assert.NotNil(t, InitializeAdminClient(ctx, Config{}))
	})
}

func TestInitializeMockAdminClient(t *testing.T) {
	c := InitializeMockAdminClient()
	assert.NotNil(t, c)
}

func TestInitializeMockClientset(t *testing.T) {
	c := InitializeMockClientset()
	assert.NotNil(t, c)
	assert.NotNil(t, c.AdminServiceClient)
	assert.NotNil(t, c.AuthServiceClient)
}

func TestGetAdditionalAdminClientConfigOptions(t *testing.T) {
	u, _ := url.Parse("localhost:8089")
	adminServiceConfig := Config{
		Endpoint:              config.URL{URL: *u},
		UseInsecureConnection: true,
		PerRetryTimeout:       config.Duration{Duration: 1 * time.Second},
		MaxRetries:            1,
	}
	opts := GetAdditionalAdminClientConfigOptions(adminServiceConfig)
	assert.Equal(t, 2, len(opts))
}

func TestInitializeClients(t *testing.T) {
	ctx := context.TODO()
	t.Run("legal", func(t *testing.T) {
		u, err := url.Parse("http://localhost:8089")
		assert.NoError(t, err)
		clientSet, err := InitializeClients(ctx, Config{Endpoint: config.URL{URL: *u}})
		assert.NotNil(t, clientSet)
		assert.NotNil(t, clientSet.AdminClient())
		assert.NotNil(t, clientSet.AuthClient())
		assert.Nil(t, err)
	})

	t.Run("legal-from-config", func(t *testing.T) {
		clientSet, err := InitializeClientsFromConfig(ctx)
		assert.NoError(t, err)
		assert.NotNil(t, clientSet)
		assert.NotNil(t, clientSet.AuthClient())
		assert.NotNil(t, clientSet.AdminClient())
	})
}

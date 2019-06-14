package admin

import (
	"context"
	"crypto/x509"
	"net/url"
	"sync"
	"testing"
	"time"

	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/admin"
	"github.com/lyft/flytestdlib/logger"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"

	"github.com/lyft/flytestdlib/config"
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

	t.Run("illegal", func(t *testing.T) {
		adminConnection = nil
		once = sync.Once{}
		assert.NotNil(t, InitializeAdminClient(ctx, Config{}))
	})

	t.Run("real", func(t *testing.T) {
		u, err := url.Parse("dns:flyte-staging-internal.lyft.net")
		assert.NoError(t, err)

		c := InitializeAdminClient(ctx, Config{
			Endpoint: config.URL{URL: *u},
		})
		assert.NotNil(t, c)

		var opts []grpc.DialOption
		pool, err := x509.SystemCertPool()
		assert.NoError(t, err)
		creds := credentials.NewClientTLSFromCert(pool, "")
		opts = append(opts, grpc.WithTransportCredentials(creds))

		adminConnection, err = grpc.DialContext(ctx, "dns:///flyte-staging-internal.lyft.net", opts...)
		if err != nil {
			logger.Panicf(ctx, "failed to initialize Admin connection. Err: %s", err.Error())
		}

		c = InitializeAdminClient(ctx, Config{
			Endpoint: config.URL{URL: *u},
		})
		assert.NotNil(t, c)
		_, err = c.ListProjects(ctx, &admin.ProjectListRequest{})
		assert.NoError(t, err)
	})
}

func TestInitializeMockAdminClient(t *testing.T) {
	c := InitializeMockAdminClient()
	assert.NotNil(t, c)
}

func TestGetAdditionalAdminClientConfigOptions(t *testing.T) {
	u, _ := url.Parse("localhost:8089")
	adminServiceConfig := Config{
		Endpoint:              config.URL{URL: *u},
		UseInsecureConnection: true,
		PerRetryTimeout:       config.Duration{1 * time.Second},
		MaxRetries:            1,
	}
	opts := GetAdditionalAdminClientConfigOptions(adminServiceConfig)
	assert.Equal(t, 2, len(opts))
}

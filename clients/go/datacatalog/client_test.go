package datacatalog

import (
	"context"
	"github.com/flyteorg/flytestdlib/config"
	"net/url"
	"sync"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestInitializeAndGetDataCatalogClient(t *testing.T) {

	ctx := context.TODO()
	t.Run("legal", func(t *testing.T) {
		u, _ := url.Parse("localhost:8089")
		client, err := InitializeDataCatalogClient(ctx, Config{
			Endpoint: config.URL{URL: *u},
			UseInsecureConnection: false,
		})
		assert.NotNil(t, client)
		assert.NoError(t, err)
	})

	t.Run("illegal", func(t *testing.T) {
		dataCatalogConnection = nil
		once = sync.Once{}
		client, _ := InitializeDataCatalogClient(ctx, Config{})
		assert.NotNil(t, client)
	})
}

func TestInitializeMockDataCatalogClient(t *testing.T) {
	c := InitializeMockDataCatalogClient()
	assert.NotNil(t, c)
}

package admin

import (
	"context"
	"net/url"
	"sync"
	"testing"

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
		adminClient = nil
		once = sync.Once{}
		assert.NotNil(t, InitializeAdminClient(ctx, Config{}))
	})
}

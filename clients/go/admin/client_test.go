package admin

import (
	"context"
	"fmt"
	"github.com/grpc/grpc-go/credentials/oauth"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/admin"
	"golang.org/x/oauth2/clientcredentials"
	"net/url"
	"sync"
	"testing"
	"time"

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
}

func TestInitializeMockAdminClient(t *testing.T) {
	c := InitializeMockAdminClient()
	assert.NotNil(t, c)
}

func TestGetAdditionalAdminClientConfigOptions(t *testing.T) {
	u, _ := url.Parse("localhost:8089")
	adminServiceConfig := Config{
		Endpoint:              config.URL{URL: *u,},
		UseInsecureConnection: true,
		PerRetryTimeout:       config.Duration{1 * time.Second},
		MaxRetries:            1,
	}
	opts := GetAdditionalAdminClientConfigOptions(adminServiceConfig)
	assert.Equal(t, 2, len(opts))
}

func TestInitializeAfdsandGetAdminClient(t *testing.T) {
	ctx := context.TODO()

	token, _ := ccConfig.Token(ctx)
	tSource := ccConfig.TokenSource(ctx)
	oTS := oauth.TokenSource{TokenSource: tSource}
	fmt.Printf("O TS %v\n", oTS)
	fmt.Printf("T %v\n", token)
	token, _ = ccConfig.Token(ctx)

	//tokenRpcCredentials := oauth.NewOauthAccess(oTS)
	//credOption := grpc.WithPerRPCCredentials(oTS)

	u, err := url.Parse("dns:///localhost:8088")
	assert.NoError(t, err)
	client := InitializeAdminClient(ctx, Config{
		Endpoint:              config.URL{URL: *u},
		UseInsecureConnection: false,
	})


	resp, err := client.ListProjects(ctx, &admin.ProjectListRequest{})
	if err != nil {
		fmt.Printf("Error %v\n", err)
	}
	assert.NoError(t, err)
	fmt.Printf("Response: %v\n", resp)
}

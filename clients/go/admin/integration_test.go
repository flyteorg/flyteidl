// +build integration

package admin

import (
	"context"
	"fmt"
	"net/url"
	"testing"

	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/admin"
	"github.com/lyft/flytestdlib/config"
	"github.com/stretchr/testify/assert"
)

func TestLiveAdminClient(t *testing.T) {
	ctx := context.Background()

	u, err := url.Parse("dns:///flyte.lyft.net")
	assert.NoError(t, err)
	client := InitializeAdminClient(ctx, Config{
		Endpoint:                config.URL{URL: *u},
		UseInsecureConnection:   false,
		UseAuth:                 true,
		ClientId:                "0oacmtueinpXk72Af1t7",
		ClientSecret:            "my-secret",
		TokenURL:                "https://lyft.okta.com/oauth2/ausc5wmjw96cRKvTd1t7/v1/token",
		Scopes:                  []string{"svc"},
		GrpcAuthorizationHeader: "Flyte-Authorization",
	})

	resp, err := client.ListProjects(ctx, &admin.ProjectListRequest{})
	if err != nil {
		fmt.Printf("Error %v\n", err)
	}
	assert.NoError(t, err)
	fmt.Printf("Response: %v\n", resp)
}

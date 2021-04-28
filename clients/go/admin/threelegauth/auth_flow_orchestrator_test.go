package threelegauth

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"testing"

	"github.com/flyteorg/flyteidl/clients/go/admin/mocks"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"github.com/zalando/go-keyring"
	"golang.org/x/oauth2"
)

func TestRefreshTheToken(t *testing.T) {
	ctx := context.Background()
	orchestrator := TokenOrchestrator{}
	clientConf := &oauth2.Config{
		ClientID: "dummyClient",
	}
	plan, _ := ioutil.ReadFile("testdata/token.json")
	var tokenData oauth2.Token
	err := json.Unmarshal(plan, &tokenData)
	assert.Nil(t, err)
	t.Run("bad url in config", func(t *testing.T) {
		refreshedToken, err := orchestrator.RefreshTheToken(ctx, clientConf, &tokenData)
		assert.Nil(t, refreshedToken)
		assert.NotNil(t, err)
	})
}

func TestFetchFromCache(t *testing.T) {
	ctx := context.Background()
	orchestrator := TokenOrchestrator{}
	keyring.MockInit()
	t.Run("no token in cache", func(t *testing.T) {
		refreshedToken, err := orchestrator.FetchTokenFromCacheOrRefreshIt(ctx)
		assert.Nil(t, refreshedToken)
		assert.NotNil(t, err)
	})
}

func TestFetchFromAuthFlow(t *testing.T) {
	ctx := context.Background()
	orchestrator := TokenOrchestrator{}
	keyring.MockInit()
	t.Run("fetch from auth flow", func(t *testing.T) {
		metatdata := &service.OAuth2MetadataResponse{
			TokenEndpoint:   "/token",
			ScopesSupported: []string{"code", "all"},
		}
		clientMetatadata := &service.FlyteClientResponse{
			AuthorizationMetadataKey: "flyte_authorization",
			RedirectUri:              "http://localhost:8089/redirect",
		}
		mockAuthClient := new(mocks.AuthMetadataServiceClient)
		mockAuthClient.OnOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(metatdata, nil)
		mockAuthClient.OnFlyteClientMatch(mock.Anything, mock.Anything).Return(clientMetatadata, nil)
		refreshedToken, err := orchestrator.FetchTokenFromAuthFlow(ctx, mockAuthClient)
		assert.Nil(t, refreshedToken)
		assert.NotNil(t, err)
	})
}

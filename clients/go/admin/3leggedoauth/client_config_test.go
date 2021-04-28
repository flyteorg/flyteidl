package _leggedoauth

import (
	"context"
	"testing"

	"github.com/flyteorg/flyteidl/clients/go/admin/mocks"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

func TestGenerateClientConfig(t *testing.T) {
	ctx := context.Background()
	mockAuthClient := new(mocks.AuthMetadataServiceClient)
	flyteClientResp := &service.FlyteClientResponse{
		ClientId:    "dummyClient",
		RedirectUri: "dummyRedirectUri",
		Scopes:      []string{"dummyScopes"},
	}
	oauthMetaDataResp := &service.OAuth2MetadataResponse{
		Issuer:                        "dummyIssuer",
		AuthorizationEndpoint:         "dummyAuthEndPoint",
		TokenEndpoint:                 "dummyTokenEndpoint",
		CodeChallengeMethodsSupported: []string{"dummyCodeChallenege"},
	}
	mockAuthClient.OnFlyteClientMatch(ctx, mock.Anything).Return(flyteClientResp, nil)
	mockAuthClient.OnOAuth2MetadataMatch(ctx, mock.Anything).Return(oauthMetaDataResp, nil)
	oauthConfig, err := GenerateClientConfig(ctx, mockAuthClient)
	assert.Nil(t, err)
	assert.NotNil(t, oauthConfig)
	assert.Equal(t, "dummyClient", oauthConfig.ClientID)
	assert.Equal(t, "dummyRedirectUri", oauthConfig.RedirectURL)
	assert.Equal(t, "dummyTokenEndpoint", oauthConfig.Endpoint.TokenURL)
	assert.Equal(t, "dummyAuthEndPoint", oauthConfig.Endpoint.AuthURL)
}

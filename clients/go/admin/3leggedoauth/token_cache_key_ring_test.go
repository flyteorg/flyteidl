package _leggedoauth

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/zalando/go-keyring"
	"golang.org/x/oauth2"
)

func TestSaveAndGetToken(t *testing.T) {
	keyring.MockInit()
	ctx := context.TODO()
	tokenCacheProvider := TokenCacheProvider{
		serviceUser: "testServiceUser",
		serviceName: "testServiceName",
	}
	t.Run("Valid Save/Get Token", func(t *testing.T) {
		plan, _ := ioutil.ReadFile("testdata/token.json")
		var tokenData oauth2.Token
		err := json.Unmarshal(plan, &tokenData)
		assert.Nil(t, err)
		err = tokenCacheProvider.SaveToken(ctx, tokenData)
		assert.Nil(t, err)
		var savedToken *oauth2.Token
		savedToken, err = tokenCacheProvider.GetToken(ctx)
		assert.Nil(t, err)
		assert.NotNil(t, savedToken)
		assert.Equal(t, tokenData.AccessToken, savedToken.AccessToken)
		assert.Equal(t, tokenData.TokenType, savedToken.TokenType)
		assert.Equal(t, tokenData.Expiry, savedToken.Expiry)
	})
	t.Run("Empty access token Save", func(t *testing.T) {
		plan, _ := ioutil.ReadFile("testdata/empty_access_token.json")
		var tokenData oauth2.Token
		var err error
		err = json.Unmarshal(plan, &tokenData)
		assert.Nil(t, err)
		err = tokenCacheProvider.SaveToken(ctx, tokenData)
		assert.Nil(t, err)
	})
	t.Run("Different service name", func(t *testing.T) {
		plan, _ := ioutil.ReadFile("testdata/token.json")
		var tokenData oauth2.Token
		err := json.Unmarshal(plan, &tokenData)
		assert.Nil(t, err)
		err = tokenCacheProvider.SaveToken(ctx, tokenData)
		assert.Nil(t, err)
		tokenCacheProvider2 := TokenCacheProvider{
			serviceUser: "testServiceUser2",
			serviceName: "testServiceName2",
		}
		var savedToken *oauth2.Token
		savedToken, err = tokenCacheProvider2.GetToken(ctx)
		assert.NotNil(t, err)
		assert.Nil(t, savedToken)
	})
}

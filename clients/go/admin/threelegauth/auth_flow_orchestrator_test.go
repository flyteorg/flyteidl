package threelegauth

import (
	"context"
	"encoding/json"
	"github.com/stretchr/testify/assert"
	"golang.org/x/oauth2"
	"io/ioutil"
	"testing"
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
		refreshedToken := orchestrator.RefreshTheToken(ctx, clientConf, &tokenData)
		assert.Nil(t, refreshedToken)
	})
}
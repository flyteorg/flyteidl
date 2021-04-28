package _leggedoauth

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/flyteorg/flytestdlib/logger"

	"github.com/zalando/go-keyring"
	"golang.org/x/oauth2"
)

var defaultCacheProvider = TokenCacheProvider{
	serviceUser: "flytectl-user",
	serviceName: "flytectl",
}

type TokenCacheProvider struct {
	serviceName string
	serviceUser string
}

func (t TokenCacheProvider) SaveToken(ctx context.Context, token oauth2.Token) error {
	var tokenBytes []byte
	if token.AccessToken == "" {
		logger.Errorf(ctx, "dont save empty token with expiration %v", token.Expiry)
		return nil
	}
	var err error
	if tokenBytes, err = json.Marshal(token); err != nil {
		logger.Errorf(ctx, "unable to marshal token to save in cache due to %v", err)
		return err
	}
	// set token in keyring
	if err = keyring.Set(t.serviceName, t.serviceUser, string(tokenBytes)); err != nil {
		logger.Errorf(ctx, "unable to save token due to %v", err)
		return err
	}
	logger.Debugf(ctx, "Save token in cache with expiry at %v", token.Expiry)
	return nil
}

func (t TokenCacheProvider) GetToken(ctx context.Context) (*oauth2.Token, error) {
	// get saved token
	tokenJSON, err := keyring.Get(t.serviceName, t.serviceUser)
	if len(tokenJSON) == 0 {
		logger.Warnf(ctx, "no token found in the cache")
		return nil, fmt.Errorf("no token found in the cache")
	}
	if err != nil {
		return nil, err
	}
	token := oauth2.Token{}
	if err = json.Unmarshal([]byte(tokenJSON), &token); err != nil {
		logger.Errorf(ctx, "unmarshalling error for saved token : %v", err)
		return nil, err
	}
	logger.Debugf(ctx, "fetched token from cache with expiry at %v", token.Expiry)
	return &token, nil
}

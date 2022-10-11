package admin

import (
	"context"
	"github.com/flyteorg/flytestdlib/atomic"

	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
)

type ConfigResolver struct {
	cfg                        *Config
	authMetadataClient         service.AuthMetadataServiceClient
	resolvedMetadata           atomic.Generic[*service.OAuth2MetadataResponse]
	resolvedPublicClientConfig atomic.Generic[*service.PublicClientAuthConfigResponse]
}

func (c *ConfigResolver) GetOAuth2Metadata(ctx context.Context) (*service.OAuth2MetadataResponse, error) {
	if !c.resolvedMetadata.Empty() {
		return c.resolvedMetadata.Load(), nil
	}

	r := &service.OAuth2MetadataResponse{}
	var remote *service.OAuth2MetadataResponse
	retrieveFromRemote := func() (*service.OAuth2MetadataResponse, error) {
		if remote != nil {
			return remote, nil
		}

		resp, err := c.authMetadataClient.GetOAuth2Metadata(ctx, &service.OAuth2MetadataRequest{})
		if err != nil {
			return nil, err
		}

		remote = resp
		return remote, nil
	}

}

func (c *ConfigResolver) GetPublicClientConfig(ctx context.Context) (*service.PublicClientAuthConfigResponse, error) {
	if !c.resolvedPublicClientConfig.Empty() {
		return c.resolvedPublicClientConfig.Load(), nil
	}

	r := &service.PublicClientAuthConfigResponse{}
	var remote *service.PublicClientAuthConfigResponse
	retrieveFromRemote := func() (*service.PublicClientAuthConfigResponse, error) {
		if remote != nil {
			return remote, nil
		}

		resp, err := c.authMetadataClient.GetPublicClientConfig(ctx, &service.PublicClientAuthConfigRequest{})
		if err != nil {
			return nil, err
		}

		remote = resp
		return remote, nil
	}

	if len(c.cfg.ClientID) != 0 {
		r.ClientId = c.cfg.ClientID
	} else {
		temp, err := retrieveFromRemote()
		if err != nil {
			return nil, err
		}

		r.ClientId = temp.ClientId
	}

	if len(c.cfg.Scopes) != 0 {
		r.Scopes = c.cfg.Scopes
	} else {
		temp, err := retrieveFromRemote()
		if err != nil {
			return nil, err
		}

		r.Scopes = temp.Scopes
	}

	if len(c.cfg.DeprecatedAuthorizationHeader) != 0 {
		r.AuthorizationMetadataKey = c.cfg.DeprecatedAuthorizationHeader
	} else {
		temp, err := retrieveFromRemote()
		if err != nil {
			return nil, err
		}

		r.AuthorizationMetadataKey = temp.AuthorizationMetadataKey
	}

	if len(c.cfg.TokenAudience) != 0 {
		r.Audience = c.cfg.TokenAudience
	} else {
		temp, err := retrieveFromRemote()
		if err != nil {
			return nil, err
		}

		r.Audience = temp.Audience
	}

	if len(c.cfg.ServiceHttpEndpoint) != 0 {
		r.ServiceHttpEndpoint = c.cfg.ServiceHttpEndpoint
	} else {
		temp, err := retrieveFromRemote()
		if err != nil {
			return nil, err
		}

		r.ServiceHttpEndpoint = temp.ServiceHttpEndpoint
	}

	swapped := c.resolvedPublicClientConfig.CompareAndSwap(nil, r)
	if swapped {
		return r, nil
	}

	return c.resolvedPublicClientConfig.Load(), nil
}

func NewConfigResolver(cfg *Config, authMetadataClient service.AuthMetadataServiceClient) *ConfigResolver {
	return &ConfigResolver{
		cfg:                        cfg,
		authMetadataClient:         authMetadataClient,
		resolvedMetadata:           atomic.NewGenericEmpty[*service.OAuth2MetadataResponse](),
		resolvedPublicClientConfig: atomic.NewGenericEmpty[*service.PublicClientAuthConfigResponse](),
	}
}

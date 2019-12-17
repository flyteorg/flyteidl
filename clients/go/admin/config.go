package admin

import (
	"context"
	"time"

	"github.com/lyft/flytestdlib/config"
	"github.com/lyft/flytestdlib/logger"
)

//go:generate pflags Config

const configSectionKey = "admin"

type Config struct {
	Endpoint              config.URL      `json:"endpoint" pflag:",For admin types, specify where the uri of the service is located."`
	UseInsecureConnection bool            `json:"insecure" pflag:",Use insecure connection."`
	MaxBackoffDelay       config.Duration `json:"maxBackoffDelay" pflag:",Max delay for grpc backoff"`
	PerRetryTimeout       config.Duration `json:"perRetryTimeout" pflag:",gRPC per retry timeout"`
	MaxRetries            int             `json:"maxRetries" pflag:",Max number of gRPC retries"`

	// Auth can only be used if also running with a secure connection. If UseInsecureConnection is set to true, none
	// of the following options will even be referenced.
	UseAuth      bool     `json:"useAuth" pflag:",Whether or not to try to authenticate with options below"`
	ClientId     string   `json:"clientId" pflag:",Client ID"`
	ClientSecret string   `json:"clientSecret" pflag:",Client secret"`
	Scopes       []string `json:"scopes" pflag:",List of scopes to request"`

	// There are two ways to get the token URL. If the issuer url is provided, the client will try to use RFC 8414 to
	// try to get the token URL. Or you can just specify it directly.
	// Note that the IssuerURL option doesn't follow redirects yet!!! So you'll need to specify the endpoint directly
	// where the .well-known metadata can be found.
	IssuerURL string `json:"issuerUrl" pflag:",This is the URL to your IDP's authorization server'"`
	TokenURL  string `json:"tokenUrl" pflag:",Your IDP's token endpoint"`

	// See the implementation of the 'grpcAuthorizationHeader' option in Flyte Admin for more information. But
	// basically we want to be able to use a different string to pass the token from this client to the the Admin service
	// because things might be running in a service mesh (like Envoy) that already uses the default 'authorization' header
	GrpcAuthorizationHeader string `json:"grpcAuthorizationHeader" pflag:",Custom metadata header to pass JWT"`
}

var (
	defaultConfig = Config{
		MaxBackoffDelay: config.Duration{8 * time.Second},
		PerRetryTimeout: config.Duration{15 * time.Second},
		MaxRetries:      4,
	}
	configSection = config.MustRegisterSectionWithUpdates(configSectionKey, &defaultConfig, func(ctx context.Context, newValue config.Config) {
		if newValue.(*Config).MaxRetries < 0 {
			logger.Panicf(ctx, "Admin configuration given with negative gRPC retry value.")
		}
	})
)

func GetConfig(ctx context.Context) *Config {
	if c, ok := configSection.GetConfig().(*Config); ok {
		return c
	}

	logger.Warnf(ctx, "Failed to retrieve config section [%v].", configSectionKey)
	return nil
}

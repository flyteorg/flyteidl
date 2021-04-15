package admin

import (
	"context"
	"path/filepath"
	"time"

	"github.com/flyteorg/flytestdlib/config"
	"github.com/flyteorg/flytestdlib/logger"
)

//go:generate pflags Config --default-var=defaultConfig

const (
	configSectionKey = "admin"
	DefaultClientID  = "flytepropeller"
)

var DefaultClientSecretLocation = filepath.Join(string(filepath.Separator), "etc", "secrets", "client_secret")

type Config struct {
	Endpoint              config.URL      `json:"endpoint" pflag:",For admin types, specify where the uri of the service is located."`
	UseInsecureConnection bool            `json:"insecure" pflag:",Use insecure connection."`
	MaxBackoffDelay       config.Duration `json:"maxBackoffDelay" pflag:",Max delay for grpc backoff"`
	PerRetryTimeout       config.Duration `json:"perRetryTimeout" pflag:",gRPC per retry timeout"`
	MaxRetries            int             `json:"maxRetries" pflag:",Max number of gRPC retries"`

	// Auth can only be used if also running with a secure connection. If UseInsecureConnection is set to true, none
	// of the following options will even be referenced.
	UseAuth              bool     `json:"useAuth" pflag:",Whether or not to try to authenticate with options below"`
	ClientID             string   `json:"clientId" pflag:",Client ID"`
	ClientSecretLocation string   `json:"clientSecretLocation" pflag:",File containing the client secret"`
	Scopes               []string `json:"scopes" pflag:",List of scopes to request"`

	// There are two ways to get the token URL. If the authorization server url is provided, the client will try to use RFC 8414 to
	// try to get the token URL. Or it can be specified directly through TokenURL config.
	// Deprecated. This will now be discovered through admin's anonymously accessible metadata.
	DeprecatedAuthorizationServerURL string `json:"authorizationServerUrl" pflag:",This is the URL to your IdP's authorization server. It'll default to Endpoint"`
	// If not provided, it'll be discovered through admin's anonymously accessible metadata endpoint.
	TokenURL string `json:"tokenUrl" pflag:",OPTIONAL: Your IdP's token endpoint."`

	// See the implementation of the 'grpcAuthorizationHeader' option in Flyte Admin for more information. But
	// basically we want to be able to use a different string to pass the token from this client to the the Admin service
	// because things might be running in a service mesh (like Envoy) that already uses the default 'authorization' header
	// Deprecated. It will automatically be discovered through an anonymously accessible auth metadata service.
	DeprecatedAuthorizationHeader string `json:"authorizationHeader" pflag:",Custom metadata header to pass JWT"`
}

var (
	defaultConfig = Config{
		MaxBackoffDelay:      config.Duration{Duration: 8 * time.Second},
		PerRetryTimeout:      config.Duration{Duration: 15 * time.Second},
		MaxRetries:           4,
		ClientID:             DefaultClientID,
		ClientSecretLocation: DefaultClientSecretLocation,
	}

	configSection = config.MustRegisterSectionWithUpdates(configSectionKey, &defaultConfig, func(ctx context.Context, newValue config.Config) {
		if newValue.(*Config).MaxRetries < 0 {
			logger.Panicf(ctx, "Admin configuration given with negative gRPC retry value.")
		}

		if newValue.(*Config).UseAuth {
			logger.Warnf(ctx, "Admin client config has authentication ON with server %s", newValue.(*Config).DeprecatedAuthorizationServerURL)
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

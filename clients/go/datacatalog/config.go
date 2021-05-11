package datacatalog

import (
	"context"
	"github.com/flyteorg/flytestdlib/config"

	"github.com/flyteorg/flytestdlib/logger"
)

//go:generate pflags Config --default-var defaultConfig

const ConfigSectionKey = "data-catalog"

var (
	defaultConfig = &Config{}

	//TODO: Add this section when everybody has migrated
	//configSection = config.MustRegisterSection(ConfigSectionKey, defaultConfig)
)

type Config struct {
	Endpoint              config.URL      `json:"endpoint" pflag:",For admin types, specify where the uri of the service is located."`
	UseInsecureConnection bool            `json:"insecure" pflag:",Use insecure connection."`
	MaxBackoffDelay       config.Duration `json:"maxBackoffDelay" pflag:",Max delay for grpc backoff"`
	PerRetryTimeout       config.Duration `json:"perRetryTimeout" pflag:",gRPC per retry timeout"`
	MaxRetries            int             `json:"maxRetries" pflag:",Max number of gRPC retries"`
}

func GetConfig(ctx context.Context) *Config {
	/* TODO: Add this section when everybody has migrated
	if c, ok := configSection.GetConfig().(*Config); ok {
		return c
	}*/

	logger.Warnf(ctx, "Failed to retrieve config section [%v].", ConfigSectionKey)
	return nil
}

package datacatalog

import (
	"context"
	"time"

	"github.com/lyft/flytestdlib/config"
	"github.com/lyft/flytestdlib/logger"
)

//go:generate pflags ClientConfig

const configSectionKey = "datacatalog"

type ClientConfig struct {
	Endpoint              config.URL      `json:"endpoint" pflag:",Specify where the uri of the datacatalog service is located."`
	UseInsecureConnection bool            `json:"insecure" pflag:",Use insecure connection to the service."`
	MaxBackoffDelay       config.Duration `json:"maxBackoffDelay" pflag:",Max delay for grpc backoff"`
	PerRetryTimeout       config.Duration `json:"perRetryTimeout" pflag:",gRPC per retry timeout"`
	MaxRetries            int             `json:"maxRetries" pflag:",Max number of gRPC retries"`
}

var (
	defaultConfig = ClientConfig{
		MaxBackoffDelay: config.Duration{2 * time.Second},
		PerRetryTimeout: config.Duration{10 * time.Second},
		MaxRetries:      3,
	}
	configSection = config.MustRegisterSectionWithUpdates(configSectionKey, &defaultConfig, func(ctx context.Context, newValue config.Config) {
		if newValue.(*ClientConfig).MaxRetries < 0 {
			logger.Panicf(ctx, "Data Catalog config given with negative gRPC retry value.")
		} else if newValue.(*ClientConfig).MaxRetries < 0 {
			logger.Panicf(ctx, "Data Catalog config given with negative gRPC retry value.")
		}
	})
)

func GetConfig(ctx context.Context) *ClientConfig {
	if c, ok := configSection.GetConfig().(*ClientConfig); ok {
		return c
	}

	logger.Warnf(ctx, "Failed to retrieve config section [%v].", configSectionKey)
	return nil
}

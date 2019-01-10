package admin

import (
	"context"

	"github.com/lyft/flytestdlib/config"
	"github.com/lyft/flytestdlib/logger"
)

//go:generate pflags Config

const configSectionKey = "admin"

type Config struct {
	Endpoint config.URL `json:"endpoint" pflag:",For admin types, specify where the uri of the service is located."`
}

func GetConfig(ctx context.Context) *Config {
	if c, ok := config.GetSection(configSectionKey).(*Config); ok {
		return c
	}

	logger.Warnf(ctx, "Failed to retrieve config section [%v].", configSectionKey)
	return nil
}

func init() {
	if err := config.RegisterSection(configSectionKey, &Config{}); err != nil {
		panic(err)
	}
}

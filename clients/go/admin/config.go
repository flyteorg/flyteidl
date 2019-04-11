package admin

import (
	"context"

	"github.com/lyft/flytestdlib/config"
	"github.com/lyft/flytestdlib/logger"
)

//go:generate pflags Config

const configSectionKey = "admin"

var (
	configSection = config.MustRegisterSection(configSectionKey, &Config{})
)

type Config struct {
	Endpoint              config.URL `json:"endpoint" pflag:",For admin types, specify where the uri of the service is located."`
	UseInsecureConnection bool       `json:"insecure" pflag:",Use insecure connection."`
}

func GetConfig(ctx context.Context) *Config {
	if c, ok := configSection.GetConfig().(*Config); ok {
		return c
	}

	logger.Warnf(ctx, "Failed to retrieve config section [%v].", configSectionKey)
	return nil
}

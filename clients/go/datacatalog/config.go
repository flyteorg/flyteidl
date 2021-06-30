package datacatalog

import (
	"context"

	"github.com/flyteorg/flyteidl/clients/go/clientutils"
	"github.com/flyteorg/flytestdlib/logger"
)

//go:generate pflags Config --default-var defaultConfig

const ConfigSectionKey = "data-catalog"

var (
	defaultConfig = &Config{}

	//TODO: Add this section when everybody has migrated
	//configSection = config.MustRegisterSection(ConfigSectionKey, defaultConfig)
)

type Config clientutils.ClientBaseConfig

func GetConfig(ctx context.Context) *Config {
	/* TODO: Add this section when everybody has migrated
	if c, ok := configSection.GetConfig().(*Config); ok {
		return c
	}*/

	logger.Warnf(ctx, "Failed to retrieve config section [%v].", ConfigSectionKey)
	return nil
}

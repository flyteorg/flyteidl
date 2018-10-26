package events

import (
	"context"

	"github.com/lyft/flytestdlib/config"
	"github.com/lyft/flytestdlib/logger"
)

//go:generate pflags Config

type EventReportingType = string

// The reserved config section key for storage.
const ConfigSectionKey = "Event"

const (
	EventSinkLog   EventReportingType = "log"
	EventSinkFile  EventReportingType = "file"
	EventSinkAdmin EventReportingType = "admin"
)

type EventSinkConfig struct {
	Type     EventReportingType `json:"type" pflag:",Sets the type of EventSink to configure [log/admin/file]."`
	FilePath string             `json:"file-path" pflag:",For file types, specify where the file should be located."`
	Endpoint config.URL         `json:"endpoint" pflag:",For admin types, specify where the uri of the service is located."`
}

func init() {
	if err := config.RegisterSection(ConfigSectionKey, &EventSinkConfig{}); err != nil {
		panic(err)
	}
}

// Retrieve current global config for storage.
func GetConfig(ctx context.Context) *EventSinkConfig {
	if c, ok := config.GetSection(ConfigSectionKey).(*EventSinkConfig); ok {
		return c
	}

	logger.Warnf(ctx, "Failed to retrieve config section [%v].", ConfigSectionKey)
	return nil
}

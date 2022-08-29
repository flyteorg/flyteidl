package deviceflow

import "github.com/flyteorg/flytestdlib/config"

// Config defines settings used for Device orchestration flow.
type Config struct {
	TokenRefreshGracePeriod config.Duration `json:"refreshTime" pflag:",grace period from the token expiry after which it would refresh the token."`
	DeviceFlowTimeout       config.Duration `json:"deviceFlowTimeout" pflag:",amount of time the device flow should complete or else it will be cancelled."`
}

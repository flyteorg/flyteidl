package logs

import (
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestKubernetesLogMaker(t *testing.T) {
	p := NewKubernetesLogPlugin("https://dashboard.k8s.net")
	tl, err := p.GetTaskLog(
		"avsoftware-development-ff20bd94ad41f4c94800-first-g4kb2",
		"avsoftware-development",
		"ignore",
		"ignore",
		"main_logs",
	)
	assert.NoError(t, err)
	assert.Equal(t, tl.GetName(), "main_logs")
	assert.Equal(t, tl.GetMessageFormat(), core.TaskLog_UNKNOWN)
	assert.Equal(t, tl.Uri, "https://dashboard.k8s.net/#!/log/avsoftware-development/avsoftware-development-ff20bd94ad41f4c94800-first-g4kb2/pod?namespace=avsoftware-development")
}

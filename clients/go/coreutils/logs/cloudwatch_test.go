package logs

import (
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestCloudwatchLogMaker_CriO(t *testing.T) {
	p := NewCloudwatchLogPlugin("us-east-1", "/flyte-production/kubernetes")
	tl, err := p.GetTaskLog(
		"f-f66f663c-2b36-4dfe-8a5f-884cbe61e596-773460-driver",
		"modelbuildertemplate-staging",
		"spark-kubernetes-driver",
		"cri-o://aac2ca7493fb7b1784ab64bb38b08b8777c740935834da36d20b242e60a76dae",
		"main_logs")
	assert.NoError(t, err)
	assert.Equal(t, tl.GetName(), "main_logs")
	assert.Equal(t, tl.GetMessageFormat(), core.TaskLog_JSON)
	assert.Equal(t, tl.Uri, "https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logEventViewer:group=/flyte-production/kubernetes;stream=var.log.containers.f-f66f663c-2b36-4dfe-8a5f-884cbe61e596-773460-driver_modelbuildertemplate-staging_spark-kubernetes-driver-aac2ca7493fb7b1784ab64bb38b08b8777c740935834da36d20b242e60a76dae.log")
}

func TestCloudwatchLogMaker_Docker(t *testing.T) {
	p := NewCloudwatchLogPlugin("us-east-1", "/flyte-staging/kubernetes")
	tl, err := p.GetTaskLog(
		"f-f66f663c-2b36-4dfe-8a5f-884cbe61e596-773460-driver",
		"modelbuildertemplate-staging",
		"spark-kubernetes-driver",
		"docker://aac2ca7493fb7b1784ab64bb38b08b8777c740935834da36d20b242e60a76dae",
		"main_logs")
	assert.NoError(t, err)
	assert.Equal(t, tl.GetName(), "main_logs")
	assert.Equal(t, tl.GetMessageFormat(), core.TaskLog_JSON)
	assert.Equal(t, tl.Uri, "https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logEventViewer:group=/flyte-staging/kubernetes;stream=var.log.containers.f-f66f663c-2b36-4dfe-8a5f-884cbe61e596-773460-driver_modelbuildertemplate-staging_spark-kubernetes-driver-aac2ca7493fb7b1784ab64bb38b08b8777c740935834da36d20b242e60a76dae.log")
}

func TestCloudwatchLogMaker_NoPrefix(t *testing.T) {
	p := NewCloudwatchLogPlugin("us-east-1", "/flyte-staging/kubernetes")
	tl, err := p.GetTaskLog(
		"f-f66f663c-2b36-4dfe-8a5f-884cbe61e596-773460-driver",
		"modelbuildertemplate-staging",
		"spark-kubernetes-driver",
		"aac2ca7493fb7b1784ab64bb38b08b8777c740935834da36d20b242e60a76dae",
		"main_logs")
	assert.NoError(t, err)
	assert.Equal(t, tl.GetName(), "main_logs")
	assert.Equal(t, tl.GetMessageFormat(), core.TaskLog_JSON)
	assert.Equal(t, tl.Uri, "https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logEventViewer:group=/flyte-staging/kubernetes;stream=var.log.containers.f-f66f663c-2b36-4dfe-8a5f-884cbe61e596-773460-driver_modelbuildertemplate-staging_spark-kubernetes-driver-aac2ca7493fb7b1784ab64bb38b08b8777c740935834da36d20b242e60a76dae.log")
}

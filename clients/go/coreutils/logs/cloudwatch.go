package logs

import (
	"fmt"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
)

type cloudwatchLogPlugin struct {
	region string
}

func (s cloudwatchLogPlugin) GetTaskLog(podName, namespace, containerName, containerId, logName string) (core.TaskLog, error) {
	return core.TaskLog{
		Uri: fmt.Sprintf(
			"https://console.aws.amazon.com/cloudwatch/home?region=%s#logEventViewer:group=/flyte/kubernetes;stream=var.log.containers.%s_%s_%s-%s.log",
			s.region,
			podName,
			namespace,
			containerName,
			containerId),
		Name:          logName,
		MessageFormat: core.TaskLog_JSON,
	}, nil
}

func NewCloudwatchLogPlugin(region string) LogPlugin {
	return &cloudwatchLogPlugin{
		region: region,
	}
}

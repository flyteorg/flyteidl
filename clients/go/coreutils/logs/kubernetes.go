package logs

import (
	"fmt"

	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
)

type kubernetesLogPlugin struct {
	k8sUrl string
}

func (s kubernetesLogPlugin) GetTaskLog(podName, namespace, containerName, containerId, logName string) (core.TaskLog, error) {
	return core.TaskLog{
		Uri:           fmt.Sprintf("%s/#!/log/%s/%s/pod?namespace=%s", s.k8sUrl, namespace, podName, namespace),
		Name:          logName,
		MessageFormat: core.TaskLog_UNKNOWN,
	}, nil
}

func NewKubernetesLogPlugin(k8sUrl string) LogPlugin {
	return &kubernetesLogPlugin{
		k8sUrl: k8sUrl,
	}
}

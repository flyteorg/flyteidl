// Contains interface definitions and helper functions for log plugins

package logs

import (
	"fmt"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
)

// Deprecated: Please use LogPluginV2
type LogPlugin interface {
	// Generates a TaskLog object given necessary computation information
	GetTaskLog(podName, namespace, containerName, containerID, logName string) (core.TaskLog, error)
}

type TaskLogInput struct {
	HostName      string `json:"hostname"`
	PodName       string `json:"podName"`
	Namespace     string `json:"namespace"`
	ContainerName string `json:"containerName"`
	ContainerID   string `json:"containerId"`
	LogName       string `json:"logName"`
}

type LogPluginV2 interface {
	// Generates a TaskLog object given necessary computation information
	NewTaskLog(input TaskLogInput) (log core.TaskLog, err error)
}

// NewCloudwatchLogPlugin creates a TemplateLogPlugin with a preformatted Log links in Cloudwatch for the configured
// region and group name.
// Deprecated: Please use NewTemplateLogPlugin instead.
func NewCloudwatchLogPlugin(region, groupName string) LogPlugin {
	return NewTemplateLogPlugin(fmt.Sprintf(
		"https://console.aws.amazon.com/cloudwatch/home?region=%s#logEventViewer:group=%s;stream=var.log.containers.{{.podName}}_{{.namespace}}_{{.containerName}}-{{.containerId}}.log",
		region, groupName), core.TaskLog_JSON)
}

// NewKubernetesLogPlugin creates a TemplateLogPlugin with a preformatted log link for the provided k8sURL.
// Deprecated: Please use NewTemplateLogPlugin instead.
func NewKubernetesLogPlugin(k8sURL string) LogPlugin {
	return NewTemplateLogPlugin(fmt.Sprintf(
		"%s/#!/log/{{.namespace}}/{{.podName}}/pod?namespace={{.namespace}}",
		k8sURL), core.TaskLog_JSON)
}

// NewStackdriverLogPlugin creates a TemplateLogPlugin with a preformatted log link for Stackdriver for the provided
// gcp Project and log resource. It uses resource.labels.pod_name as advancedFilter
// Deprecated: Please use NewTemplateLogPlugin instead.
func NewStackdriverLogPlugin(gcpProject, logResource string) LogPlugin {
	return NewTemplateLogPlugin(fmt.Sprintf(
		"https://console.cloud.google.com/logs/viewer?project=%s&angularJsUrl=%%2Flogs%%2Fviewer%%3Fproject%%3D%s&resource=%s&advancedFilter=resource.labels.pod_name%%3D{{.podName}}",
		gcpProject, gcpProject, logResource), core.TaskLog_JSON)
}

package logs

import (
	"fmt"
	"regexp"
	"strings"

	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
)

// A simple log plugin that supports templates in urls to build the final log link. Supported templates are:
// {{ .podName }}: Gets the pod name as it shows in k8s dashboard,
// {{ .namespace }}: K8s namespace where the pod runs,
// {{ .containerName }}: The container name that generated the log,
// {{ .containerId }}: The container id docker/crio generated at run time,
// {{ .logName }}: A deployment specific name where to expect the logs to be.
type templateLogPlugin struct {
	templateUri   string
	messageFormat core.TaskLog_MessageFormat
}

type regexValPair struct {
	regex *regexp.Regexp
	val   string
}

var podNameRegex = mustCreateRegex("podName")
var namespaceRegex = mustCreateRegex("namespace")
var containerNameRegex = mustCreateRegex("containerName")
var containerIDRegex = mustCreateRegex("containerID")
var logNameRegex = mustCreateRegex("logName")

func mustCreateRegex(varName string) *regexp.Regexp {
	return regexp.MustCompile(fmt.Sprintf(`(?i){{\s*[\.$]%s\s*}}`, varName))
}

func replaceAll(template string, values []regexValPair) string {
	for _, v := range values {
		template = v.regex.ReplaceAllString(template, v.val)
	}

	return template
}

func (s templateLogPlugin) GetTaskLog(podName, namespace, containerName, containerID, logName string) (core.TaskLog, error) {
	// Container IDs are prefixed with docker://, cri-o://, etc. which is stripped by fluentd before pushing to a log
	// stream. Therefore, we must also strip the prefix.
	stripDelimiter := "://"
	if split := strings.Split(containerID, stripDelimiter); len(split) > 1 {
		containerID = split[1]
	}

	return core.TaskLog{
		Uri: replaceAll(
			s.templateUri,
			[]regexValPair{
				{
					regex: podNameRegex,
					val:   podName,
				},
				{
					regex: namespaceRegex,
					val:   namespace,
				},
				{
					regex: containerNameRegex,
					val:   containerName,
				},
				{
					regex: containerIDRegex,
					val:   containerID,
				},
				{
					regex: logNameRegex,
					val:   logName,
				},
			},
		),
		Name:          logName,
		MessageFormat: s.messageFormat,
	}, nil
}

// NewTemplateLogPlugin creates a template-based log plugin with the provided template Uri and message format. Supported
// templates are:
//// {{ .podName }}: Gets the pod name as it shows in k8s dashboard,
//// {{ .namespace }}: K8s namespace where the pod runs,
//// {{ .containerName }}: The container name that generated the log,
//// {{ .containerId }}: The container id docker/crio generated at run time,
//// {{ .logName }}: A deployment specific name where to expect the logs to be.
func NewTemplateLogPlugin(templateUri string, messageFormat core.TaskLog_MessageFormat) LogPlugin {
	return &templateLogPlugin{
		templateUri:   templateUri,
		messageFormat: messageFormat,
	}
}

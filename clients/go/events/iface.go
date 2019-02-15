package events

import (
	"context"

	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/event"
)

//go:generate mockgen -package events -destination=mock_adminclient.go github.com/lyft/flyteidl/gen/pb-go/flyteidl/service AdminServiceClient

// Recorder for Workflow events
type WorkflowEventRecorder interface {
	RecordWorkflowEvent(ctx context.Context, event *event.WorkflowExecutionEvent) error
}

// Recorder for Node events
type NodeEventRecorder interface {
	RecordNodeEvent(ctx context.Context, event *event.NodeExecutionEvent) error
}

// Recorder for Task events
type TaskEventRecorder interface {
	RecordTaskEvent(ctx context.Context, event *event.TaskExecutionEvent) error
}

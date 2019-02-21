package events

import (
	"context"

	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/event"
)

// EventRecorder records workflow, node and task events to the eventSink it is configured with.
type eventRecorder struct {
	eventSink EventSink
}

func (r *eventRecorder) RecordWorkflowEvent(ctx context.Context, event *event.WorkflowExecutionEvent) error {
	return r.eventSink.Sink(ctx, event)
}

func (r *eventRecorder) RecordNodeEvent(ctx context.Context, event *event.NodeExecutionEvent) error {
	return r.eventSink.Sink(ctx, event)
}

func (r *eventRecorder) RecordTaskEvent(ctx context.Context, event *event.TaskExecutionEvent) error {
	return r.eventSink.Sink(ctx, event)
}

// Construct a new Workflow Event Recorder
func NewWorkflowEventRecorder(eventSink EventSink) WorkflowEventRecorder {
	return &eventRecorder{
		eventSink: eventSink,
	}
}

// Construct a new Node Event Recorder
func NewNodeEventRecorder(eventSink EventSink) NodeEventRecorder {
	return &eventRecorder{
		eventSink: eventSink,
	}
}

// Construct a new Task Event Recorder
func NewTaskEventRecorder(eventSink EventSink) TaskEventRecorder {
	return &eventRecorder{
		eventSink: eventSink,
	}
}

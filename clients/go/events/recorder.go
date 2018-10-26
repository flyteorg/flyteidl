package events

import (
	"context"

	"github.com/golang/protobuf/proto"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/event"
)

type EventType int

const (
	WorkflowEvent EventType = 1 + iota
	NodeEvent
	TaskEvent
)

// EventRecorder records workflow, node and task events to the eventSink it is configured with.
type eventRecorder struct {
	eventSink EventSink
}

func (r *eventRecorder) recordEvent(ctx context.Context, eventType EventType, event proto.Message) error {
	return r.eventSink.Sink(ctx, eventType, event)
}

func (r *eventRecorder) RecordWorkflowEvent(ctx context.Context, event *event.WorkflowExecutionEvent) error {
	err := r.recordEvent(ctx, WorkflowEvent, event)
	return err
}

func (r *eventRecorder) RecordNodeEvent(ctx context.Context, event *event.NodeExecutionEvent) error {
	return r.recordEvent(ctx, NodeEvent, event)
}

func (r *eventRecorder) RecordTaskEvent(ctx context.Context, event *event.TaskExecutionEvent) error {
	return r.recordEvent(ctx, TaskEvent, event)
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

package events

import (
	"context"
	"sync"
	"time"

	"github.com/golang/protobuf/proto"

	eventsErr "github.com/lyft/flyteidl/clients/go/events/errors"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/event"

	"github.com/lyft/flytestdlib/logger"
	"github.com/lyft/flytestdlib/promutils"
)

type EmittedEventInfo struct {
	lastUpdatedAt time.Time
	phase         string
}

type idempotentWorkFlowEventRecorder struct {
	internalRecorder    *eventRecorder
	events              map[string]EmittedEventInfo
	maxUpdateLagSeconds int64
	mutex               *sync.Mutex
}

func (c *idempotentWorkFlowEventRecorder) idempotentRecord(ctx context.Context, id string, e proto.Message, phase string, terminal bool) error {
	currentTime := time.Now()
	c.mutex.Lock()
	defer c.mutex.Unlock()

	existing, ok := c.events[id]
	if !ok || existing.phase != phase || int64(currentTime.Sub(existing.lastUpdatedAt).Seconds()) > c.maxUpdateLagSeconds {
		err := c.internalRecorder.sinkEvent(ctx, e)
		if err != nil {
			if !eventsErr.IsAlreadyExists(err) {
				return err
			}
			logger.Infof(ctx, "Workflow event phase: %s, executionId %s already exist", phase, id)
		}

		// delete the event from events map if it is an terminal event
		if ok && terminal {
			delete(c.events, id)
		} else {
			c.events[id] = EmittedEventInfo{lastUpdatedAt: currentTime, phase: phase}
		}
	}

	return nil
}

func (c *idempotentWorkFlowEventRecorder) RecordWorkflowEvent(ctx context.Context, e *event.WorkflowExecutionEvent) error {
	id := e.ExecutionId.String()
	terminal := e.Phase == core.WorkflowExecution_SUCCEEDED || e.Phase == core.WorkflowExecution_FAILED ||
		e.Phase == core.WorkflowExecution_ABORTED || e.Phase == core.WorkflowExecution_TIMED_OUT
	return c.idempotentRecord(ctx, id, e, e.Phase.String(), terminal)
}

func (c *idempotentWorkFlowEventRecorder) RecordNodeEvent(ctx context.Context, e *event.NodeExecutionEvent) error {
	id := e.Id.String()
	terminal := e.Phase == core.NodeExecution_SUCCEEDED || e.Phase == core.NodeExecution_FAILED ||
		e.Phase == core.NodeExecution_ABORTED || e.Phase == core.NodeExecution_SKIPPED || e.Phase == core.NodeExecution_TIMED_OUT
	return c.idempotentRecord(ctx, id, e, e.Phase.String(), terminal)
}

func (c *idempotentWorkFlowEventRecorder) RecordTaskEvent(ctx context.Context, e *event.TaskExecutionEvent) error {
	id := e.TaskId.String()
	terminal := e.Phase == core.TaskExecution_SUCCEEDED || e.Phase == core.TaskExecution_ABORTED || e.Phase == core.TaskExecution_FAILED
	return c.idempotentRecord(ctx, id, e, e.Phase.String(), terminal)
}

func constructIdempotentEventRecorder(eventSink EventSink, scope promutils.Scope) *idempotentWorkFlowEventRecorder {
	maxUpdateLagSeconds := GetConfig(context.Background()).MaxUpdateLagSeconds
	return &idempotentWorkFlowEventRecorder{
		internalRecorder:    constructEventRecorder(eventSink, scope),
		events:              make(map[string]EmittedEventInfo),
		maxUpdateLagSeconds: maxUpdateLagSeconds,
		mutex:               &sync.Mutex{},
	}
}

// Construct a new Workflow Event Recorder
func NewIdempotentWorkflowEventRecorder(eventSink EventSink, scope promutils.Scope) WorkflowEventRecorder {
	return constructIdempotentEventRecorder(eventSink, scope)
}

// Construct a new Node Event Recorder
func NewIdempotentNodeEventRecorder(eventSink EventSink, scope promutils.Scope) NodeEventRecorder {
	return constructIdempotentEventRecorder(eventSink, scope)
}

// Construct a new Task Event Recorder
func NewIdempotentTaskEventRecorder(eventSink EventSink, scope promutils.Scope) TaskEventRecorder {
	return constructIdempotentEventRecorder(eventSink, scope)
}

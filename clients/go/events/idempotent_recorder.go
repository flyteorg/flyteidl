package events

import (
	"context"
	"fmt"
	"time"

	"github.com/golang/protobuf/proto"

	eventsErr "github.com/lyft/flyteidl/clients/go/events/errors"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/event"

	"github.com/lyft/flytestdlib/logger"
	"github.com/lyft/flytestdlib/promutils"

	lru "github.com/hashicorp/golang-lru"
)

type EmittedEventInfo struct {
	lastUpdatedAt time.Time
	eventID       string
}

type idempotentWorkFlowEventRecorder struct {
	internalRecorder    *eventRecorder
	maxUpdateLagSeconds int64
	cache               *lru.Cache
}

func (i *idempotentWorkFlowEventRecorder) idempotentRecord(ctx context.Context, objectId string, e proto.Message, eventID string) error {
	var existing *EmittedEventInfo
	o, found := i.cache.Get(objectId)
	if found {
		existing = o.(*EmittedEventInfo)
	}

	emitTime := time.Now()
	if !found || existing.eventID != eventID || emitTime.Sub(existing.lastUpdatedAt) > time.Duration(i.maxUpdateLagSeconds)*time.Second {
		err := i.internalRecorder.sinkEvent(ctx, e)
		if err != nil {
			if !eventsErr.IsAlreadyExists(err) {
				return err
			}
			logger.Infof(ctx, "Workflow event eventID: %s, executionID %s already exist", eventID, objectId)
		}

		i.cache.Add(objectId, &EmittedEventInfo{lastUpdatedAt: emitTime, eventID: eventID})
	}

	return nil
}

func (i *idempotentWorkFlowEventRecorder) RecordWorkflowEvent(ctx context.Context, e *event.WorkflowExecutionEvent) error {
	executionID := e.ExecutionId.String()
	eventID := e.Phase.String()
	return i.idempotentRecord(ctx, executionID, e, eventID)
}

func (i *idempotentWorkFlowEventRecorder) RecordNodeEvent(ctx context.Context, e *event.NodeExecutionEvent) error {
	nodeID := e.Id.String()
	eventID := e.Phase.String()
	return i.idempotentRecord(ctx, nodeID, e, eventID)
}

func (i *idempotentWorkFlowEventRecorder) RecordTaskEvent(ctx context.Context, e *event.TaskExecutionEvent) error {
	taskID := fmt.Sprintf("%v:%v:%v", e.ParentNodeExecutionId.String(), e.TaskId.String(), e.RetryAttempt)
	// Task events are uniquely identified by Phase and PhaseVersion. For example, phase like Running can have
	// multiple events with changed metadata (new logs, additional custom_info, etc).
	eventID := fmt.Sprintf("%v:%v", e.Phase.String(), e.PhaseVersion)
	return i.idempotentRecord(ctx, taskID, e, eventID)
}

// cache of size 5000, ~300KB in size
func constructIdempotentEventRecorder(eventSink EventSink, scope promutils.Scope, cfg *Config) (*idempotentWorkFlowEventRecorder, error) {
	maxUpdateLagSeconds := cfg.MaxUpdateLagSeconds
	cache, err := lru.New(cfg.LocalCacheSize)
	if err != nil {
		return nil, err
	}

	return &idempotentWorkFlowEventRecorder{
		internalRecorder:    constructEventRecorder(eventSink, scope),
		maxUpdateLagSeconds: maxUpdateLagSeconds,
		cache:               cache,
	}, nil
}

// Construct a new Workflow Event Recorder
func NewIdempotentWorkflowEventRecorder(eventSink EventSink, scope promutils.Scope, cfg *Config) (WorkflowEventRecorder, error) {
	return constructIdempotentEventRecorder(eventSink, scope, cfg)
}

// Construct a new Node Event Recorder
func NewIdempotentNodeEventRecorder(eventSink EventSink, scope promutils.Scope, cfg *Config) (NodeEventRecorder, error) {
	return constructIdempotentEventRecorder(eventSink, scope, cfg)
}

// Construct a new Task Event Recorder
func NewIdempotentTaskEventRecorder(eventSink EventSink, scope promutils.Scope, cfg *Config) (TaskEventRecorder, error) {
	return constructIdempotentEventRecorder(eventSink, scope, cfg)
}

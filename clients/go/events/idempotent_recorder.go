package events

import (
	"context"
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
	phase         string
}

type idempotentWorkFlowEventRecorder struct {
	internalRecorder    *eventRecorder
	maxUpdateLagSeconds int64
	cache               *lru.Cache
}

func (i *idempotentWorkFlowEventRecorder) idempotentRecord(ctx context.Context, id string, e proto.Message, phase string) error {
	var existing *EmittedEventInfo
	o, found := i.cache.Get(id)
	if found {
		existing = o.(*EmittedEventInfo)
	}

	emitTime := time.Now()
	if !found || existing.phase != phase || emitTime.Sub(existing.lastUpdatedAt) > time.Duration(i.maxUpdateLagSeconds)*time.Second {
		err := i.internalRecorder.sinkEvent(ctx, e)
		if err != nil {
			if !eventsErr.IsAlreadyExists(err) {
				return err
			}
			logger.Infof(ctx, "Workflow event phase: %s, executionId %s already exist", phase, id)
		}

		i.cache.Add(id, &EmittedEventInfo{lastUpdatedAt: emitTime, phase: phase})
	}

	return nil
}

func (i *idempotentWorkFlowEventRecorder) RecordWorkflowEvent(ctx context.Context, e *event.WorkflowExecutionEvent) error {
	id := e.ExecutionId.String()
	return i.idempotentRecord(ctx, id, e, e.Phase.String())
}

func (i *idempotentWorkFlowEventRecorder) RecordNodeEvent(ctx context.Context, e *event.NodeExecutionEvent) error {
	id := e.Id.String()
	return i.idempotentRecord(ctx, id, e, e.Phase.String())
}

func (i *idempotentWorkFlowEventRecorder) RecordTaskEvent(ctx context.Context, e *event.TaskExecutionEvent) error {
	id := e.TaskId.String()
	return i.idempotentRecord(ctx, id, e, e.Phase.String())
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

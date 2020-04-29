package events

import (
	"context"
	"testing"

	"github.com/lyft/flytestdlib/contextutils"
	"github.com/lyft/flytestdlib/promutils"
	"github.com/lyft/flytestdlib/promutils/labeled"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/event"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/admin"
)

func init() {
	labeled.SetMetricKeys(contextutils.AppNameKey)
}

var workflowExecutionId = &core.WorkflowExecutionIdentifier {Project: "p", Domain: "d", Name:"w"}
var nodeExecutionId = &core.NodeExecutionIdentifier {NodeId: "n", ExecutionId: workflowExecutionId}

func createWfEvent(phase core.WorkflowExecution_Phase) *event.WorkflowExecutionEvent {
	return &event.WorkflowExecutionEvent{
		ExecutionId: workflowExecutionId,
		Phase: phase,
	}
}

func createNodeEvent(phase core.NodeExecution_Phase) *event.NodeExecutionEvent {
	return &event.NodeExecutionEvent{
		Id: nodeExecutionId,
		Phase: phase,
	}
}

func createTaskEvent(phase core.TaskExecution_Phase) *event.TaskExecutionEvent {
	return &event.TaskExecutionEvent{
		TaskId: &core.Identifier{Project: "p", Domain: "d", Name: "w"},
		Phase: phase,
	}
}

func TestIdempotentWorkflowEventRecorder_PhaseChange(t *testing.T) {
	ctx := context.Background()

	adminEventSink, adminClient := CreateMockAdminEventSink(t)
	adminClient.On("CreateWorkflowEvent", ctx, mock.Anything).Return(&admin.WorkflowExecutionEventResponse{}, nil)
	mockScope := promutils.NewTestScope()

	cfg := GetConfig(ctx)
	recorder, err := NewIdempotentWorkflowEventRecorder(adminEventSink, mockScope, cfg)
	assert.NoError(t, err)

	idempotentRecorder := recorder.(*idempotentWorkFlowEventRecorder)

	recordEnsureNoError := func (phase core.WorkflowExecution_Phase) (*EmittedEventInfo, bool) {
		wfEvent := createWfEvent(phase)
		err := recorder.RecordWorkflowEvent(ctx, wfEvent)
		assert.NoError(t, err)
		event, ok := idempotentRecorder.cache.Get(wfEvent.ExecutionId.String())
		return event.(*EmittedEventInfo), ok
	}

	// queued
	event, _ := recordEnsureNoError(core.WorkflowExecution_QUEUED)
	assert.Equal(t, core.WorkflowExecution_QUEUED.String(), event.phase)
	lastUpdatedAt := event.lastUpdatedAt

	// Running
	event, _ = recordEnsureNoError(core.WorkflowExecution_RUNNING)
	assert.Equal(t, core.WorkflowExecution_RUNNING.String(), event.phase)
	assert.True(t, event.lastUpdatedAt.After(lastUpdatedAt))

	// phase Succeeded should delete the entry
	event, _ = recordEnsureNoError(core.WorkflowExecution_SUCCEEDED)
	assert.Equal(t, core.WorkflowExecution_SUCCEEDED.String(), event.phase)
	assert.True(t, event.lastUpdatedAt.After(lastUpdatedAt))
}

func TestIdempotentNodeEventRecorder_PhaseChange(t *testing.T) {
	ctx := context.Background()

	adminEventSink, adminClient := CreateMockAdminEventSink(t)
	adminClient.On("CreateNodeEvent", ctx, mock.Anything).Return(&admin.NodeExecutionEventResponse{}, nil)
	mockScope := promutils.NewTestScope()

	cfg := GetConfig(ctx)
	recorder, err := NewIdempotentNodeEventRecorder(adminEventSink, mockScope, cfg)
	assert.NoError(t, err)

	idempotentRecorder := recorder.(*idempotentWorkFlowEventRecorder)
	recordEnsureNoError := func (phase core.NodeExecution_Phase) (*EmittedEventInfo, bool) {
		nodeExecutionEvent := createNodeEvent(phase)
		err := recorder.RecordNodeEvent(ctx, nodeExecutionEvent)
		assert.NoError(t, err)
		event, ok := idempotentRecorder.cache.Get(nodeExecutionEvent.Id.String())
		return event.(*EmittedEventInfo), ok
	}

	// queued
	event, _ := recordEnsureNoError(core.NodeExecution_QUEUED)
	assert.Equal(t, core.NodeExecution_QUEUED.String(), event.phase)
	lastUpdatedAt := event.lastUpdatedAt

	// Running
	event, _ = recordEnsureNoError(core.NodeExecution_RUNNING)
	assert.Equal(t, core.NodeExecution_RUNNING.String(), event.phase)
	assert.True(t, event.lastUpdatedAt.After(lastUpdatedAt))

	// phase Succeeded should delete the entry
	event, _ = recordEnsureNoError(core.NodeExecution_SUCCEEDED)
	assert.Equal(t, core.NodeExecution_SUCCEEDED.String(), event.phase)
	assert.True(t, event.lastUpdatedAt.After(lastUpdatedAt))
}

func TestIdempotentTaskEventRecorder_PhaseChange(t *testing.T) {
	ctx := context.Background()

	adminEventSink, adminClient := CreateMockAdminEventSink(t)
	adminClient.On("CreateTaskEvent", ctx, mock.Anything).Return(&admin.TaskExecutionEventResponse{}, nil)
	mockScope := promutils.NewTestScope()

	cfg := GetConfig(ctx)
	recorder, err := NewIdempotentTaskEventRecorder(adminEventSink, mockScope, cfg)
	assert.NoError(t, err)

	idempotentRecorder := recorder.(*idempotentWorkFlowEventRecorder)
	recordEnsureNoError := func(phase core.TaskExecution_Phase) (*EmittedEventInfo, bool) {
		taskExecutionEvent := createTaskEvent(phase)
		err := recorder.RecordTaskEvent(ctx, taskExecutionEvent)
		assert.NoError(t, err)
		event, ok := idempotentRecorder.cache.Get(taskExecutionEvent.TaskId.String())
		return event.(*EmittedEventInfo), ok
	}

	// queued
	event, _ := recordEnsureNoError(core.TaskExecution_QUEUED)
	assert.Equal(t, core.TaskExecution_QUEUED.String(), event.phase)
	lastUpdatedAt := event.lastUpdatedAt

	// Running
	event, _ = recordEnsureNoError(core.TaskExecution_RUNNING)
	assert.Equal(t, core.TaskExecution_RUNNING.String(), event.phase)
	assert.True(t, event.lastUpdatedAt.After(lastUpdatedAt))

	// phase Succeeded should delete the entry
	event, _ = recordEnsureNoError(core.TaskExecution_SUCCEEDED)
	assert.Equal(t, core.TaskExecution_SUCCEEDED.String(), event.phase)
	assert.True(t, event.lastUpdatedAt.After(lastUpdatedAt))
}

func TestIdempotentEventRecorder_DuplicateEvents(t *testing.T) {
	ctx := context.Background()

	adminEventSink, adminClient := CreateMockAdminEventSink(t)
	adminClient.On("CreateWorkflowEvent", ctx, mock.Anything).Return(&admin.WorkflowExecutionEventResponse{}, nil)
	mockScope := promutils.NewTestScope()

	cfg := GetConfig(ctx)
	recorder, err := NewIdempotentWorkflowEventRecorder(adminEventSink, mockScope, cfg)
	assert.NoError(t, err)

	idempotentRecorder := recorder.(*idempotentWorkFlowEventRecorder)
	wfEvent := createWfEvent(core.WorkflowExecution_QUEUED)
	id := wfEvent.ExecutionId.String()

	// First queued event
	err = idempotentRecorder.idempotentRecord(ctx, id, wfEvent, wfEvent.Phase.String())
	assert.NoError(t, err)
	o, _ := idempotentRecorder.cache.Get(id)
	event := o.(*EmittedEventInfo)
	lastUpdatedAt := event.lastUpdatedAt

	// Second queued event should be a no-op
	err = idempotentRecorder.idempotentRecord(ctx, id, wfEvent, wfEvent.Phase.String())
	assert.NoError(t, err)
	o, _ = idempotentRecorder.cache.Get(id)
	event = o.(*EmittedEventInfo)
	assert.Equal(t, event.lastUpdatedAt, lastUpdatedAt)
	lastUpdatedAt = event.lastUpdatedAt

	// Third queued event will be resent as maxUpdateLag is reduced to 0
	idempotentRecorder.maxUpdateLagSeconds = 0
	err = idempotentRecorder.idempotentRecord(ctx, id, wfEvent, wfEvent.Phase.String())
	assert.NoError(t, err)
	o, _ = idempotentRecorder.cache.Get(id)
	event = o.(*EmittedEventInfo)
	assert.True(t, event.lastUpdatedAt.After(lastUpdatedAt))
}

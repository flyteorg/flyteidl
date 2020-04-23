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

	recorder := NewIdempotentWorkflowEventRecorder(adminEventSink, mockScope)
	idempotentRecorder := recorder.(*idempotentWorkFlowEventRecorder)

	recordEnsureNoError := func (phase core.WorkflowExecution_Phase) (EmittedEventInfo, bool) {
		wfEvent := createWfEvent(phase)
		err := recorder.RecordWorkflowEvent(ctx, wfEvent)
		assert.NoError(t, err)
		event, ok := idempotentRecorder.events[wfEvent.ExecutionId.String()]
		return event, ok
	}

	// queued
	event, ok := recordEnsureNoError(core.WorkflowExecution_QUEUED)
	assert.Equal(t, core.WorkflowExecution_QUEUED.String(), event.phase)
	lastUpdatedAt := event.lastUpdatedAt

	// Running
	event, ok = recordEnsureNoError(core.WorkflowExecution_RUNNING)
	assert.Equal(t, core.WorkflowExecution_RUNNING.String(), event.phase)
	assert.True(t, event.lastUpdatedAt.After(lastUpdatedAt))

	// phase Succeeded should delete the entry
	event, ok = recordEnsureNoError(core.WorkflowExecution_SUCCEEDED)
	assert.False(t, ok)
}

func TestIdempotentNodeEventRecorder_PhaseChange(t *testing.T) {
	ctx := context.Background()

	adminEventSink, adminClient := CreateMockAdminEventSink(t)
	adminClient.On("CreateNodeEvent", ctx, mock.Anything).Return(&admin.NodeExecutionEventResponse{}, nil)
	mockScope := promutils.NewTestScope()

	recorder := NewIdempotentNodeEventRecorder(adminEventSink, mockScope)
	idempotentRecorder := recorder.(*idempotentWorkFlowEventRecorder)

	recordEnsureNoError := func (phase core.NodeExecution_Phase) (EmittedEventInfo, bool) {
		nodeExecutionEvent := createNodeEvent(phase)
		err := recorder.RecordNodeEvent(ctx, nodeExecutionEvent)
		assert.NoError(t, err)
		event, ok := idempotentRecorder.events[nodeExecutionEvent.Id.String()]
		return event, ok
	}

	// queued
	event, ok := recordEnsureNoError(core.NodeExecution_QUEUED)
	assert.Equal(t, core.NodeExecution_QUEUED.String(), event.phase)
	lastUpdatedAt := event.lastUpdatedAt

	// Running
	event, ok = recordEnsureNoError(core.NodeExecution_RUNNING)
	assert.Equal(t, core.NodeExecution_RUNNING.String(), event.phase)
	assert.True(t, event.lastUpdatedAt.After(lastUpdatedAt))

	// phase Succeeded should delete the entry
	event, ok = recordEnsureNoError(core.NodeExecution_SUCCEEDED)
	assert.False(t, ok)
}

func TestIdempotentTaskEventRecorder_PhaseChange(t *testing.T) {
	ctx := context.Background()

	adminEventSink, adminClient := CreateMockAdminEventSink(t)
	adminClient.On("CreateNodeEvent", ctx, mock.Anything).Return(&admin.NodeExecutionEventResponse{}, nil)
	mockScope := promutils.NewTestScope()

	recorder := NewIdempotentTaskEventRecorder(adminEventSink, mockScope)
	idempotentRecorder := recorder.(*idempotentWorkFlowEventRecorder)

	recordEnsureNoError := func (phase core.TaskExecution_Phase) (EmittedEventInfo, bool) {
		taskExecutionEvent := createTaskEvent(phase)
		err := recorder.RecordTaskEvent(ctx, taskExecutionEvent)
		assert.NoError(t, err)
		event, ok := idempotentRecorder.events[taskExecutionEvent.TaskId.String()]
		return event, ok
	}

	// queued
	event, ok := recordEnsureNoError(core.TaskExecution_QUEUED)
	assert.Equal(t, core.TaskExecution_QUEUED.String(), event.phase)
	lastUpdatedAt := event.lastUpdatedAt

	// Running
	event, ok = recordEnsureNoError(core.TaskExecution_RUNNING)
	assert.Equal(t, core.TaskExecution_RUNNING.String(), event.phase)
	assert.True(t, event.lastUpdatedAt.After(lastUpdatedAt))

	// phase Succeeded should delete the entry
	event, ok = recordEnsureNoError(core.TaskExecution_SUCCEEDED)
	assert.False(t, ok)
}

func TestIdempotentEventRecorder_DuplicateEvents(t *testing.T) {
	ctx := context.Background()

	adminEventSink, adminClient := CreateMockAdminEventSink(t)
	adminClient.On("CreateWorkflowEvent", ctx, mock.Anything).Return(&admin.WorkflowExecutionEventResponse{}, nil)
	mockScope := promutils.NewTestScope()

	recorder := NewIdempotentWorkflowEventRecorder(adminEventSink, mockScope)
	idempotentRecorder := recorder.(*idempotentWorkFlowEventRecorder)
	wfEvent := createWfEvent(core.WorkflowExecution_QUEUED)
	id := wfEvent.ExecutionId.String()

	// First queued event
	err := idempotentRecorder.idempotentRecord(ctx, id, wfEvent, wfEvent.Phase.String(), false)
	assert.NoError(t, err)
	event, _ := idempotentRecorder.events[id]
	lastUpdatedAt := event.lastUpdatedAt

	// Second queued event should be a no-op
	err = idempotentRecorder.idempotentRecord(ctx, id, wfEvent, wfEvent.Phase.String(), false)
	assert.NoError(t, err)
	event, _ = idempotentRecorder.events[id]
	assert.Equal(t, event.lastUpdatedAt, lastUpdatedAt)
	lastUpdatedAt = event.lastUpdatedAt

	// Third queued event will be resent as maxUpdateLag is reduced to 0
	idempotentRecorder.maxUpdateLagSeconds = 0
	err = idempotentRecorder.idempotentRecord(ctx, id, wfEvent, wfEvent.Phase.String(), false)
	assert.NoError(t, err)
	event, _ = idempotentRecorder.events[id]
	assert.True(t, event.lastUpdatedAt.After(lastUpdatedAt))
}

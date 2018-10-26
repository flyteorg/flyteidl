package events

import (
	"context"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/golang/protobuf/ptypes"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/admin"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/event"
	"github.com/stretchr/testify/assert"
)

func GetTestAdminEventSink(t *testing.T) (EventSink, *MockAdminServiceClient) {
	ctrl := gomock.NewController(t)
	client := NewMockAdminServiceClient(ctrl)
	return &adminEventSink{
		adminClient:     client,
		adminClientConn: nil,
	}, client
}

func TestAdminWorkflowEvent(t *testing.T) {
	ctx := context.Background()
	adminEventSink, adminClient := GetTestAdminEventSink(t)

	wfEvent := &event.WorkflowExecutionEvent{
		Phase:        core.WorkflowExecutionPhase_WORKFLOW_PHASE_RUNNING,
		OccurredAt:   ptypes.TimestampNow(),
		ExecutionId:  "",
		ProducerId:   "",
		OutputResult: &event.WorkflowExecutionEvent_OutputUri{""},
	}

	adminClient.EXPECT().CreateWorkflowEvent(
		ctx,
		&admin.WorkflowExecutionEventRequest{
			Event: wfEvent,
		},
	).Return(&admin.WorkflowExecutionEventResponse{}, nil)

	err := adminEventSink.Sink(ctx, WorkflowEvent, wfEvent)
	assert.NoError(t, err)
}

func TestAdminNodeEvent(t *testing.T) {
	ctx := context.Background()
	adminEventSink, adminClient := GetTestAdminEventSink(t)

	nodeEvent := &event.NodeExecutionEvent{
		Phase:        core.NodeExecutionPhase_NODE_PHASE_FAILED,
		OccurredAt:   ptypes.TimestampNow(),
		ExecutionId:  "",
		ProducerId:   "",
		InputUri:     "input-uri",
		RetryAttempt: 1,
		OutputResult: &event.NodeExecutionEvent_OutputUri{OutputUri: ""},
	}

	adminClient.EXPECT().CreateNodeEvent(
		ctx,
		&admin.NodeExecutionEventRequest{
			Event: nodeEvent,
		},
	).Return(&admin.NodeExecutionEventResponse{}, nil)

	err := adminEventSink.Sink(ctx, NodeEvent, nodeEvent)
	assert.NoError(t, err)
}

func TestAdminTaskEvent(t *testing.T) {
	ctx := context.Background()
	adminEventSink, adminClient := GetTestAdminEventSink(t)

	taskEvent := &event.TaskExecutionEvent{
		Phase:        core.TaskExecutionPhase_TASK_PHASE_SUCCEEDED,
		OccurredAt:   ptypes.TimestampNow(),
		TaskId:       "task-id",
		RetryAttempt: 1,
		ClientId:     "client-id",
		ParentId:     "parent-id",
		LogUri:       "log-uri",
	}

	adminClient.EXPECT().CreateTaskEvent(
		ctx,
		&admin.TaskExecutionEventRequest{
			Event: taskEvent,
		},
	).Return(&admin.TaskExecutionEventResponse{}, nil)

	err := adminEventSink.Sink(ctx, TaskEvent, taskEvent)
	assert.NoError(t, err)
}

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

// This test suite uses Gomock to mock the AdminServiceClient. Run the following command in CLI or in the IntelliJ
// IDE "Go Generate File". This will create a mock_adminclient.go file within this package.
//go:generate mockgen -package events -destination=mock_adminclient.go github.com/lyft/flyteidl/gen/pb-go/flyteidl/service AdminServiceClient

func GetTestAdminEventSink(t *testing.T) (EventSink, *MockAdminServiceClient) {
	ctrl := gomock.NewController(t)
	client := NewMockAdminServiceClient(ctrl)
	return &adminEventSink{
		adminClient: client,
	}, client
}

func TestAdminWorkflowEvent(t *testing.T) {
	ctx := context.Background()
	adminEventSink, adminClient := GetTestAdminEventSink(t)

	wfEvent := &event.WorkflowExecutionEvent{
		Phase:        core.WorkflowExecution_RUNNING,
		OccurredAt:   ptypes.TimestampNow(),
		ExecutionId:  nil,
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
		Id: &core.NodeExecutionIdentifier{
			NodeId: "node-id",
		},
		Phase:        core.NodeExecution_FAILED,
		OccurredAt:   ptypes.TimestampNow(),
		ProducerId:   "",
		InputUri:     "input-uri",
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
		Phase:        core.TaskExecution_SUCCEEDED,
		OccurredAt:   ptypes.TimestampNow(),
		TaskId:       &core.Identifier{ResourceType: core.ResourceType_TASK, Name: "task-id"},
		RetryAttempt: 1,
		ParentNodeExecutionId: &core.NodeExecutionIdentifier{
			NodeId: "node-id",
			ExecutionId: &core.WorkflowExecutionIdentifier{
				Project: "p",
				Domain:  "d",
				Name:    "n",
			},
		},
		Logs: []*core.TaskLog{{Uri: "logs.txt"}},
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

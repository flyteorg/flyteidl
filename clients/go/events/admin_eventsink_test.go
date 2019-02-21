package events

import (
	"context"
	"testing"

	"github.com/golang/protobuf/ptypes"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/event"
	"github.com/stretchr/testify/assert"
	"github.com/lyft/flyteidl/clients/go/admin/mocks"
	"github.com/stretchr/testify/mock"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/admin"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"github.com/lyft/flyteidl/clients/go/events/errors"
)

// This test suite uses Mockery to mock the AdminServiceClient. Run the following command in CLI or in the IntelliJ
// IDE "Go Generate File". This will create a mocks/AdminServiceClient.go file
//go:generate mockery -dir ../../../gen/pb-go/flyteidl/service -name AdminServiceClient -output ../admin/mocks

func CreateMockAdminEventSink(t *testing.T) (EventSink, *mocks.AdminServiceClient) {
	mockClient := &mocks.AdminServiceClient{}
	return &adminEventSink{
		adminClient: mockClient,
	}, mockClient
}

func TestAdminWorkflowEvent(t *testing.T) {
	ctx := context.Background()
	adminEventSink, adminClient := CreateMockAdminEventSink(t)

	wfEvent := &event.WorkflowExecutionEvent{
		Phase:        core.WorkflowExecution_RUNNING,
		OccurredAt:   ptypes.TimestampNow(),
		ExecutionId:  nil,
		ProducerId:   "",
		OutputResult: &event.WorkflowExecutionEvent_OutputUri{""},
	}

	adminClient.On(
		"CreateWorkflowEvent",
		ctx,
		mock.MatchedBy(func(req *admin.WorkflowExecutionEventRequest) bool {
			return req.Event == wfEvent
		},
	)).Return(&admin.WorkflowExecutionEventResponse{}, nil)

	err := adminEventSink.Sink(ctx, wfEvent)
	assert.NoError(t, err)
}

func TestAdminNodeEvent(t *testing.T) {
	ctx := context.Background()
	adminEventSink, adminClient := CreateMockAdminEventSink(t)

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

	adminClient.On(
		"CreateNodeEvent",
		ctx,
		mock.MatchedBy(func(req *admin.NodeExecutionEventRequest) bool {
			return req.Event == nodeEvent
		}),
	).Return(&admin.NodeExecutionEventResponse{}, nil)

	err := adminEventSink.Sink(ctx, nodeEvent)
	assert.NoError(t, err)
}

func TestAdminTaskEvent(t *testing.T) {
	ctx := context.Background()
	adminEventSink, adminClient := CreateMockAdminEventSink(t)

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

	adminClient.On(
		"CreateTaskEvent",
		ctx,
		mock.MatchedBy(func(req *admin.TaskExecutionEventRequest) bool {
			return req.Event == taskEvent
		}),
	).Return(&admin.TaskExecutionEventResponse{}, nil)

	err := adminEventSink.Sink(ctx, taskEvent)
	assert.NoError(t, err)
}

func TestAdminAlreadyExistsError(t *testing.T) {
	ctx := context.Background()
	adminEventSink, adminClient := CreateMockAdminEventSink(t)

	taskEvent := &event.TaskExecutionEvent{
		Phase:        core.TaskExecution_SUCCEEDED,
		OccurredAt:   ptypes.TimestampNow(),
		TaskId:       &core.Identifier{ResourceType: core.ResourceType_TASK, Name: "task-id"},
		RetryAttempt: 1,
		ParentNodeExecutionId:	&core.NodeExecutionIdentifier{
			NodeId: "node-id",
			ExecutionId: &core.WorkflowExecutionIdentifier{
				Project: "p",
				Domain: "d",
				Name: "n",
			},
		},
		Logs: []*core.TaskLog{{ Uri: "logs.txt"}},
	}

	alreadyExistErr := status.Error(codes.AlreadyExists, "Grpc AlreadyExists error")

	adminClient.On(
		"CreateTaskEvent",
		ctx,
		mock.MatchedBy(func(req *admin.TaskExecutionEventRequest) bool { return true }),
	).Return(nil, alreadyExistErr)

	err := adminEventSink.Sink(ctx, taskEvent)
	assert.Error(t, err)
	assert.True(t, errors.IsAlreadyExists(err))
}

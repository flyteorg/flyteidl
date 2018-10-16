package events

import (
	"context"
	"fmt"

	"net/url"

	"github.com/golang/protobuf/proto"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/admin"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/event"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/lyft/flytestdlib/logger"
	"google.golang.org/grpc"
)

type adminEventSink struct {
	adminClient     service.AdminServiceClient
	adminClientConn *grpc.ClientConn
}

// Constructs a new EventSink that sends events to FlyteAdmin through gRPC
func NewAdminEventSink(ctx context.Context, adminURL url.URL) (EventSink, error) {
	var opts []grpc.DialOption
	opts = append(opts, grpc.WithInsecure())
	conn, err := grpc.Dial(adminURL.String(), opts...)
	if err != nil {
		return nil, err
	}
	client := service.NewAdminServiceClient(conn)

	eventSink := &adminEventSink{
		adminClient:     client,
		adminClientConn: conn,
	}

	logger.Infof(ctx, "Created new AdminEvenSink to service: %s", adminURL.String())
	return eventSink, nil
}

// Sends events to the FlyteAdmin service through gRPC
func (s *adminEventSink) Sink(ctx context.Context, eventType EventType, message proto.Message) error {
	logger.Debugf(ctx, "AdminEventSink received a new Event %s, message %s", eventType, message.String())

	switch eventType {
	case WorkflowEvent:
		event, ok := message.(*event.WorkflowExecutionEvent)
		if !ok {
			return fmt.Errorf("failed to convert workflow event to its protobuf structure")
		}
		request := &admin.WorkflowExecutionEventRequest{
			Event: event,
		}
		_, err := s.adminClient.CreateWorkflowEvent(ctx, request)

		if err != nil {
			logger.Errorf(ctx, "failed to Send node workflow(%d, %d) %v", event.ExecutionId, event.Phase, err)
			return err
		}
	case NodeEvent:
		event, ok := message.(*event.NodeExecutionEvent)
		if !ok {
			return fmt.Errorf("failed to convert node execution event to its protobuf structure")
		}
		request := &admin.NodeExecutionEventRequest{
			Event: event,
		}
		_, err := s.adminClient.CreateNodeEvent(ctx, request)
		if err != nil {
			logger.Errorf(ctx, "failed to Send node event(%d, %d) %v", event.NodeId, event.Phase, err)
			return err
		}
	case TaskEvent:
		event, ok := message.(*event.TaskExecutionEvent)
		if !ok {
			return fmt.Errorf("failed to convert node execution event to its protobuf structure")
		}
		request := &admin.TaskExecutionEventRequest{
			Event: event,
		}
		_, err := s.adminClient.CreateTaskEvent(ctx, request)
		if err != nil {
			logger.Errorf(ctx, "failed to Send node event(%d, %d) %v", event.TaskId, event.Phase, err)
			return err
		}
	}

	return nil
}

// Closes the gRPC client connection. This should be deferred on the client does shutdown cleanup.
func (s *adminEventSink) Close() error {
	return s.adminClientConn.Close()
}

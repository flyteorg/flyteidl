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
		ev, ok := message.(*event.WorkflowExecutionEvent)
		if !ok {
			return fmt.Errorf("incorrect event-type and message. For eventType (WorkflowEvent), *event.WorkflowExecutionEvent is expected")
		}
		request := &admin.WorkflowExecutionEventRequest{
			Event: ev,
		}
		_, err := s.adminClient.CreateWorkflowEvent(ctx, request)

		if err != nil {
			logger.Errorf(ctx, "failed to send workflow event for [%s] in phase [%s] caused by error: %s", ev.ExecutionId.Name, ev.Phase.String(), err.Error())
			return err
		}
	case NodeEvent:
		ev, ok := message.(*event.NodeExecutionEvent)
		if !ok {
			return fmt.Errorf("incorrect event-type and message. For eventType (NodeEvent), *event.WorkflowExecutionEvent is expected")
		}
		request := &admin.NodeExecutionEventRequest{
			Event: ev,
		}
		_, err := s.adminClient.CreateNodeEvent(ctx, request)
		if err != nil {
			logger.Errorf(ctx, "failed to send node event for [%s] in phase [%s] caused by error: %s", ev.Id.NodeId, ev.Phase.String(), err.Error())
			return err
		}
	case TaskEvent:
		ev, ok := message.(*event.TaskExecutionEvent)
		if !ok {
			return fmt.Errorf("failed to convert task execution event to its protobuf structure")
		}
		request := &admin.TaskExecutionEventRequest{
			Event: ev,
		}
		_, err := s.adminClient.CreateTaskEvent(ctx, request)
		if err != nil {
			logger.Errorf(ctx, "failed to send task event for [%s] Retry[%d] in phase [%s] caused by error: %s", ev.TaskId.Name, ev.RetryAttempt, ev.Phase.String(), err.Error())
			return err
		}
	default:
		return fmt.Errorf("unknown event type [%s]", eventType.String())
	}

	return nil
}

// Closes the gRPC client connection. This should be deferred on the client does shutdown cleanup.
func (s *adminEventSink) Close() error {
	return s.adminClientConn.Close()
}

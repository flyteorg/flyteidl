package events

import (
	"context"
	"fmt"

	admin2 "github.com/lyft/flyteidl/clients/go/admin"

	"github.com/golang/protobuf/proto"
	"github.com/lyft/flyteidl/clients/go/events/errors"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/admin"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/event"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/lyft/flytestdlib/logger"
)

type adminEventSink struct {
	adminClient service.AdminServiceClient
}

// Constructs a new EventSink that sends events to FlyteAdmin through gRPC
func NewAdminEventSink(ctx context.Context, adminClient service.AdminServiceClient) (EventSink, error) {
	eventSink := &adminEventSink{
		adminClient: adminClient,
	}

	logger.Infof(ctx, "Created new AdminEvenSink to Admin service")
	return eventSink, nil
}

// Sends events to the FlyteAdmin service through gRPC
func (s *adminEventSink) Sink(ctx context.Context, message proto.Message) error {
	logger.Debugf(ctx, "AdminEventSink received a new event %s", message.String())

	switch eventMessage := message.(type) {
	case *event.WorkflowExecutionEvent:
		request := &admin.WorkflowExecutionEventRequest{
			Event: eventMessage,
		}
		_, err := s.adminClient.CreateWorkflowEvent(ctx, request)

		if err != nil {
			return errors.WrapError(err)
		}
	case *event.NodeExecutionEvent:
		request := &admin.NodeExecutionEventRequest{
			Event: eventMessage,
		}
		_, err := s.adminClient.CreateNodeEvent(ctx, request)
		if err != nil {
			return errors.WrapError(err)
		}
	case *event.TaskExecutionEvent:
		request := &admin.TaskExecutionEventRequest{
			Event: eventMessage,
		}
		_, err := s.adminClient.CreateTaskEvent(ctx, request)
		if err != nil {
			return errors.WrapError(err)
		}
	default:
		return fmt.Errorf("unknown event type [%s]", eventMessage.String())
	}

	return nil
}

// Closes the gRPC client connection. This should be deferred on the client does shutdown cleanup.
func (s *adminEventSink) Close() error {
	return nil
}

func ConstructEventSink(ctx context.Context, config *Config) (EventSink, error) {
	switch config.Type {
	case EventSinkLog:
		return NewLogSink()
	case EventSinkFile:
		return NewFileSink(config.FilePath)
	case EventSinkAdmin:
		adminClient, err := admin2.InitializeAdminClientFromConfig(ctx)
		if err != nil {
			return nil, err
		}
		return NewAdminEventSink(ctx, adminClient)
	default:
		return NewStdoutSink()
	}
}

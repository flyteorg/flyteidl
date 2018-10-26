package events

import (
	"context"

	"sync"

	"github.com/golang/protobuf/proto"
)

type EventSinkType = string

var (
	eventSink EventSink
	onlyOnce  sync.Once
)

// EventSink determines how/where Events are emitted to. The type of EventSink the operator wants should be configurable.
// In Flyte, we also have local implementations so that operators can emit events without dependency on other services.
type EventSink interface {

	// Send the Event to this EventSink. The EventSink will identify the type of message through the
	// specified eventType and sink it appropriately based on the type.
	Sink(ctx context.Context, eventType EventType, message proto.Message) error

	// Callers should close the EventSink when it is no longer being used as there may be long living
	// connections.
	Close() error
}

// Singleton constructor that returns an EventSink based on the configuration registered.
func ConstructEventSink(ctx context.Context, config *EventSinkConfig) (EventSink, error) {
	var err error

	onlyOnce.Do(func() {
		switch config.Type {
		case EventSinkLog:
			eventSink, err = NewLogSink()
		case EventSinkFile:
			eventSink, err = NewFileSink(config.FilePath)
		case EventSinkAdmin:
			eventSink, err = NewAdminEventSink(ctx, config.Endpoint.URL)
		default:
			eventSink, err = NewStdoutSink()
		}
	})

	if err != nil {
		return nil, err
	}

	return eventSink, nil
}

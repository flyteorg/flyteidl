package events

import (
	"context"

	"github.com/golang/protobuf/proto"
)

type MockEventSink struct {
	SinkCb  func(ctx context.Context, owner string, messageType string, message proto.Message) error
	CloseCb func() error
}

func (t *MockEventSink) Sink(ctx context.Context, owner string, messageType string, message proto.Message) error {
	if t.SinkCb != nil {
		return t.SinkCb(ctx, owner, messageType, message)
	}

	return nil
}

func (t *MockEventSink) Close() error {
	if t.CloseCb != nil {
		return t.CloseCb()
	}

	return nil
}

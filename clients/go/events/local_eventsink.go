package events

import (
	"bufio"
	"context"
	"fmt"
	"os"
	"sync"

	"github.com/golang/protobuf/proto"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/event"
	"github.com/lyft/flytestdlib/utils"
)

type localSink struct {
	mu     sync.Mutex
	writer writer
}

func (s *localSink) Sink(ctx context.Context, eventType EventType, message proto.Message) error {
	s.mu.Lock()
	defer s.writer.Flush()
	defer s.mu.Unlock()

	var eventOutput string
	switch eventType {
	case WorkflowEvent:
		event, ok := message.(*event.WorkflowExecutionEvent)
		if !ok {
			return fmt.Errorf("failed to convert workflow event to its protobuf structure")
		}
		eventOutput = fmt.Sprintf("[--WF EVENT-%d-] Phase: %s\n", utils.GetSequencer().GetNext(), event.Phase)
	case NodeEvent:
		event, ok := message.(*event.NodeExecutionEvent)
		if !ok {
			return fmt.Errorf("failed to convert workflow event to its protobuf structure")
		}
		eventOutput = fmt.Sprintf("[--NODE EVENT-%d-] Phase: %s\n", utils.GetSequencer().GetNext(), event.Phase)
	case TaskEvent:
		event, ok := message.(*event.TaskExecutionEvent)
		if !ok {
			return fmt.Errorf("failed to convert workflow event to its protobuf structure")
		}
		eventOutput = fmt.Sprintf("[--TASK EVENT-%d-] TaskId: %s\n", utils.GetSequencer().GetNext(), event.TaskId)
	}

	return s.writer.Write(ctx, eventOutput)
}

func (s *localSink) Close() error {
	return nil
}

// EventSink will sink events to a writer that puts the events somewhere depending on how it was configured
type writer interface {
	Write(ctx context.Context, content string) error
	Flush() error
}

func NewLogSink() (EventSink, error) {
	return &localSink{writer: &LogWriter{}}, nil
}

func NewStdoutSink() (EventSink, error) {
	return &localSink{writer: &StdWriter{}}, nil
}

func NewFileSink(path string) (EventSink, error) {
	f, err := os.OpenFile(path, os.O_APPEND|os.O_RDWR|os.O_CREATE, os.FileMode(0666))
	if err != nil {
		return nil, err
	}

	w := bufio.NewWriter(f)

	if err != nil {
		return nil, err
	}
	return &localSink{writer: &FileWriter{ioWriter: w}}, nil
}

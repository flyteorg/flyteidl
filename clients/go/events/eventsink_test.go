package events

import (
	"context"
	"io/ioutil"
	"os"
	"path"
	"reflect"
	"strings"
	"testing"

	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/event"
	"github.com/stretchr/testify/assert"
)

func TestFileEvent(t *testing.T) {
	dir, err := ioutil.TempDir("", "eventstest")
	if err != nil {
		assert.Fail(t, "test dir creation failed")
	}
	defer os.RemoveAll(dir)

	file := path.Join(dir, "events.test")
	sink, err := NewFileSink(file)
	if err != nil {
		assert.Fail(t, "failed to create file sync "+err.Error())
	}

	nodeEvent := &event.NodeExecutionEvent{Phase: core.NodeExecutionPhase_NODE_PHASE_RUNNING}
	err = sink.Sink(context.Background(), NodeEvent, nodeEvent)
	assert.NoError(t, err)

	nodeEvent = &event.NodeExecutionEvent{Phase: core.NodeExecutionPhase_NODE_PHASE_SUCCEEDED}
	assert.NoError(t, err)
	err = sink.Sink(context.Background(), NodeEvent, nodeEvent)
	assert.NoError(t, err)

	expected := []string{"[--NODE EVENT-1-] Phase: NODE_PHASE_RUNNING", "[--NODE EVENT-2-] Phase: NODE_PHASE_SUCCEEDED"}
	actual, err := readLinesFromFile(file)
	if err != nil {
		assert.Fail(t, "failed to read file "+err.Error())
	}

	assert.True(t, reflect.DeepEqual(expected, actual))
}

func readLinesFromFile(name string) ([]string, error) {
	/* #nosec */
	raw, err := ioutil.ReadFile(name)

	if err != nil {
		return nil, err
	}

	lines := strings.Split(string(raw), "\n")

	// remove the last element because is an empty element from split
	return lines[0 : len(lines)-1], nil
}

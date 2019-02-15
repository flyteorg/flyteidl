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
		assert.FailNow(t, "test dir creation failed")
	}
	defer func() { assert.NoError(t, os.RemoveAll(dir)) }()

	file := path.Join(dir, "events.test")
	sink, err := NewFileSink(file)
	if err != nil {
		assert.FailNow(t, "failed to create file sync "+err.Error())
	}

	nodeEvent := &event.NodeExecutionEvent{Phase: core.NodeExecution_RUNNING}
	err = sink.Sink(context.Background(), NodeEvent, nodeEvent)
	assert.NoError(t, err)

	nodeEvent = &event.NodeExecutionEvent{Phase: core.NodeExecution_SUCCEEDED}
	assert.NoError(t, err)
	err = sink.Sink(context.Background(), NodeEvent, nodeEvent)
	assert.NoError(t, err)

	expected := []string{"[--NODE EVENT-1-] Phase: RUNNING", "[--NODE EVENT-2-] Phase: SUCCEEDED"}
	actual, err := readLinesFromFile(file)
	if err != nil {
		assert.FailNow(t, "failed to read file "+err.Error())
	}

	areSame := reflect.DeepEqual(expected, actual)
	assert.True(t, areSame)
	if !areSame {
		t.Logf("Expected output: %v\n Actual output: %v", expected, actual)
	}
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

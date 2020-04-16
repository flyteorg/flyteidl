package events

import (
	"context"
	"testing"

	"github.com/lyft/flytestdlib/contextutils"
	"github.com/lyft/flytestdlib/promutils"
	"github.com/lyft/flytestdlib/promutils/labeled"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/event"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/admin"
)

func init() {
	labeled.SetMetricKeys(contextutils.AppNameKey)
}

func createWfEvent(phase core.WorkflowExecution_Phase) *event.WorkflowExecutionEvent {

	return &event.WorkflowExecutionEvent{
		ExecutionId: &core.WorkflowExecutionIdentifier {Project: "p", Domain: "d", Name:"w"},
		Phase: phase,
	}
}

func TestIdempotentWorkflowEventRecorder(t *testing.T) {
	ctx := context.Background()

	adminEventSink, adminClient := CreateMockAdminEventSink(t)
	adminClient.On("CreateWorkflowEvent", ctx, mock.Anything).Return(&admin.WorkflowExecutionEventResponse{}, nil)
	mockScope := promutils.NewTestScope()

	recorder := NewIdempotentWorkflowEventRecorder(adminEventSink, mockScope)
	idempotentRecorder := recorder.(*idempotentWorkFlowEventRecorder)

	wfEvent := createWfEvent(core.WorkflowExecution_QUEUED)
	err := recorder.RecordWorkflowEvent(ctx, wfEvent)
	assert.NoError(t, err)
	assert.Equal(t, core.WorkflowExecution_QUEUED.String(), idempotentRecorder.events[wfEvent.ExecutionId.String()].phase)
}

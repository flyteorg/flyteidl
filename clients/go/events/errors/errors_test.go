package errors

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func isEventError(err error) bool {
	_, ok := err.(*EventError)
	return ok
}

func isUnknownError(err error) bool {
	_, isGrpcErr := status.FromError(err)
	isEventErr := isEventError(err)
	return !isEventErr && !isGrpcErr
}

// Test that we wrap the gRPC error to our correct one
func TestWrapErrors(t *testing.T) {
	tests := []struct {
		name         string
		inputError   error
		expectedFunc func(error) bool
	}{
		{"alreadyExists", status.Error(codes.AlreadyExists, "Already exists"), IsAlreadyExists},
		{"invalidArgs", status.Error(codes.InvalidArgument, "Invalid Arguments"), IsInvalidArguments},
		{"resourceExhausted", status.Error(codes.ResourceExhausted, "Limit Exceeded"), IsResourceExhausted},
		{"uncaughtError", status.Error(codes.Unknown, "Unknown Err"), isEventError},
		{"uncaughtError", fmt.Errorf("Random err"), isUnknownError},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			wrappedErr := WrapError(test.inputError)
			assert.True(t, test.expectedFunc(wrappedErr))
		})
	}
}

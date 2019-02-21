package errors

import (
	"fmt"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type ErrorCode string

const (
	AlreadyExists ErrorCode = "AlreadyExists"
	ExecutionNotFound ErrorCode = "ExecutionNotFound"
	ResourceExhausted ErrorCode = "ResourceExhausted"
	InvalidArgument ErrorCode = "InvalidArgument"
	EventSinkError ErrorCode = "EventSinkError"
)

type EventError struct {
	Code    ErrorCode
	Cause   error
	Message string
}

func (r EventError) Error() string {
	return fmt.Sprintf("%s: %s, caused by [%s]", r.Code, r.Message, r.Cause.Error())
}

func WrapError(err error) error {
	// check if error is gRPC, and convert into our own custom error
	statusErr, ok := status.FromError(err)
	if !ok {
		return err
	}

	switch statusErr.Code() {
	case codes.AlreadyExists:
		return wrapf(AlreadyExists, err, "Event already exists")
	case codes.NotFound:
		return wrapf(ExecutionNotFound, err, "The execution that the event belongs to does not exist")
	case codes.ResourceExhausted:
		return wrapf(ResourceExhausted, err, "Events are sent too often, exceeded the rate limit")
	case codes.InvalidArgument:
		return wrapf(InvalidArgument, err, "Invalid fields for event message")
	default:
		// Generic error for default case
		return wrapf(EventSinkError, err, "Error sending event")
	}
}

func wrapf(code ErrorCode, cause error, msg string, args ...interface{}) error {
	return &EventError{
		Code:    code,
		Cause:   cause,
		Message: fmt.Sprintf(msg, args...),
	}
}

// Checks if the error is of type EventError and the ErrorCode is of type AlreadyExists
func IsAlreadyExists(err error) bool {
	e, ok := err.(*EventError)
	if ok {
		return e.Code == AlreadyExists
	}
	return false
}

// Checks if the error is of type EventError and the ErrorCode is of type InvalidArgument
func IsInvalidArguments(err error) bool {
	e, ok := err.(*EventError)
	if ok {
		return e.Code == InvalidArgument
	}
	return false
}

// Checks if the error is of type EventError and the ErrorCode is of type ExecutionNotFound
func IsNotFound(err error) bool {
	e, ok := err.(*EventError)
	if ok {
		return e.Code == ExecutionNotFound
	}
	return false
}

// Checks if the error is of type EventError and the ErrorCode is of type ResourceExhausted
func IsResourceExhausted(err error) bool {
	e, ok := err.(*EventError)
	if ok {
		return e.Code == ResourceExhausted
	}
	return false
}

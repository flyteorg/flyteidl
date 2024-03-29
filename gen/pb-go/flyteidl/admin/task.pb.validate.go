// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: flyteidl/admin/task.proto

package admin

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"strings"
	"time"
	"unicode/utf8"

	"github.com/golang/protobuf/ptypes"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = ptypes.DynamicAny{}
)

// define the regex for a UUID once up-front
var _task_uuidPattern = regexp.MustCompile("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$")

// Validate checks the field values on TaskCreateRequest with the rules defined
// in the proto definition for this message. If any rules are violated, an
// error is returned.
func (m *TaskCreateRequest) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetId()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskCreateRequestValidationError{
				field:  "Id",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetSpec()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskCreateRequestValidationError{
				field:  "Spec",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// TaskCreateRequestValidationError is the validation error returned by
// TaskCreateRequest.Validate if the designated constraints aren't met.
type TaskCreateRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TaskCreateRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TaskCreateRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TaskCreateRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TaskCreateRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TaskCreateRequestValidationError) ErrorName() string {
	return "TaskCreateRequestValidationError"
}

// Error satisfies the builtin error interface
func (e TaskCreateRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTaskCreateRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TaskCreateRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TaskCreateRequestValidationError{}

// Validate checks the field values on TaskCreateResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *TaskCreateResponse) Validate() error {
	if m == nil {
		return nil
	}

	return nil
}

// TaskCreateResponseValidationError is the validation error returned by
// TaskCreateResponse.Validate if the designated constraints aren't met.
type TaskCreateResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TaskCreateResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TaskCreateResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TaskCreateResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TaskCreateResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TaskCreateResponseValidationError) ErrorName() string {
	return "TaskCreateResponseValidationError"
}

// Error satisfies the builtin error interface
func (e TaskCreateResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTaskCreateResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TaskCreateResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TaskCreateResponseValidationError{}

// Validate checks the field values on Task with the rules defined in the proto
// definition for this message. If any rules are violated, an error is returned.
func (m *Task) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetId()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskValidationError{
				field:  "Id",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetClosure()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskValidationError{
				field:  "Closure",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for ShortDescription

	return nil
}

// TaskValidationError is the validation error returned by Task.Validate if the
// designated constraints aren't met.
type TaskValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TaskValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TaskValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TaskValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TaskValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TaskValidationError) ErrorName() string { return "TaskValidationError" }

// Error satisfies the builtin error interface
func (e TaskValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTask.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TaskValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TaskValidationError{}

// Validate checks the field values on TaskList with the rules defined in the
// proto definition for this message. If any rules are violated, an error is returned.
func (m *TaskList) Validate() error {
	if m == nil {
		return nil
	}

	for idx, item := range m.GetTasks() {
		_, _ = idx, item

		if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return TaskListValidationError{
					field:  fmt.Sprintf("Tasks[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	// no validation rules for Token

	return nil
}

// TaskListValidationError is the validation error returned by
// TaskList.Validate if the designated constraints aren't met.
type TaskListValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TaskListValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TaskListValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TaskListValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TaskListValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TaskListValidationError) ErrorName() string { return "TaskListValidationError" }

// Error satisfies the builtin error interface
func (e TaskListValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTaskList.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TaskListValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TaskListValidationError{}

// Validate checks the field values on TaskSpec with the rules defined in the
// proto definition for this message. If any rules are violated, an error is returned.
func (m *TaskSpec) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetTemplate()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskSpecValidationError{
				field:  "Template",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetDescription()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskSpecValidationError{
				field:  "Description",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// TaskSpecValidationError is the validation error returned by
// TaskSpec.Validate if the designated constraints aren't met.
type TaskSpecValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TaskSpecValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TaskSpecValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TaskSpecValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TaskSpecValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TaskSpecValidationError) ErrorName() string { return "TaskSpecValidationError" }

// Error satisfies the builtin error interface
func (e TaskSpecValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTaskSpec.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TaskSpecValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TaskSpecValidationError{}

// Validate checks the field values on TaskClosure with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *TaskClosure) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetCompiledTask()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskClosureValidationError{
				field:  "CompiledTask",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetCreatedAt()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskClosureValidationError{
				field:  "CreatedAt",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// TaskClosureValidationError is the validation error returned by
// TaskClosure.Validate if the designated constraints aren't met.
type TaskClosureValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TaskClosureValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TaskClosureValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TaskClosureValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TaskClosureValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TaskClosureValidationError) ErrorName() string { return "TaskClosureValidationError" }

// Error satisfies the builtin error interface
func (e TaskClosureValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTaskClosure.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TaskClosureValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TaskClosureValidationError{}

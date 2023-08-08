// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: flyteidl/core/identifier.proto

package core

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
var _identifier_uuidPattern = regexp.MustCompile("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$")

// Validate checks the field values on Identifier with the rules defined in the
// proto definition for this message. If any rules are violated, an error is returned.
func (m *Identifier) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for ResourceType

	// no validation rules for Project

	// no validation rules for Domain

	// no validation rules for Name

	// no validation rules for Version

	return nil
}

// IdentifierValidationError is the validation error returned by
// Identifier.Validate if the designated constraints aren't met.
type IdentifierValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e IdentifierValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e IdentifierValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e IdentifierValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e IdentifierValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e IdentifierValidationError) ErrorName() string { return "IdentifierValidationError" }

// Error satisfies the builtin error interface
func (e IdentifierValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sIdentifier.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = IdentifierValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = IdentifierValidationError{}

// Validate checks the field values on WorkflowExecutionIdentifier with the
// rules defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *WorkflowExecutionIdentifier) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Project

	// no validation rules for Domain

	// no validation rules for Name

	return nil
}

// WorkflowExecutionIdentifierValidationError is the validation error returned
// by WorkflowExecutionIdentifier.Validate if the designated constraints
// aren't met.
type WorkflowExecutionIdentifierValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e WorkflowExecutionIdentifierValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e WorkflowExecutionIdentifierValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e WorkflowExecutionIdentifierValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e WorkflowExecutionIdentifierValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e WorkflowExecutionIdentifierValidationError) ErrorName() string {
	return "WorkflowExecutionIdentifierValidationError"
}

// Error satisfies the builtin error interface
func (e WorkflowExecutionIdentifierValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sWorkflowExecutionIdentifier.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = WorkflowExecutionIdentifierValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = WorkflowExecutionIdentifierValidationError{}

// Validate checks the field values on NodeExecutionIdentifier with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *NodeExecutionIdentifier) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for NodeId

	if v, ok := interface{}(m.GetExecutionId()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return NodeExecutionIdentifierValidationError{
				field:  "ExecutionId",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// NodeExecutionIdentifierValidationError is the validation error returned by
// NodeExecutionIdentifier.Validate if the designated constraints aren't met.
type NodeExecutionIdentifierValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e NodeExecutionIdentifierValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e NodeExecutionIdentifierValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e NodeExecutionIdentifierValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e NodeExecutionIdentifierValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e NodeExecutionIdentifierValidationError) ErrorName() string {
	return "NodeExecutionIdentifierValidationError"
}

// Error satisfies the builtin error interface
func (e NodeExecutionIdentifierValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sNodeExecutionIdentifier.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = NodeExecutionIdentifierValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = NodeExecutionIdentifierValidationError{}

// Validate checks the field values on TaskExecutionIdentifier with the rules
// defined in the proto definition for this message. If any rules are
// violated, an error is returned.
func (m *TaskExecutionIdentifier) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetTaskId()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskExecutionIdentifierValidationError{
				field:  "TaskId",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if v, ok := interface{}(m.GetNodeExecutionId()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return TaskExecutionIdentifierValidationError{
				field:  "NodeExecutionId",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for RetryAttempt

	return nil
}

// TaskExecutionIdentifierValidationError is the validation error returned by
// TaskExecutionIdentifier.Validate if the designated constraints aren't met.
type TaskExecutionIdentifierValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e TaskExecutionIdentifierValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e TaskExecutionIdentifierValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e TaskExecutionIdentifierValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e TaskExecutionIdentifierValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e TaskExecutionIdentifierValidationError) ErrorName() string {
	return "TaskExecutionIdentifierValidationError"
}

// Error satisfies the builtin error interface
func (e TaskExecutionIdentifierValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sTaskExecutionIdentifier.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = TaskExecutionIdentifierValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = TaskExecutionIdentifierValidationError{}

// Validate checks the field values on SignalIdentifier with the rules defined
// in the proto definition for this message. If any rules are violated, an
// error is returned.
func (m *SignalIdentifier) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for SignalId

	if v, ok := interface{}(m.GetExecutionId()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return SignalIdentifierValidationError{
				field:  "ExecutionId",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	return nil
}

// SignalIdentifierValidationError is the validation error returned by
// SignalIdentifier.Validate if the designated constraints aren't met.
type SignalIdentifierValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e SignalIdentifierValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e SignalIdentifierValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e SignalIdentifierValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e SignalIdentifierValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e SignalIdentifierValidationError) ErrorName() string { return "SignalIdentifierValidationError" }

// Error satisfies the builtin error interface
func (e SignalIdentifierValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sSignalIdentifier.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = SignalIdentifierValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = SignalIdentifierValidationError{}

// Validate checks the field values on ArtifactKey with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *ArtifactKey) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Project

	// no validation rules for Domain

	// no validation rules for Name

	return nil
}

// ArtifactKeyValidationError is the validation error returned by
// ArtifactKey.Validate if the designated constraints aren't met.
type ArtifactKeyValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ArtifactKeyValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ArtifactKeyValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ArtifactKeyValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ArtifactKeyValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ArtifactKeyValidationError) ErrorName() string { return "ArtifactKeyValidationError" }

// Error satisfies the builtin error interface
func (e ArtifactKeyValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sArtifactKey.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ArtifactKeyValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ArtifactKeyValidationError{}

// Validate checks the field values on ArtifactID with the rules defined in the
// proto definition for this message. If any rules are violated, an error is returned.
func (m *ArtifactID) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetArtifactKey()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ArtifactIDValidationError{
				field:  "ArtifactKey",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for Version

	// no validation rules for Partitions

	return nil
}

// ArtifactIDValidationError is the validation error returned by
// ArtifactID.Validate if the designated constraints aren't met.
type ArtifactIDValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ArtifactIDValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ArtifactIDValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ArtifactIDValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ArtifactIDValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ArtifactIDValidationError) ErrorName() string { return "ArtifactIDValidationError" }

// Error satisfies the builtin error interface
func (e ArtifactIDValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sArtifactID.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ArtifactIDValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ArtifactIDValidationError{}

// Validate checks the field values on ArtifactTag with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *ArtifactTag) Validate() error {
	if m == nil {
		return nil
	}

	if v, ok := interface{}(m.GetArtifactKey()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ArtifactTagValidationError{
				field:  "ArtifactKey",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for Value

	return nil
}

// ArtifactTagValidationError is the validation error returned by
// ArtifactTag.Validate if the designated constraints aren't met.
type ArtifactTagValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ArtifactTagValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ArtifactTagValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ArtifactTagValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ArtifactTagValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ArtifactTagValidationError) ErrorName() string { return "ArtifactTagValidationError" }

// Error satisfies the builtin error interface
func (e ArtifactTagValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sArtifactTag.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ArtifactTagValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ArtifactTagValidationError{}

// Validate checks the field values on ArtifactQuery with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *ArtifactQuery) Validate() error {
	if m == nil {
		return nil
	}

	switch m.Identifier.(type) {

	case *ArtifactQuery_ArtifactId:

		if v, ok := interface{}(m.GetArtifactId()).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return ArtifactQueryValidationError{
					field:  "ArtifactId",
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	case *ArtifactQuery_ArtifactTag:

		if v, ok := interface{}(m.GetArtifactTag()).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return ArtifactQueryValidationError{
					field:  "ArtifactTag",
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	case *ArtifactQuery_Uri:
		// no validation rules for Uri

	}

	return nil
}

// ArtifactQueryValidationError is the validation error returned by
// ArtifactQuery.Validate if the designated constraints aren't met.
type ArtifactQueryValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ArtifactQueryValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ArtifactQueryValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ArtifactQueryValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ArtifactQueryValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ArtifactQueryValidationError) ErrorName() string { return "ArtifactQueryValidationError" }

// Error satisfies the builtin error interface
func (e ArtifactQueryValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sArtifactQuery.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ArtifactQueryValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ArtifactQueryValidationError{}

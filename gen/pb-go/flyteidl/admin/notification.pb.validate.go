// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: flyteidl/admin/notification.proto

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
var _notification_uuidPattern = regexp.MustCompile("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$")

// Validate checks the field values on EmailMessage with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *EmailMessage) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for SenderEmail

	// no validation rules for SubjectLine

	// no validation rules for Body

	return nil
}

// EmailMessageValidationError is the validation error returned by
// EmailMessage.Validate if the designated constraints aren't met.
type EmailMessageValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e EmailMessageValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e EmailMessageValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e EmailMessageValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e EmailMessageValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e EmailMessageValidationError) ErrorName() string { return "EmailMessageValidationError" }

// Error satisfies the builtin error interface
func (e EmailMessageValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sEmailMessage.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = EmailMessageValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = EmailMessageValidationError{}

// Validate checks the field values on WebhookPayload with the rules defined in
// the proto definition for this message. If any rules are violated, an error
// is returned.
func (m *WebhookPayload) Validate() error {
	if m == nil {
		return nil
	}

	// no validation rules for Message

	return nil
}

// WebhookPayloadValidationError is the validation error returned by
// WebhookPayload.Validate if the designated constraints aren't met.
type WebhookPayloadValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e WebhookPayloadValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e WebhookPayloadValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e WebhookPayloadValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e WebhookPayloadValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e WebhookPayloadValidationError) ErrorName() string { return "WebhookPayloadValidationError" }

// Error satisfies the builtin error interface
func (e WebhookPayloadValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sWebhookPayload.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = WebhookPayloadValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = WebhookPayloadValidationError{}

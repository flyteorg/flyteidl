// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/admin/notification.proto

package admin

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// Represents the Email object that is sent to a publisher/subscriber
// to forward the notification.
// Note: This is internal to Admin and doesn't need to be exposed to other components.
type EmailMessage struct {
	// The list of email addresses to receive an email with the content populated in the other fields.
	// Currently, each email recipient will receive its own email.
	// This populates the TO field.
	RecipientsEmail []string `protobuf:"bytes,1,rep,name=recipients_email,json=recipientsEmail,proto3" json:"recipients_email,omitempty"`
	// The email of the sender.
	// This populates the FROM field.
	SenderEmail string `protobuf:"bytes,2,opt,name=sender_email,json=senderEmail,proto3" json:"sender_email,omitempty"`
	// The content of the subject line.
	// This populates the SUBJECT field.
	SubjectLine string `protobuf:"bytes,3,opt,name=subject_line,json=subjectLine,proto3" json:"subject_line,omitempty"`
	// The content of the email body.
	// This populates the BODY field.
	Body                 string   `protobuf:"bytes,4,opt,name=body,proto3" json:"body,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *EmailMessage) Reset()         { *m = EmailMessage{} }
func (m *EmailMessage) String() string { return proto.CompactTextString(m) }
func (*EmailMessage) ProtoMessage()    {}
func (*EmailMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_cbe32eb21e00da05, []int{0}
}

func (m *EmailMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_EmailMessage.Unmarshal(m, b)
}
func (m *EmailMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_EmailMessage.Marshal(b, m, deterministic)
}
func (m *EmailMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EmailMessage.Merge(m, src)
}
func (m *EmailMessage) XXX_Size() int {
	return xxx_messageInfo_EmailMessage.Size(m)
}
func (m *EmailMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_EmailMessage.DiscardUnknown(m)
}

var xxx_messageInfo_EmailMessage proto.InternalMessageInfo

func (m *EmailMessage) GetRecipientsEmail() []string {
	if m != nil {
		return m.RecipientsEmail
	}
	return nil
}

func (m *EmailMessage) GetSenderEmail() string {
	if m != nil {
		return m.SenderEmail
	}
	return ""
}

func (m *EmailMessage) GetSubjectLine() string {
	if m != nil {
		return m.SubjectLine
	}
	return ""
}

func (m *EmailMessage) GetBody() string {
	if m != nil {
		return m.Body
	}
	return ""
}

type WebhookPayload struct {
	Message              string   `protobuf:"bytes,1,opt,name=message,proto3" json:"message,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *WebhookPayload) Reset()         { *m = WebhookPayload{} }
func (m *WebhookPayload) String() string { return proto.CompactTextString(m) }
func (*WebhookPayload) ProtoMessage()    {}
func (*WebhookPayload) Descriptor() ([]byte, []int) {
	return fileDescriptor_cbe32eb21e00da05, []int{1}
}

func (m *WebhookPayload) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_WebhookPayload.Unmarshal(m, b)
}
func (m *WebhookPayload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_WebhookPayload.Marshal(b, m, deterministic)
}
func (m *WebhookPayload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WebhookPayload.Merge(m, src)
}
func (m *WebhookPayload) XXX_Size() int {
	return xxx_messageInfo_WebhookPayload.Size(m)
}
func (m *WebhookPayload) XXX_DiscardUnknown() {
	xxx_messageInfo_WebhookPayload.DiscardUnknown(m)
}

var xxx_messageInfo_WebhookPayload proto.InternalMessageInfo

func (m *WebhookPayload) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func init() {
	proto.RegisterType((*EmailMessage)(nil), "flyteidl.admin.EmailMessage")
	proto.RegisterType((*WebhookPayload)(nil), "flyteidl.admin.WebhookPayload")
}

func init() { proto.RegisterFile("flyteidl/admin/notification.proto", fileDescriptor_cbe32eb21e00da05) }

var fileDescriptor_cbe32eb21e00da05 = []byte{
	// 235 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x90, 0xc1, 0x4a, 0x03, 0x31,
	0x10, 0x86, 0x59, 0x5b, 0x94, 0xc6, 0x52, 0x25, 0xa7, 0x1c, 0xdb, 0x9e, 0xaa, 0xe0, 0xe6, 0x20,
	0xe2, 0x5d, 0xf0, 0xa6, 0x20, 0xbd, 0x08, 0x5e, 0x4a, 0xb2, 0x99, 0xa6, 0xa3, 0xd9, 0x99, 0x25,
	0x49, 0x0f, 0xfb, 0x1c, 0xbe, 0xb0, 0x98, 0x6d, 0x2d, 0xde, 0x92, 0xff, 0xff, 0x06, 0x66, 0x3e,
	0xb1, 0xd8, 0x86, 0x3e, 0x03, 0xba, 0xa0, 0x8d, 0x6b, 0x91, 0x34, 0x71, 0xc6, 0x2d, 0x36, 0x26,
	0x23, 0x53, 0xdd, 0x45, 0xce, 0x2c, 0x67, 0x47, 0xa4, 0x2e, 0xc8, 0xf2, 0xbb, 0x12, 0xd3, 0xe7,
	0xd6, 0x60, 0x78, 0x85, 0x94, 0x8c, 0x07, 0x79, 0x23, 0xae, 0x23, 0x34, 0xd8, 0x21, 0x50, 0x4e,
	0x1b, 0xf8, 0xad, 0x54, 0x35, 0x1f, 0xad, 0x26, 0xeb, 0xab, 0x53, 0x5e, 0x26, 0xe4, 0x42, 0x4c,
	0x13, 0x90, 0x83, 0x78, 0xc0, 0xce, 0xe6, 0xd5, 0x6a, 0xb2, 0xbe, 0x1c, 0xb2, 0x13, 0xb2, 0xb7,
	0x9f, 0xd0, 0xe4, 0x4d, 0x40, 0x02, 0x35, 0x3a, 0x20, 0x43, 0xf6, 0x82, 0x04, 0x52, 0x8a, 0xb1,
	0x65, 0xd7, 0xab, 0x71, 0xa9, 0xca, 0x7b, 0x79, 0x2b, 0x66, 0xef, 0x60, 0x77, 0xcc, 0x5f, 0x6f,
	0xa6, 0x0f, 0x6c, 0x9c, 0x54, 0xe2, 0xa2, 0x1d, 0x36, 0x54, 0x55, 0x01, 0x8f, 0xdf, 0xa7, 0xc7,
	0x8f, 0x07, 0x8f, 0x79, 0xb7, 0xb7, 0x75, 0xc3, 0xad, 0x2e, 0xe7, 0x71, 0xf4, 0xfa, 0x4f, 0x85,
	0x07, 0xd2, 0x9d, 0xbd, 0xf3, 0xac, 0xff, 0xdb, 0xb1, 0xe7, 0xc5, 0xc8, 0xfd, 0x4f, 0x00, 0x00,
	0x00, 0xff, 0xff, 0x6c, 0x95, 0x60, 0x49, 0x36, 0x01, 0x00, 0x00,
}

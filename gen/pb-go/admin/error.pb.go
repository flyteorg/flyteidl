// Code generated by protoc-gen-go. DO NOT EDIT.
// source: admin/error.proto

package admin

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type ErrorCode int32

const (
	ErrorCode_INTERNAL_ERROR     ErrorCode = 0
	ErrorCode_USER_ERROR         ErrorCode = 1
	ErrorCode_MISSING_PARAMETERS ErrorCode = 2
	ErrorCode_INVALID_PARAMETERS ErrorCode = 3
)

var ErrorCode_name = map[int32]string{
	0: "INTERNAL_ERROR",
	1: "USER_ERROR",
	2: "MISSING_PARAMETERS",
	3: "INVALID_PARAMETERS",
}
var ErrorCode_value = map[string]int32{
	"INTERNAL_ERROR":     0,
	"USER_ERROR":         1,
	"MISSING_PARAMETERS": 2,
	"INVALID_PARAMETERS": 3,
}

func (x ErrorCode) String() string {
	return proto.EnumName(ErrorCode_name, int32(x))
}
func (ErrorCode) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_error_ff52ba127e9fa466, []int{0}
}

type Error struct {
	// Human-readable error message.
	Message string `protobuf:"bytes,1,opt,name=message" json:"message,omitempty"`
	// Error code due to which the execution failed
	Code                 ErrorCode `protobuf:"varint,2,opt,name=code,enum=admin.ErrorCode" json:"code,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *Error) Reset()         { *m = Error{} }
func (m *Error) String() string { return proto.CompactTextString(m) }
func (*Error) ProtoMessage()    {}
func (*Error) Descriptor() ([]byte, []int) {
	return fileDescriptor_error_ff52ba127e9fa466, []int{0}
}
func (m *Error) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Error.Unmarshal(m, b)
}
func (m *Error) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Error.Marshal(b, m, deterministic)
}
func (dst *Error) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Error.Merge(dst, src)
}
func (m *Error) XXX_Size() int {
	return xxx_messageInfo_Error.Size(m)
}
func (m *Error) XXX_DiscardUnknown() {
	xxx_messageInfo_Error.DiscardUnknown(m)
}

var xxx_messageInfo_Error proto.InternalMessageInfo

func (m *Error) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func (m *Error) GetCode() ErrorCode {
	if m != nil {
		return m.Code
	}
	return ErrorCode_INTERNAL_ERROR
}

func init() {
	proto.RegisterType((*Error)(nil), "admin.Error")
	proto.RegisterEnum("admin.ErrorCode", ErrorCode_name, ErrorCode_value)
}

func init() { proto.RegisterFile("admin/error.proto", fileDescriptor_error_ff52ba127e9fa466) }

var fileDescriptor_error_ff52ba127e9fa466 = []byte{
	// 185 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4c, 0x4c, 0xc9, 0xcd,
	0xcc, 0xd3, 0x4f, 0x2d, 0x2a, 0xca, 0x2f, 0xd2, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x62, 0x05,
	0x0b, 0x29, 0xb9, 0x73, 0xb1, 0xba, 0x82, 0x44, 0x85, 0x24, 0xb8, 0xd8, 0x73, 0x53, 0x8b, 0x8b,
	0x13, 0xd3, 0x53, 0x25, 0x18, 0x15, 0x18, 0x35, 0x38, 0x83, 0x60, 0x5c, 0x21, 0x15, 0x2e, 0x96,
	0xe4, 0xfc, 0x94, 0x54, 0x09, 0x26, 0x05, 0x46, 0x0d, 0x3e, 0x23, 0x01, 0x3d, 0xb0, 0x46, 0x3d,
	0xb0, 0x2e, 0xe7, 0xfc, 0x94, 0xd4, 0x20, 0xb0, 0xac, 0x56, 0x3c, 0x17, 0x27, 0x5c, 0x48, 0x48,
	0x88, 0x8b, 0xcf, 0xd3, 0x2f, 0xc4, 0x35, 0xc8, 0xcf, 0xd1, 0x27, 0xde, 0x35, 0x28, 0xc8, 0x3f,
	0x48, 0x80, 0x41, 0x88, 0x8f, 0x8b, 0x2b, 0x34, 0xd8, 0x35, 0x08, 0xca, 0x67, 0x14, 0x12, 0xe3,
	0x12, 0xf2, 0xf5, 0x0c, 0x0e, 0xf6, 0xf4, 0x73, 0x8f, 0x0f, 0x70, 0x0c, 0x72, 0xf4, 0x75, 0x0d,
	0x71, 0x0d, 0x0a, 0x16, 0x60, 0x02, 0x89, 0x7b, 0xfa, 0x85, 0x39, 0xfa, 0x78, 0xba, 0x20, 0x8b,
	0x33, 0x3b, 0xb1, 0x47, 0x41, 0x9c, 0x9c, 0xc4, 0x06, 0xf6, 0x80, 0x31, 0x20, 0x00, 0x00, 0xff,
	0xff, 0xd1, 0xd9, 0x08, 0xdb, 0xd5, 0x00, 0x00, 0x00,
}

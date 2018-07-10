// Code generated by protoc-gen-go. DO NOT EDIT.
// source: core/interface.proto

package core

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

// Defines a strongly typed variable.
type Variable struct {
	// Variable name. This can be referenced in input/output bindings to pass data between
	// nodes/workflows. Variable name is case-sensitive.
	Name string `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	// Variable literal type.
	Type *LiteralType `protobuf:"bytes,2,opt,name=type" json:"type,omitempty"`
	// +optional string describing input variable
	Description          string   `protobuf:"bytes,3,opt,name=description" json:"description,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Variable) Reset()         { *m = Variable{} }
func (m *Variable) String() string { return proto.CompactTextString(m) }
func (*Variable) ProtoMessage()    {}
func (*Variable) Descriptor() ([]byte, []int) {
	return fileDescriptor_interface_b6e4983f52540471, []int{0}
}
func (m *Variable) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Variable.Unmarshal(m, b)
}
func (m *Variable) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Variable.Marshal(b, m, deterministic)
}
func (dst *Variable) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Variable.Merge(dst, src)
}
func (m *Variable) XXX_Size() int {
	return xxx_messageInfo_Variable.Size(m)
}
func (m *Variable) XXX_DiscardUnknown() {
	xxx_messageInfo_Variable.DiscardUnknown(m)
}

var xxx_messageInfo_Variable proto.InternalMessageInfo

func (m *Variable) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Variable) GetType() *LiteralType {
	if m != nil {
		return m.Type
	}
	return nil
}

func (m *Variable) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

// Defines strongly typed inputs and outputs.
type TypedInterface struct {
	Inputs               []*Variable `protobuf:"bytes,1,rep,name=inputs" json:"inputs,omitempty"`
	Outputs              []*Variable `protobuf:"bytes,2,rep,name=outputs" json:"outputs,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *TypedInterface) Reset()         { *m = TypedInterface{} }
func (m *TypedInterface) String() string { return proto.CompactTextString(m) }
func (*TypedInterface) ProtoMessage()    {}
func (*TypedInterface) Descriptor() ([]byte, []int) {
	return fileDescriptor_interface_b6e4983f52540471, []int{1}
}
func (m *TypedInterface) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TypedInterface.Unmarshal(m, b)
}
func (m *TypedInterface) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TypedInterface.Marshal(b, m, deterministic)
}
func (dst *TypedInterface) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TypedInterface.Merge(dst, src)
}
func (m *TypedInterface) XXX_Size() int {
	return xxx_messageInfo_TypedInterface.Size(m)
}
func (m *TypedInterface) XXX_DiscardUnknown() {
	xxx_messageInfo_TypedInterface.DiscardUnknown(m)
}

var xxx_messageInfo_TypedInterface proto.InternalMessageInfo

func (m *TypedInterface) GetInputs() []*Variable {
	if m != nil {
		return m.Inputs
	}
	return nil
}

func (m *TypedInterface) GetOutputs() []*Variable {
	if m != nil {
		return m.Outputs
	}
	return nil
}

// Structure to encapsulate inputs passed in and outputs generated.
type NamedValue struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name" json:"name,omitempty"`
	Value                *Literal `protobuf:"bytes,2,opt,name=value" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *NamedValue) Reset()         { *m = NamedValue{} }
func (m *NamedValue) String() string { return proto.CompactTextString(m) }
func (*NamedValue) ProtoMessage()    {}
func (*NamedValue) Descriptor() ([]byte, []int) {
	return fileDescriptor_interface_b6e4983f52540471, []int{2}
}
func (m *NamedValue) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NamedValue.Unmarshal(m, b)
}
func (m *NamedValue) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NamedValue.Marshal(b, m, deterministic)
}
func (dst *NamedValue) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NamedValue.Merge(dst, src)
}
func (m *NamedValue) XXX_Size() int {
	return xxx_messageInfo_NamedValue.Size(m)
}
func (m *NamedValue) XXX_DiscardUnknown() {
	xxx_messageInfo_NamedValue.DiscardUnknown(m)
}

var xxx_messageInfo_NamedValue proto.InternalMessageInfo

func (m *NamedValue) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *NamedValue) GetValue() *Literal {
	if m != nil {
		return m.Value
	}
	return nil
}

// Structure to encapsulate list of NamedValues
type NamedValueCollection struct {
	Values               []*NamedValue `protobuf:"bytes,1,rep,name=values" json:"values,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *NamedValueCollection) Reset()         { *m = NamedValueCollection{} }
func (m *NamedValueCollection) String() string { return proto.CompactTextString(m) }
func (*NamedValueCollection) ProtoMessage()    {}
func (*NamedValueCollection) Descriptor() ([]byte, []int) {
	return fileDescriptor_interface_b6e4983f52540471, []int{3}
}
func (m *NamedValueCollection) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NamedValueCollection.Unmarshal(m, b)
}
func (m *NamedValueCollection) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NamedValueCollection.Marshal(b, m, deterministic)
}
func (dst *NamedValueCollection) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NamedValueCollection.Merge(dst, src)
}
func (m *NamedValueCollection) XXX_Size() int {
	return xxx_messageInfo_NamedValueCollection.Size(m)
}
func (m *NamedValueCollection) XXX_DiscardUnknown() {
	xxx_messageInfo_NamedValueCollection.DiscardUnknown(m)
}

var xxx_messageInfo_NamedValueCollection proto.InternalMessageInfo

func (m *NamedValueCollection) GetValues() []*NamedValue {
	if m != nil {
		return m.Values
	}
	return nil
}

func init() {
	proto.RegisterType((*Variable)(nil), "core.Variable")
	proto.RegisterType((*TypedInterface)(nil), "core.TypedInterface")
	proto.RegisterType((*NamedValue)(nil), "core.NamedValue")
	proto.RegisterType((*NamedValueCollection)(nil), "core.NamedValueCollection")
}

func init() { proto.RegisterFile("core/interface.proto", fileDescriptor_interface_b6e4983f52540471) }

var fileDescriptor_interface_b6e4983f52540471 = []byte{
	// 263 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x91, 0xc1, 0x4b, 0xc3, 0x30,
	0x18, 0xc5, 0xe9, 0x56, 0xab, 0x7e, 0xc5, 0x31, 0xe3, 0x0e, 0x65, 0xa7, 0x52, 0x51, 0x7a, 0xaa,
	0x30, 0xff, 0x01, 0x51, 0x3c, 0x08, 0xe2, 0x21, 0xc8, 0x0e, 0xde, 0xd2, 0xf6, 0x53, 0x02, 0x59,
	0x13, 0xd2, 0x54, 0xd8, 0x7f, 0x2f, 0xf9, 0xd2, 0x32, 0x07, 0xbb, 0x85, 0xf7, 0x7b, 0x79, 0xbc,
	0x97, 0xc0, 0xaa, 0xd1, 0x16, 0x1f, 0x64, 0xe7, 0xd0, 0x7e, 0x8b, 0x06, 0x2b, 0x63, 0xb5, 0xd3,
	0x2c, 0xf6, 0xea, 0x7a, 0x49, 0xcc, 0xed, 0x0d, 0xf6, 0x41, 0x5f, 0xdf, 0x90, 0xa2, 0xa4, 0x43,
	0x2b, 0xd4, 0x28, 0x16, 0x3f, 0x70, 0xb1, 0x15, 0x56, 0x8a, 0x5a, 0x21, 0x63, 0x10, 0x77, 0x62,
	0x87, 0x59, 0x94, 0x47, 0xe5, 0x25, 0xa7, 0x33, 0xbb, 0x83, 0xd8, 0x67, 0x64, 0xb3, 0x3c, 0x2a,
	0xd3, 0xcd, 0x75, 0xe5, 0x33, 0xaa, 0xf7, 0x90, 0xf1, 0xb9, 0x37, 0xc8, 0x09, 0xb3, 0x1c, 0xd2,
	0x16, 0xfb, 0xc6, 0x4a, 0xe3, 0xa4, 0xee, 0xb2, 0x39, 0x25, 0xfc, 0x97, 0x8a, 0x1a, 0x16, 0xde,
	0xdf, 0xbe, 0x4d, 0x6d, 0xd9, 0x3d, 0x24, 0xb2, 0x33, 0x83, 0xeb, 0xb3, 0x28, 0x9f, 0x97, 0xe9,
	0x66, 0x11, 0xc2, 0xa7, 0x3a, 0x7c, 0xa4, 0xac, 0x84, 0x73, 0x3d, 0x38, 0x32, 0xce, 0x4e, 0x1a,
	0x27, 0x5c, 0xbc, 0x02, 0x7c, 0x88, 0x1d, 0xb6, 0x5b, 0xa1, 0x86, 0xd3, 0x73, 0x6e, 0xe1, 0xec,
	0xd7, 0xc3, 0x71, 0xcf, 0xd5, 0xd1, 0x1e, 0x1e, 0x58, 0xf1, 0x04, 0xab, 0x43, 0xcc, 0x8b, 0x56,
	0x0a, 0x1b, 0x3f, 0x81, 0x95, 0x90, 0x90, 0x61, 0x2a, 0xbc, 0x0c, 0xb7, 0x0f, 0x5e, 0x3e, 0xf2,
	0xe7, 0xe4, 0x8b, 0x3e, 0xa1, 0x4e, 0xe8, 0x91, 0x1f, 0xff, 0x02, 0x00, 0x00, 0xff, 0xff, 0xcd,
	0xb0, 0x46, 0xab, 0xa9, 0x01, 0x00, 0x00,
}

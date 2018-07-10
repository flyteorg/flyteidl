// Code generated by protoc-gen-go. DO NOT EDIT.
// source: admin/launch_plan.proto

package admin

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import core "core"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type LaunchPlanCreateRequest struct {
	Id                   *Identifier     `protobuf:"bytes,1,opt,name=id" json:"id,omitempty"`
	Version              string          `protobuf:"bytes,2,opt,name=version" json:"version,omitempty"`
	Spec                 *LaunchPlanSpec `protobuf:"bytes,3,opt,name=spec" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *LaunchPlanCreateRequest) Reset()         { *m = LaunchPlanCreateRequest{} }
func (m *LaunchPlanCreateRequest) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanCreateRequest) ProtoMessage()    {}
func (*LaunchPlanCreateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_launch_plan_12cf70426a57fe87, []int{0}
}
func (m *LaunchPlanCreateRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanCreateRequest.Unmarshal(m, b)
}
func (m *LaunchPlanCreateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanCreateRequest.Marshal(b, m, deterministic)
}
func (dst *LaunchPlanCreateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanCreateRequest.Merge(dst, src)
}
func (m *LaunchPlanCreateRequest) XXX_Size() int {
	return xxx_messageInfo_LaunchPlanCreateRequest.Size(m)
}
func (m *LaunchPlanCreateRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlanCreateRequest.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlanCreateRequest proto.InternalMessageInfo

func (m *LaunchPlanCreateRequest) GetId() *Identifier {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *LaunchPlanCreateRequest) GetVersion() string {
	if m != nil {
		return m.Version
	}
	return ""
}

func (m *LaunchPlanCreateRequest) GetSpec() *LaunchPlanSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type LaunchPlan struct {
	Id                   *Identifier     `protobuf:"bytes,1,opt,name=id" json:"id,omitempty"`
	Version              string          `protobuf:"bytes,2,opt,name=version" json:"version,omitempty"`
	Urn                  string          `protobuf:"bytes,3,opt,name=urn" json:"urn,omitempty"`
	Spec                 *LaunchPlanSpec `protobuf:"bytes,4,opt,name=spec" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *LaunchPlan) Reset()         { *m = LaunchPlan{} }
func (m *LaunchPlan) String() string { return proto.CompactTextString(m) }
func (*LaunchPlan) ProtoMessage()    {}
func (*LaunchPlan) Descriptor() ([]byte, []int) {
	return fileDescriptor_launch_plan_12cf70426a57fe87, []int{1}
}
func (m *LaunchPlan) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlan.Unmarshal(m, b)
}
func (m *LaunchPlan) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlan.Marshal(b, m, deterministic)
}
func (dst *LaunchPlan) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlan.Merge(dst, src)
}
func (m *LaunchPlan) XXX_Size() int {
	return xxx_messageInfo_LaunchPlan.Size(m)
}
func (m *LaunchPlan) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlan.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlan proto.InternalMessageInfo

func (m *LaunchPlan) GetId() *Identifier {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *LaunchPlan) GetVersion() string {
	if m != nil {
		return m.Version
	}
	return ""
}

func (m *LaunchPlan) GetUrn() string {
	if m != nil {
		return m.Urn
	}
	return ""
}

func (m *LaunchPlan) GetSpec() *LaunchPlanSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type LaunchPlanList struct {
	LaunchPlans          []*LaunchPlan `protobuf:"bytes,1,rep,name=launch_plans,json=launchPlans" json:"launch_plans,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *LaunchPlanList) Reset()         { *m = LaunchPlanList{} }
func (m *LaunchPlanList) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanList) ProtoMessage()    {}
func (*LaunchPlanList) Descriptor() ([]byte, []int) {
	return fileDescriptor_launch_plan_12cf70426a57fe87, []int{2}
}
func (m *LaunchPlanList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanList.Unmarshal(m, b)
}
func (m *LaunchPlanList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanList.Marshal(b, m, deterministic)
}
func (dst *LaunchPlanList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanList.Merge(dst, src)
}
func (m *LaunchPlanList) XXX_Size() int {
	return xxx_messageInfo_LaunchPlanList.Size(m)
}
func (m *LaunchPlanList) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlanList.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlanList proto.InternalMessageInfo

func (m *LaunchPlanList) GetLaunchPlans() []*LaunchPlan {
	if m != nil {
		return m.LaunchPlans
	}
	return nil
}

type LaunchPlanSpec struct {
	// Reference to the Workflow template that the launch plan references
	WorkflowUrn string `protobuf:"bytes,1,opt,name=workflow_urn,json=workflowUrn" json:"workflow_urn,omitempty"`
	// Metadata for the Launch Plan
	EntityMetadata *LaunchPlanMetadata `protobuf:"bytes,2,opt,name=entity_metadata,json=entityMetadata" json:"entity_metadata,omitempty"`
	// Input values to be passed for the execution
	DefaultInputs []*Parameter `protobuf:"bytes,3,rep,name=default_inputs,json=defaultInputs" json:"default_inputs,omitempty"`
	// Fixed, non overridable inputs for the Launch Plan
	FixedInputs          *core.NamedValueCollection `protobuf:"bytes,4,opt,name=fixed_inputs,json=fixedInputs" json:"fixed_inputs,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *LaunchPlanSpec) Reset()         { *m = LaunchPlanSpec{} }
func (m *LaunchPlanSpec) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanSpec) ProtoMessage()    {}
func (*LaunchPlanSpec) Descriptor() ([]byte, []int) {
	return fileDescriptor_launch_plan_12cf70426a57fe87, []int{3}
}
func (m *LaunchPlanSpec) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanSpec.Unmarshal(m, b)
}
func (m *LaunchPlanSpec) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanSpec.Marshal(b, m, deterministic)
}
func (dst *LaunchPlanSpec) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanSpec.Merge(dst, src)
}
func (m *LaunchPlanSpec) XXX_Size() int {
	return xxx_messageInfo_LaunchPlanSpec.Size(m)
}
func (m *LaunchPlanSpec) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlanSpec.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlanSpec proto.InternalMessageInfo

func (m *LaunchPlanSpec) GetWorkflowUrn() string {
	if m != nil {
		return m.WorkflowUrn
	}
	return ""
}

func (m *LaunchPlanSpec) GetEntityMetadata() *LaunchPlanMetadata {
	if m != nil {
		return m.EntityMetadata
	}
	return nil
}

func (m *LaunchPlanSpec) GetDefaultInputs() []*Parameter {
	if m != nil {
		return m.DefaultInputs
	}
	return nil
}

func (m *LaunchPlanSpec) GetFixedInputs() *core.NamedValueCollection {
	if m != nil {
		return m.FixedInputs
	}
	return nil
}

type LaunchPlanMetadata struct {
	// Schedule to execute the Launch Plan
	Schedule *Schedule `protobuf:"bytes,1,opt,name=schedule" json:"schedule,omitempty"`
	// List of notifications based on Execution status transitions
	Notifications        []*Notification `protobuf:"bytes,2,rep,name=notifications" json:"notifications,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *LaunchPlanMetadata) Reset()         { *m = LaunchPlanMetadata{} }
func (m *LaunchPlanMetadata) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanMetadata) ProtoMessage()    {}
func (*LaunchPlanMetadata) Descriptor() ([]byte, []int) {
	return fileDescriptor_launch_plan_12cf70426a57fe87, []int{4}
}
func (m *LaunchPlanMetadata) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanMetadata.Unmarshal(m, b)
}
func (m *LaunchPlanMetadata) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanMetadata.Marshal(b, m, deterministic)
}
func (dst *LaunchPlanMetadata) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanMetadata.Merge(dst, src)
}
func (m *LaunchPlanMetadata) XXX_Size() int {
	return xxx_messageInfo_LaunchPlanMetadata.Size(m)
}
func (m *LaunchPlanMetadata) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlanMetadata.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlanMetadata proto.InternalMessageInfo

func (m *LaunchPlanMetadata) GetSchedule() *Schedule {
	if m != nil {
		return m.Schedule
	}
	return nil
}

func (m *LaunchPlanMetadata) GetNotifications() []*Notification {
	if m != nil {
		return m.Notifications
	}
	return nil
}

func init() {
	proto.RegisterType((*LaunchPlanCreateRequest)(nil), "admin.LaunchPlanCreateRequest")
	proto.RegisterType((*LaunchPlan)(nil), "admin.LaunchPlan")
	proto.RegisterType((*LaunchPlanList)(nil), "admin.LaunchPlanList")
	proto.RegisterType((*LaunchPlanSpec)(nil), "admin.LaunchPlanSpec")
	proto.RegisterType((*LaunchPlanMetadata)(nil), "admin.LaunchPlanMetadata")
}

func init() {
	proto.RegisterFile("admin/launch_plan.proto", fileDescriptor_launch_plan_12cf70426a57fe87)
}

var fileDescriptor_launch_plan_12cf70426a57fe87 = []byte{
	// 433 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x53, 0x4f, 0x6b, 0x14, 0x31,
	0x14, 0x27, 0xbb, 0xd5, 0xda, 0x37, 0xdb, 0x6d, 0x8d, 0x95, 0x8e, 0x7b, 0xda, 0xee, 0xa9, 0x22,
	0x4c, 0xa1, 0x0a, 0xe2, 0xc1, 0x4b, 0x0b, 0x42, 0xa1, 0x96, 0x92, 0xa2, 0x07, 0x2f, 0x4b, 0x4c,
	0xde, 0xd0, 0x60, 0x26, 0x19, 0x93, 0x8c, 0x55, 0xf0, 0xe2, 0xc5, 0xaf, 0xeb, 0x57, 0x90, 0xc9,
	0x64, 0x76, 0x47, 0xf6, 0xe0, 0xa1, 0xb7, 0xe4, 0xbd, 0xdf, 0xbf, 0x24, 0x2f, 0x70, 0xc8, 0x65,
	0xa5, 0xcc, 0x89, 0xe6, 0x8d, 0x11, 0xb7, 0xcb, 0x5a, 0x73, 0x53, 0xd4, 0xce, 0x06, 0x4b, 0x1f,
	0xc4, 0xc6, 0xec, 0x40, 0x58, 0x87, 0x27, 0xca, 0x04, 0x74, 0x25, 0x17, 0xd8, 0x35, 0x67, 0x07,
	0x1d, 0xcb, 0x8b, 0x5b, 0x94, 0x8d, 0xee, 0xab, 0xb4, 0xab, 0x0a, 0x5b, 0x55, 0x36, 0xc9, 0x2c,
	0x7e, 0x11, 0x38, 0xbc, 0x8c, 0xe2, 0xd7, 0x9a, 0x9b, 0x73, 0x87, 0x3c, 0x20, 0xc3, 0xaf, 0x0d,
	0xfa, 0x40, 0x8f, 0x60, 0xa4, 0x64, 0x4e, 0xe6, 0xe4, 0x38, 0x3b, 0x7d, 0x5c, 0x44, 0x72, 0x71,
	0x21, 0xd1, 0x04, 0x55, 0x2a, 0x74, 0x6c, 0xa4, 0x24, 0xcd, 0x61, 0xfb, 0x1b, 0x3a, 0xaf, 0xac,
	0xc9, 0x47, 0x73, 0x72, 0xbc, 0xc3, 0xfa, 0x2d, 0x7d, 0x0e, 0x5b, 0xbe, 0x46, 0x91, 0x8f, 0x23,
	0xfd, 0x69, 0xa2, 0xaf, 0xad, 0x6e, 0x6a, 0x14, 0x2c, 0x42, 0x16, 0xbf, 0x09, 0xc0, 0xba, 0x71,
	0x3f, 0xdb, 0x7d, 0x18, 0x37, 0xce, 0x44, 0xd7, 0x1d, 0xd6, 0x2e, 0x57, 0x41, 0xb6, 0xfe, 0x1f,
	0xe4, 0x1d, 0x4c, 0xd7, 0xf5, 0x4b, 0xe5, 0x03, 0x7d, 0x05, 0x93, 0xc1, 0xd5, 0xfb, 0x9c, 0xcc,
	0xc7, 0x83, 0x54, 0x6b, 0x30, 0xcb, 0xf4, 0x6a, 0xed, 0x17, 0x7f, 0xc8, 0x50, 0xa8, 0x35, 0xa0,
	0x47, 0x30, 0xb9, 0xb3, 0xee, 0x4b, 0xa9, 0xed, 0xdd, 0xb2, 0x0d, 0x48, 0x62, 0xc0, 0xac, 0xaf,
	0x7d, 0x70, 0x86, 0x9e, 0xc1, 0x5e, 0x7b, 0xc8, 0xf0, 0x63, 0x59, 0x61, 0xe0, 0x92, 0x07, 0x1e,
	0x0f, 0x97, 0x9d, 0x3e, 0xdb, 0xb0, 0x7b, 0x9f, 0x00, 0x6c, 0xda, 0x31, 0xfa, 0x3d, 0x7d, 0x0d,
	0x53, 0x89, 0x25, 0x6f, 0x74, 0x58, 0x2a, 0x53, 0x37, 0xc1, 0xe7, 0xe3, 0x98, 0x78, 0x3f, 0x49,
	0x5c, 0x73, 0xc7, 0x2b, 0x0c, 0xe8, 0xd8, 0x6e, 0xc2, 0x5d, 0x44, 0x18, 0x7d, 0x0b, 0x93, 0x52,
	0x7d, 0x47, 0xd9, 0xd3, 0xba, 0xdb, 0x9a, 0x15, 0xed, 0x78, 0x15, 0x57, 0xbc, 0x42, 0xf9, 0x91,
	0xeb, 0x06, 0xcf, 0xad, 0xd6, 0x28, 0x82, 0xb2, 0x86, 0x65, 0x11, 0xdf, 0xd1, 0x17, 0x3f, 0x81,
	0x6e, 0xa6, 0xa3, 0x2f, 0xe0, 0x51, 0x3f, 0x82, 0xe9, 0x3d, 0xf7, 0x52, 0x8e, 0x9b, 0x54, 0x66,
	0x2b, 0x00, 0x7d, 0x03, 0xbb, 0xc6, 0xb6, 0x6f, 0x2c, 0x78, 0xab, 0xef, 0xf3, 0x51, 0x4c, 0xfe,
	0x24, 0x31, 0xae, 0x06, 0x3d, 0xf6, 0x2f, 0xf2, 0x6c, 0xfb, 0x53, 0xf7, 0x1b, 0x3e, 0x3f, 0x8c,
	0x43, 0xfd, 0xf2, 0x6f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x78, 0xd7, 0xce, 0x77, 0x36, 0x03, 0x00,
	0x00,
}

// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/core/identifier.proto

package core

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

// Indicates a resource type within Flyte.
type ResourceType int32

const (
	ResourceType_UNSPECIFIED ResourceType = 0
	ResourceType_TASK        ResourceType = 1
	ResourceType_WORKFLOW    ResourceType = 2
	ResourceType_LAUNCH_PLAN ResourceType = 3
	// A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects.
	// Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects
	// in a similar manner to other Flyte objects
	ResourceType_DATASET ResourceType = 4
)

var ResourceType_name = map[int32]string{
	0: "UNSPECIFIED",
	1: "TASK",
	2: "WORKFLOW",
	3: "LAUNCH_PLAN",
	4: "DATASET",
}

var ResourceType_value = map[string]int32{
	"UNSPECIFIED": 0,
	"TASK":        1,
	"WORKFLOW":    2,
	"LAUNCH_PLAN": 3,
	"DATASET":     4,
}

func (x ResourceType) String() string {
	return proto.EnumName(ResourceType_name, int32(x))
}

func (ResourceType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_adfa846a86e1fa0c, []int{0}
}

// Encapsulation of fields that uniquely identifies a Flyte resource.
type Identifier struct {
	// Identifies the specific type of resource that this identifier corresponds to.
	ResourceType ResourceType `protobuf:"varint,1,opt,name=resource_type,json=resourceType,proto3,enum=flyteidl.core.ResourceType" json:"resource_type,omitempty"`
	// Name of the project the resource belongs to.
	Project string `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
	// Name of the domain the resource belongs to.
	// A domain can be considered as a subset within a specific project.
	Domain string `protobuf:"bytes,3,opt,name=domain,proto3" json:"domain,omitempty"`
	// User provided value for the resource.
	Name string `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	// Specific version of the resource.
	Version              string   `protobuf:"bytes,5,opt,name=version,proto3" json:"version,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Identifier) Reset()         { *m = Identifier{} }
func (m *Identifier) String() string { return proto.CompactTextString(m) }
func (*Identifier) ProtoMessage()    {}
func (*Identifier) Descriptor() ([]byte, []int) {
	return fileDescriptor_adfa846a86e1fa0c, []int{0}
}

func (m *Identifier) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Identifier.Unmarshal(m, b)
}
func (m *Identifier) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Identifier.Marshal(b, m, deterministic)
}
func (m *Identifier) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Identifier.Merge(m, src)
}
func (m *Identifier) XXX_Size() int {
	return xxx_messageInfo_Identifier.Size(m)
}
func (m *Identifier) XXX_DiscardUnknown() {
	xxx_messageInfo_Identifier.DiscardUnknown(m)
}

var xxx_messageInfo_Identifier proto.InternalMessageInfo

func (m *Identifier) GetResourceType() ResourceType {
	if m != nil {
		return m.ResourceType
	}
	return ResourceType_UNSPECIFIED
}

func (m *Identifier) GetProject() string {
	if m != nil {
		return m.Project
	}
	return ""
}

func (m *Identifier) GetDomain() string {
	if m != nil {
		return m.Domain
	}
	return ""
}

func (m *Identifier) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Identifier) GetVersion() string {
	if m != nil {
		return m.Version
	}
	return ""
}

// Encapsulation of fields that uniquely identifies a Flyte workflow execution
type WorkflowExecutionIdentifier struct {
	// Name of the project the resource belongs to.
	Project string `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
	// Name of the domain the resource belongs to.
	// A domain can be considered as a subset within a specific project.
	Domain string `protobuf:"bytes,2,opt,name=domain,proto3" json:"domain,omitempty"`
	// User or system provided value for the resource.
	Name                 string   `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *WorkflowExecutionIdentifier) Reset()         { *m = WorkflowExecutionIdentifier{} }
func (m *WorkflowExecutionIdentifier) String() string { return proto.CompactTextString(m) }
func (*WorkflowExecutionIdentifier) ProtoMessage()    {}
func (*WorkflowExecutionIdentifier) Descriptor() ([]byte, []int) {
	return fileDescriptor_adfa846a86e1fa0c, []int{1}
}

func (m *WorkflowExecutionIdentifier) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_WorkflowExecutionIdentifier.Unmarshal(m, b)
}
func (m *WorkflowExecutionIdentifier) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_WorkflowExecutionIdentifier.Marshal(b, m, deterministic)
}
func (m *WorkflowExecutionIdentifier) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WorkflowExecutionIdentifier.Merge(m, src)
}
func (m *WorkflowExecutionIdentifier) XXX_Size() int {
	return xxx_messageInfo_WorkflowExecutionIdentifier.Size(m)
}
func (m *WorkflowExecutionIdentifier) XXX_DiscardUnknown() {
	xxx_messageInfo_WorkflowExecutionIdentifier.DiscardUnknown(m)
}

var xxx_messageInfo_WorkflowExecutionIdentifier proto.InternalMessageInfo

func (m *WorkflowExecutionIdentifier) GetProject() string {
	if m != nil {
		return m.Project
	}
	return ""
}

func (m *WorkflowExecutionIdentifier) GetDomain() string {
	if m != nil {
		return m.Domain
	}
	return ""
}

func (m *WorkflowExecutionIdentifier) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

// Encapsulation of fields that identify a Flyte node execution entity.
type NodeExecutionIdentifier struct {
	NodeId               string                       `protobuf:"bytes,1,opt,name=node_id,json=nodeId,proto3" json:"node_id,omitempty"`
	ExecutionId          *WorkflowExecutionIdentifier `protobuf:"bytes,2,opt,name=execution_id,json=executionId,proto3" json:"execution_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                     `json:"-"`
	XXX_unrecognized     []byte                       `json:"-"`
	XXX_sizecache        int32                        `json:"-"`
}

func (m *NodeExecutionIdentifier) Reset()         { *m = NodeExecutionIdentifier{} }
func (m *NodeExecutionIdentifier) String() string { return proto.CompactTextString(m) }
func (*NodeExecutionIdentifier) ProtoMessage()    {}
func (*NodeExecutionIdentifier) Descriptor() ([]byte, []int) {
	return fileDescriptor_adfa846a86e1fa0c, []int{2}
}

func (m *NodeExecutionIdentifier) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NodeExecutionIdentifier.Unmarshal(m, b)
}
func (m *NodeExecutionIdentifier) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NodeExecutionIdentifier.Marshal(b, m, deterministic)
}
func (m *NodeExecutionIdentifier) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NodeExecutionIdentifier.Merge(m, src)
}
func (m *NodeExecutionIdentifier) XXX_Size() int {
	return xxx_messageInfo_NodeExecutionIdentifier.Size(m)
}
func (m *NodeExecutionIdentifier) XXX_DiscardUnknown() {
	xxx_messageInfo_NodeExecutionIdentifier.DiscardUnknown(m)
}

var xxx_messageInfo_NodeExecutionIdentifier proto.InternalMessageInfo

func (m *NodeExecutionIdentifier) GetNodeId() string {
	if m != nil {
		return m.NodeId
	}
	return ""
}

func (m *NodeExecutionIdentifier) GetExecutionId() *WorkflowExecutionIdentifier {
	if m != nil {
		return m.ExecutionId
	}
	return nil
}

// Encapsulation of fields that identify a Flyte task execution entity.
type TaskExecutionIdentifier struct {
	TaskId               *Identifier              `protobuf:"bytes,1,opt,name=task_id,json=taskId,proto3" json:"task_id,omitempty"`
	NodeExecutionId      *NodeExecutionIdentifier `protobuf:"bytes,2,opt,name=node_execution_id,json=nodeExecutionId,proto3" json:"node_execution_id,omitempty"`
	RetryAttempt         uint32                   `protobuf:"varint,3,opt,name=retry_attempt,json=retryAttempt,proto3" json:"retry_attempt,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                 `json:"-"`
	XXX_unrecognized     []byte                   `json:"-"`
	XXX_sizecache        int32                    `json:"-"`
}

func (m *TaskExecutionIdentifier) Reset()         { *m = TaskExecutionIdentifier{} }
func (m *TaskExecutionIdentifier) String() string { return proto.CompactTextString(m) }
func (*TaskExecutionIdentifier) ProtoMessage()    {}
func (*TaskExecutionIdentifier) Descriptor() ([]byte, []int) {
	return fileDescriptor_adfa846a86e1fa0c, []int{3}
}

func (m *TaskExecutionIdentifier) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TaskExecutionIdentifier.Unmarshal(m, b)
}
func (m *TaskExecutionIdentifier) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TaskExecutionIdentifier.Marshal(b, m, deterministic)
}
func (m *TaskExecutionIdentifier) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TaskExecutionIdentifier.Merge(m, src)
}
func (m *TaskExecutionIdentifier) XXX_Size() int {
	return xxx_messageInfo_TaskExecutionIdentifier.Size(m)
}
func (m *TaskExecutionIdentifier) XXX_DiscardUnknown() {
	xxx_messageInfo_TaskExecutionIdentifier.DiscardUnknown(m)
}

var xxx_messageInfo_TaskExecutionIdentifier proto.InternalMessageInfo

func (m *TaskExecutionIdentifier) GetTaskId() *Identifier {
	if m != nil {
		return m.TaskId
	}
	return nil
}

func (m *TaskExecutionIdentifier) GetNodeExecutionId() *NodeExecutionIdentifier {
	if m != nil {
		return m.NodeExecutionId
	}
	return nil
}

func (m *TaskExecutionIdentifier) GetRetryAttempt() uint32 {
	if m != nil {
		return m.RetryAttempt
	}
	return 0
}

// Encapsulation of fields the uniquely identify a signal.
type SignalIdentifier struct {
	// Unique identifier for a signal.
	SignalId string `protobuf:"bytes,1,opt,name=signal_id,json=signalId,proto3" json:"signal_id,omitempty"`
	// Identifies the Flyte workflow execution this signal belongs to.
	ExecutionId          *WorkflowExecutionIdentifier `protobuf:"bytes,2,opt,name=execution_id,json=executionId,proto3" json:"execution_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                     `json:"-"`
	XXX_unrecognized     []byte                       `json:"-"`
	XXX_sizecache        int32                        `json:"-"`
}

func (m *SignalIdentifier) Reset()         { *m = SignalIdentifier{} }
func (m *SignalIdentifier) String() string { return proto.CompactTextString(m) }
func (*SignalIdentifier) ProtoMessage()    {}
func (*SignalIdentifier) Descriptor() ([]byte, []int) {
	return fileDescriptor_adfa846a86e1fa0c, []int{4}
}

func (m *SignalIdentifier) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SignalIdentifier.Unmarshal(m, b)
}
func (m *SignalIdentifier) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SignalIdentifier.Marshal(b, m, deterministic)
}
func (m *SignalIdentifier) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SignalIdentifier.Merge(m, src)
}
func (m *SignalIdentifier) XXX_Size() int {
	return xxx_messageInfo_SignalIdentifier.Size(m)
}
func (m *SignalIdentifier) XXX_DiscardUnknown() {
	xxx_messageInfo_SignalIdentifier.DiscardUnknown(m)
}

var xxx_messageInfo_SignalIdentifier proto.InternalMessageInfo

func (m *SignalIdentifier) GetSignalId() string {
	if m != nil {
		return m.SignalId
	}
	return ""
}

func (m *SignalIdentifier) GetExecutionId() *WorkflowExecutionIdentifier {
	if m != nil {
		return m.ExecutionId
	}
	return nil
}

type ArtifactKey struct {
	// Project and domain as we're all used to. Just to align with existing uniqueness constructs.
	Project string `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
	Domain  string `protobuf:"bytes,2,opt,name=domain,proto3" json:"domain,omitempty"`
	// name can be auto-generated by the system in the case of natural outputs or un-named uploads
	// or manually named by the user, if they care to.
	// Please see the confluence doc for more discussion, this is one of the trickier bits of the design.
	// Maybe we should always have an auto-generated string here and the user-facing "name" is a different field.
	Name                 string   `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ArtifactKey) Reset()         { *m = ArtifactKey{} }
func (m *ArtifactKey) String() string { return proto.CompactTextString(m) }
func (*ArtifactKey) ProtoMessage()    {}
func (*ArtifactKey) Descriptor() ([]byte, []int) {
	return fileDescriptor_adfa846a86e1fa0c, []int{5}
}

func (m *ArtifactKey) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ArtifactKey.Unmarshal(m, b)
}
func (m *ArtifactKey) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ArtifactKey.Marshal(b, m, deterministic)
}
func (m *ArtifactKey) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ArtifactKey.Merge(m, src)
}
func (m *ArtifactKey) XXX_Size() int {
	return xxx_messageInfo_ArtifactKey.Size(m)
}
func (m *ArtifactKey) XXX_DiscardUnknown() {
	xxx_messageInfo_ArtifactKey.DiscardUnknown(m)
}

var xxx_messageInfo_ArtifactKey proto.InternalMessageInfo

func (m *ArtifactKey) GetProject() string {
	if m != nil {
		return m.Project
	}
	return ""
}

func (m *ArtifactKey) GetDomain() string {
	if m != nil {
		return m.Domain
	}
	return ""
}

func (m *ArtifactKey) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type ArtifactID struct {
	ArtifactKey *ArtifactKey `protobuf:"bytes,1,opt,name=artifact_key,json=artifactKey,proto3" json:"artifact_key,omitempty"`
	// Version is always autogenerated unless specifically overridden by the user. This will usually be the wf exec id
	// The things that users want, the ability to tag various versions with user-friendly semvers or something
	// can be managed separately in Tags and Aliases.
	Version              string   `protobuf:"bytes,4,opt,name=version,proto3" json:"version,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ArtifactID) Reset()         { *m = ArtifactID{} }
func (m *ArtifactID) String() string { return proto.CompactTextString(m) }
func (*ArtifactID) ProtoMessage()    {}
func (*ArtifactID) Descriptor() ([]byte, []int) {
	return fileDescriptor_adfa846a86e1fa0c, []int{6}
}

func (m *ArtifactID) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ArtifactID.Unmarshal(m, b)
}
func (m *ArtifactID) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ArtifactID.Marshal(b, m, deterministic)
}
func (m *ArtifactID) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ArtifactID.Merge(m, src)
}
func (m *ArtifactID) XXX_Size() int {
	return xxx_messageInfo_ArtifactID.Size(m)
}
func (m *ArtifactID) XXX_DiscardUnknown() {
	xxx_messageInfo_ArtifactID.DiscardUnknown(m)
}

var xxx_messageInfo_ArtifactID proto.InternalMessageInfo

func (m *ArtifactID) GetArtifactKey() *ArtifactKey {
	if m != nil {
		return m.ArtifactKey
	}
	return nil
}

func (m *ArtifactID) GetVersion() string {
	if m != nil {
		return m.Version
	}
	return ""
}

func init() {
	proto.RegisterEnum("flyteidl.core.ResourceType", ResourceType_name, ResourceType_value)
	proto.RegisterType((*Identifier)(nil), "flyteidl.core.Identifier")
	proto.RegisterType((*WorkflowExecutionIdentifier)(nil), "flyteidl.core.WorkflowExecutionIdentifier")
	proto.RegisterType((*NodeExecutionIdentifier)(nil), "flyteidl.core.NodeExecutionIdentifier")
	proto.RegisterType((*TaskExecutionIdentifier)(nil), "flyteidl.core.TaskExecutionIdentifier")
	proto.RegisterType((*SignalIdentifier)(nil), "flyteidl.core.SignalIdentifier")
	proto.RegisterType((*ArtifactKey)(nil), "flyteidl.core.ArtifactKey")
	proto.RegisterType((*ArtifactID)(nil), "flyteidl.core.ArtifactID")
}

func init() { proto.RegisterFile("flyteidl/core/identifier.proto", fileDescriptor_adfa846a86e1fa0c) }

var fileDescriptor_adfa846a86e1fa0c = []byte{
	// 514 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x54, 0xd1, 0x8e, 0xd2, 0x40,
	0x14, 0xb5, 0x80, 0xc0, 0xde, 0x82, 0x5b, 0xe7, 0x41, 0xaa, 0x24, 0x66, 0x83, 0x89, 0xd9, 0x6c,
	0x22, 0x4d, 0xd0, 0xf8, 0x66, 0x62, 0x5d, 0xd8, 0xd8, 0x80, 0xec, 0xa6, 0x94, 0x90, 0xf8, 0xd2,
	0x94, 0xf6, 0x52, 0x47, 0xa0, 0xd3, 0x4c, 0x07, 0xb5, 0x2f, 0x26, 0xfe, 0x90, 0x9f, 0xe1, 0x77,
	0x99, 0x76, 0xdb, 0xdd, 0x96, 0xb0, 0xfa, 0xa0, 0x6f, 0x3d, 0xf7, 0x9e, 0xb9, 0xe7, 0xcc, 0xcc,
	0xe9, 0xc0, 0xd3, 0xd5, 0x26, 0x16, 0x48, 0xbd, 0x8d, 0xe6, 0x32, 0x8e, 0x1a, 0xf5, 0x30, 0x10,
	0x74, 0x45, 0x91, 0xf7, 0x43, 0xce, 0x04, 0x23, 0xed, 0xbc, 0xdf, 0x4f, 0xfa, 0xbd, 0x9f, 0x12,
	0x80, 0x71, 0xc3, 0x21, 0x6f, 0xa1, 0xcd, 0x31, 0x62, 0x3b, 0xee, 0xa2, 0x2d, 0xe2, 0x10, 0x55,
	0xe9, 0x44, 0x3a, 0x7d, 0x30, 0xe8, 0xf6, 0x4b, 0xab, 0xfa, 0x66, 0xc6, 0xb1, 0xe2, 0x10, 0xcd,
	0x16, 0x2f, 0x20, 0xa2, 0x42, 0x23, 0xe4, 0xec, 0x33, 0xba, 0x42, 0xad, 0x9c, 0x48, 0xa7, 0x47,
	0x66, 0x0e, 0xc9, 0x23, 0xa8, 0x7b, 0x6c, 0xeb, 0xd0, 0x40, 0xad, 0xa6, 0x8d, 0x0c, 0x11, 0x02,
	0xb5, 0xc0, 0xd9, 0xa2, 0x5a, 0x4b, 0xab, 0xe9, 0x77, 0x32, 0xe5, 0x0b, 0xf2, 0x88, 0xb2, 0x40,
	0xbd, 0x7f, 0x3d, 0x25, 0x83, 0x3d, 0x17, 0xba, 0x0b, 0xc6, 0xd7, 0xab, 0x0d, 0xfb, 0x3a, 0xfa,
	0x86, 0xee, 0x4e, 0x50, 0x16, 0x14, 0x36, 0x50, 0x90, 0x97, 0xee, 0x92, 0xaf, 0xfc, 0x4d, 0xbe,
	0xf7, 0x43, 0x82, 0xce, 0x94, 0x79, 0x78, 0x48, 0xa1, 0x03, 0x8d, 0x80, 0x79, 0x68, 0x53, 0x2f,
	0x53, 0xa8, 0x27, 0xd0, 0xf0, 0xc8, 0x07, 0x68, 0x61, 0xce, 0x4f, 0xba, 0x89, 0x8c, 0x3c, 0x38,
	0xdb, 0x3b, 0xba, 0x3f, 0x98, 0x37, 0x65, 0xbc, 0x2d, 0xf6, 0x7e, 0x49, 0xd0, 0xb1, 0x9c, 0x68,
	0x7d, 0xc8, 0xc3, 0x00, 0x1a, 0xc2, 0x89, 0xd6, 0xb9, 0x07, 0x79, 0xf0, 0x78, 0x4f, 0xa5, 0x30,
	0xb4, 0x9e, 0x30, 0x0d, 0x8f, 0x98, 0xf0, 0x30, 0xf5, 0x7d, 0xc0, 0xe3, 0xf3, 0xbd, 0xd5, 0x77,
	0x6c, 0xdd, 0x3c, 0x0e, 0xca, 0x0d, 0xf2, 0x2c, 0x89, 0x8b, 0xe0, 0xb1, 0xed, 0x08, 0x81, 0xdb,
	0x50, 0xa4, 0x37, 0xdb, 0x4e, 0x12, 0x21, 0x78, 0xac, 0x5f, 0xd7, 0x7a, 0xdf, 0x41, 0x99, 0x51,
	0x3f, 0x70, 0x36, 0x85, 0x0d, 0x74, 0xe1, 0x28, 0x4a, 0x6b, 0xb7, 0xc7, 0xd8, 0x8c, 0x32, 0xd2,
	0xff, 0x3e, 0xc8, 0x19, 0xc8, 0x3a, 0x17, 0x74, 0xe5, 0xb8, 0x62, 0x8c, 0xf1, 0x3f, 0x24, 0xa4,
	0x5a, 0x48, 0x08, 0x02, 0xe4, 0x43, 0x8d, 0x21, 0x79, 0x03, 0x2d, 0x27, 0x43, 0xf6, 0x1a, 0xe3,
	0xec, 0x52, 0x9e, 0xec, 0x39, 0x2e, 0xb8, 0x30, 0x65, 0xa7, 0x6c, 0x29, 0x4f, 0x7b, 0xad, 0x94,
	0xf6, 0xb3, 0x39, 0xb4, 0x8a, 0xff, 0x1a, 0x39, 0x06, 0x79, 0x3e, 0x9d, 0x5d, 0x8d, 0xce, 0x8d,
	0x0b, 0x63, 0x34, 0x54, 0xee, 0x91, 0x26, 0xd4, 0x2c, 0x7d, 0x36, 0x56, 0x24, 0xd2, 0x82, 0xe6,
	0xe2, 0xd2, 0x1c, 0x5f, 0x4c, 0x2e, 0x17, 0x4a, 0x25, 0x21, 0x4e, 0xf4, 0xf9, 0xf4, 0xfc, 0xbd,
	0x7d, 0x35, 0xd1, 0xa7, 0x4a, 0x95, 0xc8, 0xd0, 0x18, 0xea, 0x96, 0x3e, 0x1b, 0x59, 0x4a, 0xed,
	0xdd, 0xeb, 0x8f, 0xaf, 0x7c, 0x2a, 0x3e, 0xed, 0x96, 0x7d, 0x97, 0x6d, 0xb5, 0xd4, 0x25, 0xe3,
	0xbe, 0x76, 0xf3, 0x74, 0xf8, 0x18, 0x68, 0xe1, 0xf2, 0x85, 0xcf, 0xb4, 0xd2, 0x6b, 0xb2, 0xac,
	0xa7, 0x6f, 0xc8, 0xcb, 0xdf, 0x01, 0x00, 0x00, 0xff, 0xff, 0xe5, 0x8c, 0x4a, 0xcf, 0x65, 0x04,
	0x00, 0x00,
}

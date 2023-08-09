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
	// Project and domain and suffix needs to be unique across a given artifact store.
	Project              string   `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
	Domain               string   `protobuf:"bytes,2,opt,name=domain,proto3" json:"domain,omitempty"`
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

type Partitions struct {
	Value                map[string]string `protobuf:"bytes,1,rep,name=value,proto3" json:"value,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *Partitions) Reset()         { *m = Partitions{} }
func (m *Partitions) String() string { return proto.CompactTextString(m) }
func (*Partitions) ProtoMessage()    {}
func (*Partitions) Descriptor() ([]byte, []int) {
	return fileDescriptor_adfa846a86e1fa0c, []int{6}
}

func (m *Partitions) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Partitions.Unmarshal(m, b)
}
func (m *Partitions) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Partitions.Marshal(b, m, deterministic)
}
func (m *Partitions) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Partitions.Merge(m, src)
}
func (m *Partitions) XXX_Size() int {
	return xxx_messageInfo_Partitions.Size(m)
}
func (m *Partitions) XXX_DiscardUnknown() {
	xxx_messageInfo_Partitions.DiscardUnknown(m)
}

var xxx_messageInfo_Partitions proto.InternalMessageInfo

func (m *Partitions) GetValue() map[string]string {
	if m != nil {
		return m.Value
	}
	return nil
}

type ArtifactID struct {
	ArtifactKey *ArtifactKey `protobuf:"bytes,1,opt,name=artifact_key,json=artifactKey,proto3" json:"artifact_key,omitempty"`
	Version     string       `protobuf:"bytes,2,opt,name=version,proto3" json:"version,omitempty"`
	// here for ds popularity
	// this is a oneof because of partition querying... we need a way to distinguish between
	// a user not-specifying partitions when searching, and specifically searching for an Artifact
	// that is not partitioned (this can happen if an Artifact goes from partitioned to non-
	// partitioned across executions).
	//
	// Types that are valid to be assigned to Dimensions:
	//	*ArtifactID_Partitions
	Dimensions           isArtifactID_Dimensions `protobuf_oneof:"dimensions"`
	XXX_NoUnkeyedLiteral struct{}                `json:"-"`
	XXX_unrecognized     []byte                  `json:"-"`
	XXX_sizecache        int32                   `json:"-"`
}

func (m *ArtifactID) Reset()         { *m = ArtifactID{} }
func (m *ArtifactID) String() string { return proto.CompactTextString(m) }
func (*ArtifactID) ProtoMessage()    {}
func (*ArtifactID) Descriptor() ([]byte, []int) {
	return fileDescriptor_adfa846a86e1fa0c, []int{7}
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

type isArtifactID_Dimensions interface {
	isArtifactID_Dimensions()
}

type ArtifactID_Partitions struct {
	Partitions *Partitions `protobuf:"bytes,3,opt,name=partitions,proto3,oneof"`
}

func (*ArtifactID_Partitions) isArtifactID_Dimensions() {}

func (m *ArtifactID) GetDimensions() isArtifactID_Dimensions {
	if m != nil {
		return m.Dimensions
	}
	return nil
}

func (m *ArtifactID) GetPartitions() *Partitions {
	if x, ok := m.GetDimensions().(*ArtifactID_Partitions); ok {
		return x.Partitions
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*ArtifactID) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*ArtifactID_Partitions)(nil),
	}
}

type ArtifactTag struct {
	ArtifactKey          *ArtifactKey `protobuf:"bytes,1,opt,name=artifact_key,json=artifactKey,proto3" json:"artifact_key,omitempty"`
	Value                string       `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *ArtifactTag) Reset()         { *m = ArtifactTag{} }
func (m *ArtifactTag) String() string { return proto.CompactTextString(m) }
func (*ArtifactTag) ProtoMessage()    {}
func (*ArtifactTag) Descriptor() ([]byte, []int) {
	return fileDescriptor_adfa846a86e1fa0c, []int{8}
}

func (m *ArtifactTag) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ArtifactTag.Unmarshal(m, b)
}
func (m *ArtifactTag) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ArtifactTag.Marshal(b, m, deterministic)
}
func (m *ArtifactTag) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ArtifactTag.Merge(m, src)
}
func (m *ArtifactTag) XXX_Size() int {
	return xxx_messageInfo_ArtifactTag.Size(m)
}
func (m *ArtifactTag) XXX_DiscardUnknown() {
	xxx_messageInfo_ArtifactTag.DiscardUnknown(m)
}

var xxx_messageInfo_ArtifactTag proto.InternalMessageInfo

func (m *ArtifactTag) GetArtifactKey() *ArtifactKey {
	if m != nil {
		return m.ArtifactKey
	}
	return nil
}

func (m *ArtifactTag) GetValue() string {
	if m != nil {
		return m.Value
	}
	return ""
}

// Uniqueness constraints for Artifacts
//  - project, domain, name, version, partitions
// Option 2 (tags are standalone, point to an individual artifact id):
//  - project, domain, name, alias (points to one partition if partitioned)
//  - project, domain, name, partition key, partition value
type ArtifactQuery struct {
	// Types that are valid to be assigned to Identifier:
	//	*ArtifactQuery_ArtifactId
	//	*ArtifactQuery_ArtifactTag
	//	*ArtifactQuery_Uri
	Identifier           isArtifactQuery_Identifier `protobuf_oneof:"identifier"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *ArtifactQuery) Reset()         { *m = ArtifactQuery{} }
func (m *ArtifactQuery) String() string { return proto.CompactTextString(m) }
func (*ArtifactQuery) ProtoMessage()    {}
func (*ArtifactQuery) Descriptor() ([]byte, []int) {
	return fileDescriptor_adfa846a86e1fa0c, []int{9}
}

func (m *ArtifactQuery) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ArtifactQuery.Unmarshal(m, b)
}
func (m *ArtifactQuery) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ArtifactQuery.Marshal(b, m, deterministic)
}
func (m *ArtifactQuery) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ArtifactQuery.Merge(m, src)
}
func (m *ArtifactQuery) XXX_Size() int {
	return xxx_messageInfo_ArtifactQuery.Size(m)
}
func (m *ArtifactQuery) XXX_DiscardUnknown() {
	xxx_messageInfo_ArtifactQuery.DiscardUnknown(m)
}

var xxx_messageInfo_ArtifactQuery proto.InternalMessageInfo

type isArtifactQuery_Identifier interface {
	isArtifactQuery_Identifier()
}

type ArtifactQuery_ArtifactId struct {
	ArtifactId *ArtifactID `protobuf:"bytes,1,opt,name=artifact_id,json=artifactId,proto3,oneof"`
}

type ArtifactQuery_ArtifactTag struct {
	ArtifactTag *ArtifactTag `protobuf:"bytes,2,opt,name=artifact_tag,json=artifactTag,proto3,oneof"`
}

type ArtifactQuery_Uri struct {
	Uri string `protobuf:"bytes,3,opt,name=uri,proto3,oneof"`
}

func (*ArtifactQuery_ArtifactId) isArtifactQuery_Identifier() {}

func (*ArtifactQuery_ArtifactTag) isArtifactQuery_Identifier() {}

func (*ArtifactQuery_Uri) isArtifactQuery_Identifier() {}

func (m *ArtifactQuery) GetIdentifier() isArtifactQuery_Identifier {
	if m != nil {
		return m.Identifier
	}
	return nil
}

func (m *ArtifactQuery) GetArtifactId() *ArtifactID {
	if x, ok := m.GetIdentifier().(*ArtifactQuery_ArtifactId); ok {
		return x.ArtifactId
	}
	return nil
}

func (m *ArtifactQuery) GetArtifactTag() *ArtifactTag {
	if x, ok := m.GetIdentifier().(*ArtifactQuery_ArtifactTag); ok {
		return x.ArtifactTag
	}
	return nil
}

func (m *ArtifactQuery) GetUri() string {
	if x, ok := m.GetIdentifier().(*ArtifactQuery_Uri); ok {
		return x.Uri
	}
	return ""
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*ArtifactQuery) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*ArtifactQuery_ArtifactId)(nil),
		(*ArtifactQuery_ArtifactTag)(nil),
		(*ArtifactQuery_Uri)(nil),
	}
}

func init() {
	proto.RegisterEnum("flyteidl.core.ResourceType", ResourceType_name, ResourceType_value)
	proto.RegisterType((*Identifier)(nil), "flyteidl.core.Identifier")
	proto.RegisterType((*WorkflowExecutionIdentifier)(nil), "flyteidl.core.WorkflowExecutionIdentifier")
	proto.RegisterType((*NodeExecutionIdentifier)(nil), "flyteidl.core.NodeExecutionIdentifier")
	proto.RegisterType((*TaskExecutionIdentifier)(nil), "flyteidl.core.TaskExecutionIdentifier")
	proto.RegisterType((*SignalIdentifier)(nil), "flyteidl.core.SignalIdentifier")
	proto.RegisterType((*ArtifactKey)(nil), "flyteidl.core.ArtifactKey")
	proto.RegisterType((*Partitions)(nil), "flyteidl.core.Partitions")
	proto.RegisterMapType((map[string]string)(nil), "flyteidl.core.Partitions.ValueEntry")
	proto.RegisterType((*ArtifactID)(nil), "flyteidl.core.ArtifactID")
	proto.RegisterType((*ArtifactTag)(nil), "flyteidl.core.ArtifactTag")
	proto.RegisterType((*ArtifactQuery)(nil), "flyteidl.core.ArtifactQuery")
}

func init() { proto.RegisterFile("flyteidl/core/identifier.proto", fileDescriptor_adfa846a86e1fa0c) }

var fileDescriptor_adfa846a86e1fa0c = []byte{
	// 678 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x55, 0xd1, 0x6e, 0xd3, 0x4a,
	0x10, 0x8d, 0x93, 0x34, 0x69, 0xc7, 0xc9, 0x6d, 0xee, 0x0a, 0xd1, 0xd0, 0x4a, 0xa8, 0x0a, 0x08,
	0x55, 0x95, 0x48, 0xa4, 0x80, 0x50, 0x55, 0x40, 0xe0, 0xb6, 0xa9, 0x62, 0xb5, 0xa4, 0xc5, 0x71,
	0xa9, 0xc4, 0x4b, 0xb4, 0xb1, 0x37, 0x66, 0x49, 0xe2, 0xb5, 0xd6, 0x9b, 0x82, 0x5f, 0x90, 0xe0,
	0x83, 0x10, 0x5f, 0xc1, 0x77, 0xa1, 0x75, 0xec, 0xd8, 0x09, 0x09, 0x3c, 0x94, 0x37, 0xcf, 0xcc,
	0x99, 0x99, 0x33, 0xc7, 0xb3, 0xbb, 0x70, 0x7f, 0x30, 0x0a, 0x04, 0xa1, 0xf6, 0xa8, 0x61, 0x31,
	0x4e, 0x1a, 0xd4, 0x26, 0xae, 0xa0, 0x03, 0x4a, 0x78, 0xdd, 0xe3, 0x4c, 0x30, 0x54, 0x8e, 0xe3,
	0x75, 0x19, 0xaf, 0x7d, 0x57, 0x00, 0xf4, 0x19, 0x06, 0xbd, 0x86, 0x32, 0x27, 0x3e, 0x9b, 0x70,
	0x8b, 0xf4, 0x44, 0xe0, 0x91, 0xaa, 0xb2, 0xab, 0xec, 0xfd, 0xd7, 0xdc, 0xa9, 0xcf, 0x65, 0xd5,
	0x8d, 0x08, 0x63, 0x06, 0x1e, 0x31, 0x4a, 0x3c, 0x65, 0xa1, 0x2a, 0x14, 0x3d, 0xce, 0x3e, 0x12,
	0x4b, 0x54, 0xb3, 0xbb, 0xca, 0xde, 0x86, 0x11, 0x9b, 0xe8, 0x2e, 0x14, 0x6c, 0x36, 0xc6, 0xd4,
	0xad, 0xe6, 0xc2, 0x40, 0x64, 0x21, 0x04, 0x79, 0x17, 0x8f, 0x49, 0x35, 0x1f, 0x7a, 0xc3, 0x6f,
	0x59, 0xe5, 0x86, 0x70, 0x9f, 0x32, 0xb7, 0xba, 0x36, 0xad, 0x12, 0x99, 0x35, 0x0b, 0x76, 0xae,
	0x19, 0x1f, 0x0e, 0x46, 0xec, 0x53, 0xeb, 0x33, 0xb1, 0x26, 0x82, 0x32, 0x37, 0x35, 0x40, 0xaa,
	0xbd, 0xb2, 0xaa, 0x7d, 0xf6, 0x6f, 0xed, 0x6b, 0x5f, 0x15, 0xd8, 0xea, 0x30, 0x9b, 0x2c, 0xeb,
	0xb0, 0x05, 0x45, 0x97, 0xd9, 0xa4, 0x47, 0xed, 0xa8, 0x43, 0x41, 0x9a, 0xba, 0x8d, 0xde, 0x40,
	0x89, 0xc4, 0x78, 0x19, 0x95, 0x6d, 0xd4, 0xe6, 0xfe, 0x82, 0x74, 0x7f, 0x20, 0x6f, 0xa8, 0x24,
	0x71, 0xd6, 0x7e, 0x2a, 0xb0, 0x65, 0x62, 0x7f, 0xb8, 0x8c, 0x43, 0x13, 0x8a, 0x02, 0xfb, 0xc3,
	0x98, 0x83, 0xda, 0xbc, 0xb7, 0xd0, 0x25, 0x55, 0xb4, 0x20, 0x91, 0xba, 0x8d, 0x0c, 0xf8, 0x3f,
	0xe4, 0xbd, 0x84, 0xe3, 0xa3, 0x85, 0xec, 0x15, 0xa3, 0x1b, 0x9b, 0xee, 0x7c, 0x00, 0x3d, 0x90,
	0xeb, 0x22, 0x78, 0xd0, 0xc3, 0x42, 0x90, 0xb1, 0x27, 0xc2, 0x3f, 0x5b, 0x96, 0x1b, 0x21, 0x78,
	0xa0, 0x4d, 0x7d, 0xb5, 0x2f, 0x50, 0xe9, 0x52, 0xc7, 0xc5, 0xa3, 0xd4, 0x00, 0x3b, 0xb0, 0xe1,
	0x87, 0xbe, 0x44, 0xc6, 0x75, 0x3f, 0x02, 0xfd, 0x6b, 0x21, 0xbb, 0xa0, 0x6a, 0x5c, 0xd0, 0x01,
	0xb6, 0xc4, 0x19, 0x09, 0x6e, 0xb1, 0x21, 0xb9, 0xd4, 0x86, 0x7c, 0x53, 0x00, 0x2e, 0x31, 0x17,
	0x54, 0x36, 0xf1, 0xd1, 0x21, 0xac, 0xdd, 0xe0, 0xd1, 0x44, 0x9e, 0x97, 0xdc, 0x9e, 0xda, 0x7c,
	0xb8, 0xc0, 0x35, 0x41, 0xd6, 0xdf, 0x49, 0x58, 0xcb, 0x15, 0x3c, 0x30, 0xa6, 0x29, 0xdb, 0x07,
	0x00, 0x89, 0x13, 0x55, 0x20, 0x37, 0x24, 0x41, 0x44, 0x4d, 0x7e, 0xa2, 0x3b, 0x71, 0xed, 0x29,
	0xab, 0xa9, 0x71, 0x98, 0x3d, 0x50, 0x6a, 0x3f, 0x14, 0x80, 0x78, 0x34, 0xfd, 0x04, 0xbd, 0x84,
	0x12, 0x8e, 0xac, 0x5e, 0x5c, 0x43, 0x6d, 0x6e, 0x2f, 0x70, 0x49, 0x69, 0x61, 0xa8, 0x78, 0x5e,
	0x98, 0xf8, 0xcc, 0x65, 0xe7, 0xce, 0x1c, 0x7a, 0x0e, 0xe0, 0xcd, 0x26, 0x08, 0x65, 0xf8, 0x7d,
	0xe3, 0x92, 0x11, 0xdb, 0x19, 0x23, 0x05, 0x3f, 0x2a, 0x01, 0xd8, 0x74, 0x4c, 0x5c, 0x59, 0xc9,
	0xaf, 0xf5, 0x93, 0x9f, 0x61, 0x62, 0xe7, 0xb6, 0x94, 0x97, 0x4a, 0x23, 0x65, 0x29, 0xc7, 0x29,
	0x6f, 0x27, 0x84, 0x07, 0xe8, 0x05, 0xcc, 0xd2, 0x56, 0x9f, 0x99, 0x44, 0x49, 0x39, 0x41, 0x8c,
	0xd7, 0x6d, 0xf4, 0x2a, 0x45, 0x52, 0x60, 0x27, 0xda, 0xc7, 0x55, 0x24, 0x4d, 0xec, 0xb4, 0x33,
	0x09, 0x4d, 0x39, 0x25, 0x82, 0xdc, 0x84, 0xd3, 0xe9, 0xfe, 0xb4, 0x33, 0x86, 0x34, 0xa4, 0x2c,
	0xc9, 0xdd, 0xbc, 0x7f, 0x05, 0xa5, 0xf4, 0x9d, 0x8a, 0x36, 0x41, 0xbd, 0xea, 0x74, 0x2f, 0x5b,
	0xc7, 0xfa, 0xa9, 0xde, 0x3a, 0xa9, 0x64, 0xd0, 0x3a, 0xe4, 0x4d, 0xad, 0x7b, 0x56, 0x51, 0x50,
	0x09, 0xd6, 0xaf, 0x2f, 0x8c, 0xb3, 0xd3, 0xf3, 0x8b, 0xeb, 0x4a, 0x56, 0x02, 0xcf, 0xb5, 0xab,
	0xce, 0x71, 0xbb, 0x77, 0x79, 0xae, 0x75, 0x2a, 0x39, 0xa4, 0x42, 0xf1, 0x44, 0x33, 0xb5, 0x6e,
	0xcb, 0xac, 0xe4, 0x8f, 0x9e, 0xbd, 0x7f, 0xea, 0x50, 0xf1, 0x61, 0xd2, 0xaf, 0x5b, 0x6c, 0xdc,
	0x08, 0xf9, 0x32, 0xee, 0x34, 0x66, 0x4f, 0x84, 0x43, 0xdc, 0x86, 0xd7, 0x7f, 0xec, 0xb0, 0xc6,
	0xdc, 0xab, 0xd1, 0x2f, 0x84, 0x6f, 0xc5, 0x93, 0x5f, 0x01, 0x00, 0x00, 0xff, 0xff, 0xe8, 0x23,
	0xe5, 0x3d, 0x4d, 0x06, 0x00, 0x00,
}

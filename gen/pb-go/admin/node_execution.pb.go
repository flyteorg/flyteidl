// Code generated by protoc-gen-go. DO NOT EDIT.
// source: admin/node_execution.proto

package admin

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import core "core"
import duration "github.com/golang/protobuf/ptypes/duration"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type NodeExecutionEventRequest struct {
	ExecutionUrn string `protobuf:"bytes,1,opt,name=execution_urn,json=executionUrn" json:"execution_urn,omitempty"`
	Name         string `protobuf:"bytes,2,opt,name=name" json:"name,omitempty"`
	// To indicate multiple retry of same node execution
	Version string `protobuf:"bytes,3,opt,name=version" json:"version,omitempty"`
	// Indicates the status of node execution - including retries
	Status               []*NodeExecutionStatus `protobuf:"bytes,4,rep,name=status" json:"status,omitempty"`
	Spec                 *NodeExecutionSpec     `protobuf:"bytes,5,opt,name=spec" json:"spec,omitempty"`
	Result               *NodeExecutionResult   `protobuf:"bytes,6,opt,name=result" json:"result,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *NodeExecutionEventRequest) Reset()         { *m = NodeExecutionEventRequest{} }
func (m *NodeExecutionEventRequest) String() string { return proto.CompactTextString(m) }
func (*NodeExecutionEventRequest) ProtoMessage()    {}
func (*NodeExecutionEventRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_node_execution_c9333c577e128293, []int{0}
}
func (m *NodeExecutionEventRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NodeExecutionEventRequest.Unmarshal(m, b)
}
func (m *NodeExecutionEventRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NodeExecutionEventRequest.Marshal(b, m, deterministic)
}
func (dst *NodeExecutionEventRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NodeExecutionEventRequest.Merge(dst, src)
}
func (m *NodeExecutionEventRequest) XXX_Size() int {
	return xxx_messageInfo_NodeExecutionEventRequest.Size(m)
}
func (m *NodeExecutionEventRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_NodeExecutionEventRequest.DiscardUnknown(m)
}

var xxx_messageInfo_NodeExecutionEventRequest proto.InternalMessageInfo

func (m *NodeExecutionEventRequest) GetExecutionUrn() string {
	if m != nil {
		return m.ExecutionUrn
	}
	return ""
}

func (m *NodeExecutionEventRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *NodeExecutionEventRequest) GetVersion() string {
	if m != nil {
		return m.Version
	}
	return ""
}

func (m *NodeExecutionEventRequest) GetStatus() []*NodeExecutionStatus {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *NodeExecutionEventRequest) GetSpec() *NodeExecutionSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

func (m *NodeExecutionEventRequest) GetResult() *NodeExecutionResult {
	if m != nil {
		return m.Result
	}
	return nil
}

type NodeExecutionEventResponse struct {
	Urn                  string   `protobuf:"bytes,1,opt,name=urn" json:"urn,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *NodeExecutionEventResponse) Reset()         { *m = NodeExecutionEventResponse{} }
func (m *NodeExecutionEventResponse) String() string { return proto.CompactTextString(m) }
func (*NodeExecutionEventResponse) ProtoMessage()    {}
func (*NodeExecutionEventResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_node_execution_c9333c577e128293, []int{1}
}
func (m *NodeExecutionEventResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NodeExecutionEventResponse.Unmarshal(m, b)
}
func (m *NodeExecutionEventResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NodeExecutionEventResponse.Marshal(b, m, deterministic)
}
func (dst *NodeExecutionEventResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NodeExecutionEventResponse.Merge(dst, src)
}
func (m *NodeExecutionEventResponse) XXX_Size() int {
	return xxx_messageInfo_NodeExecutionEventResponse.Size(m)
}
func (m *NodeExecutionEventResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_NodeExecutionEventResponse.DiscardUnknown(m)
}

var xxx_messageInfo_NodeExecutionEventResponse proto.InternalMessageInfo

func (m *NodeExecutionEventResponse) GetUrn() string {
	if m != nil {
		return m.Urn
	}
	return ""
}

type NodeExecution struct {
	ExecutionUrn string `protobuf:"bytes,1,opt,name=execution_urn,json=executionUrn" json:"execution_urn,omitempty"`
	Name         string `protobuf:"bytes,2,opt,name=name" json:"name,omitempty"`
	Urn          string `protobuf:"bytes,3,opt,name=urn" json:"urn,omitempty"`
	// Indicates the status of node execution - including retries
	Status               []*NodeExecutionStatus `protobuf:"bytes,4,rep,name=status" json:"status,omitempty"`
	Spec                 *NodeExecutionSpec     `protobuf:"bytes,5,opt,name=spec" json:"spec,omitempty"`
	Result               *NodeExecutionResult   `protobuf:"bytes,6,opt,name=result" json:"result,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *NodeExecution) Reset()         { *m = NodeExecution{} }
func (m *NodeExecution) String() string { return proto.CompactTextString(m) }
func (*NodeExecution) ProtoMessage()    {}
func (*NodeExecution) Descriptor() ([]byte, []int) {
	return fileDescriptor_node_execution_c9333c577e128293, []int{2}
}
func (m *NodeExecution) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NodeExecution.Unmarshal(m, b)
}
func (m *NodeExecution) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NodeExecution.Marshal(b, m, deterministic)
}
func (dst *NodeExecution) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NodeExecution.Merge(dst, src)
}
func (m *NodeExecution) XXX_Size() int {
	return xxx_messageInfo_NodeExecution.Size(m)
}
func (m *NodeExecution) XXX_DiscardUnknown() {
	xxx_messageInfo_NodeExecution.DiscardUnknown(m)
}

var xxx_messageInfo_NodeExecution proto.InternalMessageInfo

func (m *NodeExecution) GetExecutionUrn() string {
	if m != nil {
		return m.ExecutionUrn
	}
	return ""
}

func (m *NodeExecution) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *NodeExecution) GetUrn() string {
	if m != nil {
		return m.Urn
	}
	return ""
}

func (m *NodeExecution) GetStatus() []*NodeExecutionStatus {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *NodeExecution) GetSpec() *NodeExecutionSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

func (m *NodeExecution) GetResult() *NodeExecutionResult {
	if m != nil {
		return m.Result
	}
	return nil
}

type NodeExecutionList struct {
	Executions           []*NodeExecution `protobuf:"bytes,1,rep,name=executions" json:"executions,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *NodeExecutionList) Reset()         { *m = NodeExecutionList{} }
func (m *NodeExecutionList) String() string { return proto.CompactTextString(m) }
func (*NodeExecutionList) ProtoMessage()    {}
func (*NodeExecutionList) Descriptor() ([]byte, []int) {
	return fileDescriptor_node_execution_c9333c577e128293, []int{3}
}
func (m *NodeExecutionList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NodeExecutionList.Unmarshal(m, b)
}
func (m *NodeExecutionList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NodeExecutionList.Marshal(b, m, deterministic)
}
func (dst *NodeExecutionList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NodeExecutionList.Merge(dst, src)
}
func (m *NodeExecutionList) XXX_Size() int {
	return xxx_messageInfo_NodeExecutionList.Size(m)
}
func (m *NodeExecutionList) XXX_DiscardUnknown() {
	xxx_messageInfo_NodeExecutionList.DiscardUnknown(m)
}

var xxx_messageInfo_NodeExecutionList proto.InternalMessageInfo

func (m *NodeExecutionList) GetExecutions() []*NodeExecution {
	if m != nil {
		return m.Executions
	}
	return nil
}

type NodeExecutionStatus struct {
	// Phase of the executions
	Phase ExecutionPhase `protobuf:"varint,1,opt,name=phase,enum=admin.ExecutionPhase" json:"phase,omitempty"`
	// Time taken for the node execution to complete
	Duration *duration.Duration `protobuf:"bytes,2,opt,name=duration" json:"duration,omitempty"`
	// Indicates if the node results were fetched from the cache
	DiscoveryHit bool `protobuf:"varint,3,opt,name=discovery_hit,json=discoveryHit" json:"discovery_hit,omitempty"`
	// Indicates the retry value for the Node Execution
	RetryAttempts uint32 `protobuf:"varint,4,opt,name=retry_attempts,json=retryAttempts" json:"retry_attempts,omitempty"`
	// Indicates if node has sub node executions
	IsSubTaskAvailable bool `protobuf:"varint,5,opt,name=is_sub_task_available,json=isSubTaskAvailable" json:"is_sub_task_available,omitempty"`
	// Indicates specific info for each type
	CustomTaskInfo       []byte   `protobuf:"bytes,6,opt,name=custom_task_info,json=customTaskInfo,proto3" json:"custom_task_info,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *NodeExecutionStatus) Reset()         { *m = NodeExecutionStatus{} }
func (m *NodeExecutionStatus) String() string { return proto.CompactTextString(m) }
func (*NodeExecutionStatus) ProtoMessage()    {}
func (*NodeExecutionStatus) Descriptor() ([]byte, []int) {
	return fileDescriptor_node_execution_c9333c577e128293, []int{4}
}
func (m *NodeExecutionStatus) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NodeExecutionStatus.Unmarshal(m, b)
}
func (m *NodeExecutionStatus) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NodeExecutionStatus.Marshal(b, m, deterministic)
}
func (dst *NodeExecutionStatus) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NodeExecutionStatus.Merge(dst, src)
}
func (m *NodeExecutionStatus) XXX_Size() int {
	return xxx_messageInfo_NodeExecutionStatus.Size(m)
}
func (m *NodeExecutionStatus) XXX_DiscardUnknown() {
	xxx_messageInfo_NodeExecutionStatus.DiscardUnknown(m)
}

var xxx_messageInfo_NodeExecutionStatus proto.InternalMessageInfo

func (m *NodeExecutionStatus) GetPhase() ExecutionPhase {
	if m != nil {
		return m.Phase
	}
	return ExecutionPhase_UNDEFINED
}

func (m *NodeExecutionStatus) GetDuration() *duration.Duration {
	if m != nil {
		return m.Duration
	}
	return nil
}

func (m *NodeExecutionStatus) GetDiscoveryHit() bool {
	if m != nil {
		return m.DiscoveryHit
	}
	return false
}

func (m *NodeExecutionStatus) GetRetryAttempts() uint32 {
	if m != nil {
		return m.RetryAttempts
	}
	return 0
}

func (m *NodeExecutionStatus) GetIsSubTaskAvailable() bool {
	if m != nil {
		return m.IsSubTaskAvailable
	}
	return false
}

func (m *NodeExecutionStatus) GetCustomTaskInfo() []byte {
	if m != nil {
		return m.CustomTaskInfo
	}
	return nil
}

// Encapsultes the results of the Execution
type NodeExecutionResult struct {
	// Types that are valid to be assigned to OutputResult:
	//	*NodeExecutionResult_Outputs
	//	*NodeExecutionResult_Error
	OutputResult         isNodeExecutionResult_OutputResult `protobuf_oneof:"output_result"`
	XXX_NoUnkeyedLiteral struct{}                           `json:"-"`
	XXX_unrecognized     []byte                             `json:"-"`
	XXX_sizecache        int32                              `json:"-"`
}

func (m *NodeExecutionResult) Reset()         { *m = NodeExecutionResult{} }
func (m *NodeExecutionResult) String() string { return proto.CompactTextString(m) }
func (*NodeExecutionResult) ProtoMessage()    {}
func (*NodeExecutionResult) Descriptor() ([]byte, []int) {
	return fileDescriptor_node_execution_c9333c577e128293, []int{5}
}
func (m *NodeExecutionResult) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NodeExecutionResult.Unmarshal(m, b)
}
func (m *NodeExecutionResult) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NodeExecutionResult.Marshal(b, m, deterministic)
}
func (dst *NodeExecutionResult) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NodeExecutionResult.Merge(dst, src)
}
func (m *NodeExecutionResult) XXX_Size() int {
	return xxx_messageInfo_NodeExecutionResult.Size(m)
}
func (m *NodeExecutionResult) XXX_DiscardUnknown() {
	xxx_messageInfo_NodeExecutionResult.DiscardUnknown(m)
}

var xxx_messageInfo_NodeExecutionResult proto.InternalMessageInfo

type isNodeExecutionResult_OutputResult interface {
	isNodeExecutionResult_OutputResult()
}

type NodeExecutionResult_Outputs struct {
	Outputs *core.NamedValueCollection `protobuf:"bytes,1,opt,name=outputs,oneof"`
}
type NodeExecutionResult_Error struct {
	Error *Error `protobuf:"bytes,2,opt,name=error,oneof"`
}

func (*NodeExecutionResult_Outputs) isNodeExecutionResult_OutputResult() {}
func (*NodeExecutionResult_Error) isNodeExecutionResult_OutputResult()   {}

func (m *NodeExecutionResult) GetOutputResult() isNodeExecutionResult_OutputResult {
	if m != nil {
		return m.OutputResult
	}
	return nil
}

func (m *NodeExecutionResult) GetOutputs() *core.NamedValueCollection {
	if x, ok := m.GetOutputResult().(*NodeExecutionResult_Outputs); ok {
		return x.Outputs
	}
	return nil
}

func (m *NodeExecutionResult) GetError() *Error {
	if x, ok := m.GetOutputResult().(*NodeExecutionResult_Error); ok {
		return x.Error
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*NodeExecutionResult) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _NodeExecutionResult_OneofMarshaler, _NodeExecutionResult_OneofUnmarshaler, _NodeExecutionResult_OneofSizer, []interface{}{
		(*NodeExecutionResult_Outputs)(nil),
		(*NodeExecutionResult_Error)(nil),
	}
}

func _NodeExecutionResult_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*NodeExecutionResult)
	// output_result
	switch x := m.OutputResult.(type) {
	case *NodeExecutionResult_Outputs:
		b.EncodeVarint(1<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Outputs); err != nil {
			return err
		}
	case *NodeExecutionResult_Error:
		b.EncodeVarint(2<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Error); err != nil {
			return err
		}
	case nil:
	default:
		return fmt.Errorf("NodeExecutionResult.OutputResult has unexpected type %T", x)
	}
	return nil
}

func _NodeExecutionResult_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*NodeExecutionResult)
	switch tag {
	case 1: // output_result.outputs
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(core.NamedValueCollection)
		err := b.DecodeMessage(msg)
		m.OutputResult = &NodeExecutionResult_Outputs{msg}
		return true, err
	case 2: // output_result.error
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(Error)
		err := b.DecodeMessage(msg)
		m.OutputResult = &NodeExecutionResult_Error{msg}
		return true, err
	default:
		return false, nil
	}
}

func _NodeExecutionResult_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*NodeExecutionResult)
	// output_result
	switch x := m.OutputResult.(type) {
	case *NodeExecutionResult_Outputs:
		s := proto.Size(x.Outputs)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case *NodeExecutionResult_Error:
		s := proto.Size(x.Error)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

type NodeExecutionSpec struct {
	// Spec of the task that was executed
	Node *core.Node `protobuf:"bytes,1,opt,name=node" json:"node,omitempty"`
	// Inputs that were passed to the task
	Inputs               *core.NamedValueCollection `protobuf:"bytes,2,opt,name=inputs" json:"inputs,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *NodeExecutionSpec) Reset()         { *m = NodeExecutionSpec{} }
func (m *NodeExecutionSpec) String() string { return proto.CompactTextString(m) }
func (*NodeExecutionSpec) ProtoMessage()    {}
func (*NodeExecutionSpec) Descriptor() ([]byte, []int) {
	return fileDescriptor_node_execution_c9333c577e128293, []int{6}
}
func (m *NodeExecutionSpec) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_NodeExecutionSpec.Unmarshal(m, b)
}
func (m *NodeExecutionSpec) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_NodeExecutionSpec.Marshal(b, m, deterministic)
}
func (dst *NodeExecutionSpec) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NodeExecutionSpec.Merge(dst, src)
}
func (m *NodeExecutionSpec) XXX_Size() int {
	return xxx_messageInfo_NodeExecutionSpec.Size(m)
}
func (m *NodeExecutionSpec) XXX_DiscardUnknown() {
	xxx_messageInfo_NodeExecutionSpec.DiscardUnknown(m)
}

var xxx_messageInfo_NodeExecutionSpec proto.InternalMessageInfo

func (m *NodeExecutionSpec) GetNode() *core.Node {
	if m != nil {
		return m.Node
	}
	return nil
}

func (m *NodeExecutionSpec) GetInputs() *core.NamedValueCollection {
	if m != nil {
		return m.Inputs
	}
	return nil
}

func init() {
	proto.RegisterType((*NodeExecutionEventRequest)(nil), "admin.NodeExecutionEventRequest")
	proto.RegisterType((*NodeExecutionEventResponse)(nil), "admin.NodeExecutionEventResponse")
	proto.RegisterType((*NodeExecution)(nil), "admin.NodeExecution")
	proto.RegisterType((*NodeExecutionList)(nil), "admin.NodeExecutionList")
	proto.RegisterType((*NodeExecutionStatus)(nil), "admin.NodeExecutionStatus")
	proto.RegisterType((*NodeExecutionResult)(nil), "admin.NodeExecutionResult")
	proto.RegisterType((*NodeExecutionSpec)(nil), "admin.NodeExecutionSpec")
}

func init() {
	proto.RegisterFile("admin/node_execution.proto", fileDescriptor_node_execution_c9333c577e128293)
}

var fileDescriptor_node_execution_c9333c577e128293 = []byte{
	// 590 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xcc, 0x54, 0xcd, 0x6a, 0xdb, 0x4c,
	0x14, 0x8d, 0xfc, 0x93, 0xe4, 0x9b, 0xd8, 0xfe, 0x92, 0x49, 0x02, 0x8a, 0x17, 0xc1, 0xb8, 0x2d,
	0x18, 0x5a, 0x64, 0xea, 0xfe, 0xec, 0x93, 0x36, 0xe0, 0x40, 0x09, 0x65, 0xd2, 0x76, 0xd1, 0x8d,
	0x18, 0x4b, 0xd7, 0xce, 0x60, 0x69, 0x46, 0x9d, 0x1f, 0xa7, 0xd9, 0xe7, 0x49, 0xfa, 0x84, 0x7d,
	0x84, 0x32, 0xa3, 0x91, 0x52, 0x07, 0x43, 0xa1, 0xab, 0xee, 0xa4, 0x73, 0xcf, 0xbd, 0x73, 0xe6,
	0x1c, 0x5d, 0xa1, 0x3e, 0x4d, 0x73, 0xc6, 0xc7, 0x5c, 0xa4, 0x10, 0xc3, 0x77, 0x48, 0x8c, 0x66,
	0x82, 0x47, 0x85, 0x14, 0x5a, 0xe0, 0xb6, 0xab, 0xf5, 0x4f, 0x17, 0x42, 0x2c, 0x32, 0x18, 0x3b,
	0x70, 0x66, 0xe6, 0xe3, 0xd4, 0x48, 0xfa, 0x40, 0xeb, 0x1f, 0x25, 0x42, 0xc2, 0x98, 0x71, 0x0d,
	0x72, 0x4e, 0x13, 0xf0, 0xe8, 0xa1, 0x43, 0x6f, 0x85, 0x5c, 0xce, 0x33, 0x71, 0xeb, 0x41, 0x5c,
	0x9e, 0x96, 0x88, 0x3c, 0xaf, 0xdb, 0x0f, 0x4a, 0x0c, 0xa4, 0x14, 0xb2, 0x84, 0x86, 0xf7, 0x0d,
	0x74, 0x72, 0x25, 0x52, 0xb8, 0xa8, 0x04, 0x5d, 0xac, 0x80, 0x6b, 0x02, 0xdf, 0x0c, 0x28, 0x8d,
	0x9f, 0xa0, 0x6e, 0xad, 0x34, 0x36, 0x92, 0x87, 0xc1, 0x20, 0x18, 0xfd, 0x47, 0x3a, 0x35, 0xf8,
	0x59, 0x72, 0x8c, 0x51, 0x8b, 0xd3, 0x1c, 0xc2, 0x86, 0xab, 0xb9, 0x67, 0x1c, 0xa2, 0x9d, 0x15,
	0x48, 0xc5, 0x04, 0x0f, 0x9b, 0x0e, 0xae, 0x5e, 0xf1, 0x04, 0x6d, 0x2b, 0x4d, 0xb5, 0x51, 0x61,
	0x6b, 0xd0, 0x1c, 0xed, 0x4d, 0xfa, 0x91, 0x13, 0x15, 0xad, 0x89, 0xb8, 0x76, 0x0c, 0xe2, 0x99,
	0xf8, 0x05, 0x6a, 0xa9, 0x02, 0x92, 0xb0, 0x3d, 0x08, 0x46, 0x7b, 0x93, 0x70, 0x63, 0x47, 0x01,
	0x09, 0x71, 0x2c, 0x7b, 0x82, 0x04, 0x65, 0x32, 0x1d, 0x6e, 0x3b, 0xfe, 0xc6, 0x13, 0x88, 0x63,
	0x10, 0xcf, 0x1c, 0x46, 0xa8, 0xbf, 0xc9, 0x05, 0x55, 0x08, 0xae, 0x00, 0xef, 0xa3, 0xe6, 0xc3,
	0xe5, 0xed, 0xe3, 0xf0, 0x67, 0x80, 0xba, 0x6b, 0x0d, 0x7f, 0x6f, 0x95, 0x1f, 0xde, 0xac, 0x87,
	0xff, 0xa3, 0x16, 0x5d, 0xa2, 0x83, 0xb5, 0xf2, 0x07, 0xa6, 0x34, 0x7e, 0x8d, 0x50, 0x7d, 0x41,
	0x15, 0x06, 0x4e, 0xee, 0xd1, 0xc6, 0x61, 0xbf, 0xf1, 0x86, 0x3f, 0x1a, 0xe8, 0x70, 0xc3, 0x65,
	0xf0, 0x73, 0xd4, 0x2e, 0x6e, 0xa8, 0x02, 0xe7, 0x5d, 0x6f, 0x72, 0xec, 0x07, 0xd5, 0xb4, 0x8f,
	0xb6, 0x48, 0x4a, 0x0e, 0x7e, 0x83, 0x76, 0xab, 0xed, 0x70, 0x7e, 0xee, 0x4d, 0x4e, 0xa2, 0x72,
	0x7d, 0xa2, 0x6a, 0x7d, 0xa2, 0xf7, 0x9e, 0x40, 0x6a, 0xaa, 0xcd, 0x29, 0x65, 0x2a, 0x11, 0x2b,
	0x90, 0x77, 0xf1, 0x0d, 0xd3, 0xce, 0xf8, 0x5d, 0xd2, 0xa9, 0xc1, 0x29, 0xd3, 0xf8, 0x19, 0xea,
	0x49, 0xd0, 0xf2, 0x2e, 0xa6, 0x5a, 0x43, 0x5e, 0x68, 0x9b, 0x44, 0x30, 0xea, 0x92, 0xae, 0x43,
	0xcf, 0x3c, 0x88, 0x5f, 0xa2, 0x63, 0xa6, 0x62, 0x65, 0x66, 0xb1, 0xa6, 0x6a, 0x19, 0xd3, 0x15,
	0x65, 0x19, 0x9d, 0x65, 0xe0, 0x52, 0xd8, 0x25, 0x98, 0xa9, 0x6b, 0x33, 0xfb, 0x44, 0xd5, 0xf2,
	0xac, 0xaa, 0xe0, 0x11, 0xda, 0x4f, 0x8c, 0xd2, 0x22, 0x2f, 0x5b, 0x18, 0x9f, 0x0b, 0x97, 0x41,
	0x87, 0xf4, 0x4a, 0xdc, 0xd2, 0x2f, 0xf9, 0x5c, 0x0c, 0xef, 0x83, 0x47, 0x26, 0x95, 0x79, 0xe0,
	0xb7, 0x68, 0x47, 0x18, 0x5d, 0x18, 0xad, 0x9c, 0x4d, 0x36, 0x3c, 0xbb, 0xff, 0xd1, 0x15, 0xcd,
	0x21, 0xfd, 0x42, 0x33, 0x03, 0xef, 0x44, 0x96, 0x41, 0x62, 0x5b, 0xa6, 0x5b, 0xa4, 0x22, 0xe3,
	0xa7, 0xa8, 0xed, 0x16, 0xdf, 0x9b, 0xd5, 0xa9, 0xcc, 0xb5, 0xd8, 0x74, 0x8b, 0x94, 0xc5, 0xf3,
	0xff, 0x51, 0xb7, 0x6c, 0x88, 0x7d, 0xec, 0x8b, 0x47, 0xb1, 0xdb, 0xaf, 0x08, 0x9f, 0xa2, 0x96,
	0xfd, 0x8d, 0x79, 0x01, 0xc8, 0x0b, 0x10, 0x29, 0x10, 0x87, 0xdb, 0xef, 0x8b, 0x71, 0x27, 0xb1,
	0xf1, 0x27, 0x89, 0xc4, 0x33, 0xcf, 0x77, 0xbe, 0x96, 0x3f, 0xc1, 0xd9, 0xb6, 0x8b, 0xef, 0xd5,
	0xaf, 0x00, 0x00, 0x00, 0xff, 0xff, 0x28, 0x2e, 0x71, 0xae, 0x30, 0x05, 0x00, 0x00,
}

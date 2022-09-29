// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/admin/workflow.proto

package admin

import (
	fmt "fmt"
	core "github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/core"
	proto "github.com/golang/protobuf/proto"
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
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

// Represents a request structure to create a revision of a workflow.
// See :ref:`ref_flyteidl.admin.Workflow` for more details
type WorkflowCreateRequest struct {
	// id represents the unique identifier of the workflow.
	// +required
	Id *core.Identifier `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Represents the specification for workflow.
	// +required
	Spec                 *WorkflowSpec `protobuf:"bytes,2,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *WorkflowCreateRequest) Reset()         { *m = WorkflowCreateRequest{} }
func (m *WorkflowCreateRequest) String() string { return proto.CompactTextString(m) }
func (*WorkflowCreateRequest) ProtoMessage()    {}
func (*WorkflowCreateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_827ade3f2372dc85, []int{0}
}

func (m *WorkflowCreateRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_WorkflowCreateRequest.Unmarshal(m, b)
}
func (m *WorkflowCreateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_WorkflowCreateRequest.Marshal(b, m, deterministic)
}
func (m *WorkflowCreateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WorkflowCreateRequest.Merge(m, src)
}
func (m *WorkflowCreateRequest) XXX_Size() int {
	return xxx_messageInfo_WorkflowCreateRequest.Size(m)
}
func (m *WorkflowCreateRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_WorkflowCreateRequest.DiscardUnknown(m)
}

var xxx_messageInfo_WorkflowCreateRequest proto.InternalMessageInfo

func (m *WorkflowCreateRequest) GetId() *core.Identifier {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *WorkflowCreateRequest) GetSpec() *WorkflowSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type WorkflowCreateResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *WorkflowCreateResponse) Reset()         { *m = WorkflowCreateResponse{} }
func (m *WorkflowCreateResponse) String() string { return proto.CompactTextString(m) }
func (*WorkflowCreateResponse) ProtoMessage()    {}
func (*WorkflowCreateResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_827ade3f2372dc85, []int{1}
}

func (m *WorkflowCreateResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_WorkflowCreateResponse.Unmarshal(m, b)
}
func (m *WorkflowCreateResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_WorkflowCreateResponse.Marshal(b, m, deterministic)
}
func (m *WorkflowCreateResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WorkflowCreateResponse.Merge(m, src)
}
func (m *WorkflowCreateResponse) XXX_Size() int {
	return xxx_messageInfo_WorkflowCreateResponse.Size(m)
}
func (m *WorkflowCreateResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_WorkflowCreateResponse.DiscardUnknown(m)
}

var xxx_messageInfo_WorkflowCreateResponse proto.InternalMessageInfo

// Represents the workflow structure stored in the Admin
// A workflow is created by ordering tasks and associating outputs to inputs
// in order to produce a directed-acyclic execution graph.
type Workflow struct {
	// id represents the unique identifier of the workflow.
	Id *core.Identifier `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// closure encapsulates all the fields that maps to a compiled version of the workflow.
	Closure              *WorkflowClosure `protobuf:"bytes,2,opt,name=closure,proto3" json:"closure,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *Workflow) Reset()         { *m = Workflow{} }
func (m *Workflow) String() string { return proto.CompactTextString(m) }
func (*Workflow) ProtoMessage()    {}
func (*Workflow) Descriptor() ([]byte, []int) {
	return fileDescriptor_827ade3f2372dc85, []int{2}
}

func (m *Workflow) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Workflow.Unmarshal(m, b)
}
func (m *Workflow) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Workflow.Marshal(b, m, deterministic)
}
func (m *Workflow) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Workflow.Merge(m, src)
}
func (m *Workflow) XXX_Size() int {
	return xxx_messageInfo_Workflow.Size(m)
}
func (m *Workflow) XXX_DiscardUnknown() {
	xxx_messageInfo_Workflow.DiscardUnknown(m)
}

var xxx_messageInfo_Workflow proto.InternalMessageInfo

func (m *Workflow) GetId() *core.Identifier {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *Workflow) GetClosure() *WorkflowClosure {
	if m != nil {
		return m.Closure
	}
	return nil
}

// Represents a list of workflows returned from the admin.
// See :ref:`ref_flyteidl.admin.Workflow` for more details
type WorkflowList struct {
	// A list of workflows returned based on the request.
	Workflows []*Workflow `protobuf:"bytes,1,rep,name=workflows,proto3" json:"workflows,omitempty"`
	// In the case of multiple pages of results, the server-provided token can be used to fetch the next page
	// in a query. If there are no more results, this value will be empty.
	Token                string   `protobuf:"bytes,2,opt,name=token,proto3" json:"token,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *WorkflowList) Reset()         { *m = WorkflowList{} }
func (m *WorkflowList) String() string { return proto.CompactTextString(m) }
func (*WorkflowList) ProtoMessage()    {}
func (*WorkflowList) Descriptor() ([]byte, []int) {
	return fileDescriptor_827ade3f2372dc85, []int{3}
}

func (m *WorkflowList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_WorkflowList.Unmarshal(m, b)
}
func (m *WorkflowList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_WorkflowList.Marshal(b, m, deterministic)
}
func (m *WorkflowList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WorkflowList.Merge(m, src)
}
func (m *WorkflowList) XXX_Size() int {
	return xxx_messageInfo_WorkflowList.Size(m)
}
func (m *WorkflowList) XXX_DiscardUnknown() {
	xxx_messageInfo_WorkflowList.DiscardUnknown(m)
}

var xxx_messageInfo_WorkflowList proto.InternalMessageInfo

func (m *WorkflowList) GetWorkflows() []*Workflow {
	if m != nil {
		return m.Workflows
	}
	return nil
}

func (m *WorkflowList) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

// Represents a structure that encapsulates the specification of the workflow.
type WorkflowSpec struct {
	// Template of the task that encapsulates all the metadata of the workflow.
	Template *core.WorkflowTemplate `protobuf:"bytes,1,opt,name=template,proto3" json:"template,omitempty"`
	// Workflows that are embedded into other workflows need to be passed alongside the parent workflow to the
	// propeller compiler (since the compiler doesn't have any knowledge of other workflows - ie, it doesn't reach out
	// to Admin to see other registered workflows).  In fact, subworkflows do not even need to be registered.
	SubWorkflows []*core.WorkflowTemplate `protobuf:"bytes,2,rep,name=sub_workflows,json=subWorkflows,proto3" json:"sub_workflows,omitempty"`
	// User-specified tags. These are arbitrary and can be used for searching
	// filtering and discovering workflows.
	Tags                 []string `protobuf:"bytes,3,rep,name=tags,proto3" json:"tags,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *WorkflowSpec) Reset()         { *m = WorkflowSpec{} }
func (m *WorkflowSpec) String() string { return proto.CompactTextString(m) }
func (*WorkflowSpec) ProtoMessage()    {}
func (*WorkflowSpec) Descriptor() ([]byte, []int) {
	return fileDescriptor_827ade3f2372dc85, []int{4}
}

func (m *WorkflowSpec) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_WorkflowSpec.Unmarshal(m, b)
}
func (m *WorkflowSpec) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_WorkflowSpec.Marshal(b, m, deterministic)
}
func (m *WorkflowSpec) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WorkflowSpec.Merge(m, src)
}
func (m *WorkflowSpec) XXX_Size() int {
	return xxx_messageInfo_WorkflowSpec.Size(m)
}
func (m *WorkflowSpec) XXX_DiscardUnknown() {
	xxx_messageInfo_WorkflowSpec.DiscardUnknown(m)
}

var xxx_messageInfo_WorkflowSpec proto.InternalMessageInfo

func (m *WorkflowSpec) GetTemplate() *core.WorkflowTemplate {
	if m != nil {
		return m.Template
	}
	return nil
}

func (m *WorkflowSpec) GetSubWorkflows() []*core.WorkflowTemplate {
	if m != nil {
		return m.SubWorkflows
	}
	return nil
}

func (m *WorkflowSpec) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

// A container holding the compiled workflow produced from the WorkflowSpec and additional metadata.
type WorkflowClosure struct {
	// Represents the compiled representation of the workflow from the specification provided.
	CompiledWorkflow *core.CompiledWorkflowClosure `protobuf:"bytes,1,opt,name=compiled_workflow,json=compiledWorkflow,proto3" json:"compiled_workflow,omitempty"`
	// Time at which the workflow was created.
	CreatedAt            *timestamp.Timestamp `protobuf:"bytes,2,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *WorkflowClosure) Reset()         { *m = WorkflowClosure{} }
func (m *WorkflowClosure) String() string { return proto.CompactTextString(m) }
func (*WorkflowClosure) ProtoMessage()    {}
func (*WorkflowClosure) Descriptor() ([]byte, []int) {
	return fileDescriptor_827ade3f2372dc85, []int{5}
}

func (m *WorkflowClosure) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_WorkflowClosure.Unmarshal(m, b)
}
func (m *WorkflowClosure) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_WorkflowClosure.Marshal(b, m, deterministic)
}
func (m *WorkflowClosure) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WorkflowClosure.Merge(m, src)
}
func (m *WorkflowClosure) XXX_Size() int {
	return xxx_messageInfo_WorkflowClosure.Size(m)
}
func (m *WorkflowClosure) XXX_DiscardUnknown() {
	xxx_messageInfo_WorkflowClosure.DiscardUnknown(m)
}

var xxx_messageInfo_WorkflowClosure proto.InternalMessageInfo

func (m *WorkflowClosure) GetCompiledWorkflow() *core.CompiledWorkflowClosure {
	if m != nil {
		return m.CompiledWorkflow
	}
	return nil
}

func (m *WorkflowClosure) GetCreatedAt() *timestamp.Timestamp {
	if m != nil {
		return m.CreatedAt
	}
	return nil
}

func init() {
	proto.RegisterType((*WorkflowCreateRequest)(nil), "flyteidl.admin.WorkflowCreateRequest")
	proto.RegisterType((*WorkflowCreateResponse)(nil), "flyteidl.admin.WorkflowCreateResponse")
	proto.RegisterType((*Workflow)(nil), "flyteidl.admin.Workflow")
	proto.RegisterType((*WorkflowList)(nil), "flyteidl.admin.WorkflowList")
	proto.RegisterType((*WorkflowSpec)(nil), "flyteidl.admin.WorkflowSpec")
	proto.RegisterType((*WorkflowClosure)(nil), "flyteidl.admin.WorkflowClosure")
}

func init() { proto.RegisterFile("flyteidl/admin/workflow.proto", fileDescriptor_827ade3f2372dc85) }

var fileDescriptor_827ade3f2372dc85 = []byte{
	// 435 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x93, 0xdf, 0x6b, 0x14, 0x31,
	0x10, 0xc7, 0xd9, 0xbb, 0xaa, 0xbd, 0x69, 0xfd, 0x15, 0x54, 0xd6, 0xa3, 0x7a, 0xc7, 0x3e, 0xc8,
	0xf9, 0x60, 0x22, 0x15, 0x95, 0xe2, 0x93, 0x9e, 0x2f, 0x82, 0x4f, 0x69, 0xa1, 0x20, 0x42, 0xd9,
	0x1f, 0x73, 0x6b, 0xe8, 0xee, 0x26, 0x6e, 0x66, 0x29, 0xfe, 0x39, 0x3e, 0xf8, 0x7f, 0x4a, 0xb3,
	0xc9, 0x1e, 0xb7, 0x50, 0xc4, 0xb7, 0x84, 0xef, 0x67, 0x66, 0xbe, 0x33, 0x99, 0xc0, 0xb3, 0x4d,
	0xf5, 0x8b, 0x50, 0x15, 0x95, 0x48, 0x8b, 0x5a, 0x35, 0xe2, 0x4a, 0xb7, 0x97, 0x9b, 0x4a, 0x5f,
	0x71, 0xd3, 0x6a, 0xd2, 0xec, 0x5e, 0x90, 0xb9, 0x93, 0xe7, 0x47, 0x03, 0x9e, 0xeb, 0x16, 0x45,
	0xae, 0x6b, 0xa3, 0x2a, 0x6c, 0x7b, 0x7a, 0xfe, 0x7c, 0x57, 0x55, 0x05, 0x36, 0xa4, 0x36, 0x6a,
	0xd0, 0x47, 0xd1, 0xbb, 0xb5, 0xe6, 0x8b, 0x52, 0xeb, 0xb2, 0x42, 0xe1, 0x6e, 0x59, 0xb7, 0x11,
	0xa4, 0x6a, 0xb4, 0x94, 0xd6, 0xa6, 0x07, 0x12, 0x82, 0xc7, 0xe7, 0x3e, 0x64, 0xdd, 0x62, 0x4a,
	0x28, 0xf1, 0x67, 0x87, 0x96, 0xd8, 0x4b, 0x98, 0xa8, 0x22, 0x8e, 0x96, 0xd1, 0xea, 0xe0, 0xf8,
	0x29, 0x1f, 0x2c, 0x5f, 0x17, 0xe1, 0x5f, 0x06, 0x13, 0x72, 0xa2, 0x0a, 0xf6, 0x1a, 0xf6, 0xac,
	0xc1, 0x3c, 0x9e, 0x38, 0xf8, 0x88, 0xef, 0xf6, 0xc7, 0x43, 0xfe, 0x53, 0x83, 0xb9, 0x74, 0x64,
	0x12, 0xc3, 0x93, 0x71, 0x55, 0x6b, 0x74, 0x63, 0x31, 0x31, 0xb0, 0x1f, 0x94, 0xff, 0xb1, 0x70,
	0x02, 0x77, 0xf2, 0x4a, 0xdb, 0xae, 0x45, 0xef, 0x62, 0x71, 0x93, 0x8b, 0x75, 0x8f, 0xc9, 0xc0,
	0x27, 0xdf, 0xe1, 0x30, 0x68, 0x5f, 0x95, 0x25, 0xf6, 0x0e, 0x66, 0x61, 0x88, 0x36, 0x8e, 0x96,
	0xd3, 0xd5, 0xc1, 0x71, 0x7c, 0x53, 0x32, 0xb9, 0x45, 0xd9, 0x23, 0xb8, 0x45, 0xfa, 0x12, 0x1b,
	0x67, 0x60, 0x26, 0xfb, 0x4b, 0xf2, 0x27, 0xda, 0xa6, 0xbf, 0x1e, 0x00, 0xfb, 0x00, 0xfb, 0x84,
	0xb5, 0xa9, 0x52, 0x42, 0xdf, 0xda, 0x62, 0xd4, 0x5a, 0xc0, 0xcf, 0x3c, 0x26, 0x87, 0x00, 0xf6,
	0x19, 0xee, 0xda, 0x2e, 0xbb, 0xd8, 0xfa, 0x9b, 0x38, 0x7f, 0xff, 0xcc, 0x70, 0x68, 0xbb, 0xec,
	0x7c, 0x70, 0xca, 0x60, 0x8f, 0xd2, 0xd2, 0xc6, 0xd3, 0xe5, 0x74, 0x35, 0x93, 0xee, 0x9c, 0xfc,
	0x8e, 0xe0, 0xfe, 0x68, 0x44, 0xec, 0x14, 0x1e, 0xfa, 0x65, 0x2c, 0x86, 0x92, 0xde, 0xf3, 0x8b,
	0x51, 0xc5, 0xb5, 0xe7, 0xc6, 0x53, 0x7e, 0x90, 0x8f, 0x04, 0x76, 0x02, 0x90, 0xbb, 0x27, 0x2f,
	0x2e, 0x52, 0xf2, 0x8f, 0x35, 0xe7, 0xfd, 0x9a, 0xf2, 0xb0, 0xa6, 0xfc, 0x2c, 0xac, 0xa9, 0x9c,
	0x79, 0xfa, 0x23, 0x7d, 0x7a, 0xff, 0xed, 0x6d, 0xa9, 0xe8, 0x47, 0x97, 0xf1, 0x5c, 0xd7, 0xc2,
	0x19, 0xd0, 0x6d, 0x29, 0x86, 0x0f, 0x50, 0x62, 0x23, 0x4c, 0xf6, 0xaa, 0xd4, 0x62, 0xf7, 0x03,
	0x66, 0xb7, 0x5d, 0xde, 0x37, 0x7f, 0x03, 0x00, 0x00, 0xff, 0xff, 0x35, 0x35, 0xf2, 0xb0, 0x99,
	0x03, 0x00, 0x00,
}

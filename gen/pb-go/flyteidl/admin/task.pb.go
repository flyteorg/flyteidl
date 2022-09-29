// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/admin/task.proto

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

// Represents a request structure to create a revision of a task.
// See :ref:`ref_flyteidl.admin.Task` for more details
type TaskCreateRequest struct {
	// id represents the unique identifier of the task.
	// +required
	Id *core.Identifier `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Represents the specification for task.
	// +required
	Spec                 *TaskSpec `protobuf:"bytes,2,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}  `json:"-"`
	XXX_unrecognized     []byte    `json:"-"`
	XXX_sizecache        int32     `json:"-"`
}

func (m *TaskCreateRequest) Reset()         { *m = TaskCreateRequest{} }
func (m *TaskCreateRequest) String() string { return proto.CompactTextString(m) }
func (*TaskCreateRequest) ProtoMessage()    {}
func (*TaskCreateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_9204120d588b2162, []int{0}
}

func (m *TaskCreateRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TaskCreateRequest.Unmarshal(m, b)
}
func (m *TaskCreateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TaskCreateRequest.Marshal(b, m, deterministic)
}
func (m *TaskCreateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TaskCreateRequest.Merge(m, src)
}
func (m *TaskCreateRequest) XXX_Size() int {
	return xxx_messageInfo_TaskCreateRequest.Size(m)
}
func (m *TaskCreateRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_TaskCreateRequest.DiscardUnknown(m)
}

var xxx_messageInfo_TaskCreateRequest proto.InternalMessageInfo

func (m *TaskCreateRequest) GetId() *core.Identifier {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *TaskCreateRequest) GetSpec() *TaskSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

// Represents a response structure if task creation succeeds.
type TaskCreateResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TaskCreateResponse) Reset()         { *m = TaskCreateResponse{} }
func (m *TaskCreateResponse) String() string { return proto.CompactTextString(m) }
func (*TaskCreateResponse) ProtoMessage()    {}
func (*TaskCreateResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_9204120d588b2162, []int{1}
}

func (m *TaskCreateResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TaskCreateResponse.Unmarshal(m, b)
}
func (m *TaskCreateResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TaskCreateResponse.Marshal(b, m, deterministic)
}
func (m *TaskCreateResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TaskCreateResponse.Merge(m, src)
}
func (m *TaskCreateResponse) XXX_Size() int {
	return xxx_messageInfo_TaskCreateResponse.Size(m)
}
func (m *TaskCreateResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_TaskCreateResponse.DiscardUnknown(m)
}

var xxx_messageInfo_TaskCreateResponse proto.InternalMessageInfo

// Flyte workflows are composed of many ordered tasks. That is small, reusable, self-contained logical blocks
// arranged to process workflow inputs and produce a deterministic set of outputs.
// Tasks can come in many varieties tuned for specialized behavior.
type Task struct {
	// id represents the unique identifier of the task.
	Id *core.Identifier `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// closure encapsulates all the fields that maps to a compiled version of the task.
	Closure              *TaskClosure `protobuf:"bytes,2,opt,name=closure,proto3" json:"closure,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *Task) Reset()         { *m = Task{} }
func (m *Task) String() string { return proto.CompactTextString(m) }
func (*Task) ProtoMessage()    {}
func (*Task) Descriptor() ([]byte, []int) {
	return fileDescriptor_9204120d588b2162, []int{2}
}

func (m *Task) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Task.Unmarshal(m, b)
}
func (m *Task) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Task.Marshal(b, m, deterministic)
}
func (m *Task) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Task.Merge(m, src)
}
func (m *Task) XXX_Size() int {
	return xxx_messageInfo_Task.Size(m)
}
func (m *Task) XXX_DiscardUnknown() {
	xxx_messageInfo_Task.DiscardUnknown(m)
}

var xxx_messageInfo_Task proto.InternalMessageInfo

func (m *Task) GetId() *core.Identifier {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *Task) GetClosure() *TaskClosure {
	if m != nil {
		return m.Closure
	}
	return nil
}

// Represents a list of tasks returned from the admin.
// See :ref:`ref_flyteidl.admin.Task` for more details
type TaskList struct {
	// A list of tasks returned based on the request.
	Tasks []*Task `protobuf:"bytes,1,rep,name=tasks,proto3" json:"tasks,omitempty"`
	// In the case of multiple pages of results, the server-provided token can be used to fetch the next page
	// in a query. If there are no more results, this value will be empty.
	Token                string   `protobuf:"bytes,2,opt,name=token,proto3" json:"token,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TaskList) Reset()         { *m = TaskList{} }
func (m *TaskList) String() string { return proto.CompactTextString(m) }
func (*TaskList) ProtoMessage()    {}
func (*TaskList) Descriptor() ([]byte, []int) {
	return fileDescriptor_9204120d588b2162, []int{3}
}

func (m *TaskList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TaskList.Unmarshal(m, b)
}
func (m *TaskList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TaskList.Marshal(b, m, deterministic)
}
func (m *TaskList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TaskList.Merge(m, src)
}
func (m *TaskList) XXX_Size() int {
	return xxx_messageInfo_TaskList.Size(m)
}
func (m *TaskList) XXX_DiscardUnknown() {
	xxx_messageInfo_TaskList.DiscardUnknown(m)
}

var xxx_messageInfo_TaskList proto.InternalMessageInfo

func (m *TaskList) GetTasks() []*Task {
	if m != nil {
		return m.Tasks
	}
	return nil
}

func (m *TaskList) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

// Represents a structure that encapsulates the user-configured specification of the task.
type TaskSpec struct {
	// Template of the task that encapsulates all the metadata of the task.
	Template *core.TaskTemplate `protobuf:"bytes,1,opt,name=template,proto3" json:"template,omitempty"`
	// User-specified tags. These are arbitrary and can be used for searching
	// filtering and discovering tasks.
	Tags                 []string `protobuf:"bytes,2,rep,name=tags,proto3" json:"tags,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TaskSpec) Reset()         { *m = TaskSpec{} }
func (m *TaskSpec) String() string { return proto.CompactTextString(m) }
func (*TaskSpec) ProtoMessage()    {}
func (*TaskSpec) Descriptor() ([]byte, []int) {
	return fileDescriptor_9204120d588b2162, []int{4}
}

func (m *TaskSpec) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TaskSpec.Unmarshal(m, b)
}
func (m *TaskSpec) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TaskSpec.Marshal(b, m, deterministic)
}
func (m *TaskSpec) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TaskSpec.Merge(m, src)
}
func (m *TaskSpec) XXX_Size() int {
	return xxx_messageInfo_TaskSpec.Size(m)
}
func (m *TaskSpec) XXX_DiscardUnknown() {
	xxx_messageInfo_TaskSpec.DiscardUnknown(m)
}

var xxx_messageInfo_TaskSpec proto.InternalMessageInfo

func (m *TaskSpec) GetTemplate() *core.TaskTemplate {
	if m != nil {
		return m.Template
	}
	return nil
}

func (m *TaskSpec) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

// Compute task attributes which include values derived from the TaskSpec, as well as plugin-specific data
// and task metadata.
type TaskClosure struct {
	// Represents the compiled representation of the task from the specification provided.
	CompiledTask *core.CompiledTask `protobuf:"bytes,1,opt,name=compiled_task,json=compiledTask,proto3" json:"compiled_task,omitempty"`
	// Time at which the task was created.
	CreatedAt            *timestamp.Timestamp `protobuf:"bytes,2,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *TaskClosure) Reset()         { *m = TaskClosure{} }
func (m *TaskClosure) String() string { return proto.CompactTextString(m) }
func (*TaskClosure) ProtoMessage()    {}
func (*TaskClosure) Descriptor() ([]byte, []int) {
	return fileDescriptor_9204120d588b2162, []int{5}
}

func (m *TaskClosure) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TaskClosure.Unmarshal(m, b)
}
func (m *TaskClosure) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TaskClosure.Marshal(b, m, deterministic)
}
func (m *TaskClosure) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TaskClosure.Merge(m, src)
}
func (m *TaskClosure) XXX_Size() int {
	return xxx_messageInfo_TaskClosure.Size(m)
}
func (m *TaskClosure) XXX_DiscardUnknown() {
	xxx_messageInfo_TaskClosure.DiscardUnknown(m)
}

var xxx_messageInfo_TaskClosure proto.InternalMessageInfo

func (m *TaskClosure) GetCompiledTask() *core.CompiledTask {
	if m != nil {
		return m.CompiledTask
	}
	return nil
}

func (m *TaskClosure) GetCreatedAt() *timestamp.Timestamp {
	if m != nil {
		return m.CreatedAt
	}
	return nil
}

func init() {
	proto.RegisterType((*TaskCreateRequest)(nil), "flyteidl.admin.TaskCreateRequest")
	proto.RegisterType((*TaskCreateResponse)(nil), "flyteidl.admin.TaskCreateResponse")
	proto.RegisterType((*Task)(nil), "flyteidl.admin.Task")
	proto.RegisterType((*TaskList)(nil), "flyteidl.admin.TaskList")
	proto.RegisterType((*TaskSpec)(nil), "flyteidl.admin.TaskSpec")
	proto.RegisterType((*TaskClosure)(nil), "flyteidl.admin.TaskClosure")
}

func init() { proto.RegisterFile("flyteidl/admin/task.proto", fileDescriptor_9204120d588b2162) }

var fileDescriptor_9204120d588b2162 = []byte{
	// 406 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x92, 0x41, 0x6f, 0x13, 0x31,
	0x10, 0x85, 0x95, 0x34, 0x85, 0x66, 0x02, 0x48, 0x58, 0x39, 0x6c, 0x52, 0x04, 0xd1, 0x9e, 0x02,
	0x02, 0x5b, 0x2a, 0xaa, 0x2a, 0x6e, 0x40, 0x4e, 0x48, 0x3d, 0x99, 0x48, 0x48, 0x5c, 0x2a, 0xc7,
	0x3b, 0xd9, 0x5a, 0xd9, 0x5d, 0x9b, 0xf5, 0xe4, 0xc0, 0x5f, 0xe0, 0x57, 0x23, 0x7b, 0x9d, 0x55,
	0x82, 0xca, 0xa1, 0xb7, 0x8c, 0xe7, 0xcb, 0xbc, 0x37, 0xb3, 0x0f, 0x66, 0xdb, 0xea, 0x37, 0xa1,
	0x29, 0x2a, 0xa1, 0x8a, 0xda, 0x34, 0x82, 0x94, 0xdf, 0x71, 0xd7, 0x5a, 0xb2, 0xec, 0xc5, 0xa1,
	0xc5, 0x63, 0x6b, 0xfe, 0xba, 0x47, 0xb5, 0x6d, 0x51, 0x98, 0x02, 0x1b, 0x32, 0x5b, 0x83, 0x6d,
	0xc7, 0xcf, 0x67, 0xa7, 0xfd, 0x30, 0xc9, 0xa7, 0xd6, 0xab, 0xd3, 0x96, 0xb6, 0xb5, 0x33, 0x55,
	0xff, 0xc7, 0x37, 0xa5, 0xb5, 0x65, 0x85, 0x22, 0x56, 0x9b, 0xfd, 0x56, 0x90, 0xa9, 0xd1, 0x93,
	0xaa, 0x5d, 0x07, 0xe4, 0x15, 0xbc, 0x5c, 0x2b, 0xbf, 0x5b, 0xb5, 0xa8, 0x08, 0x25, 0xfe, 0xda,
	0xa3, 0x27, 0xf6, 0x16, 0x86, 0xa6, 0xc8, 0x06, 0x8b, 0xc1, 0x72, 0x72, 0x35, 0xe3, 0xbd, 0xd7,
	0x20, 0xc0, 0xbf, 0xf5, 0xde, 0xe4, 0xd0, 0x14, 0xec, 0x3d, 0x8c, 0xbc, 0x43, 0x9d, 0x0d, 0x23,
	0x9c, 0xf1, 0xd3, 0xc5, 0x78, 0x98, 0xfd, 0xdd, 0xa1, 0x96, 0x91, 0xca, 0xa7, 0xc0, 0x8e, 0xd5,
	0xbc, 0xb3, 0x8d, 0xc7, 0xfc, 0x1e, 0x46, 0xe1, 0xf5, 0x31, 0xb2, 0xd7, 0xf0, 0x54, 0x57, 0xd6,
	0xef, 0x5b, 0x4c, 0xca, 0x97, 0x0f, 0x29, 0xaf, 0x3a, 0x44, 0x1e, 0xd8, 0xfc, 0x16, 0x2e, 0xc2,
	0xfb, 0xad, 0xf1, 0xc4, 0xde, 0xc1, 0x79, 0xbc, 0x63, 0x36, 0x58, 0x9c, 0x2d, 0x27, 0x57, 0xd3,
	0x87, 0x06, 0xc8, 0x0e, 0x61, 0x53, 0x38, 0x27, 0xbb, 0xc3, 0x26, 0x8a, 0x8d, 0x65, 0x57, 0xe4,
	0x3f, 0xba, 0x69, 0x61, 0x3f, 0x76, 0x03, 0x17, 0x84, 0xb5, 0xab, 0x14, 0x61, 0xda, 0xe0, 0xf2,
	0x9f, 0x0d, 0x02, 0xba, 0x4e, 0x88, 0xec, 0x61, 0xc6, 0x60, 0x44, 0xaa, 0xf4, 0xd9, 0x70, 0x71,
	0xb6, 0x1c, 0xcb, 0xf8, 0x3b, 0xff, 0x33, 0x80, 0xc9, 0x91, 0x7f, 0xf6, 0x19, 0x9e, 0xa7, 0xef,
	0x5a, 0xdc, 0x05, 0x43, 0xff, 0x51, 0x58, 0x25, 0x26, 0x3a, 0x7f, 0xa6, 0x8f, 0x2a, 0xf6, 0x09,
	0x40, 0xc7, 0xa3, 0x17, 0x77, 0x8a, 0xd2, 0xc9, 0xe6, 0xbc, 0x0b, 0x07, 0x3f, 0x84, 0x83, 0xaf,
	0x0f, 0xe1, 0x90, 0xe3, 0x44, 0x7f, 0xa1, 0xaf, 0x37, 0x3f, 0xaf, 0x4b, 0x43, 0xf7, 0xfb, 0x0d,
	0xd7, 0xb6, 0x16, 0x51, 0xd1, 0xb6, 0xa5, 0xe8, 0x63, 0x57, 0x62, 0x23, 0xdc, 0xe6, 0x43, 0x69,
	0xc5, 0x69, 0xde, 0x37, 0x4f, 0xe2, 0xdc, 0x8f, 0x7f, 0x03, 0x00, 0x00, 0xff, 0xff, 0xb9, 0x88,
	0x38, 0x23, 0x08, 0x03, 0x00, 0x00,
}

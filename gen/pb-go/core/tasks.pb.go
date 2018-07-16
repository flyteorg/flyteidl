// Code generated by protoc-gen-go. DO NOT EDIT.
// source: core/tasks.proto

package core

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
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

type TaskCategory int32

const (
	// Task category that identifies if the system can use default structures in UI, etc to drive the task
	// TODO should we add Container type of tasks as a special Class?
	TaskCategory_SingleStepTask TaskCategory = 0
	TaskCategory_MultiStepTask  TaskCategory = 1
)

var TaskCategory_name = map[int32]string{
	0: "SingleStepTask",
	1: "MultiStepTask",
}
var TaskCategory_value = map[string]int32{
	"SingleStepTask": 0,
	"MultiStepTask":  1,
}

func (x TaskCategory) String() string {
	return proto.EnumName(TaskCategory_name, int32(x))
}
func (TaskCategory) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_tasks_d75762aa05a9d280, []int{0}
}

type RuntimeMetadata_RuntimeType int32

const (
	RuntimeMetadata_FlyteSDK RuntimeMetadata_RuntimeType = 0
	RuntimeMetadata_Other    RuntimeMetadata_RuntimeType = 1
)

var RuntimeMetadata_RuntimeType_name = map[int32]string{
	0: "FlyteSDK",
	1: "Other",
}
var RuntimeMetadata_RuntimeType_value = map[string]int32{
	"FlyteSDK": 0,
	"Other":    1,
}

func (x RuntimeMetadata_RuntimeType) String() string {
	return proto.EnumName(RuntimeMetadata_RuntimeType_name, int32(x))
}
func (RuntimeMetadata_RuntimeType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_tasks_d75762aa05a9d280, []int{1, 0}
}

// A customizable interface to convey resources requested for a container. This can be interpretted differently for different
// container engines.
type Resources struct {
	// The desired set of resources requested.
	Requests map[string]string `protobuf:"bytes,1,rep,name=requests" json:"requests,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
	// Defines a set of bounds (e.g. min/max) within which the task can reliably run.
	Limits map[string]string `protobuf:"bytes,2,rep,name=limits" json:"limits,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
	// Defines a set of bounds (e.g. min/max) within which the task can reliably run.
	EnvDictionary        map[string]string `protobuf:"bytes,3,rep,name=env_dictionary,json=envDictionary" json:"env_dictionary,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *Resources) Reset()         { *m = Resources{} }
func (m *Resources) String() string { return proto.CompactTextString(m) }
func (*Resources) ProtoMessage()    {}
func (*Resources) Descriptor() ([]byte, []int) {
	return fileDescriptor_tasks_d75762aa05a9d280, []int{0}
}
func (m *Resources) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Resources.Unmarshal(m, b)
}
func (m *Resources) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Resources.Marshal(b, m, deterministic)
}
func (dst *Resources) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Resources.Merge(dst, src)
}
func (m *Resources) XXX_Size() int {
	return xxx_messageInfo_Resources.Size(m)
}
func (m *Resources) XXX_DiscardUnknown() {
	xxx_messageInfo_Resources.DiscardUnknown(m)
}

var xxx_messageInfo_Resources proto.InternalMessageInfo

func (m *Resources) GetRequests() map[string]string {
	if m != nil {
		return m.Requests
	}
	return nil
}

func (m *Resources) GetLimits() map[string]string {
	if m != nil {
		return m.Limits
	}
	return nil
}

func (m *Resources) GetEnvDictionary() map[string]string {
	if m != nil {
		return m.EnvDictionary
	}
	return nil
}

// Runtime information. This is losely defined to allow for extensibility.
type RuntimeMetadata struct {
	// Type of runtime.
	Type RuntimeMetadata_RuntimeType `protobuf:"varint,1,opt,name=type,enum=core.RuntimeMetadata_RuntimeType" json:"type,omitempty"`
	// Version of the runtime. All versions should be backward compatible. However, certain cases call for version
	// checks to ensure tighter validation or setting expectations.
	Version string `protobuf:"bytes,2,opt,name=version" json:"version,omitempty"`
	// +optional It can be used to provide extra information about the runtime (e.g. python, golang... etc.).
	Flavor               string   `protobuf:"bytes,3,opt,name=flavor" json:"flavor,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RuntimeMetadata) Reset()         { *m = RuntimeMetadata{} }
func (m *RuntimeMetadata) String() string { return proto.CompactTextString(m) }
func (*RuntimeMetadata) ProtoMessage()    {}
func (*RuntimeMetadata) Descriptor() ([]byte, []int) {
	return fileDescriptor_tasks_d75762aa05a9d280, []int{1}
}
func (m *RuntimeMetadata) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RuntimeMetadata.Unmarshal(m, b)
}
func (m *RuntimeMetadata) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RuntimeMetadata.Marshal(b, m, deterministic)
}
func (dst *RuntimeMetadata) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RuntimeMetadata.Merge(dst, src)
}
func (m *RuntimeMetadata) XXX_Size() int {
	return xxx_messageInfo_RuntimeMetadata.Size(m)
}
func (m *RuntimeMetadata) XXX_DiscardUnknown() {
	xxx_messageInfo_RuntimeMetadata.DiscardUnknown(m)
}

var xxx_messageInfo_RuntimeMetadata proto.InternalMessageInfo

func (m *RuntimeMetadata) GetType() RuntimeMetadata_RuntimeType {
	if m != nil {
		return m.Type
	}
	return RuntimeMetadata_FlyteSDK
}

func (m *RuntimeMetadata) GetVersion() string {
	if m != nil {
		return m.Version
	}
	return ""
}

func (m *RuntimeMetadata) GetFlavor() string {
	if m != nil {
		return m.Flavor
	}
	return ""
}

// Task Metadata
type TaskMetadata struct {
	// Indicates whether the system should attempt to lookup this task's output to avoid duplication of work.
	Discoverable bool `protobuf:"varint,1,opt,name=discoverable" json:"discoverable,omitempty"`
	// Runtime information about the task.
	Runtime *RuntimeMetadata `protobuf:"bytes,2,opt,name=runtime" json:"runtime,omitempty"`
	// The overall timeout of a task.
	Timeout *duration.Duration `protobuf:"bytes,4,opt,name=timeout" json:"timeout,omitempty"`
	// Number of retries per task.
	Retries              *RetryStrategy `protobuf:"bytes,5,opt,name=retries" json:"retries,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *TaskMetadata) Reset()         { *m = TaskMetadata{} }
func (m *TaskMetadata) String() string { return proto.CompactTextString(m) }
func (*TaskMetadata) ProtoMessage()    {}
func (*TaskMetadata) Descriptor() ([]byte, []int) {
	return fileDescriptor_tasks_d75762aa05a9d280, []int{2}
}
func (m *TaskMetadata) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TaskMetadata.Unmarshal(m, b)
}
func (m *TaskMetadata) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TaskMetadata.Marshal(b, m, deterministic)
}
func (dst *TaskMetadata) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TaskMetadata.Merge(dst, src)
}
func (m *TaskMetadata) XXX_Size() int {
	return xxx_messageInfo_TaskMetadata.Size(m)
}
func (m *TaskMetadata) XXX_DiscardUnknown() {
	xxx_messageInfo_TaskMetadata.DiscardUnknown(m)
}

var xxx_messageInfo_TaskMetadata proto.InternalMessageInfo

func (m *TaskMetadata) GetDiscoverable() bool {
	if m != nil {
		return m.Discoverable
	}
	return false
}

func (m *TaskMetadata) GetRuntime() *RuntimeMetadata {
	if m != nil {
		return m.Runtime
	}
	return nil
}

func (m *TaskMetadata) GetTimeout() *duration.Duration {
	if m != nil {
		return m.Timeout
	}
	return nil
}

func (m *TaskMetadata) GetRetries() *RetryStrategy {
	if m != nil {
		return m.Retries
	}
	return nil
}

// A Task structure that uniquely identifies a task in the system
// Tasks are registered as a first step in the system.
type TaskTemplate struct {
	// Auto generated taskId by the system. Task Id uniquely identifies this task globally.
	Id string `protobuf:"bytes,1,opt,name=id" json:"id,omitempty"`
	// Category of the task. These are predefined and help provide defaults
	Category TaskCategory `protobuf:"varint,2,opt,name=category,enum=core.TaskCategory" json:"category,omitempty"`
	// A predefined yet extensible Task type identifier. This can be used to customize any of the components. If no
	// extensions are provided in the system, Flyte will resolve the this task to its TaskCategory and default the
	// implementation registered for the TaskCategory.
	Type string `protobuf:"bytes,3,opt,name=type" json:"type,omitempty"`
	// Extra metadata about the task.
	Metadata *TaskMetadata `protobuf:"bytes,4,opt,name=metadata" json:"metadata,omitempty"`
	// A strongly typed interface for the task. This enables others to use this task within a workflow and gauarantees
	// compile-time validation of the workflow to avoid costly runtime failures.
	Interface *TypedInterface `protobuf:"bytes,5,opt,name=interface" json:"interface,omitempty"`
	// Custom data about the task. This is extensible to allow various plugins in the system.
	Custom []byte `protobuf:"bytes,6,opt,name=custom,proto3" json:"custom,omitempty"`
	// Known task types that the system will guarantee plugins for. Custom SDK plugins are allowed to set these if needed.
	// If no corresponding execution-layer plugins are found, the system will default to handling these using built-in
	// handlers.
	//
	// Types that are valid to be assigned to Task:
	//	*TaskTemplate_Container
	Task                 isTaskTemplate_Task `protobuf_oneof:"task"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-"`
	XXX_unrecognized     []byte              `json:"-"`
	XXX_sizecache        int32               `json:"-"`
}

func (m *TaskTemplate) Reset()         { *m = TaskTemplate{} }
func (m *TaskTemplate) String() string { return proto.CompactTextString(m) }
func (*TaskTemplate) ProtoMessage()    {}
func (*TaskTemplate) Descriptor() ([]byte, []int) {
	return fileDescriptor_tasks_d75762aa05a9d280, []int{3}
}
func (m *TaskTemplate) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TaskTemplate.Unmarshal(m, b)
}
func (m *TaskTemplate) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TaskTemplate.Marshal(b, m, deterministic)
}
func (dst *TaskTemplate) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TaskTemplate.Merge(dst, src)
}
func (m *TaskTemplate) XXX_Size() int {
	return xxx_messageInfo_TaskTemplate.Size(m)
}
func (m *TaskTemplate) XXX_DiscardUnknown() {
	xxx_messageInfo_TaskTemplate.DiscardUnknown(m)
}

var xxx_messageInfo_TaskTemplate proto.InternalMessageInfo

type isTaskTemplate_Task interface {
	isTaskTemplate_Task()
}

type TaskTemplate_Container struct {
	Container *Container `protobuf:"bytes,7,opt,name=container,oneof"`
}

func (*TaskTemplate_Container) isTaskTemplate_Task() {}

func (m *TaskTemplate) GetTask() isTaskTemplate_Task {
	if m != nil {
		return m.Task
	}
	return nil
}

func (m *TaskTemplate) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *TaskTemplate) GetCategory() TaskCategory {
	if m != nil {
		return m.Category
	}
	return TaskCategory_SingleStepTask
}

func (m *TaskTemplate) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

func (m *TaskTemplate) GetMetadata() *TaskMetadata {
	if m != nil {
		return m.Metadata
	}
	return nil
}

func (m *TaskTemplate) GetInterface() *TypedInterface {
	if m != nil {
		return m.Interface
	}
	return nil
}

func (m *TaskTemplate) GetCustom() []byte {
	if m != nil {
		return m.Custom
	}
	return nil
}

func (m *TaskTemplate) GetContainer() *Container {
	if x, ok := m.GetTask().(*TaskTemplate_Container); ok {
		return x.Container
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*TaskTemplate) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _TaskTemplate_OneofMarshaler, _TaskTemplate_OneofUnmarshaler, _TaskTemplate_OneofSizer, []interface{}{
		(*TaskTemplate_Container)(nil),
	}
}

func _TaskTemplate_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*TaskTemplate)
	// task
	switch x := m.Task.(type) {
	case *TaskTemplate_Container:
		b.EncodeVarint(7<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Container); err != nil {
			return err
		}
	case nil:
	default:
		return fmt.Errorf("TaskTemplate.Task has unexpected type %T", x)
	}
	return nil
}

func _TaskTemplate_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*TaskTemplate)
	switch tag {
	case 7: // task.container
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(Container)
		err := b.DecodeMessage(msg)
		m.Task = &TaskTemplate_Container{msg}
		return true, err
	default:
		return false, nil
	}
}

func _TaskTemplate_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*TaskTemplate)
	// task
	switch x := m.Task.(type) {
	case *TaskTemplate_Container:
		s := proto.Size(x.Container)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

type Container struct {
	// Container image url. Eg: docker/redis:latest
	Image string `protobuf:"bytes,1,opt,name=image" json:"image,omitempty"`
	// Command to be executed, if not provided, the default entrypoint in the container image will be used.
	Command []string `protobuf:"bytes,2,rep,name=command" json:"command,omitempty"`
	// These will default to Flyte given paths. If provided, the system will not append known paths. If the task still
	// needs flyte's inputs and outputs path, add $(FLYTE_INPUT_FILE), $(FLYTE_OUTPUT_FILE) wherever makes sense and the
	// system will populate these before executing the container.
	Args []string `protobuf:"bytes,3,rep,name=args" json:"args,omitempty"`
	// Container resources requirement as specified by the container engine.
	Resources *Resources `protobuf:"bytes,4,opt,name=resources" json:"resources,omitempty"`
	// Environment variables will be set as the container is starting up.
	Env []*KeyValuePair `protobuf:"bytes,5,rep,name=env" json:"env,omitempty"`
	// Allows extra configs to be available for the container.
	// TODO: elaborate on how configs will become available.
	Config               []*KeyValuePair `protobuf:"bytes,6,rep,name=config" json:"config,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *Container) Reset()         { *m = Container{} }
func (m *Container) String() string { return proto.CompactTextString(m) }
func (*Container) ProtoMessage()    {}
func (*Container) Descriptor() ([]byte, []int) {
	return fileDescriptor_tasks_d75762aa05a9d280, []int{4}
}
func (m *Container) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Container.Unmarshal(m, b)
}
func (m *Container) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Container.Marshal(b, m, deterministic)
}
func (dst *Container) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Container.Merge(dst, src)
}
func (m *Container) XXX_Size() int {
	return xxx_messageInfo_Container.Size(m)
}
func (m *Container) XXX_DiscardUnknown() {
	xxx_messageInfo_Container.DiscardUnknown(m)
}

var xxx_messageInfo_Container proto.InternalMessageInfo

func (m *Container) GetImage() string {
	if m != nil {
		return m.Image
	}
	return ""
}

func (m *Container) GetCommand() []string {
	if m != nil {
		return m.Command
	}
	return nil
}

func (m *Container) GetArgs() []string {
	if m != nil {
		return m.Args
	}
	return nil
}

func (m *Container) GetResources() *Resources {
	if m != nil {
		return m.Resources
	}
	return nil
}

func (m *Container) GetEnv() []*KeyValuePair {
	if m != nil {
		return m.Env
	}
	return nil
}

func (m *Container) GetConfig() []*KeyValuePair {
	if m != nil {
		return m.Config
	}
	return nil
}

func init() {
	proto.RegisterType((*Resources)(nil), "core.Resources")
	proto.RegisterMapType((map[string]string)(nil), "core.Resources.EnvDictionaryEntry")
	proto.RegisterMapType((map[string]string)(nil), "core.Resources.LimitsEntry")
	proto.RegisterMapType((map[string]string)(nil), "core.Resources.RequestsEntry")
	proto.RegisterType((*RuntimeMetadata)(nil), "core.RuntimeMetadata")
	proto.RegisterType((*TaskMetadata)(nil), "core.TaskMetadata")
	proto.RegisterType((*TaskTemplate)(nil), "core.TaskTemplate")
	proto.RegisterType((*Container)(nil), "core.Container")
	proto.RegisterEnum("core.TaskCategory", TaskCategory_name, TaskCategory_value)
	proto.RegisterEnum("core.RuntimeMetadata_RuntimeType", RuntimeMetadata_RuntimeType_name, RuntimeMetadata_RuntimeType_value)
}

func init() { proto.RegisterFile("core/tasks.proto", fileDescriptor_tasks_d75762aa05a9d280) }

var fileDescriptor_tasks_d75762aa05a9d280 = []byte{
	// 700 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x54, 0xcd, 0x6e, 0xd3, 0x4a,
	0x14, 0xae, 0xf3, 0xe3, 0xc4, 0x27, 0x69, 0x9a, 0x3b, 0xed, 0xbd, 0xf2, 0xcd, 0xd5, 0x45, 0xc5,
	0x42, 0xa8, 0xaa, 0x54, 0x47, 0x4a, 0x55, 0x89, 0xc2, 0x06, 0xf5, 0x07, 0x51, 0x95, 0x0a, 0x34,
	0xa9, 0x58, 0xb0, 0x41, 0x53, 0xfb, 0x24, 0x8c, 0x6a, 0x7b, 0xc2, 0x78, 0x1c, 0xc9, 0x3b, 0xde,
	0x82, 0x3d, 0x2f, 0xc3, 0x96, 0x47, 0x42, 0x1e, 0x8f, 0x9d, 0xb4, 0xc0, 0xa2, 0xab, 0xf8, 0x9c,
	0xf3, 0x7d, 0x5f, 0xce, 0xef, 0xc0, 0x30, 0x10, 0x12, 0xc7, 0x8a, 0xa5, 0xb7, 0xa9, 0xbf, 0x90,
	0x42, 0x09, 0xd2, 0x2a, 0x3c, 0xa3, 0x1d, 0xed, 0xe7, 0x89, 0x42, 0x39, 0x63, 0x01, 0x96, 0xb1,
	0xd1, 0xb6, 0xf6, 0x46, 0x5c, 0xa1, 0x64, 0x91, 0x21, 0x8c, 0x1e, 0xcd, 0x85, 0x98, 0x47, 0x38,
	0xd6, 0xd6, 0x4d, 0x36, 0x1b, 0x87, 0x99, 0x64, 0x8a, 0x8b, 0xa4, 0x8c, 0x7b, 0x5f, 0x9a, 0xe0,
	0x50, 0x4c, 0x45, 0x26, 0x03, 0x4c, 0xc9, 0x31, 0x74, 0x25, 0x7e, 0xce, 0x30, 0x55, 0xa9, 0x6b,
	0xed, 0x36, 0xf7, 0x7a, 0x93, 0xff, 0xfd, 0x42, 0xd5, 0xaf, 0x21, 0x3e, 0x35, 0xf1, 0xf3, 0x44,
	0xc9, 0x9c, 0xd6, 0x70, 0x72, 0x08, 0x76, 0xc4, 0x63, 0xae, 0x52, 0xb7, 0xa1, 0x89, 0xff, 0xdd,
	0x27, 0xbe, 0xd1, 0xd1, 0x92, 0x66, 0xa0, 0xe4, 0x02, 0x06, 0x98, 0x2c, 0x3f, 0x86, 0x3c, 0x28,
	0x52, 0x62, 0x32, 0x77, 0x9b, 0x9a, 0xec, 0xdd, 0x27, 0x9f, 0x27, 0xcb, 0xb3, 0x1a, 0x54, 0x6a,
	0x6c, 0xe2, 0xba, 0x6f, 0xf4, 0x02, 0x36, 0xef, 0xa4, 0x46, 0x86, 0xd0, 0xbc, 0xc5, 0xdc, 0xb5,
	0x76, 0xad, 0x3d, 0x87, 0x16, 0x9f, 0x64, 0x07, 0xda, 0x4b, 0x16, 0x65, 0xe8, 0x36, 0xb4, 0xaf,
	0x34, 0x9e, 0x37, 0x9e, 0x59, 0xa3, 0x63, 0xe8, 0xad, 0xa5, 0xf7, 0x20, 0xea, 0x4b, 0x20, 0xbf,
	0x26, 0xf7, 0x10, 0x05, 0xef, 0x9b, 0x05, 0x5b, 0x34, 0x4b, 0x14, 0x8f, 0xf1, 0x0a, 0x15, 0x0b,
	0x99, 0x62, 0xe4, 0x08, 0x5a, 0x2a, 0x5f, 0xa0, 0x16, 0x18, 0x4c, 0x1e, 0x9b, 0x76, 0xdc, 0x05,
	0x55, 0xf6, 0x75, 0xbe, 0x40, 0xaa, 0xe1, 0xc4, 0x85, 0xce, 0x12, 0x65, 0xca, 0x45, 0x62, 0xfe,
	0xa6, 0x32, 0xc9, 0x3f, 0x60, 0xcf, 0x22, 0xb6, 0x14, 0xd2, 0x6d, 0xea, 0x80, 0xb1, 0xbc, 0xa7,
	0xd0, 0x5b, 0x93, 0x21, 0x7d, 0xe8, 0xbe, 0x8a, 0x72, 0x85, 0xd3, 0xb3, 0xcb, 0xe1, 0x06, 0x71,
	0xa0, 0xfd, 0x56, 0x7d, 0x42, 0x39, 0xb4, 0xbc, 0xef, 0x16, 0xf4, 0xaf, 0x59, 0x7a, 0x5b, 0x67,
	0xe8, 0x41, 0x3f, 0xe4, 0x69, 0x20, 0x96, 0x28, 0xd9, 0x4d, 0x54, 0x66, 0xda, 0xa5, 0x77, 0x7c,
	0x64, 0x0c, 0x1d, 0x59, 0x8a, 0xeb, 0x74, 0x7a, 0x93, 0xbf, 0x7f, 0x5b, 0x08, 0xad, 0x50, 0xe4,
	0x10, 0x3a, 0xc5, 0xaf, 0xc8, 0x94, 0xdb, 0xd2, 0x84, 0x7f, 0xfd, 0x72, 0x7f, 0xfd, 0x6a, 0x7f,
	0xfd, 0x33, 0xb3, 0xbf, 0xb4, 0x42, 0x92, 0x03, 0xe8, 0x48, 0x54, 0x92, 0x63, 0xea, 0xb6, 0x35,
	0x69, 0xbb, 0xda, 0x1e, 0x25, 0xf3, 0xa9, 0x92, 0x4c, 0xe1, 0x3c, 0xa7, 0x15, 0xc6, 0xfb, 0xda,
	0x28, 0x2b, 0xb9, 0xc6, 0x78, 0x11, 0x31, 0x85, 0x64, 0x00, 0x0d, 0x1e, 0x9a, 0x51, 0x35, 0x78,
	0x48, 0x7c, 0xe8, 0x06, 0x05, 0x47, 0xc8, 0x5c, 0xa7, 0x3d, 0x98, 0x90, 0x52, 0xb0, 0x60, 0x9d,
	0x9a, 0x08, 0xad, 0x31, 0x84, 0x98, 0x59, 0x95, 0x8d, 0x2d, 0x07, 0xe1, 0x43, 0x37, 0x36, 0xd5,
	0x99, 0x4a, 0xd6, 0x34, 0xea, 0xba, 0x6b, 0x0c, 0x99, 0x80, 0x53, 0x9f, 0xb3, 0xa9, 0x62, 0xc7,
	0x10, 0xf2, 0x05, 0x86, 0x17, 0x55, 0x8c, 0xae, 0x60, 0xc5, 0x48, 0x83, 0x2c, 0x55, 0x22, 0x76,
	0xed, 0x5d, 0x6b, 0xaf, 0x4f, 0x8d, 0x45, 0xc6, 0xe0, 0x04, 0x22, 0x51, 0x8c, 0x27, 0x28, 0xdd,
	0x8e, 0xd6, 0xda, 0x2a, 0xb5, 0x4e, 0x2b, 0xf7, 0xeb, 0x0d, 0xba, 0xc2, 0x9c, 0xd8, 0xd0, 0x2a,
	0xde, 0x18, 0xef, 0x87, 0x05, 0x4e, 0x0d, 0x29, 0x16, 0x96, 0xc7, 0x6c, 0x8e, 0xa6, 0x33, 0xa5,
	0x51, 0x6c, 0x58, 0x20, 0xe2, 0x98, 0x25, 0xa1, 0xbe, 0x73, 0x87, 0x56, 0x66, 0xd1, 0x06, 0x26,
	0xe7, 0xa9, 0xbe, 0x60, 0x87, 0xea, 0x6f, 0x72, 0x00, 0x8e, 0xac, 0x6e, 0xd8, 0xf4, 0x61, 0xeb,
	0xde, 0x69, 0xd3, 0x15, 0x82, 0x3c, 0x81, 0x26, 0x26, 0x4b, 0xb7, 0xad, 0xdf, 0x00, 0xd3, 0xb0,
	0x4b, 0xcc, 0xdf, 0x17, 0xa7, 0xf2, 0x8e, 0x71, 0x49, 0x8b, 0x30, 0xd9, 0x07, 0x3b, 0x10, 0xc9,
	0x8c, 0xcf, 0x5d, 0xfb, 0x8f, 0x40, 0x83, 0xd8, 0x3f, 0x2a, 0x67, 0x7d, 0xba, 0x9a, 0xd5, 0x60,
	0xca, 0x93, 0x79, 0x84, 0x53, 0x85, 0x8b, 0x22, 0x32, 0xdc, 0x20, 0x7f, 0xc1, 0xe6, 0x55, 0x16,
	0x29, 0x5e, 0xbb, 0xac, 0x13, 0xfb, 0x83, 0x7e, 0x68, 0x6f, 0x6c, 0xbd, 0x76, 0x87, 0x3f, 0x03,
	0x00, 0x00, 0xff, 0xff, 0xbe, 0x9b, 0xce, 0x80, 0x89, 0x05, 0x00, 0x00,
}

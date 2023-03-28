// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/plugins/kubeflow/mpi.proto

package plugins

import (
	fmt "fmt"
	core "github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/core"
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

// Custom proto for plugin that enables distributed training using https://github.com/kubeflow/mpi-operator
type DistributedMPITrainingTask struct {
	// Worker replicas spec
	WorkerReplicas *DistributedMPITrainingReplicaSpec `protobuf:"bytes,1,opt,name=worker_replicas,json=workerReplicas,proto3" json:"worker_replicas,omitempty"`
	// Master replicas spec
	LauncherReplicas *DistributedMPITrainingReplicaSpec `protobuf:"bytes,2,opt,name=launcher_replicas,json=launcherReplicas,proto3" json:"launcher_replicas,omitempty"`
	// RunPolicy encapsulates various runtime policies of the distributed training
	// job, for example how to clean up resources and how long the job can stay
	// active.
	RunPolicy            *RunPolicy `protobuf:"bytes,3,opt,name=run_policy,json=runPolicy,proto3" json:"run_policy,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *DistributedMPITrainingTask) Reset()         { *m = DistributedMPITrainingTask{} }
func (m *DistributedMPITrainingTask) String() string { return proto.CompactTextString(m) }
func (*DistributedMPITrainingTask) ProtoMessage()    {}
func (*DistributedMPITrainingTask) Descriptor() ([]byte, []int) {
	return fileDescriptor_298b02c608b0cddf, []int{0}
}

func (m *DistributedMPITrainingTask) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DistributedMPITrainingTask.Unmarshal(m, b)
}
func (m *DistributedMPITrainingTask) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DistributedMPITrainingTask.Marshal(b, m, deterministic)
}
func (m *DistributedMPITrainingTask) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DistributedMPITrainingTask.Merge(m, src)
}
func (m *DistributedMPITrainingTask) XXX_Size() int {
	return xxx_messageInfo_DistributedMPITrainingTask.Size(m)
}
func (m *DistributedMPITrainingTask) XXX_DiscardUnknown() {
	xxx_messageInfo_DistributedMPITrainingTask.DiscardUnknown(m)
}

var xxx_messageInfo_DistributedMPITrainingTask proto.InternalMessageInfo

func (m *DistributedMPITrainingTask) GetWorkerReplicas() *DistributedMPITrainingReplicaSpec {
	if m != nil {
		return m.WorkerReplicas
	}
	return nil
}

func (m *DistributedMPITrainingTask) GetLauncherReplicas() *DistributedMPITrainingReplicaSpec {
	if m != nil {
		return m.LauncherReplicas
	}
	return nil
}

func (m *DistributedMPITrainingTask) GetRunPolicy() *RunPolicy {
	if m != nil {
		return m.RunPolicy
	}
	return nil
}

type DistributedMPITrainingReplicaSpec struct {
	// Number of replicas
	Replicas int32 `protobuf:"varint,1,opt,name=replicas,proto3" json:"replicas,omitempty"`
	// Image used for the replica group
	Image string `protobuf:"bytes,2,opt,name=image,proto3" json:"image,omitempty"`
	// Resources required for the replica group
	Resources *core.Resources `protobuf:"bytes,3,opt,name=resources,proto3" json:"resources,omitempty"`
	// RestartPolicy Determines whether pods will be restarted when they exit. The allowed values are as follows:
	RestartPolicy        RestartPolicy `protobuf:"varint,4,opt,name=restart_policy,json=restartPolicy,proto3,enum=flyteidl.plugins.kubeflow.RestartPolicy" json:"restart_policy,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *DistributedMPITrainingReplicaSpec) Reset()         { *m = DistributedMPITrainingReplicaSpec{} }
func (m *DistributedMPITrainingReplicaSpec) String() string { return proto.CompactTextString(m) }
func (*DistributedMPITrainingReplicaSpec) ProtoMessage()    {}
func (*DistributedMPITrainingReplicaSpec) Descriptor() ([]byte, []int) {
	return fileDescriptor_298b02c608b0cddf, []int{1}
}

func (m *DistributedMPITrainingReplicaSpec) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DistributedMPITrainingReplicaSpec.Unmarshal(m, b)
}
func (m *DistributedMPITrainingReplicaSpec) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DistributedMPITrainingReplicaSpec.Marshal(b, m, deterministic)
}
func (m *DistributedMPITrainingReplicaSpec) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DistributedMPITrainingReplicaSpec.Merge(m, src)
}
func (m *DistributedMPITrainingReplicaSpec) XXX_Size() int {
	return xxx_messageInfo_DistributedMPITrainingReplicaSpec.Size(m)
}
func (m *DistributedMPITrainingReplicaSpec) XXX_DiscardUnknown() {
	xxx_messageInfo_DistributedMPITrainingReplicaSpec.DiscardUnknown(m)
}

var xxx_messageInfo_DistributedMPITrainingReplicaSpec proto.InternalMessageInfo

func (m *DistributedMPITrainingReplicaSpec) GetReplicas() int32 {
	if m != nil {
		return m.Replicas
	}
	return 0
}

func (m *DistributedMPITrainingReplicaSpec) GetImage() string {
	if m != nil {
		return m.Image
	}
	return ""
}

func (m *DistributedMPITrainingReplicaSpec) GetResources() *core.Resources {
	if m != nil {
		return m.Resources
	}
	return nil
}

func (m *DistributedMPITrainingReplicaSpec) GetRestartPolicy() RestartPolicy {
	if m != nil {
		return m.RestartPolicy
	}
	return RestartPolicy_RESTART_POLICY_ALWAYS
}

func init() {
	proto.RegisterType((*DistributedMPITrainingTask)(nil), "flyteidl.plugins.kubeflow.DistributedMPITrainingTask")
	proto.RegisterType((*DistributedMPITrainingReplicaSpec)(nil), "flyteidl.plugins.kubeflow.DistributedMPITrainingReplicaSpec")
}

func init() {
	proto.RegisterFile("flyteidl/plugins/kubeflow/mpi.proto", fileDescriptor_298b02c608b0cddf)
}

var fileDescriptor_298b02c608b0cddf = []byte{
	// 345 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xac, 0x52, 0x4d, 0x4b, 0x03, 0x31,
	0x10, 0x65, 0xab, 0x15, 0x1b, 0xb1, 0xea, 0xe2, 0xa1, 0xee, 0xa9, 0x56, 0x91, 0x5e, 0xdc, 0x40,
	0x05, 0x45, 0xf0, 0xa4, 0x5e, 0x3c, 0x88, 0x25, 0xf6, 0xe4, 0xa5, 0xec, 0xa6, 0xe9, 0x36, 0x6c,
	0x36, 0x09, 0x93, 0x84, 0xd2, 0xdf, 0xe5, 0xff, 0xf1, 0xb7, 0x88, 0xfb, 0xd5, 0x2a, 0xb6, 0x5e,
	0xbc, 0x65, 0x32, 0x6f, 0xde, 0x9b, 0x97, 0x3c, 0x74, 0x36, 0x15, 0x0b, 0xcb, 0xf8, 0x44, 0x60,
	0x2d, 0x5c, 0xc2, 0xa5, 0xc1, 0xa9, 0x8b, 0xd9, 0x54, 0xa8, 0x39, 0xce, 0x34, 0x0f, 0x35, 0x28,
	0xab, 0xfc, 0x93, 0x0a, 0x14, 0x96, 0xa0, 0xb0, 0x02, 0x05, 0x75, 0x0b, 0x53, 0x05, 0x0c, 0xdb,
	0xc8, 0xa4, 0xa6, 0x98, 0x0a, 0x2e, 0xd6, 0x53, 0x53, 0x95, 0x65, 0x4a, 0x16, 0xb8, 0xde, 0x7b,
	0x03, 0x05, 0x8f, 0xdc, 0x58, 0xe0, 0xb1, 0xb3, 0x6c, 0xf2, 0x3c, 0x7c, 0x1a, 0x41, 0xc4, 0x25,
	0x97, 0xc9, 0x28, 0x32, 0xa9, 0xcf, 0xd0, 0xc1, 0x5c, 0x41, 0xca, 0x60, 0x0c, 0x4c, 0x0b, 0x4e,
	0x23, 0xd3, 0xf1, 0xba, 0x5e, 0x7f, 0x6f, 0x70, 0x17, 0xae, 0x5d, 0x2b, 0xfc, 0x9d, 0x8f, 0x14,
	0x04, 0xaf, 0x9a, 0x51, 0xd2, 0x2e, 0x48, 0xcb, 0x2b, 0xe3, 0x73, 0x74, 0x24, 0x22, 0x27, 0xe9,
	0x6c, 0x55, 0xa8, 0xf1, 0x0f, 0x42, 0x87, 0x15, 0x6d, 0x2d, 0xf5, 0x80, 0x10, 0x38, 0x39, 0xd6,
	0x4a, 0x70, 0xba, 0xe8, 0x6c, 0xe5, 0x1a, 0xe7, 0x1b, 0x34, 0x88, 0x93, 0xc3, 0x1c, 0x4b, 0x5a,
	0x50, 0x1d, 0x7b, 0x1f, 0x1e, 0x3a, 0xfd, 0x53, 0xdc, 0x0f, 0xd0, 0xee, 0xb7, 0x57, 0x6b, 0x92,
	0xba, 0xf6, 0x8f, 0x51, 0x93, 0x67, 0x51, 0xc2, 0x72, 0x97, 0x2d, 0x52, 0x14, 0xfe, 0x35, 0x6a,
	0x01, 0x33, 0xca, 0x01, 0x65, 0xa6, 0xdc, 0xad, 0xb3, 0xdc, 0xed, 0xeb, 0x93, 0x43, 0x52, 0xf5,
	0xc9, 0x12, 0xea, 0xbf, 0xa0, 0x36, 0x30, 0x63, 0x23, 0xb0, 0x95, 0xb1, 0xed, 0xae, 0xd7, 0x6f,
	0x0f, 0xfa, 0x9b, 0x8c, 0x15, 0x03, 0xa5, 0xb9, 0x7d, 0x58, 0x2d, 0xef, 0x6f, 0xdf, 0x6e, 0x12,
	0x6e, 0x67, 0x2e, 0x0e, 0xa9, 0xca, 0x70, 0x4e, 0xa2, 0x20, 0xc1, 0x75, 0xa8, 0x12, 0x26, 0xb1,
	0x8e, 0x2f, 0x13, 0x85, 0x7f, 0xe6, 0x2c, 0xde, 0xc9, 0x83, 0x75, 0xf5, 0x19, 0x00, 0x00, 0xff,
	0xff, 0xd7, 0xae, 0x61, 0xdf, 0xdd, 0x02, 0x00, 0x00,
}

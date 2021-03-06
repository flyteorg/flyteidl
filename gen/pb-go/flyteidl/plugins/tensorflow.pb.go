// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/plugins/tensorflow.proto

package plugins

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

// Custom proto for plugin that enables distributed training using https://github.com/kubeflow/tf-operator
type DistributedTensorflowTrainingTask struct {
	// number of worker, ps, chief replicas spawned in the cluster for this job
	Workers int32 `protobuf:"varint,1,opt,name=workers,proto3" json:"workers,omitempty"`
	// PS -> Parameter server
	PsReplicas           int32    `protobuf:"varint,2,opt,name=ps_replicas,json=psReplicas,proto3" json:"ps_replicas,omitempty"`
	ChiefReplicas        int32    `protobuf:"varint,3,opt,name=chief_replicas,json=chiefReplicas,proto3" json:"chief_replicas,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DistributedTensorflowTrainingTask) Reset()         { *m = DistributedTensorflowTrainingTask{} }
func (m *DistributedTensorflowTrainingTask) String() string { return proto.CompactTextString(m) }
func (*DistributedTensorflowTrainingTask) ProtoMessage()    {}
func (*DistributedTensorflowTrainingTask) Descriptor() ([]byte, []int) {
	return fileDescriptor_8da02783614e1bcc, []int{0}
}

func (m *DistributedTensorflowTrainingTask) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DistributedTensorflowTrainingTask.Unmarshal(m, b)
}
func (m *DistributedTensorflowTrainingTask) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DistributedTensorflowTrainingTask.Marshal(b, m, deterministic)
}
func (m *DistributedTensorflowTrainingTask) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DistributedTensorflowTrainingTask.Merge(m, src)
}
func (m *DistributedTensorflowTrainingTask) XXX_Size() int {
	return xxx_messageInfo_DistributedTensorflowTrainingTask.Size(m)
}
func (m *DistributedTensorflowTrainingTask) XXX_DiscardUnknown() {
	xxx_messageInfo_DistributedTensorflowTrainingTask.DiscardUnknown(m)
}

var xxx_messageInfo_DistributedTensorflowTrainingTask proto.InternalMessageInfo

func (m *DistributedTensorflowTrainingTask) GetWorkers() int32 {
	if m != nil {
		return m.Workers
	}
	return 0
}

func (m *DistributedTensorflowTrainingTask) GetPsReplicas() int32 {
	if m != nil {
		return m.PsReplicas
	}
	return 0
}

func (m *DistributedTensorflowTrainingTask) GetChiefReplicas() int32 {
	if m != nil {
		return m.ChiefReplicas
	}
	return 0
}

func init() {
	proto.RegisterType((*DistributedTensorflowTrainingTask)(nil), "flyteidl.plugins.DistributedTensorflowTrainingTask")
}

func init() { proto.RegisterFile("flyteidl/plugins/tensorflow.proto", fileDescriptor_8da02783614e1bcc) }

var fileDescriptor_8da02783614e1bcc = []byte{
	// 202 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x4c, 0xcb, 0xa9, 0x2c,
	0x49, 0xcd, 0x4c, 0xc9, 0xd1, 0x2f, 0xc8, 0x29, 0x4d, 0xcf, 0xcc, 0x2b, 0xd6, 0x2f, 0x49, 0xcd,
	0x2b, 0xce, 0x2f, 0x4a, 0xcb, 0xc9, 0x2f, 0xd7, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x80,
	0x29, 0xd1, 0x83, 0x2a, 0x51, 0x6a, 0x65, 0xe4, 0x52, 0x74, 0xc9, 0x2c, 0x2e, 0x29, 0xca, 0x4c,
	0x2a, 0x2d, 0x49, 0x4d, 0x09, 0x81, 0xeb, 0x08, 0x29, 0x4a, 0xcc, 0xcc, 0xcb, 0xcc, 0x4b, 0x0f,
	0x49, 0x2c, 0xce, 0x16, 0x92, 0xe0, 0x62, 0x2f, 0xcf, 0x2f, 0xca, 0x4e, 0x2d, 0x2a, 0x96, 0x60,
	0x54, 0x60, 0xd4, 0x60, 0x0d, 0x82, 0x71, 0x85, 0xe4, 0xb9, 0xb8, 0x0b, 0x8a, 0xe3, 0x8b, 0x52,
	0x0b, 0x72, 0x32, 0x93, 0x13, 0x8b, 0x25, 0x98, 0xc0, 0xb2, 0x5c, 0x05, 0xc5, 0x41, 0x50, 0x11,
	0x21, 0x55, 0x2e, 0xbe, 0xe4, 0x8c, 0xcc, 0xd4, 0x34, 0x84, 0x1a, 0x66, 0xb0, 0x1a, 0x5e, 0xb0,
	0x28, 0x4c, 0x99, 0x93, 0x65, 0x94, 0x79, 0x7a, 0x66, 0x49, 0x46, 0x69, 0x92, 0x5e, 0x72, 0x7e,
	0xae, 0x3e, 0xd8, 0x99, 0xf9, 0x45, 0xe9, 0xfa, 0x70, 0x2f, 0xa5, 0xa7, 0xe6, 0xe9, 0x17, 0x24,
	0xe9, 0xa6, 0xe7, 0xeb, 0xa3, 0xfb, 0x32, 0x89, 0x0d, 0xec, 0x37, 0x63, 0x40, 0x00, 0x00, 0x00,
	0xff, 0xff, 0x8f, 0xf1, 0xb9, 0xb2, 0x00, 0x01, 0x00, 0x00,
}

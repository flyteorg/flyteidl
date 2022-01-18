// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/plugins/array_job.proto

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

// Describes a job that can process independent pieces of data concurrently. Multiple copies of the runnable component
// will be executed concurrently.
type ArrayJob struct {
	// Defines the minimum number of instances to bring up concurrently at any given point. Note that this is an
	// optimistic restriction and that, due to network partitioning or other failures, the actual number of currently
	// running instances might be more. This has to be a positive number if assigned. Default value is size.
	Parallelism int64 `protobuf:"varint,1,opt,name=parallelism,proto3" json:"parallelism,omitempty"` // Deprecated: Do not use.
	// Defines the number of instances to launch at most. This number should match the size of the input if the job
	// requires processing of all input data. This has to be a positive number.
	// In the case this is not defined, the back-end will determine the size at run-time by reading the inputs.
	Size int64 `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"` // Deprecated: Do not use.
	// Types that are valid to be assigned to SuccessCriteria:
	//	*ArrayJob_MinSuccesses
	//	*ArrayJob_MinSuccessRatio
	SuccessCriteria      isArrayJob_SuccessCriteria `protobuf_oneof:"success_criteria"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *ArrayJob) Reset()         { *m = ArrayJob{} }
func (m *ArrayJob) String() string { return proto.CompactTextString(m) }
func (*ArrayJob) ProtoMessage()    {}
func (*ArrayJob) Descriptor() ([]byte, []int) {
	return fileDescriptor_794211c91ec6cd2b, []int{0}
}

func (m *ArrayJob) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ArrayJob.Unmarshal(m, b)
}
func (m *ArrayJob) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ArrayJob.Marshal(b, m, deterministic)
}
func (m *ArrayJob) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ArrayJob.Merge(m, src)
}
func (m *ArrayJob) XXX_Size() int {
	return xxx_messageInfo_ArrayJob.Size(m)
}
func (m *ArrayJob) XXX_DiscardUnknown() {
	xxx_messageInfo_ArrayJob.DiscardUnknown(m)
}

var xxx_messageInfo_ArrayJob proto.InternalMessageInfo

// Deprecated: Do not use.
func (m *ArrayJob) GetParallelism() int64 {
	if m != nil {
		return m.Parallelism
	}
	return 0
}

// Deprecated: Do not use.
func (m *ArrayJob) GetSize() int64 {
	if m != nil {
		return m.Size
	}
	return 0
}

type isArrayJob_SuccessCriteria interface {
	isArrayJob_SuccessCriteria()
}

type ArrayJob_MinSuccesses struct {
	MinSuccesses int64 `protobuf:"varint,3,opt,name=min_successes,json=minSuccesses,proto3,oneof"`
}

type ArrayJob_MinSuccessRatio struct {
	MinSuccessRatio float32 `protobuf:"fixed32,4,opt,name=min_success_ratio,json=minSuccessRatio,proto3,oneof"`
}

func (*ArrayJob_MinSuccesses) isArrayJob_SuccessCriteria() {}

func (*ArrayJob_MinSuccessRatio) isArrayJob_SuccessCriteria() {}

func (m *ArrayJob) GetSuccessCriteria() isArrayJob_SuccessCriteria {
	if m != nil {
		return m.SuccessCriteria
	}
	return nil
}

// Deprecated: Do not use.
func (m *ArrayJob) GetMinSuccesses() int64 {
	if x, ok := m.GetSuccessCriteria().(*ArrayJob_MinSuccesses); ok {
		return x.MinSuccesses
	}
	return 0
}

// Deprecated: Do not use.
func (m *ArrayJob) GetMinSuccessRatio() float32 {
	if x, ok := m.GetSuccessCriteria().(*ArrayJob_MinSuccessRatio); ok {
		return x.MinSuccessRatio
	}
	return 0
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*ArrayJob) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*ArrayJob_MinSuccesses)(nil),
		(*ArrayJob_MinSuccessRatio)(nil),
	}
}

func init() {
	proto.RegisterType((*ArrayJob)(nil), "flyteidl.plugins.ArrayJob")
}

func init() { proto.RegisterFile("flyteidl/plugins/array_job.proto", fileDescriptor_794211c91ec6cd2b) }

var fileDescriptor_794211c91ec6cd2b = []byte{
	// 226 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0xd0, 0xb1, 0x4e, 0xc3, 0x30,
	0x10, 0xc6, 0x71, 0x9c, 0x56, 0x08, 0x19, 0x10, 0xc5, 0x03, 0xf2, 0x18, 0x21, 0x86, 0x32, 0x10,
	0x23, 0x31, 0x20, 0x46, 0x32, 0x21, 0xc6, 0xb0, 0xb1, 0x44, 0x76, 0x30, 0xe6, 0x90, 0x93, 0xb3,
	0xce, 0xce, 0x50, 0xde, 0x8c, 0xb7, 0x43, 0x8d, 0xea, 0x12, 0x75, 0xb4, 0xbf, 0xdf, 0x72, 0x7f,
	0x5e, 0x7e, 0xfa, 0x4d, 0xb2, 0xf0, 0xe1, 0x55, 0xf0, 0xa3, 0x83, 0x21, 0x2a, 0x4d, 0xa4, 0x37,
	0xed, 0x37, 0x9a, 0x2a, 0x10, 0x26, 0x14, 0xab, 0x2c, 0xaa, 0x9d, 0xb8, 0xfe, 0x65, 0xfc, 0xe4,
	0x79, 0xab, 0x5e, 0xd1, 0x88, 0x1b, 0x7e, 0x1a, 0x34, 0x69, 0xef, 0xad, 0x87, 0xd8, 0x4b, 0x56,
	0xb2, 0xf5, 0xa2, 0x2e, 0x24, 0x6b, 0xe6, 0xdf, 0xe2, 0x8a, 0x2f, 0x23, 0xfc, 0x58, 0x59, 0xec,
	0xe7, 0xe9, 0x2d, 0x6e, 0xf9, 0x79, 0x0f, 0x43, 0x1b, 0xc7, 0xae, 0xb3, 0x31, 0xda, 0x28, 0x17,
	0x19, 0xbc, 0x1c, 0x35, 0x67, 0x3d, 0x0c, 0x6f, 0x79, 0x11, 0xf7, 0xfc, 0x72, 0x46, 0x5b, 0xd2,
	0x09, 0x50, 0x2e, 0x4b, 0xb6, 0x2e, 0x76, 0xfc, 0xe2, 0x9f, 0x37, 0xdb, 0xb1, 0x16, 0x7c, 0x95,
	0x75, 0x47, 0x90, 0x2c, 0x81, 0xae, 0x9f, 0xde, 0x1f, 0x1d, 0xa4, 0xaf, 0xd1, 0x54, 0x1d, 0xf6,
	0x6a, 0x3a, 0x0d, 0xc9, 0xa9, 0x7d, 0x05, 0x67, 0x07, 0x15, 0xcc, 0x9d, 0x43, 0x75, 0x18, 0xc6,
	0x1c, 0x4f, 0x3d, 0x1e, 0xfe, 0x02, 0x00, 0x00, 0xff, 0xff, 0x87, 0xc1, 0x23, 0x72, 0x33, 0x01,
	0x00, 0x00,
}

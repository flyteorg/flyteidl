// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/plugins/qubole.proto

package plugins // import "github.com/lyft/flyteidl/gen/pb-go/flyteidl/plugins"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _ "github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Defines a query to execute on a hive cluster.
type HiveQuery struct {
	Query                string   `protobuf:"bytes,1,opt,name=query,proto3" json:"query,omitempty"`
	TimeoutSec           uint32   `protobuf:"varint,2,opt,name=timeout_sec,json=timeoutSec,proto3" json:"timeout_sec,omitempty"`
	RetryCount           uint32   `protobuf:"varint,3,opt,name=retryCount,proto3" json:"retryCount,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *HiveQuery) Reset()         { *m = HiveQuery{} }
func (m *HiveQuery) String() string { return proto.CompactTextString(m) }
func (*HiveQuery) ProtoMessage()    {}
func (*HiveQuery) Descriptor() ([]byte, []int) {
	return fileDescriptor_qubole_790d55138f42e270, []int{0}
}
func (m *HiveQuery) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_HiveQuery.Unmarshal(m, b)
}
func (m *HiveQuery) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_HiveQuery.Marshal(b, m, deterministic)
}
func (dst *HiveQuery) XXX_Merge(src proto.Message) {
	xxx_messageInfo_HiveQuery.Merge(dst, src)
}
func (m *HiveQuery) XXX_Size() int {
	return xxx_messageInfo_HiveQuery.Size(m)
}
func (m *HiveQuery) XXX_DiscardUnknown() {
	xxx_messageInfo_HiveQuery.DiscardUnknown(m)
}

var xxx_messageInfo_HiveQuery proto.InternalMessageInfo

func (m *HiveQuery) GetQuery() string {
	if m != nil {
		return m.Query
	}
	return ""
}

func (m *HiveQuery) GetTimeoutSec() uint32 {
	if m != nil {
		return m.TimeoutSec
	}
	return 0
}

func (m *HiveQuery) GetRetryCount() uint32 {
	if m != nil {
		return m.RetryCount
	}
	return 0
}

// Defines a collection of hive queries.
type HiveQueryCollection struct {
	Queries              []*HiveQuery `protobuf:"bytes,2,rep,name=queries,proto3" json:"queries,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *HiveQueryCollection) Reset()         { *m = HiveQueryCollection{} }
func (m *HiveQueryCollection) String() string { return proto.CompactTextString(m) }
func (*HiveQueryCollection) ProtoMessage()    {}
func (*HiveQueryCollection) Descriptor() ([]byte, []int) {
	return fileDescriptor_qubole_790d55138f42e270, []int{1}
}
func (m *HiveQueryCollection) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_HiveQueryCollection.Unmarshal(m, b)
}
func (m *HiveQueryCollection) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_HiveQueryCollection.Marshal(b, m, deterministic)
}
func (dst *HiveQueryCollection) XXX_Merge(src proto.Message) {
	xxx_messageInfo_HiveQueryCollection.Merge(dst, src)
}
func (m *HiveQueryCollection) XXX_Size() int {
	return xxx_messageInfo_HiveQueryCollection.Size(m)
}
func (m *HiveQueryCollection) XXX_DiscardUnknown() {
	xxx_messageInfo_HiveQueryCollection.DiscardUnknown(m)
}

var xxx_messageInfo_HiveQueryCollection proto.InternalMessageInfo

func (m *HiveQueryCollection) GetQueries() []*HiveQuery {
	if m != nil {
		return m.Queries
	}
	return nil
}

// This message works with the 'hive' task type in the SDK and is the object that will be in the 'custom' field
// of a hive task's TaskTemplate
type QuboleHiveJob struct {
	ClusterLabel         string               `protobuf:"bytes,1,opt,name=cluster_label,json=clusterLabel,proto3" json:"cluster_label,omitempty"`
	QueryCollection      *HiveQueryCollection `protobuf:"bytes,2,opt,name=query_collection,json=queryCollection,proto3" json:"query_collection,omitempty"`
	Tags                 []string             `protobuf:"bytes,3,rep,name=tags,proto3" json:"tags,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *QuboleHiveJob) Reset()         { *m = QuboleHiveJob{} }
func (m *QuboleHiveJob) String() string { return proto.CompactTextString(m) }
func (*QuboleHiveJob) ProtoMessage()    {}
func (*QuboleHiveJob) Descriptor() ([]byte, []int) {
	return fileDescriptor_qubole_790d55138f42e270, []int{2}
}
func (m *QuboleHiveJob) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_QuboleHiveJob.Unmarshal(m, b)
}
func (m *QuboleHiveJob) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_QuboleHiveJob.Marshal(b, m, deterministic)
}
func (dst *QuboleHiveJob) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QuboleHiveJob.Merge(dst, src)
}
func (m *QuboleHiveJob) XXX_Size() int {
	return xxx_messageInfo_QuboleHiveJob.Size(m)
}
func (m *QuboleHiveJob) XXX_DiscardUnknown() {
	xxx_messageInfo_QuboleHiveJob.DiscardUnknown(m)
}

var xxx_messageInfo_QuboleHiveJob proto.InternalMessageInfo

func (m *QuboleHiveJob) GetClusterLabel() string {
	if m != nil {
		return m.ClusterLabel
	}
	return ""
}

func (m *QuboleHiveJob) GetQueryCollection() *HiveQueryCollection {
	if m != nil {
		return m.QueryCollection
	}
	return nil
}

func (m *QuboleHiveJob) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

func init() {
	proto.RegisterType((*HiveQuery)(nil), "flyteidl.plugins.HiveQuery")
	proto.RegisterType((*HiveQueryCollection)(nil), "flyteidl.plugins.HiveQueryCollection")
	proto.RegisterType((*QuboleHiveJob)(nil), "flyteidl.plugins.QuboleHiveJob")
}

func init() {
	proto.RegisterFile("flyteidl/plugins/qubole.proto", fileDescriptor_qubole_790d55138f42e270)
}

var fileDescriptor_qubole_790d55138f42e270 = []byte{
	// 303 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x91, 0xcf, 0x4a, 0xc3, 0x40,
	0x10, 0xc6, 0x49, 0xe3, 0x1f, 0x3a, 0xb5, 0x58, 0x56, 0x0f, 0x51, 0x51, 0x43, 0x45, 0xc8, 0xc5,
	0x2c, 0xb4, 0xf4, 0x05, 0xec, 0x45, 0xa4, 0x07, 0x1b, 0x6f, 0x5e, 0x4a, 0x77, 0x9d, 0xc6, 0xc5,
	0x6d, 0xb6, 0xcd, 0xce, 0x0a, 0x79, 0x15, 0x9f, 0x56, 0x92, 0xa6, 0x29, 0xe4, 0xe0, 0x6d, 0xf6,
	0xfb, 0x66, 0x98, 0xdf, 0xb7, 0x03, 0xb7, 0x2b, 0x5d, 0x10, 0xaa, 0x4f, 0xcd, 0x37, 0xda, 0xa5,
	0x2a, 0xb3, 0x7c, 0xeb, 0x84, 0xd1, 0x18, 0x6f, 0x72, 0x43, 0x86, 0x0d, 0xf6, 0x76, 0x5c, 0xdb,
	0xd7, 0x57, 0xcd, 0x80, 0x34, 0x39, 0x72, 0x5a, 0xda, 0x6f, 0xbb, 0x6b, 0x1e, 0x0a, 0xe8, 0xbe,
	0xa8, 0x1f, 0x9c, 0x3b, 0xcc, 0x0b, 0x76, 0x09, 0xc7, 0xdb, 0xb2, 0x08, 0xbc, 0xd0, 0x8b, 0xba,
	0xc9, 0xee, 0xc1, 0xee, 0xa1, 0x47, 0x6a, 0x8d, 0xc6, 0xd1, 0xc2, 0xa2, 0x0c, 0x3a, 0xa1, 0x17,
	0xf5, 0x13, 0xa8, 0xa5, 0x77, 0x94, 0xec, 0x0e, 0x20, 0x47, 0xca, 0x8b, 0xa9, 0x71, 0x19, 0x05,
	0xfe, 0xce, 0x3f, 0x28, 0xc3, 0x19, 0x5c, 0x34, 0x3b, 0xa6, 0x46, 0x6b, 0x94, 0xa4, 0x4c, 0xc6,
	0x26, 0x70, 0x5a, 0x2e, 0x50, 0x68, 0x83, 0x4e, 0xe8, 0x47, 0xbd, 0xd1, 0x4d, 0xdc, 0x26, 0x8f,
	0x9b, 0xb9, 0x64, 0xdf, 0x3b, 0xfc, 0xf5, 0xa0, 0x3f, 0xaf, 0xf2, 0x96, 0xe6, 0xab, 0x11, 0xec,
	0x01, 0xfa, 0x52, 0x3b, 0x4b, 0x98, 0x2f, 0xf4, 0x52, 0xa0, 0xae, 0xf1, 0xcf, 0x6a, 0x71, 0x56,
	0x6a, 0xec, 0x0d, 0x06, 0x55, 0x9c, 0x85, 0x6c, 0x08, 0xaa, 0x28, 0xbd, 0xd1, 0xe3, 0x3f, 0x6b,
	0x0f, 0xb8, 0xc9, 0xf9, 0xb6, 0xc5, 0xcf, 0xe0, 0x88, 0x96, 0xa9, 0x0d, 0xfc, 0xd0, 0x8f, 0xba,
	0x49, 0x55, 0x3f, 0x4f, 0x3e, 0xc6, 0xa9, 0xa2, 0x2f, 0x27, 0x62, 0x69, 0xd6, 0x5c, 0x17, 0x2b,
	0xe2, 0xcd, 0xdf, 0xa7, 0x98, 0xf1, 0x8d, 0x78, 0x4a, 0x0d, 0x6f, 0xdf, 0x4f, 0x9c, 0x54, 0xc7,
	0x18, 0xff, 0x05, 0x00, 0x00, 0xff, 0xff, 0x34, 0x01, 0x9e, 0xb1, 0xda, 0x01, 0x00, 0x00,
}

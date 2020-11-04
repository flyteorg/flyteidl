// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/plugins/spark.proto

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

type SparkApplication_Type int32

const (
	SparkApplication_PYTHON SparkApplication_Type = 0
	SparkApplication_JAVA   SparkApplication_Type = 1
	SparkApplication_SCALA  SparkApplication_Type = 2
	SparkApplication_R      SparkApplication_Type = 3
)

var SparkApplication_Type_name = map[int32]string{
	0: "PYTHON",
	1: "JAVA",
	2: "SCALA",
	3: "R",
}

var SparkApplication_Type_value = map[string]int32{
	"PYTHON": 0,
	"JAVA":   1,
	"SCALA":  2,
	"R":      3,
}

func (x SparkApplication_Type) String() string {
	return proto.EnumName(SparkApplication_Type_name, int32(x))
}

func (SparkApplication_Type) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_ca8a069b9820144a, []int{0, 0}
}

type SparkApplication struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SparkApplication) Reset()         { *m = SparkApplication{} }
func (m *SparkApplication) String() string { return proto.CompactTextString(m) }
func (*SparkApplication) ProtoMessage()    {}
func (*SparkApplication) Descriptor() ([]byte, []int) {
	return fileDescriptor_ca8a069b9820144a, []int{0}
}

func (m *SparkApplication) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SparkApplication.Unmarshal(m, b)
}
func (m *SparkApplication) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SparkApplication.Marshal(b, m, deterministic)
}
func (m *SparkApplication) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SparkApplication.Merge(m, src)
}
func (m *SparkApplication) XXX_Size() int {
	return xxx_messageInfo_SparkApplication.Size(m)
}
func (m *SparkApplication) XXX_DiscardUnknown() {
	xxx_messageInfo_SparkApplication.DiscardUnknown(m)
}

var xxx_messageInfo_SparkApplication proto.InternalMessageInfo

// Custom Proto for Spark Plugin.
type SparkJob struct {
	ApplicationType      SparkApplication_Type `protobuf:"varint,1,opt,name=applicationType,proto3,enum=flyteidl.plugins.SparkApplication_Type" json:"applicationType,omitempty"`
	MainApplicationFile  string                `protobuf:"bytes,2,opt,name=mainApplicationFile,proto3" json:"mainApplicationFile,omitempty"`
	MainClass            string                `protobuf:"bytes,3,opt,name=mainClass,proto3" json:"mainClass,omitempty"`
	SparkConf            map[string]string     `protobuf:"bytes,4,rep,name=sparkConf,proto3" json:"sparkConf,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	HadoopConf           map[string]string     `protobuf:"bytes,5,rep,name=hadoopConf,proto3" json:"hadoopConf,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	ExecutorPath         string                `protobuf:"bytes,6,opt,name=executorPath,proto3" json:"executorPath,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *SparkJob) Reset()         { *m = SparkJob{} }
func (m *SparkJob) String() string { return proto.CompactTextString(m) }
func (*SparkJob) ProtoMessage()    {}
func (*SparkJob) Descriptor() ([]byte, []int) {
	return fileDescriptor_ca8a069b9820144a, []int{1}
}

func (m *SparkJob) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SparkJob.Unmarshal(m, b)
}
func (m *SparkJob) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SparkJob.Marshal(b, m, deterministic)
}
func (m *SparkJob) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SparkJob.Merge(m, src)
}
func (m *SparkJob) XXX_Size() int {
	return xxx_messageInfo_SparkJob.Size(m)
}
func (m *SparkJob) XXX_DiscardUnknown() {
	xxx_messageInfo_SparkJob.DiscardUnknown(m)
}

var xxx_messageInfo_SparkJob proto.InternalMessageInfo

func (m *SparkJob) GetApplicationType() SparkApplication_Type {
	if m != nil {
		return m.ApplicationType
	}
	return SparkApplication_PYTHON
}

func (m *SparkJob) GetMainApplicationFile() string {
	if m != nil {
		return m.MainApplicationFile
	}
	return ""
}

func (m *SparkJob) GetMainClass() string {
	if m != nil {
		return m.MainClass
	}
	return ""
}

func (m *SparkJob) GetSparkConf() map[string]string {
	if m != nil {
		return m.SparkConf
	}
	return nil
}

func (m *SparkJob) GetHadoopConf() map[string]string {
	if m != nil {
		return m.HadoopConf
	}
	return nil
}

func (m *SparkJob) GetExecutorPath() string {
	if m != nil {
		return m.ExecutorPath
	}
	return ""
}

func init() {
	proto.RegisterEnum("flyteidl.plugins.SparkApplication_Type", SparkApplication_Type_name, SparkApplication_Type_value)
	proto.RegisterType((*SparkApplication)(nil), "flyteidl.plugins.SparkApplication")
	proto.RegisterType((*SparkJob)(nil), "flyteidl.plugins.SparkJob")
	proto.RegisterMapType((map[string]string)(nil), "flyteidl.plugins.SparkJob.HadoopConfEntry")
	proto.RegisterMapType((map[string]string)(nil), "flyteidl.plugins.SparkJob.SparkConfEntry")
}

func init() { proto.RegisterFile("flyteidl/plugins/spark.proto", fileDescriptor_ca8a069b9820144a) }

var fileDescriptor_ca8a069b9820144a = []byte{
	// 364 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x92, 0x4f, 0x4b, 0xeb, 0x40,
	0x14, 0xc5, 0x5f, 0x9a, 0xa6, 0x34, 0xf7, 0x3d, 0xda, 0x30, 0xcf, 0x45, 0x28, 0x5d, 0x94, 0x6c,
	0xac, 0x82, 0x89, 0xb4, 0x08, 0x22, 0xba, 0x48, 0x8b, 0x5a, 0x82, 0x68, 0x4d, 0x8b, 0xa0, 0xbb,
	0x49, 0x9b, 0xa6, 0xa1, 0xd3, 0xcc, 0x90, 0x4c, 0xc4, 0x7c, 0x5e, 0xbf, 0x88, 0x64, 0x6a, 0xff,
	0x05, 0x15, 0xdc, 0xcd, 0xdc, 0x7b, 0xce, 0xef, 0x1e, 0x2e, 0x17, 0x9a, 0x33, 0x92, 0x71, 0x3f,
	0x9c, 0x12, 0x8b, 0x91, 0x34, 0x08, 0xa3, 0xc4, 0x4a, 0x18, 0x8e, 0x17, 0x26, 0x8b, 0x29, 0xa7,
	0x48, 0x5b, 0x77, 0xcd, 0xcf, 0xae, 0xd1, 0x03, 0x6d, 0x94, 0x0b, 0x6c, 0xc6, 0x48, 0x38, 0xc1,
	0x3c, 0xa4, 0x91, 0x61, 0x42, 0x79, 0x9c, 0x31, 0x1f, 0x01, 0x54, 0x86, 0xcf, 0xe3, 0xc1, 0xc3,
	0xbd, 0xf6, 0x07, 0x55, 0xa1, 0xec, 0xd8, 0x4f, 0xb6, 0x26, 0x21, 0x15, 0x94, 0x51, 0xdf, 0xbe,
	0xb3, 0xb5, 0x12, 0x52, 0x40, 0x72, 0x35, 0xd9, 0x78, 0x97, 0xa1, 0x2a, 0x20, 0x0e, 0xf5, 0xd0,
	0x23, 0xd4, 0xf1, 0x96, 0x95, 0x73, 0x74, 0xa9, 0x25, 0xb5, 0x6b, 0x9d, 0x43, 0xb3, 0x38, 0xdc,
	0x2c, 0x4e, 0x36, 0x73, 0xb9, 0x5b, 0xf4, 0xa3, 0x53, 0xf8, 0xbf, 0xc4, 0x61, 0xb4, 0x23, 0xbc,
	0x09, 0x89, 0xaf, 0x97, 0x5a, 0x52, 0x5b, 0x75, 0xbf, 0x6a, 0xa1, 0x26, 0xa8, 0x79, 0xb9, 0x4f,
	0x70, 0x92, 0xe8, 0xb2, 0xd0, 0x6d, 0x0b, 0xe8, 0x16, 0x54, 0xb1, 0x94, 0x3e, 0x8d, 0x66, 0x7a,
	0xb9, 0x25, 0xb7, 0xff, 0x76, 0x8e, 0xbe, 0x09, 0xe7, 0x50, 0x6f, 0xf5, 0xc8, 0xb5, 0xd7, 0x11,
	0x8f, 0x33, 0x77, 0xeb, 0x45, 0x0e, 0xc0, 0x1c, 0x4f, 0x29, 0x65, 0x82, 0xa4, 0x08, 0xd2, 0xf1,
	0x0f, 0xa4, 0xc1, 0x46, 0xbc, 0x42, 0xed, 0xb8, 0x91, 0x01, 0xff, 0xfc, 0x37, 0x7f, 0x92, 0x72,
	0x1a, 0x0f, 0x31, 0x9f, 0xeb, 0x15, 0x91, 0x7a, 0xaf, 0xd6, 0xb8, 0x84, 0xda, 0x7e, 0x18, 0xa4,
	0x81, 0xbc, 0xf0, 0x33, 0xb1, 0x61, 0xd5, 0xcd, 0x9f, 0xe8, 0x00, 0x94, 0x57, 0x4c, 0xd2, 0xf5,
	0x7a, 0x56, 0x9f, 0x8b, 0xd2, 0xb9, 0xd4, 0xb8, 0x82, 0x7a, 0x21, 0xc0, 0x6f, 0xec, 0xbd, 0xb3,
	0x97, 0x6e, 0x10, 0xf2, 0x79, 0xea, 0x99, 0x13, 0xba, 0xb4, 0x48, 0x36, 0xe3, 0xd6, 0xe6, 0xd6,
	0x02, 0x3f, 0xb2, 0x98, 0x77, 0x12, 0x50, 0xab, 0x78, 0x7e, 0x5e, 0x45, 0x5c, 0x5e, 0xf7, 0x23,
	0x00, 0x00, 0xff, 0xff, 0xaa, 0x2b, 0x1f, 0x5a, 0x99, 0x02, 0x00, 0x00,
}
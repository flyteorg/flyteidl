// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/admin/project.proto

package admin

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

// The state of the project is used to control its visibility in the UI and validity.
type Project_ProjectState int32

const (
	// By default, all projects are considered active.
	Project_ACTIVE Project_ProjectState = 0
	// Archived projects are no longer visible in the UI and no longer valid.
	Project_ARCHIVED Project_ProjectState = 1
	// System generated projects that aren't explicitly created or managed by a user.
	Project_SYSTEM_GENERATED Project_ProjectState = 2
)

var Project_ProjectState_name = map[int32]string{
	0: "ACTIVE",
	1: "ARCHIVED",
	2: "SYSTEM_GENERATED",
}

var Project_ProjectState_value = map[string]int32{
	"ACTIVE":           0,
	"ARCHIVED":         1,
	"SYSTEM_GENERATED": 2,
}

func (x Project_ProjectState) String() string {
	return proto.EnumName(Project_ProjectState_name, int32(x))
}

func (Project_ProjectState) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_2db065ce03bf106d, []int{1, 0}
}

// Namespace within a project commonly used to differentiate between different service instances.
// e.g. "production", "development", etc.
type Domain struct {
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Display name.
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Domain) Reset()         { *m = Domain{} }
func (m *Domain) String() string { return proto.CompactTextString(m) }
func (*Domain) ProtoMessage()    {}
func (*Domain) Descriptor() ([]byte, []int) {
	return fileDescriptor_2db065ce03bf106d, []int{0}
}

func (m *Domain) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Domain.Unmarshal(m, b)
}
func (m *Domain) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Domain.Marshal(b, m, deterministic)
}
func (m *Domain) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Domain.Merge(m, src)
}
func (m *Domain) XXX_Size() int {
	return xxx_messageInfo_Domain.Size(m)
}
func (m *Domain) XXX_DiscardUnknown() {
	xxx_messageInfo_Domain.DiscardUnknown(m)
}

var xxx_messageInfo_Domain proto.InternalMessageInfo

func (m *Domain) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Domain) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

// Top-level namespace used to classify different entities like workflows and executions.
type Project struct {
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Display name.
	Name        string    `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Domains     []*Domain `protobuf:"bytes,3,rep,name=domains,proto3" json:"domains,omitempty"`
	Description string    `protobuf:"bytes,4,opt,name=description,proto3" json:"description,omitempty"`
	// Leverage Labels from flyteidel.admin.common.proto to
	// tag projects with ownership information.
	Labels               *Labels              `protobuf:"bytes,5,opt,name=labels,proto3" json:"labels,omitempty"`
	State                Project_ProjectState `protobuf:"varint,6,opt,name=state,proto3,enum=flyteidl.admin.Project_ProjectState" json:"state,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *Project) Reset()         { *m = Project{} }
func (m *Project) String() string { return proto.CompactTextString(m) }
func (*Project) ProtoMessage()    {}
func (*Project) Descriptor() ([]byte, []int) {
	return fileDescriptor_2db065ce03bf106d, []int{1}
}

func (m *Project) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Project.Unmarshal(m, b)
}
func (m *Project) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Project.Marshal(b, m, deterministic)
}
func (m *Project) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Project.Merge(m, src)
}
func (m *Project) XXX_Size() int {
	return xxx_messageInfo_Project.Size(m)
}
func (m *Project) XXX_DiscardUnknown() {
	xxx_messageInfo_Project.DiscardUnknown(m)
}

var xxx_messageInfo_Project proto.InternalMessageInfo

func (m *Project) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Project) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Project) GetDomains() []*Domain {
	if m != nil {
		return m.Domains
	}
	return nil
}

func (m *Project) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Project) GetLabels() *Labels {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *Project) GetState() Project_ProjectState {
	if m != nil {
		return m.State
	}
	return Project_ACTIVE
}

type Projects struct {
	Projects             []*Project `protobuf:"bytes,1,rep,name=projects,proto3" json:"projects,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *Projects) Reset()         { *m = Projects{} }
func (m *Projects) String() string { return proto.CompactTextString(m) }
func (*Projects) ProtoMessage()    {}
func (*Projects) Descriptor() ([]byte, []int) {
	return fileDescriptor_2db065ce03bf106d, []int{2}
}

func (m *Projects) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Projects.Unmarshal(m, b)
}
func (m *Projects) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Projects.Marshal(b, m, deterministic)
}
func (m *Projects) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Projects.Merge(m, src)
}
func (m *Projects) XXX_Size() int {
	return xxx_messageInfo_Projects.Size(m)
}
func (m *Projects) XXX_DiscardUnknown() {
	xxx_messageInfo_Projects.DiscardUnknown(m)
}

var xxx_messageInfo_Projects proto.InternalMessageInfo

func (m *Projects) GetProjects() []*Project {
	if m != nil {
		return m.Projects
	}
	return nil
}

type ProjectListRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ProjectListRequest) Reset()         { *m = ProjectListRequest{} }
func (m *ProjectListRequest) String() string { return proto.CompactTextString(m) }
func (*ProjectListRequest) ProtoMessage()    {}
func (*ProjectListRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2db065ce03bf106d, []int{3}
}

func (m *ProjectListRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ProjectListRequest.Unmarshal(m, b)
}
func (m *ProjectListRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ProjectListRequest.Marshal(b, m, deterministic)
}
func (m *ProjectListRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProjectListRequest.Merge(m, src)
}
func (m *ProjectListRequest) XXX_Size() int {
	return xxx_messageInfo_ProjectListRequest.Size(m)
}
func (m *ProjectListRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ProjectListRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ProjectListRequest proto.InternalMessageInfo

type ProjectRegisterRequest struct {
	Project              *Project `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ProjectRegisterRequest) Reset()         { *m = ProjectRegisterRequest{} }
func (m *ProjectRegisterRequest) String() string { return proto.CompactTextString(m) }
func (*ProjectRegisterRequest) ProtoMessage()    {}
func (*ProjectRegisterRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2db065ce03bf106d, []int{4}
}

func (m *ProjectRegisterRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ProjectRegisterRequest.Unmarshal(m, b)
}
func (m *ProjectRegisterRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ProjectRegisterRequest.Marshal(b, m, deterministic)
}
func (m *ProjectRegisterRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProjectRegisterRequest.Merge(m, src)
}
func (m *ProjectRegisterRequest) XXX_Size() int {
	return xxx_messageInfo_ProjectRegisterRequest.Size(m)
}
func (m *ProjectRegisterRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ProjectRegisterRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ProjectRegisterRequest proto.InternalMessageInfo

func (m *ProjectRegisterRequest) GetProject() *Project {
	if m != nil {
		return m.Project
	}
	return nil
}

type ProjectRegisterResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ProjectRegisterResponse) Reset()         { *m = ProjectRegisterResponse{} }
func (m *ProjectRegisterResponse) String() string { return proto.CompactTextString(m) }
func (*ProjectRegisterResponse) ProtoMessage()    {}
func (*ProjectRegisterResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_2db065ce03bf106d, []int{5}
}

func (m *ProjectRegisterResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ProjectRegisterResponse.Unmarshal(m, b)
}
func (m *ProjectRegisterResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ProjectRegisterResponse.Marshal(b, m, deterministic)
}
func (m *ProjectRegisterResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProjectRegisterResponse.Merge(m, src)
}
func (m *ProjectRegisterResponse) XXX_Size() int {
	return xxx_messageInfo_ProjectRegisterResponse.Size(m)
}
func (m *ProjectRegisterResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ProjectRegisterResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ProjectRegisterResponse proto.InternalMessageInfo

type ProjectUpdateResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ProjectUpdateResponse) Reset()         { *m = ProjectUpdateResponse{} }
func (m *ProjectUpdateResponse) String() string { return proto.CompactTextString(m) }
func (*ProjectUpdateResponse) ProtoMessage()    {}
func (*ProjectUpdateResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_2db065ce03bf106d, []int{6}
}

func (m *ProjectUpdateResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ProjectUpdateResponse.Unmarshal(m, b)
}
func (m *ProjectUpdateResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ProjectUpdateResponse.Marshal(b, m, deterministic)
}
func (m *ProjectUpdateResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProjectUpdateResponse.Merge(m, src)
}
func (m *ProjectUpdateResponse) XXX_Size() int {
	return xxx_messageInfo_ProjectUpdateResponse.Size(m)
}
func (m *ProjectUpdateResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ProjectUpdateResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ProjectUpdateResponse proto.InternalMessageInfo

func init() {
	proto.RegisterEnum("flyteidl.admin.Project_ProjectState", Project_ProjectState_name, Project_ProjectState_value)
	proto.RegisterType((*Domain)(nil), "flyteidl.admin.Domain")
	proto.RegisterType((*Project)(nil), "flyteidl.admin.Project")
	proto.RegisterType((*Projects)(nil), "flyteidl.admin.Projects")
	proto.RegisterType((*ProjectListRequest)(nil), "flyteidl.admin.ProjectListRequest")
	proto.RegisterType((*ProjectRegisterRequest)(nil), "flyteidl.admin.ProjectRegisterRequest")
	proto.RegisterType((*ProjectRegisterResponse)(nil), "flyteidl.admin.ProjectRegisterResponse")
	proto.RegisterType((*ProjectUpdateResponse)(nil), "flyteidl.admin.ProjectUpdateResponse")
}

func init() { proto.RegisterFile("flyteidl/admin/project.proto", fileDescriptor_2db065ce03bf106d) }

var fileDescriptor_2db065ce03bf106d = []byte{
	// 393 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x92, 0xcb, 0xaf, 0xd2, 0x40,
	0x14, 0xc6, 0x6d, 0xef, 0xbd, 0x05, 0xcf, 0x25, 0xa4, 0x99, 0x20, 0xd4, 0xc7, 0xa2, 0x99, 0xb8,
	0x60, 0xa1, 0xad, 0xc0, 0xce, 0x85, 0x06, 0xa1, 0x51, 0x22, 0x1a, 0x33, 0x20, 0x89, 0x6e, 0x4c,
	0x1f, 0x43, 0x1d, 0xd3, 0x76, 0x6a, 0x67, 0x58, 0xf0, 0x47, 0xf9, 0x3f, 0x1a, 0xa6, 0x53, 0x02,
	0xf8, 0xc8, 0x5d, 0xb5, 0xf9, 0xbe, 0xdf, 0xf9, 0xce, 0xcc, 0x9c, 0x03, 0x4f, 0xb6, 0xd9, 0x5e,
	0x52, 0x96, 0x64, 0x7e, 0x98, 0xe4, 0xac, 0xf0, 0xcb, 0x8a, 0xff, 0xa0, 0xb1, 0xf4, 0xca, 0x8a,
	0x4b, 0x8e, 0xba, 0x8d, 0xeb, 0x29, 0xf7, 0xd1, 0xe3, 0x0b, 0x3a, 0xe6, 0x79, 0xce, 0x8b, 0x1a,
	0xc6, 0xcf, 0xc0, 0x9a, 0xf3, 0x3c, 0x64, 0x05, 0xea, 0x82, 0xc9, 0x12, 0xc7, 0x70, 0x8d, 0xe1,
	0x7d, 0x62, 0xb2, 0x04, 0x21, 0xb8, 0x2e, 0xc2, 0x9c, 0x3a, 0xa6, 0x52, 0xd4, 0x3f, 0xfe, 0x65,
	0x42, 0xeb, 0x53, 0xdd, 0xec, 0x2e, 0x3c, 0x7a, 0x01, 0xad, 0x44, 0xa5, 0x0b, 0xe7, 0xca, 0xbd,
	0x1a, 0xde, 0x8e, 0xfb, 0xde, 0xf9, 0xe1, 0xbc, 0xba, 0x39, 0x69, 0x30, 0xe4, 0xc2, 0x6d, 0x42,
	0x45, 0x5c, 0xb1, 0x52, 0x32, 0x5e, 0x38, 0xd7, 0x2a, 0xec, 0x54, 0x42, 0x1e, 0x58, 0x59, 0x18,
	0xd1, 0x4c, 0x38, 0x37, 0xae, 0xf1, 0xb7, 0xc8, 0xa5, 0x72, 0x89, 0xa6, 0xd0, 0x4b, 0xb8, 0x11,
	0x32, 0x94, 0xd4, 0xb1, 0x5c, 0x63, 0xd8, 0x1d, 0x3f, 0xbd, 0xc4, 0xf5, 0x7d, 0x9a, 0xef, 0xea,
	0xc0, 0x92, 0xba, 0x04, 0xbf, 0x82, 0xce, 0xa9, 0x8c, 0x00, 0xac, 0xe9, 0x6c, 0xbd, 0xd8, 0x04,
	0xf6, 0x3d, 0xd4, 0x81, 0xf6, 0x94, 0xcc, 0xde, 0x2d, 0x36, 0xc1, 0xdc, 0x36, 0x50, 0x0f, 0xec,
	0xd5, 0x97, 0xd5, 0x3a, 0xf8, 0xf0, 0xed, 0x6d, 0xf0, 0x31, 0x20, 0xd3, 0x75, 0x30, 0xb7, 0x4d,
	0xfc, 0x1a, 0xda, 0xba, 0x5e, 0xa0, 0x09, 0xb4, 0xf5, 0x9c, 0x84, 0x63, 0xa8, 0xc7, 0x18, 0xfc,
	0xe3, 0x28, 0xe4, 0x08, 0xe2, 0x1e, 0x20, 0x2d, 0x2e, 0x99, 0x90, 0x84, 0xfe, 0xdc, 0x51, 0x21,
	0xf1, 0x7b, 0xe8, 0x37, 0x28, 0x4d, 0x99, 0x90, 0xb4, 0xd2, 0x0e, 0x1a, 0x41, 0x4b, 0xd7, 0xaa,
	0xc9, 0xfc, 0xa7, 0x47, 0xc3, 0xe1, 0x87, 0x30, 0xf8, 0x23, 0x4c, 0x94, 0xbc, 0x10, 0x14, 0x0f,
	0xe0, 0x81, 0xb6, 0x3e, 0x97, 0xc9, 0xe1, 0x59, 0xb4, 0xf1, 0x66, 0xf2, 0x75, 0x94, 0x32, 0xf9,
	0x7d, 0x17, 0x79, 0x31, 0xcf, 0xfd, 0x6c, 0xbf, 0x95, 0xfe, 0x71, 0xc9, 0x52, 0x5a, 0xf8, 0x65,
	0xf4, 0x3c, 0xe5, 0xfe, 0xf9, 0xde, 0x45, 0x96, 0xda, 0xb8, 0xc9, 0xef, 0x00, 0x00, 0x00, 0xff,
	0xff, 0xb9, 0x0e, 0xa4, 0x8b, 0xbe, 0x02, 0x00, 0x00,
}
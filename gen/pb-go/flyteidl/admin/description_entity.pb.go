// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/admin/description_entity.proto

package admin

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

type LongDescription_DescriptionFormat int32

const (
	LongDescription_UNKNOWN  LongDescription_DescriptionFormat = 0
	LongDescription_MARKDOWN LongDescription_DescriptionFormat = 1
	LongDescription_HTML     LongDescription_DescriptionFormat = 2
	// python default documentation - comments is rst
	LongDescription_RST LongDescription_DescriptionFormat = 3
)

var LongDescription_DescriptionFormat_name = map[int32]string{
	0: "UNKNOWN",
	1: "MARKDOWN",
	2: "HTML",
	3: "RST",
}

var LongDescription_DescriptionFormat_value = map[string]int32{
	"UNKNOWN":  0,
	"MARKDOWN": 1,
	"HTML":     2,
	"RST":      3,
}

func (x LongDescription_DescriptionFormat) String() string {
	return proto.EnumName(LongDescription_DescriptionFormat_name, int32(x))
}

func (LongDescription_DescriptionFormat) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_2715f55631fe48ea, []int{1, 0}
}

// DescriptionEntity contains detailed description for the task/workflow/launch plan.
// Documentation could provide insight into the algorithms, business use case, etc.
type DescriptionEntity struct {
	// One-liner overview of the entity.
	ShortDescription string `protobuf:"bytes,1,opt,name=short_description,json=shortDescription,proto3" json:"short_description,omitempty"`
	// Full user description with formatting preserved.
	LongDescription *LongDescription `protobuf:"bytes,2,opt,name=long_description,json=longDescription,proto3" json:"long_description,omitempty"`
	// Optional link to source code used to define this entity.
	SourceCode *SourceCode `protobuf:"bytes,3,opt,name=source_code,json=sourceCode,proto3" json:"source_code,omitempty"`
	// User-specified tags. These are arbitrary and can be used for searching
	// filtering and discovering tasks.
	Tags                 []string `protobuf:"bytes,4,rep,name=tags,proto3" json:"tags,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DescriptionEntity) Reset()         { *m = DescriptionEntity{} }
func (m *DescriptionEntity) String() string { return proto.CompactTextString(m) }
func (*DescriptionEntity) ProtoMessage()    {}
func (*DescriptionEntity) Descriptor() ([]byte, []int) {
	return fileDescriptor_2715f55631fe48ea, []int{0}
}

func (m *DescriptionEntity) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DescriptionEntity.Unmarshal(m, b)
}
func (m *DescriptionEntity) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DescriptionEntity.Marshal(b, m, deterministic)
}
func (m *DescriptionEntity) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DescriptionEntity.Merge(m, src)
}
func (m *DescriptionEntity) XXX_Size() int {
	return xxx_messageInfo_DescriptionEntity.Size(m)
}
func (m *DescriptionEntity) XXX_DiscardUnknown() {
	xxx_messageInfo_DescriptionEntity.DiscardUnknown(m)
}

var xxx_messageInfo_DescriptionEntity proto.InternalMessageInfo

func (m *DescriptionEntity) GetShortDescription() string {
	if m != nil {
		return m.ShortDescription
	}
	return ""
}

func (m *DescriptionEntity) GetLongDescription() *LongDescription {
	if m != nil {
		return m.LongDescription
	}
	return nil
}

func (m *DescriptionEntity) GetSourceCode() *SourceCode {
	if m != nil {
		return m.SourceCode
	}
	return nil
}

func (m *DescriptionEntity) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

// Full user description with formatting preserved. This can be rendered
// by clients, such as the console or command line tools with in-tact
// formatting.
type LongDescription struct {
	// Types that are valid to be assigned to Content:
	//	*LongDescription_Value
	//	*LongDescription_Uri
	Content isLongDescription_Content `protobuf_oneof:"content"`
	// Format of the long description
	Format LongDescription_DescriptionFormat `protobuf:"varint,3,opt,name=format,proto3,enum=flyteidl.admin.LongDescription_DescriptionFormat" json:"format,omitempty"`
	// Optional link to an icon for the entity
	IconLink             string   `protobuf:"bytes,4,opt,name=icon_link,json=iconLink,proto3" json:"icon_link,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LongDescription) Reset()         { *m = LongDescription{} }
func (m *LongDescription) String() string { return proto.CompactTextString(m) }
func (*LongDescription) ProtoMessage()    {}
func (*LongDescription) Descriptor() ([]byte, []int) {
	return fileDescriptor_2715f55631fe48ea, []int{1}
}

func (m *LongDescription) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LongDescription.Unmarshal(m, b)
}
func (m *LongDescription) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LongDescription.Marshal(b, m, deterministic)
}
func (m *LongDescription) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LongDescription.Merge(m, src)
}
func (m *LongDescription) XXX_Size() int {
	return xxx_messageInfo_LongDescription.Size(m)
}
func (m *LongDescription) XXX_DiscardUnknown() {
	xxx_messageInfo_LongDescription.DiscardUnknown(m)
}

var xxx_messageInfo_LongDescription proto.InternalMessageInfo

type isLongDescription_Content interface {
	isLongDescription_Content()
}

type LongDescription_Value struct {
	Value string `protobuf:"bytes,1,opt,name=value,proto3,oneof"`
}

type LongDescription_Uri struct {
	Uri string `protobuf:"bytes,2,opt,name=uri,proto3,oneof"`
}

func (*LongDescription_Value) isLongDescription_Content() {}

func (*LongDescription_Uri) isLongDescription_Content() {}

func (m *LongDescription) GetContent() isLongDescription_Content {
	if m != nil {
		return m.Content
	}
	return nil
}

func (m *LongDescription) GetValue() string {
	if x, ok := m.GetContent().(*LongDescription_Value); ok {
		return x.Value
	}
	return ""
}

func (m *LongDescription) GetUri() string {
	if x, ok := m.GetContent().(*LongDescription_Uri); ok {
		return x.Uri
	}
	return ""
}

func (m *LongDescription) GetFormat() LongDescription_DescriptionFormat {
	if m != nil {
		return m.Format
	}
	return LongDescription_UNKNOWN
}

func (m *LongDescription) GetIconLink() string {
	if m != nil {
		return m.IconLink
	}
	return ""
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*LongDescription) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*LongDescription_Value)(nil),
		(*LongDescription_Uri)(nil),
	}
}

// Link to source code used to define this entity
type SourceCode struct {
	Link                 string   `protobuf:"bytes,1,opt,name=link,proto3" json:"link,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SourceCode) Reset()         { *m = SourceCode{} }
func (m *SourceCode) String() string { return proto.CompactTextString(m) }
func (*SourceCode) ProtoMessage()    {}
func (*SourceCode) Descriptor() ([]byte, []int) {
	return fileDescriptor_2715f55631fe48ea, []int{2}
}

func (m *SourceCode) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SourceCode.Unmarshal(m, b)
}
func (m *SourceCode) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SourceCode.Marshal(b, m, deterministic)
}
func (m *SourceCode) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SourceCode.Merge(m, src)
}
func (m *SourceCode) XXX_Size() int {
	return xxx_messageInfo_SourceCode.Size(m)
}
func (m *SourceCode) XXX_DiscardUnknown() {
	xxx_messageInfo_SourceCode.DiscardUnknown(m)
}

var xxx_messageInfo_SourceCode proto.InternalMessageInfo

func (m *SourceCode) GetLink() string {
	if m != nil {
		return m.Link
	}
	return ""
}

// Encapsulation of fields that uniquely identifies a Flyte description entity
type DescriptionEntityIdentifier struct {
	// Identifies the specific type of resource that this identifier corresponds to.
	ResourceType core.ResourceType `protobuf:"varint,1,opt,name=resource_type,json=resourceType,proto3,enum=flyteidl.core.ResourceType" json:"resource_type,omitempty"`
	// Name of the project the resource belongs to.
	Project string `protobuf:"bytes,2,opt,name=project,proto3" json:"project,omitempty"`
	// Name of the domain the resource belongs to.
	// A domain can be considered as a subset within a specific project.
	Domain string `protobuf:"bytes,3,opt,name=domain,proto3" json:"domain,omitempty"`
	// User or system provided value for the resource.
	Name                 string   `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DescriptionEntityIdentifier) Reset()         { *m = DescriptionEntityIdentifier{} }
func (m *DescriptionEntityIdentifier) String() string { return proto.CompactTextString(m) }
func (*DescriptionEntityIdentifier) ProtoMessage()    {}
func (*DescriptionEntityIdentifier) Descriptor() ([]byte, []int) {
	return fileDescriptor_2715f55631fe48ea, []int{3}
}

func (m *DescriptionEntityIdentifier) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DescriptionEntityIdentifier.Unmarshal(m, b)
}
func (m *DescriptionEntityIdentifier) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DescriptionEntityIdentifier.Marshal(b, m, deterministic)
}
func (m *DescriptionEntityIdentifier) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DescriptionEntityIdentifier.Merge(m, src)
}
func (m *DescriptionEntityIdentifier) XXX_Size() int {
	return xxx_messageInfo_DescriptionEntityIdentifier.Size(m)
}
func (m *DescriptionEntityIdentifier) XXX_DiscardUnknown() {
	xxx_messageInfo_DescriptionEntityIdentifier.DiscardUnknown(m)
}

var xxx_messageInfo_DescriptionEntityIdentifier proto.InternalMessageInfo

func (m *DescriptionEntityIdentifier) GetResourceType() core.ResourceType {
	if m != nil {
		return m.ResourceType
	}
	return core.ResourceType_UNSPECIFIED
}

func (m *DescriptionEntityIdentifier) GetProject() string {
	if m != nil {
		return m.Project
	}
	return ""
}

func (m *DescriptionEntityIdentifier) GetDomain() string {
	if m != nil {
		return m.Domain
	}
	return ""
}

func (m *DescriptionEntityIdentifier) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

// Represents a request structure to create a revision of a description entity.
// See :ref:`ref_flyteidl.admin.DescriptionEntity` for more details
type DescriptionEntityCreateRequest struct {
	// id represents the unique identifier of the description entity.
	// +required
	Id *core.Identifier `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Represents the specification for Description.
	// +required
	DescriptionEntity    *DescriptionEntity `protobuf:"bytes,2,opt,name=description_entity,json=descriptionEntity,proto3" json:"description_entity,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *DescriptionEntityCreateRequest) Reset()         { *m = DescriptionEntityCreateRequest{} }
func (m *DescriptionEntityCreateRequest) String() string { return proto.CompactTextString(m) }
func (*DescriptionEntityCreateRequest) ProtoMessage()    {}
func (*DescriptionEntityCreateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2715f55631fe48ea, []int{4}
}

func (m *DescriptionEntityCreateRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DescriptionEntityCreateRequest.Unmarshal(m, b)
}
func (m *DescriptionEntityCreateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DescriptionEntityCreateRequest.Marshal(b, m, deterministic)
}
func (m *DescriptionEntityCreateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DescriptionEntityCreateRequest.Merge(m, src)
}
func (m *DescriptionEntityCreateRequest) XXX_Size() int {
	return xxx_messageInfo_DescriptionEntityCreateRequest.Size(m)
}
func (m *DescriptionEntityCreateRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DescriptionEntityCreateRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DescriptionEntityCreateRequest proto.InternalMessageInfo

func (m *DescriptionEntityCreateRequest) GetId() *core.Identifier {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *DescriptionEntityCreateRequest) GetDescriptionEntity() *DescriptionEntity {
	if m != nil {
		return m.DescriptionEntity
	}
	return nil
}

// Represents a response structure if description entity creation succeeds.
type DescriptionEntityCreateResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DescriptionEntityCreateResponse) Reset()         { *m = DescriptionEntityCreateResponse{} }
func (m *DescriptionEntityCreateResponse) String() string { return proto.CompactTextString(m) }
func (*DescriptionEntityCreateResponse) ProtoMessage()    {}
func (*DescriptionEntityCreateResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_2715f55631fe48ea, []int{5}
}

func (m *DescriptionEntityCreateResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DescriptionEntityCreateResponse.Unmarshal(m, b)
}
func (m *DescriptionEntityCreateResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DescriptionEntityCreateResponse.Marshal(b, m, deterministic)
}
func (m *DescriptionEntityCreateResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DescriptionEntityCreateResponse.Merge(m, src)
}
func (m *DescriptionEntityCreateResponse) XXX_Size() int {
	return xxx_messageInfo_DescriptionEntityCreateResponse.Size(m)
}
func (m *DescriptionEntityCreateResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_DescriptionEntityCreateResponse.DiscardUnknown(m)
}

var xxx_messageInfo_DescriptionEntityCreateResponse proto.InternalMessageInfo

// Represents a list of DescriptionEntities returned from the admin.
// See :ref:`ref_flyteidl.admin.DescriptionEntity` for more details
type DescriptionEntityList struct {
	// A list of DescriptionEntities returned based on the request.
	DescriptionEntities []*DescriptionEntity `protobuf:"bytes,1,rep,name=descriptionEntities,proto3" json:"descriptionEntities,omitempty"`
	// In the case of multiple pages of results, the server-provided token can be used to fetch the next page
	// in a query. If there are no more results, this value will be empty.
	Token                string   `protobuf:"bytes,2,opt,name=token,proto3" json:"token,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DescriptionEntityList) Reset()         { *m = DescriptionEntityList{} }
func (m *DescriptionEntityList) String() string { return proto.CompactTextString(m) }
func (*DescriptionEntityList) ProtoMessage()    {}
func (*DescriptionEntityList) Descriptor() ([]byte, []int) {
	return fileDescriptor_2715f55631fe48ea, []int{6}
}

func (m *DescriptionEntityList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DescriptionEntityList.Unmarshal(m, b)
}
func (m *DescriptionEntityList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DescriptionEntityList.Marshal(b, m, deterministic)
}
func (m *DescriptionEntityList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DescriptionEntityList.Merge(m, src)
}
func (m *DescriptionEntityList) XXX_Size() int {
	return xxx_messageInfo_DescriptionEntityList.Size(m)
}
func (m *DescriptionEntityList) XXX_DiscardUnknown() {
	xxx_messageInfo_DescriptionEntityList.DiscardUnknown(m)
}

var xxx_messageInfo_DescriptionEntityList proto.InternalMessageInfo

func (m *DescriptionEntityList) GetDescriptionEntities() []*DescriptionEntity {
	if m != nil {
		return m.DescriptionEntities
	}
	return nil
}

func (m *DescriptionEntityList) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

// Represents a request structure to retrieve a list of DescriptionEntities.
// See :ref:`ref_flyteidl.admin.DescriptionEntity` for more details
type DescriptionEntityListRequest struct {
	// Indicates the node execution to filter by.
	// +required
	DescriptionEntityId *DescriptionEntityIdentifier `protobuf:"bytes,1,opt,name=description_entity_id,json=descriptionEntityId,proto3" json:"description_entity_id,omitempty"`
	// Indicates the number of resources to be returned.
	// +required
	Limit uint32 `protobuf:"varint,2,opt,name=limit,proto3" json:"limit,omitempty"`
	// In the case of multiple pages of results, the server-provided token can be used to fetch the next page
	// in a query.
	// +optional
	Token string `protobuf:"bytes,3,opt,name=token,proto3" json:"token,omitempty"`
	// Indicates a list of filters passed as string.
	// More info on constructing filters : <Link>
	// +optional
	Filters string `protobuf:"bytes,4,opt,name=filters,proto3" json:"filters,omitempty"`
	// Sort ordering for returned list.
	// +optional
	SortBy               *Sort    `protobuf:"bytes,5,opt,name=sort_by,json=sortBy,proto3" json:"sort_by,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DescriptionEntityListRequest) Reset()         { *m = DescriptionEntityListRequest{} }
func (m *DescriptionEntityListRequest) String() string { return proto.CompactTextString(m) }
func (*DescriptionEntityListRequest) ProtoMessage()    {}
func (*DescriptionEntityListRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_2715f55631fe48ea, []int{7}
}

func (m *DescriptionEntityListRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DescriptionEntityListRequest.Unmarshal(m, b)
}
func (m *DescriptionEntityListRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DescriptionEntityListRequest.Marshal(b, m, deterministic)
}
func (m *DescriptionEntityListRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DescriptionEntityListRequest.Merge(m, src)
}
func (m *DescriptionEntityListRequest) XXX_Size() int {
	return xxx_messageInfo_DescriptionEntityListRequest.Size(m)
}
func (m *DescriptionEntityListRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DescriptionEntityListRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DescriptionEntityListRequest proto.InternalMessageInfo

func (m *DescriptionEntityListRequest) GetDescriptionEntityId() *DescriptionEntityIdentifier {
	if m != nil {
		return m.DescriptionEntityId
	}
	return nil
}

func (m *DescriptionEntityListRequest) GetLimit() uint32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func (m *DescriptionEntityListRequest) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func (m *DescriptionEntityListRequest) GetFilters() string {
	if m != nil {
		return m.Filters
	}
	return ""
}

func (m *DescriptionEntityListRequest) GetSortBy() *Sort {
	if m != nil {
		return m.SortBy
	}
	return nil
}

func init() {
	proto.RegisterEnum("flyteidl.admin.LongDescription_DescriptionFormat", LongDescription_DescriptionFormat_name, LongDescription_DescriptionFormat_value)
	proto.RegisterType((*DescriptionEntity)(nil), "flyteidl.admin.DescriptionEntity")
	proto.RegisterType((*LongDescription)(nil), "flyteidl.admin.LongDescription")
	proto.RegisterType((*SourceCode)(nil), "flyteidl.admin.SourceCode")
	proto.RegisterType((*DescriptionEntityIdentifier)(nil), "flyteidl.admin.DescriptionEntityIdentifier")
	proto.RegisterType((*DescriptionEntityCreateRequest)(nil), "flyteidl.admin.DescriptionEntityCreateRequest")
	proto.RegisterType((*DescriptionEntityCreateResponse)(nil), "flyteidl.admin.DescriptionEntityCreateResponse")
	proto.RegisterType((*DescriptionEntityList)(nil), "flyteidl.admin.DescriptionEntityList")
	proto.RegisterType((*DescriptionEntityListRequest)(nil), "flyteidl.admin.DescriptionEntityListRequest")
}

func init() {
	proto.RegisterFile("flyteidl/admin/description_entity.proto", fileDescriptor_2715f55631fe48ea)
}

var fileDescriptor_2715f55631fe48ea = []byte{
	// 659 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x54, 0xcd, 0x4e, 0xdb, 0x4a,
	0x14, 0xc6, 0x49, 0x48, 0xc8, 0x09, 0x3f, 0x61, 0x2e, 0x20, 0x5f, 0x72, 0x05, 0xc1, 0x9b, 0xcb,
	0x15, 0xc2, 0xd6, 0x4d, 0x55, 0x75, 0xd1, 0x4d, 0xf9, 0x69, 0x05, 0x25, 0xd0, 0x6a, 0x42, 0x55,
	0xa9, 0x9b, 0xc8, 0xb1, 0x27, 0x66, 0x8a, 0x3d, 0xe3, 0x8e, 0x27, 0x95, 0xbc, 0xed, 0x7b, 0x74,
	0xd9, 0xc7, 0xea, 0x53, 0xb4, 0x0f, 0x50, 0x79, 0xec, 0x24, 0x8e, 0x4d, 0x45, 0x77, 0xf3, 0x8d,
	0xbf, 0x73, 0xce, 0x37, 0xdf, 0x39, 0x3e, 0xf0, 0xef, 0xd8, 0x8f, 0x25, 0xa1, 0xae, 0x6f, 0xd9,
	0x6e, 0x40, 0x99, 0xe5, 0x92, 0xc8, 0x11, 0x34, 0x94, 0x94, 0xb3, 0x21, 0x61, 0x92, 0xca, 0xd8,
	0x0c, 0x05, 0x97, 0x1c, 0xad, 0x4f, 0x89, 0xa6, 0x22, 0xee, 0xee, 0xcd, 0x02, 0x1d, 0x2e, 0x88,
	0x45, 0xdd, 0x84, 0x3d, 0xa6, 0x44, 0xa4, 0xfc, 0xdd, 0x4e, 0x21, 0xb1, 0xc3, 0x83, 0x80, 0xb3,
	0xf4, 0xa3, 0xf1, 0x5d, 0x83, 0xcd, 0xf3, 0x79, 0xa5, 0x97, 0xaa, 0x10, 0x3a, 0x82, 0xcd, 0xe8,
	0x8e, 0x0b, 0x39, 0xcc, 0x89, 0xd0, 0xb5, 0xae, 0x76, 0xd8, 0xc4, 0x6d, 0xf5, 0x21, 0x17, 0x82,
	0x5e, 0x43, 0xdb, 0xe7, 0xcc, 0x5b, 0xe0, 0x56, 0xba, 0xda, 0x61, 0xab, 0xb7, 0x6f, 0x2e, 0x4a,
	0x35, 0xfb, 0x9c, 0x79, 0xb9, 0x50, 0xbc, 0xe1, 0x2f, 0x5e, 0xa0, 0xe7, 0xd0, 0x8a, 0xf8, 0x44,
	0x38, 0x64, 0xe8, 0x70, 0x97, 0xe8, 0x55, 0x95, 0x66, 0xb7, 0x98, 0x66, 0xa0, 0x28, 0x67, 0xdc,
	0x25, 0x18, 0xa2, 0xd9, 0x19, 0x21, 0xa8, 0x49, 0xdb, 0x8b, 0xf4, 0x5a, 0xb7, 0x7a, 0xd8, 0xc4,
	0xea, 0x6c, 0xfc, 0xd0, 0x60, 0xa3, 0x50, 0x15, 0xed, 0xc0, 0xf2, 0x67, 0xdb, 0x9f, 0x90, 0xf4,
	0x45, 0x17, 0x4b, 0x38, 0x85, 0x08, 0x41, 0x75, 0x22, 0xa8, 0xd2, 0x9e, 0xdc, 0x26, 0x00, 0x5d,
	0x42, 0x7d, 0xcc, 0x45, 0x60, 0x4b, 0xa5, 0x65, 0xbd, 0xf7, 0xff, 0x23, 0x4f, 0x32, 0x73, 0xe7,
	0x57, 0x2a, 0x10, 0x67, 0x09, 0x50, 0x07, 0x9a, 0xd4, 0xe1, 0x6c, 0xe8, 0x53, 0x76, 0xaf, 0xd7,
	0x94, 0x99, 0x2b, 0xc9, 0x45, 0x9f, 0xb2, 0x7b, 0xe3, 0x64, 0xa1, 0x0d, 0x69, 0x24, 0x6a, 0x41,
	0xe3, 0xdd, 0xcd, 0xd5, 0xcd, 0x9b, 0xf7, 0x37, 0xed, 0x25, 0xb4, 0x0a, 0x2b, 0xd7, 0x27, 0xf8,
	0xea, 0x3c, 0x41, 0x1a, 0x5a, 0x81, 0xda, 0xc5, 0xed, 0x75, 0xbf, 0x5d, 0x41, 0x0d, 0xa8, 0xe2,
	0xc1, 0x6d, 0xbb, 0x7a, 0xda, 0x84, 0x86, 0xc3, 0x99, 0x24, 0x4c, 0x1a, 0x5d, 0x80, 0xc1, 0x82,
	0x2f, 0xaa, 0x66, 0xda, 0x40, 0x75, 0x36, 0xbe, 0x69, 0xd0, 0x29, 0xf5, 0xfd, 0x72, 0x36, 0x3a,
	0xe8, 0x05, 0xac, 0x09, 0x92, 0xb5, 0x42, 0xc6, 0x61, 0xea, 0xd5, 0x7a, 0xaf, 0x33, 0x7f, 0x7e,
	0x32, 0x6c, 0x26, 0xce, 0x38, 0xb7, 0x71, 0x48, 0xf0, 0xaa, 0xc8, 0x21, 0xa4, 0x43, 0x23, 0x14,
	0xfc, 0x23, 0x71, 0x64, 0xea, 0x28, 0x9e, 0x42, 0xb4, 0x03, 0x75, 0x97, 0x07, 0x36, 0x65, 0xca,
	0xd3, 0x26, 0xce, 0x50, 0xa2, 0x93, 0xd9, 0x01, 0xc9, 0xbc, 0x51, 0x67, 0xe3, 0xab, 0x06, 0x7b,
	0x25, 0x9d, 0x67, 0x82, 0xd8, 0x92, 0x60, 0xf2, 0x69, 0x42, 0x22, 0x89, 0xfe, 0x83, 0x0a, 0x75,
	0x95, 0xbe, 0x56, 0xef, 0xef, 0x82, 0xbe, 0xf9, 0x8b, 0x70, 0x85, 0xba, 0xe8, 0x2d, 0xa0, 0xf2,
	0x6f, 0x95, 0x0d, 0xeb, 0x41, 0xb1, 0xb3, 0xa5, 0xb2, 0x78, 0xd3, 0x2d, 0x5e, 0x19, 0x07, 0xb0,
	0xff, 0x5b, 0x79, 0x51, 0xc8, 0x59, 0x44, 0x8c, 0x2f, 0x1a, 0x6c, 0x97, 0x38, 0x7d, 0x1a, 0x49,
	0x34, 0x80, 0xbf, 0x8a, 0x19, 0x29, 0x89, 0x74, 0xad, 0x5b, 0xfd, 0x33, 0x3d, 0x0f, 0x45, 0xa3,
	0x2d, 0x58, 0x96, 0xfc, 0x9e, 0xb0, 0xcc, 0xf5, 0x14, 0x18, 0x3f, 0x35, 0xf8, 0xe7, 0x41, 0x11,
	0x53, 0x17, 0x87, 0xb0, 0x5d, 0xb6, 0x66, 0x38, 0x33, 0xf6, 0xe8, 0x51, 0x35, 0x39, 0xab, 0x4b,
	0xba, 0xe2, 0x4b, 0x37, 0xd1, 0xe5, 0xd3, 0x80, 0xa6, 0xd3, 0xb0, 0x86, 0x53, 0x30, 0x57, 0x5b,
	0xcd, 0xa9, 0x4d, 0x66, 0x67, 0x4c, 0x7d, 0x49, 0x44, 0x94, 0x0d, 0xc3, 0x14, 0xa2, 0x63, 0x68,
	0x44, 0xc9, 0x62, 0x1a, 0xc5, 0xfa, 0xb2, 0x12, 0xb6, 0x55, 0x5e, 0x0e, 0x42, 0xe2, 0x7a, 0x42,
	0x3a, 0x8d, 0x4f, 0x9f, 0x7d, 0x78, 0xea, 0x51, 0x79, 0x37, 0x19, 0x99, 0x0e, 0x0f, 0x2c, 0xc5,
	0xe4, 0xc2, 0xb3, 0x66, 0x1b, 0xd1, 0x23, 0xcc, 0x0a, 0x47, 0xc7, 0x1e, 0xb7, 0x16, 0x97, 0xe4,
	0xa8, 0xae, 0xd6, 0xe3, 0x93, 0x5f, 0x01, 0x00, 0x00, 0xff, 0xff, 0xb4, 0xb0, 0x33, 0xf4, 0x96,
	0x05, 0x00, 0x00,
}

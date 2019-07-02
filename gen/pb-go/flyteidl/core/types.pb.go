// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/core/types.proto

package core // import "github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import _struct "github.com/golang/protobuf/ptypes/struct"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Define a set of simple types.
type SimpleType int32

const (
	SimpleType_NONE     SimpleType = 0
	SimpleType_INTEGER  SimpleType = 1
	SimpleType_FLOAT    SimpleType = 2
	SimpleType_STRING   SimpleType = 3
	SimpleType_BOOLEAN  SimpleType = 4
	SimpleType_DATETIME SimpleType = 5
	SimpleType_DURATION SimpleType = 6
	SimpleType_BINARY   SimpleType = 7
	SimpleType_ERROR    SimpleType = 8
	SimpleType_STRUCT   SimpleType = 9
)

var SimpleType_name = map[int32]string{
	0: "NONE",
	1: "INTEGER",
	2: "FLOAT",
	3: "STRING",
	4: "BOOLEAN",
	5: "DATETIME",
	6: "DURATION",
	7: "BINARY",
	8: "ERROR",
	9: "STRUCT",
}
var SimpleType_value = map[string]int32{
	"NONE":     0,
	"INTEGER":  1,
	"FLOAT":    2,
	"STRING":   3,
	"BOOLEAN":  4,
	"DATETIME": 5,
	"DURATION": 6,
	"BINARY":   7,
	"ERROR":    8,
	"STRUCT":   9,
}

func (x SimpleType) String() string {
	return proto.EnumName(SimpleType_name, int32(x))
}
func (SimpleType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_types_07a59b54a7541378, []int{0}
}

type SchemaType_SchemaColumn_SchemaColumnType int32

const (
	SchemaType_SchemaColumn_INTEGER  SchemaType_SchemaColumn_SchemaColumnType = 0
	SchemaType_SchemaColumn_FLOAT    SchemaType_SchemaColumn_SchemaColumnType = 1
	SchemaType_SchemaColumn_STRING   SchemaType_SchemaColumn_SchemaColumnType = 2
	SchemaType_SchemaColumn_BOOLEAN  SchemaType_SchemaColumn_SchemaColumnType = 3
	SchemaType_SchemaColumn_DATETIME SchemaType_SchemaColumn_SchemaColumnType = 4
	SchemaType_SchemaColumn_DURATION SchemaType_SchemaColumn_SchemaColumnType = 5
)

var SchemaType_SchemaColumn_SchemaColumnType_name = map[int32]string{
	0: "INTEGER",
	1: "FLOAT",
	2: "STRING",
	3: "BOOLEAN",
	4: "DATETIME",
	5: "DURATION",
}
var SchemaType_SchemaColumn_SchemaColumnType_value = map[string]int32{
	"INTEGER":  0,
	"FLOAT":    1,
	"STRING":   2,
	"BOOLEAN":  3,
	"DATETIME": 4,
	"DURATION": 5,
}

func (x SchemaType_SchemaColumn_SchemaColumnType) String() string {
	return proto.EnumName(SchemaType_SchemaColumn_SchemaColumnType_name, int32(x))
}
func (SchemaType_SchemaColumn_SchemaColumnType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_types_07a59b54a7541378, []int{0, 0, 0}
}

type BlobType_BlobDimensionality int32

const (
	BlobType_SINGLE    BlobType_BlobDimensionality = 0
	BlobType_MULTIPART BlobType_BlobDimensionality = 1
)

var BlobType_BlobDimensionality_name = map[int32]string{
	0: "SINGLE",
	1: "MULTIPART",
}
var BlobType_BlobDimensionality_value = map[string]int32{
	"SINGLE":    0,
	"MULTIPART": 1,
}

func (x BlobType_BlobDimensionality) String() string {
	return proto.EnumName(BlobType_BlobDimensionality_name, int32(x))
}
func (BlobType_BlobDimensionality) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_types_07a59b54a7541378, []int{1, 0}
}

// Defines schema columns and types to strongly type-validate schemas interoperability.
type SchemaType struct {
	// A list of ordered columns this schema comprises of.
	Columns              []*SchemaType_SchemaColumn `protobuf:"bytes,3,rep,name=columns,proto3" json:"columns,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *SchemaType) Reset()         { *m = SchemaType{} }
func (m *SchemaType) String() string { return proto.CompactTextString(m) }
func (*SchemaType) ProtoMessage()    {}
func (*SchemaType) Descriptor() ([]byte, []int) {
	return fileDescriptor_types_07a59b54a7541378, []int{0}
}
func (m *SchemaType) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SchemaType.Unmarshal(m, b)
}
func (m *SchemaType) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SchemaType.Marshal(b, m, deterministic)
}
func (dst *SchemaType) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SchemaType.Merge(dst, src)
}
func (m *SchemaType) XXX_Size() int {
	return xxx_messageInfo_SchemaType.Size(m)
}
func (m *SchemaType) XXX_DiscardUnknown() {
	xxx_messageInfo_SchemaType.DiscardUnknown(m)
}

var xxx_messageInfo_SchemaType proto.InternalMessageInfo

func (m *SchemaType) GetColumns() []*SchemaType_SchemaColumn {
	if m != nil {
		return m.Columns
	}
	return nil
}

type SchemaType_SchemaColumn struct {
	// A unique name -within the schema type- for the column
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// The column type. This allows a limited set of types currently.
	Type                 SchemaType_SchemaColumn_SchemaColumnType `protobuf:"varint,2,opt,name=type,proto3,enum=flyteidl.core.SchemaType_SchemaColumn_SchemaColumnType" json:"type,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                                 `json:"-"`
	XXX_unrecognized     []byte                                   `json:"-"`
	XXX_sizecache        int32                                    `json:"-"`
}

func (m *SchemaType_SchemaColumn) Reset()         { *m = SchemaType_SchemaColumn{} }
func (m *SchemaType_SchemaColumn) String() string { return proto.CompactTextString(m) }
func (*SchemaType_SchemaColumn) ProtoMessage()    {}
func (*SchemaType_SchemaColumn) Descriptor() ([]byte, []int) {
	return fileDescriptor_types_07a59b54a7541378, []int{0, 0}
}
func (m *SchemaType_SchemaColumn) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SchemaType_SchemaColumn.Unmarshal(m, b)
}
func (m *SchemaType_SchemaColumn) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SchemaType_SchemaColumn.Marshal(b, m, deterministic)
}
func (dst *SchemaType_SchemaColumn) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SchemaType_SchemaColumn.Merge(dst, src)
}
func (m *SchemaType_SchemaColumn) XXX_Size() int {
	return xxx_messageInfo_SchemaType_SchemaColumn.Size(m)
}
func (m *SchemaType_SchemaColumn) XXX_DiscardUnknown() {
	xxx_messageInfo_SchemaType_SchemaColumn.DiscardUnknown(m)
}

var xxx_messageInfo_SchemaType_SchemaColumn proto.InternalMessageInfo

func (m *SchemaType_SchemaColumn) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *SchemaType_SchemaColumn) GetType() SchemaType_SchemaColumn_SchemaColumnType {
	if m != nil {
		return m.Type
	}
	return SchemaType_SchemaColumn_INTEGER
}

// Defines type behavior for blob objects
type BlobType struct {
	// Format can be a free form string understood by SDK/UI etc like
	// csv, parquet etc
	Format               string                      `protobuf:"bytes,1,opt,name=format,proto3" json:"format,omitempty"`
	Dimensionality       BlobType_BlobDimensionality `protobuf:"varint,2,opt,name=dimensionality,proto3,enum=flyteidl.core.BlobType_BlobDimensionality" json:"dimensionality,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                    `json:"-"`
	XXX_unrecognized     []byte                      `json:"-"`
	XXX_sizecache        int32                       `json:"-"`
}

func (m *BlobType) Reset()         { *m = BlobType{} }
func (m *BlobType) String() string { return proto.CompactTextString(m) }
func (*BlobType) ProtoMessage()    {}
func (*BlobType) Descriptor() ([]byte, []int) {
	return fileDescriptor_types_07a59b54a7541378, []int{1}
}
func (m *BlobType) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BlobType.Unmarshal(m, b)
}
func (m *BlobType) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BlobType.Marshal(b, m, deterministic)
}
func (dst *BlobType) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BlobType.Merge(dst, src)
}
func (m *BlobType) XXX_Size() int {
	return xxx_messageInfo_BlobType.Size(m)
}
func (m *BlobType) XXX_DiscardUnknown() {
	xxx_messageInfo_BlobType.DiscardUnknown(m)
}

var xxx_messageInfo_BlobType proto.InternalMessageInfo

func (m *BlobType) GetFormat() string {
	if m != nil {
		return m.Format
	}
	return ""
}

func (m *BlobType) GetDimensionality() BlobType_BlobDimensionality {
	if m != nil {
		return m.Dimensionality
	}
	return BlobType_SINGLE
}

// Defines a closure. At the moment any closure can be bound to any variable of type ClosureType.
type ClosureType struct {
	// Defines the interface of the underlying closure.
	Interface            *TypedInterface `protobuf:"bytes,1,opt,name=interface,proto3" json:"interface,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *ClosureType) Reset()         { *m = ClosureType{} }
func (m *ClosureType) String() string { return proto.CompactTextString(m) }
func (*ClosureType) ProtoMessage()    {}
func (*ClosureType) Descriptor() ([]byte, []int) {
	return fileDescriptor_types_07a59b54a7541378, []int{2}
}
func (m *ClosureType) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ClosureType.Unmarshal(m, b)
}
func (m *ClosureType) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ClosureType.Marshal(b, m, deterministic)
}
func (dst *ClosureType) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ClosureType.Merge(dst, src)
}
func (m *ClosureType) XXX_Size() int {
	return xxx_messageInfo_ClosureType.Size(m)
}
func (m *ClosureType) XXX_DiscardUnknown() {
	xxx_messageInfo_ClosureType.DiscardUnknown(m)
}

var xxx_messageInfo_ClosureType proto.InternalMessageInfo

func (m *ClosureType) GetInterface() *TypedInterface {
	if m != nil {
		return m.Interface
	}
	return nil
}

// Defines a strong type to allow type checking between interfaces.
type LiteralType struct {
	// Types that are valid to be assigned to Type:
	//	*LiteralType_Simple
	//	*LiteralType_Schema
	//	*LiteralType_CollectionType
	//	*LiteralType_MapValueType
	//	*LiteralType_Blob
	//	*LiteralType_Closure
	Type isLiteralType_Type `protobuf_oneof:"type"`
	// This field contains type metadata that is descriptive of the type, but is NOT considered in type-checking.  This might be used by
	// consumers to identify special behavior or display extended information for the type.
	Metadata             *_struct.Struct `protobuf:"bytes,6,opt,name=metadata,proto3" json:"metadata,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *LiteralType) Reset()         { *m = LiteralType{} }
func (m *LiteralType) String() string { return proto.CompactTextString(m) }
func (*LiteralType) ProtoMessage()    {}
func (*LiteralType) Descriptor() ([]byte, []int) {
	return fileDescriptor_types_07a59b54a7541378, []int{3}
}
func (m *LiteralType) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LiteralType.Unmarshal(m, b)
}
func (m *LiteralType) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LiteralType.Marshal(b, m, deterministic)
}
func (dst *LiteralType) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LiteralType.Merge(dst, src)
}
func (m *LiteralType) XXX_Size() int {
	return xxx_messageInfo_LiteralType.Size(m)
}
func (m *LiteralType) XXX_DiscardUnknown() {
	xxx_messageInfo_LiteralType.DiscardUnknown(m)
}

var xxx_messageInfo_LiteralType proto.InternalMessageInfo

type isLiteralType_Type interface {
	isLiteralType_Type()
}

type LiteralType_Simple struct {
	Simple SimpleType `protobuf:"varint,1,opt,name=simple,proto3,enum=flyteidl.core.SimpleType,oneof"`
}

type LiteralType_Schema struct {
	Schema *SchemaType `protobuf:"bytes,2,opt,name=schema,proto3,oneof"`
}

type LiteralType_CollectionType struct {
	CollectionType *LiteralType `protobuf:"bytes,3,opt,name=collection_type,json=collectionType,proto3,oneof"`
}

type LiteralType_MapValueType struct {
	MapValueType *LiteralType `protobuf:"bytes,4,opt,name=map_value_type,json=mapValueType,proto3,oneof"`
}

type LiteralType_Blob struct {
	Blob *BlobType `protobuf:"bytes,5,opt,name=blob,proto3,oneof"`
}

type LiteralType_Closure struct {
	Closure *ClosureType `protobuf:"bytes,7,opt,name=closure,proto3,oneof"`
}

func (*LiteralType_Simple) isLiteralType_Type() {}

func (*LiteralType_Schema) isLiteralType_Type() {}

func (*LiteralType_CollectionType) isLiteralType_Type() {}

func (*LiteralType_MapValueType) isLiteralType_Type() {}

func (*LiteralType_Blob) isLiteralType_Type() {}

func (*LiteralType_Closure) isLiteralType_Type() {}

func (m *LiteralType) GetType() isLiteralType_Type {
	if m != nil {
		return m.Type
	}
	return nil
}

func (m *LiteralType) GetSimple() SimpleType {
	if x, ok := m.GetType().(*LiteralType_Simple); ok {
		return x.Simple
	}
	return SimpleType_NONE
}

func (m *LiteralType) GetSchema() *SchemaType {
	if x, ok := m.GetType().(*LiteralType_Schema); ok {
		return x.Schema
	}
	return nil
}

func (m *LiteralType) GetCollectionType() *LiteralType {
	if x, ok := m.GetType().(*LiteralType_CollectionType); ok {
		return x.CollectionType
	}
	return nil
}

func (m *LiteralType) GetMapValueType() *LiteralType {
	if x, ok := m.GetType().(*LiteralType_MapValueType); ok {
		return x.MapValueType
	}
	return nil
}

func (m *LiteralType) GetBlob() *BlobType {
	if x, ok := m.GetType().(*LiteralType_Blob); ok {
		return x.Blob
	}
	return nil
}

func (m *LiteralType) GetClosure() *ClosureType {
	if x, ok := m.GetType().(*LiteralType_Closure); ok {
		return x.Closure
	}
	return nil
}

func (m *LiteralType) GetMetadata() *_struct.Struct {
	if m != nil {
		return m.Metadata
	}
	return nil
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*LiteralType) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _LiteralType_OneofMarshaler, _LiteralType_OneofUnmarshaler, _LiteralType_OneofSizer, []interface{}{
		(*LiteralType_Simple)(nil),
		(*LiteralType_Schema)(nil),
		(*LiteralType_CollectionType)(nil),
		(*LiteralType_MapValueType)(nil),
		(*LiteralType_Blob)(nil),
		(*LiteralType_Closure)(nil),
	}
}

func _LiteralType_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*LiteralType)
	// type
	switch x := m.Type.(type) {
	case *LiteralType_Simple:
		b.EncodeVarint(1<<3 | proto.WireVarint)
		b.EncodeVarint(uint64(x.Simple))
	case *LiteralType_Schema:
		b.EncodeVarint(2<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Schema); err != nil {
			return err
		}
	case *LiteralType_CollectionType:
		b.EncodeVarint(3<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.CollectionType); err != nil {
			return err
		}
	case *LiteralType_MapValueType:
		b.EncodeVarint(4<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.MapValueType); err != nil {
			return err
		}
	case *LiteralType_Blob:
		b.EncodeVarint(5<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Blob); err != nil {
			return err
		}
	case *LiteralType_Closure:
		b.EncodeVarint(7<<3 | proto.WireBytes)
		if err := b.EncodeMessage(x.Closure); err != nil {
			return err
		}
	case nil:
	default:
		return fmt.Errorf("LiteralType.Type has unexpected type %T", x)
	}
	return nil
}

func _LiteralType_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*LiteralType)
	switch tag {
	case 1: // type.simple
		if wire != proto.WireVarint {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeVarint()
		m.Type = &LiteralType_Simple{SimpleType(x)}
		return true, err
	case 2: // type.schema
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(SchemaType)
		err := b.DecodeMessage(msg)
		m.Type = &LiteralType_Schema{msg}
		return true, err
	case 3: // type.collection_type
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(LiteralType)
		err := b.DecodeMessage(msg)
		m.Type = &LiteralType_CollectionType{msg}
		return true, err
	case 4: // type.map_value_type
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(LiteralType)
		err := b.DecodeMessage(msg)
		m.Type = &LiteralType_MapValueType{msg}
		return true, err
	case 5: // type.blob
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(BlobType)
		err := b.DecodeMessage(msg)
		m.Type = &LiteralType_Blob{msg}
		return true, err
	case 7: // type.closure
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		msg := new(ClosureType)
		err := b.DecodeMessage(msg)
		m.Type = &LiteralType_Closure{msg}
		return true, err
	default:
		return false, nil
	}
}

func _LiteralType_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*LiteralType)
	// type
	switch x := m.Type.(type) {
	case *LiteralType_Simple:
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(x.Simple))
	case *LiteralType_Schema:
		s := proto.Size(x.Schema)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case *LiteralType_CollectionType:
		s := proto.Size(x.CollectionType)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case *LiteralType_MapValueType:
		s := proto.Size(x.MapValueType)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case *LiteralType_Blob:
		s := proto.Size(x.Blob)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case *LiteralType_Closure:
		s := proto.Size(x.Closure)
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(s))
		n += s
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

// A reference to an output produced by a node. The type can be retrieved -and validated- from
// the underlying interface of the node.
type OutputReference struct {
	// Node id must exist at the graph layer.
	NodeId string `protobuf:"bytes,1,opt,name=node_id,json=nodeId,proto3" json:"node_id,omitempty"`
	// Variable name must refer to an output variable for the node.
	Var                  string   `protobuf:"bytes,2,opt,name=var,proto3" json:"var,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *OutputReference) Reset()         { *m = OutputReference{} }
func (m *OutputReference) String() string { return proto.CompactTextString(m) }
func (*OutputReference) ProtoMessage()    {}
func (*OutputReference) Descriptor() ([]byte, []int) {
	return fileDescriptor_types_07a59b54a7541378, []int{4}
}
func (m *OutputReference) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_OutputReference.Unmarshal(m, b)
}
func (m *OutputReference) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_OutputReference.Marshal(b, m, deterministic)
}
func (dst *OutputReference) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OutputReference.Merge(dst, src)
}
func (m *OutputReference) XXX_Size() int {
	return xxx_messageInfo_OutputReference.Size(m)
}
func (m *OutputReference) XXX_DiscardUnknown() {
	xxx_messageInfo_OutputReference.DiscardUnknown(m)
}

var xxx_messageInfo_OutputReference proto.InternalMessageInfo

func (m *OutputReference) GetNodeId() string {
	if m != nil {
		return m.NodeId
	}
	return ""
}

func (m *OutputReference) GetVar() string {
	if m != nil {
		return m.Var
	}
	return ""
}

// Represents an error thrown from a node.
type Error struct {
	// The node id that threw the error.
	FailedNodeId string `protobuf:"bytes,1,opt,name=failed_node_id,json=failedNodeId,proto3" json:"failed_node_id,omitempty"`
	// Error message thrown.
	Message              string   `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Error) Reset()         { *m = Error{} }
func (m *Error) String() string { return proto.CompactTextString(m) }
func (*Error) ProtoMessage()    {}
func (*Error) Descriptor() ([]byte, []int) {
	return fileDescriptor_types_07a59b54a7541378, []int{5}
}
func (m *Error) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Error.Unmarshal(m, b)
}
func (m *Error) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Error.Marshal(b, m, deterministic)
}
func (dst *Error) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Error.Merge(dst, src)
}
func (m *Error) XXX_Size() int {
	return xxx_messageInfo_Error.Size(m)
}
func (m *Error) XXX_DiscardUnknown() {
	xxx_messageInfo_Error.DiscardUnknown(m)
}

var xxx_messageInfo_Error proto.InternalMessageInfo

func (m *Error) GetFailedNodeId() string {
	if m != nil {
		return m.FailedNodeId
	}
	return ""
}

func (m *Error) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

// Defines a strongly typed variable.
type Variable struct {
	// Variable literal type.
	Type *LiteralType `protobuf:"bytes,1,opt,name=type,proto3" json:"type,omitempty"`
	// +optional string describing input variable
	Description          string   `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Variable) Reset()         { *m = Variable{} }
func (m *Variable) String() string { return proto.CompactTextString(m) }
func (*Variable) ProtoMessage()    {}
func (*Variable) Descriptor() ([]byte, []int) {
	return fileDescriptor_types_07a59b54a7541378, []int{6}
}
func (m *Variable) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Variable.Unmarshal(m, b)
}
func (m *Variable) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Variable.Marshal(b, m, deterministic)
}
func (dst *Variable) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Variable.Merge(dst, src)
}
func (m *Variable) XXX_Size() int {
	return xxx_messageInfo_Variable.Size(m)
}
func (m *Variable) XXX_DiscardUnknown() {
	xxx_messageInfo_Variable.DiscardUnknown(m)
}

var xxx_messageInfo_Variable proto.InternalMessageInfo

func (m *Variable) GetType() *LiteralType {
	if m != nil {
		return m.Type
	}
	return nil
}

func (m *Variable) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

// A map of Variables
type VariableMap struct {
	// Defines a map of variable names to variables.
	Variables            map[string]*Variable `protobuf:"bytes,1,rep,name=variables,proto3" json:"variables,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *VariableMap) Reset()         { *m = VariableMap{} }
func (m *VariableMap) String() string { return proto.CompactTextString(m) }
func (*VariableMap) ProtoMessage()    {}
func (*VariableMap) Descriptor() ([]byte, []int) {
	return fileDescriptor_types_07a59b54a7541378, []int{7}
}
func (m *VariableMap) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_VariableMap.Unmarshal(m, b)
}
func (m *VariableMap) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_VariableMap.Marshal(b, m, deterministic)
}
func (dst *VariableMap) XXX_Merge(src proto.Message) {
	xxx_messageInfo_VariableMap.Merge(dst, src)
}
func (m *VariableMap) XXX_Size() int {
	return xxx_messageInfo_VariableMap.Size(m)
}
func (m *VariableMap) XXX_DiscardUnknown() {
	xxx_messageInfo_VariableMap.DiscardUnknown(m)
}

var xxx_messageInfo_VariableMap proto.InternalMessageInfo

func (m *VariableMap) GetVariables() map[string]*Variable {
	if m != nil {
		return m.Variables
	}
	return nil
}

// Defines strongly typed inputs and outputs.
type TypedInterface struct {
	Inputs               *VariableMap `protobuf:"bytes,1,opt,name=inputs,proto3" json:"inputs,omitempty"`
	Outputs              *VariableMap `protobuf:"bytes,2,opt,name=outputs,proto3" json:"outputs,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *TypedInterface) Reset()         { *m = TypedInterface{} }
func (m *TypedInterface) String() string { return proto.CompactTextString(m) }
func (*TypedInterface) ProtoMessage()    {}
func (*TypedInterface) Descriptor() ([]byte, []int) {
	return fileDescriptor_types_07a59b54a7541378, []int{8}
}
func (m *TypedInterface) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TypedInterface.Unmarshal(m, b)
}
func (m *TypedInterface) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TypedInterface.Marshal(b, m, deterministic)
}
func (dst *TypedInterface) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TypedInterface.Merge(dst, src)
}
func (m *TypedInterface) XXX_Size() int {
	return xxx_messageInfo_TypedInterface.Size(m)
}
func (m *TypedInterface) XXX_DiscardUnknown() {
	xxx_messageInfo_TypedInterface.DiscardUnknown(m)
}

var xxx_messageInfo_TypedInterface proto.InternalMessageInfo

func (m *TypedInterface) GetInputs() *VariableMap {
	if m != nil {
		return m.Inputs
	}
	return nil
}

func (m *TypedInterface) GetOutputs() *VariableMap {
	if m != nil {
		return m.Outputs
	}
	return nil
}

func init() {
	proto.RegisterType((*SchemaType)(nil), "flyteidl.core.SchemaType")
	proto.RegisterType((*SchemaType_SchemaColumn)(nil), "flyteidl.core.SchemaType.SchemaColumn")
	proto.RegisterType((*BlobType)(nil), "flyteidl.core.BlobType")
	proto.RegisterType((*ClosureType)(nil), "flyteidl.core.ClosureType")
	proto.RegisterType((*LiteralType)(nil), "flyteidl.core.LiteralType")
	proto.RegisterType((*OutputReference)(nil), "flyteidl.core.OutputReference")
	proto.RegisterType((*Error)(nil), "flyteidl.core.Error")
	proto.RegisterType((*Variable)(nil), "flyteidl.core.Variable")
	proto.RegisterType((*VariableMap)(nil), "flyteidl.core.VariableMap")
	proto.RegisterMapType((map[string]*Variable)(nil), "flyteidl.core.VariableMap.VariablesEntry")
	proto.RegisterType((*TypedInterface)(nil), "flyteidl.core.TypedInterface")
	proto.RegisterEnum("flyteidl.core.SimpleType", SimpleType_name, SimpleType_value)
	proto.RegisterEnum("flyteidl.core.SchemaType_SchemaColumn_SchemaColumnType", SchemaType_SchemaColumn_SchemaColumnType_name, SchemaType_SchemaColumn_SchemaColumnType_value)
	proto.RegisterEnum("flyteidl.core.BlobType_BlobDimensionality", BlobType_BlobDimensionality_name, BlobType_BlobDimensionality_value)
}

func init() { proto.RegisterFile("flyteidl/core/types.proto", fileDescriptor_types_07a59b54a7541378) }

var fileDescriptor_types_07a59b54a7541378 = []byte{
	// 833 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x55, 0x5f, 0x6f, 0xe3, 0x44,
	0x10, 0x8f, 0xf3, 0x3f, 0x93, 0x5e, 0xce, 0xda, 0x07, 0x9a, 0xab, 0x40, 0xaa, 0x2c, 0x84, 0xca,
	0x49, 0xb5, 0x51, 0x8a, 0x00, 0x01, 0x0f, 0x24, 0x3d, 0x93, 0x1a, 0x52, 0x07, 0x6d, 0xdd, 0x93,
	0x40, 0x48, 0xd1, 0xda, 0xde, 0xe4, 0x2c, 0xd6, 0x5e, 0xcb, 0x5e, 0x57, 0x0a, 0x1f, 0x80, 0xef,
	0xc1, 0x0b, 0x3c, 0xf1, 0x5d, 0xf8, 0x48, 0xc8, 0x6b, 0xbb, 0xb1, 0x73, 0x14, 0xee, 0x6d, 0xc7,
	0xf3, 0xfb, 0xfd, 0x66, 0x76, 0x66, 0x67, 0x0c, 0x2f, 0xb6, 0x6c, 0x2f, 0x68, 0xe0, 0x33, 0xc3,
	0xe3, 0x09, 0x35, 0xc4, 0x3e, 0xa6, 0xa9, 0x1e, 0x27, 0x5c, 0x70, 0xf4, 0xac, 0x72, 0xe9, 0xb9,
	0xeb, 0xec, 0xfd, 0x1d, 0xe7, 0x3b, 0x46, 0x0d, 0xe9, 0x74, 0xb3, 0xad, 0x91, 0x8a, 0x24, 0xf3,
	0x44, 0x01, 0xd6, 0x7e, 0x6f, 0x03, 0xdc, 0x79, 0x6f, 0x68, 0x48, 0x9c, 0x7d, 0x4c, 0xd1, 0x37,
	0x30, 0xf0, 0x38, 0xcb, 0xc2, 0x28, 0x9d, 0x76, 0xce, 0x3b, 0x17, 0xe3, 0xd9, 0x47, 0x7a, 0x43,
	0x4d, 0x3f, 0x60, 0xcb, 0xe3, 0xb5, 0x84, 0xe3, 0x8a, 0x76, 0xf6, 0xb7, 0x02, 0x27, 0x75, 0x0f,
	0x42, 0xd0, 0x8d, 0x48, 0x48, 0xa7, 0xca, 0xb9, 0x72, 0x31, 0xc2, 0xf2, 0x8c, 0xbe, 0x87, 0x6e,
	0x9e, 0xf1, 0xb4, 0x7d, 0xae, 0x5c, 0x4c, 0x66, 0x9f, 0xbf, 0x5b, 0x8c, 0x86, 0x91, 0x7b, 0xb1,
	0x14, 0xd1, 0x36, 0xa0, 0x1e, 0x7b, 0xd0, 0x18, 0x06, 0x96, 0xed, 0x98, 0x4b, 0x13, 0xab, 0x2d,
	0x34, 0x82, 0xde, 0xb7, 0xab, 0xf5, 0xdc, 0x51, 0x15, 0x04, 0xd0, 0xbf, 0x73, 0xb0, 0x65, 0x2f,
	0xd5, 0x76, 0x8e, 0x59, 0xac, 0xd7, 0x2b, 0x73, 0x6e, 0xab, 0x1d, 0x74, 0x02, 0xc3, 0x57, 0x73,
	0xc7, 0x74, 0xac, 0x5b, 0x53, 0xed, 0x4a, 0xeb, 0x1e, 0xcf, 0x1d, 0x6b, 0x6d, 0xab, 0x3d, 0xed,
	0x4f, 0x05, 0x86, 0x0b, 0xc6, 0x5d, 0xa9, 0xfc, 0x1e, 0xf4, 0xb7, 0x3c, 0x09, 0x89, 0x28, 0x2f,
	0x54, 0x5a, 0x08, 0xc3, 0xc4, 0x0f, 0x42, 0x1a, 0xa5, 0x01, 0x8f, 0x08, 0x0b, 0xc4, 0xbe, 0xbc,
	0xdc, 0xcb, 0xa3, 0xcb, 0x55, 0x42, 0xf2, 0xf0, 0xaa, 0xc1, 0xc0, 0x47, 0x0a, 0x9a, 0x01, 0xe8,
	0x6d, 0x94, 0xbc, 0x83, 0x65, 0x2f, 0x57, 0xa6, 0xda, 0x42, 0xcf, 0x60, 0x74, 0x7b, 0xbf, 0x72,
	0xac, 0x1f, 0xe6, 0xd8, 0x51, 0x15, 0xed, 0x3b, 0x18, 0x5f, 0x33, 0x9e, 0x66, 0x09, 0x95, 0xb9,
	0x7e, 0x05, 0xa3, 0x20, 0x12, 0x34, 0xd9, 0x12, 0xaf, 0xa8, 0xff, 0x78, 0xf6, 0xc1, 0x51, 0x3a,
	0x39, 0xce, 0xb7, 0x2a, 0x10, 0x3e, 0xe0, 0xb5, 0x3f, 0x3a, 0x30, 0x5e, 0x05, 0x82, 0x26, 0x84,
	0x49, 0xb1, 0x2b, 0xe8, 0xa7, 0x41, 0x18, 0xb3, 0x42, 0x69, 0x32, 0x7b, 0x71, 0xdc, 0x35, 0xe9,
	0xcc, 0xa1, 0x37, 0x2d, 0x5c, 0x42, 0x25, 0x49, 0xf6, 0x46, 0x56, 0x63, 0xfc, 0x36, 0xe9, 0xb1,
	0xd5, 0x92, 0x24, 0x2d, 0x64, 0xc2, 0x73, 0x8f, 0x33, 0x46, 0x3d, 0x11, 0xf0, 0x68, 0x23, 0x1f,
	0x4a, 0x47, 0xb2, 0xcf, 0x8e, 0xd8, 0xb5, 0xf4, 0x6e, 0x5a, 0x78, 0x72, 0x20, 0xc9, 0x84, 0x17,
	0x30, 0x09, 0x49, 0xbc, 0x79, 0x20, 0x2c, 0xa3, 0x85, 0x4a, 0xf7, 0x1d, 0x54, 0x4e, 0x42, 0x12,
	0xbf, 0xce, 0x29, 0x52, 0xe3, 0x12, 0xba, 0x2e, 0xe3, 0xee, 0xb4, 0x27, 0x99, 0xa7, 0x4f, 0xf4,
	0xf2, 0xa6, 0x85, 0x25, 0x0c, 0x7d, 0x06, 0x03, 0xaf, 0xa8, 0xff, 0x74, 0xf0, 0xaf, 0xb1, 0x6a,
	0xdd, 0xb9, 0x69, 0xe1, 0x0a, 0x8c, 0xae, 0x60, 0x18, 0x52, 0x41, 0x7c, 0x22, 0xc8, 0xb4, 0x5f,
	0x86, 0x2a, 0xc6, 0x56, 0xaf, 0xc6, 0x56, 0xbf, 0x93, 0x63, 0x8b, 0x1f, 0x81, 0x8b, 0x7e, 0x31,
	0x44, 0xda, 0xd7, 0xf0, 0x7c, 0x9d, 0x89, 0x38, 0x13, 0x98, 0x6e, 0x69, 0x42, 0x23, 0x8f, 0xa2,
	0x53, 0x18, 0x44, 0xdc, 0xa7, 0x9b, 0xc0, 0xaf, 0x5e, 0x69, 0x6e, 0x5a, 0x3e, 0x52, 0xa1, 0xf3,
	0x40, 0x12, 0xd9, 0x8c, 0x11, 0xce, 0x8f, 0xda, 0x12, 0x7a, 0x66, 0x92, 0xf0, 0x04, 0x7d, 0x08,
	0x93, 0x2d, 0x09, 0x18, 0xf5, 0x37, 0x4d, 0xea, 0x49, 0xf1, 0xd5, 0x2e, 0x04, 0xa6, 0x30, 0x08,
	0x69, 0x9a, 0x92, 0x1d, 0x2d, 0x45, 0x2a, 0x53, 0xfb, 0x19, 0x86, 0xaf, 0x49, 0x12, 0x10, 0x97,
	0x51, 0xa4, 0x97, 0xf3, 0xad, 0xfc, 0x5f, 0xc1, 0x8b, 0x11, 0x46, 0xe7, 0x30, 0xf6, 0x69, 0xea,
	0x25, 0x41, 0x9c, 0x77, 0xaf, 0x54, 0xae, 0x7f, 0xd2, 0xfe, 0x52, 0x60, 0x5c, 0xc9, 0xdf, 0x92,
	0x18, 0x2d, 0x61, 0xf4, 0x50, 0x9a, 0xe9, 0x54, 0x91, 0xab, 0xea, 0xe3, 0xa3, 0x30, 0x35, 0xf8,
	0xe3, 0x39, 0x35, 0x23, 0x91, 0xec, 0xf1, 0x81, 0x7b, 0x76, 0x0f, 0x93, 0xa6, 0x33, 0xaf, 0xd1,
	0x2f, 0x74, 0x5f, 0xde, 0x3e, 0x3f, 0xa2, 0x4b, 0xe8, 0xc9, 0x57, 0x54, 0x3e, 0xe2, 0xd3, 0x27,
	0x02, 0xe1, 0x02, 0xf5, 0x65, 0xfb, 0x0b, 0x45, 0xfb, 0x15, 0x26, 0xcd, 0xd1, 0x42, 0x33, 0xe8,
	0x07, 0x51, 0x9c, 0x89, 0xf4, 0x89, 0xaa, 0xd4, 0xd2, 0xc5, 0x25, 0x12, 0x7d, 0x0a, 0x03, 0x2e,
	0x5b, 0x9b, 0x96, 0xa1, 0xff, 0x8b, 0x54, 0x41, 0x5f, 0xfe, 0xa6, 0x00, 0x1c, 0xa6, 0x11, 0x0d,
	0xa1, 0x6b, 0xaf, 0xed, 0x7c, 0x5b, 0xd4, 0xb6, 0xa2, 0x72, 0xd8, 0x8a, 0xed, 0xda, 0x56, 0xec,
	0xd4, 0xb7, 0x62, 0xb7, 0xb1, 0x15, 0x7b, 0x8d, 0xad, 0xd8, 0xcf, 0x49, 0x0b, 0xcb, 0x9e, 0xe3,
	0x1f, 0xd5, 0x41, 0xae, 0x65, 0x62, 0xbc, 0xc6, 0xea, 0xb0, 0xd4, 0xba, 0xbf, 0x76, 0xd4, 0xd1,
	0x62, 0xf6, 0xd3, 0x27, 0xbb, 0x40, 0xbc, 0xc9, 0x5c, 0xdd, 0xe3, 0xa1, 0xc1, 0xf6, 0x5b, 0x61,
	0x3c, 0xfe, 0xb6, 0x76, 0x34, 0x32, 0x62, 0xf7, 0x72, 0xc7, 0x8d, 0xc6, 0x9f, 0xcc, 0xed, 0xcb,
	0x07, 0x7f, 0xf5, 0x4f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xd7, 0x4d, 0x8a, 0x9b, 0xe1, 0x06, 0x00,
	0x00,
}

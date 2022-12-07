from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

BINARY: SimpleType
BOOLEAN: SimpleType
DATETIME: SimpleType
DESCRIPTOR: _descriptor.FileDescriptor
DURATION: SimpleType
ERROR: SimpleType
FLOAT: SimpleType
INTEGER: SimpleType
NONE: SimpleType
STRING: SimpleType
STRUCT: SimpleType

class BlobType(_message.Message):
    __slots__ = ["dimensionality", "format"]
    class BlobDimensionality(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = []
    DIMENSIONALITY_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    MULTIPART: BlobType.BlobDimensionality
    SINGLE: BlobType.BlobDimensionality
    dimensionality: BlobType.BlobDimensionality
    format: str
    def __init__(self, format: _Optional[str] = ..., dimensionality: _Optional[_Union[BlobType.BlobDimensionality, str]] = ...) -> None: ...

class EnumType(_message.Message):
    __slots__ = ["values"]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, values: _Optional[_Iterable[str]] = ...) -> None: ...

class Error(_message.Message):
    __slots__ = ["failed_node_id", "message"]
    FAILED_NODE_ID_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    failed_node_id: str
    message: str
    def __init__(self, failed_node_id: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class LiteralType(_message.Message):
    __slots__ = ["annotation", "blob", "collection_type", "enum_type", "map_value_type", "metadata", "schema", "simple", "structure", "structured_dataset_type", "union_type"]
    ANNOTATION_FIELD_NUMBER: _ClassVar[int]
    BLOB_FIELD_NUMBER: _ClassVar[int]
    COLLECTION_TYPE_FIELD_NUMBER: _ClassVar[int]
    ENUM_TYPE_FIELD_NUMBER: _ClassVar[int]
    MAP_VALUE_TYPE_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_FIELD_NUMBER: _ClassVar[int]
    SIMPLE_FIELD_NUMBER: _ClassVar[int]
    STRUCTURED_DATASET_TYPE_FIELD_NUMBER: _ClassVar[int]
    STRUCTURE_FIELD_NUMBER: _ClassVar[int]
    UNION_TYPE_FIELD_NUMBER: _ClassVar[int]
    annotation: TypeAnnotation
    blob: BlobType
    collection_type: LiteralType
    enum_type: EnumType
    map_value_type: LiteralType
    metadata: _struct_pb2.Struct
    schema: SchemaType
    simple: SimpleType
    structure: TypeStructure
    structured_dataset_type: StructuredDatasetType
    union_type: UnionType
    def __init__(self, simple: _Optional[_Union[SimpleType, str]] = ..., schema: _Optional[_Union[SchemaType, _Mapping]] = ..., collection_type: _Optional[_Union[LiteralType, _Mapping]] = ..., map_value_type: _Optional[_Union[LiteralType, _Mapping]] = ..., blob: _Optional[_Union[BlobType, _Mapping]] = ..., enum_type: _Optional[_Union[EnumType, _Mapping]] = ..., structured_dataset_type: _Optional[_Union[StructuredDatasetType, _Mapping]] = ..., union_type: _Optional[_Union[UnionType, _Mapping]] = ..., metadata: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., annotation: _Optional[_Union[TypeAnnotation, _Mapping]] = ..., structure: _Optional[_Union[TypeStructure, _Mapping]] = ...) -> None: ...

class OutputReference(_message.Message):
    __slots__ = ["node_id", "var"]
    NODE_ID_FIELD_NUMBER: _ClassVar[int]
    VAR_FIELD_NUMBER: _ClassVar[int]
    node_id: str
    var: str
    def __init__(self, node_id: _Optional[str] = ..., var: _Optional[str] = ...) -> None: ...

class SchemaType(_message.Message):
    __slots__ = ["columns"]
    class SchemaColumn(_message.Message):
        __slots__ = ["name", "type"]
        class SchemaColumnType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
            __slots__ = []
        BOOLEAN: SchemaType.SchemaColumn.SchemaColumnType
        DATETIME: SchemaType.SchemaColumn.SchemaColumnType
        DURATION: SchemaType.SchemaColumn.SchemaColumnType
        FLOAT: SchemaType.SchemaColumn.SchemaColumnType
        INTEGER: SchemaType.SchemaColumn.SchemaColumnType
        NAME_FIELD_NUMBER: _ClassVar[int]
        STRING: SchemaType.SchemaColumn.SchemaColumnType
        TYPE_FIELD_NUMBER: _ClassVar[int]
        name: str
        type: SchemaType.SchemaColumn.SchemaColumnType
        def __init__(self, name: _Optional[str] = ..., type: _Optional[_Union[SchemaType.SchemaColumn.SchemaColumnType, str]] = ...) -> None: ...
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    columns: _containers.RepeatedCompositeFieldContainer[SchemaType.SchemaColumn]
    def __init__(self, columns: _Optional[_Iterable[_Union[SchemaType.SchemaColumn, _Mapping]]] = ...) -> None: ...

class StructuredDatasetType(_message.Message):
    __slots__ = ["columns", "external_schema_bytes", "external_schema_type", "format"]
    class DatasetColumn(_message.Message):
        __slots__ = ["literal_type", "name"]
        LITERAL_TYPE_FIELD_NUMBER: _ClassVar[int]
        NAME_FIELD_NUMBER: _ClassVar[int]
        literal_type: LiteralType
        name: str
        def __init__(self, name: _Optional[str] = ..., literal_type: _Optional[_Union[LiteralType, _Mapping]] = ...) -> None: ...
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    EXTERNAL_SCHEMA_BYTES_FIELD_NUMBER: _ClassVar[int]
    EXTERNAL_SCHEMA_TYPE_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    columns: _containers.RepeatedCompositeFieldContainer[StructuredDatasetType.DatasetColumn]
    external_schema_bytes: bytes
    external_schema_type: str
    format: str
    def __init__(self, columns: _Optional[_Iterable[_Union[StructuredDatasetType.DatasetColumn, _Mapping]]] = ..., format: _Optional[str] = ..., external_schema_type: _Optional[str] = ..., external_schema_bytes: _Optional[bytes] = ...) -> None: ...

class TypeAnnotation(_message.Message):
    __slots__ = ["annotations"]
    ANNOTATIONS_FIELD_NUMBER: _ClassVar[int]
    annotations: _struct_pb2.Struct
    def __init__(self, annotations: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ...) -> None: ...

class TypeStructure(_message.Message):
    __slots__ = ["tag"]
    TAG_FIELD_NUMBER: _ClassVar[int]
    tag: str
    def __init__(self, tag: _Optional[str] = ...) -> None: ...

class UnionType(_message.Message):
    __slots__ = ["variants"]
    VARIANTS_FIELD_NUMBER: _ClassVar[int]
    variants: _containers.RepeatedCompositeFieldContainer[LiteralType]
    def __init__(self, variants: _Optional[_Iterable[_Union[LiteralType, _Mapping]]] = ...) -> None: ...

class SimpleType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []

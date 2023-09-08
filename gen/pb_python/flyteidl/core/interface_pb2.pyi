from flyteidl.core import types_pb2 as _types_pb2
from flyteidl.core import literals_pb2 as _literals_pb2
from flyteidl.core import identifier_pb2 as _identifier_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Variable(_message.Message):
    __slots__ = ["type", "description", "artifact_partial_id", "artifact_tag"]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    ARTIFACT_PARTIAL_ID_FIELD_NUMBER: _ClassVar[int]
    ARTIFACT_TAG_FIELD_NUMBER: _ClassVar[int]
    type: _types_pb2.LiteralType
    description: str
    artifact_partial_id: _identifier_pb2.ArtifactID
    artifact_tag: _identifier_pb2.ArtifactTag
    def __init__(self, type: _Optional[_Union[_types_pb2.LiteralType, _Mapping]] = ..., description: _Optional[str] = ..., artifact_partial_id: _Optional[_Union[_identifier_pb2.ArtifactID, _Mapping]] = ..., artifact_tag: _Optional[_Union[_identifier_pb2.ArtifactTag, _Mapping]] = ...) -> None: ...

class VariableMap(_message.Message):
    __slots__ = ["variables"]
    class VariablesEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Variable
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Variable, _Mapping]] = ...) -> None: ...
    VARIABLES_FIELD_NUMBER: _ClassVar[int]
    variables: _containers.MessageMap[str, Variable]
    def __init__(self, variables: _Optional[_Mapping[str, Variable]] = ...) -> None: ...

class TypedInterface(_message.Message):
    __slots__ = ["inputs", "outputs"]
    INPUTS_FIELD_NUMBER: _ClassVar[int]
    OUTPUTS_FIELD_NUMBER: _ClassVar[int]
    inputs: VariableMap
    outputs: VariableMap
    def __init__(self, inputs: _Optional[_Union[VariableMap, _Mapping]] = ..., outputs: _Optional[_Union[VariableMap, _Mapping]] = ...) -> None: ...

class Expression(_message.Message):
    __slots__ = ["lhs", "rhs", "plus", "minus"]
    LHS_FIELD_NUMBER: _ClassVar[int]
    RHS_FIELD_NUMBER: _ClassVar[int]
    PLUS_FIELD_NUMBER: _ClassVar[int]
    MINUS_FIELD_NUMBER: _ClassVar[int]
    lhs: Parameter
    rhs: Parameter
    plus: str
    minus: str
    def __init__(self, lhs: _Optional[_Union[Parameter, _Mapping]] = ..., rhs: _Optional[_Union[Parameter, _Mapping]] = ..., plus: _Optional[str] = ..., minus: _Optional[str] = ...) -> None: ...

class PartitionReference(_message.Message):
    __slots__ = ["artifact_id", "partition"]
    ARTIFACT_ID_FIELD_NUMBER: _ClassVar[int]
    PARTITION_FIELD_NUMBER: _ClassVar[int]
    artifact_id: _identifier_pb2.ArtifactID
    partition: str
    def __init__(self, artifact_id: _Optional[_Union[_identifier_pb2.ArtifactID, _Mapping]] = ..., partition: _Optional[str] = ...) -> None: ...

class Parameter(_message.Message):
    __slots__ = ["var", "default", "required", "artifact_query", "artifact_id", "partition_reference", "expression"]
    VAR_FIELD_NUMBER: _ClassVar[int]
    DEFAULT_FIELD_NUMBER: _ClassVar[int]
    REQUIRED_FIELD_NUMBER: _ClassVar[int]
    ARTIFACT_QUERY_FIELD_NUMBER: _ClassVar[int]
    ARTIFACT_ID_FIELD_NUMBER: _ClassVar[int]
    PARTITION_REFERENCE_FIELD_NUMBER: _ClassVar[int]
    EXPRESSION_FIELD_NUMBER: _ClassVar[int]
    var: Variable
    default: _literals_pb2.Literal
    required: bool
    artifact_query: _identifier_pb2.ArtifactQuery
    artifact_id: _identifier_pb2.ArtifactID
    partition_reference: PartitionReference
    expression: Expression
    def __init__(self, var: _Optional[_Union[Variable, _Mapping]] = ..., default: _Optional[_Union[_literals_pb2.Literal, _Mapping]] = ..., required: bool = ..., artifact_query: _Optional[_Union[_identifier_pb2.ArtifactQuery, _Mapping]] = ..., artifact_id: _Optional[_Union[_identifier_pb2.ArtifactID, _Mapping]] = ..., partition_reference: _Optional[_Union[PartitionReference, _Mapping]] = ..., expression: _Optional[_Union[Expression, _Mapping]] = ...) -> None: ...

class ParameterMap(_message.Message):
    __slots__ = ["parameters"]
    class ParametersEntry(_message.Message):
        __slots__ = ["key", "value"]
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: Parameter
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[Parameter, _Mapping]] = ...) -> None: ...
    PARAMETERS_FIELD_NUMBER: _ClassVar[int]
    parameters: _containers.MessageMap[str, Parameter]
    def __init__(self, parameters: _Optional[_Mapping[str, Parameter]] = ...) -> None: ...

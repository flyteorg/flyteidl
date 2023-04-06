from flyteidl.admin import common_pb2 as _common_pb2
from flyteidl.core import literals_pb2 as _literals_pb2
from flyteidl.admin import node_execution_pb2 as _node_execution_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class DataResponse(_message.Message):
    __slots__ = ["dynamic_workflow", "flyte_deck", "literal_map"]
    DYNAMIC_WORKFLOW_FIELD_NUMBER: _ClassVar[int]
    FLYTE_DECK_FIELD_NUMBER: _ClassVar[int]
    LITERAL_MAP_FIELD_NUMBER: _ClassVar[int]
    dynamic_workflow: _node_execution_pb2.DynamicWorkflowNodeMetadata
    flyte_deck: bytes
    literal_map: _literals_pb2.LiteralMap
    def __init__(self, literal_map: _Optional[_Union[_literals_pb2.LiteralMap, _Mapping]] = ..., flyte_deck: _Optional[bytes] = ..., dynamic_workflow: _Optional[_Union[_node_execution_pb2.DynamicWorkflowNodeMetadata, _Mapping]] = ...) -> None: ...

class FlyteArtifactGetRequest(_message.Message):
    __slots__ = ["artifact"]
    ARTIFACT_FIELD_NUMBER: _ClassVar[int]
    artifact: _common_pb2.FlyteArtifact
    def __init__(self, artifact: _Optional[_Union[_common_pb2.FlyteArtifact, _Mapping]] = ...) -> None: ...

from flyteidl.core import literals_pb2 as _literals_pb2
from flyteidl.core import types_pb2 as _types_pb2
from flyteidl.core import identifier_pb2 as _identifier_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Artifact(_message.Message):
    __slots__ = ["artifact_id", "uri", "spec"]
    ARTIFACT_ID_FIELD_NUMBER: _ClassVar[int]
    URI_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    artifact_id: _identifier_pb2.ArtifactID
    uri: str
    spec: ArtifactSpec
    def __init__(self, artifact_id: _Optional[_Union[_identifier_pb2.ArtifactID, _Mapping]] = ..., uri: _Optional[str] = ..., spec: _Optional[_Union[ArtifactSpec, _Mapping]] = ...) -> None: ...

class ArtifactSpec(_message.Message):
    __slots__ = ["value", "type", "tags", "aliases", "task_execution", "execution", "principal", "short_description", "long_description"]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    ALIASES_FIELD_NUMBER: _ClassVar[int]
    TASK_EXECUTION_FIELD_NUMBER: _ClassVar[int]
    EXECUTION_FIELD_NUMBER: _ClassVar[int]
    PRINCIPAL_FIELD_NUMBER: _ClassVar[int]
    SHORT_DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    LONG_DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    value: _literals_pb2.Literal
    type: _types_pb2.LiteralType
    tags: _containers.RepeatedCompositeFieldContainer[Tag]
    aliases: _containers.RepeatedCompositeFieldContainer[Alias]
    task_execution: _identifier_pb2.TaskExecutionIdentifier
    execution: _identifier_pb2.WorkflowExecutionIdentifier
    principal: str
    short_description: str
    long_description: str
    def __init__(self, value: _Optional[_Union[_literals_pb2.Literal, _Mapping]] = ..., type: _Optional[_Union[_types_pb2.LiteralType, _Mapping]] = ..., tags: _Optional[_Iterable[_Union[Tag, _Mapping]]] = ..., aliases: _Optional[_Iterable[_Union[Alias, _Mapping]]] = ..., task_execution: _Optional[_Union[_identifier_pb2.TaskExecutionIdentifier, _Mapping]] = ..., execution: _Optional[_Union[_identifier_pb2.WorkflowExecutionIdentifier, _Mapping]] = ..., principal: _Optional[str] = ..., short_description: _Optional[str] = ..., long_description: _Optional[str] = ...) -> None: ...

class ArtifactQuery(_message.Message):
    __slots__ = ["artifact_key", "version", "alias", "tags"]
    ARTIFACT_KEY_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    ALIAS_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    artifact_key: _identifier_pb2.ArtifactKey
    version: str
    alias: Alias
    tags: _containers.RepeatedCompositeFieldContainer[Tag]
    def __init__(self, artifact_key: _Optional[_Union[_identifier_pb2.ArtifactKey, _Mapping]] = ..., version: _Optional[str] = ..., alias: _Optional[_Union[Alias, _Mapping]] = ..., tags: _Optional[_Iterable[_Union[Tag, _Mapping]]] = ...) -> None: ...

class CreateArtifactRequest(_message.Message):
    __slots__ = ["artifact_key", "version", "spec"]
    ARTIFACT_KEY_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    SPEC_FIELD_NUMBER: _ClassVar[int]
    artifact_key: _identifier_pb2.ArtifactKey
    version: str
    spec: ArtifactSpec
    def __init__(self, artifact_key: _Optional[_Union[_identifier_pb2.ArtifactKey, _Mapping]] = ..., version: _Optional[str] = ..., spec: _Optional[_Union[ArtifactSpec, _Mapping]] = ...) -> None: ...

class CreateArtifactResponse(_message.Message):
    __slots__ = ["artifact"]
    ARTIFACT_FIELD_NUMBER: _ClassVar[int]
    artifact: Artifact
    def __init__(self, artifact: _Optional[_Union[Artifact, _Mapping]] = ...) -> None: ...

class GetArtifactRequest(_message.Message):
    __slots__ = ["artifact_id", "uri", "details"]
    ARTIFACT_ID_FIELD_NUMBER: _ClassVar[int]
    URI_FIELD_NUMBER: _ClassVar[int]
    DETAILS_FIELD_NUMBER: _ClassVar[int]
    artifact_id: _identifier_pb2.ArtifactID
    uri: str
    details: bool
    def __init__(self, artifact_id: _Optional[_Union[_identifier_pb2.ArtifactID, _Mapping]] = ..., uri: _Optional[str] = ..., details: bool = ...) -> None: ...

class Tag(_message.Message):
    __slots__ = ["key", "value"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    key: str
    value: str
    def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

class AddTagsRequest(_message.Message):
    __slots__ = ["artifact_id", "tags"]
    ARTIFACT_ID_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    artifact_id: _identifier_pb2.ArtifactID
    tags: _containers.RepeatedCompositeFieldContainer[Tag]
    def __init__(self, artifact_id: _Optional[_Union[_identifier_pb2.ArtifactID, _Mapping]] = ..., tags: _Optional[_Iterable[_Union[Tag, _Mapping]]] = ...) -> None: ...

class AddTagsResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class RemoveTagsRequest(_message.Message):
    __slots__ = ["artifact_id", "tags"]
    ARTIFACT_ID_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    artifact_id: _identifier_pb2.ArtifactID
    tags: _containers.RepeatedCompositeFieldContainer[Tag]
    def __init__(self, artifact_id: _Optional[_Union[_identifier_pb2.ArtifactID, _Mapping]] = ..., tags: _Optional[_Iterable[_Union[Tag, _Mapping]]] = ...) -> None: ...

class RemoveTagsResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class ListArtifactNamesRequest(_message.Message):
    __slots__ = ["project", "domain"]
    PROJECT_FIELD_NUMBER: _ClassVar[int]
    DOMAIN_FIELD_NUMBER: _ClassVar[int]
    project: str
    domain: str
    def __init__(self, project: _Optional[str] = ..., domain: _Optional[str] = ...) -> None: ...

class ListArtifactNamesResponse(_message.Message):
    __slots__ = ["artifact_keys"]
    ARTIFACT_KEYS_FIELD_NUMBER: _ClassVar[int]
    artifact_keys: _containers.RepeatedCompositeFieldContainer[_identifier_pb2.ArtifactKey]
    def __init__(self, artifact_keys: _Optional[_Iterable[_Union[_identifier_pb2.ArtifactKey, _Mapping]]] = ...) -> None: ...

class ListArtifactsRequest(_message.Message):
    __slots__ = ["artifact_key"]
    ARTIFACT_KEY_FIELD_NUMBER: _ClassVar[int]
    artifact_key: _identifier_pb2.ArtifactKey
    def __init__(self, artifact_key: _Optional[_Union[_identifier_pb2.ArtifactKey, _Mapping]] = ...) -> None: ...

class ListArtifactsResponse(_message.Message):
    __slots__ = ["artifacts"]
    ARTIFACTS_FIELD_NUMBER: _ClassVar[int]
    artifacts: _containers.RepeatedCompositeFieldContainer[Artifact]
    def __init__(self, artifacts: _Optional[_Iterable[_Union[Artifact, _Mapping]]] = ...) -> None: ...

class CreateAliasRequest(_message.Message):
    __slots__ = ["artifact_key", "alias", "overwrite"]
    ARTIFACT_KEY_FIELD_NUMBER: _ClassVar[int]
    ALIAS_FIELD_NUMBER: _ClassVar[int]
    OVERWRITE_FIELD_NUMBER: _ClassVar[int]
    artifact_key: _identifier_pb2.ArtifactKey
    alias: Alias
    overwrite: bool
    def __init__(self, artifact_key: _Optional[_Union[_identifier_pb2.ArtifactKey, _Mapping]] = ..., alias: _Optional[_Union[Alias, _Mapping]] = ..., overwrite: bool = ...) -> None: ...

class CreateAliasResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class RemoveAliasRequest(_message.Message):
    __slots__ = ["artifact_id", "alias"]
    ARTIFACT_ID_FIELD_NUMBER: _ClassVar[int]
    ALIAS_FIELD_NUMBER: _ClassVar[int]
    artifact_id: _identifier_pb2.ArtifactID
    alias: Alias
    def __init__(self, artifact_id: _Optional[_Union[_identifier_pb2.ArtifactID, _Mapping]] = ..., alias: _Optional[_Union[Alias, _Mapping]] = ...) -> None: ...

class RemoveAliasResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class Alias(_message.Message):
    __slots__ = ["key", "value"]
    KEY_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    key: str
    value: str
    def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

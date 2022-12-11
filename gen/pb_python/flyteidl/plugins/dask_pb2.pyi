from flyteidl.core import tasks_pb2 as _tasks_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class DaskCluster(_message.Message):
    __slots__ = ["image", "nWorkers", "resources"]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    NWORKERS_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    image: str
    nWorkers: int
    resources: _tasks_pb2.Resources
    def __init__(self, image: _Optional[str] = ..., nWorkers: _Optional[int] = ..., resources: _Optional[_Union[_tasks_pb2.Resources, _Mapping]] = ...) -> None: ...

class DaskJob(_message.Message):
    __slots__ = ["cluster", "jobPodSpec"]
    CLUSTER_FIELD_NUMBER: _ClassVar[int]
    JOBPODSPEC_FIELD_NUMBER: _ClassVar[int]
    cluster: DaskCluster
    jobPodSpec: JobPodSpec
    def __init__(self, jobPodSpec: _Optional[_Union[JobPodSpec, _Mapping]] = ..., cluster: _Optional[_Union[DaskCluster, _Mapping]] = ...) -> None: ...

class JobPodSpec(_message.Message):
    __slots__ = ["image", "resources"]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    image: str
    resources: _tasks_pb2.Resources
    def __init__(self, image: _Optional[str] = ..., resources: _Optional[_Union[_tasks_pb2.Resources, _Mapping]] = ...) -> None: ...

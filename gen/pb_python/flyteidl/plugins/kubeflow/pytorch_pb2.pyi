from flyteidl.core import tasks_pb2 as _tasks_pb2
from flyteidl.plugins.kubeflow import common_pb2 as _common_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class DistributedPyTorchTrainingTask(_message.Message):
    __slots__ = ["worker_replicas", "master_replicas", "run_policy"]
    WORKER_REPLICAS_FIELD_NUMBER: _ClassVar[int]
    MASTER_REPLICAS_FIELD_NUMBER: _ClassVar[int]
    RUN_POLICY_FIELD_NUMBER: _ClassVar[int]
    worker_replicas: DistributedPyTorchTrainingReplicaSpec
    master_replicas: DistributedPyTorchTrainingReplicaSpec
    run_policy: _common_pb2.RunPolicy
    def __init__(self, worker_replicas: _Optional[_Union[DistributedPyTorchTrainingReplicaSpec, _Mapping]] = ..., master_replicas: _Optional[_Union[DistributedPyTorchTrainingReplicaSpec, _Mapping]] = ..., run_policy: _Optional[_Union[_common_pb2.RunPolicy, _Mapping]] = ...) -> None: ...

class DistributedPyTorchTrainingReplicaSpec(_message.Message):
    __slots__ = ["replicas", "image", "resources", "restart_policy"]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    RESTART_POLICY_FIELD_NUMBER: _ClassVar[int]
    replicas: int
    image: str
    resources: _tasks_pb2.Resources
    restart_policy: _common_pb2.RestartPolicy
    def __init__(self, replicas: _Optional[int] = ..., image: _Optional[str] = ..., resources: _Optional[_Union[_tasks_pb2.Resources, _Mapping]] = ..., restart_policy: _Optional[_Union[_common_pb2.RestartPolicy, str]] = ...) -> None: ...

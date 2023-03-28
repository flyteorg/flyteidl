from flyteidl.core import tasks_pb2 as _tasks_pb2
from flyteidl.plugins.kubeflow import common_pb2 as _common_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class DistributedPyTorchTrainingReplicaSpec(_message.Message):
    __slots__ = ["image", "replicas", "resources", "restart_policy"]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    RESTART_POLICY_FIELD_NUMBER: _ClassVar[int]
    image: str
    replicas: int
    resources: _tasks_pb2.Resources
    restart_policy: _common_pb2.RestartPolicy
    def __init__(self, replicas: _Optional[int] = ..., image: _Optional[str] = ..., resources: _Optional[_Union[_tasks_pb2.Resources, _Mapping]] = ..., restart_policy: _Optional[_Union[_common_pb2.RestartPolicy, str]] = ...) -> None: ...

class DistributedPyTorchTrainingTask(_message.Message):
    __slots__ = ["master_replicas", "run_policy", "worker_replicas"]
    MASTER_REPLICAS_FIELD_NUMBER: _ClassVar[int]
    RUN_POLICY_FIELD_NUMBER: _ClassVar[int]
    WORKER_REPLICAS_FIELD_NUMBER: _ClassVar[int]
    master_replicas: DistributedPyTorchTrainingReplicaSpec
    run_policy: _common_pb2.RunPolicy
    worker_replicas: DistributedPyTorchTrainingReplicaSpec
    def __init__(self, worker_replicas: _Optional[_Union[DistributedPyTorchTrainingReplicaSpec, _Mapping]] = ..., master_replicas: _Optional[_Union[DistributedPyTorchTrainingReplicaSpec, _Mapping]] = ..., run_policy: _Optional[_Union[_common_pb2.RunPolicy, _Mapping]] = ...) -> None: ...

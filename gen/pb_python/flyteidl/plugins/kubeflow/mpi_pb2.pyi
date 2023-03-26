from flyteidl.plugins.kubeflow import common_pb2 as _common_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class DistributedMPITrainingReplicaSpec(_message.Message):
    __slots__ = ["pod_template_name", "replicas", "restart_policy"]
    POD_TEMPLATE_NAME_FIELD_NUMBER: _ClassVar[int]
    REPLICAS_FIELD_NUMBER: _ClassVar[int]
    RESTART_POLICY_FIELD_NUMBER: _ClassVar[int]
    pod_template_name: str
    replicas: int
    restart_policy: _common_pb2.RestartPolicy
    def __init__(self, replicas: _Optional[int] = ..., pod_template_name: _Optional[str] = ..., restart_policy: _Optional[_Union[_common_pb2.RestartPolicy, str]] = ...) -> None: ...

class DistributedMPITrainingTask(_message.Message):
    __slots__ = ["launcher_replicas", "run_policy", "success_policy", "worker_replicas"]
    LAUNCHER_REPLICAS_FIELD_NUMBER: _ClassVar[int]
    RUN_POLICY_FIELD_NUMBER: _ClassVar[int]
    SUCCESS_POLICY_FIELD_NUMBER: _ClassVar[int]
    WORKER_REPLICAS_FIELD_NUMBER: _ClassVar[int]
    launcher_replicas: DistributedMPITrainingReplicaSpec
    run_policy: _common_pb2.RunPolicy
    success_policy: _common_pb2.SuccessPolicy
    worker_replicas: DistributedMPITrainingReplicaSpec
    def __init__(self, worker_replicas: _Optional[_Union[DistributedMPITrainingReplicaSpec, _Mapping]] = ..., launcher_replicas: _Optional[_Union[DistributedMPITrainingReplicaSpec, _Mapping]] = ..., run_policy: _Optional[_Union[_common_pb2.RunPolicy, _Mapping]] = ..., success_policy: _Optional[_Union[_common_pb2.SuccessPolicy, str]] = ...) -> None: ...

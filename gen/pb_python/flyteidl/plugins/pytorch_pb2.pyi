from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class DistributedPyTorchTrainingTask(_message.Message):
    __slots__ = ["elastic_config", "workers"]
    ELASTIC_CONFIG_FIELD_NUMBER: _ClassVar[int]
    WORKERS_FIELD_NUMBER: _ClassVar[int]
    elastic_config: ElasticConfig
    workers: int
    def __init__(self, workers: _Optional[int] = ..., elastic_config: _Optional[_Union[ElasticConfig, _Mapping]] = ...) -> None: ...

class ElasticConfig(_message.Message):
    __slots__ = ["max_replicas", "max_restarts", "min_replicas", "nproc_per_node", "rdzv_backend"]
    MAX_REPLICAS_FIELD_NUMBER: _ClassVar[int]
    MAX_RESTARTS_FIELD_NUMBER: _ClassVar[int]
    MIN_REPLICAS_FIELD_NUMBER: _ClassVar[int]
    NPROC_PER_NODE_FIELD_NUMBER: _ClassVar[int]
    RDZV_BACKEND_FIELD_NUMBER: _ClassVar[int]
    max_replicas: int
    max_restarts: int
    min_replicas: int
    nproc_per_node: int
    rdzv_backend: str
    def __init__(self, rdzv_backend: _Optional[str] = ..., min_replicas: _Optional[int] = ..., max_replicas: _Optional[int] = ..., nproc_per_node: _Optional[int] = ..., max_restarts: _Optional[int] = ...) -> None: ...

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class DistributedPyTorchTrainingTask(_message.Message):
    __slots__ = ["RDZVBackend", "maxReplicas", "maxRestarts", "minReplicas", "nProcPerNode", "workers"]
    MAXREPLICAS_FIELD_NUMBER: _ClassVar[int]
    MAXRESTARTS_FIELD_NUMBER: _ClassVar[int]
    MINREPLICAS_FIELD_NUMBER: _ClassVar[int]
    NPROCPERNODE_FIELD_NUMBER: _ClassVar[int]
    RDZVBACKEND_FIELD_NUMBER: _ClassVar[int]
    RDZVBackend: str
    WORKERS_FIELD_NUMBER: _ClassVar[int]
    maxReplicas: int
    maxRestarts: int
    minReplicas: int
    nProcPerNode: int
    workers: int
    def __init__(self, workers: _Optional[int] = ..., RDZVBackend: _Optional[str] = ..., minReplicas: _Optional[int] = ..., maxReplicas: _Optional[int] = ..., nProcPerNode: _Optional[int] = ..., maxRestarts: _Optional[int] = ...) -> None: ...

from flyteidl.core import literals_pb2 as _literals_pb2
from flyteidl.core import tasks_pb2 as _tasks_pb2
from flyteidl.core import interface_pb2 as _interface_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TaskCreateRequest(_message.Message):
    __slots__ = ["inputs", "output_prefix", "template"]
    INPUTS_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_PREFIX_FIELD_NUMBER: _ClassVar[int]
    TEMPLATE_FIELD_NUMBER: _ClassVar[int]
    inputs: _literals_pb2.LiteralMap
    output_prefix: str
    template: _tasks_pb2.TaskTemplate
    def __init__(self, inputs: _Optional[_Union[_literals_pb2.LiteralMap, _Mapping]] = ..., template: _Optional[_Union[_tasks_pb2.TaskTemplate, _Mapping]] = ..., output_prefix: _Optional[str] = ...) -> None: ...

class TaskCreateResponse(_message.Message):
    __slots__ = ["job_id", "message"]
    JOB_ID_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    job_id: str
    message: str
    def __init__(self, job_id: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class TaskDeleteRequest(_message.Message):
    __slots__ = ["job_id", "task_type"]
    JOB_ID_FIELD_NUMBER: _ClassVar[int]
    TASK_TYPE_FIELD_NUMBER: _ClassVar[int]
    job_id: str
    task_type: str
    def __init__(self, task_type: _Optional[str] = ..., job_id: _Optional[str] = ...) -> None: ...

class TaskDeleteResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class TaskGetRequest(_message.Message):
    __slots__ = ["job_id", "output_prefix", "prev_state", "task_type"]
    JOB_ID_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_PREFIX_FIELD_NUMBER: _ClassVar[int]
    PREV_STATE_FIELD_NUMBER: _ClassVar[int]
    TASK_TYPE_FIELD_NUMBER: _ClassVar[int]
    job_id: str
    output_prefix: str
    prev_state: str
    task_type: str
    def __init__(self, task_type: _Optional[str] = ..., job_id: _Optional[str] = ..., output_prefix: _Optional[str] = ..., prev_state: _Optional[str] = ...) -> None: ...

class TaskGetResponse(_message.Message):
    __slots__ = ["message", "state"]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    message: str
    state: str
    def __init__(self, state: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

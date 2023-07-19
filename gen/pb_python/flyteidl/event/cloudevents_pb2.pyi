from flyteidl.event import event_pb2 as _event_pb2
from flyteidl.core import literals_pb2 as _literals_pb2
from flyteidl.core import interface_pb2 as _interface_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CloudEventWorkflowExecution(_message.Message):
    __slots__ = ["raw_event", "output_data", "output_interface"]
    RAW_EVENT_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_DATA_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_INTERFACE_FIELD_NUMBER: _ClassVar[int]
    raw_event: _event_pb2.WorkflowExecutionEvent
    output_data: _literals_pb2.LiteralMap
    output_interface: _interface_pb2.TypedInterface
    def __init__(self, raw_event: _Optional[_Union[_event_pb2.WorkflowExecutionEvent, _Mapping]] = ..., output_data: _Optional[_Union[_literals_pb2.LiteralMap, _Mapping]] = ..., output_interface: _Optional[_Union[_interface_pb2.TypedInterface, _Mapping]] = ...) -> None: ...

class CloudEventNodeExecution(_message.Message):
    __slots__ = ["raw_event"]
    RAW_EVENT_FIELD_NUMBER: _ClassVar[int]
    raw_event: _event_pb2.NodeExecutionEvent
    def __init__(self, raw_event: _Optional[_Union[_event_pb2.NodeExecutionEvent, _Mapping]] = ...) -> None: ...

class CloudEventTaskExecution(_message.Message):
    __slots__ = ["raw_event", "output_data", "output_interface"]
    RAW_EVENT_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_DATA_FIELD_NUMBER: _ClassVar[int]
    OUTPUT_INTERFACE_FIELD_NUMBER: _ClassVar[int]
    raw_event: _event_pb2.TaskExecutionEvent
    output_data: _literals_pb2.LiteralMap
    output_interface: _interface_pb2.TypedInterface
    def __init__(self, raw_event: _Optional[_Union[_event_pb2.TaskExecutionEvent, _Mapping]] = ..., output_data: _Optional[_Union[_literals_pb2.LiteralMap, _Mapping]] = ..., output_interface: _Optional[_Union[_interface_pb2.TypedInterface, _Mapping]] = ...) -> None: ...

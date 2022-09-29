# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: flyteidl/admin/task.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from flyteidl.core import identifier_pb2 as flyteidl_dot_core_dot_identifier__pb2
from flyteidl.core import tasks_pb2 as flyteidl_dot_core_dot_tasks__pb2
from flyteidl.core import compiler_pb2 as flyteidl_dot_core_dot_compiler__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='flyteidl/admin/task.proto',
  package='flyteidl.admin',
  syntax='proto3',
  serialized_options=_b('Z5github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/admin'),
  serialized_pb=_b('\n\x19\x66lyteidl/admin/task.proto\x12\x0e\x66lyteidl.admin\x1a\x1e\x66lyteidl/core/identifier.proto\x1a\x19\x66lyteidl/core/tasks.proto\x1a\x1c\x66lyteidl/core/compiler.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"b\n\x11TaskCreateRequest\x12%\n\x02id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.Identifier\x12&\n\x04spec\x18\x02 \x01(\x0b\x32\x18.flyteidl.admin.TaskSpec\"\x14\n\x12TaskCreateResponse\"[\n\x04Task\x12%\n\x02id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.Identifier\x12,\n\x07\x63losure\x18\x02 \x01(\x0b\x32\x1b.flyteidl.admin.TaskClosure\">\n\x08TaskList\x12#\n\x05tasks\x18\x01 \x03(\x0b\x32\x14.flyteidl.admin.Task\x12\r\n\x05token\x18\x02 \x01(\t\"G\n\x08TaskSpec\x12-\n\x08template\x18\x01 \x01(\x0b\x32\x1b.flyteidl.core.TaskTemplate\x12\x0c\n\x04tags\x18\x02 \x03(\t\"q\n\x0bTaskClosure\x12\x32\n\rcompiled_task\x18\x01 \x01(\x0b\x32\x1b.flyteidl.core.CompiledTask\x12.\n\ncreated_at\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.TimestampB7Z5github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/adminb\x06proto3')
  ,
  dependencies=[flyteidl_dot_core_dot_identifier__pb2.DESCRIPTOR,flyteidl_dot_core_dot_tasks__pb2.DESCRIPTOR,flyteidl_dot_core_dot_compiler__pb2.DESCRIPTOR,google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])




_TASKCREATEREQUEST = _descriptor.Descriptor(
  name='TaskCreateRequest',
  full_name='flyteidl.admin.TaskCreateRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='flyteidl.admin.TaskCreateRequest.id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='spec', full_name='flyteidl.admin.TaskCreateRequest.spec', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=167,
  serialized_end=265,
)


_TASKCREATERESPONSE = _descriptor.Descriptor(
  name='TaskCreateResponse',
  full_name='flyteidl.admin.TaskCreateResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=267,
  serialized_end=287,
)


_TASK = _descriptor.Descriptor(
  name='Task',
  full_name='flyteidl.admin.Task',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='flyteidl.admin.Task.id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='closure', full_name='flyteidl.admin.Task.closure', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=289,
  serialized_end=380,
)


_TASKLIST = _descriptor.Descriptor(
  name='TaskList',
  full_name='flyteidl.admin.TaskList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='tasks', full_name='flyteidl.admin.TaskList.tasks', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='token', full_name='flyteidl.admin.TaskList.token', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=382,
  serialized_end=444,
)


_TASKSPEC = _descriptor.Descriptor(
  name='TaskSpec',
  full_name='flyteidl.admin.TaskSpec',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='template', full_name='flyteidl.admin.TaskSpec.template', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='flyteidl.admin.TaskSpec.tags', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=446,
  serialized_end=517,
)


_TASKCLOSURE = _descriptor.Descriptor(
  name='TaskClosure',
  full_name='flyteidl.admin.TaskClosure',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='compiled_task', full_name='flyteidl.admin.TaskClosure.compiled_task', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='created_at', full_name='flyteidl.admin.TaskClosure.created_at', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=519,
  serialized_end=632,
)

_TASKCREATEREQUEST.fields_by_name['id'].message_type = flyteidl_dot_core_dot_identifier__pb2._IDENTIFIER
_TASKCREATEREQUEST.fields_by_name['spec'].message_type = _TASKSPEC
_TASK.fields_by_name['id'].message_type = flyteidl_dot_core_dot_identifier__pb2._IDENTIFIER
_TASK.fields_by_name['closure'].message_type = _TASKCLOSURE
_TASKLIST.fields_by_name['tasks'].message_type = _TASK
_TASKSPEC.fields_by_name['template'].message_type = flyteidl_dot_core_dot_tasks__pb2._TASKTEMPLATE
_TASKCLOSURE.fields_by_name['compiled_task'].message_type = flyteidl_dot_core_dot_compiler__pb2._COMPILEDTASK
_TASKCLOSURE.fields_by_name['created_at'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
DESCRIPTOR.message_types_by_name['TaskCreateRequest'] = _TASKCREATEREQUEST
DESCRIPTOR.message_types_by_name['TaskCreateResponse'] = _TASKCREATERESPONSE
DESCRIPTOR.message_types_by_name['Task'] = _TASK
DESCRIPTOR.message_types_by_name['TaskList'] = _TASKLIST
DESCRIPTOR.message_types_by_name['TaskSpec'] = _TASKSPEC
DESCRIPTOR.message_types_by_name['TaskClosure'] = _TASKCLOSURE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TaskCreateRequest = _reflection.GeneratedProtocolMessageType('TaskCreateRequest', (_message.Message,), dict(
  DESCRIPTOR = _TASKCREATEREQUEST,
  __module__ = 'flyteidl.admin.task_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.TaskCreateRequest)
  ))
_sym_db.RegisterMessage(TaskCreateRequest)

TaskCreateResponse = _reflection.GeneratedProtocolMessageType('TaskCreateResponse', (_message.Message,), dict(
  DESCRIPTOR = _TASKCREATERESPONSE,
  __module__ = 'flyteidl.admin.task_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.TaskCreateResponse)
  ))
_sym_db.RegisterMessage(TaskCreateResponse)

Task = _reflection.GeneratedProtocolMessageType('Task', (_message.Message,), dict(
  DESCRIPTOR = _TASK,
  __module__ = 'flyteidl.admin.task_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.Task)
  ))
_sym_db.RegisterMessage(Task)

TaskList = _reflection.GeneratedProtocolMessageType('TaskList', (_message.Message,), dict(
  DESCRIPTOR = _TASKLIST,
  __module__ = 'flyteidl.admin.task_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.TaskList)
  ))
_sym_db.RegisterMessage(TaskList)

TaskSpec = _reflection.GeneratedProtocolMessageType('TaskSpec', (_message.Message,), dict(
  DESCRIPTOR = _TASKSPEC,
  __module__ = 'flyteidl.admin.task_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.TaskSpec)
  ))
_sym_db.RegisterMessage(TaskSpec)

TaskClosure = _reflection.GeneratedProtocolMessageType('TaskClosure', (_message.Message,), dict(
  DESCRIPTOR = _TASKCLOSURE,
  __module__ = 'flyteidl.admin.task_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.TaskClosure)
  ))
_sym_db.RegisterMessage(TaskClosure)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)

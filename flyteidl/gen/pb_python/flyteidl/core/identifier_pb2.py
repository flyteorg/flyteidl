# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: flyteidl/core/identifier.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='flyteidl/core/identifier.proto',
  package='flyteidl.core',
  syntax='proto3',
  serialized_options=_b('Z4github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/core'),
  serialized_pb=_b('\n\x1e\x66lyteidl/core/identifier.proto\x12\rflyteidl.core\"\x80\x01\n\nIdentifier\x12\x32\n\rresource_type\x18\x01 \x01(\x0e\x32\x1b.flyteidl.core.ResourceType\x12\x0f\n\x07project\x18\x02 \x01(\t\x12\x0e\n\x06\x64omain\x18\x03 \x01(\t\x12\x0c\n\x04name\x18\x04 \x01(\t\x12\x0f\n\x07version\x18\x05 \x01(\t\"L\n\x1bWorkflowExecutionIdentifier\x12\x0f\n\x07project\x18\x01 \x01(\t\x12\x0e\n\x06\x64omain\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x04 \x01(\t\"l\n\x17NodeExecutionIdentifier\x12\x0f\n\x07node_id\x18\x01 \x01(\t\x12@\n\x0c\x65xecution_id\x18\x02 \x01(\x0b\x32*.flyteidl.core.WorkflowExecutionIdentifier\"\x9f\x01\n\x17TaskExecutionIdentifier\x12*\n\x07task_id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.Identifier\x12\x41\n\x11node_execution_id\x18\x02 \x01(\x0b\x32&.flyteidl.core.NodeExecutionIdentifier\x12\x15\n\rretry_attempt\x18\x03 \x01(\r*U\n\x0cResourceType\x12\x0f\n\x0bUNSPECIFIED\x10\x00\x12\x08\n\x04TASK\x10\x01\x12\x0c\n\x08WORKFLOW\x10\x02\x12\x0f\n\x0bLAUNCH_PLAN\x10\x03\x12\x0b\n\x07\x44\x41TASET\x10\x04\x42\x36Z4github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/coreb\x06proto3')
)

_RESOURCETYPE = _descriptor.EnumDescriptor(
  name='ResourceType',
  full_name='flyteidl.core.ResourceType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='TASK', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='WORKFLOW', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='LAUNCH_PLAN', index=3, number=3,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='DATASET', index=4, number=4,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=530,
  serialized_end=615,
)
_sym_db.RegisterEnumDescriptor(_RESOURCETYPE)

ResourceType = enum_type_wrapper.EnumTypeWrapper(_RESOURCETYPE)
UNSPECIFIED = 0
TASK = 1
WORKFLOW = 2
LAUNCH_PLAN = 3
DATASET = 4



_IDENTIFIER = _descriptor.Descriptor(
  name='Identifier',
  full_name='flyteidl.core.Identifier',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='resource_type', full_name='flyteidl.core.Identifier.resource_type', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='project', full_name='flyteidl.core.Identifier.project', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='domain', full_name='flyteidl.core.Identifier.domain', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='flyteidl.core.Identifier.name', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='version', full_name='flyteidl.core.Identifier.version', index=4,
      number=5, type=9, cpp_type=9, label=1,
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
  serialized_start=50,
  serialized_end=178,
)


_WORKFLOWEXECUTIONIDENTIFIER = _descriptor.Descriptor(
  name='WorkflowExecutionIdentifier',
  full_name='flyteidl.core.WorkflowExecutionIdentifier',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='project', full_name='flyteidl.core.WorkflowExecutionIdentifier.project', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='domain', full_name='flyteidl.core.WorkflowExecutionIdentifier.domain', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='flyteidl.core.WorkflowExecutionIdentifier.name', index=2,
      number=4, type=9, cpp_type=9, label=1,
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
  serialized_start=180,
  serialized_end=256,
)


_NODEEXECUTIONIDENTIFIER = _descriptor.Descriptor(
  name='NodeExecutionIdentifier',
  full_name='flyteidl.core.NodeExecutionIdentifier',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='node_id', full_name='flyteidl.core.NodeExecutionIdentifier.node_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='execution_id', full_name='flyteidl.core.NodeExecutionIdentifier.execution_id', index=1,
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
  serialized_start=258,
  serialized_end=366,
)


_TASKEXECUTIONIDENTIFIER = _descriptor.Descriptor(
  name='TaskExecutionIdentifier',
  full_name='flyteidl.core.TaskExecutionIdentifier',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='task_id', full_name='flyteidl.core.TaskExecutionIdentifier.task_id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='node_execution_id', full_name='flyteidl.core.TaskExecutionIdentifier.node_execution_id', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='retry_attempt', full_name='flyteidl.core.TaskExecutionIdentifier.retry_attempt', index=2,
      number=3, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
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
  serialized_start=369,
  serialized_end=528,
)

_IDENTIFIER.fields_by_name['resource_type'].enum_type = _RESOURCETYPE
_NODEEXECUTIONIDENTIFIER.fields_by_name['execution_id'].message_type = _WORKFLOWEXECUTIONIDENTIFIER
_TASKEXECUTIONIDENTIFIER.fields_by_name['task_id'].message_type = _IDENTIFIER
_TASKEXECUTIONIDENTIFIER.fields_by_name['node_execution_id'].message_type = _NODEEXECUTIONIDENTIFIER
DESCRIPTOR.message_types_by_name['Identifier'] = _IDENTIFIER
DESCRIPTOR.message_types_by_name['WorkflowExecutionIdentifier'] = _WORKFLOWEXECUTIONIDENTIFIER
DESCRIPTOR.message_types_by_name['NodeExecutionIdentifier'] = _NODEEXECUTIONIDENTIFIER
DESCRIPTOR.message_types_by_name['TaskExecutionIdentifier'] = _TASKEXECUTIONIDENTIFIER
DESCRIPTOR.enum_types_by_name['ResourceType'] = _RESOURCETYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Identifier = _reflection.GeneratedProtocolMessageType('Identifier', (_message.Message,), dict(
  DESCRIPTOR = _IDENTIFIER,
  __module__ = 'flyteidl.core.identifier_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.Identifier)
  ))
_sym_db.RegisterMessage(Identifier)

WorkflowExecutionIdentifier = _reflection.GeneratedProtocolMessageType('WorkflowExecutionIdentifier', (_message.Message,), dict(
  DESCRIPTOR = _WORKFLOWEXECUTIONIDENTIFIER,
  __module__ = 'flyteidl.core.identifier_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.WorkflowExecutionIdentifier)
  ))
_sym_db.RegisterMessage(WorkflowExecutionIdentifier)

NodeExecutionIdentifier = _reflection.GeneratedProtocolMessageType('NodeExecutionIdentifier', (_message.Message,), dict(
  DESCRIPTOR = _NODEEXECUTIONIDENTIFIER,
  __module__ = 'flyteidl.core.identifier_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.NodeExecutionIdentifier)
  ))
_sym_db.RegisterMessage(NodeExecutionIdentifier)

TaskExecutionIdentifier = _reflection.GeneratedProtocolMessageType('TaskExecutionIdentifier', (_message.Message,), dict(
  DESCRIPTOR = _TASKEXECUTIONIDENTIFIER,
  __module__ = 'flyteidl.core.identifier_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.TaskExecutionIdentifier)
  ))
_sym_db.RegisterMessage(TaskExecutionIdentifier)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
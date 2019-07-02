# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: flyteidl/core/compiler.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from flyteidl.core import literals_pb2 as flyteidl_dot_core_dot_literals__pb2
from flyteidl.core import tasks_pb2 as flyteidl_dot_core_dot_tasks__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='flyteidl/core/compiler.proto',
  package='flyteidl.core',
  syntax='proto3',
  serialized_pb=_b('\n\x1c\x66lyteidl/core/compiler.proto\x12\rflyteidl.core\x1a\x1c\x66lyteidl/core/literals.proto\x1a\x19\x66lyteidl/core/tasks.proto\"\xd4\x02\n\rConnectionSet\x12@\n\ndownstream\x18\x07 \x03(\x0b\x32,.flyteidl.core.ConnectionSet.DownstreamEntry\x12<\n\x08upstream\x18\x08 \x03(\x0b\x32*.flyteidl.core.ConnectionSet.UpstreamEntry\x1a\x15\n\x06IdList\x12\x0b\n\x03ids\x18\x01 \x03(\t\x1aV\n\x0f\x44ownstreamEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x32\n\x05value\x18\x02 \x01(\x0b\x32#.flyteidl.core.ConnectionSet.IdList:\x02\x38\x01\x1aT\n\rUpstreamEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x32\n\x05value\x18\x02 \x01(\x0b\x32#.flyteidl.core.ConnectionSet.IdList:\x02\x38\x01\"x\n\x10\x43ompiledWorkflow\x12\x31\n\x08template\x18\x01 \x01(\x0b\x32\x1f.flyteidl.core.WorkflowTemplate\x12\x31\n\x0b\x63onnections\x18\x02 \x01(\x0b\x32\x1c.flyteidl.core.ConnectionSet\"=\n\x0c\x43ompiledTask\x12-\n\x08template\x18\x01 \x01(\x0b\x32\x1b.flyteidl.core.TaskTemplate\"\xaf\x01\n\x17\x43ompiledWorkflowClosure\x12\x30\n\x07primary\x18\x01 \x01(\x0b\x32\x1f.flyteidl.core.CompiledWorkflow\x12\x36\n\rsub_workflows\x18\x02 \x03(\x0b\x32\x1f.flyteidl.core.CompiledWorkflow\x12*\n\x05tasks\x18\x03 \x03(\x0b\x32\x1b.flyteidl.core.CompiledTaskB2Z0github.com/lyft/flyteidl/gen/pb-go/flyteidl/coreb\x06proto3')
  ,
  dependencies=[flyteidl_dot_core_dot_literals__pb2.DESCRIPTOR,flyteidl_dot_core_dot_tasks__pb2.DESCRIPTOR,])




_CONNECTIONSET_IDLIST = _descriptor.Descriptor(
  name='IdList',
  full_name='flyteidl.core.ConnectionSet.IdList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='ids', full_name='flyteidl.core.ConnectionSet.IdList.ids', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=250,
  serialized_end=271,
)

_CONNECTIONSET_DOWNSTREAMENTRY = _descriptor.Descriptor(
  name='DownstreamEntry',
  full_name='flyteidl.core.ConnectionSet.DownstreamEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='flyteidl.core.ConnectionSet.DownstreamEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='flyteidl.core.ConnectionSet.DownstreamEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=_descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001')),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=273,
  serialized_end=359,
)

_CONNECTIONSET_UPSTREAMENTRY = _descriptor.Descriptor(
  name='UpstreamEntry',
  full_name='flyteidl.core.ConnectionSet.UpstreamEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='flyteidl.core.ConnectionSet.UpstreamEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='flyteidl.core.ConnectionSet.UpstreamEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=_descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001')),
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=361,
  serialized_end=445,
)

_CONNECTIONSET = _descriptor.Descriptor(
  name='ConnectionSet',
  full_name='flyteidl.core.ConnectionSet',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='downstream', full_name='flyteidl.core.ConnectionSet.downstream', index=0,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='upstream', full_name='flyteidl.core.ConnectionSet.upstream', index=1,
      number=8, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[_CONNECTIONSET_IDLIST, _CONNECTIONSET_DOWNSTREAMENTRY, _CONNECTIONSET_UPSTREAMENTRY, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=105,
  serialized_end=445,
)


_COMPILEDWORKFLOW = _descriptor.Descriptor(
  name='CompiledWorkflow',
  full_name='flyteidl.core.CompiledWorkflow',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='template', full_name='flyteidl.core.CompiledWorkflow.template', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='connections', full_name='flyteidl.core.CompiledWorkflow.connections', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=447,
  serialized_end=567,
)


_COMPILEDTASK = _descriptor.Descriptor(
  name='CompiledTask',
  full_name='flyteidl.core.CompiledTask',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='template', full_name='flyteidl.core.CompiledTask.template', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=569,
  serialized_end=630,
)


_COMPILEDWORKFLOWCLOSURE = _descriptor.Descriptor(
  name='CompiledWorkflowClosure',
  full_name='flyteidl.core.CompiledWorkflowClosure',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='primary', full_name='flyteidl.core.CompiledWorkflowClosure.primary', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sub_workflows', full_name='flyteidl.core.CompiledWorkflowClosure.sub_workflows', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tasks', full_name='flyteidl.core.CompiledWorkflowClosure.tasks', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=633,
  serialized_end=808,
)

_CONNECTIONSET_IDLIST.containing_type = _CONNECTIONSET
_CONNECTIONSET_DOWNSTREAMENTRY.fields_by_name['value'].message_type = _CONNECTIONSET_IDLIST
_CONNECTIONSET_DOWNSTREAMENTRY.containing_type = _CONNECTIONSET
_CONNECTIONSET_UPSTREAMENTRY.fields_by_name['value'].message_type = _CONNECTIONSET_IDLIST
_CONNECTIONSET_UPSTREAMENTRY.containing_type = _CONNECTIONSET
_CONNECTIONSET.fields_by_name['downstream'].message_type = _CONNECTIONSET_DOWNSTREAMENTRY
_CONNECTIONSET.fields_by_name['upstream'].message_type = _CONNECTIONSET_UPSTREAMENTRY
_COMPILEDWORKFLOW.fields_by_name['template'].message_type = flyteidl_dot_core_dot_literals__pb2._WORKFLOWTEMPLATE
_COMPILEDWORKFLOW.fields_by_name['connections'].message_type = _CONNECTIONSET
_COMPILEDTASK.fields_by_name['template'].message_type = flyteidl_dot_core_dot_tasks__pb2._TASKTEMPLATE
_COMPILEDWORKFLOWCLOSURE.fields_by_name['primary'].message_type = _COMPILEDWORKFLOW
_COMPILEDWORKFLOWCLOSURE.fields_by_name['sub_workflows'].message_type = _COMPILEDWORKFLOW
_COMPILEDWORKFLOWCLOSURE.fields_by_name['tasks'].message_type = _COMPILEDTASK
DESCRIPTOR.message_types_by_name['ConnectionSet'] = _CONNECTIONSET
DESCRIPTOR.message_types_by_name['CompiledWorkflow'] = _COMPILEDWORKFLOW
DESCRIPTOR.message_types_by_name['CompiledTask'] = _COMPILEDTASK
DESCRIPTOR.message_types_by_name['CompiledWorkflowClosure'] = _COMPILEDWORKFLOWCLOSURE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ConnectionSet = _reflection.GeneratedProtocolMessageType('ConnectionSet', (_message.Message,), dict(

  IdList = _reflection.GeneratedProtocolMessageType('IdList', (_message.Message,), dict(
    DESCRIPTOR = _CONNECTIONSET_IDLIST,
    __module__ = 'flyteidl.core.compiler_pb2'
    # @@protoc_insertion_point(class_scope:flyteidl.core.ConnectionSet.IdList)
    ))
  ,

  DownstreamEntry = _reflection.GeneratedProtocolMessageType('DownstreamEntry', (_message.Message,), dict(
    DESCRIPTOR = _CONNECTIONSET_DOWNSTREAMENTRY,
    __module__ = 'flyteidl.core.compiler_pb2'
    # @@protoc_insertion_point(class_scope:flyteidl.core.ConnectionSet.DownstreamEntry)
    ))
  ,

  UpstreamEntry = _reflection.GeneratedProtocolMessageType('UpstreamEntry', (_message.Message,), dict(
    DESCRIPTOR = _CONNECTIONSET_UPSTREAMENTRY,
    __module__ = 'flyteidl.core.compiler_pb2'
    # @@protoc_insertion_point(class_scope:flyteidl.core.ConnectionSet.UpstreamEntry)
    ))
  ,
  DESCRIPTOR = _CONNECTIONSET,
  __module__ = 'flyteidl.core.compiler_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.ConnectionSet)
  ))
_sym_db.RegisterMessage(ConnectionSet)
_sym_db.RegisterMessage(ConnectionSet.IdList)
_sym_db.RegisterMessage(ConnectionSet.DownstreamEntry)
_sym_db.RegisterMessage(ConnectionSet.UpstreamEntry)

CompiledWorkflow = _reflection.GeneratedProtocolMessageType('CompiledWorkflow', (_message.Message,), dict(
  DESCRIPTOR = _COMPILEDWORKFLOW,
  __module__ = 'flyteidl.core.compiler_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.CompiledWorkflow)
  ))
_sym_db.RegisterMessage(CompiledWorkflow)

CompiledTask = _reflection.GeneratedProtocolMessageType('CompiledTask', (_message.Message,), dict(
  DESCRIPTOR = _COMPILEDTASK,
  __module__ = 'flyteidl.core.compiler_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.CompiledTask)
  ))
_sym_db.RegisterMessage(CompiledTask)

CompiledWorkflowClosure = _reflection.GeneratedProtocolMessageType('CompiledWorkflowClosure', (_message.Message,), dict(
  DESCRIPTOR = _COMPILEDWORKFLOWCLOSURE,
  __module__ = 'flyteidl.core.compiler_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.CompiledWorkflowClosure)
  ))
_sym_db.RegisterMessage(CompiledWorkflowClosure)


DESCRIPTOR.has_options = True
DESCRIPTOR._options = _descriptor._ParseOptions(descriptor_pb2.FileOptions(), _b('Z0github.com/lyft/flyteidl/gen/pb-go/flyteidl/core'))
_CONNECTIONSET_DOWNSTREAMENTRY.has_options = True
_CONNECTIONSET_DOWNSTREAMENTRY._options = _descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001'))
_CONNECTIONSET_UPSTREAMENTRY.has_options = True
_CONNECTIONSET_UPSTREAMENTRY._options = _descriptor._ParseOptions(descriptor_pb2.MessageOptions(), _b('8\001'))
# @@protoc_insertion_point(module_scope)

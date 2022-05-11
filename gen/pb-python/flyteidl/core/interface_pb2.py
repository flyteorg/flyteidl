# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: flyteidl/core/interface.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from flyteidl.core import types_pb2 as flyteidl_dot_core_dot_types__pb2
from flyteidl.core import literals_pb2 as flyteidl_dot_core_dot_literals__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1d\x66lyteidl/core/interface.proto\x12\rflyteidl.core\x1a\x19\x66lyteidl/core/types.proto\x1a\x1c\x66lyteidl/core/literals.proto\"\\\n\x08Variable\x12.\n\x04type\x18\x01 \x01(\x0b\x32\x1a.flyteidl.core.LiteralTypeR\x04type\x12 \n\x0b\x64\x65scription\x18\x02 \x01(\tR\x0b\x64\x65scription\"\xad\x01\n\x0bVariableMap\x12G\n\tvariables\x18\x01 \x03(\x0b\x32).flyteidl.core.VariableMap.VariablesEntryR\tvariables\x1aU\n\x0eVariablesEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12-\n\x05value\x18\x02 \x01(\x0b\x32\x17.flyteidl.core.VariableR\x05value:\x02\x38\x01\"z\n\x0eTypedInterface\x12\x32\n\x06inputs\x18\x01 \x01(\x0b\x32\x1a.flyteidl.core.VariableMapR\x06inputs\x12\x34\n\x07outputs\x18\x02 \x01(\x0b\x32\x1a.flyteidl.core.VariableMapR\x07outputs\"\x94\x01\n\tParameter\x12)\n\x03var\x18\x01 \x01(\x0b\x32\x17.flyteidl.core.VariableR\x03var\x12\x32\n\x07\x64\x65\x66\x61ult\x18\x02 \x01(\x0b\x32\x16.flyteidl.core.LiteralH\x00R\x07\x64\x65\x66\x61ult\x12\x1c\n\x08required\x18\x03 \x01(\x08H\x00R\x08requiredB\n\n\x08\x62\x65havior\"\xb4\x01\n\x0cParameterMap\x12K\n\nparameters\x18\x01 \x03(\x0b\x32+.flyteidl.core.ParameterMap.ParametersEntryR\nparameters\x1aW\n\x0fParametersEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12.\n\x05value\x18\x02 \x01(\x0b\x32\x18.flyteidl.core.ParameterR\x05value:\x02\x38\x01\x42\xb1\x01\n\x11\x63om.flyteidl.coreB\x0eInterfaceProtoH\x02Z4github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/core\xf8\x01\x00\xa2\x02\x03\x46\x43X\xaa\x02\rFlyteidl.Core\xca\x02\rFlyteidl\\Core\xe2\x02\x19\x46lyteidl\\Core\\GPBMetadata\xea\x02\x0e\x46lyteidl::Coreb\x06proto3')



_VARIABLE = DESCRIPTOR.message_types_by_name['Variable']
_VARIABLEMAP = DESCRIPTOR.message_types_by_name['VariableMap']
_VARIABLEMAP_VARIABLESENTRY = _VARIABLEMAP.nested_types_by_name['VariablesEntry']
_TYPEDINTERFACE = DESCRIPTOR.message_types_by_name['TypedInterface']
_PARAMETER = DESCRIPTOR.message_types_by_name['Parameter']
_PARAMETERMAP = DESCRIPTOR.message_types_by_name['ParameterMap']
_PARAMETERMAP_PARAMETERSENTRY = _PARAMETERMAP.nested_types_by_name['ParametersEntry']
Variable = _reflection.GeneratedProtocolMessageType('Variable', (_message.Message,), {
  'DESCRIPTOR' : _VARIABLE,
  '__module__' : 'flyteidl.core.interface_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.Variable)
  })
_sym_db.RegisterMessage(Variable)

VariableMap = _reflection.GeneratedProtocolMessageType('VariableMap', (_message.Message,), {

  'VariablesEntry' : _reflection.GeneratedProtocolMessageType('VariablesEntry', (_message.Message,), {
    'DESCRIPTOR' : _VARIABLEMAP_VARIABLESENTRY,
    '__module__' : 'flyteidl.core.interface_pb2'
    # @@protoc_insertion_point(class_scope:flyteidl.core.VariableMap.VariablesEntry)
    })
  ,
  'DESCRIPTOR' : _VARIABLEMAP,
  '__module__' : 'flyteidl.core.interface_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.VariableMap)
  })
_sym_db.RegisterMessage(VariableMap)
_sym_db.RegisterMessage(VariableMap.VariablesEntry)

TypedInterface = _reflection.GeneratedProtocolMessageType('TypedInterface', (_message.Message,), {
  'DESCRIPTOR' : _TYPEDINTERFACE,
  '__module__' : 'flyteidl.core.interface_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.TypedInterface)
  })
_sym_db.RegisterMessage(TypedInterface)

Parameter = _reflection.GeneratedProtocolMessageType('Parameter', (_message.Message,), {
  'DESCRIPTOR' : _PARAMETER,
  '__module__' : 'flyteidl.core.interface_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.Parameter)
  })
_sym_db.RegisterMessage(Parameter)

ParameterMap = _reflection.GeneratedProtocolMessageType('ParameterMap', (_message.Message,), {

  'ParametersEntry' : _reflection.GeneratedProtocolMessageType('ParametersEntry', (_message.Message,), {
    'DESCRIPTOR' : _PARAMETERMAP_PARAMETERSENTRY,
    '__module__' : 'flyteidl.core.interface_pb2'
    # @@protoc_insertion_point(class_scope:flyteidl.core.ParameterMap.ParametersEntry)
    })
  ,
  'DESCRIPTOR' : _PARAMETERMAP,
  '__module__' : 'flyteidl.core.interface_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.ParameterMap)
  })
_sym_db.RegisterMessage(ParameterMap)
_sym_db.RegisterMessage(ParameterMap.ParametersEntry)

if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\021com.flyteidl.coreB\016InterfaceProtoH\002Z4github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/core\370\001\000\242\002\003FCX\252\002\rFlyteidl.Core\312\002\rFlyteidl\\Core\342\002\031Flyteidl\\Core\\GPBMetadata\352\002\016Flyteidl::Core'
  _VARIABLEMAP_VARIABLESENTRY._options = None
  _VARIABLEMAP_VARIABLESENTRY._serialized_options = b'8\001'
  _PARAMETERMAP_PARAMETERSENTRY._options = None
  _PARAMETERMAP_PARAMETERSENTRY._serialized_options = b'8\001'
  _VARIABLE._serialized_start=105
  _VARIABLE._serialized_end=197
  _VARIABLEMAP._serialized_start=200
  _VARIABLEMAP._serialized_end=373
  _VARIABLEMAP_VARIABLESENTRY._serialized_start=288
  _VARIABLEMAP_VARIABLESENTRY._serialized_end=373
  _TYPEDINTERFACE._serialized_start=375
  _TYPEDINTERFACE._serialized_end=497
  _PARAMETER._serialized_start=500
  _PARAMETER._serialized_end=648
  _PARAMETERMAP._serialized_start=651
  _PARAMETERMAP._serialized_end=831
  _PARAMETERMAP_PARAMETERSENTRY._serialized_start=744
  _PARAMETERMAP_PARAMETERSENTRY._serialized_end=831
# @@protoc_insertion_point(module_scope)
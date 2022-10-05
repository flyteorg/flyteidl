# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: flyteidl/admin/description_entity.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from flyteidl.core import identifier_pb2 as flyteidl_dot_core_dot_identifier__pb2
from flyteidl.admin import common_pb2 as flyteidl_dot_admin_dot_common__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='flyteidl/admin/description_entity.proto',
  package='flyteidl.admin',
  syntax='proto3',
  serialized_options=_b('Z5github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/admin'),
  serialized_pb=_b('\n\'flyteidl/admin/description_entity.proto\x12\x0e\x66lyteidl.admin\x1a\x1e\x66lyteidl/core/identifier.proto\x1a\x1b\x66lyteidl/admin/common.proto\"\xa8\x01\n\x11\x44\x65scriptionEntity\x12\x19\n\x11short_description\x18\x01 \x01(\t\x12\x39\n\x10long_description\x18\x02 \x01(\x0b\x32\x1f.flyteidl.admin.LongDescription\x12/\n\x0bsource_code\x18\x03 \x01(\x0b\x32\x1a.flyteidl.admin.SourceCode\x12\x0c\n\x04tags\x18\x04 \x03(\t\"\xd5\x01\n\x0fLongDescription\x12\x0f\n\x05value\x18\x01 \x01(\tH\x00\x12\r\n\x03uri\x18\x02 \x01(\tH\x00\x12\x41\n\x06\x66ormat\x18\x03 \x01(\x0e\x32\x31.flyteidl.admin.LongDescription.DescriptionFormat\x12\x11\n\ticon_link\x18\x04 \x01(\t\"A\n\x11\x44\x65scriptionFormat\x12\x0b\n\x07UNKNOWN\x10\x00\x12\x0c\n\x08MARKDOWN\x10\x01\x12\x08\n\x04HTML\x10\x02\x12\x07\n\x03RST\x10\x03\x42\t\n\x07\x63ontent\"\x1a\n\nSourceCode\x12\x0c\n\x04link\x18\x01 \x01(\t\"\x80\x01\n\x1b\x44\x65scriptionEntityIdentifier\x12\x32\n\rresource_type\x18\x01 \x01(\x0e\x32\x1b.flyteidl.core.ResourceType\x12\x0f\n\x07project\x18\x02 \x01(\t\x12\x0e\n\x06\x64omain\x18\x03 \x01(\t\x12\x0c\n\x04name\x18\x04 \x01(\t\"\x86\x01\n\x1e\x44\x65scriptionEntityCreateRequest\x12%\n\x02id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.Identifier\x12=\n\x12\x64\x65scription_entity\x18\x02 \x01(\x0b\x32!.flyteidl.admin.DescriptionEntity\"!\n\x1f\x44\x65scriptionEntityCreateResponse\"f\n\x15\x44\x65scriptionEntityList\x12>\n\x13\x64\x65scriptionEntities\x18\x01 \x03(\x0b\x32!.flyteidl.admin.DescriptionEntity\x12\r\n\x05token\x18\x02 \x01(\t\"\xc0\x01\n\x1c\x44\x65scriptionEntityListRequest\x12J\n\x15\x64\x65scription_entity_id\x18\x01 \x01(\x0b\x32+.flyteidl.admin.DescriptionEntityIdentifier\x12\r\n\x05limit\x18\x02 \x01(\r\x12\r\n\x05token\x18\x03 \x01(\t\x12\x0f\n\x07\x66ilters\x18\x04 \x01(\t\x12%\n\x07sort_by\x18\x05 \x01(\x0b\x32\x14.flyteidl.admin.SortB7Z5github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/adminb\x06proto3')
  ,
  dependencies=[flyteidl_dot_core_dot_identifier__pb2.DESCRIPTOR,flyteidl_dot_admin_dot_common__pb2.DESCRIPTOR,])



_LONGDESCRIPTION_DESCRIPTIONFORMAT = _descriptor.EnumDescriptor(
  name='DescriptionFormat',
  full_name='flyteidl.admin.LongDescription.DescriptionFormat',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='UNKNOWN', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='MARKDOWN', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='HTML', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='RST', index=3, number=3,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=429,
  serialized_end=494,
)
_sym_db.RegisterEnumDescriptor(_LONGDESCRIPTION_DESCRIPTIONFORMAT)


_DESCRIPTIONENTITY = _descriptor.Descriptor(
  name='DescriptionEntity',
  full_name='flyteidl.admin.DescriptionEntity',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='short_description', full_name='flyteidl.admin.DescriptionEntity.short_description', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='long_description', full_name='flyteidl.admin.DescriptionEntity.long_description', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='source_code', full_name='flyteidl.admin.DescriptionEntity.source_code', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='flyteidl.admin.DescriptionEntity.tags', index=3,
      number=4, type=9, cpp_type=9, label=3,
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
  serialized_start=121,
  serialized_end=289,
)


_LONGDESCRIPTION = _descriptor.Descriptor(
  name='LongDescription',
  full_name='flyteidl.admin.LongDescription',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='value', full_name='flyteidl.admin.LongDescription.value', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='uri', full_name='flyteidl.admin.LongDescription.uri', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='format', full_name='flyteidl.admin.LongDescription.format', index=2,
      number=3, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='icon_link', full_name='flyteidl.admin.LongDescription.icon_link', index=3,
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
    _LONGDESCRIPTION_DESCRIPTIONFORMAT,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='content', full_name='flyteidl.admin.LongDescription.content',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=292,
  serialized_end=505,
)


_SOURCECODE = _descriptor.Descriptor(
  name='SourceCode',
  full_name='flyteidl.admin.SourceCode',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='link', full_name='flyteidl.admin.SourceCode.link', index=0,
      number=1, type=9, cpp_type=9, label=1,
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
  serialized_start=507,
  serialized_end=533,
)


_DESCRIPTIONENTITYIDENTIFIER = _descriptor.Descriptor(
  name='DescriptionEntityIdentifier',
  full_name='flyteidl.admin.DescriptionEntityIdentifier',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='resource_type', full_name='flyteidl.admin.DescriptionEntityIdentifier.resource_type', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='project', full_name='flyteidl.admin.DescriptionEntityIdentifier.project', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='domain', full_name='flyteidl.admin.DescriptionEntityIdentifier.domain', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='flyteidl.admin.DescriptionEntityIdentifier.name', index=3,
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
  serialized_start=536,
  serialized_end=664,
)


_DESCRIPTIONENTITYCREATEREQUEST = _descriptor.Descriptor(
  name='DescriptionEntityCreateRequest',
  full_name='flyteidl.admin.DescriptionEntityCreateRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='flyteidl.admin.DescriptionEntityCreateRequest.id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='description_entity', full_name='flyteidl.admin.DescriptionEntityCreateRequest.description_entity', index=1,
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
  serialized_start=667,
  serialized_end=801,
)


_DESCRIPTIONENTITYCREATERESPONSE = _descriptor.Descriptor(
  name='DescriptionEntityCreateResponse',
  full_name='flyteidl.admin.DescriptionEntityCreateResponse',
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
  serialized_start=803,
  serialized_end=836,
)


_DESCRIPTIONENTITYLIST = _descriptor.Descriptor(
  name='DescriptionEntityList',
  full_name='flyteidl.admin.DescriptionEntityList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='descriptionEntities', full_name='flyteidl.admin.DescriptionEntityList.descriptionEntities', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='token', full_name='flyteidl.admin.DescriptionEntityList.token', index=1,
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
  serialized_start=838,
  serialized_end=940,
)


_DESCRIPTIONENTITYLISTREQUEST = _descriptor.Descriptor(
  name='DescriptionEntityListRequest',
  full_name='flyteidl.admin.DescriptionEntityListRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='description_entity_id', full_name='flyteidl.admin.DescriptionEntityListRequest.description_entity_id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='limit', full_name='flyteidl.admin.DescriptionEntityListRequest.limit', index=1,
      number=2, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='token', full_name='flyteidl.admin.DescriptionEntityListRequest.token', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='filters', full_name='flyteidl.admin.DescriptionEntityListRequest.filters', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sort_by', full_name='flyteidl.admin.DescriptionEntityListRequest.sort_by', index=4,
      number=5, type=11, cpp_type=10, label=1,
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
  serialized_start=943,
  serialized_end=1135,
)

_DESCRIPTIONENTITY.fields_by_name['long_description'].message_type = _LONGDESCRIPTION
_DESCRIPTIONENTITY.fields_by_name['source_code'].message_type = _SOURCECODE
_LONGDESCRIPTION.fields_by_name['format'].enum_type = _LONGDESCRIPTION_DESCRIPTIONFORMAT
_LONGDESCRIPTION_DESCRIPTIONFORMAT.containing_type = _LONGDESCRIPTION
_LONGDESCRIPTION.oneofs_by_name['content'].fields.append(
  _LONGDESCRIPTION.fields_by_name['value'])
_LONGDESCRIPTION.fields_by_name['value'].containing_oneof = _LONGDESCRIPTION.oneofs_by_name['content']
_LONGDESCRIPTION.oneofs_by_name['content'].fields.append(
  _LONGDESCRIPTION.fields_by_name['uri'])
_LONGDESCRIPTION.fields_by_name['uri'].containing_oneof = _LONGDESCRIPTION.oneofs_by_name['content']
_DESCRIPTIONENTITYIDENTIFIER.fields_by_name['resource_type'].enum_type = flyteidl_dot_core_dot_identifier__pb2._RESOURCETYPE
_DESCRIPTIONENTITYCREATEREQUEST.fields_by_name['id'].message_type = flyteidl_dot_core_dot_identifier__pb2._IDENTIFIER
_DESCRIPTIONENTITYCREATEREQUEST.fields_by_name['description_entity'].message_type = _DESCRIPTIONENTITY
_DESCRIPTIONENTITYLIST.fields_by_name['descriptionEntities'].message_type = _DESCRIPTIONENTITY
_DESCRIPTIONENTITYLISTREQUEST.fields_by_name['description_entity_id'].message_type = _DESCRIPTIONENTITYIDENTIFIER
_DESCRIPTIONENTITYLISTREQUEST.fields_by_name['sort_by'].message_type = flyteidl_dot_admin_dot_common__pb2._SORT
DESCRIPTOR.message_types_by_name['DescriptionEntity'] = _DESCRIPTIONENTITY
DESCRIPTOR.message_types_by_name['LongDescription'] = _LONGDESCRIPTION
DESCRIPTOR.message_types_by_name['SourceCode'] = _SOURCECODE
DESCRIPTOR.message_types_by_name['DescriptionEntityIdentifier'] = _DESCRIPTIONENTITYIDENTIFIER
DESCRIPTOR.message_types_by_name['DescriptionEntityCreateRequest'] = _DESCRIPTIONENTITYCREATEREQUEST
DESCRIPTOR.message_types_by_name['DescriptionEntityCreateResponse'] = _DESCRIPTIONENTITYCREATERESPONSE
DESCRIPTOR.message_types_by_name['DescriptionEntityList'] = _DESCRIPTIONENTITYLIST
DESCRIPTOR.message_types_by_name['DescriptionEntityListRequest'] = _DESCRIPTIONENTITYLISTREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

DescriptionEntity = _reflection.GeneratedProtocolMessageType('DescriptionEntity', (_message.Message,), dict(
  DESCRIPTOR = _DESCRIPTIONENTITY,
  __module__ = 'flyteidl.admin.description_entity_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.DescriptionEntity)
  ))
_sym_db.RegisterMessage(DescriptionEntity)

LongDescription = _reflection.GeneratedProtocolMessageType('LongDescription', (_message.Message,), dict(
  DESCRIPTOR = _LONGDESCRIPTION,
  __module__ = 'flyteidl.admin.description_entity_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.LongDescription)
  ))
_sym_db.RegisterMessage(LongDescription)

SourceCode = _reflection.GeneratedProtocolMessageType('SourceCode', (_message.Message,), dict(
  DESCRIPTOR = _SOURCECODE,
  __module__ = 'flyteidl.admin.description_entity_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.SourceCode)
  ))
_sym_db.RegisterMessage(SourceCode)

DescriptionEntityIdentifier = _reflection.GeneratedProtocolMessageType('DescriptionEntityIdentifier', (_message.Message,), dict(
  DESCRIPTOR = _DESCRIPTIONENTITYIDENTIFIER,
  __module__ = 'flyteidl.admin.description_entity_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.DescriptionEntityIdentifier)
  ))
_sym_db.RegisterMessage(DescriptionEntityIdentifier)

DescriptionEntityCreateRequest = _reflection.GeneratedProtocolMessageType('DescriptionEntityCreateRequest', (_message.Message,), dict(
  DESCRIPTOR = _DESCRIPTIONENTITYCREATEREQUEST,
  __module__ = 'flyteidl.admin.description_entity_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.DescriptionEntityCreateRequest)
  ))
_sym_db.RegisterMessage(DescriptionEntityCreateRequest)

DescriptionEntityCreateResponse = _reflection.GeneratedProtocolMessageType('DescriptionEntityCreateResponse', (_message.Message,), dict(
  DESCRIPTOR = _DESCRIPTIONENTITYCREATERESPONSE,
  __module__ = 'flyteidl.admin.description_entity_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.DescriptionEntityCreateResponse)
  ))
_sym_db.RegisterMessage(DescriptionEntityCreateResponse)

DescriptionEntityList = _reflection.GeneratedProtocolMessageType('DescriptionEntityList', (_message.Message,), dict(
  DESCRIPTOR = _DESCRIPTIONENTITYLIST,
  __module__ = 'flyteidl.admin.description_entity_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.DescriptionEntityList)
  ))
_sym_db.RegisterMessage(DescriptionEntityList)

DescriptionEntityListRequest = _reflection.GeneratedProtocolMessageType('DescriptionEntityListRequest', (_message.Message,), dict(
  DESCRIPTOR = _DESCRIPTIONENTITYLISTREQUEST,
  __module__ = 'flyteidl.admin.description_entity_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.DescriptionEntityListRequest)
  ))
_sym_db.RegisterMessage(DescriptionEntityListRequest)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)

# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: flyteidl/admin/launch_plan_attributes.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from flyteidl.admin import matchable_resource_pb2 as flyteidl_dot_admin_dot_matchable__resource__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='flyteidl/admin/launch_plan_attributes.proto',
  package='flyteidl.admin',
  syntax='proto3',
  serialized_options=_b('Z5github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/admin'),
  serialized_pb=_b('\n+flyteidl/admin/launch_plan_attributes.proto\x12\x0e\x66lyteidl.admin\x1a\'flyteidl/admin/matchable_resource.proto\"\x9f\x01\n\x14LaunchPlanAttributes\x12\x0f\n\x07project\x18\x01 \x01(\t\x12\x0e\n\x06\x64omain\x18\x02 \x01(\t\x12\x10\n\x08workflow\x18\x03 \x01(\t\x12\x13\n\x0blaunch_plan\x18\x04 \x01(\t\x12?\n\x13matching_attributes\x18\x05 \x01(\x0b\x32\".flyteidl.admin.MatchingAttributes\"]\n!LaunchPlanAttributesUpdateRequest\x12\x38\n\nattributes\x18\x01 \x01(\x0b\x32$.flyteidl.admin.LaunchPlanAttributes\"$\n\"LaunchPlanAttributesUpdateResponse\"\xa2\x01\n\x1eLaunchPlanAttributesGetRequest\x12\x0f\n\x07project\x18\x01 \x01(\t\x12\x0e\n\x06\x64omain\x18\x02 \x01(\t\x12\x10\n\x08workflow\x18\x03 \x01(\t\x12\x13\n\x0blaunch_plan\x18\x04 \x01(\t\x12\x38\n\rresource_type\x18\x05 \x01(\x0e\x32!.flyteidl.admin.MatchableResource\"[\n\x1fLaunchPlanAttributesGetResponse\x12\x38\n\nattributes\x18\x01 \x01(\x0b\x32$.flyteidl.admin.LaunchPlanAttributes\"\xa5\x01\n!LaunchPlanAttributesDeleteRequest\x12\x0f\n\x07project\x18\x01 \x01(\t\x12\x0e\n\x06\x64omain\x18\x02 \x01(\t\x12\x10\n\x08workflow\x18\x03 \x01(\t\x12\x13\n\x0blaunch_plan\x18\x04 \x01(\t\x12\x38\n\rresource_type\x18\x05 \x01(\x0e\x32!.flyteidl.admin.MatchableResource\"$\n\"LaunchPlanAttributesDeleteResponseB7Z5github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/adminb\x06proto3')
  ,
  dependencies=[flyteidl_dot_admin_dot_matchable__resource__pb2.DESCRIPTOR,])




_LAUNCHPLANATTRIBUTES = _descriptor.Descriptor(
  name='LaunchPlanAttributes',
  full_name='flyteidl.admin.LaunchPlanAttributes',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='project', full_name='flyteidl.admin.LaunchPlanAttributes.project', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='domain', full_name='flyteidl.admin.LaunchPlanAttributes.domain', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='workflow', full_name='flyteidl.admin.LaunchPlanAttributes.workflow', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='launch_plan', full_name='flyteidl.admin.LaunchPlanAttributes.launch_plan', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='matching_attributes', full_name='flyteidl.admin.LaunchPlanAttributes.matching_attributes', index=4,
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
  serialized_start=105,
  serialized_end=264,
)


_LAUNCHPLANATTRIBUTESUPDATEREQUEST = _descriptor.Descriptor(
  name='LaunchPlanAttributesUpdateRequest',
  full_name='flyteidl.admin.LaunchPlanAttributesUpdateRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='attributes', full_name='flyteidl.admin.LaunchPlanAttributesUpdateRequest.attributes', index=0,
      number=1, type=11, cpp_type=10, label=1,
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
  serialized_start=266,
  serialized_end=359,
)


_LAUNCHPLANATTRIBUTESUPDATERESPONSE = _descriptor.Descriptor(
  name='LaunchPlanAttributesUpdateResponse',
  full_name='flyteidl.admin.LaunchPlanAttributesUpdateResponse',
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
  serialized_start=361,
  serialized_end=397,
)


_LAUNCHPLANATTRIBUTESGETREQUEST = _descriptor.Descriptor(
  name='LaunchPlanAttributesGetRequest',
  full_name='flyteidl.admin.LaunchPlanAttributesGetRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='project', full_name='flyteidl.admin.LaunchPlanAttributesGetRequest.project', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='domain', full_name='flyteidl.admin.LaunchPlanAttributesGetRequest.domain', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='workflow', full_name='flyteidl.admin.LaunchPlanAttributesGetRequest.workflow', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='launch_plan', full_name='flyteidl.admin.LaunchPlanAttributesGetRequest.launch_plan', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='resource_type', full_name='flyteidl.admin.LaunchPlanAttributesGetRequest.resource_type', index=4,
      number=5, type=14, cpp_type=8, label=1,
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
  serialized_start=400,
  serialized_end=562,
)


_LAUNCHPLANATTRIBUTESGETRESPONSE = _descriptor.Descriptor(
  name='LaunchPlanAttributesGetResponse',
  full_name='flyteidl.admin.LaunchPlanAttributesGetResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='attributes', full_name='flyteidl.admin.LaunchPlanAttributesGetResponse.attributes', index=0,
      number=1, type=11, cpp_type=10, label=1,
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
  serialized_start=564,
  serialized_end=655,
)


_LAUNCHPLANATTRIBUTESDELETEREQUEST = _descriptor.Descriptor(
  name='LaunchPlanAttributesDeleteRequest',
  full_name='flyteidl.admin.LaunchPlanAttributesDeleteRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='project', full_name='flyteidl.admin.LaunchPlanAttributesDeleteRequest.project', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='domain', full_name='flyteidl.admin.LaunchPlanAttributesDeleteRequest.domain', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='workflow', full_name='flyteidl.admin.LaunchPlanAttributesDeleteRequest.workflow', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='launch_plan', full_name='flyteidl.admin.LaunchPlanAttributesDeleteRequest.launch_plan', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='resource_type', full_name='flyteidl.admin.LaunchPlanAttributesDeleteRequest.resource_type', index=4,
      number=5, type=14, cpp_type=8, label=1,
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
  serialized_start=658,
  serialized_end=823,
)


_LAUNCHPLANATTRIBUTESDELETERESPONSE = _descriptor.Descriptor(
  name='LaunchPlanAttributesDeleteResponse',
  full_name='flyteidl.admin.LaunchPlanAttributesDeleteResponse',
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
  serialized_start=825,
  serialized_end=861,
)

_LAUNCHPLANATTRIBUTES.fields_by_name['matching_attributes'].message_type = flyteidl_dot_admin_dot_matchable__resource__pb2._MATCHINGATTRIBUTES
_LAUNCHPLANATTRIBUTESUPDATEREQUEST.fields_by_name['attributes'].message_type = _LAUNCHPLANATTRIBUTES
_LAUNCHPLANATTRIBUTESGETREQUEST.fields_by_name['resource_type'].enum_type = flyteidl_dot_admin_dot_matchable__resource__pb2._MATCHABLERESOURCE
_LAUNCHPLANATTRIBUTESGETRESPONSE.fields_by_name['attributes'].message_type = _LAUNCHPLANATTRIBUTES
_LAUNCHPLANATTRIBUTESDELETEREQUEST.fields_by_name['resource_type'].enum_type = flyteidl_dot_admin_dot_matchable__resource__pb2._MATCHABLERESOURCE
DESCRIPTOR.message_types_by_name['LaunchPlanAttributes'] = _LAUNCHPLANATTRIBUTES
DESCRIPTOR.message_types_by_name['LaunchPlanAttributesUpdateRequest'] = _LAUNCHPLANATTRIBUTESUPDATEREQUEST
DESCRIPTOR.message_types_by_name['LaunchPlanAttributesUpdateResponse'] = _LAUNCHPLANATTRIBUTESUPDATERESPONSE
DESCRIPTOR.message_types_by_name['LaunchPlanAttributesGetRequest'] = _LAUNCHPLANATTRIBUTESGETREQUEST
DESCRIPTOR.message_types_by_name['LaunchPlanAttributesGetResponse'] = _LAUNCHPLANATTRIBUTESGETRESPONSE
DESCRIPTOR.message_types_by_name['LaunchPlanAttributesDeleteRequest'] = _LAUNCHPLANATTRIBUTESDELETEREQUEST
DESCRIPTOR.message_types_by_name['LaunchPlanAttributesDeleteResponse'] = _LAUNCHPLANATTRIBUTESDELETERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

LaunchPlanAttributes = _reflection.GeneratedProtocolMessageType('LaunchPlanAttributes', (_message.Message,), dict(
  DESCRIPTOR = _LAUNCHPLANATTRIBUTES,
  __module__ = 'flyteidl.admin.launch_plan_attributes_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.LaunchPlanAttributes)
  ))
_sym_db.RegisterMessage(LaunchPlanAttributes)

LaunchPlanAttributesUpdateRequest = _reflection.GeneratedProtocolMessageType('LaunchPlanAttributesUpdateRequest', (_message.Message,), dict(
  DESCRIPTOR = _LAUNCHPLANATTRIBUTESUPDATEREQUEST,
  __module__ = 'flyteidl.admin.launch_plan_attributes_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.LaunchPlanAttributesUpdateRequest)
  ))
_sym_db.RegisterMessage(LaunchPlanAttributesUpdateRequest)

LaunchPlanAttributesUpdateResponse = _reflection.GeneratedProtocolMessageType('LaunchPlanAttributesUpdateResponse', (_message.Message,), dict(
  DESCRIPTOR = _LAUNCHPLANATTRIBUTESUPDATERESPONSE,
  __module__ = 'flyteidl.admin.launch_plan_attributes_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.LaunchPlanAttributesUpdateResponse)
  ))
_sym_db.RegisterMessage(LaunchPlanAttributesUpdateResponse)

LaunchPlanAttributesGetRequest = _reflection.GeneratedProtocolMessageType('LaunchPlanAttributesGetRequest', (_message.Message,), dict(
  DESCRIPTOR = _LAUNCHPLANATTRIBUTESGETREQUEST,
  __module__ = 'flyteidl.admin.launch_plan_attributes_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.LaunchPlanAttributesGetRequest)
  ))
_sym_db.RegisterMessage(LaunchPlanAttributesGetRequest)

LaunchPlanAttributesGetResponse = _reflection.GeneratedProtocolMessageType('LaunchPlanAttributesGetResponse', (_message.Message,), dict(
  DESCRIPTOR = _LAUNCHPLANATTRIBUTESGETRESPONSE,
  __module__ = 'flyteidl.admin.launch_plan_attributes_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.LaunchPlanAttributesGetResponse)
  ))
_sym_db.RegisterMessage(LaunchPlanAttributesGetResponse)

LaunchPlanAttributesDeleteRequest = _reflection.GeneratedProtocolMessageType('LaunchPlanAttributesDeleteRequest', (_message.Message,), dict(
  DESCRIPTOR = _LAUNCHPLANATTRIBUTESDELETEREQUEST,
  __module__ = 'flyteidl.admin.launch_plan_attributes_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.LaunchPlanAttributesDeleteRequest)
  ))
_sym_db.RegisterMessage(LaunchPlanAttributesDeleteRequest)

LaunchPlanAttributesDeleteResponse = _reflection.GeneratedProtocolMessageType('LaunchPlanAttributesDeleteResponse', (_message.Message,), dict(
  DESCRIPTOR = _LAUNCHPLANATTRIBUTESDELETERESPONSE,
  __module__ = 'flyteidl.admin.launch_plan_attributes_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.admin.LaunchPlanAttributesDeleteResponse)
  ))
_sym_db.RegisterMessage(LaunchPlanAttributesDeleteResponse)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)

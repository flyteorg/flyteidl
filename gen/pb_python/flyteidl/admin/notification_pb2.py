# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: flyteidl/admin/notification.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n!flyteidl/admin/notification.proto\x12\x0e\x66lyteidl.admin\"\x93\x01\n\x0c\x45mailMessage\x12)\n\x10recipients_email\x18\x01 \x03(\tR\x0frecipientsEmail\x12!\n\x0csender_email\x18\x02 \x01(\tR\x0bsenderEmail\x12!\n\x0csubject_line\x18\x03 \x01(\tR\x0bsubjectLine\x12\x12\n\x04\x62ody\x18\x04 \x01(\tR\x04\x62ody\"*\n\x0eWebhookPayload\x12\x18\n\x07message\x18\x01 \x01(\tR\x07messageB\xb7\x01\n\x12\x63om.flyteidl.adminB\x11NotificationProtoP\x01Z5github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/admin\xa2\x02\x03\x46\x41X\xaa\x02\x0e\x46lyteidl.Admin\xca\x02\x0e\x46lyteidl\\Admin\xe2\x02\x1a\x46lyteidl\\Admin\\GPBMetadata\xea\x02\x0f\x46lyteidl::Adminb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'flyteidl.admin.notification_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\022com.flyteidl.adminB\021NotificationProtoP\001Z5github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/admin\242\002\003FAX\252\002\016Flyteidl.Admin\312\002\016Flyteidl\\Admin\342\002\032Flyteidl\\Admin\\GPBMetadata\352\002\017Flyteidl::Admin'
  _globals['_EMAILMESSAGE']._serialized_start=54
  _globals['_EMAILMESSAGE']._serialized_end=201
  _globals['_WEBHOOKPAYLOAD']._serialized_start=203
  _globals['_WEBHOOKPAYLOAD']._serialized_end=245
# @@protoc_insertion_point(module_scope)

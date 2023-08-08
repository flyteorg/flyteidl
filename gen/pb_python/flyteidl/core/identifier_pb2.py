# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: flyteidl/core/identifier.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1e\x66lyteidl/core/identifier.proto\x12\rflyteidl.core\"\xae\x01\n\nIdentifier\x12@\n\rresource_type\x18\x01 \x01(\x0e\x32\x1b.flyteidl.core.ResourceTypeR\x0cresourceType\x12\x18\n\x07project\x18\x02 \x01(\tR\x07project\x12\x16\n\x06\x64omain\x18\x03 \x01(\tR\x06\x64omain\x12\x12\n\x04name\x18\x04 \x01(\tR\x04name\x12\x18\n\x07version\x18\x05 \x01(\tR\x07version\"c\n\x1bWorkflowExecutionIdentifier\x12\x18\n\x07project\x18\x01 \x01(\tR\x07project\x12\x16\n\x06\x64omain\x18\x02 \x01(\tR\x06\x64omain\x12\x12\n\x04name\x18\x04 \x01(\tR\x04name\"\x81\x01\n\x17NodeExecutionIdentifier\x12\x17\n\x07node_id\x18\x01 \x01(\tR\x06nodeId\x12M\n\x0c\x65xecution_id\x18\x02 \x01(\x0b\x32*.flyteidl.core.WorkflowExecutionIdentifierR\x0b\x65xecutionId\"\xc6\x01\n\x17TaskExecutionIdentifier\x12\x32\n\x07task_id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.IdentifierR\x06taskId\x12R\n\x11node_execution_id\x18\x02 \x01(\x0b\x32&.flyteidl.core.NodeExecutionIdentifierR\x0fnodeExecutionId\x12#\n\rretry_attempt\x18\x03 \x01(\rR\x0cretryAttempt\"~\n\x10SignalIdentifier\x12\x1b\n\tsignal_id\x18\x01 \x01(\tR\x08signalId\x12M\n\x0c\x65xecution_id\x18\x02 \x01(\x0b\x32*.flyteidl.core.WorkflowExecutionIdentifierR\x0b\x65xecutionId\"S\n\x0b\x41rtifactKey\x12\x18\n\x07project\x18\x01 \x01(\tR\x07project\x12\x16\n\x06\x64omain\x18\x02 \x01(\tR\x06\x64omain\x12\x12\n\x04name\x18\x03 \x01(\tR\x04name\"\xef\x01\n\nArtifactID\x12=\n\x0c\x61rtifact_key\x18\x01 \x01(\x0b\x32\x1a.flyteidl.core.ArtifactKeyR\x0b\x61rtifactKey\x12\x18\n\x07version\x18\x02 \x01(\tR\x07version\x12I\n\npartitions\x18\x03 \x03(\x0b\x32).flyteidl.core.ArtifactID.PartitionsEntryR\npartitions\x1a=\n\x0fPartitionsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\"[\n\x0b\x41rtifactTag\x12:\n\x0b\x61rtifact_id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.ArtifactIDR\nartifactId\x12\x10\n\x03tag\x18\x02 \x01(\tR\x03tag\"\x87\x02\n\rArtifactQuery\x12=\n\x0c\x61rtifact_key\x18\x01 \x01(\x0b\x32\x1a.flyteidl.core.ArtifactKeyR\x0b\x61rtifactKey\x12\x10\n\x03tag\x18\x02 \x01(\tR\x03tag\x12L\n\npartitions\x18\x03 \x03(\x0b\x32,.flyteidl.core.ArtifactQuery.PartitionsEntryR\npartitions\x12\x18\n\x07version\x18\x04 \x01(\tR\x07version\x1a=\n\x0fPartitionsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01*U\n\x0cResourceType\x12\x0f\n\x0bUNSPECIFIED\x10\x00\x12\x08\n\x04TASK\x10\x01\x12\x0c\n\x08WORKFLOW\x10\x02\x12\x0f\n\x0bLAUNCH_PLAN\x10\x03\x12\x0b\n\x07\x44\x41TASET\x10\x04\x42\xaf\x01\n\x11\x63om.flyteidl.coreB\x0fIdentifierProtoP\x01Z4github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/core\xa2\x02\x03\x46\x43X\xaa\x02\rFlyteidl.Core\xca\x02\rFlyteidl\\Core\xe2\x02\x19\x46lyteidl\\Core\\GPBMetadata\xea\x02\x0e\x46lyteidl::Coreb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'flyteidl.core.identifier_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\021com.flyteidl.coreB\017IdentifierProtoP\001Z4github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/core\242\002\003FCX\252\002\rFlyteidl.Core\312\002\rFlyteidl\\Core\342\002\031Flyteidl\\Core\\GPBMetadata\352\002\016Flyteidl::Core'
  _ARTIFACTID_PARTITIONSENTRY._options = None
  _ARTIFACTID_PARTITIONSENTRY._serialized_options = b'8\001'
  _ARTIFACTQUERY_PARTITIONSENTRY._options = None
  _ARTIFACTQUERY_PARTITIONSENTRY._serialized_options = b'8\001'
  _globals['_RESOURCETYPE']._serialized_start=1474
  _globals['_RESOURCETYPE']._serialized_end=1559
  _globals['_IDENTIFIER']._serialized_start=50
  _globals['_IDENTIFIER']._serialized_end=224
  _globals['_WORKFLOWEXECUTIONIDENTIFIER']._serialized_start=226
  _globals['_WORKFLOWEXECUTIONIDENTIFIER']._serialized_end=325
  _globals['_NODEEXECUTIONIDENTIFIER']._serialized_start=328
  _globals['_NODEEXECUTIONIDENTIFIER']._serialized_end=457
  _globals['_TASKEXECUTIONIDENTIFIER']._serialized_start=460
  _globals['_TASKEXECUTIONIDENTIFIER']._serialized_end=658
  _globals['_SIGNALIDENTIFIER']._serialized_start=660
  _globals['_SIGNALIDENTIFIER']._serialized_end=786
  _globals['_ARTIFACTKEY']._serialized_start=788
  _globals['_ARTIFACTKEY']._serialized_end=871
  _globals['_ARTIFACTID']._serialized_start=874
  _globals['_ARTIFACTID']._serialized_end=1113
  _globals['_ARTIFACTID_PARTITIONSENTRY']._serialized_start=1052
  _globals['_ARTIFACTID_PARTITIONSENTRY']._serialized_end=1113
  _globals['_ARTIFACTTAG']._serialized_start=1115
  _globals['_ARTIFACTTAG']._serialized_end=1206
  _globals['_ARTIFACTQUERY']._serialized_start=1209
  _globals['_ARTIFACTQUERY']._serialized_end=1472
  _globals['_ARTIFACTQUERY_PARTITIONSENTRY']._serialized_start=1052
  _globals['_ARTIFACTQUERY_PARTITIONSENTRY']._serialized_end=1113
# @@protoc_insertion_point(module_scope)

# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: flyteidl/artifact/artifacts.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from flyteidl.core import literals_pb2 as flyteidl_dot_core_dot_literals__pb2
from flyteidl.core import types_pb2 as flyteidl_dot_core_dot_types__pb2
from flyteidl.core import identifier_pb2 as flyteidl_dot_core_dot_identifier__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n!flyteidl/artifact/artifacts.proto\x12\x11\x66lyteidl.artifact\x1a\x1c\x66lyteidl/core/literals.proto\x1a\x19\x66lyteidl/core/types.proto\x1a\x1e\x66lyteidl/core/identifier.proto\"\x8f\x01\n\x08\x41rtifact\x12:\n\x0b\x61rtifact_id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.ArtifactIDR\nartifactId\x12\x33\n\x04spec\x18\x02 \x01(\x0b\x32\x1f.flyteidl.artifact.ArtifactSpecR\x04spec\x12\x12\n\x04tags\x18\x03 \x03(\tR\x04tags\"\xd0\x02\n\x15\x43reateArtifactRequest\x12=\n\x0c\x61rtifact_key\x18\x01 \x01(\x0b\x32\x1a.flyteidl.core.ArtifactKeyR\x0b\x61rtifactKey\x12\x18\n\x07version\x18\x03 \x01(\tR\x07version\x12\x33\n\x04spec\x18\x02 \x01(\x0b\x32\x1f.flyteidl.artifact.ArtifactSpecR\x04spec\x12X\n\npartitions\x18\x04 \x03(\x0b\x32\x38.flyteidl.artifact.CreateArtifactRequest.PartitionsEntryR\npartitions\x12\x10\n\x03tag\x18\x05 \x01(\tR\x03tag\x1a=\n\x0fPartitionsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\"\x8b\x03\n\x0c\x41rtifactSpec\x12,\n\x05value\x18\x01 \x01(\x0b\x32\x16.flyteidl.core.LiteralR\x05value\x12.\n\x04type\x18\x02 \x01(\x0b\x32\x1a.flyteidl.core.LiteralTypeR\x04type\x12O\n\x0etask_execution\x18\x05 \x01(\x0b\x32&.flyteidl.core.TaskExecutionIdentifierH\x00R\rtaskExecution\x12J\n\texecution\x18\x06 \x01(\x0b\x32*.flyteidl.core.WorkflowExecutionIdentifierH\x00R\texecution\x12\x1e\n\tprincipal\x18\x07 \x01(\tH\x00R\tprincipal\x12+\n\x11short_description\x18\x08 \x01(\tR\x10shortDescription\x12)\n\x10long_description\x18\t \x01(\tR\x0flongDescriptionB\x08\n\x06source\"Q\n\x16\x43reateArtifactResponse\x12\x37\n\x08\x61rtifact\x18\x01 \x01(\x0b\x32\x1b.flyteidl.artifact.ArtifactR\x08\x61rtifact\"\xc4\x01\n\x12GetArtifactRequest\x12<\n\x0b\x61rtifact_id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.ArtifactIDH\x00R\nartifactId\x12\x12\n\x03uri\x18\x03 \x01(\tH\x00R\x03uri\x12\x34\n\x05query\x18\x04 \x01(\x0b\x32\x1c.flyteidl.core.ArtifactQueryH\x00R\x05query\x12\x18\n\x07\x64\x65tails\x18\x05 \x01(\x08R\x07\x64\x65tailsB\x0c\n\nidentifier\"N\n\x13GetArtifactResponse\x12\x37\n\x08\x61rtifact\x18\x01 \x01(\x0b\x32\x1b.flyteidl.artifact.ArtifactR\x08\x61rtifact\"L\n\x18ListArtifactNamesRequest\x12\x18\n\x07project\x18\x01 \x01(\tR\x07project\x12\x16\n\x06\x64omain\x18\x02 \x01(\tR\x06\x64omain\"\\\n\x19ListArtifactNamesResponse\x12?\n\rartifact_keys\x18\x01 \x03(\x0b\x32\x1a.flyteidl.core.ArtifactKeyR\x0c\x61rtifactKeys\"U\n\x14ListArtifactsRequest\x12=\n\x0c\x61rtifact_key\x18\x01 \x01(\x0b\x32\x1a.flyteidl.core.ArtifactKeyR\x0b\x61rtifactKey\"R\n\x15ListArtifactsResponse\x12\x39\n\tartifacts\x18\x01 \x03(\x0b\x32\x1b.flyteidl.artifact.ArtifactR\tartifacts\"\x7f\n\rAddTagRequest\x12:\n\x0b\x61rtifact_id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.ArtifactIDR\nartifactId\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value\x12\x1c\n\toverwrite\x18\x03 \x01(\x08R\toverwrite\"\x10\n\x0e\x41\x64\x64TagResponse2\xac\x02\n\x10\x41rtifactRegistry\x12g\n\x0e\x43reateArtifact\x12(.flyteidl.artifact.CreateArtifactRequest\x1a).flyteidl.artifact.CreateArtifactResponse\"\x00\x12^\n\x0bGetArtifact\x12%.flyteidl.artifact.GetArtifactRequest\x1a&.flyteidl.artifact.GetArtifactResponse\"\x00\x12O\n\x06\x41\x64\x64Tag\x12 .flyteidl.artifact.AddTagRequest\x1a!.flyteidl.artifact.AddTagResponse\"\x00\x42\xc6\x01\n\x15\x63om.flyteidl.artifactB\x0e\x41rtifactsProtoP\x01Z8github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/artifact\xa2\x02\x03\x46\x41X\xaa\x02\x11\x46lyteidl.Artifact\xca\x02\x11\x46lyteidl\\Artifact\xe2\x02\x1d\x46lyteidl\\Artifact\\GPBMetadata\xea\x02\x12\x46lyteidl::Artifactb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'flyteidl.artifact.artifacts_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\025com.flyteidl.artifactB\016ArtifactsProtoP\001Z8github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/artifact\242\002\003FAX\252\002\021Flyteidl.Artifact\312\002\021Flyteidl\\Artifact\342\002\035Flyteidl\\Artifact\\GPBMetadata\352\002\022Flyteidl::Artifact'
  _CREATEARTIFACTREQUEST_PARTITIONSENTRY._options = None
  _CREATEARTIFACTREQUEST_PARTITIONSENTRY._serialized_options = b'8\001'
  _globals['_ARTIFACT']._serialized_start=146
  _globals['_ARTIFACT']._serialized_end=289
  _globals['_CREATEARTIFACTREQUEST']._serialized_start=292
  _globals['_CREATEARTIFACTREQUEST']._serialized_end=628
  _globals['_CREATEARTIFACTREQUEST_PARTITIONSENTRY']._serialized_start=567
  _globals['_CREATEARTIFACTREQUEST_PARTITIONSENTRY']._serialized_end=628
  _globals['_ARTIFACTSPEC']._serialized_start=631
  _globals['_ARTIFACTSPEC']._serialized_end=1026
  _globals['_CREATEARTIFACTRESPONSE']._serialized_start=1028
  _globals['_CREATEARTIFACTRESPONSE']._serialized_end=1109
  _globals['_GETARTIFACTREQUEST']._serialized_start=1112
  _globals['_GETARTIFACTREQUEST']._serialized_end=1308
  _globals['_GETARTIFACTRESPONSE']._serialized_start=1310
  _globals['_GETARTIFACTRESPONSE']._serialized_end=1388
  _globals['_LISTARTIFACTNAMESREQUEST']._serialized_start=1390
  _globals['_LISTARTIFACTNAMESREQUEST']._serialized_end=1466
  _globals['_LISTARTIFACTNAMESRESPONSE']._serialized_start=1468
  _globals['_LISTARTIFACTNAMESRESPONSE']._serialized_end=1560
  _globals['_LISTARTIFACTSREQUEST']._serialized_start=1562
  _globals['_LISTARTIFACTSREQUEST']._serialized_end=1647
  _globals['_LISTARTIFACTSRESPONSE']._serialized_start=1649
  _globals['_LISTARTIFACTSRESPONSE']._serialized_end=1731
  _globals['_ADDTAGREQUEST']._serialized_start=1733
  _globals['_ADDTAGREQUEST']._serialized_end=1860
  _globals['_ADDTAGRESPONSE']._serialized_start=1862
  _globals['_ADDTAGRESPONSE']._serialized_end=1878
  _globals['_ARTIFACTREGISTRY']._serialized_start=1881
  _globals['_ARTIFACTREGISTRY']._serialized_end=2181
# @@protoc_insertion_point(module_scope)

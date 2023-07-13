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


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n!flyteidl/artifact/artifacts.proto\x12\x11\x66lyteidl.artifact\x1a\x1c\x66lyteidl/core/literals.proto\x1a\x19\x66lyteidl/core/types.proto\x1a\x1e\x66lyteidl/core/identifier.proto\"\x8d\x01\n\x08\x41rtifact\x12:\n\x0b\x61rtifact_id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.ArtifactIDR\nartifactId\x12\x10\n\x03uri\x18\x02 \x01(\tR\x03uri\x12\x33\n\x04spec\x18\x03 \x01(\x0b\x32\x1f.flyteidl.artifact.ArtifactSpecR\x04spec\"\x9d\x01\n\x15\x43reateArtifactRequest\x12=\n\x0c\x61rtifact_key\x18\x01 \x01(\x0b\x32\x1a.flyteidl.core.ArtifactKeyR\x0b\x61rtifactKey\x12\x10\n\x03uri\x18\x02 \x01(\tR\x03uri\x12\x33\n\x04spec\x18\x03 \x01(\x0b\x32\x1f.flyteidl.artifact.ArtifactSpecR\x04spec\"\xeb\x03\n\x0c\x41rtifactSpec\x12,\n\x05value\x18\x01 \x01(\x0b\x32\x16.flyteidl.core.LiteralR\x05value\x12.\n\x04type\x18\x02 \x01(\x0b\x32\x1a.flyteidl.core.LiteralTypeR\x04type\x12*\n\x04tags\x18\x03 \x03(\x0b\x32\x16.flyteidl.artifact.TagR\x04tags\x12\x32\n\x07\x61liases\x18\x04 \x03(\x0b\x32\x18.flyteidl.artifact.AliasR\x07\x61liases\x12O\n\x0etask_execution\x18\x05 \x01(\x0b\x32&.flyteidl.core.TaskExecutionIdentifierH\x00R\rtaskExecution\x12J\n\texecution\x18\x06 \x01(\x0b\x32*.flyteidl.core.WorkflowExecutionIdentifierH\x00R\texecution\x12\x1e\n\tprincipal\x18\x07 \x01(\tH\x00R\tprincipal\x12+\n\x11short_description\x18\x08 \x01(\tR\x10shortDescription\x12)\n\x10long_description\x18\t \x01(\tR\x0flongDescriptionB\x08\n\x06source\"R\n\x05\x41lias\x12\x1f\n\x0b\x61rtifact_id\x18\x01 \x01(\tR\nartifactId\x12\x12\n\x04name\x18\x02 \x01(\tR\x04name\x12\x14\n\x05value\x18\x03 \x01(\tR\x05value\"~\n\rArtifactQuery\x12=\n\x0c\x61rtifact_key\x18\x01 \x01(\x0b\x32\x1a.flyteidl.core.ArtifactKeyR\x0b\x61rtifactKey\x12.\n\x05\x61lias\x18\x02 \x01(\x0b\x32\x18.flyteidl.artifact.AliasR\x05\x61lias\"Q\n\x16\x43reateArtifactResponse\x12\x37\n\x08\x61rtifact\x18\x01 \x01(\x0b\x32\x1b.flyteidl.artifact.ArtifactR\x08\x61rtifact\"\x8e\x01\n\x12GetArtifactRequest\x12<\n\x0b\x61rtifact_id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.ArtifactIDH\x00R\nartifactId\x12\x12\n\x03uri\x18\x02 \x01(\tH\x00R\x03uri\x12\x18\n\x07\x64\x65tails\x18\x03 \x01(\x08R\x07\x64\x65tailsB\x0c\n\nidentifier\"-\n\x03Tag\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value\"x\n\x0e\x41\x64\x64TagsRequest\x12:\n\x0b\x61rtifact_id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.ArtifactIDR\nartifactId\x12*\n\x04tags\x18\x02 \x03(\x0b\x32\x16.flyteidl.artifact.TagR\x04tags\"\x11\n\x0f\x41\x64\x64TagsResponse\"{\n\x11RemoveTagsRequest\x12:\n\x0b\x61rtifact_id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.ArtifactIDR\nartifactId\x12*\n\x04tags\x18\x02 \x03(\x0b\x32\x16.flyteidl.artifact.TagR\x04tags\"\x14\n\x12RemoveTagsResponse\"L\n\x18ListArtifactNamesRequest\x12\x18\n\x07project\x18\x01 \x01(\tR\x07project\x12\x16\n\x06\x64omain\x18\x02 \x01(\tR\x06\x64omain\"\\\n\x19ListArtifactNamesResponse\x12?\n\rartifact_keys\x18\x01 \x03(\x0b\x32\x1a.flyteidl.core.ArtifactKeyR\x0c\x61rtifactKeys\"U\n\x14ListArtifactsRequest\x12=\n\x0c\x61rtifact_key\x18\x01 \x01(\x0b\x32\x1a.flyteidl.core.ArtifactKeyR\x0b\x61rtifactKey\"R\n\x15ListArtifactsResponse\x12\x39\n\tartifacts\x18\x01 \x03(\x0b\x32\x1b.flyteidl.artifact.ArtifactR\tartifacts\"\xa1\x01\n\x12\x43reateAliasRequest\x12=\n\x0c\x61rtifact_key\x18\x01 \x01(\x0b\x32\x1a.flyteidl.core.ArtifactKeyR\x0b\x61rtifactKey\x12.\n\x05\x61lias\x18\x02 \x01(\x0b\x32\x18.flyteidl.artifact.AliasR\x05\x61lias\x12\x1c\n\toverwrite\x18\x03 \x01(\x08R\toverwrite\"\x15\n\x13\x43reateAliasResponse\"\x83\x01\n\x12RemoveAliasRequest\x12=\n\x0c\x61rtifact_key\x18\x01 \x01(\x0b\x32\x1a.flyteidl.core.ArtifactKeyR\x0b\x61rtifactKey\x12.\n\x05\x61lias\x18\x02 \x01(\x0b\x32\x18.flyteidl.artifact.AliasR\x05\x61lias\"\x15\n\x13RemoveAliasResponse2\x9d\x06\n\x10\x41rtifactRegistry\x12g\n\x0e\x43reateArtifact\x12(.flyteidl.artifact.CreateArtifactRequest\x1a).flyteidl.artifact.CreateArtifactResponse\"\x00\x12S\n\x0bGetArtifact\x12%.flyteidl.artifact.GetArtifactRequest\x1a\x1b.flyteidl.artifact.Artifact\"\x00\x12p\n\x11ListArtifactNames\x12+.flyteidl.artifact.ListArtifactNamesRequest\x1a,.flyteidl.artifact.ListArtifactNamesResponse\"\x00\x12\x64\n\rListArtifacts\x12\'.flyteidl.artifact.ListArtifactsRequest\x1a(.flyteidl.artifact.ListArtifactsResponse\"\x00\x12V\n\x0bTagArtifact\x12!.flyteidl.artifact.AddTagsRequest\x1a\".flyteidl.artifact.AddTagsResponse\"\x00\x12[\n\nRemoveTags\x12$.flyteidl.artifact.RemoveTagsRequest\x1a%.flyteidl.artifact.RemoveTagsResponse\"\x00\x12^\n\x0b\x43reateAlias\x12%.flyteidl.artifact.CreateAliasRequest\x1a&.flyteidl.artifact.CreateAliasResponse\"\x00\x12^\n\x0bRemoveAlias\x12%.flyteidl.artifact.RemoveAliasRequest\x1a&.flyteidl.artifact.RemoveAliasResponse\"\x00\x42\xc6\x01\n\x15\x63om.flyteidl.artifactB\x0e\x41rtifactsProtoP\x01Z8github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/artifact\xa2\x02\x03\x46\x41X\xaa\x02\x11\x46lyteidl.Artifact\xca\x02\x11\x46lyteidl\\Artifact\xe2\x02\x1d\x46lyteidl\\Artifact\\GPBMetadata\xea\x02\x12\x46lyteidl::Artifactb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'flyteidl.artifact.artifacts_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\025com.flyteidl.artifactB\016ArtifactsProtoP\001Z8github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/artifact\242\002\003FAX\252\002\021Flyteidl.Artifact\312\002\021Flyteidl\\Artifact\342\002\035Flyteidl\\Artifact\\GPBMetadata\352\002\022Flyteidl::Artifact'
  _globals['_ARTIFACT']._serialized_start=146
  _globals['_ARTIFACT']._serialized_end=287
  _globals['_CREATEARTIFACTREQUEST']._serialized_start=290
  _globals['_CREATEARTIFACTREQUEST']._serialized_end=447
  _globals['_ARTIFACTSPEC']._serialized_start=450
  _globals['_ARTIFACTSPEC']._serialized_end=941
  _globals['_ALIAS']._serialized_start=943
  _globals['_ALIAS']._serialized_end=1025
  _globals['_ARTIFACTQUERY']._serialized_start=1027
  _globals['_ARTIFACTQUERY']._serialized_end=1153
  _globals['_CREATEARTIFACTRESPONSE']._serialized_start=1155
  _globals['_CREATEARTIFACTRESPONSE']._serialized_end=1236
  _globals['_GETARTIFACTREQUEST']._serialized_start=1239
  _globals['_GETARTIFACTREQUEST']._serialized_end=1381
  _globals['_TAG']._serialized_start=1383
  _globals['_TAG']._serialized_end=1428
  _globals['_ADDTAGSREQUEST']._serialized_start=1430
  _globals['_ADDTAGSREQUEST']._serialized_end=1550
  _globals['_ADDTAGSRESPONSE']._serialized_start=1552
  _globals['_ADDTAGSRESPONSE']._serialized_end=1569
  _globals['_REMOVETAGSREQUEST']._serialized_start=1571
  _globals['_REMOVETAGSREQUEST']._serialized_end=1694
  _globals['_REMOVETAGSRESPONSE']._serialized_start=1696
  _globals['_REMOVETAGSRESPONSE']._serialized_end=1716
  _globals['_LISTARTIFACTNAMESREQUEST']._serialized_start=1718
  _globals['_LISTARTIFACTNAMESREQUEST']._serialized_end=1794
  _globals['_LISTARTIFACTNAMESRESPONSE']._serialized_start=1796
  _globals['_LISTARTIFACTNAMESRESPONSE']._serialized_end=1888
  _globals['_LISTARTIFACTSREQUEST']._serialized_start=1890
  _globals['_LISTARTIFACTSREQUEST']._serialized_end=1975
  _globals['_LISTARTIFACTSRESPONSE']._serialized_start=1977
  _globals['_LISTARTIFACTSRESPONSE']._serialized_end=2059
  _globals['_CREATEALIASREQUEST']._serialized_start=2062
  _globals['_CREATEALIASREQUEST']._serialized_end=2223
  _globals['_CREATEALIASRESPONSE']._serialized_start=2225
  _globals['_CREATEALIASRESPONSE']._serialized_end=2246
  _globals['_REMOVEALIASREQUEST']._serialized_start=2249
  _globals['_REMOVEALIASREQUEST']._serialized_end=2380
  _globals['_REMOVEALIASRESPONSE']._serialized_start=2382
  _globals['_REMOVEALIASRESPONSE']._serialized_end=2403
  _globals['_ARTIFACTREGISTRY']._serialized_start=2406
  _globals['_ARTIFACTREGISTRY']._serialized_end=3203
# @@protoc_insertion_point(module_scope)

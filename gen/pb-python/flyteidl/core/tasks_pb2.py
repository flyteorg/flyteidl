# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: flyteidl/core/tasks.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from flyteidl.core import identifier_pb2 as flyteidl_dot_core_dot_identifier__pb2
from flyteidl.core import interface_pb2 as flyteidl_dot_core_dot_interface__pb2
from flyteidl.core import literals_pb2 as flyteidl_dot_core_dot_literals__pb2
from flyteidl.core import security_pb2 as flyteidl_dot_core_dot_security__pb2
from google.protobuf import duration_pb2 as google_dot_protobuf_dot_duration__pb2
from google.protobuf import struct_pb2 as google_dot_protobuf_dot_struct__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x19\x66lyteidl/core/tasks.proto\x12\rflyteidl.core\x1a\x1e\x66lyteidl/core/identifier.proto\x1a\x1d\x66lyteidl/core/interface.proto\x1a\x1c\x66lyteidl/core/literals.proto\x1a\x1c\x66lyteidl/core/security.proto\x1a\x1egoogle/protobuf/duration.proto\x1a\x1cgoogle/protobuf/struct.proto\"\xd0\x02\n\tResources\x12\x42\n\x08requests\x18\x01 \x03(\x0b\x32&.flyteidl.core.Resources.ResourceEntryR\x08requests\x12>\n\x06limits\x18\x02 \x03(\x0b\x32&.flyteidl.core.Resources.ResourceEntryR\x06limits\x1a`\n\rResourceEntry\x12\x39\n\x04name\x18\x01 \x01(\x0e\x32%.flyteidl.core.Resources.ResourceNameR\x04name\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value\"]\n\x0cResourceName\x12\x0b\n\x07UNKNOWN\x10\x00\x12\x07\n\x03\x43PU\x10\x01\x12\x07\n\x03GPU\x10\x02\x12\n\n\x06MEMORY\x10\x03\x12\x0b\n\x07STORAGE\x10\x04\x12\x15\n\x11\x45PHEMERAL_STORAGE\x10\x05\"\xac\x01\n\x0fRuntimeMetadata\x12>\n\x04type\x18\x01 \x01(\x0e\x32*.flyteidl.core.RuntimeMetadata.RuntimeTypeR\x04type\x12\x18\n\x07version\x18\x02 \x01(\tR\x07version\x12\x16\n\x06\x66lavor\x18\x03 \x01(\tR\x06\x66lavor\"\'\n\x0bRuntimeType\x12\t\n\x05OTHER\x10\x00\x12\r\n\tFLYTE_SDK\x10\x01\"\xae\x03\n\x0cTaskMetadata\x12\"\n\x0c\x64iscoverable\x18\x01 \x01(\x08R\x0c\x64iscoverable\x12\x38\n\x07runtime\x18\x02 \x01(\x0b\x32\x1e.flyteidl.core.RuntimeMetadataR\x07runtime\x12\x33\n\x07timeout\x18\x04 \x01(\x0b\x32\x19.google.protobuf.DurationR\x07timeout\x12\x36\n\x07retries\x18\x05 \x01(\x0b\x32\x1c.flyteidl.core.RetryStrategyR\x07retries\x12+\n\x11\x64iscovery_version\x18\x06 \x01(\tR\x10\x64iscoveryVersion\x12\x38\n\x18\x64\x65precated_error_message\x18\x07 \x01(\tR\x16\x64\x65precatedErrorMessage\x12&\n\rinterruptible\x18\x08 \x01(\x08H\x00R\rinterruptible\x12-\n\x12\x63\x61\x63he_serializable\x18\t \x01(\x08R\x11\x63\x61\x63heSerializableB\x15\n\x13interruptible_value\"\x85\x05\n\x0cTaskTemplate\x12)\n\x02id\x18\x01 \x01(\x0b\x32\x19.flyteidl.core.IdentifierR\x02id\x12\x12\n\x04type\x18\x02 \x01(\tR\x04type\x12\x37\n\x08metadata\x18\x03 \x01(\x0b\x32\x1b.flyteidl.core.TaskMetadataR\x08metadata\x12;\n\tinterface\x18\x04 \x01(\x0b\x32\x1d.flyteidl.core.TypedInterfaceR\tinterface\x12/\n\x06\x63ustom\x18\x05 \x01(\x0b\x32\x17.google.protobuf.StructR\x06\x63ustom\x12\x38\n\tcontainer\x18\x06 \x01(\x0b\x32\x18.flyteidl.core.ContainerH\x00R\tcontainer\x12\x30\n\x07k8s_pod\x18\x11 \x01(\x0b\x32\x15.flyteidl.core.K8sPodH\x00R\x06k8sPod\x12&\n\x03sql\x18\x12 \x01(\x0b\x32\x12.flyteidl.core.SqlH\x00R\x03sql\x12*\n\x11task_type_version\x18\x07 \x01(\x05R\x0ftaskTypeVersion\x12I\n\x10security_context\x18\x08 \x01(\x0b\x32\x1e.flyteidl.core.SecurityContextR\x0fsecurityContext\x12?\n\x06\x63onfig\x18\x10 \x03(\x0b\x32\'.flyteidl.core.TaskTemplate.ConfigEntryR\x06\x63onfig\x1a\x39\n\x0b\x43onfigEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x42\x08\n\x06target\"6\n\rContainerPort\x12%\n\x0e\x63ontainer_port\x18\x01 \x01(\rR\rcontainerPort\"\xfc\x03\n\tContainer\x12\x14\n\x05image\x18\x01 \x01(\tR\x05image\x12\x18\n\x07\x63ommand\x18\x02 \x03(\tR\x07\x63ommand\x12\x12\n\x04\x61rgs\x18\x03 \x03(\tR\x04\x61rgs\x12\x36\n\tresources\x18\x04 \x01(\x0b\x32\x18.flyteidl.core.ResourcesR\tresources\x12-\n\x03\x65nv\x18\x05 \x03(\x0b\x32\x1b.flyteidl.core.KeyValuePairR\x03\x65nv\x12\x37\n\x06\x63onfig\x18\x06 \x03(\x0b\x32\x1b.flyteidl.core.KeyValuePairB\x02\x18\x01R\x06\x63onfig\x12\x32\n\x05ports\x18\x07 \x03(\x0b\x32\x1c.flyteidl.core.ContainerPortR\x05ports\x12\x41\n\x0b\x64\x61ta_config\x18\t \x01(\x0b\x32 .flyteidl.core.DataLoadingConfigR\ndataConfig\x12I\n\x0c\x61rchitecture\x18\n \x01(\x0e\x32%.flyteidl.core.Container.ArchitectureR\x0c\x61rchitecture\"I\n\x0c\x41rchitecture\x12\x0b\n\x07UNKNOWN\x10\x00\x12\t\n\x05\x41MD64\x10\x01\x12\t\n\x05\x41RM64\x10\x02\x12\n\n\x06\x41RM_V6\x10\x03\x12\n\n\x06\x41RM_V7\x10\x04\"\xb5\x02\n\nIOStrategy\x12K\n\rdownload_mode\x18\x01 \x01(\x0e\x32&.flyteidl.core.IOStrategy.DownloadModeR\x0c\x64ownloadMode\x12\x45\n\x0bupload_mode\x18\x02 \x01(\x0e\x32$.flyteidl.core.IOStrategy.UploadModeR\nuploadMode\"L\n\x0c\x44ownloadMode\x12\x12\n\x0e\x44OWNLOAD_EAGER\x10\x00\x12\x13\n\x0f\x44OWNLOAD_STREAM\x10\x01\x12\x13\n\x0f\x44O_NOT_DOWNLOAD\x10\x02\"E\n\nUploadMode\x12\x12\n\x0eUPLOAD_ON_EXIT\x10\x00\x12\x10\n\x0cUPLOAD_EAGER\x10\x01\x12\x11\n\rDO_NOT_UPLOAD\x10\x02\"\xa7\x02\n\x11\x44\x61taLoadingConfig\x12\x18\n\x07\x65nabled\x18\x01 \x01(\x08R\x07\x65nabled\x12\x1d\n\ninput_path\x18\x02 \x01(\tR\tinputPath\x12\x1f\n\x0boutput_path\x18\x03 \x01(\tR\noutputPath\x12I\n\x06\x66ormat\x18\x04 \x01(\x0e\x32\x31.flyteidl.core.DataLoadingConfig.LiteralMapFormatR\x06\x66ormat\x12:\n\x0bio_strategy\x18\x05 \x01(\x0b\x32\x19.flyteidl.core.IOStrategyR\nioStrategy\"1\n\x10LiteralMapFormat\x12\x08\n\x04JSON\x10\x00\x12\x08\n\x04YAML\x10\x01\x12\t\n\x05PROTO\x10\x02\"z\n\x06K8sPod\x12<\n\x08metadata\x18\x01 \x01(\x0b\x32 .flyteidl.core.K8sObjectMetadataR\x08metadata\x12\x32\n\x08pod_spec\x18\x02 \x01(\x0b\x32\x17.google.protobuf.StructR\x07podSpec\"\xa9\x02\n\x11K8sObjectMetadata\x12\x44\n\x06labels\x18\x01 \x03(\x0b\x32,.flyteidl.core.K8sObjectMetadata.LabelsEntryR\x06labels\x12S\n\x0b\x61nnotations\x18\x02 \x03(\x0b\x32\x31.flyteidl.core.K8sObjectMetadata.AnnotationsEntryR\x0b\x61nnotations\x1a\x39\n\x0bLabelsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\x1a>\n\x10\x41nnotationsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x14\n\x05value\x18\x02 \x01(\tR\x05value:\x02\x38\x01\"\x92\x01\n\x03Sql\x12\x1c\n\tstatement\x18\x01 \x01(\tR\tstatement\x12\x34\n\x07\x64ialect\x18\x02 \x01(\x0e\x32\x1a.flyteidl.core.Sql.DialectR\x07\x64ialect\"7\n\x07\x44ialect\x12\r\n\tUNDEFINED\x10\x00\x12\x08\n\x04\x41NSI\x10\x01\x12\x08\n\x04HIVE\x10\x02\x12\t\n\x05OTHER\x10\x03\x42\xad\x01\n\x11\x63om.flyteidl.coreB\nTasksProtoH\x02Z4github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/core\xf8\x01\x00\xa2\x02\x03\x46\x43X\xaa\x02\rFlyteidl.Core\xca\x02\rFlyteidl\\Core\xe2\x02\x19\x46lyteidl\\Core\\GPBMetadata\xea\x02\x0e\x46lyteidl::Coreb\x06proto3')



_RESOURCES = DESCRIPTOR.message_types_by_name['Resources']
_RESOURCES_RESOURCEENTRY = _RESOURCES.nested_types_by_name['ResourceEntry']
_RUNTIMEMETADATA = DESCRIPTOR.message_types_by_name['RuntimeMetadata']
_TASKMETADATA = DESCRIPTOR.message_types_by_name['TaskMetadata']
_TASKTEMPLATE = DESCRIPTOR.message_types_by_name['TaskTemplate']
_TASKTEMPLATE_CONFIGENTRY = _TASKTEMPLATE.nested_types_by_name['ConfigEntry']
_CONTAINERPORT = DESCRIPTOR.message_types_by_name['ContainerPort']
_CONTAINER = DESCRIPTOR.message_types_by_name['Container']
_IOSTRATEGY = DESCRIPTOR.message_types_by_name['IOStrategy']
_DATALOADINGCONFIG = DESCRIPTOR.message_types_by_name['DataLoadingConfig']
_K8SPOD = DESCRIPTOR.message_types_by_name['K8sPod']
_K8SOBJECTMETADATA = DESCRIPTOR.message_types_by_name['K8sObjectMetadata']
_K8SOBJECTMETADATA_LABELSENTRY = _K8SOBJECTMETADATA.nested_types_by_name['LabelsEntry']
_K8SOBJECTMETADATA_ANNOTATIONSENTRY = _K8SOBJECTMETADATA.nested_types_by_name['AnnotationsEntry']
_SQL = DESCRIPTOR.message_types_by_name['Sql']
_RESOURCES_RESOURCENAME = _RESOURCES.enum_types_by_name['ResourceName']
_RUNTIMEMETADATA_RUNTIMETYPE = _RUNTIMEMETADATA.enum_types_by_name['RuntimeType']
_CONTAINER_ARCHITECTURE = _CONTAINER.enum_types_by_name['Architecture']
_IOSTRATEGY_DOWNLOADMODE = _IOSTRATEGY.enum_types_by_name['DownloadMode']
_IOSTRATEGY_UPLOADMODE = _IOSTRATEGY.enum_types_by_name['UploadMode']
_DATALOADINGCONFIG_LITERALMAPFORMAT = _DATALOADINGCONFIG.enum_types_by_name['LiteralMapFormat']
_SQL_DIALECT = _SQL.enum_types_by_name['Dialect']
Resources = _reflection.GeneratedProtocolMessageType('Resources', (_message.Message,), {

  'ResourceEntry' : _reflection.GeneratedProtocolMessageType('ResourceEntry', (_message.Message,), {
    'DESCRIPTOR' : _RESOURCES_RESOURCEENTRY,
    '__module__' : 'flyteidl.core.tasks_pb2'
    # @@protoc_insertion_point(class_scope:flyteidl.core.Resources.ResourceEntry)
    })
  ,
  'DESCRIPTOR' : _RESOURCES,
  '__module__' : 'flyteidl.core.tasks_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.Resources)
  })
_sym_db.RegisterMessage(Resources)
_sym_db.RegisterMessage(Resources.ResourceEntry)

RuntimeMetadata = _reflection.GeneratedProtocolMessageType('RuntimeMetadata', (_message.Message,), {
  'DESCRIPTOR' : _RUNTIMEMETADATA,
  '__module__' : 'flyteidl.core.tasks_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.RuntimeMetadata)
  })
_sym_db.RegisterMessage(RuntimeMetadata)

TaskMetadata = _reflection.GeneratedProtocolMessageType('TaskMetadata', (_message.Message,), {
  'DESCRIPTOR' : _TASKMETADATA,
  '__module__' : 'flyteidl.core.tasks_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.TaskMetadata)
  })
_sym_db.RegisterMessage(TaskMetadata)

TaskTemplate = _reflection.GeneratedProtocolMessageType('TaskTemplate', (_message.Message,), {

  'ConfigEntry' : _reflection.GeneratedProtocolMessageType('ConfigEntry', (_message.Message,), {
    'DESCRIPTOR' : _TASKTEMPLATE_CONFIGENTRY,
    '__module__' : 'flyteidl.core.tasks_pb2'
    # @@protoc_insertion_point(class_scope:flyteidl.core.TaskTemplate.ConfigEntry)
    })
  ,
  'DESCRIPTOR' : _TASKTEMPLATE,
  '__module__' : 'flyteidl.core.tasks_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.TaskTemplate)
  })
_sym_db.RegisterMessage(TaskTemplate)
_sym_db.RegisterMessage(TaskTemplate.ConfigEntry)

ContainerPort = _reflection.GeneratedProtocolMessageType('ContainerPort', (_message.Message,), {
  'DESCRIPTOR' : _CONTAINERPORT,
  '__module__' : 'flyteidl.core.tasks_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.ContainerPort)
  })
_sym_db.RegisterMessage(ContainerPort)

Container = _reflection.GeneratedProtocolMessageType('Container', (_message.Message,), {
  'DESCRIPTOR' : _CONTAINER,
  '__module__' : 'flyteidl.core.tasks_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.Container)
  })
_sym_db.RegisterMessage(Container)

IOStrategy = _reflection.GeneratedProtocolMessageType('IOStrategy', (_message.Message,), {
  'DESCRIPTOR' : _IOSTRATEGY,
  '__module__' : 'flyteidl.core.tasks_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.IOStrategy)
  })
_sym_db.RegisterMessage(IOStrategy)

DataLoadingConfig = _reflection.GeneratedProtocolMessageType('DataLoadingConfig', (_message.Message,), {
  'DESCRIPTOR' : _DATALOADINGCONFIG,
  '__module__' : 'flyteidl.core.tasks_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.DataLoadingConfig)
  })
_sym_db.RegisterMessage(DataLoadingConfig)

K8sPod = _reflection.GeneratedProtocolMessageType('K8sPod', (_message.Message,), {
  'DESCRIPTOR' : _K8SPOD,
  '__module__' : 'flyteidl.core.tasks_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.K8sPod)
  })
_sym_db.RegisterMessage(K8sPod)

K8sObjectMetadata = _reflection.GeneratedProtocolMessageType('K8sObjectMetadata', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _K8SOBJECTMETADATA_LABELSENTRY,
    '__module__' : 'flyteidl.core.tasks_pb2'
    # @@protoc_insertion_point(class_scope:flyteidl.core.K8sObjectMetadata.LabelsEntry)
    })
  ,

  'AnnotationsEntry' : _reflection.GeneratedProtocolMessageType('AnnotationsEntry', (_message.Message,), {
    'DESCRIPTOR' : _K8SOBJECTMETADATA_ANNOTATIONSENTRY,
    '__module__' : 'flyteidl.core.tasks_pb2'
    # @@protoc_insertion_point(class_scope:flyteidl.core.K8sObjectMetadata.AnnotationsEntry)
    })
  ,
  'DESCRIPTOR' : _K8SOBJECTMETADATA,
  '__module__' : 'flyteidl.core.tasks_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.K8sObjectMetadata)
  })
_sym_db.RegisterMessage(K8sObjectMetadata)
_sym_db.RegisterMessage(K8sObjectMetadata.LabelsEntry)
_sym_db.RegisterMessage(K8sObjectMetadata.AnnotationsEntry)

Sql = _reflection.GeneratedProtocolMessageType('Sql', (_message.Message,), {
  'DESCRIPTOR' : _SQL,
  '__module__' : 'flyteidl.core.tasks_pb2'
  # @@protoc_insertion_point(class_scope:flyteidl.core.Sql)
  })
_sym_db.RegisterMessage(Sql)

if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\021com.flyteidl.coreB\nTasksProtoH\002Z4github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/core\370\001\000\242\002\003FCX\252\002\rFlyteidl.Core\312\002\rFlyteidl\\Core\342\002\031Flyteidl\\Core\\GPBMetadata\352\002\016Flyteidl::Core'
  _TASKTEMPLATE_CONFIGENTRY._options = None
  _TASKTEMPLATE_CONFIGENTRY._serialized_options = b'8\001'
  _CONTAINER.fields_by_name['config']._options = None
  _CONTAINER.fields_by_name['config']._serialized_options = b'\030\001'
  _K8SOBJECTMETADATA_LABELSENTRY._options = None
  _K8SOBJECTMETADATA_LABELSENTRY._serialized_options = b'8\001'
  _K8SOBJECTMETADATA_ANNOTATIONSENTRY._options = None
  _K8SOBJECTMETADATA_ANNOTATIONSENTRY._serialized_options = b'8\001'
  _RESOURCES._serialized_start=230
  _RESOURCES._serialized_end=566
  _RESOURCES_RESOURCEENTRY._serialized_start=375
  _RESOURCES_RESOURCEENTRY._serialized_end=471
  _RESOURCES_RESOURCENAME._serialized_start=473
  _RESOURCES_RESOURCENAME._serialized_end=566
  _RUNTIMEMETADATA._serialized_start=569
  _RUNTIMEMETADATA._serialized_end=741
  _RUNTIMEMETADATA_RUNTIMETYPE._serialized_start=702
  _RUNTIMEMETADATA_RUNTIMETYPE._serialized_end=741
  _TASKMETADATA._serialized_start=744
  _TASKMETADATA._serialized_end=1174
  _TASKTEMPLATE._serialized_start=1177
  _TASKTEMPLATE._serialized_end=1822
  _TASKTEMPLATE_CONFIGENTRY._serialized_start=1755
  _TASKTEMPLATE_CONFIGENTRY._serialized_end=1812
  _CONTAINERPORT._serialized_start=1824
  _CONTAINERPORT._serialized_end=1878
  _CONTAINER._serialized_start=1881
  _CONTAINER._serialized_end=2389
  _CONTAINER_ARCHITECTURE._serialized_start=2316
  _CONTAINER_ARCHITECTURE._serialized_end=2389
  _IOSTRATEGY._serialized_start=2392
  _IOSTRATEGY._serialized_end=2701
  _IOSTRATEGY_DOWNLOADMODE._serialized_start=2554
  _IOSTRATEGY_DOWNLOADMODE._serialized_end=2630
  _IOSTRATEGY_UPLOADMODE._serialized_start=2632
  _IOSTRATEGY_UPLOADMODE._serialized_end=2701
  _DATALOADINGCONFIG._serialized_start=2704
  _DATALOADINGCONFIG._serialized_end=2999
  _DATALOADINGCONFIG_LITERALMAPFORMAT._serialized_start=2950
  _DATALOADINGCONFIG_LITERALMAPFORMAT._serialized_end=2999
  _K8SPOD._serialized_start=3001
  _K8SPOD._serialized_end=3123
  _K8SOBJECTMETADATA._serialized_start=3126
  _K8SOBJECTMETADATA._serialized_end=3423
  _K8SOBJECTMETADATA_LABELSENTRY._serialized_start=3302
  _K8SOBJECTMETADATA_LABELSENTRY._serialized_end=3359
  _K8SOBJECTMETADATA_ANNOTATIONSENTRY._serialized_start=3361
  _K8SOBJECTMETADATA_ANNOTATIONSENTRY._serialized_end=3423
  _SQL._serialized_start=3426
  _SQL._serialized_end=3572
  _SQL_DIALECT._serialized_start=3517
  _SQL_DIALECT._serialized_end=3572
# @@protoc_insertion_point(module_scope)
# CoreTaskTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | [***CoreIdentifier**](coreIdentifier.md) | Auto generated taskId by the system. Task Id uniquely identifies this task globally. | [optional] [default to null]
**Type_** | **string** | A predefined yet extensible Task type identifier. This can be used to customize any of the components. If no extensions are provided in the system, Flyte will resolve the this task to its TaskCategory and default the implementation registered for the TaskCategory. | [optional] [default to null]
**Metadata** | [***CoreTaskMetadata**](coreTaskMetadata.md) | Extra metadata about the task. | [optional] [default to null]
**Interface_** | [***CoreTypedInterface**](coreTypedInterface.md) | A strongly typed interface for the task. This enables others to use this task within a workflow and guarantees compile-time validation of the workflow to avoid costly runtime failures. | [optional] [default to null]
**Custom** | [***ProtobufStruct**](protobufStruct.md) | Custom data about the task. This is extensible to allow various plugins in the system. | [optional] [default to null]
**Container** | [***CoreContainer**](coreContainer.md) |  | [optional] [default to null]
**K8sPod** | [***CoreK8sPod**](coreK8sPod.md) |  | [optional] [default to null]
**Sql** | [***CoreSql**](coreSql.md) |  | [optional] [default to null]
**TaskTypeVersion** | **int32** | This can be used to customize task handling at execution time for the same task type. | [optional] [default to null]
**SecurityContext** | [***CoreSecurityContext**](coreSecurityContext.md) | security_context encapsulates security attributes requested to run this task. | [optional] [default to null]
**Config** | **map[string]string** |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



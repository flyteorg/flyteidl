# EventTaskExecutionMetadata

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GeneratedName** | **string** | Unique, generated name for this task execution used by the backend. | [optional] [default to null]
**ExternalResources** | [**[]EventExternalResourceInfo**](eventExternalResourceInfo.md) | Additional data on external resources on other back-ends or platforms (e.g. Hive, Qubole, etc) launched by this task execution. | [optional] [default to null]
**ResourcePoolInfo** | [**[]EventResourcePoolInfo**](eventResourcePoolInfo.md) | Includes additional data on concurrent resource management used during execution.. This is a repeated field because a plugin can request multiple resource allocations during execution. | [optional] [default to null]
**PluginIdentifier** | **string** | The identifier of the plugin used to execute this task. | [optional] [default to null]
**InstanceClass** | [***TaskExecutionMetadataInstanceClass**](TaskExecutionMetadataInstanceClass.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EventExternalResourceInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalId** | **string** | Identifier for an external resource created by this task execution, for example Qubole query ID or presto query ids. | [optional] [default to null]
**Index** | **int64** | A unique index for the external resource with respect to all external resources for this task. Although the identifier may change between task reporting events or retries, this will remain the same to enable aggregating information from multiple reports. | [optional] [default to null]
**RetryAttempt** | **int64** |  | [optional] [default to null]
**Phase** | [***CoreTaskExecutionPhase**](coreTaskExecutionPhase.md) |  | [optional] [default to null]
**CacheStatus** | [***CoreCatalogCacheStatus**](coreCatalogCacheStatus.md) | Captures the status of caching for this external resource execution. | [optional] [default to null]
**Logs** | [**[]CoreTaskLog**](coreTaskLog.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



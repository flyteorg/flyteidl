# FlyteidleventTaskNodeMetadata

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CacheStatus** | [***CoreCatalogCacheStatus**](coreCatalogCacheStatus.md) | Captures the status of caching for this execution. | [optional] [default to null]
**CatalogKey** | [***CoreCatalogMetadata**](coreCatalogMetadata.md) |  | [optional] [default to null]
**ReservationStatus** | [***CatalogReservationStatus**](CatalogReservationStatus.md) | Captures the status of cache reservations for this execution. | [optional] [default to null]
**CheckpointUri** | **string** |  | [optional] [default to null]
**DynamicWorkflow** | [***FlyteidleventDynamicWorkflowNodeMetadata**](flyteidleventDynamicWorkflowNodeMetadata.md) | In the case this task launched a dynamic workflow we capture its structure here. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



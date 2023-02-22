# AdminNodeExecutionMetaData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RetryGroup** | **string** | Node executions are grouped depending on retries of the parent Retry group is unique within the context of a parent node. | [optional] [default to null]
**IsParentNode** | **bool** | Boolean flag indicating if the node has child nodes under it This can be true when a node contains a dynamic workflow which then produces child nodes. | [optional] [default to null]
**SpecNodeId** | **string** |  | [optional] [default to null]
**IsDynamic** | **bool** | Boolean flag indicating if the node has contains a dynamic workflow which then produces child nodes. This is to distinguish between subworkflows and dynamic workflows which can both have is_parent_node as true. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



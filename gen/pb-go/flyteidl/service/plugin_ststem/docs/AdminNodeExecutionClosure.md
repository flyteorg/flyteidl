# AdminNodeExecutionClosure

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OutputUri** | **string** | Links to a remotely stored, serialized core.LiteralMap of node execution outputs. DEPRECATED. Use GetNodeExecutionData to fetch output data instead. | [optional] [default to null]
**Error_** | [***CoreExecutionError**](coreExecutionError.md) |  | [optional] [default to null]
**OutputData** | [***CoreLiteralMap**](coreLiteralMap.md) | Raw output data produced by this node execution. DEPRECATED. Use GetNodeExecutionData to fetch output data instead. | [optional] [default to null]
**Phase** | [***CoreNodeExecutionPhase**](coreNodeExecutionPhase.md) | The last recorded phase for this node execution. | [optional] [default to null]
**StartedAt** | [**time.Time**](time.Time.md) | Time at which the node execution began running. | [optional] [default to null]
**Duration** | **string** | The amount of time the node execution spent running. | [optional] [default to null]
**CreatedAt** | [**time.Time**](time.Time.md) | Time at which the node execution was created. | [optional] [default to null]
**UpdatedAt** | [**time.Time**](time.Time.md) | Time at which the node execution was last updated. | [optional] [default to null]
**WorkflowNodeMetadata** | [***FlyteidladminWorkflowNodeMetadata**](flyteidladminWorkflowNodeMetadata.md) |  | [optional] [default to null]
**TaskNodeMetadata** | [***FlyteidladminTaskNodeMetadata**](flyteidladminTaskNodeMetadata.md) |  | [optional] [default to null]
**DeckUri** | **string** |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AdminTaskExecutionClosure

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OutputUri** | **string** | Path to remote data store where output blob is stored if the execution succeeded (and produced outputs). DEPRECATED. Use GetTaskExecutionData to fetch output data instead. | [optional] [default to null]
**Error_** | [***CoreExecutionError**](coreExecutionError.md) | Error information for the task execution. Populated if the execution failed. | [optional] [default to null]
**OutputData** | [***CoreLiteralMap**](coreLiteralMap.md) | Raw output data produced by this task execution. DEPRECATED. Use GetTaskExecutionData to fetch output data instead. | [optional] [default to null]
**Phase** | [***CoreTaskExecutionPhase**](coreTaskExecutionPhase.md) | The last recorded phase for this task execution. | [optional] [default to null]
**Logs** | [**[]CoreTaskLog**](coreTaskLog.md) | Detailed log information output by the task execution. | [optional] [default to null]
**StartedAt** | [**time.Time**](time.Time.md) | Time at which the task execution began running. | [optional] [default to null]
**Duration** | **string** | The amount of time the task execution spent running. | [optional] [default to null]
**CreatedAt** | [**time.Time**](time.Time.md) | Time at which the task execution was created. | [optional] [default to null]
**UpdatedAt** | [**time.Time**](time.Time.md) | Time at which the task execution was last updated. | [optional] [default to null]
**CustomInfo** | [***ProtobufStruct**](protobufStruct.md) | Custom data specific to the task plugin. | [optional] [default to null]
**Reason** | **string** | If there is an explanation for the most recent phase transition, the reason will capture it. | [optional] [default to null]
**TaskType** | **string** | A predefined yet extensible Task type identifier. | [optional] [default to null]
**Metadata** | [***EventTaskExecutionMetadata**](eventTaskExecutionMetadata.md) | Metadata around how a task was executed. | [optional] [default to null]
**EventVersion** | **int32** | The event version is used to indicate versioned changes in how data is maintained using this proto message. For example, event_verison &gt; 0 means that maps tasks logs use the TaskExecutionMetadata ExternalResourceInfo fields for each subtask rather than the TaskLog in this message. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



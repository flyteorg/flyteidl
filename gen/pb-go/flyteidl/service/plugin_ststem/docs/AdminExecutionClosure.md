# AdminExecutionClosure

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Outputs** | [***AdminLiteralMapBlob**](adminLiteralMapBlob.md) | Output URI in the case of a successful execution. DEPRECATED. Use GetExecutionData to fetch output data instead. | [optional] [default to null]
**Error_** | [***CoreExecutionError**](coreExecutionError.md) | Error information in the case of a failed execution. | [optional] [default to null]
**AbortCause** | **string** | In the case of a user-specified abort, this will pass along the user-supplied cause. | [optional] [default to null]
**AbortMetadata** | [***AdminAbortMetadata**](adminAbortMetadata.md) | In the case of a user-specified abort, this will pass along the user and their supplied cause. | [optional] [default to null]
**OutputData** | [***CoreLiteralMap**](coreLiteralMap.md) | Raw output data produced by this execution. DEPRECATED. Use GetExecutionData to fetch output data instead. | [optional] [default to null]
**ComputedInputs** | [***CoreLiteralMap**](coreLiteralMap.md) |  | [optional] [default to null]
**Phase** | [***CoreWorkflowExecutionPhase**](coreWorkflowExecutionPhase.md) | Most recent recorded phase for the execution. | [optional] [default to null]
**StartedAt** | [**time.Time**](time.Time.md) | Reported time at which the execution began running. | [optional] [default to null]
**Duration** | **string** | The amount of time the execution spent running. | [optional] [default to null]
**CreatedAt** | [**time.Time**](time.Time.md) | Reported time at which the execution was created. | [optional] [default to null]
**UpdatedAt** | [**time.Time**](time.Time.md) | Reported time at which the execution was last updated. | [optional] [default to null]
**Notifications** | [**[]AdminNotification**](adminNotification.md) | The notification settings to use after merging the CreateExecutionRequest and the launch plan notification settings. An execution launched with notifications will always prefer that definition to notifications defined statically in a launch plan. | [optional] [default to null]
**WorkflowId** | [***CoreIdentifier**](coreIdentifier.md) | Identifies the workflow definition for this execution. | [optional] [default to null]
**StateChangeDetails** | [***AdminExecutionStateChangeDetails**](adminExecutionStateChangeDetails.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



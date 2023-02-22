# AdminExecutionMetadata

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Mode** | [***ExecutionMetadataExecutionMode**](ExecutionMetadataExecutionMode.md) |  | [optional] [default to null]
**Principal** | **string** | Identifier of the entity that triggered this execution. For systems using back-end authentication any value set here will be discarded in favor of the authenticated user context. | [optional] [default to null]
**Nesting** | **int64** | Indicates the nestedness of this execution. If a user launches a workflow execution, the default nesting is 0. If this execution further launches a workflow (child workflow), the nesting level is incremented by 0 &#x3D;&gt; 1 Generally, if workflow at nesting level k launches a workflow then the child workflow will have nesting &#x3D; k + 1. | [optional] [default to null]
**ScheduledAt** | [**time.Time**](time.Time.md) | For scheduled executions, the requested time for execution for this specific schedule invocation. | [optional] [default to null]
**ParentNodeExecution** | [***CoreNodeExecutionIdentifier**](coreNodeExecutionIdentifier.md) |  | [optional] [default to null]
**ReferenceExecution** | [***CoreWorkflowExecutionIdentifier**](coreWorkflowExecutionIdentifier.md) | Optional, a reference workflow execution related to this execution. In the case of a relaunch, this references the original workflow execution. | [optional] [default to null]
**SystemMetadata** | [***AdminSystemMetadata**](adminSystemMetadata.md) | Optional, platform-specific metadata about the execution. In this the future this may be gated behind an ACL or some sort of authorization. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



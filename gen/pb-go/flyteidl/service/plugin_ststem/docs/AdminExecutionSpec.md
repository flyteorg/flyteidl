# AdminExecutionSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LaunchPlan** | [***CoreIdentifier**](coreIdentifier.md) |  | [optional] [default to null]
**Inputs** | [***CoreLiteralMap**](coreLiteralMap.md) |  | [optional] [default to null]
**Metadata** | [***AdminExecutionMetadata**](adminExecutionMetadata.md) |  | [optional] [default to null]
**Notifications** | [***AdminNotificationList**](adminNotificationList.md) | List of notifications based on Execution status transitions When this list is not empty it is used rather than any notifications defined in the referenced launch plan. When this list is empty, the notifications defined for the launch plan will be applied. | [optional] [default to null]
**DisableAll** | **bool** | This should be set to true if all notifications are intended to be disabled for this execution. | [optional] [default to null]
**Labels** | [***AdminLabels**](adminLabels.md) | Labels to apply to the execution resource. | [optional] [default to null]
**Annotations** | [***AdminAnnotations**](adminAnnotations.md) | Annotations to apply to the execution resource. | [optional] [default to null]
**SecurityContext** | [***CoreSecurityContext**](coreSecurityContext.md) | Optional: security context override to apply this execution. | [optional] [default to null]
**AuthRole** | [***AdminAuthRole**](adminAuthRole.md) | Optional: auth override to apply this execution. | [optional] [default to null]
**QualityOfService** | [***CoreQualityOfService**](coreQualityOfService.md) | Indicates the runtime priority of the execution. | [optional] [default to null]
**MaxParallelism** | **int32** | Controls the maximum number of task nodes that can be run in parallel for the entire workflow. This is useful to achieve fairness. Note: MapTasks are regarded as one unit, and parallelism/concurrency of MapTasks is independent from this. | [optional] [default to null]
**RawOutputDataConfig** | [***AdminRawOutputDataConfig**](adminRawOutputDataConfig.md) |  | [optional] [default to null]
**ClusterAssignment** | [***AdminClusterAssignment**](adminClusterAssignment.md) | Controls how to select an available cluster on which this execution should run. | [optional] [default to null]
**Interruptible** | **bool** | Allows for the interruptible flag of a workflow to be overwritten for a single execution. Omitting this field uses the workflow&#39;s value as a default. As we need to distinguish between the field not being provided and its default value false, we have to use a wrapper around the bool field. | [optional] [default to null]
**OverwriteCache** | **bool** | Allows for all cached values of a workflow and its tasks to be overwritten for a single execution. If enabled, all calculations are performed even if cached results would be available, overwriting the stored data once execution finishes successfully. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



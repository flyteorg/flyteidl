# AdminLaunchPlanSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WorkflowId** | [***CoreIdentifier**](coreIdentifier.md) |  | [optional] [default to null]
**EntityMetadata** | [***AdminLaunchPlanMetadata**](adminLaunchPlanMetadata.md) |  | [optional] [default to null]
**DefaultInputs** | [***CoreParameterMap**](coreParameterMap.md) | Input values to be passed for the execution. These can be overriden when an execution is created with this launch plan. | [optional] [default to null]
**FixedInputs** | [***CoreLiteralMap**](coreLiteralMap.md) | Fixed, non-overridable inputs for the Launch Plan. These can not be overriden when an execution is created with this launch plan. | [optional] [default to null]
**Role** | **string** |  | [optional] [default to null]
**Labels** | [***AdminLabels**](adminLabels.md) | Custom labels to be applied to the execution resource. | [optional] [default to null]
**Annotations** | [***AdminAnnotations**](adminAnnotations.md) | Custom annotations to be applied to the execution resource. | [optional] [default to null]
**Auth** | [***AdminAuth**](adminAuth.md) | Indicates the permission associated with workflow executions triggered with this launch plan. | [optional] [default to null]
**AuthRole** | [***AdminAuthRole**](adminAuthRole.md) |  | [optional] [default to null]
**SecurityContext** | [***CoreSecurityContext**](coreSecurityContext.md) |  | [optional] [default to null]
**QualityOfService** | [***CoreQualityOfService**](coreQualityOfService.md) | Indicates the runtime priority of the execution. | [optional] [default to null]
**RawOutputDataConfig** | [***AdminRawOutputDataConfig**](adminRawOutputDataConfig.md) | Encapsulates user settings pertaining to offloaded data (i.e. Blobs, Schema, query data, etc.). | [optional] [default to null]
**MaxParallelism** | **int32** | Controls the maximum number of tasknodes that can be run in parallel for the entire workflow. This is useful to achieve fairness. Note: MapTasks are regarded as one unit, and parallelism/concurrency of MapTasks is independent from this. | [optional] [default to null]
**Interruptible** | **bool** | Allows for the interruptible flag of a workflow to be overwritten for a single execution. Omitting this field uses the workflow&#39;s value as a default. As we need to distinguish between the field not being provided and its default value false, we have to use a wrapper around the bool field. | [optional] [default to null]
**OverwriteCache** | **bool** | Allows for all cached values of a workflow and its tasks to be overwritten for a single execution. If enabled, all calculations are performed even if cached results would be available, overwriting the stored data once execution finishes successfully. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



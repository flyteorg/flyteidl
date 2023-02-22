# AdminWorkflowExecutionConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxParallelism** | **int32** | Can be used to control the number of parallel nodes to run within the workflow. This is useful to achieve fairness. | [optional] [default to null]
**SecurityContext** | [***CoreSecurityContext**](coreSecurityContext.md) | Indicates security context permissions for executions triggered with this matchable attribute. | [optional] [default to null]
**RawOutputDataConfig** | [***AdminRawOutputDataConfig**](adminRawOutputDataConfig.md) | Encapsulates user settings pertaining to offloaded data (i.e. Blobs, Schema, query data, etc.). | [optional] [default to null]
**Labels** | [***AdminLabels**](adminLabels.md) | Custom labels to be applied to a triggered execution resource. | [optional] [default to null]
**Annotations** | [***AdminAnnotations**](adminAnnotations.md) | Custom annotations to be applied to a triggered execution resource. | [optional] [default to null]
**Interruptible** | **bool** | Allows for the interruptible flag of a workflow to be overwritten for a single execution. Omitting this field uses the workflow&#39;s value as a default. As we need to distinguish between the field not being provided and its default value false, we have to use a wrapper around the bool field. | [optional] [default to null]
**OverwriteCache** | **bool** | Allows for all cached values of a workflow and its tasks to be overwritten for a single execution. If enabled, all calculations are performed even if cached results would be available, overwriting the stored data once execution finishes successfully. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



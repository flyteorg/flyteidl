# CoreTaskMetadata

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Discoverable** | **bool** | Indicates whether the system should attempt to lookup this task&#39;s output to avoid duplication of work. | [optional] [default to null]
**Runtime** | [***CoreRuntimeMetadata**](coreRuntimeMetadata.md) | Runtime information about the task. | [optional] [default to null]
**Timeout** | **string** | The overall timeout of a task including user-triggered retries. | [optional] [default to null]
**Retries** | [***CoreRetryStrategy**](coreRetryStrategy.md) | Number of retries per task. | [optional] [default to null]
**DiscoveryVersion** | **string** | Indicates a logical version to apply to this task for the purpose of discovery. | [optional] [default to null]
**DeprecatedErrorMessage** | **string** | If set, this indicates that this task is deprecated.  This will enable owners of tasks to notify consumers of the ending of support for a given task. | [optional] [default to null]
**Interruptible** | **bool** |  | [optional] [default to null]
**CacheSerializable** | **bool** |  | [optional] [default to null]
**GeneratesDeck** | **bool** | Indicates whether the task will generate a Deck URI when it finishes executing. | [optional] [default to null]
**Tags** | **map[string]string** |  | [optional] [default to null]
**PodTemplateName** | **string** | pod_template_name is the unique name of a PodTemplate k8s resource to be used as the base configuration if this task creates a k8s Pod. If this value is set, the specified PodTemplate will be used instead of, but applied identically as, the default PodTemplate configured in FlytePropeller. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



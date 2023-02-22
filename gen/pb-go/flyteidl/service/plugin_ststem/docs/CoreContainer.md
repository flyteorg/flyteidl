# CoreContainer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Image** | **string** |  | [optional] [default to null]
**Command** | **[]string** | Command to be executed, if not provided, the default entrypoint in the container image will be used. | [optional] [default to null]
**Args** | **[]string** | These will default to Flyte given paths. If provided, the system will not append known paths. If the task still needs flyte&#39;s inputs and outputs path, add $(FLYTE_INPUT_FILE), $(FLYTE_OUTPUT_FILE) wherever makes sense and the system will populate these before executing the container. | [optional] [default to null]
**Resources** | [***CoreResources**](coreResources.md) | Container resources requirement as specified by the container engine. | [optional] [default to null]
**Env** | [**[]CoreKeyValuePair**](coreKeyValuePair.md) | Environment variables will be set as the container is starting up. | [optional] [default to null]
**Config** | [**[]CoreKeyValuePair**](coreKeyValuePair.md) | Allows extra configs to be available for the container. TODO: elaborate on how configs will become available. Deprecated, please use TaskTemplate.config instead. | [optional] [default to null]
**Ports** | [**[]CoreContainerPort**](coreContainerPort.md) |  | [optional] [default to null]
**DataConfig** | [***CoreDataLoadingConfig**](coreDataLoadingConfig.md) |  | [optional] [default to null]
**Architecture** | [***ContainerArchitecture**](ContainerArchitecture.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



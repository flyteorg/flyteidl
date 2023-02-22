# AdminWorkflowSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Template** | [***CoreWorkflowTemplate**](coreWorkflowTemplate.md) | Template of the task that encapsulates all the metadata of the workflow. | [optional] [default to null]
**SubWorkflows** | [**[]CoreWorkflowTemplate**](coreWorkflowTemplate.md) | Workflows that are embedded into other workflows need to be passed alongside the parent workflow to the propeller compiler (since the compiler doesn&#39;t have any knowledge of other workflows - ie, it doesn&#39;t reach out to Admin to see other registered workflows).  In fact, subworkflows do not even need to be registered. | [optional] [default to null]
**Description** | [***AdminDescriptionEntity**](adminDescriptionEntity.md) | Represents the specification for description entity. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



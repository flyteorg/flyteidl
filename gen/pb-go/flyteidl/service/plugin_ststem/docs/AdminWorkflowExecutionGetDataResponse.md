# AdminWorkflowExecutionGetDataResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Outputs** | [***AdminUrlBlob**](adminUrlBlob.md) | Signed url to fetch a core.LiteralMap of execution outputs. Deprecated: Please use full_outputs instead. | [optional] [default to null]
**Inputs** | [***AdminUrlBlob**](adminUrlBlob.md) | Signed url to fetch a core.LiteralMap of execution inputs. Deprecated: Please use full_inputs instead. | [optional] [default to null]
**FullInputs** | [***CoreLiteralMap**](coreLiteralMap.md) | Full_inputs will only be populated if they are under a configured size threshold. | [optional] [default to null]
**FullOutputs** | [***CoreLiteralMap**](coreLiteralMap.md) | Full_outputs will only be populated if they are under a configured size threshold. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



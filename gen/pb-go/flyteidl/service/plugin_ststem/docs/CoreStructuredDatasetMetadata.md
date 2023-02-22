# CoreStructuredDatasetMetadata

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StructuredDatasetType** | [***CoreStructuredDatasetType**](coreStructuredDatasetType.md) | Bundle the type information along with the literal. This is here because StructuredDatasets can often be more defined at run time than at compile time. That is, at compile time you might only declare a task to return a pandas dataframe or a StructuredDataset, without any column information, but at run time, you might have that column information. flytekit python will copy this type information into the literal, from the type information, if not provided by the various plugins (encoders). Since this field is run time generated, it&#39;s not used for any type checking. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



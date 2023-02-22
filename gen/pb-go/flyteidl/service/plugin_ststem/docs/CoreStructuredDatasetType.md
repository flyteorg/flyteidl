# CoreStructuredDatasetType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Columns** | [**[]StructuredDatasetTypeDatasetColumn**](StructuredDatasetTypeDatasetColumn.md) | A list of ordered columns this schema comprises of. | [optional] [default to null]
**Format** | **string** | This is the storage format, the format of the bits at rest parquet, feather, csv, etc. For two types to be compatible, the format will need to be an exact match. | [optional] [default to null]
**ExternalSchemaType** | **string** | This is a string representing the type that the bytes in external_schema_bytes are formatted in. This is an optional field that will not be used for type checking. | [optional] [default to null]
**ExternalSchemaBytes** | **string** | The serialized bytes of a third-party schema library like Arrow. This is an optional field that will not be used for type checking. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



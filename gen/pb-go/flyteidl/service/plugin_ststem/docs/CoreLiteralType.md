# CoreLiteralType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Simple** | [***CoreSimpleType**](coreSimpleType.md) | A simple type that can be compared one-to-one with another. | [optional] [default to null]
**Schema** | [***CoreSchemaType**](coreSchemaType.md) | A complex type that requires matching of inner fields. | [optional] [default to null]
**CollectionType** | [***CoreLiteralType**](coreLiteralType.md) | Defines the type of the value of a collection. Only homogeneous collections are allowed. | [optional] [default to null]
**MapValueType** | [***CoreLiteralType**](coreLiteralType.md) | Defines the type of the value of a map type. The type of the key is always a string. | [optional] [default to null]
**Blob** | [***CoreBlobType**](coreBlobType.md) | A blob might have specialized implementation details depending on associated metadata. | [optional] [default to null]
**EnumType** | [***CoreEnumType**](coreEnumType.md) | Defines an enum with pre-defined string values. | [optional] [default to null]
**StructuredDatasetType** | [***CoreStructuredDatasetType**](coreStructuredDatasetType.md) |  | [optional] [default to null]
**UnionType** | [***CoreUnionType**](coreUnionType.md) | Defines an union type with pre-defined LiteralTypes. | [optional] [default to null]
**Metadata** | [***ProtobufStruct**](protobufStruct.md) | This field contains type metadata that is descriptive of the type, but is NOT considered in type-checking.  This might be used by consumers to identify special behavior or display extended information for the type. | [optional] [default to null]
**Annotation** | [***CoreTypeAnnotation**](coreTypeAnnotation.md) | This field contains arbitrary data that might have special semantic meaning for the client but does not effect internal flyte behavior. | [optional] [default to null]
**Structure** | [***CoreTypeStructure**](coreTypeStructure.md) | Hints to improve type matching. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



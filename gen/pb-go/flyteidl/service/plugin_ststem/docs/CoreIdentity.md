# CoreIdentity

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IamRole** | **string** | iam_role references the fully qualified name of Identity &amp; Access Management role to impersonate. | [optional] [default to null]
**K8sServiceAccount** | **string** | k8s_service_account references a kubernetes service account to impersonate. | [optional] [default to null]
**Oauth2Client** | [***CoreOAuth2Client**](coreOAuth2Client.md) | oauth2_client references an oauth2 client. Backend plugins can use this information to impersonate the client when making external calls. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CoreSecurityContext

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RunAs** | [***CoreIdentity**](coreIdentity.md) | run_as encapsulates the identity a pod should run as. If the task fills in multiple fields here, it&#39;ll be up to the backend plugin to choose the appropriate identity for the execution engine the task will run on. | [optional] [default to null]
**Secrets** | [**[]CoreSecret**](coreSecret.md) | secrets indicate the list of secrets the task needs in order to proceed. Secrets will be mounted/passed to the pod as it starts. If the plugin responsible for kicking of the task will not run it on a flyte cluster (e.g. AWS Batch), it&#39;s the responsibility of the plugin to fetch the secret (which means propeller identity will need access to the secret) and to pass it to the remote execution engine. | [optional] [default to null]
**Tokens** | [**[]CoreOAuth2TokenRequest**](coreOAuth2TokenRequest.md) | tokens indicate the list of token requests the task needs in order to proceed. Tokens will be mounted/passed to the pod as it starts. If the plugin responsible for kicking of the task will not run it on a flyte cluster (e.g. AWS Batch), it&#39;s the responsibility of the plugin to fetch the secret (which means propeller identity will need access to the secret) and to pass it to the remote execution engine. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



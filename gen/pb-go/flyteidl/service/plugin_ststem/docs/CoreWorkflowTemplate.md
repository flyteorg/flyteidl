# CoreWorkflowTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | [***CoreIdentifier**](coreIdentifier.md) | A globally unique identifier for the workflow. | [optional] [default to null]
**Metadata** | [***CoreWorkflowMetadata**](coreWorkflowMetadata.md) | Extra metadata about the workflow. | [optional] [default to null]
**Interface_** | [***CoreTypedInterface**](coreTypedInterface.md) | Defines a strongly typed interface for the Workflow. This can include some optional parameters. | [optional] [default to null]
**Nodes** | [**[]CoreNode**](coreNode.md) | A list of nodes. In addition, &#39;globals&#39; is a special reserved node id that can be used to consume workflow inputs. | [optional] [default to null]
**Outputs** | [**[]CoreBinding**](coreBinding.md) | A list of output bindings that specify how to construct workflow outputs. Bindings can pull node outputs or specify literals. All workflow outputs specified in the interface field must be bound in order for the workflow to be validated. A workflow has an implicit dependency on all of its nodes to execute successfully in order to bind final outputs. Most of these outputs will be Binding&#39;s with a BindingData of type OutputReference.  That is, your workflow can just have an output of some constant (&#x60;Output(5)&#x60;), but usually, the workflow will be pulling outputs from the output of a task. | [optional] [default to null]
**FailureNode** | [***CoreNode**](coreNode.md) | +optional A catch-all node. This node is executed whenever the execution engine determines the workflow has failed. The interface of this node must match the Workflow interface with an additional input named &#39;error&#39; of type pb.lyft.flyte.core.Error. | [optional] [default to null]
**MetadataDefaults** | [***CoreWorkflowMetadataDefaults**](coreWorkflowMetadataDefaults.md) |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



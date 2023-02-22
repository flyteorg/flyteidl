# CoreNode

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A workflow-level unique identifier that identifies this node in the workflow. &#39;inputs&#39; and &#39;outputs&#39; are reserved node ids that cannot be used by other nodes. | [optional] [default to null]
**Metadata** | [***CoreNodeMetadata**](coreNodeMetadata.md) | Extra metadata about the node. | [optional] [default to null]
**Inputs** | [**[]CoreBinding**](coreBinding.md) | Specifies how to bind the underlying interface&#39;s inputs. All required inputs specified in the underlying interface must be fulfilled. | [optional] [default to null]
**UpstreamNodeIds** | **[]string** | +optional Specifies execution dependency for this node ensuring it will only get scheduled to run after all its upstream nodes have completed. This node will have an implicit dependency on any node that appears in inputs field. | [optional] [default to null]
**OutputAliases** | [**[]CoreAlias**](coreAlias.md) | +optional. A node can define aliases for a subset of its outputs. This is particularly useful if different nodes need to conform to the same interface (e.g. all branches in a branch node). Downstream nodes must refer to this nodes outputs using the alias if one&#39;s specified. | [optional] [default to null]
**TaskNode** | [***CoreTaskNode**](coreTaskNode.md) | Information about the Task to execute in this node. | [optional] [default to null]
**WorkflowNode** | [***CoreWorkflowNode**](coreWorkflowNode.md) | Information about the Workflow to execute in this mode. | [optional] [default to null]
**BranchNode** | [***CoreBranchNode**](coreBranchNode.md) | Information about the branch node to evaluate in this node. | [optional] [default to null]
**GateNode** | [***CoreGateNode**](coreGateNode.md) | Information about the condition to evaluate in this node. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



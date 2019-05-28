/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin

// Flyte Workflow Structure that encapsulates task, branch and subworkflow nodes to form a statically analyzable, directed acyclic graph.
type CoreWorkflowTemplate struct {
	// This is an autogenerated id by the system. The id is globally unique across the system.
	Id *CoreIdentifier `json:"id,omitempty"`
	// Extra metadata about the workflow.
	Metadata *CoreWorkflowMetadata `json:"metadata,omitempty"`
	// Defines a strongly typed interface for the Workflow. This can include some optional parameters.
	Interface_ *CoreTypedInterface `json:"interface,omitempty"`
	// A list of nodes. In addition, \"globals\" is a special reserved node id that can be used to consume workflow inputs.
	Nodes []CoreNode `json:"nodes,omitempty"`
	// A list of output bindings that specify how to construct workflow outputs. Bindings can pull node outputs or specify literals. All workflow outputs specified in the interface field must be bound in order for the workflow to be validated. A workflow has an implicit dependency on all of its nodes to execute successfully in order to bind final outputs. Most of these outputs will be Binding's with a BindingData of type OutputReference.  That is, your workflow can just have an output of some constant (`Output(5)`), but usually, the workflow will be pulling outputs from the output of a task.
	Outputs []CoreBinding `json:"outputs,omitempty"`
	// +optional A catch-all node. This node is executed whenever the execution engine determines the workflow has failed. The interface of this node must match the Workflow interface with an additional input named \"error\" of type pb.lyft.flyte.core.Error.
	FailureNode *CoreNode `json:"failure_node,omitempty"`
}

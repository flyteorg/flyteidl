// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/core/workflow.proto

package com.flyteidl.core;

public interface WorkflowTemplateOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.core.WorkflowTemplate)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * A globally unique identifier for the workflow.
   * </pre>
   *
   * <code>.flyteidl.core.Identifier id = 1 [json_name = "id"];</code>
   * @return Whether the id field is set.
   */
  boolean hasId();
  /**
   * <pre>
   * A globally unique identifier for the workflow.
   * </pre>
   *
   * <code>.flyteidl.core.Identifier id = 1 [json_name = "id"];</code>
   * @return The id.
   */
  com.flyteidl.core.Identifier getId();
  /**
   * <pre>
   * A globally unique identifier for the workflow.
   * </pre>
   *
   * <code>.flyteidl.core.Identifier id = 1 [json_name = "id"];</code>
   */
  com.flyteidl.core.IdentifierOrBuilder getIdOrBuilder();

  /**
   * <pre>
   * Extra metadata about the workflow.
   * </pre>
   *
   * <code>.flyteidl.core.WorkflowMetadata metadata = 2 [json_name = "metadata"];</code>
   * @return Whether the metadata field is set.
   */
  boolean hasMetadata();
  /**
   * <pre>
   * Extra metadata about the workflow.
   * </pre>
   *
   * <code>.flyteidl.core.WorkflowMetadata metadata = 2 [json_name = "metadata"];</code>
   * @return The metadata.
   */
  com.flyteidl.core.WorkflowMetadata getMetadata();
  /**
   * <pre>
   * Extra metadata about the workflow.
   * </pre>
   *
   * <code>.flyteidl.core.WorkflowMetadata metadata = 2 [json_name = "metadata"];</code>
   */
  com.flyteidl.core.WorkflowMetadataOrBuilder getMetadataOrBuilder();

  /**
   * <pre>
   * Defines a strongly typed interface for the Workflow. This can include some optional parameters.
   * </pre>
   *
   * <code>.flyteidl.core.TypedInterface interface = 3 [json_name = "interface"];</code>
   * @return Whether the interface field is set.
   */
  boolean hasInterface();
  /**
   * <pre>
   * Defines a strongly typed interface for the Workflow. This can include some optional parameters.
   * </pre>
   *
   * <code>.flyteidl.core.TypedInterface interface = 3 [json_name = "interface"];</code>
   * @return The interface.
   */
  com.flyteidl.core.TypedInterface getInterface();
  /**
   * <pre>
   * Defines a strongly typed interface for the Workflow. This can include some optional parameters.
   * </pre>
   *
   * <code>.flyteidl.core.TypedInterface interface = 3 [json_name = "interface"];</code>
   */
  com.flyteidl.core.TypedInterfaceOrBuilder getInterfaceOrBuilder();

  /**
   * <pre>
   * A list of nodes. In addition, "globals" is a special reserved node id that can be used to consume workflow inputs.
   * </pre>
   *
   * <code>repeated .flyteidl.core.Node nodes = 4 [json_name = "nodes"];</code>
   */
  java.util.List<com.flyteidl.core.Node> 
      getNodesList();
  /**
   * <pre>
   * A list of nodes. In addition, "globals" is a special reserved node id that can be used to consume workflow inputs.
   * </pre>
   *
   * <code>repeated .flyteidl.core.Node nodes = 4 [json_name = "nodes"];</code>
   */
  com.flyteidl.core.Node getNodes(int index);
  /**
   * <pre>
   * A list of nodes. In addition, "globals" is a special reserved node id that can be used to consume workflow inputs.
   * </pre>
   *
   * <code>repeated .flyteidl.core.Node nodes = 4 [json_name = "nodes"];</code>
   */
  int getNodesCount();
  /**
   * <pre>
   * A list of nodes. In addition, "globals" is a special reserved node id that can be used to consume workflow inputs.
   * </pre>
   *
   * <code>repeated .flyteidl.core.Node nodes = 4 [json_name = "nodes"];</code>
   */
  java.util.List<? extends com.flyteidl.core.NodeOrBuilder> 
      getNodesOrBuilderList();
  /**
   * <pre>
   * A list of nodes. In addition, "globals" is a special reserved node id that can be used to consume workflow inputs.
   * </pre>
   *
   * <code>repeated .flyteidl.core.Node nodes = 4 [json_name = "nodes"];</code>
   */
  com.flyteidl.core.NodeOrBuilder getNodesOrBuilder(
      int index);

  /**
   * <pre>
   * A list of output bindings that specify how to construct workflow outputs. Bindings can pull node outputs or
   * specify literals. All workflow outputs specified in the interface field must be bound in order for the workflow
   * to be validated. A workflow has an implicit dependency on all of its nodes to execute successfully in order to
   * bind final outputs.
   * Most of these outputs will be Binding's with a BindingData of type OutputReference.  That is, your workflow can
   * just have an output of some constant (`Output(5)`), but usually, the workflow will be pulling
   * outputs from the output of a task.
   * </pre>
   *
   * <code>repeated .flyteidl.core.Binding outputs = 5 [json_name = "outputs"];</code>
   */
  java.util.List<com.flyteidl.core.Binding> 
      getOutputsList();
  /**
   * <pre>
   * A list of output bindings that specify how to construct workflow outputs. Bindings can pull node outputs or
   * specify literals. All workflow outputs specified in the interface field must be bound in order for the workflow
   * to be validated. A workflow has an implicit dependency on all of its nodes to execute successfully in order to
   * bind final outputs.
   * Most of these outputs will be Binding's with a BindingData of type OutputReference.  That is, your workflow can
   * just have an output of some constant (`Output(5)`), but usually, the workflow will be pulling
   * outputs from the output of a task.
   * </pre>
   *
   * <code>repeated .flyteidl.core.Binding outputs = 5 [json_name = "outputs"];</code>
   */
  com.flyteidl.core.Binding getOutputs(int index);
  /**
   * <pre>
   * A list of output bindings that specify how to construct workflow outputs. Bindings can pull node outputs or
   * specify literals. All workflow outputs specified in the interface field must be bound in order for the workflow
   * to be validated. A workflow has an implicit dependency on all of its nodes to execute successfully in order to
   * bind final outputs.
   * Most of these outputs will be Binding's with a BindingData of type OutputReference.  That is, your workflow can
   * just have an output of some constant (`Output(5)`), but usually, the workflow will be pulling
   * outputs from the output of a task.
   * </pre>
   *
   * <code>repeated .flyteidl.core.Binding outputs = 5 [json_name = "outputs"];</code>
   */
  int getOutputsCount();
  /**
   * <pre>
   * A list of output bindings that specify how to construct workflow outputs. Bindings can pull node outputs or
   * specify literals. All workflow outputs specified in the interface field must be bound in order for the workflow
   * to be validated. A workflow has an implicit dependency on all of its nodes to execute successfully in order to
   * bind final outputs.
   * Most of these outputs will be Binding's with a BindingData of type OutputReference.  That is, your workflow can
   * just have an output of some constant (`Output(5)`), but usually, the workflow will be pulling
   * outputs from the output of a task.
   * </pre>
   *
   * <code>repeated .flyteidl.core.Binding outputs = 5 [json_name = "outputs"];</code>
   */
  java.util.List<? extends com.flyteidl.core.BindingOrBuilder> 
      getOutputsOrBuilderList();
  /**
   * <pre>
   * A list of output bindings that specify how to construct workflow outputs. Bindings can pull node outputs or
   * specify literals. All workflow outputs specified in the interface field must be bound in order for the workflow
   * to be validated. A workflow has an implicit dependency on all of its nodes to execute successfully in order to
   * bind final outputs.
   * Most of these outputs will be Binding's with a BindingData of type OutputReference.  That is, your workflow can
   * just have an output of some constant (`Output(5)`), but usually, the workflow will be pulling
   * outputs from the output of a task.
   * </pre>
   *
   * <code>repeated .flyteidl.core.Binding outputs = 5 [json_name = "outputs"];</code>
   */
  com.flyteidl.core.BindingOrBuilder getOutputsOrBuilder(
      int index);

  /**
   * <pre>
   *+optional A catch-all node. This node is executed whenever the execution engine determines the workflow has failed.
   * The interface of this node must match the Workflow interface with an additional input named "error" of type
   * pb.lyft.flyte.core.Error.
   * </pre>
   *
   * <code>.flyteidl.core.Node failure_node = 6 [json_name = "failureNode"];</code>
   * @return Whether the failureNode field is set.
   */
  boolean hasFailureNode();
  /**
   * <pre>
   *+optional A catch-all node. This node is executed whenever the execution engine determines the workflow has failed.
   * The interface of this node must match the Workflow interface with an additional input named "error" of type
   * pb.lyft.flyte.core.Error.
   * </pre>
   *
   * <code>.flyteidl.core.Node failure_node = 6 [json_name = "failureNode"];</code>
   * @return The failureNode.
   */
  com.flyteidl.core.Node getFailureNode();
  /**
   * <pre>
   *+optional A catch-all node. This node is executed whenever the execution engine determines the workflow has failed.
   * The interface of this node must match the Workflow interface with an additional input named "error" of type
   * pb.lyft.flyte.core.Error.
   * </pre>
   *
   * <code>.flyteidl.core.Node failure_node = 6 [json_name = "failureNode"];</code>
   */
  com.flyteidl.core.NodeOrBuilder getFailureNodeOrBuilder();

  /**
   * <pre>
   * workflow defaults
   * </pre>
   *
   * <code>.flyteidl.core.WorkflowMetadataDefaults metadata_defaults = 7 [json_name = "metadataDefaults"];</code>
   * @return Whether the metadataDefaults field is set.
   */
  boolean hasMetadataDefaults();
  /**
   * <pre>
   * workflow defaults
   * </pre>
   *
   * <code>.flyteidl.core.WorkflowMetadataDefaults metadata_defaults = 7 [json_name = "metadataDefaults"];</code>
   * @return The metadataDefaults.
   */
  com.flyteidl.core.WorkflowMetadataDefaults getMetadataDefaults();
  /**
   * <pre>
   * workflow defaults
   * </pre>
   *
   * <code>.flyteidl.core.WorkflowMetadataDefaults metadata_defaults = 7 [json_name = "metadataDefaults"];</code>
   */
  com.flyteidl.core.WorkflowMetadataDefaultsOrBuilder getMetadataDefaultsOrBuilder();
}
// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/event/event.proto

package com.flyteidl.event;

public interface ParentTaskExecutionMetadataOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.event.ParentTaskExecutionMetadata)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.flyteidl.core.TaskExecutionIdentifier id = 1 [json_name = "id"];</code>
   * @return Whether the id field is set.
   */
  boolean hasId();
  /**
   * <code>.flyteidl.core.TaskExecutionIdentifier id = 1 [json_name = "id"];</code>
   * @return The id.
   */
  com.flyteidl.core.TaskExecutionIdentifier getId();
  /**
   * <code>.flyteidl.core.TaskExecutionIdentifier id = 1 [json_name = "id"];</code>
   */
  com.flyteidl.core.TaskExecutionIdentifierOrBuilder getIdOrBuilder();
}
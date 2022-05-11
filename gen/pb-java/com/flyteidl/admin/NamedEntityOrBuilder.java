// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/admin/common.proto

package com.flyteidl.admin;

public interface NamedEntityOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.admin.NamedEntity)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Resource type of the named entity. One of Task, Workflow or LaunchPlan.
   * </pre>
   *
   * <code>.flyteidl.core.ResourceType resource_type = 1 [json_name = "resourceType"];</code>
   * @return The enum numeric value on the wire for resourceType.
   */
  int getResourceTypeValue();
  /**
   * <pre>
   * Resource type of the named entity. One of Task, Workflow or LaunchPlan.
   * </pre>
   *
   * <code>.flyteidl.core.ResourceType resource_type = 1 [json_name = "resourceType"];</code>
   * @return The resourceType.
   */
  com.flyteidl.core.ResourceType getResourceType();

  /**
   * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
   * @return Whether the id field is set.
   */
  boolean hasId();
  /**
   * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
   * @return The id.
   */
  com.flyteidl.admin.NamedEntityIdentifier getId();
  /**
   * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
   */
  com.flyteidl.admin.NamedEntityIdentifierOrBuilder getIdOrBuilder();

  /**
   * <pre>
   * Additional metadata around a named entity.
   * </pre>
   *
   * <code>.flyteidl.admin.NamedEntityMetadata metadata = 3 [json_name = "metadata"];</code>
   * @return Whether the metadata field is set.
   */
  boolean hasMetadata();
  /**
   * <pre>
   * Additional metadata around a named entity.
   * </pre>
   *
   * <code>.flyteidl.admin.NamedEntityMetadata metadata = 3 [json_name = "metadata"];</code>
   * @return The metadata.
   */
  com.flyteidl.admin.NamedEntityMetadata getMetadata();
  /**
   * <pre>
   * Additional metadata around a named entity.
   * </pre>
   *
   * <code>.flyteidl.admin.NamedEntityMetadata metadata = 3 [json_name = "metadata"];</code>
   */
  com.flyteidl.admin.NamedEntityMetadataOrBuilder getMetadataOrBuilder();
}
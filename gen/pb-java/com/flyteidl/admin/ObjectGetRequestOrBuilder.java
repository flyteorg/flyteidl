// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/admin/common.proto

package com.flyteidl.admin;

public interface ObjectGetRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.admin.ObjectGetRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Indicates a unique version of resource.
   * +required
   * </pre>
   *
   * <code>.flyteidl.core.Identifier id = 1 [json_name = "id"];</code>
   * @return Whether the id field is set.
   */
  boolean hasId();
  /**
   * <pre>
   * Indicates a unique version of resource.
   * +required
   * </pre>
   *
   * <code>.flyteidl.core.Identifier id = 1 [json_name = "id"];</code>
   * @return The id.
   */
  com.flyteidl.core.Identifier getId();
  /**
   * <pre>
   * Indicates a unique version of resource.
   * +required
   * </pre>
   *
   * <code>.flyteidl.core.Identifier id = 1 [json_name = "id"];</code>
   */
  com.flyteidl.core.IdentifierOrBuilder getIdOrBuilder();
}
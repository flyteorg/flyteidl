// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/core/execution.proto

package com.flyteidl.core;

public interface TaskLogOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.core.TaskLog)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string uri = 1 [json_name = "uri"];</code>
   * @return The uri.
   */
  java.lang.String getUri();
  /**
   * <code>string uri = 1 [json_name = "uri"];</code>
   * @return The bytes for uri.
   */
  com.google.protobuf.ByteString
      getUriBytes();

  /**
   * <code>string name = 2 [json_name = "name"];</code>
   * @return The name.
   */
  java.lang.String getName();
  /**
   * <code>string name = 2 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  com.google.protobuf.ByteString
      getNameBytes();

  /**
   * <code>.flyteidl.core.TaskLog.MessageFormat message_format = 3 [json_name = "messageFormat"];</code>
   * @return The enum numeric value on the wire for messageFormat.
   */
  int getMessageFormatValue();
  /**
   * <code>.flyteidl.core.TaskLog.MessageFormat message_format = 3 [json_name = "messageFormat"];</code>
   * @return The messageFormat.
   */
  com.flyteidl.core.TaskLog.MessageFormat getMessageFormat();

  /**
   * <code>.google.protobuf.Duration ttl = 4 [json_name = "ttl"];</code>
   * @return Whether the ttl field is set.
   */
  boolean hasTtl();
  /**
   * <code>.google.protobuf.Duration ttl = 4 [json_name = "ttl"];</code>
   * @return The ttl.
   */
  com.google.protobuf.Duration getTtl();
  /**
   * <code>.google.protobuf.Duration ttl = 4 [json_name = "ttl"];</code>
   */
  com.google.protobuf.DurationOrBuilder getTtlOrBuilder();
}
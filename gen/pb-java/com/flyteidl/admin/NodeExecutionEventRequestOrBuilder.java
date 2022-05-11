// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/admin/event.proto

package com.flyteidl.admin;

public interface NodeExecutionEventRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.admin.NodeExecutionEventRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Unique ID for this request that can be traced between services
   * </pre>
   *
   * <code>string request_id = 1 [json_name = "requestId"];</code>
   * @return The requestId.
   */
  java.lang.String getRequestId();
  /**
   * <pre>
   * Unique ID for this request that can be traced between services
   * </pre>
   *
   * <code>string request_id = 1 [json_name = "requestId"];</code>
   * @return The bytes for requestId.
   */
  com.google.protobuf.ByteString
      getRequestIdBytes();

  /**
   * <pre>
   * Details about the event that occurred.
   * </pre>
   *
   * <code>.flyteidl.event.NodeExecutionEvent event = 2 [json_name = "event"];</code>
   * @return Whether the event field is set.
   */
  boolean hasEvent();
  /**
   * <pre>
   * Details about the event that occurred.
   * </pre>
   *
   * <code>.flyteidl.event.NodeExecutionEvent event = 2 [json_name = "event"];</code>
   * @return The event.
   */
  com.flyteidl.event.NodeExecutionEvent getEvent();
  /**
   * <pre>
   * Details about the event that occurred.
   * </pre>
   *
   * <code>.flyteidl.event.NodeExecutionEvent event = 2 [json_name = "event"];</code>
   */
  com.flyteidl.event.NodeExecutionEventOrBuilder getEventOrBuilder();
}
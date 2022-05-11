// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/core/literals.proto

package com.flyteidl.core;

public interface RetryStrategyOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.core.RetryStrategy)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Number of retries. Retries will be consumed when the job fails with a recoverable error.
   * The number of retries must be less than or equals to 10.
   * </pre>
   *
   * <code>uint32 retries = 5 [json_name = "retries"];</code>
   * @return The retries.
   */
  int getRetries();
}
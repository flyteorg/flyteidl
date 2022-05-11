// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/plugins/pytorch.proto

package com.flyteidl.plugins;

public interface DistributedPyTorchTrainingTaskOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.plugins.DistributedPyTorchTrainingTask)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * number of worker replicas spawned in the cluster for this job
   * </pre>
   *
   * <code>int32 workers = 1 [json_name = "workers"];</code>
   * @return The workers.
   */
  int getWorkers();
}
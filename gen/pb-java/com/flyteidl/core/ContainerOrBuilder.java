// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/core/tasks.proto

package com.flyteidl.core;

public interface ContainerOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.core.Container)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Container image url. Eg: docker/redis:latest
   * </pre>
   *
   * <code>string image = 1 [json_name = "image"];</code>
   * @return The image.
   */
  java.lang.String getImage();
  /**
   * <pre>
   * Container image url. Eg: docker/redis:latest
   * </pre>
   *
   * <code>string image = 1 [json_name = "image"];</code>
   * @return The bytes for image.
   */
  com.google.protobuf.ByteString
      getImageBytes();

  /**
   * <pre>
   * Command to be executed, if not provided, the default entrypoint in the container image will be used.
   * </pre>
   *
   * <code>repeated string command = 2 [json_name = "command"];</code>
   * @return A list containing the command.
   */
  java.util.List<java.lang.String>
      getCommandList();
  /**
   * <pre>
   * Command to be executed, if not provided, the default entrypoint in the container image will be used.
   * </pre>
   *
   * <code>repeated string command = 2 [json_name = "command"];</code>
   * @return The count of command.
   */
  int getCommandCount();
  /**
   * <pre>
   * Command to be executed, if not provided, the default entrypoint in the container image will be used.
   * </pre>
   *
   * <code>repeated string command = 2 [json_name = "command"];</code>
   * @param index The index of the element to return.
   * @return The command at the given index.
   */
  java.lang.String getCommand(int index);
  /**
   * <pre>
   * Command to be executed, if not provided, the default entrypoint in the container image will be used.
   * </pre>
   *
   * <code>repeated string command = 2 [json_name = "command"];</code>
   * @param index The index of the value to return.
   * @return The bytes of the command at the given index.
   */
  com.google.protobuf.ByteString
      getCommandBytes(int index);

  /**
   * <pre>
   * These will default to Flyte given paths. If provided, the system will not append known paths. If the task still
   * needs flyte's inputs and outputs path, add $(FLYTE_INPUT_FILE), $(FLYTE_OUTPUT_FILE) wherever makes sense and the
   * system will populate these before executing the container.
   * </pre>
   *
   * <code>repeated string args = 3 [json_name = "args"];</code>
   * @return A list containing the args.
   */
  java.util.List<java.lang.String>
      getArgsList();
  /**
   * <pre>
   * These will default to Flyte given paths. If provided, the system will not append known paths. If the task still
   * needs flyte's inputs and outputs path, add $(FLYTE_INPUT_FILE), $(FLYTE_OUTPUT_FILE) wherever makes sense and the
   * system will populate these before executing the container.
   * </pre>
   *
   * <code>repeated string args = 3 [json_name = "args"];</code>
   * @return The count of args.
   */
  int getArgsCount();
  /**
   * <pre>
   * These will default to Flyte given paths. If provided, the system will not append known paths. If the task still
   * needs flyte's inputs and outputs path, add $(FLYTE_INPUT_FILE), $(FLYTE_OUTPUT_FILE) wherever makes sense and the
   * system will populate these before executing the container.
   * </pre>
   *
   * <code>repeated string args = 3 [json_name = "args"];</code>
   * @param index The index of the element to return.
   * @return The args at the given index.
   */
  java.lang.String getArgs(int index);
  /**
   * <pre>
   * These will default to Flyte given paths. If provided, the system will not append known paths. If the task still
   * needs flyte's inputs and outputs path, add $(FLYTE_INPUT_FILE), $(FLYTE_OUTPUT_FILE) wherever makes sense and the
   * system will populate these before executing the container.
   * </pre>
   *
   * <code>repeated string args = 3 [json_name = "args"];</code>
   * @param index The index of the value to return.
   * @return The bytes of the args at the given index.
   */
  com.google.protobuf.ByteString
      getArgsBytes(int index);

  /**
   * <pre>
   * Container resources requirement as specified by the container engine.
   * </pre>
   *
   * <code>.flyteidl.core.Resources resources = 4 [json_name = "resources"];</code>
   * @return Whether the resources field is set.
   */
  boolean hasResources();
  /**
   * <pre>
   * Container resources requirement as specified by the container engine.
   * </pre>
   *
   * <code>.flyteidl.core.Resources resources = 4 [json_name = "resources"];</code>
   * @return The resources.
   */
  com.flyteidl.core.Resources getResources();
  /**
   * <pre>
   * Container resources requirement as specified by the container engine.
   * </pre>
   *
   * <code>.flyteidl.core.Resources resources = 4 [json_name = "resources"];</code>
   */
  com.flyteidl.core.ResourcesOrBuilder getResourcesOrBuilder();

  /**
   * <pre>
   * Environment variables will be set as the container is starting up.
   * </pre>
   *
   * <code>repeated .flyteidl.core.KeyValuePair env = 5 [json_name = "env"];</code>
   */
  java.util.List<com.flyteidl.core.KeyValuePair> 
      getEnvList();
  /**
   * <pre>
   * Environment variables will be set as the container is starting up.
   * </pre>
   *
   * <code>repeated .flyteidl.core.KeyValuePair env = 5 [json_name = "env"];</code>
   */
  com.flyteidl.core.KeyValuePair getEnv(int index);
  /**
   * <pre>
   * Environment variables will be set as the container is starting up.
   * </pre>
   *
   * <code>repeated .flyteidl.core.KeyValuePair env = 5 [json_name = "env"];</code>
   */
  int getEnvCount();
  /**
   * <pre>
   * Environment variables will be set as the container is starting up.
   * </pre>
   *
   * <code>repeated .flyteidl.core.KeyValuePair env = 5 [json_name = "env"];</code>
   */
  java.util.List<? extends com.flyteidl.core.KeyValuePairOrBuilder> 
      getEnvOrBuilderList();
  /**
   * <pre>
   * Environment variables will be set as the container is starting up.
   * </pre>
   *
   * <code>repeated .flyteidl.core.KeyValuePair env = 5 [json_name = "env"];</code>
   */
  com.flyteidl.core.KeyValuePairOrBuilder getEnvOrBuilder(
      int index);

  /**
   * <pre>
   * Allows extra configs to be available for the container.
   * TODO: elaborate on how configs will become available.
   * Deprecated, please use TaskTemplate.config instead.
   * </pre>
   *
   * <code>repeated .flyteidl.core.KeyValuePair config = 6 [json_name = "config", deprecated = true];</code>
   */
  @java.lang.Deprecated java.util.List<com.flyteidl.core.KeyValuePair> 
      getConfigList();
  /**
   * <pre>
   * Allows extra configs to be available for the container.
   * TODO: elaborate on how configs will become available.
   * Deprecated, please use TaskTemplate.config instead.
   * </pre>
   *
   * <code>repeated .flyteidl.core.KeyValuePair config = 6 [json_name = "config", deprecated = true];</code>
   */
  @java.lang.Deprecated com.flyteidl.core.KeyValuePair getConfig(int index);
  /**
   * <pre>
   * Allows extra configs to be available for the container.
   * TODO: elaborate on how configs will become available.
   * Deprecated, please use TaskTemplate.config instead.
   * </pre>
   *
   * <code>repeated .flyteidl.core.KeyValuePair config = 6 [json_name = "config", deprecated = true];</code>
   */
  @java.lang.Deprecated int getConfigCount();
  /**
   * <pre>
   * Allows extra configs to be available for the container.
   * TODO: elaborate on how configs will become available.
   * Deprecated, please use TaskTemplate.config instead.
   * </pre>
   *
   * <code>repeated .flyteidl.core.KeyValuePair config = 6 [json_name = "config", deprecated = true];</code>
   */
  @java.lang.Deprecated java.util.List<? extends com.flyteidl.core.KeyValuePairOrBuilder> 
      getConfigOrBuilderList();
  /**
   * <pre>
   * Allows extra configs to be available for the container.
   * TODO: elaborate on how configs will become available.
   * Deprecated, please use TaskTemplate.config instead.
   * </pre>
   *
   * <code>repeated .flyteidl.core.KeyValuePair config = 6 [json_name = "config", deprecated = true];</code>
   */
  @java.lang.Deprecated com.flyteidl.core.KeyValuePairOrBuilder getConfigOrBuilder(
      int index);

  /**
   * <pre>
   * Ports to open in the container. This feature is not supported by all execution engines. (e.g. supported on K8s but
   * not supported on AWS Batch)
   * Only K8s
   * </pre>
   *
   * <code>repeated .flyteidl.core.ContainerPort ports = 7 [json_name = "ports"];</code>
   */
  java.util.List<com.flyteidl.core.ContainerPort> 
      getPortsList();
  /**
   * <pre>
   * Ports to open in the container. This feature is not supported by all execution engines. (e.g. supported on K8s but
   * not supported on AWS Batch)
   * Only K8s
   * </pre>
   *
   * <code>repeated .flyteidl.core.ContainerPort ports = 7 [json_name = "ports"];</code>
   */
  com.flyteidl.core.ContainerPort getPorts(int index);
  /**
   * <pre>
   * Ports to open in the container. This feature is not supported by all execution engines. (e.g. supported on K8s but
   * not supported on AWS Batch)
   * Only K8s
   * </pre>
   *
   * <code>repeated .flyteidl.core.ContainerPort ports = 7 [json_name = "ports"];</code>
   */
  int getPortsCount();
  /**
   * <pre>
   * Ports to open in the container. This feature is not supported by all execution engines. (e.g. supported on K8s but
   * not supported on AWS Batch)
   * Only K8s
   * </pre>
   *
   * <code>repeated .flyteidl.core.ContainerPort ports = 7 [json_name = "ports"];</code>
   */
  java.util.List<? extends com.flyteidl.core.ContainerPortOrBuilder> 
      getPortsOrBuilderList();
  /**
   * <pre>
   * Ports to open in the container. This feature is not supported by all execution engines. (e.g. supported on K8s but
   * not supported on AWS Batch)
   * Only K8s
   * </pre>
   *
   * <code>repeated .flyteidl.core.ContainerPort ports = 7 [json_name = "ports"];</code>
   */
  com.flyteidl.core.ContainerPortOrBuilder getPortsOrBuilder(
      int index);

  /**
   * <pre>
   * BETA: Optional configuration for DataLoading. If not specified, then default values are used.
   * This makes it possible to to run a completely portable container, that uses inputs and outputs
   * only from the local file-system and without having any reference to flyteidl. This is supported only on K8s at the moment.
   * If data loading is enabled, then data will be mounted in accompanying directories specified in the DataLoadingConfig. If the directories
   * are not specified, inputs will be mounted onto and outputs will be uploaded from a pre-determined file-system path. Refer to the documentation
   * to understand the default paths.
   * Only K8s
   * </pre>
   *
   * <code>.flyteidl.core.DataLoadingConfig data_config = 9 [json_name = "dataConfig"];</code>
   * @return Whether the dataConfig field is set.
   */
  boolean hasDataConfig();
  /**
   * <pre>
   * BETA: Optional configuration for DataLoading. If not specified, then default values are used.
   * This makes it possible to to run a completely portable container, that uses inputs and outputs
   * only from the local file-system and without having any reference to flyteidl. This is supported only on K8s at the moment.
   * If data loading is enabled, then data will be mounted in accompanying directories specified in the DataLoadingConfig. If the directories
   * are not specified, inputs will be mounted onto and outputs will be uploaded from a pre-determined file-system path. Refer to the documentation
   * to understand the default paths.
   * Only K8s
   * </pre>
   *
   * <code>.flyteidl.core.DataLoadingConfig data_config = 9 [json_name = "dataConfig"];</code>
   * @return The dataConfig.
   */
  com.flyteidl.core.DataLoadingConfig getDataConfig();
  /**
   * <pre>
   * BETA: Optional configuration for DataLoading. If not specified, then default values are used.
   * This makes it possible to to run a completely portable container, that uses inputs and outputs
   * only from the local file-system and without having any reference to flyteidl. This is supported only on K8s at the moment.
   * If data loading is enabled, then data will be mounted in accompanying directories specified in the DataLoadingConfig. If the directories
   * are not specified, inputs will be mounted onto and outputs will be uploaded from a pre-determined file-system path. Refer to the documentation
   * to understand the default paths.
   * Only K8s
   * </pre>
   *
   * <code>.flyteidl.core.DataLoadingConfig data_config = 9 [json_name = "dataConfig"];</code>
   */
  com.flyteidl.core.DataLoadingConfigOrBuilder getDataConfigOrBuilder();

  /**
   * <code>.flyteidl.core.Container.Architecture architecture = 10 [json_name = "architecture"];</code>
   * @return The enum numeric value on the wire for architecture.
   */
  int getArchitectureValue();
  /**
   * <code>.flyteidl.core.Container.Architecture architecture = 10 [json_name = "architecture"];</code>
   * @return The architecture.
   */
  com.flyteidl.core.Container.Architecture getArchitecture();
}
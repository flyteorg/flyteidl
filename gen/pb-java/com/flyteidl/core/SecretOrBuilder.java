// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/core/security.proto

package com.flyteidl.core;

public interface SecretOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.core.Secret)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * The name of the secret group where to find the key referenced below. For K8s secrets, this should be the name of
   * the v1/secret object. For Confidant, this should be the Credential name. For Vault, this should be the secret name.
   * For AWS Secret Manager, this should be the name of the secret.
   * +required
   * </pre>
   *
   * <code>string group = 1 [json_name = "group"];</code>
   * @return The group.
   */
  java.lang.String getGroup();
  /**
   * <pre>
   * The name of the secret group where to find the key referenced below. For K8s secrets, this should be the name of
   * the v1/secret object. For Confidant, this should be the Credential name. For Vault, this should be the secret name.
   * For AWS Secret Manager, this should be the name of the secret.
   * +required
   * </pre>
   *
   * <code>string group = 1 [json_name = "group"];</code>
   * @return The bytes for group.
   */
  com.google.protobuf.ByteString
      getGroupBytes();

  /**
   * <pre>
   * The group version to fetch. This is not supported in all secret management systems. It'll be ignored for the ones
   * that do not support it.
   * +optional
   * </pre>
   *
   * <code>string group_version = 2 [json_name = "groupVersion"];</code>
   * @return The groupVersion.
   */
  java.lang.String getGroupVersion();
  /**
   * <pre>
   * The group version to fetch. This is not supported in all secret management systems. It'll be ignored for the ones
   * that do not support it.
   * +optional
   * </pre>
   *
   * <code>string group_version = 2 [json_name = "groupVersion"];</code>
   * @return The bytes for groupVersion.
   */
  com.google.protobuf.ByteString
      getGroupVersionBytes();

  /**
   * <pre>
   * The name of the secret to mount. This has to match an existing secret in the system. It's up to the implementation
   * of the secret management system to require case sensitivity. For K8s secrets, Confidant and Vault, this should
   * match one of the keys inside the secret. For AWS Secret Manager, it's ignored.
   * +optional
   * </pre>
   *
   * <code>string key = 3 [json_name = "key"];</code>
   * @return The key.
   */
  java.lang.String getKey();
  /**
   * <pre>
   * The name of the secret to mount. This has to match an existing secret in the system. It's up to the implementation
   * of the secret management system to require case sensitivity. For K8s secrets, Confidant and Vault, this should
   * match one of the keys inside the secret. For AWS Secret Manager, it's ignored.
   * +optional
   * </pre>
   *
   * <code>string key = 3 [json_name = "key"];</code>
   * @return The bytes for key.
   */
  com.google.protobuf.ByteString
      getKeyBytes();

  /**
   * <pre>
   * mount_requirement is optional. Indicates where the secret has to be mounted. If provided, the execution will fail
   * if the underlying key management system cannot satisfy that requirement. If not provided, the default location
   * will depend on the key management system.
   * +optional
   * </pre>
   *
   * <code>.flyteidl.core.Secret.MountType mount_requirement = 4 [json_name = "mountRequirement"];</code>
   * @return The enum numeric value on the wire for mountRequirement.
   */
  int getMountRequirementValue();
  /**
   * <pre>
   * mount_requirement is optional. Indicates where the secret has to be mounted. If provided, the execution will fail
   * if the underlying key management system cannot satisfy that requirement. If not provided, the default location
   * will depend on the key management system.
   * +optional
   * </pre>
   *
   * <code>.flyteidl.core.Secret.MountType mount_requirement = 4 [json_name = "mountRequirement"];</code>
   * @return The mountRequirement.
   */
  com.flyteidl.core.Secret.MountType getMountRequirement();
}
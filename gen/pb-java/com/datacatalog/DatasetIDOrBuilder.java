// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/datacatalog/datacatalog.proto

package com.datacatalog;

public interface DatasetIDOrBuilder extends
    // @@protoc_insertion_point(interface_extends:datacatalog.DatasetID)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * The name of the project
   * </pre>
   *
   * <code>string project = 1 [json_name = "project"];</code>
   * @return The project.
   */
  java.lang.String getProject();
  /**
   * <pre>
   * The name of the project
   * </pre>
   *
   * <code>string project = 1 [json_name = "project"];</code>
   * @return The bytes for project.
   */
  com.google.protobuf.ByteString
      getProjectBytes();

  /**
   * <pre>
   * The name of the dataset
   * </pre>
   *
   * <code>string name = 2 [json_name = "name"];</code>
   * @return The name.
   */
  java.lang.String getName();
  /**
   * <pre>
   * The name of the dataset
   * </pre>
   *
   * <code>string name = 2 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  com.google.protobuf.ByteString
      getNameBytes();

  /**
   * <pre>
   * The domain (eg. environment)
   * </pre>
   *
   * <code>string domain = 3 [json_name = "domain"];</code>
   * @return The domain.
   */
  java.lang.String getDomain();
  /**
   * <pre>
   * The domain (eg. environment)
   * </pre>
   *
   * <code>string domain = 3 [json_name = "domain"];</code>
   * @return The bytes for domain.
   */
  com.google.protobuf.ByteString
      getDomainBytes();

  /**
   * <pre>
   * Version of the data schema
   * </pre>
   *
   * <code>string version = 4 [json_name = "version"];</code>
   * @return The version.
   */
  java.lang.String getVersion();
  /**
   * <pre>
   * Version of the data schema
   * </pre>
   *
   * <code>string version = 4 [json_name = "version"];</code>
   * @return The bytes for version.
   */
  com.google.protobuf.ByteString
      getVersionBytes();

  /**
   * <pre>
   * UUID for the dataset (if set the above fields are optional)
   * </pre>
   *
   * <code>string UUID = 5 [json_name = "UUID"];</code>
   * @return The uUID.
   */
  java.lang.String getUUID();
  /**
   * <pre>
   * UUID for the dataset (if set the above fields are optional)
   * </pre>
   *
   * <code>string UUID = 5 [json_name = "UUID"];</code>
   * @return The bytes for uUID.
   */
  com.google.protobuf.ByteString
      getUUIDBytes();
}
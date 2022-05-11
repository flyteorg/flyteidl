// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/core/literals.proto

package com.flyteidl.core;

public interface ScalarOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.core.Scalar)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.flyteidl.core.Primitive primitive = 1 [json_name = "primitive"];</code>
   * @return Whether the primitive field is set.
   */
  boolean hasPrimitive();
  /**
   * <code>.flyteidl.core.Primitive primitive = 1 [json_name = "primitive"];</code>
   * @return The primitive.
   */
  com.flyteidl.core.Primitive getPrimitive();
  /**
   * <code>.flyteidl.core.Primitive primitive = 1 [json_name = "primitive"];</code>
   */
  com.flyteidl.core.PrimitiveOrBuilder getPrimitiveOrBuilder();

  /**
   * <code>.flyteidl.core.Blob blob = 2 [json_name = "blob"];</code>
   * @return Whether the blob field is set.
   */
  boolean hasBlob();
  /**
   * <code>.flyteidl.core.Blob blob = 2 [json_name = "blob"];</code>
   * @return The blob.
   */
  com.flyteidl.core.Blob getBlob();
  /**
   * <code>.flyteidl.core.Blob blob = 2 [json_name = "blob"];</code>
   */
  com.flyteidl.core.BlobOrBuilder getBlobOrBuilder();

  /**
   * <code>.flyteidl.core.Binary binary = 3 [json_name = "binary"];</code>
   * @return Whether the binary field is set.
   */
  boolean hasBinary();
  /**
   * <code>.flyteidl.core.Binary binary = 3 [json_name = "binary"];</code>
   * @return The binary.
   */
  com.flyteidl.core.Binary getBinary();
  /**
   * <code>.flyteidl.core.Binary binary = 3 [json_name = "binary"];</code>
   */
  com.flyteidl.core.BinaryOrBuilder getBinaryOrBuilder();

  /**
   * <code>.flyteidl.core.Schema schema = 4 [json_name = "schema"];</code>
   * @return Whether the schema field is set.
   */
  boolean hasSchema();
  /**
   * <code>.flyteidl.core.Schema schema = 4 [json_name = "schema"];</code>
   * @return The schema.
   */
  com.flyteidl.core.Schema getSchema();
  /**
   * <code>.flyteidl.core.Schema schema = 4 [json_name = "schema"];</code>
   */
  com.flyteidl.core.SchemaOrBuilder getSchemaOrBuilder();

  /**
   * <code>.flyteidl.core.Void none_type = 5 [json_name = "noneType"];</code>
   * @return Whether the noneType field is set.
   */
  boolean hasNoneType();
  /**
   * <code>.flyteidl.core.Void none_type = 5 [json_name = "noneType"];</code>
   * @return The noneType.
   */
  com.flyteidl.core.Void getNoneType();
  /**
   * <code>.flyteidl.core.Void none_type = 5 [json_name = "noneType"];</code>
   */
  com.flyteidl.core.VoidOrBuilder getNoneTypeOrBuilder();

  /**
   * <code>.flyteidl.core.Error error = 6 [json_name = "error"];</code>
   * @return Whether the error field is set.
   */
  boolean hasError();
  /**
   * <code>.flyteidl.core.Error error = 6 [json_name = "error"];</code>
   * @return The error.
   */
  com.flyteidl.core.Error getError();
  /**
   * <code>.flyteidl.core.Error error = 6 [json_name = "error"];</code>
   */
  com.flyteidl.core.ErrorOrBuilder getErrorOrBuilder();

  /**
   * <code>.google.protobuf.Struct generic = 7 [json_name = "generic"];</code>
   * @return Whether the generic field is set.
   */
  boolean hasGeneric();
  /**
   * <code>.google.protobuf.Struct generic = 7 [json_name = "generic"];</code>
   * @return The generic.
   */
  com.google.protobuf.Struct getGeneric();
  /**
   * <code>.google.protobuf.Struct generic = 7 [json_name = "generic"];</code>
   */
  com.google.protobuf.StructOrBuilder getGenericOrBuilder();

  /**
   * <code>.flyteidl.core.StructuredDataset structured_dataset = 8 [json_name = "structuredDataset"];</code>
   * @return Whether the structuredDataset field is set.
   */
  boolean hasStructuredDataset();
  /**
   * <code>.flyteidl.core.StructuredDataset structured_dataset = 8 [json_name = "structuredDataset"];</code>
   * @return The structuredDataset.
   */
  com.flyteidl.core.StructuredDataset getStructuredDataset();
  /**
   * <code>.flyteidl.core.StructuredDataset structured_dataset = 8 [json_name = "structuredDataset"];</code>
   */
  com.flyteidl.core.StructuredDatasetOrBuilder getStructuredDatasetOrBuilder();

  /**
   * <code>.flyteidl.core.Union union = 9 [json_name = "union"];</code>
   * @return Whether the union field is set.
   */
  boolean hasUnion();
  /**
   * <code>.flyteidl.core.Union union = 9 [json_name = "union"];</code>
   * @return The union.
   */
  com.flyteidl.core.Union getUnion();
  /**
   * <code>.flyteidl.core.Union union = 9 [json_name = "union"];</code>
   */
  com.flyteidl.core.UnionOrBuilder getUnionOrBuilder();

  public com.flyteidl.core.Scalar.ValueCase getValueCase();
}
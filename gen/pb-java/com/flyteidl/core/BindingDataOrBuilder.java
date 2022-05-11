// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/core/literals.proto

package com.flyteidl.core;

public interface BindingDataOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.core.BindingData)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * A simple scalar value.
   * </pre>
   *
   * <code>.flyteidl.core.Scalar scalar = 1 [json_name = "scalar"];</code>
   * @return Whether the scalar field is set.
   */
  boolean hasScalar();
  /**
   * <pre>
   * A simple scalar value.
   * </pre>
   *
   * <code>.flyteidl.core.Scalar scalar = 1 [json_name = "scalar"];</code>
   * @return The scalar.
   */
  com.flyteidl.core.Scalar getScalar();
  /**
   * <pre>
   * A simple scalar value.
   * </pre>
   *
   * <code>.flyteidl.core.Scalar scalar = 1 [json_name = "scalar"];</code>
   */
  com.flyteidl.core.ScalarOrBuilder getScalarOrBuilder();

  /**
   * <pre>
   * A collection of binding data. This allows nesting of binding data to any number
   * of levels.
   * </pre>
   *
   * <code>.flyteidl.core.BindingDataCollection collection = 2 [json_name = "collection"];</code>
   * @return Whether the collection field is set.
   */
  boolean hasCollection();
  /**
   * <pre>
   * A collection of binding data. This allows nesting of binding data to any number
   * of levels.
   * </pre>
   *
   * <code>.flyteidl.core.BindingDataCollection collection = 2 [json_name = "collection"];</code>
   * @return The collection.
   */
  com.flyteidl.core.BindingDataCollection getCollection();
  /**
   * <pre>
   * A collection of binding data. This allows nesting of binding data to any number
   * of levels.
   * </pre>
   *
   * <code>.flyteidl.core.BindingDataCollection collection = 2 [json_name = "collection"];</code>
   */
  com.flyteidl.core.BindingDataCollectionOrBuilder getCollectionOrBuilder();

  /**
   * <pre>
   * References an output promised by another node.
   * </pre>
   *
   * <code>.flyteidl.core.OutputReference promise = 3 [json_name = "promise"];</code>
   * @return Whether the promise field is set.
   */
  boolean hasPromise();
  /**
   * <pre>
   * References an output promised by another node.
   * </pre>
   *
   * <code>.flyteidl.core.OutputReference promise = 3 [json_name = "promise"];</code>
   * @return The promise.
   */
  com.flyteidl.core.OutputReference getPromise();
  /**
   * <pre>
   * References an output promised by another node.
   * </pre>
   *
   * <code>.flyteidl.core.OutputReference promise = 3 [json_name = "promise"];</code>
   */
  com.flyteidl.core.OutputReferenceOrBuilder getPromiseOrBuilder();

  /**
   * <pre>
   * A map of bindings. The key is always a string.
   * </pre>
   *
   * <code>.flyteidl.core.BindingDataMap map = 4 [json_name = "map"];</code>
   * @return Whether the map field is set.
   */
  boolean hasMap();
  /**
   * <pre>
   * A map of bindings. The key is always a string.
   * </pre>
   *
   * <code>.flyteidl.core.BindingDataMap map = 4 [json_name = "map"];</code>
   * @return The map.
   */
  com.flyteidl.core.BindingDataMap getMap();
  /**
   * <pre>
   * A map of bindings. The key is always a string.
   * </pre>
   *
   * <code>.flyteidl.core.BindingDataMap map = 4 [json_name = "map"];</code>
   */
  com.flyteidl.core.BindingDataMapOrBuilder getMapOrBuilder();

  /**
   * <code>.flyteidl.core.UnionInfo union = 5 [json_name = "union"];</code>
   * @return Whether the union field is set.
   */
  boolean hasUnion();
  /**
   * <code>.flyteidl.core.UnionInfo union = 5 [json_name = "union"];</code>
   * @return The union.
   */
  com.flyteidl.core.UnionInfo getUnion();
  /**
   * <code>.flyteidl.core.UnionInfo union = 5 [json_name = "union"];</code>
   */
  com.flyteidl.core.UnionInfoOrBuilder getUnionOrBuilder();

  public com.flyteidl.core.BindingData.ValueCase getValueCase();
}
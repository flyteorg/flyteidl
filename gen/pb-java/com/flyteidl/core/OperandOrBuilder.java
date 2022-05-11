// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/core/condition.proto

package com.flyteidl.core;

public interface OperandOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.core.Operand)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Can be a constant
   * </pre>
   *
   * <code>.flyteidl.core.Primitive primitive = 1 [json_name = "primitive"];</code>
   * @return Whether the primitive field is set.
   */
  boolean hasPrimitive();
  /**
   * <pre>
   * Can be a constant
   * </pre>
   *
   * <code>.flyteidl.core.Primitive primitive = 1 [json_name = "primitive"];</code>
   * @return The primitive.
   */
  com.flyteidl.core.Primitive getPrimitive();
  /**
   * <pre>
   * Can be a constant
   * </pre>
   *
   * <code>.flyteidl.core.Primitive primitive = 1 [json_name = "primitive"];</code>
   */
  com.flyteidl.core.PrimitiveOrBuilder getPrimitiveOrBuilder();

  /**
   * <pre>
   * Or one of this node's input variables
   * </pre>
   *
   * <code>string var = 2 [json_name = "var"];</code>
   * @return Whether the var field is set.
   */
  boolean hasVar();
  /**
   * <pre>
   * Or one of this node's input variables
   * </pre>
   *
   * <code>string var = 2 [json_name = "var"];</code>
   * @return The var.
   */
  java.lang.String getVar();
  /**
   * <pre>
   * Or one of this node's input variables
   * </pre>
   *
   * <code>string var = 2 [json_name = "var"];</code>
   * @return The bytes for var.
   */
  com.google.protobuf.ByteString
      getVarBytes();

  public com.flyteidl.core.Operand.ValCase getValCase();
}
// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/core/interface.proto

package com.flyteidl.core;

/**
 * <pre>
 * Defines strongly typed inputs and outputs.
 * </pre>
 *
 * Protobuf type {@code flyteidl.core.TypedInterface}
 */
public final class TypedInterface extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:flyteidl.core.TypedInterface)
    TypedInterfaceOrBuilder {
private static final long serialVersionUID = 0L;
  // Use TypedInterface.newBuilder() to construct.
  private TypedInterface(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private TypedInterface() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new TypedInterface();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private TypedInterface(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    com.google.protobuf.UnknownFieldSet.Builder unknownFields =
        com.google.protobuf.UnknownFieldSet.newBuilder();
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          case 10: {
            com.flyteidl.core.VariableMap.Builder subBuilder = null;
            if (inputs_ != null) {
              subBuilder = inputs_.toBuilder();
            }
            inputs_ = input.readMessage(com.flyteidl.core.VariableMap.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(inputs_);
              inputs_ = subBuilder.buildPartial();
            }

            break;
          }
          case 18: {
            com.flyteidl.core.VariableMap.Builder subBuilder = null;
            if (outputs_ != null) {
              subBuilder = outputs_.toBuilder();
            }
            outputs_ = input.readMessage(com.flyteidl.core.VariableMap.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(outputs_);
              outputs_ = subBuilder.buildPartial();
            }

            break;
          }
          default: {
            if (!parseUnknownField(
                input, unknownFields, extensionRegistry, tag)) {
              done = true;
            }
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.flyteidl.core.InterfaceProto.internal_static_flyteidl_core_TypedInterface_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.flyteidl.core.InterfaceProto.internal_static_flyteidl_core_TypedInterface_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.flyteidl.core.TypedInterface.class, com.flyteidl.core.TypedInterface.Builder.class);
  }

  public static final int INPUTS_FIELD_NUMBER = 1;
  private com.flyteidl.core.VariableMap inputs_;
  /**
   * <code>.flyteidl.core.VariableMap inputs = 1 [json_name = "inputs"];</code>
   * @return Whether the inputs field is set.
   */
  @java.lang.Override
  public boolean hasInputs() {
    return inputs_ != null;
  }
  /**
   * <code>.flyteidl.core.VariableMap inputs = 1 [json_name = "inputs"];</code>
   * @return The inputs.
   */
  @java.lang.Override
  public com.flyteidl.core.VariableMap getInputs() {
    return inputs_ == null ? com.flyteidl.core.VariableMap.getDefaultInstance() : inputs_;
  }
  /**
   * <code>.flyteidl.core.VariableMap inputs = 1 [json_name = "inputs"];</code>
   */
  @java.lang.Override
  public com.flyteidl.core.VariableMapOrBuilder getInputsOrBuilder() {
    return getInputs();
  }

  public static final int OUTPUTS_FIELD_NUMBER = 2;
  private com.flyteidl.core.VariableMap outputs_;
  /**
   * <code>.flyteidl.core.VariableMap outputs = 2 [json_name = "outputs"];</code>
   * @return Whether the outputs field is set.
   */
  @java.lang.Override
  public boolean hasOutputs() {
    return outputs_ != null;
  }
  /**
   * <code>.flyteidl.core.VariableMap outputs = 2 [json_name = "outputs"];</code>
   * @return The outputs.
   */
  @java.lang.Override
  public com.flyteidl.core.VariableMap getOutputs() {
    return outputs_ == null ? com.flyteidl.core.VariableMap.getDefaultInstance() : outputs_;
  }
  /**
   * <code>.flyteidl.core.VariableMap outputs = 2 [json_name = "outputs"];</code>
   */
  @java.lang.Override
  public com.flyteidl.core.VariableMapOrBuilder getOutputsOrBuilder() {
    return getOutputs();
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (inputs_ != null) {
      output.writeMessage(1, getInputs());
    }
    if (outputs_ != null) {
      output.writeMessage(2, getOutputs());
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (inputs_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getInputs());
    }
    if (outputs_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getOutputs());
    }
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof com.flyteidl.core.TypedInterface)) {
      return super.equals(obj);
    }
    com.flyteidl.core.TypedInterface other = (com.flyteidl.core.TypedInterface) obj;

    if (hasInputs() != other.hasInputs()) return false;
    if (hasInputs()) {
      if (!getInputs()
          .equals(other.getInputs())) return false;
    }
    if (hasOutputs() != other.hasOutputs()) return false;
    if (hasOutputs()) {
      if (!getOutputs()
          .equals(other.getOutputs())) return false;
    }
    if (!unknownFields.equals(other.unknownFields)) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    if (hasInputs()) {
      hash = (37 * hash) + INPUTS_FIELD_NUMBER;
      hash = (53 * hash) + getInputs().hashCode();
    }
    if (hasOutputs()) {
      hash = (37 * hash) + OUTPUTS_FIELD_NUMBER;
      hash = (53 * hash) + getOutputs().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.flyteidl.core.TypedInterface parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.core.TypedInterface parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.core.TypedInterface parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.core.TypedInterface parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.core.TypedInterface parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.core.TypedInterface parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.core.TypedInterface parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.core.TypedInterface parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.core.TypedInterface parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.flyteidl.core.TypedInterface parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.core.TypedInterface parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.core.TypedInterface parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(com.flyteidl.core.TypedInterface prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * <pre>
   * Defines strongly typed inputs and outputs.
   * </pre>
   *
   * Protobuf type {@code flyteidl.core.TypedInterface}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:flyteidl.core.TypedInterface)
      com.flyteidl.core.TypedInterfaceOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.flyteidl.core.InterfaceProto.internal_static_flyteidl_core_TypedInterface_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.flyteidl.core.InterfaceProto.internal_static_flyteidl_core_TypedInterface_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.flyteidl.core.TypedInterface.class, com.flyteidl.core.TypedInterface.Builder.class);
    }

    // Construct using com.flyteidl.core.TypedInterface.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      if (inputsBuilder_ == null) {
        inputs_ = null;
      } else {
        inputs_ = null;
        inputsBuilder_ = null;
      }
      if (outputsBuilder_ == null) {
        outputs_ = null;
      } else {
        outputs_ = null;
        outputsBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.flyteidl.core.InterfaceProto.internal_static_flyteidl_core_TypedInterface_descriptor;
    }

    @java.lang.Override
    public com.flyteidl.core.TypedInterface getDefaultInstanceForType() {
      return com.flyteidl.core.TypedInterface.getDefaultInstance();
    }

    @java.lang.Override
    public com.flyteidl.core.TypedInterface build() {
      com.flyteidl.core.TypedInterface result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.flyteidl.core.TypedInterface buildPartial() {
      com.flyteidl.core.TypedInterface result = new com.flyteidl.core.TypedInterface(this);
      if (inputsBuilder_ == null) {
        result.inputs_ = inputs_;
      } else {
        result.inputs_ = inputsBuilder_.build();
      }
      if (outputsBuilder_ == null) {
        result.outputs_ = outputs_;
      } else {
        result.outputs_ = outputsBuilder_.build();
      }
      onBuilt();
      return result;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof com.flyteidl.core.TypedInterface) {
        return mergeFrom((com.flyteidl.core.TypedInterface)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.flyteidl.core.TypedInterface other) {
      if (other == com.flyteidl.core.TypedInterface.getDefaultInstance()) return this;
      if (other.hasInputs()) {
        mergeInputs(other.getInputs());
      }
      if (other.hasOutputs()) {
        mergeOutputs(other.getOutputs());
      }
      this.mergeUnknownFields(other.unknownFields);
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      com.flyteidl.core.TypedInterface parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.flyteidl.core.TypedInterface) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private com.flyteidl.core.VariableMap inputs_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.flyteidl.core.VariableMap, com.flyteidl.core.VariableMap.Builder, com.flyteidl.core.VariableMapOrBuilder> inputsBuilder_;
    /**
     * <code>.flyteidl.core.VariableMap inputs = 1 [json_name = "inputs"];</code>
     * @return Whether the inputs field is set.
     */
    public boolean hasInputs() {
      return inputsBuilder_ != null || inputs_ != null;
    }
    /**
     * <code>.flyteidl.core.VariableMap inputs = 1 [json_name = "inputs"];</code>
     * @return The inputs.
     */
    public com.flyteidl.core.VariableMap getInputs() {
      if (inputsBuilder_ == null) {
        return inputs_ == null ? com.flyteidl.core.VariableMap.getDefaultInstance() : inputs_;
      } else {
        return inputsBuilder_.getMessage();
      }
    }
    /**
     * <code>.flyteidl.core.VariableMap inputs = 1 [json_name = "inputs"];</code>
     */
    public Builder setInputs(com.flyteidl.core.VariableMap value) {
      if (inputsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        inputs_ = value;
        onChanged();
      } else {
        inputsBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.flyteidl.core.VariableMap inputs = 1 [json_name = "inputs"];</code>
     */
    public Builder setInputs(
        com.flyteidl.core.VariableMap.Builder builderForValue) {
      if (inputsBuilder_ == null) {
        inputs_ = builderForValue.build();
        onChanged();
      } else {
        inputsBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.flyteidl.core.VariableMap inputs = 1 [json_name = "inputs"];</code>
     */
    public Builder mergeInputs(com.flyteidl.core.VariableMap value) {
      if (inputsBuilder_ == null) {
        if (inputs_ != null) {
          inputs_ =
            com.flyteidl.core.VariableMap.newBuilder(inputs_).mergeFrom(value).buildPartial();
        } else {
          inputs_ = value;
        }
        onChanged();
      } else {
        inputsBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.flyteidl.core.VariableMap inputs = 1 [json_name = "inputs"];</code>
     */
    public Builder clearInputs() {
      if (inputsBuilder_ == null) {
        inputs_ = null;
        onChanged();
      } else {
        inputs_ = null;
        inputsBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.flyteidl.core.VariableMap inputs = 1 [json_name = "inputs"];</code>
     */
    public com.flyteidl.core.VariableMap.Builder getInputsBuilder() {
      
      onChanged();
      return getInputsFieldBuilder().getBuilder();
    }
    /**
     * <code>.flyteidl.core.VariableMap inputs = 1 [json_name = "inputs"];</code>
     */
    public com.flyteidl.core.VariableMapOrBuilder getInputsOrBuilder() {
      if (inputsBuilder_ != null) {
        return inputsBuilder_.getMessageOrBuilder();
      } else {
        return inputs_ == null ?
            com.flyteidl.core.VariableMap.getDefaultInstance() : inputs_;
      }
    }
    /**
     * <code>.flyteidl.core.VariableMap inputs = 1 [json_name = "inputs"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.flyteidl.core.VariableMap, com.flyteidl.core.VariableMap.Builder, com.flyteidl.core.VariableMapOrBuilder> 
        getInputsFieldBuilder() {
      if (inputsBuilder_ == null) {
        inputsBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.flyteidl.core.VariableMap, com.flyteidl.core.VariableMap.Builder, com.flyteidl.core.VariableMapOrBuilder>(
                getInputs(),
                getParentForChildren(),
                isClean());
        inputs_ = null;
      }
      return inputsBuilder_;
    }

    private com.flyteidl.core.VariableMap outputs_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.flyteidl.core.VariableMap, com.flyteidl.core.VariableMap.Builder, com.flyteidl.core.VariableMapOrBuilder> outputsBuilder_;
    /**
     * <code>.flyteidl.core.VariableMap outputs = 2 [json_name = "outputs"];</code>
     * @return Whether the outputs field is set.
     */
    public boolean hasOutputs() {
      return outputsBuilder_ != null || outputs_ != null;
    }
    /**
     * <code>.flyteidl.core.VariableMap outputs = 2 [json_name = "outputs"];</code>
     * @return The outputs.
     */
    public com.flyteidl.core.VariableMap getOutputs() {
      if (outputsBuilder_ == null) {
        return outputs_ == null ? com.flyteidl.core.VariableMap.getDefaultInstance() : outputs_;
      } else {
        return outputsBuilder_.getMessage();
      }
    }
    /**
     * <code>.flyteidl.core.VariableMap outputs = 2 [json_name = "outputs"];</code>
     */
    public Builder setOutputs(com.flyteidl.core.VariableMap value) {
      if (outputsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        outputs_ = value;
        onChanged();
      } else {
        outputsBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.flyteidl.core.VariableMap outputs = 2 [json_name = "outputs"];</code>
     */
    public Builder setOutputs(
        com.flyteidl.core.VariableMap.Builder builderForValue) {
      if (outputsBuilder_ == null) {
        outputs_ = builderForValue.build();
        onChanged();
      } else {
        outputsBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.flyteidl.core.VariableMap outputs = 2 [json_name = "outputs"];</code>
     */
    public Builder mergeOutputs(com.flyteidl.core.VariableMap value) {
      if (outputsBuilder_ == null) {
        if (outputs_ != null) {
          outputs_ =
            com.flyteidl.core.VariableMap.newBuilder(outputs_).mergeFrom(value).buildPartial();
        } else {
          outputs_ = value;
        }
        onChanged();
      } else {
        outputsBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.flyteidl.core.VariableMap outputs = 2 [json_name = "outputs"];</code>
     */
    public Builder clearOutputs() {
      if (outputsBuilder_ == null) {
        outputs_ = null;
        onChanged();
      } else {
        outputs_ = null;
        outputsBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.flyteidl.core.VariableMap outputs = 2 [json_name = "outputs"];</code>
     */
    public com.flyteidl.core.VariableMap.Builder getOutputsBuilder() {
      
      onChanged();
      return getOutputsFieldBuilder().getBuilder();
    }
    /**
     * <code>.flyteidl.core.VariableMap outputs = 2 [json_name = "outputs"];</code>
     */
    public com.flyteidl.core.VariableMapOrBuilder getOutputsOrBuilder() {
      if (outputsBuilder_ != null) {
        return outputsBuilder_.getMessageOrBuilder();
      } else {
        return outputs_ == null ?
            com.flyteidl.core.VariableMap.getDefaultInstance() : outputs_;
      }
    }
    /**
     * <code>.flyteidl.core.VariableMap outputs = 2 [json_name = "outputs"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.flyteidl.core.VariableMap, com.flyteidl.core.VariableMap.Builder, com.flyteidl.core.VariableMapOrBuilder> 
        getOutputsFieldBuilder() {
      if (outputsBuilder_ == null) {
        outputsBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.flyteidl.core.VariableMap, com.flyteidl.core.VariableMap.Builder, com.flyteidl.core.VariableMapOrBuilder>(
                getOutputs(),
                getParentForChildren(),
                isClean());
        outputs_ = null;
      }
      return outputsBuilder_;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:flyteidl.core.TypedInterface)
  }

  // @@protoc_insertion_point(class_scope:flyteidl.core.TypedInterface)
  private static final com.flyteidl.core.TypedInterface DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.flyteidl.core.TypedInterface();
  }

  public static com.flyteidl.core.TypedInterface getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<TypedInterface>
      PARSER = new com.google.protobuf.AbstractParser<TypedInterface>() {
    @java.lang.Override
    public TypedInterface parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new TypedInterface(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<TypedInterface> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<TypedInterface> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.flyteidl.core.TypedInterface getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

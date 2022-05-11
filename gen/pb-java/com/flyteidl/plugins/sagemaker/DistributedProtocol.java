// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/plugins/sagemaker/training_job.proto

package com.flyteidl.plugins.sagemaker;

/**
 * <pre>
 * When enabling distributed training on a training job, the user should use this message to tell Flyte and SageMaker
 * what kind of distributed protocol he/she wants to use to distribute the work.
 * </pre>
 *
 * Protobuf type {@code flyteidl.plugins.sagemaker.DistributedProtocol}
 */
public final class DistributedProtocol extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:flyteidl.plugins.sagemaker.DistributedProtocol)
    DistributedProtocolOrBuilder {
private static final long serialVersionUID = 0L;
  // Use DistributedProtocol.newBuilder() to construct.
  private DistributedProtocol(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private DistributedProtocol() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new DistributedProtocol();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private DistributedProtocol(
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
    return com.flyteidl.plugins.sagemaker.TrainingJobProto.internal_static_flyteidl_plugins_sagemaker_DistributedProtocol_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.flyteidl.plugins.sagemaker.TrainingJobProto.internal_static_flyteidl_plugins_sagemaker_DistributedProtocol_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.flyteidl.plugins.sagemaker.DistributedProtocol.class, com.flyteidl.plugins.sagemaker.DistributedProtocol.Builder.class);
  }

  /**
   * Protobuf enum {@code flyteidl.plugins.sagemaker.DistributedProtocol.Value}
   */
  public enum Value
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <pre>
     * Use this value if the user wishes to use framework-native distributed training interfaces.
     * If this value is used, Flyte won't configure SageMaker to initialize unnecessary components such as
     * OpenMPI or Parameter Server.
     * </pre>
     *
     * <code>UNSPECIFIED = 0;</code>
     */
    UNSPECIFIED(0),
    /**
     * <pre>
     * Use this value if the user wishes to use MPI as the underlying protocol for her distributed training job
     * MPI is a framework-agnostic distributed protocol. It has multiple implementations. Currently, we have only
     * tested the OpenMPI implementation, which is the recommended implementation for Horovod.
     * </pre>
     *
     * <code>MPI = 1;</code>
     */
    MPI(1),
    UNRECOGNIZED(-1),
    ;

    /**
     * <pre>
     * Use this value if the user wishes to use framework-native distributed training interfaces.
     * If this value is used, Flyte won't configure SageMaker to initialize unnecessary components such as
     * OpenMPI or Parameter Server.
     * </pre>
     *
     * <code>UNSPECIFIED = 0;</code>
     */
    public static final int UNSPECIFIED_VALUE = 0;
    /**
     * <pre>
     * Use this value if the user wishes to use MPI as the underlying protocol for her distributed training job
     * MPI is a framework-agnostic distributed protocol. It has multiple implementations. Currently, we have only
     * tested the OpenMPI implementation, which is the recommended implementation for Horovod.
     * </pre>
     *
     * <code>MPI = 1;</code>
     */
    public static final int MPI_VALUE = 1;


    public final int getNumber() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalArgumentException(
            "Can't get the number of an unknown enum value.");
      }
      return value;
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     * @deprecated Use {@link #forNumber(int)} instead.
     */
    @java.lang.Deprecated
    public static Value valueOf(int value) {
      return forNumber(value);
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     */
    public static Value forNumber(int value) {
      switch (value) {
        case 0: return UNSPECIFIED;
        case 1: return MPI;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<Value>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        Value> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<Value>() {
            public Value findValueByNumber(int number) {
              return Value.forNumber(number);
            }
          };

    public final com.google.protobuf.Descriptors.EnumValueDescriptor
        getValueDescriptor() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalStateException(
            "Can't get the descriptor of an unrecognized enum value.");
      }
      return getDescriptor().getValues().get(ordinal());
    }
    public final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptorForType() {
      return getDescriptor();
    }
    public static final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptor() {
      return com.flyteidl.plugins.sagemaker.DistributedProtocol.getDescriptor().getEnumTypes().get(0);
    }

    private static final Value[] VALUES = values();

    public static Value valueOf(
        com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
      if (desc.getType() != getDescriptor()) {
        throw new java.lang.IllegalArgumentException(
          "EnumValueDescriptor is not for this type.");
      }
      if (desc.getIndex() == -1) {
        return UNRECOGNIZED;
      }
      return VALUES[desc.getIndex()];
    }

    private final int value;

    private Value(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:flyteidl.plugins.sagemaker.DistributedProtocol.Value)
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
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof com.flyteidl.plugins.sagemaker.DistributedProtocol)) {
      return super.equals(obj);
    }
    com.flyteidl.plugins.sagemaker.DistributedProtocol other = (com.flyteidl.plugins.sagemaker.DistributedProtocol) obj;

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
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.flyteidl.plugins.sagemaker.DistributedProtocol parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.plugins.sagemaker.DistributedProtocol parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.plugins.sagemaker.DistributedProtocol parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.plugins.sagemaker.DistributedProtocol parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.plugins.sagemaker.DistributedProtocol parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.plugins.sagemaker.DistributedProtocol parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.plugins.sagemaker.DistributedProtocol parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.plugins.sagemaker.DistributedProtocol parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.plugins.sagemaker.DistributedProtocol parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.flyteidl.plugins.sagemaker.DistributedProtocol parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.plugins.sagemaker.DistributedProtocol parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.plugins.sagemaker.DistributedProtocol parseFrom(
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
  public static Builder newBuilder(com.flyteidl.plugins.sagemaker.DistributedProtocol prototype) {
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
   * When enabling distributed training on a training job, the user should use this message to tell Flyte and SageMaker
   * what kind of distributed protocol he/she wants to use to distribute the work.
   * </pre>
   *
   * Protobuf type {@code flyteidl.plugins.sagemaker.DistributedProtocol}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:flyteidl.plugins.sagemaker.DistributedProtocol)
      com.flyteidl.plugins.sagemaker.DistributedProtocolOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.flyteidl.plugins.sagemaker.TrainingJobProto.internal_static_flyteidl_plugins_sagemaker_DistributedProtocol_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.flyteidl.plugins.sagemaker.TrainingJobProto.internal_static_flyteidl_plugins_sagemaker_DistributedProtocol_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.flyteidl.plugins.sagemaker.DistributedProtocol.class, com.flyteidl.plugins.sagemaker.DistributedProtocol.Builder.class);
    }

    // Construct using com.flyteidl.plugins.sagemaker.DistributedProtocol.newBuilder()
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
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.flyteidl.plugins.sagemaker.TrainingJobProto.internal_static_flyteidl_plugins_sagemaker_DistributedProtocol_descriptor;
    }

    @java.lang.Override
    public com.flyteidl.plugins.sagemaker.DistributedProtocol getDefaultInstanceForType() {
      return com.flyteidl.plugins.sagemaker.DistributedProtocol.getDefaultInstance();
    }

    @java.lang.Override
    public com.flyteidl.plugins.sagemaker.DistributedProtocol build() {
      com.flyteidl.plugins.sagemaker.DistributedProtocol result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.flyteidl.plugins.sagemaker.DistributedProtocol buildPartial() {
      com.flyteidl.plugins.sagemaker.DistributedProtocol result = new com.flyteidl.plugins.sagemaker.DistributedProtocol(this);
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
      if (other instanceof com.flyteidl.plugins.sagemaker.DistributedProtocol) {
        return mergeFrom((com.flyteidl.plugins.sagemaker.DistributedProtocol)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.flyteidl.plugins.sagemaker.DistributedProtocol other) {
      if (other == com.flyteidl.plugins.sagemaker.DistributedProtocol.getDefaultInstance()) return this;
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
      com.flyteidl.plugins.sagemaker.DistributedProtocol parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.flyteidl.plugins.sagemaker.DistributedProtocol) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
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


    // @@protoc_insertion_point(builder_scope:flyteidl.plugins.sagemaker.DistributedProtocol)
  }

  // @@protoc_insertion_point(class_scope:flyteidl.plugins.sagemaker.DistributedProtocol)
  private static final com.flyteidl.plugins.sagemaker.DistributedProtocol DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.flyteidl.plugins.sagemaker.DistributedProtocol();
  }

  public static com.flyteidl.plugins.sagemaker.DistributedProtocol getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<DistributedProtocol>
      PARSER = new com.google.protobuf.AbstractParser<DistributedProtocol>() {
    @java.lang.Override
    public DistributedProtocol parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new DistributedProtocol(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<DistributedProtocol> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<DistributedProtocol> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.flyteidl.plugins.sagemaker.DistributedProtocol getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

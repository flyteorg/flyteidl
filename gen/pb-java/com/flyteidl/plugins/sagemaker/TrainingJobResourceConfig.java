// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/plugins/sagemaker/training_job.proto

package com.flyteidl.plugins.sagemaker;

/**
 * <pre>
 * TrainingJobResourceConfig is a pass-through, specifying the instance type to use for the training job, the
 * number of instances to launch, and the size of the ML storage volume the user wants to provision
 * Refer to SageMaker official doc for more details: https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html
 * </pre>
 *
 * Protobuf type {@code flyteidl.plugins.sagemaker.TrainingJobResourceConfig}
 */
public final class TrainingJobResourceConfig extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:flyteidl.plugins.sagemaker.TrainingJobResourceConfig)
    TrainingJobResourceConfigOrBuilder {
private static final long serialVersionUID = 0L;
  // Use TrainingJobResourceConfig.newBuilder() to construct.
  private TrainingJobResourceConfig(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private TrainingJobResourceConfig() {
    instanceType_ = "";
    distributedProtocol_ = 0;
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new TrainingJobResourceConfig();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private TrainingJobResourceConfig(
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
          case 8: {

            instanceCount_ = input.readInt64();
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            instanceType_ = s;
            break;
          }
          case 24: {

            volumeSizeInGb_ = input.readInt64();
            break;
          }
          case 32: {
            int rawValue = input.readEnum();

            distributedProtocol_ = rawValue;
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
    return com.flyteidl.plugins.sagemaker.TrainingJobProto.internal_static_flyteidl_plugins_sagemaker_TrainingJobResourceConfig_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.flyteidl.plugins.sagemaker.TrainingJobProto.internal_static_flyteidl_plugins_sagemaker_TrainingJobResourceConfig_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig.class, com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig.Builder.class);
  }

  public static final int INSTANCE_COUNT_FIELD_NUMBER = 1;
  private long instanceCount_;
  /**
   * <pre>
   * The number of ML compute instances to use. For distributed training, provide a value greater than 1.
   * </pre>
   *
   * <code>int64 instance_count = 1 [json_name = "instanceCount"];</code>
   * @return The instanceCount.
   */
  @java.lang.Override
  public long getInstanceCount() {
    return instanceCount_;
  }

  public static final int INSTANCE_TYPE_FIELD_NUMBER = 2;
  private volatile java.lang.Object instanceType_;
  /**
   * <pre>
   * The ML compute instance type
   * </pre>
   *
   * <code>string instance_type = 2 [json_name = "instanceType"];</code>
   * @return The instanceType.
   */
  @java.lang.Override
  public java.lang.String getInstanceType() {
    java.lang.Object ref = instanceType_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      instanceType_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * The ML compute instance type
   * </pre>
   *
   * <code>string instance_type = 2 [json_name = "instanceType"];</code>
   * @return The bytes for instanceType.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getInstanceTypeBytes() {
    java.lang.Object ref = instanceType_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      instanceType_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int VOLUME_SIZE_IN_GB_FIELD_NUMBER = 3;
  private long volumeSizeInGb_;
  /**
   * <pre>
   * The size of the ML storage volume that you want to provision.
   * </pre>
   *
   * <code>int64 volume_size_in_gb = 3 [json_name = "volumeSizeInGb"];</code>
   * @return The volumeSizeInGb.
   */
  @java.lang.Override
  public long getVolumeSizeInGb() {
    return volumeSizeInGb_;
  }

  public static final int DISTRIBUTED_PROTOCOL_FIELD_NUMBER = 4;
  private int distributedProtocol_;
  /**
   * <pre>
   * When users specify an instance_count &gt; 1, Flyte will try to configure SageMaker to enable distributed training.
   * If the users wish to use framework-agnostic distributed protocol such as MPI or Parameter Server, this
   * field should be set to the corresponding enum value
   * </pre>
   *
   * <code>.flyteidl.plugins.sagemaker.DistributedProtocol.Value distributed_protocol = 4 [json_name = "distributedProtocol"];</code>
   * @return The enum numeric value on the wire for distributedProtocol.
   */
  @java.lang.Override public int getDistributedProtocolValue() {
    return distributedProtocol_;
  }
  /**
   * <pre>
   * When users specify an instance_count &gt; 1, Flyte will try to configure SageMaker to enable distributed training.
   * If the users wish to use framework-agnostic distributed protocol such as MPI or Parameter Server, this
   * field should be set to the corresponding enum value
   * </pre>
   *
   * <code>.flyteidl.plugins.sagemaker.DistributedProtocol.Value distributed_protocol = 4 [json_name = "distributedProtocol"];</code>
   * @return The distributedProtocol.
   */
  @java.lang.Override public com.flyteidl.plugins.sagemaker.DistributedProtocol.Value getDistributedProtocol() {
    @SuppressWarnings("deprecation")
    com.flyteidl.plugins.sagemaker.DistributedProtocol.Value result = com.flyteidl.plugins.sagemaker.DistributedProtocol.Value.valueOf(distributedProtocol_);
    return result == null ? com.flyteidl.plugins.sagemaker.DistributedProtocol.Value.UNRECOGNIZED : result;
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
    if (instanceCount_ != 0L) {
      output.writeInt64(1, instanceCount_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(instanceType_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, instanceType_);
    }
    if (volumeSizeInGb_ != 0L) {
      output.writeInt64(3, volumeSizeInGb_);
    }
    if (distributedProtocol_ != com.flyteidl.plugins.sagemaker.DistributedProtocol.Value.UNSPECIFIED.getNumber()) {
      output.writeEnum(4, distributedProtocol_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (instanceCount_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt64Size(1, instanceCount_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(instanceType_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, instanceType_);
    }
    if (volumeSizeInGb_ != 0L) {
      size += com.google.protobuf.CodedOutputStream
        .computeInt64Size(3, volumeSizeInGb_);
    }
    if (distributedProtocol_ != com.flyteidl.plugins.sagemaker.DistributedProtocol.Value.UNSPECIFIED.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(4, distributedProtocol_);
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
    if (!(obj instanceof com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig)) {
      return super.equals(obj);
    }
    com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig other = (com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig) obj;

    if (getInstanceCount()
        != other.getInstanceCount()) return false;
    if (!getInstanceType()
        .equals(other.getInstanceType())) return false;
    if (getVolumeSizeInGb()
        != other.getVolumeSizeInGb()) return false;
    if (distributedProtocol_ != other.distributedProtocol_) return false;
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
    hash = (37 * hash) + INSTANCE_COUNT_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getInstanceCount());
    hash = (37 * hash) + INSTANCE_TYPE_FIELD_NUMBER;
    hash = (53 * hash) + getInstanceType().hashCode();
    hash = (37 * hash) + VOLUME_SIZE_IN_GB_FIELD_NUMBER;
    hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
        getVolumeSizeInGb());
    hash = (37 * hash) + DISTRIBUTED_PROTOCOL_FIELD_NUMBER;
    hash = (53 * hash) + distributedProtocol_;
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig parseFrom(
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
  public static Builder newBuilder(com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig prototype) {
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
   * TrainingJobResourceConfig is a pass-through, specifying the instance type to use for the training job, the
   * number of instances to launch, and the size of the ML storage volume the user wants to provision
   * Refer to SageMaker official doc for more details: https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrainingJob.html
   * </pre>
   *
   * Protobuf type {@code flyteidl.plugins.sagemaker.TrainingJobResourceConfig}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:flyteidl.plugins.sagemaker.TrainingJobResourceConfig)
      com.flyteidl.plugins.sagemaker.TrainingJobResourceConfigOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.flyteidl.plugins.sagemaker.TrainingJobProto.internal_static_flyteidl_plugins_sagemaker_TrainingJobResourceConfig_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.flyteidl.plugins.sagemaker.TrainingJobProto.internal_static_flyteidl_plugins_sagemaker_TrainingJobResourceConfig_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig.class, com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig.Builder.class);
    }

    // Construct using com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig.newBuilder()
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
      instanceCount_ = 0L;

      instanceType_ = "";

      volumeSizeInGb_ = 0L;

      distributedProtocol_ = 0;

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.flyteidl.plugins.sagemaker.TrainingJobProto.internal_static_flyteidl_plugins_sagemaker_TrainingJobResourceConfig_descriptor;
    }

    @java.lang.Override
    public com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig getDefaultInstanceForType() {
      return com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig.getDefaultInstance();
    }

    @java.lang.Override
    public com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig build() {
      com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig buildPartial() {
      com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig result = new com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig(this);
      result.instanceCount_ = instanceCount_;
      result.instanceType_ = instanceType_;
      result.volumeSizeInGb_ = volumeSizeInGb_;
      result.distributedProtocol_ = distributedProtocol_;
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
      if (other instanceof com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig) {
        return mergeFrom((com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig other) {
      if (other == com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig.getDefaultInstance()) return this;
      if (other.getInstanceCount() != 0L) {
        setInstanceCount(other.getInstanceCount());
      }
      if (!other.getInstanceType().isEmpty()) {
        instanceType_ = other.instanceType_;
        onChanged();
      }
      if (other.getVolumeSizeInGb() != 0L) {
        setVolumeSizeInGb(other.getVolumeSizeInGb());
      }
      if (other.distributedProtocol_ != 0) {
        setDistributedProtocolValue(other.getDistributedProtocolValue());
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
      com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private long instanceCount_ ;
    /**
     * <pre>
     * The number of ML compute instances to use. For distributed training, provide a value greater than 1.
     * </pre>
     *
     * <code>int64 instance_count = 1 [json_name = "instanceCount"];</code>
     * @return The instanceCount.
     */
    @java.lang.Override
    public long getInstanceCount() {
      return instanceCount_;
    }
    /**
     * <pre>
     * The number of ML compute instances to use. For distributed training, provide a value greater than 1.
     * </pre>
     *
     * <code>int64 instance_count = 1 [json_name = "instanceCount"];</code>
     * @param value The instanceCount to set.
     * @return This builder for chaining.
     */
    public Builder setInstanceCount(long value) {
      
      instanceCount_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * The number of ML compute instances to use. For distributed training, provide a value greater than 1.
     * </pre>
     *
     * <code>int64 instance_count = 1 [json_name = "instanceCount"];</code>
     * @return This builder for chaining.
     */
    public Builder clearInstanceCount() {
      
      instanceCount_ = 0L;
      onChanged();
      return this;
    }

    private java.lang.Object instanceType_ = "";
    /**
     * <pre>
     * The ML compute instance type
     * </pre>
     *
     * <code>string instance_type = 2 [json_name = "instanceType"];</code>
     * @return The instanceType.
     */
    public java.lang.String getInstanceType() {
      java.lang.Object ref = instanceType_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        instanceType_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * The ML compute instance type
     * </pre>
     *
     * <code>string instance_type = 2 [json_name = "instanceType"];</code>
     * @return The bytes for instanceType.
     */
    public com.google.protobuf.ByteString
        getInstanceTypeBytes() {
      java.lang.Object ref = instanceType_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        instanceType_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * The ML compute instance type
     * </pre>
     *
     * <code>string instance_type = 2 [json_name = "instanceType"];</code>
     * @param value The instanceType to set.
     * @return This builder for chaining.
     */
    public Builder setInstanceType(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      instanceType_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * The ML compute instance type
     * </pre>
     *
     * <code>string instance_type = 2 [json_name = "instanceType"];</code>
     * @return This builder for chaining.
     */
    public Builder clearInstanceType() {
      
      instanceType_ = getDefaultInstance().getInstanceType();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * The ML compute instance type
     * </pre>
     *
     * <code>string instance_type = 2 [json_name = "instanceType"];</code>
     * @param value The bytes for instanceType to set.
     * @return This builder for chaining.
     */
    public Builder setInstanceTypeBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      instanceType_ = value;
      onChanged();
      return this;
    }

    private long volumeSizeInGb_ ;
    /**
     * <pre>
     * The size of the ML storage volume that you want to provision.
     * </pre>
     *
     * <code>int64 volume_size_in_gb = 3 [json_name = "volumeSizeInGb"];</code>
     * @return The volumeSizeInGb.
     */
    @java.lang.Override
    public long getVolumeSizeInGb() {
      return volumeSizeInGb_;
    }
    /**
     * <pre>
     * The size of the ML storage volume that you want to provision.
     * </pre>
     *
     * <code>int64 volume_size_in_gb = 3 [json_name = "volumeSizeInGb"];</code>
     * @param value The volumeSizeInGb to set.
     * @return This builder for chaining.
     */
    public Builder setVolumeSizeInGb(long value) {
      
      volumeSizeInGb_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * The size of the ML storage volume that you want to provision.
     * </pre>
     *
     * <code>int64 volume_size_in_gb = 3 [json_name = "volumeSizeInGb"];</code>
     * @return This builder for chaining.
     */
    public Builder clearVolumeSizeInGb() {
      
      volumeSizeInGb_ = 0L;
      onChanged();
      return this;
    }

    private int distributedProtocol_ = 0;
    /**
     * <pre>
     * When users specify an instance_count &gt; 1, Flyte will try to configure SageMaker to enable distributed training.
     * If the users wish to use framework-agnostic distributed protocol such as MPI or Parameter Server, this
     * field should be set to the corresponding enum value
     * </pre>
     *
     * <code>.flyteidl.plugins.sagemaker.DistributedProtocol.Value distributed_protocol = 4 [json_name = "distributedProtocol"];</code>
     * @return The enum numeric value on the wire for distributedProtocol.
     */
    @java.lang.Override public int getDistributedProtocolValue() {
      return distributedProtocol_;
    }
    /**
     * <pre>
     * When users specify an instance_count &gt; 1, Flyte will try to configure SageMaker to enable distributed training.
     * If the users wish to use framework-agnostic distributed protocol such as MPI or Parameter Server, this
     * field should be set to the corresponding enum value
     * </pre>
     *
     * <code>.flyteidl.plugins.sagemaker.DistributedProtocol.Value distributed_protocol = 4 [json_name = "distributedProtocol"];</code>
     * @param value The enum numeric value on the wire for distributedProtocol to set.
     * @return This builder for chaining.
     */
    public Builder setDistributedProtocolValue(int value) {
      
      distributedProtocol_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * When users specify an instance_count &gt; 1, Flyte will try to configure SageMaker to enable distributed training.
     * If the users wish to use framework-agnostic distributed protocol such as MPI or Parameter Server, this
     * field should be set to the corresponding enum value
     * </pre>
     *
     * <code>.flyteidl.plugins.sagemaker.DistributedProtocol.Value distributed_protocol = 4 [json_name = "distributedProtocol"];</code>
     * @return The distributedProtocol.
     */
    @java.lang.Override
    public com.flyteidl.plugins.sagemaker.DistributedProtocol.Value getDistributedProtocol() {
      @SuppressWarnings("deprecation")
      com.flyteidl.plugins.sagemaker.DistributedProtocol.Value result = com.flyteidl.plugins.sagemaker.DistributedProtocol.Value.valueOf(distributedProtocol_);
      return result == null ? com.flyteidl.plugins.sagemaker.DistributedProtocol.Value.UNRECOGNIZED : result;
    }
    /**
     * <pre>
     * When users specify an instance_count &gt; 1, Flyte will try to configure SageMaker to enable distributed training.
     * If the users wish to use framework-agnostic distributed protocol such as MPI or Parameter Server, this
     * field should be set to the corresponding enum value
     * </pre>
     *
     * <code>.flyteidl.plugins.sagemaker.DistributedProtocol.Value distributed_protocol = 4 [json_name = "distributedProtocol"];</code>
     * @param value The distributedProtocol to set.
     * @return This builder for chaining.
     */
    public Builder setDistributedProtocol(com.flyteidl.plugins.sagemaker.DistributedProtocol.Value value) {
      if (value == null) {
        throw new NullPointerException();
      }
      
      distributedProtocol_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * When users specify an instance_count &gt; 1, Flyte will try to configure SageMaker to enable distributed training.
     * If the users wish to use framework-agnostic distributed protocol such as MPI or Parameter Server, this
     * field should be set to the corresponding enum value
     * </pre>
     *
     * <code>.flyteidl.plugins.sagemaker.DistributedProtocol.Value distributed_protocol = 4 [json_name = "distributedProtocol"];</code>
     * @return This builder for chaining.
     */
    public Builder clearDistributedProtocol() {
      
      distributedProtocol_ = 0;
      onChanged();
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


    // @@protoc_insertion_point(builder_scope:flyteidl.plugins.sagemaker.TrainingJobResourceConfig)
  }

  // @@protoc_insertion_point(class_scope:flyteidl.plugins.sagemaker.TrainingJobResourceConfig)
  private static final com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig();
  }

  public static com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<TrainingJobResourceConfig>
      PARSER = new com.google.protobuf.AbstractParser<TrainingJobResourceConfig>() {
    @java.lang.Override
    public TrainingJobResourceConfig parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new TrainingJobResourceConfig(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<TrainingJobResourceConfig> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<TrainingJobResourceConfig> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.flyteidl.plugins.sagemaker.TrainingJobResourceConfig getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

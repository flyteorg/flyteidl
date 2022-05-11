// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/admin/schedule.proto

package com.flyteidl.admin;

/**
 * <pre>
 * Option for schedules run at a certain frequency e.g. every 2 minutes.
 * </pre>
 *
 * Protobuf type {@code flyteidl.admin.FixedRate}
 */
public final class FixedRate extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:flyteidl.admin.FixedRate)
    FixedRateOrBuilder {
private static final long serialVersionUID = 0L;
  // Use FixedRate.newBuilder() to construct.
  private FixedRate(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private FixedRate() {
    unit_ = 0;
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new FixedRate();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private FixedRate(
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

            value_ = input.readUInt32();
            break;
          }
          case 16: {
            int rawValue = input.readEnum();

            unit_ = rawValue;
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
    return com.flyteidl.admin.ScheduleProto.internal_static_flyteidl_admin_FixedRate_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.flyteidl.admin.ScheduleProto.internal_static_flyteidl_admin_FixedRate_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.flyteidl.admin.FixedRate.class, com.flyteidl.admin.FixedRate.Builder.class);
  }

  public static final int VALUE_FIELD_NUMBER = 1;
  private int value_;
  /**
   * <code>uint32 value = 1 [json_name = "value"];</code>
   * @return The value.
   */
  @java.lang.Override
  public int getValue() {
    return value_;
  }

  public static final int UNIT_FIELD_NUMBER = 2;
  private int unit_;
  /**
   * <code>.flyteidl.admin.FixedRateUnit unit = 2 [json_name = "unit"];</code>
   * @return The enum numeric value on the wire for unit.
   */
  @java.lang.Override public int getUnitValue() {
    return unit_;
  }
  /**
   * <code>.flyteidl.admin.FixedRateUnit unit = 2 [json_name = "unit"];</code>
   * @return The unit.
   */
  @java.lang.Override public com.flyteidl.admin.FixedRateUnit getUnit() {
    @SuppressWarnings("deprecation")
    com.flyteidl.admin.FixedRateUnit result = com.flyteidl.admin.FixedRateUnit.valueOf(unit_);
    return result == null ? com.flyteidl.admin.FixedRateUnit.UNRECOGNIZED : result;
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
    if (value_ != 0) {
      output.writeUInt32(1, value_);
    }
    if (unit_ != com.flyteidl.admin.FixedRateUnit.MINUTE.getNumber()) {
      output.writeEnum(2, unit_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (value_ != 0) {
      size += com.google.protobuf.CodedOutputStream
        .computeUInt32Size(1, value_);
    }
    if (unit_ != com.flyteidl.admin.FixedRateUnit.MINUTE.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(2, unit_);
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
    if (!(obj instanceof com.flyteidl.admin.FixedRate)) {
      return super.equals(obj);
    }
    com.flyteidl.admin.FixedRate other = (com.flyteidl.admin.FixedRate) obj;

    if (getValue()
        != other.getValue()) return false;
    if (unit_ != other.unit_) return false;
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
    hash = (37 * hash) + VALUE_FIELD_NUMBER;
    hash = (53 * hash) + getValue();
    hash = (37 * hash) + UNIT_FIELD_NUMBER;
    hash = (53 * hash) + unit_;
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.flyteidl.admin.FixedRate parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.admin.FixedRate parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.admin.FixedRate parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.admin.FixedRate parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.admin.FixedRate parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.admin.FixedRate parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.admin.FixedRate parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.admin.FixedRate parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.admin.FixedRate parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.flyteidl.admin.FixedRate parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.admin.FixedRate parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.admin.FixedRate parseFrom(
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
  public static Builder newBuilder(com.flyteidl.admin.FixedRate prototype) {
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
   * Option for schedules run at a certain frequency e.g. every 2 minutes.
   * </pre>
   *
   * Protobuf type {@code flyteidl.admin.FixedRate}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:flyteidl.admin.FixedRate)
      com.flyteidl.admin.FixedRateOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.flyteidl.admin.ScheduleProto.internal_static_flyteidl_admin_FixedRate_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.flyteidl.admin.ScheduleProto.internal_static_flyteidl_admin_FixedRate_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.flyteidl.admin.FixedRate.class, com.flyteidl.admin.FixedRate.Builder.class);
    }

    // Construct using com.flyteidl.admin.FixedRate.newBuilder()
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
      value_ = 0;

      unit_ = 0;

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.flyteidl.admin.ScheduleProto.internal_static_flyteidl_admin_FixedRate_descriptor;
    }

    @java.lang.Override
    public com.flyteidl.admin.FixedRate getDefaultInstanceForType() {
      return com.flyteidl.admin.FixedRate.getDefaultInstance();
    }

    @java.lang.Override
    public com.flyteidl.admin.FixedRate build() {
      com.flyteidl.admin.FixedRate result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.flyteidl.admin.FixedRate buildPartial() {
      com.flyteidl.admin.FixedRate result = new com.flyteidl.admin.FixedRate(this);
      result.value_ = value_;
      result.unit_ = unit_;
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
      if (other instanceof com.flyteidl.admin.FixedRate) {
        return mergeFrom((com.flyteidl.admin.FixedRate)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.flyteidl.admin.FixedRate other) {
      if (other == com.flyteidl.admin.FixedRate.getDefaultInstance()) return this;
      if (other.getValue() != 0) {
        setValue(other.getValue());
      }
      if (other.unit_ != 0) {
        setUnitValue(other.getUnitValue());
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
      com.flyteidl.admin.FixedRate parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.flyteidl.admin.FixedRate) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private int value_ ;
    /**
     * <code>uint32 value = 1 [json_name = "value"];</code>
     * @return The value.
     */
    @java.lang.Override
    public int getValue() {
      return value_;
    }
    /**
     * <code>uint32 value = 1 [json_name = "value"];</code>
     * @param value The value to set.
     * @return This builder for chaining.
     */
    public Builder setValue(int value) {
      
      value_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>uint32 value = 1 [json_name = "value"];</code>
     * @return This builder for chaining.
     */
    public Builder clearValue() {
      
      value_ = 0;
      onChanged();
      return this;
    }

    private int unit_ = 0;
    /**
     * <code>.flyteidl.admin.FixedRateUnit unit = 2 [json_name = "unit"];</code>
     * @return The enum numeric value on the wire for unit.
     */
    @java.lang.Override public int getUnitValue() {
      return unit_;
    }
    /**
     * <code>.flyteidl.admin.FixedRateUnit unit = 2 [json_name = "unit"];</code>
     * @param value The enum numeric value on the wire for unit to set.
     * @return This builder for chaining.
     */
    public Builder setUnitValue(int value) {
      
      unit_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>.flyteidl.admin.FixedRateUnit unit = 2 [json_name = "unit"];</code>
     * @return The unit.
     */
    @java.lang.Override
    public com.flyteidl.admin.FixedRateUnit getUnit() {
      @SuppressWarnings("deprecation")
      com.flyteidl.admin.FixedRateUnit result = com.flyteidl.admin.FixedRateUnit.valueOf(unit_);
      return result == null ? com.flyteidl.admin.FixedRateUnit.UNRECOGNIZED : result;
    }
    /**
     * <code>.flyteidl.admin.FixedRateUnit unit = 2 [json_name = "unit"];</code>
     * @param value The unit to set.
     * @return This builder for chaining.
     */
    public Builder setUnit(com.flyteidl.admin.FixedRateUnit value) {
      if (value == null) {
        throw new NullPointerException();
      }
      
      unit_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <code>.flyteidl.admin.FixedRateUnit unit = 2 [json_name = "unit"];</code>
     * @return This builder for chaining.
     */
    public Builder clearUnit() {
      
      unit_ = 0;
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


    // @@protoc_insertion_point(builder_scope:flyteidl.admin.FixedRate)
  }

  // @@protoc_insertion_point(class_scope:flyteidl.admin.FixedRate)
  private static final com.flyteidl.admin.FixedRate DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.flyteidl.admin.FixedRate();
  }

  public static com.flyteidl.admin.FixedRate getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<FixedRate>
      PARSER = new com.google.protobuf.AbstractParser<FixedRate>() {
    @java.lang.Override
    public FixedRate parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new FixedRate(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<FixedRate> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<FixedRate> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.flyteidl.admin.FixedRate getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

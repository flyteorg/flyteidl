// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/core/types.proto

package com.flyteidl.core;

/**
 * <pre>
 * Defines type behavior for blob objects
 * </pre>
 *
 * Protobuf type {@code flyteidl.core.BlobType}
 */
public final class BlobType extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:flyteidl.core.BlobType)
    BlobTypeOrBuilder {
private static final long serialVersionUID = 0L;
  // Use BlobType.newBuilder() to construct.
  private BlobType(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private BlobType() {
    format_ = "";
    dimensionality_ = 0;
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new BlobType();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private BlobType(
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
            java.lang.String s = input.readStringRequireUtf8();

            format_ = s;
            break;
          }
          case 16: {
            int rawValue = input.readEnum();

            dimensionality_ = rawValue;
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
    return com.flyteidl.core.TypesProto.internal_static_flyteidl_core_BlobType_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.flyteidl.core.TypesProto.internal_static_flyteidl_core_BlobType_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.flyteidl.core.BlobType.class, com.flyteidl.core.BlobType.Builder.class);
  }

  /**
   * Protobuf enum {@code flyteidl.core.BlobType.BlobDimensionality}
   */
  public enum BlobDimensionality
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>SINGLE = 0;</code>
     */
    SINGLE(0),
    /**
     * <code>MULTIPART = 1;</code>
     */
    MULTIPART(1),
    UNRECOGNIZED(-1),
    ;

    /**
     * <code>SINGLE = 0;</code>
     */
    public static final int SINGLE_VALUE = 0;
    /**
     * <code>MULTIPART = 1;</code>
     */
    public static final int MULTIPART_VALUE = 1;


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
    public static BlobDimensionality valueOf(int value) {
      return forNumber(value);
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     */
    public static BlobDimensionality forNumber(int value) {
      switch (value) {
        case 0: return SINGLE;
        case 1: return MULTIPART;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<BlobDimensionality>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        BlobDimensionality> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<BlobDimensionality>() {
            public BlobDimensionality findValueByNumber(int number) {
              return BlobDimensionality.forNumber(number);
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
      return com.flyteidl.core.BlobType.getDescriptor().getEnumTypes().get(0);
    }

    private static final BlobDimensionality[] VALUES = values();

    public static BlobDimensionality valueOf(
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

    private BlobDimensionality(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:flyteidl.core.BlobType.BlobDimensionality)
  }

  public static final int FORMAT_FIELD_NUMBER = 1;
  private volatile java.lang.Object format_;
  /**
   * <pre>
   * Format can be a free form string understood by SDK/UI etc like
   * csv, parquet etc
   * </pre>
   *
   * <code>string format = 1 [json_name = "format"];</code>
   * @return The format.
   */
  @java.lang.Override
  public java.lang.String getFormat() {
    java.lang.Object ref = format_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      format_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * Format can be a free form string understood by SDK/UI etc like
   * csv, parquet etc
   * </pre>
   *
   * <code>string format = 1 [json_name = "format"];</code>
   * @return The bytes for format.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getFormatBytes() {
    java.lang.Object ref = format_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      format_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int DIMENSIONALITY_FIELD_NUMBER = 2;
  private int dimensionality_;
  /**
   * <code>.flyteidl.core.BlobType.BlobDimensionality dimensionality = 2 [json_name = "dimensionality"];</code>
   * @return The enum numeric value on the wire for dimensionality.
   */
  @java.lang.Override public int getDimensionalityValue() {
    return dimensionality_;
  }
  /**
   * <code>.flyteidl.core.BlobType.BlobDimensionality dimensionality = 2 [json_name = "dimensionality"];</code>
   * @return The dimensionality.
   */
  @java.lang.Override public com.flyteidl.core.BlobType.BlobDimensionality getDimensionality() {
    @SuppressWarnings("deprecation")
    com.flyteidl.core.BlobType.BlobDimensionality result = com.flyteidl.core.BlobType.BlobDimensionality.valueOf(dimensionality_);
    return result == null ? com.flyteidl.core.BlobType.BlobDimensionality.UNRECOGNIZED : result;
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(format_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, format_);
    }
    if (dimensionality_ != com.flyteidl.core.BlobType.BlobDimensionality.SINGLE.getNumber()) {
      output.writeEnum(2, dimensionality_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(format_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, format_);
    }
    if (dimensionality_ != com.flyteidl.core.BlobType.BlobDimensionality.SINGLE.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(2, dimensionality_);
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
    if (!(obj instanceof com.flyteidl.core.BlobType)) {
      return super.equals(obj);
    }
    com.flyteidl.core.BlobType other = (com.flyteidl.core.BlobType) obj;

    if (!getFormat()
        .equals(other.getFormat())) return false;
    if (dimensionality_ != other.dimensionality_) return false;
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
    hash = (37 * hash) + FORMAT_FIELD_NUMBER;
    hash = (53 * hash) + getFormat().hashCode();
    hash = (37 * hash) + DIMENSIONALITY_FIELD_NUMBER;
    hash = (53 * hash) + dimensionality_;
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.flyteidl.core.BlobType parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.core.BlobType parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.core.BlobType parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.core.BlobType parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.core.BlobType parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.core.BlobType parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.core.BlobType parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.core.BlobType parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.core.BlobType parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.flyteidl.core.BlobType parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.core.BlobType parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.core.BlobType parseFrom(
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
  public static Builder newBuilder(com.flyteidl.core.BlobType prototype) {
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
   * Defines type behavior for blob objects
   * </pre>
   *
   * Protobuf type {@code flyteidl.core.BlobType}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:flyteidl.core.BlobType)
      com.flyteidl.core.BlobTypeOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.flyteidl.core.TypesProto.internal_static_flyteidl_core_BlobType_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.flyteidl.core.TypesProto.internal_static_flyteidl_core_BlobType_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.flyteidl.core.BlobType.class, com.flyteidl.core.BlobType.Builder.class);
    }

    // Construct using com.flyteidl.core.BlobType.newBuilder()
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
      format_ = "";

      dimensionality_ = 0;

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.flyteidl.core.TypesProto.internal_static_flyteidl_core_BlobType_descriptor;
    }

    @java.lang.Override
    public com.flyteidl.core.BlobType getDefaultInstanceForType() {
      return com.flyteidl.core.BlobType.getDefaultInstance();
    }

    @java.lang.Override
    public com.flyteidl.core.BlobType build() {
      com.flyteidl.core.BlobType result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.flyteidl.core.BlobType buildPartial() {
      com.flyteidl.core.BlobType result = new com.flyteidl.core.BlobType(this);
      result.format_ = format_;
      result.dimensionality_ = dimensionality_;
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
      if (other instanceof com.flyteidl.core.BlobType) {
        return mergeFrom((com.flyteidl.core.BlobType)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.flyteidl.core.BlobType other) {
      if (other == com.flyteidl.core.BlobType.getDefaultInstance()) return this;
      if (!other.getFormat().isEmpty()) {
        format_ = other.format_;
        onChanged();
      }
      if (other.dimensionality_ != 0) {
        setDimensionalityValue(other.getDimensionalityValue());
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
      com.flyteidl.core.BlobType parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.flyteidl.core.BlobType) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object format_ = "";
    /**
     * <pre>
     * Format can be a free form string understood by SDK/UI etc like
     * csv, parquet etc
     * </pre>
     *
     * <code>string format = 1 [json_name = "format"];</code>
     * @return The format.
     */
    public java.lang.String getFormat() {
      java.lang.Object ref = format_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        format_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * Format can be a free form string understood by SDK/UI etc like
     * csv, parquet etc
     * </pre>
     *
     * <code>string format = 1 [json_name = "format"];</code>
     * @return The bytes for format.
     */
    public com.google.protobuf.ByteString
        getFormatBytes() {
      java.lang.Object ref = format_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        format_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * Format can be a free form string understood by SDK/UI etc like
     * csv, parquet etc
     * </pre>
     *
     * <code>string format = 1 [json_name = "format"];</code>
     * @param value The format to set.
     * @return This builder for chaining.
     */
    public Builder setFormat(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      format_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Format can be a free form string understood by SDK/UI etc like
     * csv, parquet etc
     * </pre>
     *
     * <code>string format = 1 [json_name = "format"];</code>
     * @return This builder for chaining.
     */
    public Builder clearFormat() {
      
      format_ = getDefaultInstance().getFormat();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Format can be a free form string understood by SDK/UI etc like
     * csv, parquet etc
     * </pre>
     *
     * <code>string format = 1 [json_name = "format"];</code>
     * @param value The bytes for format to set.
     * @return This builder for chaining.
     */
    public Builder setFormatBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      format_ = value;
      onChanged();
      return this;
    }

    private int dimensionality_ = 0;
    /**
     * <code>.flyteidl.core.BlobType.BlobDimensionality dimensionality = 2 [json_name = "dimensionality"];</code>
     * @return The enum numeric value on the wire for dimensionality.
     */
    @java.lang.Override public int getDimensionalityValue() {
      return dimensionality_;
    }
    /**
     * <code>.flyteidl.core.BlobType.BlobDimensionality dimensionality = 2 [json_name = "dimensionality"];</code>
     * @param value The enum numeric value on the wire for dimensionality to set.
     * @return This builder for chaining.
     */
    public Builder setDimensionalityValue(int value) {
      
      dimensionality_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>.flyteidl.core.BlobType.BlobDimensionality dimensionality = 2 [json_name = "dimensionality"];</code>
     * @return The dimensionality.
     */
    @java.lang.Override
    public com.flyteidl.core.BlobType.BlobDimensionality getDimensionality() {
      @SuppressWarnings("deprecation")
      com.flyteidl.core.BlobType.BlobDimensionality result = com.flyteidl.core.BlobType.BlobDimensionality.valueOf(dimensionality_);
      return result == null ? com.flyteidl.core.BlobType.BlobDimensionality.UNRECOGNIZED : result;
    }
    /**
     * <code>.flyteidl.core.BlobType.BlobDimensionality dimensionality = 2 [json_name = "dimensionality"];</code>
     * @param value The dimensionality to set.
     * @return This builder for chaining.
     */
    public Builder setDimensionality(com.flyteidl.core.BlobType.BlobDimensionality value) {
      if (value == null) {
        throw new NullPointerException();
      }
      
      dimensionality_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <code>.flyteidl.core.BlobType.BlobDimensionality dimensionality = 2 [json_name = "dimensionality"];</code>
     * @return This builder for chaining.
     */
    public Builder clearDimensionality() {
      
      dimensionality_ = 0;
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


    // @@protoc_insertion_point(builder_scope:flyteidl.core.BlobType)
  }

  // @@protoc_insertion_point(class_scope:flyteidl.core.BlobType)
  private static final com.flyteidl.core.BlobType DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.flyteidl.core.BlobType();
  }

  public static com.flyteidl.core.BlobType getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<BlobType>
      PARSER = new com.google.protobuf.AbstractParser<BlobType>() {
    @java.lang.Override
    public BlobType parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new BlobType(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<BlobType> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<BlobType> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.flyteidl.core.BlobType getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

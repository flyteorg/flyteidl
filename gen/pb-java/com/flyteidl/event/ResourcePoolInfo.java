// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/event/event.proto

package com.flyteidl.event;

/**
 * <pre>
 * This message holds task execution metadata specific to resource allocation used to manage concurrent
 * executions for a project namespace.
 * </pre>
 *
 * Protobuf type {@code flyteidl.event.ResourcePoolInfo}
 */
public final class ResourcePoolInfo extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:flyteidl.event.ResourcePoolInfo)
    ResourcePoolInfoOrBuilder {
private static final long serialVersionUID = 0L;
  // Use ResourcePoolInfo.newBuilder() to construct.
  private ResourcePoolInfo(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private ResourcePoolInfo() {
    allocationToken_ = "";
    namespace_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new ResourcePoolInfo();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private ResourcePoolInfo(
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

            allocationToken_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            namespace_ = s;
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
    return com.flyteidl.event.EventProto.internal_static_flyteidl_event_ResourcePoolInfo_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.flyteidl.event.EventProto.internal_static_flyteidl_event_ResourcePoolInfo_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.flyteidl.event.ResourcePoolInfo.class, com.flyteidl.event.ResourcePoolInfo.Builder.class);
  }

  public static final int ALLOCATION_TOKEN_FIELD_NUMBER = 1;
  private volatile java.lang.Object allocationToken_;
  /**
   * <pre>
   * Unique resource ID used to identify this execution when allocating a token.
   * </pre>
   *
   * <code>string allocation_token = 1 [json_name = "allocationToken"];</code>
   * @return The allocationToken.
   */
  @java.lang.Override
  public java.lang.String getAllocationToken() {
    java.lang.Object ref = allocationToken_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      allocationToken_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * Unique resource ID used to identify this execution when allocating a token.
   * </pre>
   *
   * <code>string allocation_token = 1 [json_name = "allocationToken"];</code>
   * @return The bytes for allocationToken.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getAllocationTokenBytes() {
    java.lang.Object ref = allocationToken_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      allocationToken_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int NAMESPACE_FIELD_NUMBER = 2;
  private volatile java.lang.Object namespace_;
  /**
   * <pre>
   * Namespace under which this task execution requested an allocation token.
   * </pre>
   *
   * <code>string namespace = 2 [json_name = "namespace"];</code>
   * @return The namespace.
   */
  @java.lang.Override
  public java.lang.String getNamespace() {
    java.lang.Object ref = namespace_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      namespace_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * Namespace under which this task execution requested an allocation token.
   * </pre>
   *
   * <code>string namespace = 2 [json_name = "namespace"];</code>
   * @return The bytes for namespace.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getNamespaceBytes() {
    java.lang.Object ref = namespace_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      namespace_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(allocationToken_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, allocationToken_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(namespace_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, namespace_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(allocationToken_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, allocationToken_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(namespace_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, namespace_);
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
    if (!(obj instanceof com.flyteidl.event.ResourcePoolInfo)) {
      return super.equals(obj);
    }
    com.flyteidl.event.ResourcePoolInfo other = (com.flyteidl.event.ResourcePoolInfo) obj;

    if (!getAllocationToken()
        .equals(other.getAllocationToken())) return false;
    if (!getNamespace()
        .equals(other.getNamespace())) return false;
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
    hash = (37 * hash) + ALLOCATION_TOKEN_FIELD_NUMBER;
    hash = (53 * hash) + getAllocationToken().hashCode();
    hash = (37 * hash) + NAMESPACE_FIELD_NUMBER;
    hash = (53 * hash) + getNamespace().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.flyteidl.event.ResourcePoolInfo parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.event.ResourcePoolInfo parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.event.ResourcePoolInfo parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.event.ResourcePoolInfo parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.event.ResourcePoolInfo parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.event.ResourcePoolInfo parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.event.ResourcePoolInfo parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.event.ResourcePoolInfo parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.event.ResourcePoolInfo parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.flyteidl.event.ResourcePoolInfo parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.event.ResourcePoolInfo parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.event.ResourcePoolInfo parseFrom(
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
  public static Builder newBuilder(com.flyteidl.event.ResourcePoolInfo prototype) {
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
   * This message holds task execution metadata specific to resource allocation used to manage concurrent
   * executions for a project namespace.
   * </pre>
   *
   * Protobuf type {@code flyteidl.event.ResourcePoolInfo}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:flyteidl.event.ResourcePoolInfo)
      com.flyteidl.event.ResourcePoolInfoOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.flyteidl.event.EventProto.internal_static_flyteidl_event_ResourcePoolInfo_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.flyteidl.event.EventProto.internal_static_flyteidl_event_ResourcePoolInfo_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.flyteidl.event.ResourcePoolInfo.class, com.flyteidl.event.ResourcePoolInfo.Builder.class);
    }

    // Construct using com.flyteidl.event.ResourcePoolInfo.newBuilder()
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
      allocationToken_ = "";

      namespace_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.flyteidl.event.EventProto.internal_static_flyteidl_event_ResourcePoolInfo_descriptor;
    }

    @java.lang.Override
    public com.flyteidl.event.ResourcePoolInfo getDefaultInstanceForType() {
      return com.flyteidl.event.ResourcePoolInfo.getDefaultInstance();
    }

    @java.lang.Override
    public com.flyteidl.event.ResourcePoolInfo build() {
      com.flyteidl.event.ResourcePoolInfo result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.flyteidl.event.ResourcePoolInfo buildPartial() {
      com.flyteidl.event.ResourcePoolInfo result = new com.flyteidl.event.ResourcePoolInfo(this);
      result.allocationToken_ = allocationToken_;
      result.namespace_ = namespace_;
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
      if (other instanceof com.flyteidl.event.ResourcePoolInfo) {
        return mergeFrom((com.flyteidl.event.ResourcePoolInfo)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.flyteidl.event.ResourcePoolInfo other) {
      if (other == com.flyteidl.event.ResourcePoolInfo.getDefaultInstance()) return this;
      if (!other.getAllocationToken().isEmpty()) {
        allocationToken_ = other.allocationToken_;
        onChanged();
      }
      if (!other.getNamespace().isEmpty()) {
        namespace_ = other.namespace_;
        onChanged();
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
      com.flyteidl.event.ResourcePoolInfo parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.flyteidl.event.ResourcePoolInfo) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object allocationToken_ = "";
    /**
     * <pre>
     * Unique resource ID used to identify this execution when allocating a token.
     * </pre>
     *
     * <code>string allocation_token = 1 [json_name = "allocationToken"];</code>
     * @return The allocationToken.
     */
    public java.lang.String getAllocationToken() {
      java.lang.Object ref = allocationToken_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        allocationToken_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * Unique resource ID used to identify this execution when allocating a token.
     * </pre>
     *
     * <code>string allocation_token = 1 [json_name = "allocationToken"];</code>
     * @return The bytes for allocationToken.
     */
    public com.google.protobuf.ByteString
        getAllocationTokenBytes() {
      java.lang.Object ref = allocationToken_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        allocationToken_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * Unique resource ID used to identify this execution when allocating a token.
     * </pre>
     *
     * <code>string allocation_token = 1 [json_name = "allocationToken"];</code>
     * @param value The allocationToken to set.
     * @return This builder for chaining.
     */
    public Builder setAllocationToken(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      allocationToken_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Unique resource ID used to identify this execution when allocating a token.
     * </pre>
     *
     * <code>string allocation_token = 1 [json_name = "allocationToken"];</code>
     * @return This builder for chaining.
     */
    public Builder clearAllocationToken() {
      
      allocationToken_ = getDefaultInstance().getAllocationToken();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Unique resource ID used to identify this execution when allocating a token.
     * </pre>
     *
     * <code>string allocation_token = 1 [json_name = "allocationToken"];</code>
     * @param value The bytes for allocationToken to set.
     * @return This builder for chaining.
     */
    public Builder setAllocationTokenBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      allocationToken_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object namespace_ = "";
    /**
     * <pre>
     * Namespace under which this task execution requested an allocation token.
     * </pre>
     *
     * <code>string namespace = 2 [json_name = "namespace"];</code>
     * @return The namespace.
     */
    public java.lang.String getNamespace() {
      java.lang.Object ref = namespace_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        namespace_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * Namespace under which this task execution requested an allocation token.
     * </pre>
     *
     * <code>string namespace = 2 [json_name = "namespace"];</code>
     * @return The bytes for namespace.
     */
    public com.google.protobuf.ByteString
        getNamespaceBytes() {
      java.lang.Object ref = namespace_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        namespace_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * Namespace under which this task execution requested an allocation token.
     * </pre>
     *
     * <code>string namespace = 2 [json_name = "namespace"];</code>
     * @param value The namespace to set.
     * @return This builder for chaining.
     */
    public Builder setNamespace(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      namespace_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Namespace under which this task execution requested an allocation token.
     * </pre>
     *
     * <code>string namespace = 2 [json_name = "namespace"];</code>
     * @return This builder for chaining.
     */
    public Builder clearNamespace() {
      
      namespace_ = getDefaultInstance().getNamespace();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Namespace under which this task execution requested an allocation token.
     * </pre>
     *
     * <code>string namespace = 2 [json_name = "namespace"];</code>
     * @param value The bytes for namespace to set.
     * @return This builder for chaining.
     */
    public Builder setNamespaceBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      namespace_ = value;
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


    // @@protoc_insertion_point(builder_scope:flyteidl.event.ResourcePoolInfo)
  }

  // @@protoc_insertion_point(class_scope:flyteidl.event.ResourcePoolInfo)
  private static final com.flyteidl.event.ResourcePoolInfo DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.flyteidl.event.ResourcePoolInfo();
  }

  public static com.flyteidl.event.ResourcePoolInfo getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<ResourcePoolInfo>
      PARSER = new com.google.protobuf.AbstractParser<ResourcePoolInfo>() {
    @java.lang.Override
    public ResourcePoolInfo parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new ResourcePoolInfo(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<ResourcePoolInfo> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<ResourcePoolInfo> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.flyteidl.event.ResourcePoolInfo getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

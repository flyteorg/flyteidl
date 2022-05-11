// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/admin/common.proto

package com.flyteidl.admin;

/**
 * <pre>
 * A request to retrieve the metadata associated with a NamedEntityIdentifier
 * </pre>
 *
 * Protobuf type {@code flyteidl.admin.NamedEntityGetRequest}
 */
public final class NamedEntityGetRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:flyteidl.admin.NamedEntityGetRequest)
    NamedEntityGetRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use NamedEntityGetRequest.newBuilder() to construct.
  private NamedEntityGetRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private NamedEntityGetRequest() {
    resourceType_ = 0;
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new NamedEntityGetRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private NamedEntityGetRequest(
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
            int rawValue = input.readEnum();

            resourceType_ = rawValue;
            break;
          }
          case 18: {
            com.flyteidl.admin.NamedEntityIdentifier.Builder subBuilder = null;
            if (id_ != null) {
              subBuilder = id_.toBuilder();
            }
            id_ = input.readMessage(com.flyteidl.admin.NamedEntityIdentifier.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(id_);
              id_ = subBuilder.buildPartial();
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
    return com.flyteidl.admin.CommonProto.internal_static_flyteidl_admin_NamedEntityGetRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.flyteidl.admin.CommonProto.internal_static_flyteidl_admin_NamedEntityGetRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.flyteidl.admin.NamedEntityGetRequest.class, com.flyteidl.admin.NamedEntityGetRequest.Builder.class);
  }

  public static final int RESOURCE_TYPE_FIELD_NUMBER = 1;
  private int resourceType_;
  /**
   * <pre>
   * Resource type of the metadata to get. One of Task, Workflow or LaunchPlan.
   * +required
   * </pre>
   *
   * <code>.flyteidl.core.ResourceType resource_type = 1 [json_name = "resourceType"];</code>
   * @return The enum numeric value on the wire for resourceType.
   */
  @java.lang.Override public int getResourceTypeValue() {
    return resourceType_;
  }
  /**
   * <pre>
   * Resource type of the metadata to get. One of Task, Workflow or LaunchPlan.
   * +required
   * </pre>
   *
   * <code>.flyteidl.core.ResourceType resource_type = 1 [json_name = "resourceType"];</code>
   * @return The resourceType.
   */
  @java.lang.Override public com.flyteidl.core.ResourceType getResourceType() {
    @SuppressWarnings("deprecation")
    com.flyteidl.core.ResourceType result = com.flyteidl.core.ResourceType.valueOf(resourceType_);
    return result == null ? com.flyteidl.core.ResourceType.UNRECOGNIZED : result;
  }

  public static final int ID_FIELD_NUMBER = 2;
  private com.flyteidl.admin.NamedEntityIdentifier id_;
  /**
   * <pre>
   * The identifier for the named entity for which to fetch metadata.
   * +required
   * </pre>
   *
   * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
   * @return Whether the id field is set.
   */
  @java.lang.Override
  public boolean hasId() {
    return id_ != null;
  }
  /**
   * <pre>
   * The identifier for the named entity for which to fetch metadata.
   * +required
   * </pre>
   *
   * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
   * @return The id.
   */
  @java.lang.Override
  public com.flyteidl.admin.NamedEntityIdentifier getId() {
    return id_ == null ? com.flyteidl.admin.NamedEntityIdentifier.getDefaultInstance() : id_;
  }
  /**
   * <pre>
   * The identifier for the named entity for which to fetch metadata.
   * +required
   * </pre>
   *
   * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
   */
  @java.lang.Override
  public com.flyteidl.admin.NamedEntityIdentifierOrBuilder getIdOrBuilder() {
    return getId();
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
    if (resourceType_ != com.flyteidl.core.ResourceType.UNSPECIFIED.getNumber()) {
      output.writeEnum(1, resourceType_);
    }
    if (id_ != null) {
      output.writeMessage(2, getId());
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (resourceType_ != com.flyteidl.core.ResourceType.UNSPECIFIED.getNumber()) {
      size += com.google.protobuf.CodedOutputStream
        .computeEnumSize(1, resourceType_);
    }
    if (id_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, getId());
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
    if (!(obj instanceof com.flyteidl.admin.NamedEntityGetRequest)) {
      return super.equals(obj);
    }
    com.flyteidl.admin.NamedEntityGetRequest other = (com.flyteidl.admin.NamedEntityGetRequest) obj;

    if (resourceType_ != other.resourceType_) return false;
    if (hasId() != other.hasId()) return false;
    if (hasId()) {
      if (!getId()
          .equals(other.getId())) return false;
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
    hash = (37 * hash) + RESOURCE_TYPE_FIELD_NUMBER;
    hash = (53 * hash) + resourceType_;
    if (hasId()) {
      hash = (37 * hash) + ID_FIELD_NUMBER;
      hash = (53 * hash) + getId().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.flyteidl.admin.NamedEntityGetRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.admin.NamedEntityGetRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.admin.NamedEntityGetRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.admin.NamedEntityGetRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.admin.NamedEntityGetRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.admin.NamedEntityGetRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.admin.NamedEntityGetRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.admin.NamedEntityGetRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.admin.NamedEntityGetRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.flyteidl.admin.NamedEntityGetRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.admin.NamedEntityGetRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.admin.NamedEntityGetRequest parseFrom(
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
  public static Builder newBuilder(com.flyteidl.admin.NamedEntityGetRequest prototype) {
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
   * A request to retrieve the metadata associated with a NamedEntityIdentifier
   * </pre>
   *
   * Protobuf type {@code flyteidl.admin.NamedEntityGetRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:flyteidl.admin.NamedEntityGetRequest)
      com.flyteidl.admin.NamedEntityGetRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.flyteidl.admin.CommonProto.internal_static_flyteidl_admin_NamedEntityGetRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.flyteidl.admin.CommonProto.internal_static_flyteidl_admin_NamedEntityGetRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.flyteidl.admin.NamedEntityGetRequest.class, com.flyteidl.admin.NamedEntityGetRequest.Builder.class);
    }

    // Construct using com.flyteidl.admin.NamedEntityGetRequest.newBuilder()
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
      resourceType_ = 0;

      if (idBuilder_ == null) {
        id_ = null;
      } else {
        id_ = null;
        idBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.flyteidl.admin.CommonProto.internal_static_flyteidl_admin_NamedEntityGetRequest_descriptor;
    }

    @java.lang.Override
    public com.flyteidl.admin.NamedEntityGetRequest getDefaultInstanceForType() {
      return com.flyteidl.admin.NamedEntityGetRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.flyteidl.admin.NamedEntityGetRequest build() {
      com.flyteidl.admin.NamedEntityGetRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.flyteidl.admin.NamedEntityGetRequest buildPartial() {
      com.flyteidl.admin.NamedEntityGetRequest result = new com.flyteidl.admin.NamedEntityGetRequest(this);
      result.resourceType_ = resourceType_;
      if (idBuilder_ == null) {
        result.id_ = id_;
      } else {
        result.id_ = idBuilder_.build();
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
      if (other instanceof com.flyteidl.admin.NamedEntityGetRequest) {
        return mergeFrom((com.flyteidl.admin.NamedEntityGetRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.flyteidl.admin.NamedEntityGetRequest other) {
      if (other == com.flyteidl.admin.NamedEntityGetRequest.getDefaultInstance()) return this;
      if (other.resourceType_ != 0) {
        setResourceTypeValue(other.getResourceTypeValue());
      }
      if (other.hasId()) {
        mergeId(other.getId());
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
      com.flyteidl.admin.NamedEntityGetRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.flyteidl.admin.NamedEntityGetRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private int resourceType_ = 0;
    /**
     * <pre>
     * Resource type of the metadata to get. One of Task, Workflow or LaunchPlan.
     * +required
     * </pre>
     *
     * <code>.flyteidl.core.ResourceType resource_type = 1 [json_name = "resourceType"];</code>
     * @return The enum numeric value on the wire for resourceType.
     */
    @java.lang.Override public int getResourceTypeValue() {
      return resourceType_;
    }
    /**
     * <pre>
     * Resource type of the metadata to get. One of Task, Workflow or LaunchPlan.
     * +required
     * </pre>
     *
     * <code>.flyteidl.core.ResourceType resource_type = 1 [json_name = "resourceType"];</code>
     * @param value The enum numeric value on the wire for resourceType to set.
     * @return This builder for chaining.
     */
    public Builder setResourceTypeValue(int value) {
      
      resourceType_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Resource type of the metadata to get. One of Task, Workflow or LaunchPlan.
     * +required
     * </pre>
     *
     * <code>.flyteidl.core.ResourceType resource_type = 1 [json_name = "resourceType"];</code>
     * @return The resourceType.
     */
    @java.lang.Override
    public com.flyteidl.core.ResourceType getResourceType() {
      @SuppressWarnings("deprecation")
      com.flyteidl.core.ResourceType result = com.flyteidl.core.ResourceType.valueOf(resourceType_);
      return result == null ? com.flyteidl.core.ResourceType.UNRECOGNIZED : result;
    }
    /**
     * <pre>
     * Resource type of the metadata to get. One of Task, Workflow or LaunchPlan.
     * +required
     * </pre>
     *
     * <code>.flyteidl.core.ResourceType resource_type = 1 [json_name = "resourceType"];</code>
     * @param value The resourceType to set.
     * @return This builder for chaining.
     */
    public Builder setResourceType(com.flyteidl.core.ResourceType value) {
      if (value == null) {
        throw new NullPointerException();
      }
      
      resourceType_ = value.getNumber();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * Resource type of the metadata to get. One of Task, Workflow or LaunchPlan.
     * +required
     * </pre>
     *
     * <code>.flyteidl.core.ResourceType resource_type = 1 [json_name = "resourceType"];</code>
     * @return This builder for chaining.
     */
    public Builder clearResourceType() {
      
      resourceType_ = 0;
      onChanged();
      return this;
    }

    private com.flyteidl.admin.NamedEntityIdentifier id_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.flyteidl.admin.NamedEntityIdentifier, com.flyteidl.admin.NamedEntityIdentifier.Builder, com.flyteidl.admin.NamedEntityIdentifierOrBuilder> idBuilder_;
    /**
     * <pre>
     * The identifier for the named entity for which to fetch metadata.
     * +required
     * </pre>
     *
     * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
     * @return Whether the id field is set.
     */
    public boolean hasId() {
      return idBuilder_ != null || id_ != null;
    }
    /**
     * <pre>
     * The identifier for the named entity for which to fetch metadata.
     * +required
     * </pre>
     *
     * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
     * @return The id.
     */
    public com.flyteidl.admin.NamedEntityIdentifier getId() {
      if (idBuilder_ == null) {
        return id_ == null ? com.flyteidl.admin.NamedEntityIdentifier.getDefaultInstance() : id_;
      } else {
        return idBuilder_.getMessage();
      }
    }
    /**
     * <pre>
     * The identifier for the named entity for which to fetch metadata.
     * +required
     * </pre>
     *
     * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
     */
    public Builder setId(com.flyteidl.admin.NamedEntityIdentifier value) {
      if (idBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        id_ = value;
        onChanged();
      } else {
        idBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <pre>
     * The identifier for the named entity for which to fetch metadata.
     * +required
     * </pre>
     *
     * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
     */
    public Builder setId(
        com.flyteidl.admin.NamedEntityIdentifier.Builder builderForValue) {
      if (idBuilder_ == null) {
        id_ = builderForValue.build();
        onChanged();
      } else {
        idBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <pre>
     * The identifier for the named entity for which to fetch metadata.
     * +required
     * </pre>
     *
     * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
     */
    public Builder mergeId(com.flyteidl.admin.NamedEntityIdentifier value) {
      if (idBuilder_ == null) {
        if (id_ != null) {
          id_ =
            com.flyteidl.admin.NamedEntityIdentifier.newBuilder(id_).mergeFrom(value).buildPartial();
        } else {
          id_ = value;
        }
        onChanged();
      } else {
        idBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <pre>
     * The identifier for the named entity for which to fetch metadata.
     * +required
     * </pre>
     *
     * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
     */
    public Builder clearId() {
      if (idBuilder_ == null) {
        id_ = null;
        onChanged();
      } else {
        id_ = null;
        idBuilder_ = null;
      }

      return this;
    }
    /**
     * <pre>
     * The identifier for the named entity for which to fetch metadata.
     * +required
     * </pre>
     *
     * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
     */
    public com.flyteidl.admin.NamedEntityIdentifier.Builder getIdBuilder() {
      
      onChanged();
      return getIdFieldBuilder().getBuilder();
    }
    /**
     * <pre>
     * The identifier for the named entity for which to fetch metadata.
     * +required
     * </pre>
     *
     * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
     */
    public com.flyteidl.admin.NamedEntityIdentifierOrBuilder getIdOrBuilder() {
      if (idBuilder_ != null) {
        return idBuilder_.getMessageOrBuilder();
      } else {
        return id_ == null ?
            com.flyteidl.admin.NamedEntityIdentifier.getDefaultInstance() : id_;
      }
    }
    /**
     * <pre>
     * The identifier for the named entity for which to fetch metadata.
     * +required
     * </pre>
     *
     * <code>.flyteidl.admin.NamedEntityIdentifier id = 2 [json_name = "id"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.flyteidl.admin.NamedEntityIdentifier, com.flyteidl.admin.NamedEntityIdentifier.Builder, com.flyteidl.admin.NamedEntityIdentifierOrBuilder> 
        getIdFieldBuilder() {
      if (idBuilder_ == null) {
        idBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.flyteidl.admin.NamedEntityIdentifier, com.flyteidl.admin.NamedEntityIdentifier.Builder, com.flyteidl.admin.NamedEntityIdentifierOrBuilder>(
                getId(),
                getParentForChildren(),
                isClean());
        id_ = null;
      }
      return idBuilder_;
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


    // @@protoc_insertion_point(builder_scope:flyteidl.admin.NamedEntityGetRequest)
  }

  // @@protoc_insertion_point(class_scope:flyteidl.admin.NamedEntityGetRequest)
  private static final com.flyteidl.admin.NamedEntityGetRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.flyteidl.admin.NamedEntityGetRequest();
  }

  public static com.flyteidl.admin.NamedEntityGetRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<NamedEntityGetRequest>
      PARSER = new com.google.protobuf.AbstractParser<NamedEntityGetRequest>() {
    @java.lang.Override
    public NamedEntityGetRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new NamedEntityGetRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<NamedEntityGetRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<NamedEntityGetRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.flyteidl.admin.NamedEntityGetRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

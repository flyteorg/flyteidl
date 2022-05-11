// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/service/dataproxy.proto

package com.flyteidl.service;

/**
 * Protobuf type {@code flyteidl.service.CreateUploadLocationResponse}
 */
public final class CreateUploadLocationResponse extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:flyteidl.service.CreateUploadLocationResponse)
    CreateUploadLocationResponseOrBuilder {
private static final long serialVersionUID = 0L;
  // Use CreateUploadLocationResponse.newBuilder() to construct.
  private CreateUploadLocationResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private CreateUploadLocationResponse() {
    signedUrl_ = "";
    nativeUrl_ = "";
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new CreateUploadLocationResponse();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private CreateUploadLocationResponse(
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

            signedUrl_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            nativeUrl_ = s;
            break;
          }
          case 26: {
            com.google.protobuf.Timestamp.Builder subBuilder = null;
            if (expiresAt_ != null) {
              subBuilder = expiresAt_.toBuilder();
            }
            expiresAt_ = input.readMessage(com.google.protobuf.Timestamp.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(expiresAt_);
              expiresAt_ = subBuilder.buildPartial();
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
    return com.flyteidl.service.DataproxyProto.internal_static_flyteidl_service_CreateUploadLocationResponse_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.flyteidl.service.DataproxyProto.internal_static_flyteidl_service_CreateUploadLocationResponse_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.flyteidl.service.CreateUploadLocationResponse.class, com.flyteidl.service.CreateUploadLocationResponse.Builder.class);
  }

  public static final int SIGNED_URL_FIELD_NUMBER = 1;
  private volatile java.lang.Object signedUrl_;
  /**
   * <pre>
   * SignedUrl specifies the url to use to upload content to (e.g. https://my-bucket.s3.amazonaws.com/randomstring/suffix.tar?X-...)
   * </pre>
   *
   * <code>string signed_url = 1 [json_name = "signedUrl"];</code>
   * @return The signedUrl.
   */
  @java.lang.Override
  public java.lang.String getSignedUrl() {
    java.lang.Object ref = signedUrl_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      signedUrl_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * SignedUrl specifies the url to use to upload content to (e.g. https://my-bucket.s3.amazonaws.com/randomstring/suffix.tar?X-...)
   * </pre>
   *
   * <code>string signed_url = 1 [json_name = "signedUrl"];</code>
   * @return The bytes for signedUrl.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getSignedUrlBytes() {
    java.lang.Object ref = signedUrl_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      signedUrl_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int NATIVE_URL_FIELD_NUMBER = 2;
  private volatile java.lang.Object nativeUrl_;
  /**
   * <pre>
   * NativeUrl specifies the url in the format of the configured storage provider (e.g. s3://my-bucket/randomstring/suffix.tar)
   * </pre>
   *
   * <code>string native_url = 2 [json_name = "nativeUrl"];</code>
   * @return The nativeUrl.
   */
  @java.lang.Override
  public java.lang.String getNativeUrl() {
    java.lang.Object ref = nativeUrl_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      nativeUrl_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * NativeUrl specifies the url in the format of the configured storage provider (e.g. s3://my-bucket/randomstring/suffix.tar)
   * </pre>
   *
   * <code>string native_url = 2 [json_name = "nativeUrl"];</code>
   * @return The bytes for nativeUrl.
   */
  @java.lang.Override
  public com.google.protobuf.ByteString
      getNativeUrlBytes() {
    java.lang.Object ref = nativeUrl_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      nativeUrl_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int EXPIRES_AT_FIELD_NUMBER = 3;
  private com.google.protobuf.Timestamp expiresAt_;
  /**
   * <pre>
   * ExpiresAt defines when will the signed URL expires.
   * </pre>
   *
   * <code>.google.protobuf.Timestamp expires_at = 3 [json_name = "expiresAt"];</code>
   * @return Whether the expiresAt field is set.
   */
  @java.lang.Override
  public boolean hasExpiresAt() {
    return expiresAt_ != null;
  }
  /**
   * <pre>
   * ExpiresAt defines when will the signed URL expires.
   * </pre>
   *
   * <code>.google.protobuf.Timestamp expires_at = 3 [json_name = "expiresAt"];</code>
   * @return The expiresAt.
   */
  @java.lang.Override
  public com.google.protobuf.Timestamp getExpiresAt() {
    return expiresAt_ == null ? com.google.protobuf.Timestamp.getDefaultInstance() : expiresAt_;
  }
  /**
   * <pre>
   * ExpiresAt defines when will the signed URL expires.
   * </pre>
   *
   * <code>.google.protobuf.Timestamp expires_at = 3 [json_name = "expiresAt"];</code>
   */
  @java.lang.Override
  public com.google.protobuf.TimestampOrBuilder getExpiresAtOrBuilder() {
    return getExpiresAt();
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
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(signedUrl_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, signedUrl_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(nativeUrl_)) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, nativeUrl_);
    }
    if (expiresAt_ != null) {
      output.writeMessage(3, getExpiresAt());
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(signedUrl_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, signedUrl_);
    }
    if (!com.google.protobuf.GeneratedMessageV3.isStringEmpty(nativeUrl_)) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, nativeUrl_);
    }
    if (expiresAt_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(3, getExpiresAt());
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
    if (!(obj instanceof com.flyteidl.service.CreateUploadLocationResponse)) {
      return super.equals(obj);
    }
    com.flyteidl.service.CreateUploadLocationResponse other = (com.flyteidl.service.CreateUploadLocationResponse) obj;

    if (!getSignedUrl()
        .equals(other.getSignedUrl())) return false;
    if (!getNativeUrl()
        .equals(other.getNativeUrl())) return false;
    if (hasExpiresAt() != other.hasExpiresAt()) return false;
    if (hasExpiresAt()) {
      if (!getExpiresAt()
          .equals(other.getExpiresAt())) return false;
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
    hash = (37 * hash) + SIGNED_URL_FIELD_NUMBER;
    hash = (53 * hash) + getSignedUrl().hashCode();
    hash = (37 * hash) + NATIVE_URL_FIELD_NUMBER;
    hash = (53 * hash) + getNativeUrl().hashCode();
    if (hasExpiresAt()) {
      hash = (37 * hash) + EXPIRES_AT_FIELD_NUMBER;
      hash = (53 * hash) + getExpiresAt().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.flyteidl.service.CreateUploadLocationResponse parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.service.CreateUploadLocationResponse parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.service.CreateUploadLocationResponse parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.service.CreateUploadLocationResponse parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.service.CreateUploadLocationResponse parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.service.CreateUploadLocationResponse parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.service.CreateUploadLocationResponse parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.service.CreateUploadLocationResponse parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.service.CreateUploadLocationResponse parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.flyteidl.service.CreateUploadLocationResponse parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.service.CreateUploadLocationResponse parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.service.CreateUploadLocationResponse parseFrom(
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
  public static Builder newBuilder(com.flyteidl.service.CreateUploadLocationResponse prototype) {
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
   * Protobuf type {@code flyteidl.service.CreateUploadLocationResponse}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:flyteidl.service.CreateUploadLocationResponse)
      com.flyteidl.service.CreateUploadLocationResponseOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.flyteidl.service.DataproxyProto.internal_static_flyteidl_service_CreateUploadLocationResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.flyteidl.service.DataproxyProto.internal_static_flyteidl_service_CreateUploadLocationResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.flyteidl.service.CreateUploadLocationResponse.class, com.flyteidl.service.CreateUploadLocationResponse.Builder.class);
    }

    // Construct using com.flyteidl.service.CreateUploadLocationResponse.newBuilder()
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
      signedUrl_ = "";

      nativeUrl_ = "";

      if (expiresAtBuilder_ == null) {
        expiresAt_ = null;
      } else {
        expiresAt_ = null;
        expiresAtBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.flyteidl.service.DataproxyProto.internal_static_flyteidl_service_CreateUploadLocationResponse_descriptor;
    }

    @java.lang.Override
    public com.flyteidl.service.CreateUploadLocationResponse getDefaultInstanceForType() {
      return com.flyteidl.service.CreateUploadLocationResponse.getDefaultInstance();
    }

    @java.lang.Override
    public com.flyteidl.service.CreateUploadLocationResponse build() {
      com.flyteidl.service.CreateUploadLocationResponse result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.flyteidl.service.CreateUploadLocationResponse buildPartial() {
      com.flyteidl.service.CreateUploadLocationResponse result = new com.flyteidl.service.CreateUploadLocationResponse(this);
      result.signedUrl_ = signedUrl_;
      result.nativeUrl_ = nativeUrl_;
      if (expiresAtBuilder_ == null) {
        result.expiresAt_ = expiresAt_;
      } else {
        result.expiresAt_ = expiresAtBuilder_.build();
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
      if (other instanceof com.flyteidl.service.CreateUploadLocationResponse) {
        return mergeFrom((com.flyteidl.service.CreateUploadLocationResponse)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.flyteidl.service.CreateUploadLocationResponse other) {
      if (other == com.flyteidl.service.CreateUploadLocationResponse.getDefaultInstance()) return this;
      if (!other.getSignedUrl().isEmpty()) {
        signedUrl_ = other.signedUrl_;
        onChanged();
      }
      if (!other.getNativeUrl().isEmpty()) {
        nativeUrl_ = other.nativeUrl_;
        onChanged();
      }
      if (other.hasExpiresAt()) {
        mergeExpiresAt(other.getExpiresAt());
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
      com.flyteidl.service.CreateUploadLocationResponse parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.flyteidl.service.CreateUploadLocationResponse) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object signedUrl_ = "";
    /**
     * <pre>
     * SignedUrl specifies the url to use to upload content to (e.g. https://my-bucket.s3.amazonaws.com/randomstring/suffix.tar?X-...)
     * </pre>
     *
     * <code>string signed_url = 1 [json_name = "signedUrl"];</code>
     * @return The signedUrl.
     */
    public java.lang.String getSignedUrl() {
      java.lang.Object ref = signedUrl_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        signedUrl_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * SignedUrl specifies the url to use to upload content to (e.g. https://my-bucket.s3.amazonaws.com/randomstring/suffix.tar?X-...)
     * </pre>
     *
     * <code>string signed_url = 1 [json_name = "signedUrl"];</code>
     * @return The bytes for signedUrl.
     */
    public com.google.protobuf.ByteString
        getSignedUrlBytes() {
      java.lang.Object ref = signedUrl_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        signedUrl_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * SignedUrl specifies the url to use to upload content to (e.g. https://my-bucket.s3.amazonaws.com/randomstring/suffix.tar?X-...)
     * </pre>
     *
     * <code>string signed_url = 1 [json_name = "signedUrl"];</code>
     * @param value The signedUrl to set.
     * @return This builder for chaining.
     */
    public Builder setSignedUrl(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      signedUrl_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * SignedUrl specifies the url to use to upload content to (e.g. https://my-bucket.s3.amazonaws.com/randomstring/suffix.tar?X-...)
     * </pre>
     *
     * <code>string signed_url = 1 [json_name = "signedUrl"];</code>
     * @return This builder for chaining.
     */
    public Builder clearSignedUrl() {
      
      signedUrl_ = getDefaultInstance().getSignedUrl();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * SignedUrl specifies the url to use to upload content to (e.g. https://my-bucket.s3.amazonaws.com/randomstring/suffix.tar?X-...)
     * </pre>
     *
     * <code>string signed_url = 1 [json_name = "signedUrl"];</code>
     * @param value The bytes for signedUrl to set.
     * @return This builder for chaining.
     */
    public Builder setSignedUrlBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      signedUrl_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object nativeUrl_ = "";
    /**
     * <pre>
     * NativeUrl specifies the url in the format of the configured storage provider (e.g. s3://my-bucket/randomstring/suffix.tar)
     * </pre>
     *
     * <code>string native_url = 2 [json_name = "nativeUrl"];</code>
     * @return The nativeUrl.
     */
    public java.lang.String getNativeUrl() {
      java.lang.Object ref = nativeUrl_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        nativeUrl_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * NativeUrl specifies the url in the format of the configured storage provider (e.g. s3://my-bucket/randomstring/suffix.tar)
     * </pre>
     *
     * <code>string native_url = 2 [json_name = "nativeUrl"];</code>
     * @return The bytes for nativeUrl.
     */
    public com.google.protobuf.ByteString
        getNativeUrlBytes() {
      java.lang.Object ref = nativeUrl_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        nativeUrl_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * NativeUrl specifies the url in the format of the configured storage provider (e.g. s3://my-bucket/randomstring/suffix.tar)
     * </pre>
     *
     * <code>string native_url = 2 [json_name = "nativeUrl"];</code>
     * @param value The nativeUrl to set.
     * @return This builder for chaining.
     */
    public Builder setNativeUrl(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      nativeUrl_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * NativeUrl specifies the url in the format of the configured storage provider (e.g. s3://my-bucket/randomstring/suffix.tar)
     * </pre>
     *
     * <code>string native_url = 2 [json_name = "nativeUrl"];</code>
     * @return This builder for chaining.
     */
    public Builder clearNativeUrl() {
      
      nativeUrl_ = getDefaultInstance().getNativeUrl();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * NativeUrl specifies the url in the format of the configured storage provider (e.g. s3://my-bucket/randomstring/suffix.tar)
     * </pre>
     *
     * <code>string native_url = 2 [json_name = "nativeUrl"];</code>
     * @param value The bytes for nativeUrl to set.
     * @return This builder for chaining.
     */
    public Builder setNativeUrlBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      nativeUrl_ = value;
      onChanged();
      return this;
    }

    private com.google.protobuf.Timestamp expiresAt_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder> expiresAtBuilder_;
    /**
     * <pre>
     * ExpiresAt defines when will the signed URL expires.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp expires_at = 3 [json_name = "expiresAt"];</code>
     * @return Whether the expiresAt field is set.
     */
    public boolean hasExpiresAt() {
      return expiresAtBuilder_ != null || expiresAt_ != null;
    }
    /**
     * <pre>
     * ExpiresAt defines when will the signed URL expires.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp expires_at = 3 [json_name = "expiresAt"];</code>
     * @return The expiresAt.
     */
    public com.google.protobuf.Timestamp getExpiresAt() {
      if (expiresAtBuilder_ == null) {
        return expiresAt_ == null ? com.google.protobuf.Timestamp.getDefaultInstance() : expiresAt_;
      } else {
        return expiresAtBuilder_.getMessage();
      }
    }
    /**
     * <pre>
     * ExpiresAt defines when will the signed URL expires.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp expires_at = 3 [json_name = "expiresAt"];</code>
     */
    public Builder setExpiresAt(com.google.protobuf.Timestamp value) {
      if (expiresAtBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        expiresAt_ = value;
        onChanged();
      } else {
        expiresAtBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <pre>
     * ExpiresAt defines when will the signed URL expires.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp expires_at = 3 [json_name = "expiresAt"];</code>
     */
    public Builder setExpiresAt(
        com.google.protobuf.Timestamp.Builder builderForValue) {
      if (expiresAtBuilder_ == null) {
        expiresAt_ = builderForValue.build();
        onChanged();
      } else {
        expiresAtBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <pre>
     * ExpiresAt defines when will the signed URL expires.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp expires_at = 3 [json_name = "expiresAt"];</code>
     */
    public Builder mergeExpiresAt(com.google.protobuf.Timestamp value) {
      if (expiresAtBuilder_ == null) {
        if (expiresAt_ != null) {
          expiresAt_ =
            com.google.protobuf.Timestamp.newBuilder(expiresAt_).mergeFrom(value).buildPartial();
        } else {
          expiresAt_ = value;
        }
        onChanged();
      } else {
        expiresAtBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <pre>
     * ExpiresAt defines when will the signed URL expires.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp expires_at = 3 [json_name = "expiresAt"];</code>
     */
    public Builder clearExpiresAt() {
      if (expiresAtBuilder_ == null) {
        expiresAt_ = null;
        onChanged();
      } else {
        expiresAt_ = null;
        expiresAtBuilder_ = null;
      }

      return this;
    }
    /**
     * <pre>
     * ExpiresAt defines when will the signed URL expires.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp expires_at = 3 [json_name = "expiresAt"];</code>
     */
    public com.google.protobuf.Timestamp.Builder getExpiresAtBuilder() {
      
      onChanged();
      return getExpiresAtFieldBuilder().getBuilder();
    }
    /**
     * <pre>
     * ExpiresAt defines when will the signed URL expires.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp expires_at = 3 [json_name = "expiresAt"];</code>
     */
    public com.google.protobuf.TimestampOrBuilder getExpiresAtOrBuilder() {
      if (expiresAtBuilder_ != null) {
        return expiresAtBuilder_.getMessageOrBuilder();
      } else {
        return expiresAt_ == null ?
            com.google.protobuf.Timestamp.getDefaultInstance() : expiresAt_;
      }
    }
    /**
     * <pre>
     * ExpiresAt defines when will the signed URL expires.
     * </pre>
     *
     * <code>.google.protobuf.Timestamp expires_at = 3 [json_name = "expiresAt"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder> 
        getExpiresAtFieldBuilder() {
      if (expiresAtBuilder_ == null) {
        expiresAtBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder>(
                getExpiresAt(),
                getParentForChildren(),
                isClean());
        expiresAt_ = null;
      }
      return expiresAtBuilder_;
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


    // @@protoc_insertion_point(builder_scope:flyteidl.service.CreateUploadLocationResponse)
  }

  // @@protoc_insertion_point(class_scope:flyteidl.service.CreateUploadLocationResponse)
  private static final com.flyteidl.service.CreateUploadLocationResponse DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.flyteidl.service.CreateUploadLocationResponse();
  }

  public static com.flyteidl.service.CreateUploadLocationResponse getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<CreateUploadLocationResponse>
      PARSER = new com.google.protobuf.AbstractParser<CreateUploadLocationResponse>() {
    @java.lang.Override
    public CreateUploadLocationResponse parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new CreateUploadLocationResponse(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<CreateUploadLocationResponse> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<CreateUploadLocationResponse> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.flyteidl.service.CreateUploadLocationResponse getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

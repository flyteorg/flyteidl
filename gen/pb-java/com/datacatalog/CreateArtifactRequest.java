// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/datacatalog/datacatalog.proto

package com.datacatalog;

/**
 * <pre>
 * Request message for creating an Artifact and its associated artifact Data.
 * </pre>
 *
 * Protobuf type {@code datacatalog.CreateArtifactRequest}
 */
public final class CreateArtifactRequest extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:datacatalog.CreateArtifactRequest)
    CreateArtifactRequestOrBuilder {
private static final long serialVersionUID = 0L;
  // Use CreateArtifactRequest.newBuilder() to construct.
  private CreateArtifactRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private CreateArtifactRequest() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new CreateArtifactRequest();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private CreateArtifactRequest(
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
            com.datacatalog.Artifact.Builder subBuilder = null;
            if (artifact_ != null) {
              subBuilder = artifact_.toBuilder();
            }
            artifact_ = input.readMessage(com.datacatalog.Artifact.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(artifact_);
              artifact_ = subBuilder.buildPartial();
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
    return com.datacatalog.DatacatalogProto.internal_static_datacatalog_CreateArtifactRequest_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.datacatalog.DatacatalogProto.internal_static_datacatalog_CreateArtifactRequest_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.datacatalog.CreateArtifactRequest.class, com.datacatalog.CreateArtifactRequest.Builder.class);
  }

  public static final int ARTIFACT_FIELD_NUMBER = 1;
  private com.datacatalog.Artifact artifact_;
  /**
   * <code>.datacatalog.Artifact artifact = 1 [json_name = "artifact"];</code>
   * @return Whether the artifact field is set.
   */
  @java.lang.Override
  public boolean hasArtifact() {
    return artifact_ != null;
  }
  /**
   * <code>.datacatalog.Artifact artifact = 1 [json_name = "artifact"];</code>
   * @return The artifact.
   */
  @java.lang.Override
  public com.datacatalog.Artifact getArtifact() {
    return artifact_ == null ? com.datacatalog.Artifact.getDefaultInstance() : artifact_;
  }
  /**
   * <code>.datacatalog.Artifact artifact = 1 [json_name = "artifact"];</code>
   */
  @java.lang.Override
  public com.datacatalog.ArtifactOrBuilder getArtifactOrBuilder() {
    return getArtifact();
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
    if (artifact_ != null) {
      output.writeMessage(1, getArtifact());
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (artifact_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getArtifact());
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
    if (!(obj instanceof com.datacatalog.CreateArtifactRequest)) {
      return super.equals(obj);
    }
    com.datacatalog.CreateArtifactRequest other = (com.datacatalog.CreateArtifactRequest) obj;

    if (hasArtifact() != other.hasArtifact()) return false;
    if (hasArtifact()) {
      if (!getArtifact()
          .equals(other.getArtifact())) return false;
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
    if (hasArtifact()) {
      hash = (37 * hash) + ARTIFACT_FIELD_NUMBER;
      hash = (53 * hash) + getArtifact().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.datacatalog.CreateArtifactRequest parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.datacatalog.CreateArtifactRequest parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.datacatalog.CreateArtifactRequest parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.datacatalog.CreateArtifactRequest parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.datacatalog.CreateArtifactRequest parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.datacatalog.CreateArtifactRequest parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.datacatalog.CreateArtifactRequest parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.datacatalog.CreateArtifactRequest parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.datacatalog.CreateArtifactRequest parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.datacatalog.CreateArtifactRequest parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.datacatalog.CreateArtifactRequest parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.datacatalog.CreateArtifactRequest parseFrom(
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
  public static Builder newBuilder(com.datacatalog.CreateArtifactRequest prototype) {
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
   * Request message for creating an Artifact and its associated artifact Data.
   * </pre>
   *
   * Protobuf type {@code datacatalog.CreateArtifactRequest}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:datacatalog.CreateArtifactRequest)
      com.datacatalog.CreateArtifactRequestOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.datacatalog.DatacatalogProto.internal_static_datacatalog_CreateArtifactRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.datacatalog.DatacatalogProto.internal_static_datacatalog_CreateArtifactRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.datacatalog.CreateArtifactRequest.class, com.datacatalog.CreateArtifactRequest.Builder.class);
    }

    // Construct using com.datacatalog.CreateArtifactRequest.newBuilder()
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
      if (artifactBuilder_ == null) {
        artifact_ = null;
      } else {
        artifact_ = null;
        artifactBuilder_ = null;
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.datacatalog.DatacatalogProto.internal_static_datacatalog_CreateArtifactRequest_descriptor;
    }

    @java.lang.Override
    public com.datacatalog.CreateArtifactRequest getDefaultInstanceForType() {
      return com.datacatalog.CreateArtifactRequest.getDefaultInstance();
    }

    @java.lang.Override
    public com.datacatalog.CreateArtifactRequest build() {
      com.datacatalog.CreateArtifactRequest result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.datacatalog.CreateArtifactRequest buildPartial() {
      com.datacatalog.CreateArtifactRequest result = new com.datacatalog.CreateArtifactRequest(this);
      if (artifactBuilder_ == null) {
        result.artifact_ = artifact_;
      } else {
        result.artifact_ = artifactBuilder_.build();
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
      if (other instanceof com.datacatalog.CreateArtifactRequest) {
        return mergeFrom((com.datacatalog.CreateArtifactRequest)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.datacatalog.CreateArtifactRequest other) {
      if (other == com.datacatalog.CreateArtifactRequest.getDefaultInstance()) return this;
      if (other.hasArtifact()) {
        mergeArtifact(other.getArtifact());
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
      com.datacatalog.CreateArtifactRequest parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.datacatalog.CreateArtifactRequest) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private com.datacatalog.Artifact artifact_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.datacatalog.Artifact, com.datacatalog.Artifact.Builder, com.datacatalog.ArtifactOrBuilder> artifactBuilder_;
    /**
     * <code>.datacatalog.Artifact artifact = 1 [json_name = "artifact"];</code>
     * @return Whether the artifact field is set.
     */
    public boolean hasArtifact() {
      return artifactBuilder_ != null || artifact_ != null;
    }
    /**
     * <code>.datacatalog.Artifact artifact = 1 [json_name = "artifact"];</code>
     * @return The artifact.
     */
    public com.datacatalog.Artifact getArtifact() {
      if (artifactBuilder_ == null) {
        return artifact_ == null ? com.datacatalog.Artifact.getDefaultInstance() : artifact_;
      } else {
        return artifactBuilder_.getMessage();
      }
    }
    /**
     * <code>.datacatalog.Artifact artifact = 1 [json_name = "artifact"];</code>
     */
    public Builder setArtifact(com.datacatalog.Artifact value) {
      if (artifactBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        artifact_ = value;
        onChanged();
      } else {
        artifactBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.datacatalog.Artifact artifact = 1 [json_name = "artifact"];</code>
     */
    public Builder setArtifact(
        com.datacatalog.Artifact.Builder builderForValue) {
      if (artifactBuilder_ == null) {
        artifact_ = builderForValue.build();
        onChanged();
      } else {
        artifactBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.datacatalog.Artifact artifact = 1 [json_name = "artifact"];</code>
     */
    public Builder mergeArtifact(com.datacatalog.Artifact value) {
      if (artifactBuilder_ == null) {
        if (artifact_ != null) {
          artifact_ =
            com.datacatalog.Artifact.newBuilder(artifact_).mergeFrom(value).buildPartial();
        } else {
          artifact_ = value;
        }
        onChanged();
      } else {
        artifactBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.datacatalog.Artifact artifact = 1 [json_name = "artifact"];</code>
     */
    public Builder clearArtifact() {
      if (artifactBuilder_ == null) {
        artifact_ = null;
        onChanged();
      } else {
        artifact_ = null;
        artifactBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.datacatalog.Artifact artifact = 1 [json_name = "artifact"];</code>
     */
    public com.datacatalog.Artifact.Builder getArtifactBuilder() {
      
      onChanged();
      return getArtifactFieldBuilder().getBuilder();
    }
    /**
     * <code>.datacatalog.Artifact artifact = 1 [json_name = "artifact"];</code>
     */
    public com.datacatalog.ArtifactOrBuilder getArtifactOrBuilder() {
      if (artifactBuilder_ != null) {
        return artifactBuilder_.getMessageOrBuilder();
      } else {
        return artifact_ == null ?
            com.datacatalog.Artifact.getDefaultInstance() : artifact_;
      }
    }
    /**
     * <code>.datacatalog.Artifact artifact = 1 [json_name = "artifact"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.datacatalog.Artifact, com.datacatalog.Artifact.Builder, com.datacatalog.ArtifactOrBuilder> 
        getArtifactFieldBuilder() {
      if (artifactBuilder_ == null) {
        artifactBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.datacatalog.Artifact, com.datacatalog.Artifact.Builder, com.datacatalog.ArtifactOrBuilder>(
                getArtifact(),
                getParentForChildren(),
                isClean());
        artifact_ = null;
      }
      return artifactBuilder_;
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


    // @@protoc_insertion_point(builder_scope:datacatalog.CreateArtifactRequest)
  }

  // @@protoc_insertion_point(class_scope:datacatalog.CreateArtifactRequest)
  private static final com.datacatalog.CreateArtifactRequest DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.datacatalog.CreateArtifactRequest();
  }

  public static com.datacatalog.CreateArtifactRequest getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<CreateArtifactRequest>
      PARSER = new com.google.protobuf.AbstractParser<CreateArtifactRequest>() {
    @java.lang.Override
    public CreateArtifactRequest parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new CreateArtifactRequest(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<CreateArtifactRequest> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<CreateArtifactRequest> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.datacatalog.CreateArtifactRequest getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/core/tasks.proto

package com.flyteidl.core;

/**
 * <pre>
 * Metadata for building a kubernetes object when a task is executed.
 * </pre>
 *
 * Protobuf type {@code flyteidl.core.K8sObjectMetadata}
 */
public final class K8sObjectMetadata extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:flyteidl.core.K8sObjectMetadata)
    K8sObjectMetadataOrBuilder {
private static final long serialVersionUID = 0L;
  // Use K8sObjectMetadata.newBuilder() to construct.
  private K8sObjectMetadata(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private K8sObjectMetadata() {
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new K8sObjectMetadata();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private K8sObjectMetadata(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    int mutable_bitField0_ = 0;
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
            if (!((mutable_bitField0_ & 0x00000001) != 0)) {
              labels_ = com.google.protobuf.MapField.newMapField(
                  LabelsDefaultEntryHolder.defaultEntry);
              mutable_bitField0_ |= 0x00000001;
            }
            com.google.protobuf.MapEntry<java.lang.String, java.lang.String>
            labels__ = input.readMessage(
                LabelsDefaultEntryHolder.defaultEntry.getParserForType(), extensionRegistry);
            labels_.getMutableMap().put(
                labels__.getKey(), labels__.getValue());
            break;
          }
          case 18: {
            if (!((mutable_bitField0_ & 0x00000002) != 0)) {
              annotations_ = com.google.protobuf.MapField.newMapField(
                  AnnotationsDefaultEntryHolder.defaultEntry);
              mutable_bitField0_ |= 0x00000002;
            }
            com.google.protobuf.MapEntry<java.lang.String, java.lang.String>
            annotations__ = input.readMessage(
                AnnotationsDefaultEntryHolder.defaultEntry.getParserForType(), extensionRegistry);
            annotations_.getMutableMap().put(
                annotations__.getKey(), annotations__.getValue());
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
    return com.flyteidl.core.TasksProto.internal_static_flyteidl_core_K8sObjectMetadata_descriptor;
  }

  @SuppressWarnings({"rawtypes"})
  @java.lang.Override
  protected com.google.protobuf.MapField internalGetMapField(
      int number) {
    switch (number) {
      case 1:
        return internalGetLabels();
      case 2:
        return internalGetAnnotations();
      default:
        throw new RuntimeException(
            "Invalid map field number: " + number);
    }
  }
  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.flyteidl.core.TasksProto.internal_static_flyteidl_core_K8sObjectMetadata_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.flyteidl.core.K8sObjectMetadata.class, com.flyteidl.core.K8sObjectMetadata.Builder.class);
  }

  public static final int LABELS_FIELD_NUMBER = 1;
  private static final class LabelsDefaultEntryHolder {
    static final com.google.protobuf.MapEntry<
        java.lang.String, java.lang.String> defaultEntry =
            com.google.protobuf.MapEntry
            .<java.lang.String, java.lang.String>newDefaultInstance(
                com.flyteidl.core.TasksProto.internal_static_flyteidl_core_K8sObjectMetadata_LabelsEntry_descriptor, 
                com.google.protobuf.WireFormat.FieldType.STRING,
                "",
                com.google.protobuf.WireFormat.FieldType.STRING,
                "");
  }
  private com.google.protobuf.MapField<
      java.lang.String, java.lang.String> labels_;
  private com.google.protobuf.MapField<java.lang.String, java.lang.String>
  internalGetLabels() {
    if (labels_ == null) {
      return com.google.protobuf.MapField.emptyMapField(
          LabelsDefaultEntryHolder.defaultEntry);
    }
    return labels_;
  }

  public int getLabelsCount() {
    return internalGetLabels().getMap().size();
  }
  /**
   * <pre>
   * Optional labels to add to the pod definition.
   * </pre>
   *
   * <code>map&lt;string, string&gt; labels = 1 [json_name = "labels"];</code>
   */

  @java.lang.Override
  public boolean containsLabels(
      java.lang.String key) {
    if (key == null) { throw new NullPointerException("map key"); }
    return internalGetLabels().getMap().containsKey(key);
  }
  /**
   * Use {@link #getLabelsMap()} instead.
   */
  @java.lang.Override
  @java.lang.Deprecated
  public java.util.Map<java.lang.String, java.lang.String> getLabels() {
    return getLabelsMap();
  }
  /**
   * <pre>
   * Optional labels to add to the pod definition.
   * </pre>
   *
   * <code>map&lt;string, string&gt; labels = 1 [json_name = "labels"];</code>
   */
  @java.lang.Override

  public java.util.Map<java.lang.String, java.lang.String> getLabelsMap() {
    return internalGetLabels().getMap();
  }
  /**
   * <pre>
   * Optional labels to add to the pod definition.
   * </pre>
   *
   * <code>map&lt;string, string&gt; labels = 1 [json_name = "labels"];</code>
   */
  @java.lang.Override

  public java.lang.String getLabelsOrDefault(
      java.lang.String key,
      java.lang.String defaultValue) {
    if (key == null) { throw new NullPointerException("map key"); }
    java.util.Map<java.lang.String, java.lang.String> map =
        internalGetLabels().getMap();
    return map.containsKey(key) ? map.get(key) : defaultValue;
  }
  /**
   * <pre>
   * Optional labels to add to the pod definition.
   * </pre>
   *
   * <code>map&lt;string, string&gt; labels = 1 [json_name = "labels"];</code>
   */
  @java.lang.Override

  public java.lang.String getLabelsOrThrow(
      java.lang.String key) {
    if (key == null) { throw new NullPointerException("map key"); }
    java.util.Map<java.lang.String, java.lang.String> map =
        internalGetLabels().getMap();
    if (!map.containsKey(key)) {
      throw new java.lang.IllegalArgumentException();
    }
    return map.get(key);
  }

  public static final int ANNOTATIONS_FIELD_NUMBER = 2;
  private static final class AnnotationsDefaultEntryHolder {
    static final com.google.protobuf.MapEntry<
        java.lang.String, java.lang.String> defaultEntry =
            com.google.protobuf.MapEntry
            .<java.lang.String, java.lang.String>newDefaultInstance(
                com.flyteidl.core.TasksProto.internal_static_flyteidl_core_K8sObjectMetadata_AnnotationsEntry_descriptor, 
                com.google.protobuf.WireFormat.FieldType.STRING,
                "",
                com.google.protobuf.WireFormat.FieldType.STRING,
                "");
  }
  private com.google.protobuf.MapField<
      java.lang.String, java.lang.String> annotations_;
  private com.google.protobuf.MapField<java.lang.String, java.lang.String>
  internalGetAnnotations() {
    if (annotations_ == null) {
      return com.google.protobuf.MapField.emptyMapField(
          AnnotationsDefaultEntryHolder.defaultEntry);
    }
    return annotations_;
  }

  public int getAnnotationsCount() {
    return internalGetAnnotations().getMap().size();
  }
  /**
   * <pre>
   * Optional annotations to add to the pod definition.
   * </pre>
   *
   * <code>map&lt;string, string&gt; annotations = 2 [json_name = "annotations"];</code>
   */

  @java.lang.Override
  public boolean containsAnnotations(
      java.lang.String key) {
    if (key == null) { throw new NullPointerException("map key"); }
    return internalGetAnnotations().getMap().containsKey(key);
  }
  /**
   * Use {@link #getAnnotationsMap()} instead.
   */
  @java.lang.Override
  @java.lang.Deprecated
  public java.util.Map<java.lang.String, java.lang.String> getAnnotations() {
    return getAnnotationsMap();
  }
  /**
   * <pre>
   * Optional annotations to add to the pod definition.
   * </pre>
   *
   * <code>map&lt;string, string&gt; annotations = 2 [json_name = "annotations"];</code>
   */
  @java.lang.Override

  public java.util.Map<java.lang.String, java.lang.String> getAnnotationsMap() {
    return internalGetAnnotations().getMap();
  }
  /**
   * <pre>
   * Optional annotations to add to the pod definition.
   * </pre>
   *
   * <code>map&lt;string, string&gt; annotations = 2 [json_name = "annotations"];</code>
   */
  @java.lang.Override

  public java.lang.String getAnnotationsOrDefault(
      java.lang.String key,
      java.lang.String defaultValue) {
    if (key == null) { throw new NullPointerException("map key"); }
    java.util.Map<java.lang.String, java.lang.String> map =
        internalGetAnnotations().getMap();
    return map.containsKey(key) ? map.get(key) : defaultValue;
  }
  /**
   * <pre>
   * Optional annotations to add to the pod definition.
   * </pre>
   *
   * <code>map&lt;string, string&gt; annotations = 2 [json_name = "annotations"];</code>
   */
  @java.lang.Override

  public java.lang.String getAnnotationsOrThrow(
      java.lang.String key) {
    if (key == null) { throw new NullPointerException("map key"); }
    java.util.Map<java.lang.String, java.lang.String> map =
        internalGetAnnotations().getMap();
    if (!map.containsKey(key)) {
      throw new java.lang.IllegalArgumentException();
    }
    return map.get(key);
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
    com.google.protobuf.GeneratedMessageV3
      .serializeStringMapTo(
        output,
        internalGetLabels(),
        LabelsDefaultEntryHolder.defaultEntry,
        1);
    com.google.protobuf.GeneratedMessageV3
      .serializeStringMapTo(
        output,
        internalGetAnnotations(),
        AnnotationsDefaultEntryHolder.defaultEntry,
        2);
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    for (java.util.Map.Entry<java.lang.String, java.lang.String> entry
         : internalGetLabels().getMap().entrySet()) {
      com.google.protobuf.MapEntry<java.lang.String, java.lang.String>
      labels__ = LabelsDefaultEntryHolder.defaultEntry.newBuilderForType()
          .setKey(entry.getKey())
          .setValue(entry.getValue())
          .build();
      size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(1, labels__);
    }
    for (java.util.Map.Entry<java.lang.String, java.lang.String> entry
         : internalGetAnnotations().getMap().entrySet()) {
      com.google.protobuf.MapEntry<java.lang.String, java.lang.String>
      annotations__ = AnnotationsDefaultEntryHolder.defaultEntry.newBuilderForType()
          .setKey(entry.getKey())
          .setValue(entry.getValue())
          .build();
      size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(2, annotations__);
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
    if (!(obj instanceof com.flyteidl.core.K8sObjectMetadata)) {
      return super.equals(obj);
    }
    com.flyteidl.core.K8sObjectMetadata other = (com.flyteidl.core.K8sObjectMetadata) obj;

    if (!internalGetLabels().equals(
        other.internalGetLabels())) return false;
    if (!internalGetAnnotations().equals(
        other.internalGetAnnotations())) return false;
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
    if (!internalGetLabels().getMap().isEmpty()) {
      hash = (37 * hash) + LABELS_FIELD_NUMBER;
      hash = (53 * hash) + internalGetLabels().hashCode();
    }
    if (!internalGetAnnotations().getMap().isEmpty()) {
      hash = (37 * hash) + ANNOTATIONS_FIELD_NUMBER;
      hash = (53 * hash) + internalGetAnnotations().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.flyteidl.core.K8sObjectMetadata parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.core.K8sObjectMetadata parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.core.K8sObjectMetadata parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.core.K8sObjectMetadata parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.core.K8sObjectMetadata parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.core.K8sObjectMetadata parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.core.K8sObjectMetadata parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.core.K8sObjectMetadata parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.core.K8sObjectMetadata parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.flyteidl.core.K8sObjectMetadata parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.core.K8sObjectMetadata parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.core.K8sObjectMetadata parseFrom(
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
  public static Builder newBuilder(com.flyteidl.core.K8sObjectMetadata prototype) {
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
   * Metadata for building a kubernetes object when a task is executed.
   * </pre>
   *
   * Protobuf type {@code flyteidl.core.K8sObjectMetadata}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:flyteidl.core.K8sObjectMetadata)
      com.flyteidl.core.K8sObjectMetadataOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.flyteidl.core.TasksProto.internal_static_flyteidl_core_K8sObjectMetadata_descriptor;
    }

    @SuppressWarnings({"rawtypes"})
    protected com.google.protobuf.MapField internalGetMapField(
        int number) {
      switch (number) {
        case 1:
          return internalGetLabels();
        case 2:
          return internalGetAnnotations();
        default:
          throw new RuntimeException(
              "Invalid map field number: " + number);
      }
    }
    @SuppressWarnings({"rawtypes"})
    protected com.google.protobuf.MapField internalGetMutableMapField(
        int number) {
      switch (number) {
        case 1:
          return internalGetMutableLabels();
        case 2:
          return internalGetMutableAnnotations();
        default:
          throw new RuntimeException(
              "Invalid map field number: " + number);
      }
    }
    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.flyteidl.core.TasksProto.internal_static_flyteidl_core_K8sObjectMetadata_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.flyteidl.core.K8sObjectMetadata.class, com.flyteidl.core.K8sObjectMetadata.Builder.class);
    }

    // Construct using com.flyteidl.core.K8sObjectMetadata.newBuilder()
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
      internalGetMutableLabels().clear();
      internalGetMutableAnnotations().clear();
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.flyteidl.core.TasksProto.internal_static_flyteidl_core_K8sObjectMetadata_descriptor;
    }

    @java.lang.Override
    public com.flyteidl.core.K8sObjectMetadata getDefaultInstanceForType() {
      return com.flyteidl.core.K8sObjectMetadata.getDefaultInstance();
    }

    @java.lang.Override
    public com.flyteidl.core.K8sObjectMetadata build() {
      com.flyteidl.core.K8sObjectMetadata result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.flyteidl.core.K8sObjectMetadata buildPartial() {
      com.flyteidl.core.K8sObjectMetadata result = new com.flyteidl.core.K8sObjectMetadata(this);
      int from_bitField0_ = bitField0_;
      result.labels_ = internalGetLabels();
      result.labels_.makeImmutable();
      result.annotations_ = internalGetAnnotations();
      result.annotations_.makeImmutable();
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
      if (other instanceof com.flyteidl.core.K8sObjectMetadata) {
        return mergeFrom((com.flyteidl.core.K8sObjectMetadata)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.flyteidl.core.K8sObjectMetadata other) {
      if (other == com.flyteidl.core.K8sObjectMetadata.getDefaultInstance()) return this;
      internalGetMutableLabels().mergeFrom(
          other.internalGetLabels());
      internalGetMutableAnnotations().mergeFrom(
          other.internalGetAnnotations());
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
      com.flyteidl.core.K8sObjectMetadata parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.flyteidl.core.K8sObjectMetadata) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }
    private int bitField0_;

    private com.google.protobuf.MapField<
        java.lang.String, java.lang.String> labels_;
    private com.google.protobuf.MapField<java.lang.String, java.lang.String>
    internalGetLabels() {
      if (labels_ == null) {
        return com.google.protobuf.MapField.emptyMapField(
            LabelsDefaultEntryHolder.defaultEntry);
      }
      return labels_;
    }
    private com.google.protobuf.MapField<java.lang.String, java.lang.String>
    internalGetMutableLabels() {
      onChanged();;
      if (labels_ == null) {
        labels_ = com.google.protobuf.MapField.newMapField(
            LabelsDefaultEntryHolder.defaultEntry);
      }
      if (!labels_.isMutable()) {
        labels_ = labels_.copy();
      }
      return labels_;
    }

    public int getLabelsCount() {
      return internalGetLabels().getMap().size();
    }
    /**
     * <pre>
     * Optional labels to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; labels = 1 [json_name = "labels"];</code>
     */

    @java.lang.Override
    public boolean containsLabels(
        java.lang.String key) {
      if (key == null) { throw new NullPointerException("map key"); }
      return internalGetLabels().getMap().containsKey(key);
    }
    /**
     * Use {@link #getLabelsMap()} instead.
     */
    @java.lang.Override
    @java.lang.Deprecated
    public java.util.Map<java.lang.String, java.lang.String> getLabels() {
      return getLabelsMap();
    }
    /**
     * <pre>
     * Optional labels to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; labels = 1 [json_name = "labels"];</code>
     */
    @java.lang.Override

    public java.util.Map<java.lang.String, java.lang.String> getLabelsMap() {
      return internalGetLabels().getMap();
    }
    /**
     * <pre>
     * Optional labels to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; labels = 1 [json_name = "labels"];</code>
     */
    @java.lang.Override

    public java.lang.String getLabelsOrDefault(
        java.lang.String key,
        java.lang.String defaultValue) {
      if (key == null) { throw new NullPointerException("map key"); }
      java.util.Map<java.lang.String, java.lang.String> map =
          internalGetLabels().getMap();
      return map.containsKey(key) ? map.get(key) : defaultValue;
    }
    /**
     * <pre>
     * Optional labels to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; labels = 1 [json_name = "labels"];</code>
     */
    @java.lang.Override

    public java.lang.String getLabelsOrThrow(
        java.lang.String key) {
      if (key == null) { throw new NullPointerException("map key"); }
      java.util.Map<java.lang.String, java.lang.String> map =
          internalGetLabels().getMap();
      if (!map.containsKey(key)) {
        throw new java.lang.IllegalArgumentException();
      }
      return map.get(key);
    }

    public Builder clearLabels() {
      internalGetMutableLabels().getMutableMap()
          .clear();
      return this;
    }
    /**
     * <pre>
     * Optional labels to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; labels = 1 [json_name = "labels"];</code>
     */

    public Builder removeLabels(
        java.lang.String key) {
      if (key == null) { throw new NullPointerException("map key"); }
      internalGetMutableLabels().getMutableMap()
          .remove(key);
      return this;
    }
    /**
     * Use alternate mutation accessors instead.
     */
    @java.lang.Deprecated
    public java.util.Map<java.lang.String, java.lang.String>
    getMutableLabels() {
      return internalGetMutableLabels().getMutableMap();
    }
    /**
     * <pre>
     * Optional labels to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; labels = 1 [json_name = "labels"];</code>
     */
    public Builder putLabels(
        java.lang.String key,
        java.lang.String value) {
      if (key == null) { throw new NullPointerException("map key"); }
      if (value == null) {
  throw new NullPointerException("map value");
}

      internalGetMutableLabels().getMutableMap()
          .put(key, value);
      return this;
    }
    /**
     * <pre>
     * Optional labels to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; labels = 1 [json_name = "labels"];</code>
     */

    public Builder putAllLabels(
        java.util.Map<java.lang.String, java.lang.String> values) {
      internalGetMutableLabels().getMutableMap()
          .putAll(values);
      return this;
    }

    private com.google.protobuf.MapField<
        java.lang.String, java.lang.String> annotations_;
    private com.google.protobuf.MapField<java.lang.String, java.lang.String>
    internalGetAnnotations() {
      if (annotations_ == null) {
        return com.google.protobuf.MapField.emptyMapField(
            AnnotationsDefaultEntryHolder.defaultEntry);
      }
      return annotations_;
    }
    private com.google.protobuf.MapField<java.lang.String, java.lang.String>
    internalGetMutableAnnotations() {
      onChanged();;
      if (annotations_ == null) {
        annotations_ = com.google.protobuf.MapField.newMapField(
            AnnotationsDefaultEntryHolder.defaultEntry);
      }
      if (!annotations_.isMutable()) {
        annotations_ = annotations_.copy();
      }
      return annotations_;
    }

    public int getAnnotationsCount() {
      return internalGetAnnotations().getMap().size();
    }
    /**
     * <pre>
     * Optional annotations to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; annotations = 2 [json_name = "annotations"];</code>
     */

    @java.lang.Override
    public boolean containsAnnotations(
        java.lang.String key) {
      if (key == null) { throw new NullPointerException("map key"); }
      return internalGetAnnotations().getMap().containsKey(key);
    }
    /**
     * Use {@link #getAnnotationsMap()} instead.
     */
    @java.lang.Override
    @java.lang.Deprecated
    public java.util.Map<java.lang.String, java.lang.String> getAnnotations() {
      return getAnnotationsMap();
    }
    /**
     * <pre>
     * Optional annotations to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; annotations = 2 [json_name = "annotations"];</code>
     */
    @java.lang.Override

    public java.util.Map<java.lang.String, java.lang.String> getAnnotationsMap() {
      return internalGetAnnotations().getMap();
    }
    /**
     * <pre>
     * Optional annotations to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; annotations = 2 [json_name = "annotations"];</code>
     */
    @java.lang.Override

    public java.lang.String getAnnotationsOrDefault(
        java.lang.String key,
        java.lang.String defaultValue) {
      if (key == null) { throw new NullPointerException("map key"); }
      java.util.Map<java.lang.String, java.lang.String> map =
          internalGetAnnotations().getMap();
      return map.containsKey(key) ? map.get(key) : defaultValue;
    }
    /**
     * <pre>
     * Optional annotations to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; annotations = 2 [json_name = "annotations"];</code>
     */
    @java.lang.Override

    public java.lang.String getAnnotationsOrThrow(
        java.lang.String key) {
      if (key == null) { throw new NullPointerException("map key"); }
      java.util.Map<java.lang.String, java.lang.String> map =
          internalGetAnnotations().getMap();
      if (!map.containsKey(key)) {
        throw new java.lang.IllegalArgumentException();
      }
      return map.get(key);
    }

    public Builder clearAnnotations() {
      internalGetMutableAnnotations().getMutableMap()
          .clear();
      return this;
    }
    /**
     * <pre>
     * Optional annotations to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; annotations = 2 [json_name = "annotations"];</code>
     */

    public Builder removeAnnotations(
        java.lang.String key) {
      if (key == null) { throw new NullPointerException("map key"); }
      internalGetMutableAnnotations().getMutableMap()
          .remove(key);
      return this;
    }
    /**
     * Use alternate mutation accessors instead.
     */
    @java.lang.Deprecated
    public java.util.Map<java.lang.String, java.lang.String>
    getMutableAnnotations() {
      return internalGetMutableAnnotations().getMutableMap();
    }
    /**
     * <pre>
     * Optional annotations to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; annotations = 2 [json_name = "annotations"];</code>
     */
    public Builder putAnnotations(
        java.lang.String key,
        java.lang.String value) {
      if (key == null) { throw new NullPointerException("map key"); }
      if (value == null) {
  throw new NullPointerException("map value");
}

      internalGetMutableAnnotations().getMutableMap()
          .put(key, value);
      return this;
    }
    /**
     * <pre>
     * Optional annotations to add to the pod definition.
     * </pre>
     *
     * <code>map&lt;string, string&gt; annotations = 2 [json_name = "annotations"];</code>
     */

    public Builder putAllAnnotations(
        java.util.Map<java.lang.String, java.lang.String> values) {
      internalGetMutableAnnotations().getMutableMap()
          .putAll(values);
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


    // @@protoc_insertion_point(builder_scope:flyteidl.core.K8sObjectMetadata)
  }

  // @@protoc_insertion_point(class_scope:flyteidl.core.K8sObjectMetadata)
  private static final com.flyteidl.core.K8sObjectMetadata DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.flyteidl.core.K8sObjectMetadata();
  }

  public static com.flyteidl.core.K8sObjectMetadata getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<K8sObjectMetadata>
      PARSER = new com.google.protobuf.AbstractParser<K8sObjectMetadata>() {
    @java.lang.Override
    public K8sObjectMetadata parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new K8sObjectMetadata(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<K8sObjectMetadata> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<K8sObjectMetadata> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.flyteidl.core.K8sObjectMetadata getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

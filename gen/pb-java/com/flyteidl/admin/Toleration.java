// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/admin/cluster_assignment.proto

package com.flyteidl.admin;

/**
 * <pre>
 * Defines a set of specific label selectors that the execution can tolerate on a cluster.
 * </pre>
 *
 * Protobuf type {@code flyteidl.admin.Toleration}
 */
public final class Toleration extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:flyteidl.admin.Toleration)
    TolerationOrBuilder {
private static final long serialVersionUID = 0L;
  // Use Toleration.newBuilder() to construct.
  private Toleration(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private Toleration() {
    selectors_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new Toleration();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private Toleration(
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
              selectors_ = new java.util.ArrayList<com.flyteidl.admin.Selector>();
              mutable_bitField0_ |= 0x00000001;
            }
            selectors_.add(
                input.readMessage(com.flyteidl.admin.Selector.parser(), extensionRegistry));
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
      if (((mutable_bitField0_ & 0x00000001) != 0)) {
        selectors_ = java.util.Collections.unmodifiableList(selectors_);
      }
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.flyteidl.admin.ClusterAssignmentProto.internal_static_flyteidl_admin_Toleration_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.flyteidl.admin.ClusterAssignmentProto.internal_static_flyteidl_admin_Toleration_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.flyteidl.admin.Toleration.class, com.flyteidl.admin.Toleration.Builder.class);
  }

  public static final int SELECTORS_FIELD_NUMBER = 1;
  private java.util.List<com.flyteidl.admin.Selector> selectors_;
  /**
   * <pre>
   * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
   */
  @java.lang.Override
  public java.util.List<com.flyteidl.admin.Selector> getSelectorsList() {
    return selectors_;
  }
  /**
   * <pre>
   * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
   */
  @java.lang.Override
  public java.util.List<? extends com.flyteidl.admin.SelectorOrBuilder> 
      getSelectorsOrBuilderList() {
    return selectors_;
  }
  /**
   * <pre>
   * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
   */
  @java.lang.Override
  public int getSelectorsCount() {
    return selectors_.size();
  }
  /**
   * <pre>
   * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
   */
  @java.lang.Override
  public com.flyteidl.admin.Selector getSelectors(int index) {
    return selectors_.get(index);
  }
  /**
   * <pre>
   * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
   */
  @java.lang.Override
  public com.flyteidl.admin.SelectorOrBuilder getSelectorsOrBuilder(
      int index) {
    return selectors_.get(index);
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
    for (int i = 0; i < selectors_.size(); i++) {
      output.writeMessage(1, selectors_.get(i));
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    for (int i = 0; i < selectors_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, selectors_.get(i));
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
    if (!(obj instanceof com.flyteidl.admin.Toleration)) {
      return super.equals(obj);
    }
    com.flyteidl.admin.Toleration other = (com.flyteidl.admin.Toleration) obj;

    if (!getSelectorsList()
        .equals(other.getSelectorsList())) return false;
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
    if (getSelectorsCount() > 0) {
      hash = (37 * hash) + SELECTORS_FIELD_NUMBER;
      hash = (53 * hash) + getSelectorsList().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.flyteidl.admin.Toleration parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.admin.Toleration parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.admin.Toleration parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.admin.Toleration parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.admin.Toleration parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.admin.Toleration parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.admin.Toleration parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.admin.Toleration parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.admin.Toleration parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.flyteidl.admin.Toleration parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.admin.Toleration parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.admin.Toleration parseFrom(
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
  public static Builder newBuilder(com.flyteidl.admin.Toleration prototype) {
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
   * Defines a set of specific label selectors that the execution can tolerate on a cluster.
   * </pre>
   *
   * Protobuf type {@code flyteidl.admin.Toleration}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:flyteidl.admin.Toleration)
      com.flyteidl.admin.TolerationOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.flyteidl.admin.ClusterAssignmentProto.internal_static_flyteidl_admin_Toleration_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.flyteidl.admin.ClusterAssignmentProto.internal_static_flyteidl_admin_Toleration_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.flyteidl.admin.Toleration.class, com.flyteidl.admin.Toleration.Builder.class);
    }

    // Construct using com.flyteidl.admin.Toleration.newBuilder()
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
        getSelectorsFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      if (selectorsBuilder_ == null) {
        selectors_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
      } else {
        selectorsBuilder_.clear();
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.flyteidl.admin.ClusterAssignmentProto.internal_static_flyteidl_admin_Toleration_descriptor;
    }

    @java.lang.Override
    public com.flyteidl.admin.Toleration getDefaultInstanceForType() {
      return com.flyteidl.admin.Toleration.getDefaultInstance();
    }

    @java.lang.Override
    public com.flyteidl.admin.Toleration build() {
      com.flyteidl.admin.Toleration result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.flyteidl.admin.Toleration buildPartial() {
      com.flyteidl.admin.Toleration result = new com.flyteidl.admin.Toleration(this);
      int from_bitField0_ = bitField0_;
      if (selectorsBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0)) {
          selectors_ = java.util.Collections.unmodifiableList(selectors_);
          bitField0_ = (bitField0_ & ~0x00000001);
        }
        result.selectors_ = selectors_;
      } else {
        result.selectors_ = selectorsBuilder_.build();
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
      if (other instanceof com.flyteidl.admin.Toleration) {
        return mergeFrom((com.flyteidl.admin.Toleration)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.flyteidl.admin.Toleration other) {
      if (other == com.flyteidl.admin.Toleration.getDefaultInstance()) return this;
      if (selectorsBuilder_ == null) {
        if (!other.selectors_.isEmpty()) {
          if (selectors_.isEmpty()) {
            selectors_ = other.selectors_;
            bitField0_ = (bitField0_ & ~0x00000001);
          } else {
            ensureSelectorsIsMutable();
            selectors_.addAll(other.selectors_);
          }
          onChanged();
        }
      } else {
        if (!other.selectors_.isEmpty()) {
          if (selectorsBuilder_.isEmpty()) {
            selectorsBuilder_.dispose();
            selectorsBuilder_ = null;
            selectors_ = other.selectors_;
            bitField0_ = (bitField0_ & ~0x00000001);
            selectorsBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getSelectorsFieldBuilder() : null;
          } else {
            selectorsBuilder_.addAllMessages(other.selectors_);
          }
        }
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
      com.flyteidl.admin.Toleration parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.flyteidl.admin.Toleration) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }
    private int bitField0_;

    private java.util.List<com.flyteidl.admin.Selector> selectors_ =
      java.util.Collections.emptyList();
    private void ensureSelectorsIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        selectors_ = new java.util.ArrayList<com.flyteidl.admin.Selector>(selectors_);
        bitField0_ |= 0x00000001;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        com.flyteidl.admin.Selector, com.flyteidl.admin.Selector.Builder, com.flyteidl.admin.SelectorOrBuilder> selectorsBuilder_;

    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public java.util.List<com.flyteidl.admin.Selector> getSelectorsList() {
      if (selectorsBuilder_ == null) {
        return java.util.Collections.unmodifiableList(selectors_);
      } else {
        return selectorsBuilder_.getMessageList();
      }
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public int getSelectorsCount() {
      if (selectorsBuilder_ == null) {
        return selectors_.size();
      } else {
        return selectorsBuilder_.getCount();
      }
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public com.flyteidl.admin.Selector getSelectors(int index) {
      if (selectorsBuilder_ == null) {
        return selectors_.get(index);
      } else {
        return selectorsBuilder_.getMessage(index);
      }
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public Builder setSelectors(
        int index, com.flyteidl.admin.Selector value) {
      if (selectorsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureSelectorsIsMutable();
        selectors_.set(index, value);
        onChanged();
      } else {
        selectorsBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public Builder setSelectors(
        int index, com.flyteidl.admin.Selector.Builder builderForValue) {
      if (selectorsBuilder_ == null) {
        ensureSelectorsIsMutable();
        selectors_.set(index, builderForValue.build());
        onChanged();
      } else {
        selectorsBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public Builder addSelectors(com.flyteidl.admin.Selector value) {
      if (selectorsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureSelectorsIsMutable();
        selectors_.add(value);
        onChanged();
      } else {
        selectorsBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public Builder addSelectors(
        int index, com.flyteidl.admin.Selector value) {
      if (selectorsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureSelectorsIsMutable();
        selectors_.add(index, value);
        onChanged();
      } else {
        selectorsBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public Builder addSelectors(
        com.flyteidl.admin.Selector.Builder builderForValue) {
      if (selectorsBuilder_ == null) {
        ensureSelectorsIsMutable();
        selectors_.add(builderForValue.build());
        onChanged();
      } else {
        selectorsBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public Builder addSelectors(
        int index, com.flyteidl.admin.Selector.Builder builderForValue) {
      if (selectorsBuilder_ == null) {
        ensureSelectorsIsMutable();
        selectors_.add(index, builderForValue.build());
        onChanged();
      } else {
        selectorsBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public Builder addAllSelectors(
        java.lang.Iterable<? extends com.flyteidl.admin.Selector> values) {
      if (selectorsBuilder_ == null) {
        ensureSelectorsIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, selectors_);
        onChanged();
      } else {
        selectorsBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public Builder clearSelectors() {
      if (selectorsBuilder_ == null) {
        selectors_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
        onChanged();
      } else {
        selectorsBuilder_.clear();
      }
      return this;
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public Builder removeSelectors(int index) {
      if (selectorsBuilder_ == null) {
        ensureSelectorsIsMutable();
        selectors_.remove(index);
        onChanged();
      } else {
        selectorsBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public com.flyteidl.admin.Selector.Builder getSelectorsBuilder(
        int index) {
      return getSelectorsFieldBuilder().getBuilder(index);
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public com.flyteidl.admin.SelectorOrBuilder getSelectorsOrBuilder(
        int index) {
      if (selectorsBuilder_ == null) {
        return selectors_.get(index);  } else {
        return selectorsBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public java.util.List<? extends com.flyteidl.admin.SelectorOrBuilder> 
         getSelectorsOrBuilderList() {
      if (selectorsBuilder_ != null) {
        return selectorsBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(selectors_);
      }
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public com.flyteidl.admin.Selector.Builder addSelectorsBuilder() {
      return getSelectorsFieldBuilder().addBuilder(
          com.flyteidl.admin.Selector.getDefaultInstance());
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public com.flyteidl.admin.Selector.Builder addSelectorsBuilder(
        int index) {
      return getSelectorsFieldBuilder().addBuilder(
          index, com.flyteidl.admin.Selector.getDefaultInstance());
    }
    /**
     * <pre>
     * A toleration selector is similar to that of an affinity but the only valid operators are EQUALS AND EXISTS.
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Selector selectors = 1 [json_name = "selectors"];</code>
     */
    public java.util.List<com.flyteidl.admin.Selector.Builder> 
         getSelectorsBuilderList() {
      return getSelectorsFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        com.flyteidl.admin.Selector, com.flyteidl.admin.Selector.Builder, com.flyteidl.admin.SelectorOrBuilder> 
        getSelectorsFieldBuilder() {
      if (selectorsBuilder_ == null) {
        selectorsBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            com.flyteidl.admin.Selector, com.flyteidl.admin.Selector.Builder, com.flyteidl.admin.SelectorOrBuilder>(
                selectors_,
                ((bitField0_ & 0x00000001) != 0),
                getParentForChildren(),
                isClean());
        selectors_ = null;
      }
      return selectorsBuilder_;
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


    // @@protoc_insertion_point(builder_scope:flyteidl.admin.Toleration)
  }

  // @@protoc_insertion_point(class_scope:flyteidl.admin.Toleration)
  private static final com.flyteidl.admin.Toleration DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.flyteidl.admin.Toleration();
  }

  public static com.flyteidl.admin.Toleration getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<Toleration>
      PARSER = new com.google.protobuf.AbstractParser<Toleration>() {
    @java.lang.Override
    public Toleration parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new Toleration(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<Toleration> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<Toleration> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.flyteidl.admin.Toleration getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/admin/launch_plan.proto

package com.flyteidl.admin;

/**
 * <pre>
 * Additional launch plan attributes included in the LaunchPlanSpec not strictly required to launch
 * the reference workflow.
 * </pre>
 *
 * Protobuf type {@code flyteidl.admin.LaunchPlanMetadata}
 */
public final class LaunchPlanMetadata extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:flyteidl.admin.LaunchPlanMetadata)
    LaunchPlanMetadataOrBuilder {
private static final long serialVersionUID = 0L;
  // Use LaunchPlanMetadata.newBuilder() to construct.
  private LaunchPlanMetadata(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private LaunchPlanMetadata() {
    notifications_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new LaunchPlanMetadata();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private LaunchPlanMetadata(
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
            com.flyteidl.admin.Schedule.Builder subBuilder = null;
            if (schedule_ != null) {
              subBuilder = schedule_.toBuilder();
            }
            schedule_ = input.readMessage(com.flyteidl.admin.Schedule.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(schedule_);
              schedule_ = subBuilder.buildPartial();
            }

            break;
          }
          case 18: {
            if (!((mutable_bitField0_ & 0x00000001) != 0)) {
              notifications_ = new java.util.ArrayList<com.flyteidl.admin.Notification>();
              mutable_bitField0_ |= 0x00000001;
            }
            notifications_.add(
                input.readMessage(com.flyteidl.admin.Notification.parser(), extensionRegistry));
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
        notifications_ = java.util.Collections.unmodifiableList(notifications_);
      }
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return com.flyteidl.admin.LaunchPlanProto.internal_static_flyteidl_admin_LaunchPlanMetadata_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return com.flyteidl.admin.LaunchPlanProto.internal_static_flyteidl_admin_LaunchPlanMetadata_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            com.flyteidl.admin.LaunchPlanMetadata.class, com.flyteidl.admin.LaunchPlanMetadata.Builder.class);
  }

  public static final int SCHEDULE_FIELD_NUMBER = 1;
  private com.flyteidl.admin.Schedule schedule_;
  /**
   * <pre>
   * Schedule to execute the Launch Plan
   * </pre>
   *
   * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
   * @return Whether the schedule field is set.
   */
  @java.lang.Override
  public boolean hasSchedule() {
    return schedule_ != null;
  }
  /**
   * <pre>
   * Schedule to execute the Launch Plan
   * </pre>
   *
   * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
   * @return The schedule.
   */
  @java.lang.Override
  public com.flyteidl.admin.Schedule getSchedule() {
    return schedule_ == null ? com.flyteidl.admin.Schedule.getDefaultInstance() : schedule_;
  }
  /**
   * <pre>
   * Schedule to execute the Launch Plan
   * </pre>
   *
   * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
   */
  @java.lang.Override
  public com.flyteidl.admin.ScheduleOrBuilder getScheduleOrBuilder() {
    return getSchedule();
  }

  public static final int NOTIFICATIONS_FIELD_NUMBER = 2;
  private java.util.List<com.flyteidl.admin.Notification> notifications_;
  /**
   * <pre>
   * List of notifications based on Execution status transitions
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
   */
  @java.lang.Override
  public java.util.List<com.flyteidl.admin.Notification> getNotificationsList() {
    return notifications_;
  }
  /**
   * <pre>
   * List of notifications based on Execution status transitions
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
   */
  @java.lang.Override
  public java.util.List<? extends com.flyteidl.admin.NotificationOrBuilder> 
      getNotificationsOrBuilderList() {
    return notifications_;
  }
  /**
   * <pre>
   * List of notifications based on Execution status transitions
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
   */
  @java.lang.Override
  public int getNotificationsCount() {
    return notifications_.size();
  }
  /**
   * <pre>
   * List of notifications based on Execution status transitions
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
   */
  @java.lang.Override
  public com.flyteidl.admin.Notification getNotifications(int index) {
    return notifications_.get(index);
  }
  /**
   * <pre>
   * List of notifications based on Execution status transitions
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
   */
  @java.lang.Override
  public com.flyteidl.admin.NotificationOrBuilder getNotificationsOrBuilder(
      int index) {
    return notifications_.get(index);
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
    if (schedule_ != null) {
      output.writeMessage(1, getSchedule());
    }
    for (int i = 0; i < notifications_.size(); i++) {
      output.writeMessage(2, notifications_.get(i));
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (schedule_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getSchedule());
    }
    for (int i = 0; i < notifications_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, notifications_.get(i));
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
    if (!(obj instanceof com.flyteidl.admin.LaunchPlanMetadata)) {
      return super.equals(obj);
    }
    com.flyteidl.admin.LaunchPlanMetadata other = (com.flyteidl.admin.LaunchPlanMetadata) obj;

    if (hasSchedule() != other.hasSchedule()) return false;
    if (hasSchedule()) {
      if (!getSchedule()
          .equals(other.getSchedule())) return false;
    }
    if (!getNotificationsList()
        .equals(other.getNotificationsList())) return false;
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
    if (hasSchedule()) {
      hash = (37 * hash) + SCHEDULE_FIELD_NUMBER;
      hash = (53 * hash) + getSchedule().hashCode();
    }
    if (getNotificationsCount() > 0) {
      hash = (37 * hash) + NOTIFICATIONS_FIELD_NUMBER;
      hash = (53 * hash) + getNotificationsList().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static com.flyteidl.admin.LaunchPlanMetadata parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.admin.LaunchPlanMetadata parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.admin.LaunchPlanMetadata parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.admin.LaunchPlanMetadata parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.admin.LaunchPlanMetadata parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static com.flyteidl.admin.LaunchPlanMetadata parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static com.flyteidl.admin.LaunchPlanMetadata parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.admin.LaunchPlanMetadata parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.admin.LaunchPlanMetadata parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static com.flyteidl.admin.LaunchPlanMetadata parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static com.flyteidl.admin.LaunchPlanMetadata parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static com.flyteidl.admin.LaunchPlanMetadata parseFrom(
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
  public static Builder newBuilder(com.flyteidl.admin.LaunchPlanMetadata prototype) {
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
   * Additional launch plan attributes included in the LaunchPlanSpec not strictly required to launch
   * the reference workflow.
   * </pre>
   *
   * Protobuf type {@code flyteidl.admin.LaunchPlanMetadata}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:flyteidl.admin.LaunchPlanMetadata)
      com.flyteidl.admin.LaunchPlanMetadataOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.flyteidl.admin.LaunchPlanProto.internal_static_flyteidl_admin_LaunchPlanMetadata_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.flyteidl.admin.LaunchPlanProto.internal_static_flyteidl_admin_LaunchPlanMetadata_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.flyteidl.admin.LaunchPlanMetadata.class, com.flyteidl.admin.LaunchPlanMetadata.Builder.class);
    }

    // Construct using com.flyteidl.admin.LaunchPlanMetadata.newBuilder()
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
        getNotificationsFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      if (scheduleBuilder_ == null) {
        schedule_ = null;
      } else {
        schedule_ = null;
        scheduleBuilder_ = null;
      }
      if (notificationsBuilder_ == null) {
        notifications_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
      } else {
        notificationsBuilder_.clear();
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return com.flyteidl.admin.LaunchPlanProto.internal_static_flyteidl_admin_LaunchPlanMetadata_descriptor;
    }

    @java.lang.Override
    public com.flyteidl.admin.LaunchPlanMetadata getDefaultInstanceForType() {
      return com.flyteidl.admin.LaunchPlanMetadata.getDefaultInstance();
    }

    @java.lang.Override
    public com.flyteidl.admin.LaunchPlanMetadata build() {
      com.flyteidl.admin.LaunchPlanMetadata result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public com.flyteidl.admin.LaunchPlanMetadata buildPartial() {
      com.flyteidl.admin.LaunchPlanMetadata result = new com.flyteidl.admin.LaunchPlanMetadata(this);
      int from_bitField0_ = bitField0_;
      if (scheduleBuilder_ == null) {
        result.schedule_ = schedule_;
      } else {
        result.schedule_ = scheduleBuilder_.build();
      }
      if (notificationsBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0)) {
          notifications_ = java.util.Collections.unmodifiableList(notifications_);
          bitField0_ = (bitField0_ & ~0x00000001);
        }
        result.notifications_ = notifications_;
      } else {
        result.notifications_ = notificationsBuilder_.build();
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
      if (other instanceof com.flyteidl.admin.LaunchPlanMetadata) {
        return mergeFrom((com.flyteidl.admin.LaunchPlanMetadata)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(com.flyteidl.admin.LaunchPlanMetadata other) {
      if (other == com.flyteidl.admin.LaunchPlanMetadata.getDefaultInstance()) return this;
      if (other.hasSchedule()) {
        mergeSchedule(other.getSchedule());
      }
      if (notificationsBuilder_ == null) {
        if (!other.notifications_.isEmpty()) {
          if (notifications_.isEmpty()) {
            notifications_ = other.notifications_;
            bitField0_ = (bitField0_ & ~0x00000001);
          } else {
            ensureNotificationsIsMutable();
            notifications_.addAll(other.notifications_);
          }
          onChanged();
        }
      } else {
        if (!other.notifications_.isEmpty()) {
          if (notificationsBuilder_.isEmpty()) {
            notificationsBuilder_.dispose();
            notificationsBuilder_ = null;
            notifications_ = other.notifications_;
            bitField0_ = (bitField0_ & ~0x00000001);
            notificationsBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getNotificationsFieldBuilder() : null;
          } else {
            notificationsBuilder_.addAllMessages(other.notifications_);
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
      com.flyteidl.admin.LaunchPlanMetadata parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (com.flyteidl.admin.LaunchPlanMetadata) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }
    private int bitField0_;

    private com.flyteidl.admin.Schedule schedule_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.flyteidl.admin.Schedule, com.flyteidl.admin.Schedule.Builder, com.flyteidl.admin.ScheduleOrBuilder> scheduleBuilder_;
    /**
     * <pre>
     * Schedule to execute the Launch Plan
     * </pre>
     *
     * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
     * @return Whether the schedule field is set.
     */
    public boolean hasSchedule() {
      return scheduleBuilder_ != null || schedule_ != null;
    }
    /**
     * <pre>
     * Schedule to execute the Launch Plan
     * </pre>
     *
     * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
     * @return The schedule.
     */
    public com.flyteidl.admin.Schedule getSchedule() {
      if (scheduleBuilder_ == null) {
        return schedule_ == null ? com.flyteidl.admin.Schedule.getDefaultInstance() : schedule_;
      } else {
        return scheduleBuilder_.getMessage();
      }
    }
    /**
     * <pre>
     * Schedule to execute the Launch Plan
     * </pre>
     *
     * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
     */
    public Builder setSchedule(com.flyteidl.admin.Schedule value) {
      if (scheduleBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        schedule_ = value;
        onChanged();
      } else {
        scheduleBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <pre>
     * Schedule to execute the Launch Plan
     * </pre>
     *
     * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
     */
    public Builder setSchedule(
        com.flyteidl.admin.Schedule.Builder builderForValue) {
      if (scheduleBuilder_ == null) {
        schedule_ = builderForValue.build();
        onChanged();
      } else {
        scheduleBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <pre>
     * Schedule to execute the Launch Plan
     * </pre>
     *
     * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
     */
    public Builder mergeSchedule(com.flyteidl.admin.Schedule value) {
      if (scheduleBuilder_ == null) {
        if (schedule_ != null) {
          schedule_ =
            com.flyteidl.admin.Schedule.newBuilder(schedule_).mergeFrom(value).buildPartial();
        } else {
          schedule_ = value;
        }
        onChanged();
      } else {
        scheduleBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <pre>
     * Schedule to execute the Launch Plan
     * </pre>
     *
     * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
     */
    public Builder clearSchedule() {
      if (scheduleBuilder_ == null) {
        schedule_ = null;
        onChanged();
      } else {
        schedule_ = null;
        scheduleBuilder_ = null;
      }

      return this;
    }
    /**
     * <pre>
     * Schedule to execute the Launch Plan
     * </pre>
     *
     * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
     */
    public com.flyteidl.admin.Schedule.Builder getScheduleBuilder() {
      
      onChanged();
      return getScheduleFieldBuilder().getBuilder();
    }
    /**
     * <pre>
     * Schedule to execute the Launch Plan
     * </pre>
     *
     * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
     */
    public com.flyteidl.admin.ScheduleOrBuilder getScheduleOrBuilder() {
      if (scheduleBuilder_ != null) {
        return scheduleBuilder_.getMessageOrBuilder();
      } else {
        return schedule_ == null ?
            com.flyteidl.admin.Schedule.getDefaultInstance() : schedule_;
      }
    }
    /**
     * <pre>
     * Schedule to execute the Launch Plan
     * </pre>
     *
     * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.flyteidl.admin.Schedule, com.flyteidl.admin.Schedule.Builder, com.flyteidl.admin.ScheduleOrBuilder> 
        getScheduleFieldBuilder() {
      if (scheduleBuilder_ == null) {
        scheduleBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.flyteidl.admin.Schedule, com.flyteidl.admin.Schedule.Builder, com.flyteidl.admin.ScheduleOrBuilder>(
                getSchedule(),
                getParentForChildren(),
                isClean());
        schedule_ = null;
      }
      return scheduleBuilder_;
    }

    private java.util.List<com.flyteidl.admin.Notification> notifications_ =
      java.util.Collections.emptyList();
    private void ensureNotificationsIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        notifications_ = new java.util.ArrayList<com.flyteidl.admin.Notification>(notifications_);
        bitField0_ |= 0x00000001;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
        com.flyteidl.admin.Notification, com.flyteidl.admin.Notification.Builder, com.flyteidl.admin.NotificationOrBuilder> notificationsBuilder_;

    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public java.util.List<com.flyteidl.admin.Notification> getNotificationsList() {
      if (notificationsBuilder_ == null) {
        return java.util.Collections.unmodifiableList(notifications_);
      } else {
        return notificationsBuilder_.getMessageList();
      }
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public int getNotificationsCount() {
      if (notificationsBuilder_ == null) {
        return notifications_.size();
      } else {
        return notificationsBuilder_.getCount();
      }
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public com.flyteidl.admin.Notification getNotifications(int index) {
      if (notificationsBuilder_ == null) {
        return notifications_.get(index);
      } else {
        return notificationsBuilder_.getMessage(index);
      }
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public Builder setNotifications(
        int index, com.flyteidl.admin.Notification value) {
      if (notificationsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureNotificationsIsMutable();
        notifications_.set(index, value);
        onChanged();
      } else {
        notificationsBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public Builder setNotifications(
        int index, com.flyteidl.admin.Notification.Builder builderForValue) {
      if (notificationsBuilder_ == null) {
        ensureNotificationsIsMutable();
        notifications_.set(index, builderForValue.build());
        onChanged();
      } else {
        notificationsBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public Builder addNotifications(com.flyteidl.admin.Notification value) {
      if (notificationsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureNotificationsIsMutable();
        notifications_.add(value);
        onChanged();
      } else {
        notificationsBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public Builder addNotifications(
        int index, com.flyteidl.admin.Notification value) {
      if (notificationsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureNotificationsIsMutable();
        notifications_.add(index, value);
        onChanged();
      } else {
        notificationsBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public Builder addNotifications(
        com.flyteidl.admin.Notification.Builder builderForValue) {
      if (notificationsBuilder_ == null) {
        ensureNotificationsIsMutable();
        notifications_.add(builderForValue.build());
        onChanged();
      } else {
        notificationsBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public Builder addNotifications(
        int index, com.flyteidl.admin.Notification.Builder builderForValue) {
      if (notificationsBuilder_ == null) {
        ensureNotificationsIsMutable();
        notifications_.add(index, builderForValue.build());
        onChanged();
      } else {
        notificationsBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public Builder addAllNotifications(
        java.lang.Iterable<? extends com.flyteidl.admin.Notification> values) {
      if (notificationsBuilder_ == null) {
        ensureNotificationsIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, notifications_);
        onChanged();
      } else {
        notificationsBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public Builder clearNotifications() {
      if (notificationsBuilder_ == null) {
        notifications_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
        onChanged();
      } else {
        notificationsBuilder_.clear();
      }
      return this;
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public Builder removeNotifications(int index) {
      if (notificationsBuilder_ == null) {
        ensureNotificationsIsMutable();
        notifications_.remove(index);
        onChanged();
      } else {
        notificationsBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public com.flyteidl.admin.Notification.Builder getNotificationsBuilder(
        int index) {
      return getNotificationsFieldBuilder().getBuilder(index);
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public com.flyteidl.admin.NotificationOrBuilder getNotificationsOrBuilder(
        int index) {
      if (notificationsBuilder_ == null) {
        return notifications_.get(index);  } else {
        return notificationsBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public java.util.List<? extends com.flyteidl.admin.NotificationOrBuilder> 
         getNotificationsOrBuilderList() {
      if (notificationsBuilder_ != null) {
        return notificationsBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(notifications_);
      }
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public com.flyteidl.admin.Notification.Builder addNotificationsBuilder() {
      return getNotificationsFieldBuilder().addBuilder(
          com.flyteidl.admin.Notification.getDefaultInstance());
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public com.flyteidl.admin.Notification.Builder addNotificationsBuilder(
        int index) {
      return getNotificationsFieldBuilder().addBuilder(
          index, com.flyteidl.admin.Notification.getDefaultInstance());
    }
    /**
     * <pre>
     * List of notifications based on Execution status transitions
     * </pre>
     *
     * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
     */
    public java.util.List<com.flyteidl.admin.Notification.Builder> 
         getNotificationsBuilderList() {
      return getNotificationsFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
        com.flyteidl.admin.Notification, com.flyteidl.admin.Notification.Builder, com.flyteidl.admin.NotificationOrBuilder> 
        getNotificationsFieldBuilder() {
      if (notificationsBuilder_ == null) {
        notificationsBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
            com.flyteidl.admin.Notification, com.flyteidl.admin.Notification.Builder, com.flyteidl.admin.NotificationOrBuilder>(
                notifications_,
                ((bitField0_ & 0x00000001) != 0),
                getParentForChildren(),
                isClean());
        notifications_ = null;
      }
      return notificationsBuilder_;
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


    // @@protoc_insertion_point(builder_scope:flyteidl.admin.LaunchPlanMetadata)
  }

  // @@protoc_insertion_point(class_scope:flyteidl.admin.LaunchPlanMetadata)
  private static final com.flyteidl.admin.LaunchPlanMetadata DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new com.flyteidl.admin.LaunchPlanMetadata();
  }

  public static com.flyteidl.admin.LaunchPlanMetadata getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<LaunchPlanMetadata>
      PARSER = new com.google.protobuf.AbstractParser<LaunchPlanMetadata>() {
    @java.lang.Override
    public LaunchPlanMetadata parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new LaunchPlanMetadata(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<LaunchPlanMetadata> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<LaunchPlanMetadata> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public com.flyteidl.admin.LaunchPlanMetadata getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

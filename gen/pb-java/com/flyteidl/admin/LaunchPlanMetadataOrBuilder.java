// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/admin/launch_plan.proto

package com.flyteidl.admin;

public interface LaunchPlanMetadataOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.admin.LaunchPlanMetadata)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * Schedule to execute the Launch Plan
   * </pre>
   *
   * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
   * @return Whether the schedule field is set.
   */
  boolean hasSchedule();
  /**
   * <pre>
   * Schedule to execute the Launch Plan
   * </pre>
   *
   * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
   * @return The schedule.
   */
  com.flyteidl.admin.Schedule getSchedule();
  /**
   * <pre>
   * Schedule to execute the Launch Plan
   * </pre>
   *
   * <code>.flyteidl.admin.Schedule schedule = 1 [json_name = "schedule"];</code>
   */
  com.flyteidl.admin.ScheduleOrBuilder getScheduleOrBuilder();

  /**
   * <pre>
   * List of notifications based on Execution status transitions
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
   */
  java.util.List<com.flyteidl.admin.Notification> 
      getNotificationsList();
  /**
   * <pre>
   * List of notifications based on Execution status transitions
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
   */
  com.flyteidl.admin.Notification getNotifications(int index);
  /**
   * <pre>
   * List of notifications based on Execution status transitions
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
   */
  int getNotificationsCount();
  /**
   * <pre>
   * List of notifications based on Execution status transitions
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
   */
  java.util.List<? extends com.flyteidl.admin.NotificationOrBuilder> 
      getNotificationsOrBuilderList();
  /**
   * <pre>
   * List of notifications based on Execution status transitions
   * </pre>
   *
   * <code>repeated .flyteidl.admin.Notification notifications = 2 [json_name = "notifications"];</code>
   */
  com.flyteidl.admin.NotificationOrBuilder getNotificationsOrBuilder(
      int index);
}
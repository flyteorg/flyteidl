// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/datacatalog/datacatalog.proto

package com.datacatalog;

public interface GetOrExtendReservationRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:datacatalog.GetOrExtendReservationRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.datacatalog.ReservationID reservation_id = 1 [json_name = "reservationId"];</code>
   * @return Whether the reservationId field is set.
   */
  boolean hasReservationId();
  /**
   * <code>.datacatalog.ReservationID reservation_id = 1 [json_name = "reservationId"];</code>
   * @return The reservationId.
   */
  com.datacatalog.ReservationID getReservationId();
  /**
   * <code>.datacatalog.ReservationID reservation_id = 1 [json_name = "reservationId"];</code>
   */
  com.datacatalog.ReservationIDOrBuilder getReservationIdOrBuilder();

  /**
   * <code>string owner_id = 2 [json_name = "ownerId"];</code>
   * @return The ownerId.
   */
  java.lang.String getOwnerId();
  /**
   * <code>string owner_id = 2 [json_name = "ownerId"];</code>
   * @return The bytes for ownerId.
   */
  com.google.protobuf.ByteString
      getOwnerIdBytes();

  /**
   * <pre>
   * Requested reservation extension heartbeat interval
   * </pre>
   *
   * <code>.google.protobuf.Duration heartbeat_interval = 3 [json_name = "heartbeatInterval"];</code>
   * @return Whether the heartbeatInterval field is set.
   */
  boolean hasHeartbeatInterval();
  /**
   * <pre>
   * Requested reservation extension heartbeat interval
   * </pre>
   *
   * <code>.google.protobuf.Duration heartbeat_interval = 3 [json_name = "heartbeatInterval"];</code>
   * @return The heartbeatInterval.
   */
  com.google.protobuf.Duration getHeartbeatInterval();
  /**
   * <pre>
   * Requested reservation extension heartbeat interval
   * </pre>
   *
   * <code>.google.protobuf.Duration heartbeat_interval = 3 [json_name = "heartbeatInterval"];</code>
   */
  com.google.protobuf.DurationOrBuilder getHeartbeatIntervalOrBuilder();
}
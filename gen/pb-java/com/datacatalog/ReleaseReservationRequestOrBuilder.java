// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/datacatalog/datacatalog.proto

package com.datacatalog;

public interface ReleaseReservationRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:datacatalog.ReleaseReservationRequest)
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
}
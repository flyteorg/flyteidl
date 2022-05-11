// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/plugins/qubole.proto

package com.flyteidl.plugins;

public interface QuboleHiveJobOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.plugins.QuboleHiveJob)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string cluster_label = 1 [json_name = "clusterLabel"];</code>
   * @return The clusterLabel.
   */
  java.lang.String getClusterLabel();
  /**
   * <code>string cluster_label = 1 [json_name = "clusterLabel"];</code>
   * @return The bytes for clusterLabel.
   */
  com.google.protobuf.ByteString
      getClusterLabelBytes();

  /**
   * <code>.flyteidl.plugins.HiveQueryCollection query_collection = 2 [json_name = "queryCollection", deprecated = true];</code>
   * @deprecated
   * @return Whether the queryCollection field is set.
   */
  @java.lang.Deprecated boolean hasQueryCollection();
  /**
   * <code>.flyteidl.plugins.HiveQueryCollection query_collection = 2 [json_name = "queryCollection", deprecated = true];</code>
   * @deprecated
   * @return The queryCollection.
   */
  @java.lang.Deprecated com.flyteidl.plugins.HiveQueryCollection getQueryCollection();
  /**
   * <code>.flyteidl.plugins.HiveQueryCollection query_collection = 2 [json_name = "queryCollection", deprecated = true];</code>
   */
  @java.lang.Deprecated com.flyteidl.plugins.HiveQueryCollectionOrBuilder getQueryCollectionOrBuilder();

  /**
   * <code>repeated string tags = 3 [json_name = "tags"];</code>
   * @return A list containing the tags.
   */
  java.util.List<java.lang.String>
      getTagsList();
  /**
   * <code>repeated string tags = 3 [json_name = "tags"];</code>
   * @return The count of tags.
   */
  int getTagsCount();
  /**
   * <code>repeated string tags = 3 [json_name = "tags"];</code>
   * @param index The index of the element to return.
   * @return The tags at the given index.
   */
  java.lang.String getTags(int index);
  /**
   * <code>repeated string tags = 3 [json_name = "tags"];</code>
   * @param index The index of the value to return.
   * @return The bytes of the tags at the given index.
   */
  com.google.protobuf.ByteString
      getTagsBytes(int index);

  /**
   * <code>.flyteidl.plugins.HiveQuery query = 4 [json_name = "query"];</code>
   * @return Whether the query field is set.
   */
  boolean hasQuery();
  /**
   * <code>.flyteidl.plugins.HiveQuery query = 4 [json_name = "query"];</code>
   * @return The query.
   */
  com.flyteidl.plugins.HiveQuery getQuery();
  /**
   * <code>.flyteidl.plugins.HiveQuery query = 4 [json_name = "query"];</code>
   */
  com.flyteidl.plugins.HiveQueryOrBuilder getQueryOrBuilder();
}
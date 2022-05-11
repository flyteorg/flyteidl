// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/core/security.proto

package com.flyteidl.core;

public interface OAuth2TokenRequestOrBuilder extends
    // @@protoc_insertion_point(interface_extends:flyteidl.core.OAuth2TokenRequest)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <pre>
   * name indicates a unique id for the token request within this task token requests. It'll be used as a suffix for
   * environment variables and as a filename for mounting tokens as files.
   * +required
   * </pre>
   *
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The name.
   */
  java.lang.String getName();
  /**
   * <pre>
   * name indicates a unique id for the token request within this task token requests. It'll be used as a suffix for
   * environment variables and as a filename for mounting tokens as files.
   * +required
   * </pre>
   *
   * <code>string name = 1 [json_name = "name"];</code>
   * @return The bytes for name.
   */
  com.google.protobuf.ByteString
      getNameBytes();

  /**
   * <pre>
   * type indicates the type of the request to make. Defaults to CLIENT_CREDENTIALS.
   * +required
   * </pre>
   *
   * <code>.flyteidl.core.OAuth2TokenRequest.Type type = 2 [json_name = "type"];</code>
   * @return The enum numeric value on the wire for type.
   */
  int getTypeValue();
  /**
   * <pre>
   * type indicates the type of the request to make. Defaults to CLIENT_CREDENTIALS.
   * +required
   * </pre>
   *
   * <code>.flyteidl.core.OAuth2TokenRequest.Type type = 2 [json_name = "type"];</code>
   * @return The type.
   */
  com.flyteidl.core.OAuth2TokenRequest.Type getType();

  /**
   * <pre>
   * client references the client_id/secret to use to request the OAuth2 token.
   * +required
   * </pre>
   *
   * <code>.flyteidl.core.OAuth2Client client = 3 [json_name = "client"];</code>
   * @return Whether the client field is set.
   */
  boolean hasClient();
  /**
   * <pre>
   * client references the client_id/secret to use to request the OAuth2 token.
   * +required
   * </pre>
   *
   * <code>.flyteidl.core.OAuth2Client client = 3 [json_name = "client"];</code>
   * @return The client.
   */
  com.flyteidl.core.OAuth2Client getClient();
  /**
   * <pre>
   * client references the client_id/secret to use to request the OAuth2 token.
   * +required
   * </pre>
   *
   * <code>.flyteidl.core.OAuth2Client client = 3 [json_name = "client"];</code>
   */
  com.flyteidl.core.OAuth2ClientOrBuilder getClientOrBuilder();

  /**
   * <pre>
   * idp_discovery_endpoint references the discovery endpoint used to retrieve token endpoint and other related
   * information.
   * +optional
   * </pre>
   *
   * <code>string idp_discovery_endpoint = 4 [json_name = "idpDiscoveryEndpoint"];</code>
   * @return The idpDiscoveryEndpoint.
   */
  java.lang.String getIdpDiscoveryEndpoint();
  /**
   * <pre>
   * idp_discovery_endpoint references the discovery endpoint used to retrieve token endpoint and other related
   * information.
   * +optional
   * </pre>
   *
   * <code>string idp_discovery_endpoint = 4 [json_name = "idpDiscoveryEndpoint"];</code>
   * @return The bytes for idpDiscoveryEndpoint.
   */
  com.google.protobuf.ByteString
      getIdpDiscoveryEndpointBytes();

  /**
   * <pre>
   * token_endpoint references the token issuance endpoint. If idp_discovery_endpoint is not provided, this parameter is
   * mandatory.
   * +optional
   * </pre>
   *
   * <code>string token_endpoint = 5 [json_name = "tokenEndpoint"];</code>
   * @return The tokenEndpoint.
   */
  java.lang.String getTokenEndpoint();
  /**
   * <pre>
   * token_endpoint references the token issuance endpoint. If idp_discovery_endpoint is not provided, this parameter is
   * mandatory.
   * +optional
   * </pre>
   *
   * <code>string token_endpoint = 5 [json_name = "tokenEndpoint"];</code>
   * @return The bytes for tokenEndpoint.
   */
  com.google.protobuf.ByteString
      getTokenEndpointBytes();
}
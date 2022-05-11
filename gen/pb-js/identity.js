// source: flyteidl/core/security.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.flyteidl.core.Identity');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.flyteidl.core.OAuth2Client');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.flyteidl.core.Identity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.Identity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.Identity.displayName = 'proto.flyteidl.core.Identity';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.flyteidl.core.Identity.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.Identity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.Identity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.Identity.toObject = function(includeInstance, msg) {
  var f, obj = {
    iamRole: jspb.Message.getFieldWithDefault(msg, 1, ""),
    k8sServiceAccount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    oauth2Client: (f = msg.getOauth2Client()) && proto.flyteidl.core.OAuth2Client.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.flyteidl.core.Identity}
 */
proto.flyteidl.core.Identity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.Identity;
  return proto.flyteidl.core.Identity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.Identity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.Identity}
 */
proto.flyteidl.core.Identity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIamRole(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setK8sServiceAccount(value);
      break;
    case 3:
      var value = new proto.flyteidl.core.OAuth2Client;
      reader.readMessage(value,proto.flyteidl.core.OAuth2Client.deserializeBinaryFromReader);
      msg.setOauth2Client(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.flyteidl.core.Identity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.Identity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.Identity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.Identity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIamRole();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getK8sServiceAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOauth2Client();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.flyteidl.core.OAuth2Client.serializeBinaryToWriter
    );
  }
};


/**
 * optional string iam_role = 1;
 * @return {string}
 */
proto.flyteidl.core.Identity.prototype.getIamRole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.Identity} returns this
 */
proto.flyteidl.core.Identity.prototype.setIamRole = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string k8s_service_account = 2;
 * @return {string}
 */
proto.flyteidl.core.Identity.prototype.getK8sServiceAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.Identity} returns this
 */
proto.flyteidl.core.Identity.prototype.setK8sServiceAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OAuth2Client oauth2_client = 3;
 * @return {?proto.flyteidl.core.OAuth2Client}
 */
proto.flyteidl.core.Identity.prototype.getOauth2Client = function() {
  return /** @type{?proto.flyteidl.core.OAuth2Client} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.OAuth2Client, 3));
};


/**
 * @param {?proto.flyteidl.core.OAuth2Client|undefined} value
 * @return {!proto.flyteidl.core.Identity} returns this
*/
proto.flyteidl.core.Identity.prototype.setOauth2Client = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.Identity} returns this
 */
proto.flyteidl.core.Identity.prototype.clearOauth2Client = function() {
  return this.setOauth2Client(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.Identity.prototype.hasOauth2Client = function() {
  return jspb.Message.getField(this, 3) != null;
};


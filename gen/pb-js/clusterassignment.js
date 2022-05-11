// source: flyteidl/admin/cluster_assignment.proto
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

goog.provide('proto.flyteidl.admin.ClusterAssignment');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.flyteidl.admin.Affinity');
goog.require('proto.flyteidl.admin.Toleration');

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
proto.flyteidl.admin.ClusterAssignment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.admin.ClusterAssignment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.admin.ClusterAssignment.displayName = 'proto.flyteidl.admin.ClusterAssignment';
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
proto.flyteidl.admin.ClusterAssignment.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.admin.ClusterAssignment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.admin.ClusterAssignment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.ClusterAssignment.toObject = function(includeInstance, msg) {
  var f, obj = {
    affinity: (f = msg.getAffinity()) && proto.flyteidl.admin.Affinity.toObject(includeInstance, f),
    toleration: (f = msg.getToleration()) && proto.flyteidl.admin.Toleration.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.admin.ClusterAssignment}
 */
proto.flyteidl.admin.ClusterAssignment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.admin.ClusterAssignment;
  return proto.flyteidl.admin.ClusterAssignment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.admin.ClusterAssignment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.admin.ClusterAssignment}
 */
proto.flyteidl.admin.ClusterAssignment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.admin.Affinity;
      reader.readMessage(value,proto.flyteidl.admin.Affinity.deserializeBinaryFromReader);
      msg.setAffinity(value);
      break;
    case 2:
      var value = new proto.flyteidl.admin.Toleration;
      reader.readMessage(value,proto.flyteidl.admin.Toleration.deserializeBinaryFromReader);
      msg.setToleration(value);
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
proto.flyteidl.admin.ClusterAssignment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.admin.ClusterAssignment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.admin.ClusterAssignment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.ClusterAssignment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAffinity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.admin.Affinity.serializeBinaryToWriter
    );
  }
  f = message.getToleration();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.admin.Toleration.serializeBinaryToWriter
    );
  }
};


/**
 * optional Affinity affinity = 1;
 * @return {?proto.flyteidl.admin.Affinity}
 */
proto.flyteidl.admin.ClusterAssignment.prototype.getAffinity = function() {
  return /** @type{?proto.flyteidl.admin.Affinity} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.admin.Affinity, 1));
};


/**
 * @param {?proto.flyteidl.admin.Affinity|undefined} value
 * @return {!proto.flyteidl.admin.ClusterAssignment} returns this
*/
proto.flyteidl.admin.ClusterAssignment.prototype.setAffinity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.ClusterAssignment} returns this
 */
proto.flyteidl.admin.ClusterAssignment.prototype.clearAffinity = function() {
  return this.setAffinity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.ClusterAssignment.prototype.hasAffinity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Toleration toleration = 2;
 * @return {?proto.flyteidl.admin.Toleration}
 */
proto.flyteidl.admin.ClusterAssignment.prototype.getToleration = function() {
  return /** @type{?proto.flyteidl.admin.Toleration} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.admin.Toleration, 2));
};


/**
 * @param {?proto.flyteidl.admin.Toleration|undefined} value
 * @return {!proto.flyteidl.admin.ClusterAssignment} returns this
*/
proto.flyteidl.admin.ClusterAssignment.prototype.setToleration = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.ClusterAssignment} returns this
 */
proto.flyteidl.admin.ClusterAssignment.prototype.clearToleration = function() {
  return this.setToleration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.ClusterAssignment.prototype.hasToleration = function() {
  return jspb.Message.getField(this, 2) != null;
};


// source: flyteidl/admin/event.proto
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

goog.provide('proto.flyteidl.admin.EventFailureReason');
goog.provide('proto.flyteidl.admin.EventFailureReason.ReasonCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.flyteidl.admin.EventErrorAlreadyInTerminalState');
goog.require('proto.flyteidl.admin.EventErrorIncompatibleCluster');

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
proto.flyteidl.admin.EventFailureReason = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.flyteidl.admin.EventFailureReason.oneofGroups_);
};
goog.inherits(proto.flyteidl.admin.EventFailureReason, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.admin.EventFailureReason.displayName = 'proto.flyteidl.admin.EventFailureReason';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.flyteidl.admin.EventFailureReason.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.flyteidl.admin.EventFailureReason.ReasonCase = {
  REASON_NOT_SET: 0,
  ALREADY_IN_TERMINAL_STATE: 1,
  INCOMPATIBLE_CLUSTER: 2
};

/**
 * @return {proto.flyteidl.admin.EventFailureReason.ReasonCase}
 */
proto.flyteidl.admin.EventFailureReason.prototype.getReasonCase = function() {
  return /** @type {proto.flyteidl.admin.EventFailureReason.ReasonCase} */(jspb.Message.computeOneofCase(this, proto.flyteidl.admin.EventFailureReason.oneofGroups_[0]));
};



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
proto.flyteidl.admin.EventFailureReason.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.admin.EventFailureReason.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.admin.EventFailureReason} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.EventFailureReason.toObject = function(includeInstance, msg) {
  var f, obj = {
    alreadyInTerminalState: (f = msg.getAlreadyInTerminalState()) && proto.flyteidl.admin.EventErrorAlreadyInTerminalState.toObject(includeInstance, f),
    incompatibleCluster: (f = msg.getIncompatibleCluster()) && proto.flyteidl.admin.EventErrorIncompatibleCluster.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.admin.EventFailureReason}
 */
proto.flyteidl.admin.EventFailureReason.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.admin.EventFailureReason;
  return proto.flyteidl.admin.EventFailureReason.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.admin.EventFailureReason} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.admin.EventFailureReason}
 */
proto.flyteidl.admin.EventFailureReason.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.admin.EventErrorAlreadyInTerminalState;
      reader.readMessage(value,proto.flyteidl.admin.EventErrorAlreadyInTerminalState.deserializeBinaryFromReader);
      msg.setAlreadyInTerminalState(value);
      break;
    case 2:
      var value = new proto.flyteidl.admin.EventErrorIncompatibleCluster;
      reader.readMessage(value,proto.flyteidl.admin.EventErrorIncompatibleCluster.deserializeBinaryFromReader);
      msg.setIncompatibleCluster(value);
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
proto.flyteidl.admin.EventFailureReason.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.admin.EventFailureReason.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.admin.EventFailureReason} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.EventFailureReason.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlreadyInTerminalState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.admin.EventErrorAlreadyInTerminalState.serializeBinaryToWriter
    );
  }
  f = message.getIncompatibleCluster();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.admin.EventErrorIncompatibleCluster.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventErrorAlreadyInTerminalState already_in_terminal_state = 1;
 * @return {?proto.flyteidl.admin.EventErrorAlreadyInTerminalState}
 */
proto.flyteidl.admin.EventFailureReason.prototype.getAlreadyInTerminalState = function() {
  return /** @type{?proto.flyteidl.admin.EventErrorAlreadyInTerminalState} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.admin.EventErrorAlreadyInTerminalState, 1));
};


/**
 * @param {?proto.flyteidl.admin.EventErrorAlreadyInTerminalState|undefined} value
 * @return {!proto.flyteidl.admin.EventFailureReason} returns this
*/
proto.flyteidl.admin.EventFailureReason.prototype.setAlreadyInTerminalState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.flyteidl.admin.EventFailureReason.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.EventFailureReason} returns this
 */
proto.flyteidl.admin.EventFailureReason.prototype.clearAlreadyInTerminalState = function() {
  return this.setAlreadyInTerminalState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.EventFailureReason.prototype.hasAlreadyInTerminalState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EventErrorIncompatibleCluster incompatible_cluster = 2;
 * @return {?proto.flyteidl.admin.EventErrorIncompatibleCluster}
 */
proto.flyteidl.admin.EventFailureReason.prototype.getIncompatibleCluster = function() {
  return /** @type{?proto.flyteidl.admin.EventErrorIncompatibleCluster} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.admin.EventErrorIncompatibleCluster, 2));
};


/**
 * @param {?proto.flyteidl.admin.EventErrorIncompatibleCluster|undefined} value
 * @return {!proto.flyteidl.admin.EventFailureReason} returns this
*/
proto.flyteidl.admin.EventFailureReason.prototype.setIncompatibleCluster = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.flyteidl.admin.EventFailureReason.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.EventFailureReason} returns this
 */
proto.flyteidl.admin.EventFailureReason.prototype.clearIncompatibleCluster = function() {
  return this.setIncompatibleCluster(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.EventFailureReason.prototype.hasIncompatibleCluster = function() {
  return jspb.Message.getField(this, 2) != null;
};


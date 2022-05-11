// source: flyteidl/admin/execution.proto
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

goog.provide('proto.flyteidl.admin.LiteralMapBlob');
goog.provide('proto.flyteidl.admin.LiteralMapBlob.DataCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.flyteidl.core.LiteralMap');

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
proto.flyteidl.admin.LiteralMapBlob = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.flyteidl.admin.LiteralMapBlob.oneofGroups_);
};
goog.inherits(proto.flyteidl.admin.LiteralMapBlob, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.admin.LiteralMapBlob.displayName = 'proto.flyteidl.admin.LiteralMapBlob';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.flyteidl.admin.LiteralMapBlob.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.flyteidl.admin.LiteralMapBlob.DataCase = {
  DATA_NOT_SET: 0,
  VALUES: 1,
  URI: 2
};

/**
 * @return {proto.flyteidl.admin.LiteralMapBlob.DataCase}
 */
proto.flyteidl.admin.LiteralMapBlob.prototype.getDataCase = function() {
  return /** @type {proto.flyteidl.admin.LiteralMapBlob.DataCase} */(jspb.Message.computeOneofCase(this, proto.flyteidl.admin.LiteralMapBlob.oneofGroups_[0]));
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
proto.flyteidl.admin.LiteralMapBlob.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.admin.LiteralMapBlob.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.admin.LiteralMapBlob} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.LiteralMapBlob.toObject = function(includeInstance, msg) {
  var f, obj = {
    values: (f = msg.getValues()) && proto.flyteidl.core.LiteralMap.toObject(includeInstance, f),
    uri: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.flyteidl.admin.LiteralMapBlob}
 */
proto.flyteidl.admin.LiteralMapBlob.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.admin.LiteralMapBlob;
  return proto.flyteidl.admin.LiteralMapBlob.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.admin.LiteralMapBlob} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.admin.LiteralMapBlob}
 */
proto.flyteidl.admin.LiteralMapBlob.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.core.LiteralMap;
      reader.readMessage(value,proto.flyteidl.core.LiteralMap.deserializeBinaryFromReader);
      msg.setValues(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
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
proto.flyteidl.admin.LiteralMapBlob.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.admin.LiteralMapBlob.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.admin.LiteralMapBlob} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.LiteralMapBlob.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValues();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.core.LiteralMap.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional flyteidl.core.LiteralMap values = 1;
 * @return {?proto.flyteidl.core.LiteralMap}
 */
proto.flyteidl.admin.LiteralMapBlob.prototype.getValues = function() {
  return /** @type{?proto.flyteidl.core.LiteralMap} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.LiteralMap, 1));
};


/**
 * @param {?proto.flyteidl.core.LiteralMap|undefined} value
 * @return {!proto.flyteidl.admin.LiteralMapBlob} returns this
*/
proto.flyteidl.admin.LiteralMapBlob.prototype.setValues = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.flyteidl.admin.LiteralMapBlob.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.LiteralMapBlob} returns this
 */
proto.flyteidl.admin.LiteralMapBlob.prototype.clearValues = function() {
  return this.setValues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.LiteralMapBlob.prototype.hasValues = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.flyteidl.admin.LiteralMapBlob.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.admin.LiteralMapBlob} returns this
 */
proto.flyteidl.admin.LiteralMapBlob.prototype.setUri = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.flyteidl.admin.LiteralMapBlob.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.flyteidl.admin.LiteralMapBlob} returns this
 */
proto.flyteidl.admin.LiteralMapBlob.prototype.clearUri = function() {
  return jspb.Message.setOneofField(this, 2, proto.flyteidl.admin.LiteralMapBlob.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.LiteralMapBlob.prototype.hasUri = function() {
  return jspb.Message.getField(this, 2) != null;
};


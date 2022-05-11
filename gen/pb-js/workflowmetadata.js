// source: flyteidl/core/workflow.proto
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

goog.provide('proto.flyteidl.core.WorkflowMetadata');
goog.provide('proto.flyteidl.core.WorkflowMetadata.OnFailurePolicy');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.flyteidl.core.QualityOfService');

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
proto.flyteidl.core.WorkflowMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.WorkflowMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.WorkflowMetadata.displayName = 'proto.flyteidl.core.WorkflowMetadata';
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
proto.flyteidl.core.WorkflowMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.WorkflowMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.WorkflowMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.WorkflowMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    qualityOfService: (f = msg.getQualityOfService()) && proto.flyteidl.core.QualityOfService.toObject(includeInstance, f),
    onFailure: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.flyteidl.core.WorkflowMetadata}
 */
proto.flyteidl.core.WorkflowMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.WorkflowMetadata;
  return proto.flyteidl.core.WorkflowMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.WorkflowMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.WorkflowMetadata}
 */
proto.flyteidl.core.WorkflowMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.core.QualityOfService;
      reader.readMessage(value,proto.flyteidl.core.QualityOfService.deserializeBinaryFromReader);
      msg.setQualityOfService(value);
      break;
    case 2:
      var value = /** @type {!proto.flyteidl.core.WorkflowMetadata.OnFailurePolicy} */ (reader.readEnum());
      msg.setOnFailure(value);
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
proto.flyteidl.core.WorkflowMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.WorkflowMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.WorkflowMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.WorkflowMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQualityOfService();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.core.QualityOfService.serializeBinaryToWriter
    );
  }
  f = message.getOnFailure();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.flyteidl.core.WorkflowMetadata.OnFailurePolicy = {
  FAIL_IMMEDIATELY: 0,
  FAIL_AFTER_EXECUTABLE_NODES_COMPLETE: 1
};

/**
 * optional QualityOfService quality_of_service = 1;
 * @return {?proto.flyteidl.core.QualityOfService}
 */
proto.flyteidl.core.WorkflowMetadata.prototype.getQualityOfService = function() {
  return /** @type{?proto.flyteidl.core.QualityOfService} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.QualityOfService, 1));
};


/**
 * @param {?proto.flyteidl.core.QualityOfService|undefined} value
 * @return {!proto.flyteidl.core.WorkflowMetadata} returns this
*/
proto.flyteidl.core.WorkflowMetadata.prototype.setQualityOfService = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.WorkflowMetadata} returns this
 */
proto.flyteidl.core.WorkflowMetadata.prototype.clearQualityOfService = function() {
  return this.setQualityOfService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.WorkflowMetadata.prototype.hasQualityOfService = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OnFailurePolicy on_failure = 2;
 * @return {!proto.flyteidl.core.WorkflowMetadata.OnFailurePolicy}
 */
proto.flyteidl.core.WorkflowMetadata.prototype.getOnFailure = function() {
  return /** @type {!proto.flyteidl.core.WorkflowMetadata.OnFailurePolicy} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.flyteidl.core.WorkflowMetadata.OnFailurePolicy} value
 * @return {!proto.flyteidl.core.WorkflowMetadata} returns this
 */
proto.flyteidl.core.WorkflowMetadata.prototype.setOnFailure = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


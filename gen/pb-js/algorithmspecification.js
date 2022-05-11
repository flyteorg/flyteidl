// source: flyteidl/plugins/sagemaker/training_job.proto
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

goog.provide('proto.flyteidl.plugins.sagemaker.AlgorithmSpecification');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.flyteidl.plugins.sagemaker.MetricDefinition');

goog.forwardDeclare('proto.flyteidl.plugins.sagemaker.AlgorithmName.Value');
goog.forwardDeclare('proto.flyteidl.plugins.sagemaker.InputContentType.Value');
goog.forwardDeclare('proto.flyteidl.plugins.sagemaker.InputMode.Value');
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
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.repeatedFields_, null);
};
goog.inherits(proto.flyteidl.plugins.sagemaker.AlgorithmSpecification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.displayName = 'proto.flyteidl.plugins.sagemaker.AlgorithmSpecification';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.repeatedFields_ = [4];



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
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.plugins.sagemaker.AlgorithmSpecification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputMode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    algorithmName: jspb.Message.getFieldWithDefault(msg, 2, 0),
    algorithmVersion: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metricDefinitionsList: jspb.Message.toObjectList(msg.getMetricDefinitionsList(),
    proto.flyteidl.plugins.sagemaker.MetricDefinition.toObject, includeInstance),
    inputContentType: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.flyteidl.plugins.sagemaker.AlgorithmSpecification}
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.plugins.sagemaker.AlgorithmSpecification;
  return proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.plugins.sagemaker.AlgorithmSpecification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.plugins.sagemaker.AlgorithmSpecification}
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.flyteidl.plugins.sagemaker.InputMode.Value} */ (reader.readEnum());
      msg.setInputMode(value);
      break;
    case 2:
      var value = /** @type {!proto.flyteidl.plugins.sagemaker.AlgorithmName.Value} */ (reader.readEnum());
      msg.setAlgorithmName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlgorithmVersion(value);
      break;
    case 4:
      var value = new proto.flyteidl.plugins.sagemaker.MetricDefinition;
      reader.readMessage(value,proto.flyteidl.plugins.sagemaker.MetricDefinition.deserializeBinaryFromReader);
      msg.addMetricDefinitions(value);
      break;
    case 5:
      var value = /** @type {!proto.flyteidl.plugins.sagemaker.InputContentType.Value} */ (reader.readEnum());
      msg.setInputContentType(value);
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
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.plugins.sagemaker.AlgorithmSpecification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAlgorithmName();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAlgorithmVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetricDefinitionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.flyteidl.plugins.sagemaker.MetricDefinition.serializeBinaryToWriter
    );
  }
  f = message.getInputContentType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional InputMode.Value input_mode = 1;
 * @return {!proto.flyteidl.plugins.sagemaker.InputMode.Value}
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.getInputMode = function() {
  return /** @type {!proto.flyteidl.plugins.sagemaker.InputMode.Value} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.flyteidl.plugins.sagemaker.InputMode.Value} value
 * @return {!proto.flyteidl.plugins.sagemaker.AlgorithmSpecification} returns this
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.setInputMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional AlgorithmName.Value algorithm_name = 2;
 * @return {!proto.flyteidl.plugins.sagemaker.AlgorithmName.Value}
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.getAlgorithmName = function() {
  return /** @type {!proto.flyteidl.plugins.sagemaker.AlgorithmName.Value} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.flyteidl.plugins.sagemaker.AlgorithmName.Value} value
 * @return {!proto.flyteidl.plugins.sagemaker.AlgorithmSpecification} returns this
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.setAlgorithmName = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string algorithm_version = 3;
 * @return {string}
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.getAlgorithmVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.plugins.sagemaker.AlgorithmSpecification} returns this
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.setAlgorithmVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated MetricDefinition metric_definitions = 4;
 * @return {!Array<!proto.flyteidl.plugins.sagemaker.MetricDefinition>}
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.getMetricDefinitionsList = function() {
  return /** @type{!Array<!proto.flyteidl.plugins.sagemaker.MetricDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flyteidl.plugins.sagemaker.MetricDefinition, 4));
};


/**
 * @param {!Array<!proto.flyteidl.plugins.sagemaker.MetricDefinition>} value
 * @return {!proto.flyteidl.plugins.sagemaker.AlgorithmSpecification} returns this
*/
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.setMetricDefinitionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.flyteidl.plugins.sagemaker.MetricDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.plugins.sagemaker.MetricDefinition}
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.addMetricDefinitions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.flyteidl.plugins.sagemaker.MetricDefinition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.plugins.sagemaker.AlgorithmSpecification} returns this
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.clearMetricDefinitionsList = function() {
  return this.setMetricDefinitionsList([]);
};


/**
 * optional InputContentType.Value input_content_type = 5;
 * @return {!proto.flyteidl.plugins.sagemaker.InputContentType.Value}
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.getInputContentType = function() {
  return /** @type {!proto.flyteidl.plugins.sagemaker.InputContentType.Value} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.flyteidl.plugins.sagemaker.InputContentType.Value} value
 * @return {!proto.flyteidl.plugins.sagemaker.AlgorithmSpecification} returns this
 */
proto.flyteidl.plugins.sagemaker.AlgorithmSpecification.prototype.setInputContentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


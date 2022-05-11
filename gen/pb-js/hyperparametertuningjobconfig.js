// source: flyteidl/plugins/sagemaker/hyperparameter_tuning_job.proto
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

goog.provide('proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.flyteidl.plugins.sagemaker.HyperparameterTuningObjective');
goog.require('proto.flyteidl.plugins.sagemaker.ParameterRanges');

goog.forwardDeclare('proto.flyteidl.plugins.sagemaker.HyperparameterTuningStrategy.Value');
goog.forwardDeclare('proto.flyteidl.plugins.sagemaker.TrainingJobEarlyStoppingType.Value');
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
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.displayName = 'proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig';
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
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    hyperparameterRanges: (f = msg.getHyperparameterRanges()) && proto.flyteidl.plugins.sagemaker.ParameterRanges.toObject(includeInstance, f),
    tuningStrategy: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tuningObjective: (f = msg.getTuningObjective()) && proto.flyteidl.plugins.sagemaker.HyperparameterTuningObjective.toObject(includeInstance, f),
    trainingJobEarlyStoppingType: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig}
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig;
  return proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig}
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.plugins.sagemaker.ParameterRanges;
      reader.readMessage(value,proto.flyteidl.plugins.sagemaker.ParameterRanges.deserializeBinaryFromReader);
      msg.setHyperparameterRanges(value);
      break;
    case 2:
      var value = /** @type {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningStrategy.Value} */ (reader.readEnum());
      msg.setTuningStrategy(value);
      break;
    case 3:
      var value = new proto.flyteidl.plugins.sagemaker.HyperparameterTuningObjective;
      reader.readMessage(value,proto.flyteidl.plugins.sagemaker.HyperparameterTuningObjective.deserializeBinaryFromReader);
      msg.setTuningObjective(value);
      break;
    case 4:
      var value = /** @type {!proto.flyteidl.plugins.sagemaker.TrainingJobEarlyStoppingType.Value} */ (reader.readEnum());
      msg.setTrainingJobEarlyStoppingType(value);
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
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHyperparameterRanges();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.plugins.sagemaker.ParameterRanges.serializeBinaryToWriter
    );
  }
  f = message.getTuningStrategy();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTuningObjective();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.flyteidl.plugins.sagemaker.HyperparameterTuningObjective.serializeBinaryToWriter
    );
  }
  f = message.getTrainingJobEarlyStoppingType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional ParameterRanges hyperparameter_ranges = 1;
 * @return {?proto.flyteidl.plugins.sagemaker.ParameterRanges}
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.getHyperparameterRanges = function() {
  return /** @type{?proto.flyteidl.plugins.sagemaker.ParameterRanges} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.plugins.sagemaker.ParameterRanges, 1));
};


/**
 * @param {?proto.flyteidl.plugins.sagemaker.ParameterRanges|undefined} value
 * @return {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig} returns this
*/
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.setHyperparameterRanges = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig} returns this
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.clearHyperparameterRanges = function() {
  return this.setHyperparameterRanges(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.hasHyperparameterRanges = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional HyperparameterTuningStrategy.Value tuning_strategy = 2;
 * @return {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningStrategy.Value}
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.getTuningStrategy = function() {
  return /** @type {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningStrategy.Value} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningStrategy.Value} value
 * @return {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig} returns this
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.setTuningStrategy = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional HyperparameterTuningObjective tuning_objective = 3;
 * @return {?proto.flyteidl.plugins.sagemaker.HyperparameterTuningObjective}
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.getTuningObjective = function() {
  return /** @type{?proto.flyteidl.plugins.sagemaker.HyperparameterTuningObjective} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.plugins.sagemaker.HyperparameterTuningObjective, 3));
};


/**
 * @param {?proto.flyteidl.plugins.sagemaker.HyperparameterTuningObjective|undefined} value
 * @return {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig} returns this
*/
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.setTuningObjective = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig} returns this
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.clearTuningObjective = function() {
  return this.setTuningObjective(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.hasTuningObjective = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TrainingJobEarlyStoppingType.Value training_job_early_stopping_type = 4;
 * @return {!proto.flyteidl.plugins.sagemaker.TrainingJobEarlyStoppingType.Value}
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.getTrainingJobEarlyStoppingType = function() {
  return /** @type {!proto.flyteidl.plugins.sagemaker.TrainingJobEarlyStoppingType.Value} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.flyteidl.plugins.sagemaker.TrainingJobEarlyStoppingType.Value} value
 * @return {!proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig} returns this
 */
proto.flyteidl.plugins.sagemaker.HyperparameterTuningJobConfig.prototype.setTrainingJobEarlyStoppingType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


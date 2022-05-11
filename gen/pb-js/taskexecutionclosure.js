// source: flyteidl/admin/task_execution.proto
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

goog.provide('proto.flyteidl.admin.TaskExecutionClosure');
goog.provide('proto.flyteidl.admin.TaskExecutionClosure.OutputResultCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.flyteidl.core.ExecutionError');
goog.require('proto.flyteidl.core.LiteralMap');
goog.require('proto.flyteidl.core.TaskLog');
goog.require('proto.flyteidl.event.TaskExecutionMetadata');
goog.require('proto.google.protobuf.Duration');
goog.require('proto.google.protobuf.Struct');
goog.require('proto.google.protobuf.Timestamp');

goog.forwardDeclare('proto.flyteidl.core.TaskExecution.Phase');
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
proto.flyteidl.admin.TaskExecutionClosure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flyteidl.admin.TaskExecutionClosure.repeatedFields_, proto.flyteidl.admin.TaskExecutionClosure.oneofGroups_);
};
goog.inherits(proto.flyteidl.admin.TaskExecutionClosure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.admin.TaskExecutionClosure.displayName = 'proto.flyteidl.admin.TaskExecutionClosure';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flyteidl.admin.TaskExecutionClosure.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.flyteidl.admin.TaskExecutionClosure.oneofGroups_ = [[1,2,12]];

/**
 * @enum {number}
 */
proto.flyteidl.admin.TaskExecutionClosure.OutputResultCase = {
  OUTPUT_RESULT_NOT_SET: 0,
  OUTPUT_URI: 1,
  ERROR: 2,
  OUTPUT_DATA: 12
};

/**
 * @return {proto.flyteidl.admin.TaskExecutionClosure.OutputResultCase}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getOutputResultCase = function() {
  return /** @type {proto.flyteidl.admin.TaskExecutionClosure.OutputResultCase} */(jspb.Message.computeOneofCase(this, proto.flyteidl.admin.TaskExecutionClosure.oneofGroups_[0]));
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
proto.flyteidl.admin.TaskExecutionClosure.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.admin.TaskExecutionClosure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.admin.TaskExecutionClosure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.TaskExecutionClosure.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: (f = msg.getError()) && proto.flyteidl.core.ExecutionError.toObject(includeInstance, f),
    outputData: (f = msg.getOutputData()) && proto.flyteidl.core.LiteralMap.toObject(includeInstance, f),
    phase: jspb.Message.getFieldWithDefault(msg, 3, 0),
    logsList: jspb.Message.toObjectList(msg.getLogsList(),
    proto.flyteidl.core.TaskLog.toObject, includeInstance),
    startedAt: (f = msg.getStartedAt()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && proto.google.protobuf.Duration.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    customInfo: (f = msg.getCustomInfo()) && proto.google.protobuf.Struct.toObject(includeInstance, f),
    reason: jspb.Message.getFieldWithDefault(msg, 10, ""),
    taskType: jspb.Message.getFieldWithDefault(msg, 11, ""),
    metadata: (f = msg.getMetadata()) && proto.flyteidl.event.TaskExecutionMetadata.toObject(includeInstance, f),
    eventVersion: jspb.Message.getFieldWithDefault(msg, 17, 0)
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
 * @return {!proto.flyteidl.admin.TaskExecutionClosure}
 */
proto.flyteidl.admin.TaskExecutionClosure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.admin.TaskExecutionClosure;
  return proto.flyteidl.admin.TaskExecutionClosure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.admin.TaskExecutionClosure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.admin.TaskExecutionClosure}
 */
proto.flyteidl.admin.TaskExecutionClosure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutputUri(value);
      break;
    case 2:
      var value = new proto.flyteidl.core.ExecutionError;
      reader.readMessage(value,proto.flyteidl.core.ExecutionError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 12:
      var value = new proto.flyteidl.core.LiteralMap;
      reader.readMessage(value,proto.flyteidl.core.LiteralMap.deserializeBinaryFromReader);
      msg.setOutputData(value);
      break;
    case 3:
      var value = /** @type {!proto.flyteidl.core.TaskExecution.Phase} */ (reader.readEnum());
      msg.setPhase(value);
      break;
    case 4:
      var value = new proto.flyteidl.core.TaskLog;
      reader.readMessage(value,proto.flyteidl.core.TaskLog.deserializeBinaryFromReader);
      msg.addLogs(value);
      break;
    case 5:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setStartedAt(value);
      break;
    case 6:
      var value = new proto.google.protobuf.Duration;
      reader.readMessage(value,proto.google.protobuf.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    case 7:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 9:
      var value = new proto.google.protobuf.Struct;
      reader.readMessage(value,proto.google.protobuf.Struct.deserializeBinaryFromReader);
      msg.setCustomInfo(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTaskType(value);
      break;
    case 16:
      var value = new proto.flyteidl.event.TaskExecutionMetadata;
      reader.readMessage(value,proto.flyteidl.event.TaskExecutionMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEventVersion(value);
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
proto.flyteidl.admin.TaskExecutionClosure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.admin.TaskExecutionClosure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.admin.TaskExecutionClosure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.TaskExecutionClosure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.core.ExecutionError.serializeBinaryToWriter
    );
  }
  f = message.getOutputData();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.flyteidl.core.LiteralMap.serializeBinaryToWriter
    );
  }
  f = message.getPhase();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.flyteidl.core.TaskLog.serializeBinaryToWriter
    );
  }
  f = message.getStartedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.protobuf.Duration.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCustomInfo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.google.protobuf.Struct.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTaskType();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.flyteidl.event.TaskExecutionMetadata.serializeBinaryToWriter
    );
  }
  f = message.getEventVersion();
  if (f !== 0) {
    writer.writeInt32(
      17,
      f
    );
  }
};


/**
 * optional string output_uri = 1;
 * @return {string}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getOutputUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.setOutputUri = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.flyteidl.admin.TaskExecutionClosure.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.clearOutputUri = function() {
  return jspb.Message.setOneofField(this, 1, proto.flyteidl.admin.TaskExecutionClosure.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.hasOutputUri = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional flyteidl.core.ExecutionError error = 2;
 * @return {?proto.flyteidl.core.ExecutionError}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getError = function() {
  return /** @type{?proto.flyteidl.core.ExecutionError} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.ExecutionError, 2));
};


/**
 * @param {?proto.flyteidl.core.ExecutionError|undefined} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
*/
proto.flyteidl.admin.TaskExecutionClosure.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.flyteidl.admin.TaskExecutionClosure.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional flyteidl.core.LiteralMap output_data = 12;
 * @return {?proto.flyteidl.core.LiteralMap}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getOutputData = function() {
  return /** @type{?proto.flyteidl.core.LiteralMap} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.LiteralMap, 12));
};


/**
 * @param {?proto.flyteidl.core.LiteralMap|undefined} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
*/
proto.flyteidl.admin.TaskExecutionClosure.prototype.setOutputData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.flyteidl.admin.TaskExecutionClosure.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.clearOutputData = function() {
  return this.setOutputData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.hasOutputData = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional flyteidl.core.TaskExecution.Phase phase = 3;
 * @return {!proto.flyteidl.core.TaskExecution.Phase}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getPhase = function() {
  return /** @type {!proto.flyteidl.core.TaskExecution.Phase} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.flyteidl.core.TaskExecution.Phase} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.setPhase = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated flyteidl.core.TaskLog logs = 4;
 * @return {!Array<!proto.flyteidl.core.TaskLog>}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.flyteidl.core.TaskLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flyteidl.core.TaskLog, 4));
};


/**
 * @param {!Array<!proto.flyteidl.core.TaskLog>} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
*/
proto.flyteidl.admin.TaskExecutionClosure.prototype.setLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.flyteidl.core.TaskLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.core.TaskLog}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.flyteidl.core.TaskLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.clearLogsList = function() {
  return this.setLogsList([]);
};


/**
 * optional google.protobuf.Timestamp started_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getStartedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
*/
proto.flyteidl.admin.TaskExecutionClosure.prototype.setStartedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.clearStartedAt = function() {
  return this.setStartedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.hasStartedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Duration duration = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Duration, 6));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
*/
proto.flyteidl.admin.TaskExecutionClosure.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
*/
proto.flyteidl.admin.TaskExecutionClosure.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
*/
proto.flyteidl.admin.TaskExecutionClosure.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Struct custom_info = 9;
 * @return {?proto.google.protobuf.Struct}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getCustomInfo = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Struct, 9));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
*/
proto.flyteidl.admin.TaskExecutionClosure.prototype.setCustomInfo = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.clearCustomInfo = function() {
  return this.setCustomInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.hasCustomInfo = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string reason = 10;
 * @return {string}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string task_type = 11;
 * @return {string}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getTaskType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.setTaskType = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional flyteidl.event.TaskExecutionMetadata metadata = 16;
 * @return {?proto.flyteidl.event.TaskExecutionMetadata}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getMetadata = function() {
  return /** @type{?proto.flyteidl.event.TaskExecutionMetadata} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.event.TaskExecutionMetadata, 16));
};


/**
 * @param {?proto.flyteidl.event.TaskExecutionMetadata|undefined} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
*/
proto.flyteidl.admin.TaskExecutionClosure.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional int32 event_version = 17;
 * @return {number}
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.getEventVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.flyteidl.admin.TaskExecutionClosure} returns this
 */
proto.flyteidl.admin.TaskExecutionClosure.prototype.setEventVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


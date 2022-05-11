// source: flyteidl/admin/workflow.proto
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

goog.provide('proto.flyteidl.admin.WorkflowList');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.flyteidl.admin.Workflow');

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
proto.flyteidl.admin.WorkflowList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flyteidl.admin.WorkflowList.repeatedFields_, null);
};
goog.inherits(proto.flyteidl.admin.WorkflowList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.admin.WorkflowList.displayName = 'proto.flyteidl.admin.WorkflowList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flyteidl.admin.WorkflowList.repeatedFields_ = [1];



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
proto.flyteidl.admin.WorkflowList.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.admin.WorkflowList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.admin.WorkflowList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.WorkflowList.toObject = function(includeInstance, msg) {
  var f, obj = {
    workflowsList: jspb.Message.toObjectList(msg.getWorkflowsList(),
    proto.flyteidl.admin.Workflow.toObject, includeInstance),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.flyteidl.admin.WorkflowList}
 */
proto.flyteidl.admin.WorkflowList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.admin.WorkflowList;
  return proto.flyteidl.admin.WorkflowList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.admin.WorkflowList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.admin.WorkflowList}
 */
proto.flyteidl.admin.WorkflowList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.admin.Workflow;
      reader.readMessage(value,proto.flyteidl.admin.Workflow.deserializeBinaryFromReader);
      msg.addWorkflows(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
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
proto.flyteidl.admin.WorkflowList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.admin.WorkflowList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.admin.WorkflowList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.admin.WorkflowList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkflowsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.flyteidl.admin.Workflow.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Workflow workflows = 1;
 * @return {!Array<!proto.flyteidl.admin.Workflow>}
 */
proto.flyteidl.admin.WorkflowList.prototype.getWorkflowsList = function() {
  return /** @type{!Array<!proto.flyteidl.admin.Workflow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flyteidl.admin.Workflow, 1));
};


/**
 * @param {!Array<!proto.flyteidl.admin.Workflow>} value
 * @return {!proto.flyteidl.admin.WorkflowList} returns this
*/
proto.flyteidl.admin.WorkflowList.prototype.setWorkflowsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.flyteidl.admin.Workflow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.admin.Workflow}
 */
proto.flyteidl.admin.WorkflowList.prototype.addWorkflows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.flyteidl.admin.Workflow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.admin.WorkflowList} returns this
 */
proto.flyteidl.admin.WorkflowList.prototype.clearWorkflowsList = function() {
  return this.setWorkflowsList([]);
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.flyteidl.admin.WorkflowList.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.admin.WorkflowList} returns this
 */
proto.flyteidl.admin.WorkflowList.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


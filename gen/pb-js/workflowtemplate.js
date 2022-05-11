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

goog.provide('proto.flyteidl.core.WorkflowTemplate');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.flyteidl.core.Binding');
goog.require('proto.flyteidl.core.Identifier');
goog.require('proto.flyteidl.core.Node');
goog.require('proto.flyteidl.core.TypedInterface');
goog.require('proto.flyteidl.core.WorkflowMetadata');
goog.require('proto.flyteidl.core.WorkflowMetadataDefaults');

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
proto.flyteidl.core.WorkflowTemplate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flyteidl.core.WorkflowTemplate.repeatedFields_, null);
};
goog.inherits(proto.flyteidl.core.WorkflowTemplate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.WorkflowTemplate.displayName = 'proto.flyteidl.core.WorkflowTemplate';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flyteidl.core.WorkflowTemplate.repeatedFields_ = [4,5];



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
proto.flyteidl.core.WorkflowTemplate.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.WorkflowTemplate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.WorkflowTemplate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.WorkflowTemplate.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.flyteidl.core.Identifier.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && proto.flyteidl.core.WorkflowMetadata.toObject(includeInstance, f),
    pb_interface: (f = msg.getInterface()) && proto.flyteidl.core.TypedInterface.toObject(includeInstance, f),
    nodesList: jspb.Message.toObjectList(msg.getNodesList(),
    proto.flyteidl.core.Node.toObject, includeInstance),
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.flyteidl.core.Binding.toObject, includeInstance),
    failureNode: (f = msg.getFailureNode()) && proto.flyteidl.core.Node.toObject(includeInstance, f),
    metadataDefaults: (f = msg.getMetadataDefaults()) && proto.flyteidl.core.WorkflowMetadataDefaults.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.core.WorkflowTemplate}
 */
proto.flyteidl.core.WorkflowTemplate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.WorkflowTemplate;
  return proto.flyteidl.core.WorkflowTemplate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.WorkflowTemplate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.WorkflowTemplate}
 */
proto.flyteidl.core.WorkflowTemplate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.core.Identifier;
      reader.readMessage(value,proto.flyteidl.core.Identifier.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.flyteidl.core.WorkflowMetadata;
      reader.readMessage(value,proto.flyteidl.core.WorkflowMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 3:
      var value = new proto.flyteidl.core.TypedInterface;
      reader.readMessage(value,proto.flyteidl.core.TypedInterface.deserializeBinaryFromReader);
      msg.setInterface(value);
      break;
    case 4:
      var value = new proto.flyteidl.core.Node;
      reader.readMessage(value,proto.flyteidl.core.Node.deserializeBinaryFromReader);
      msg.addNodes(value);
      break;
    case 5:
      var value = new proto.flyteidl.core.Binding;
      reader.readMessage(value,proto.flyteidl.core.Binding.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    case 6:
      var value = new proto.flyteidl.core.Node;
      reader.readMessage(value,proto.flyteidl.core.Node.deserializeBinaryFromReader);
      msg.setFailureNode(value);
      break;
    case 7:
      var value = new proto.flyteidl.core.WorkflowMetadataDefaults;
      reader.readMessage(value,proto.flyteidl.core.WorkflowMetadataDefaults.deserializeBinaryFromReader);
      msg.setMetadataDefaults(value);
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
proto.flyteidl.core.WorkflowTemplate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.WorkflowTemplate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.WorkflowTemplate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.WorkflowTemplate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.core.Identifier.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.core.WorkflowMetadata.serializeBinaryToWriter
    );
  }
  f = message.getInterface();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.flyteidl.core.TypedInterface.serializeBinaryToWriter
    );
  }
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.flyteidl.core.Node.serializeBinaryToWriter
    );
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.flyteidl.core.Binding.serializeBinaryToWriter
    );
  }
  f = message.getFailureNode();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.flyteidl.core.Node.serializeBinaryToWriter
    );
  }
  f = message.getMetadataDefaults();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.flyteidl.core.WorkflowMetadataDefaults.serializeBinaryToWriter
    );
  }
};


/**
 * optional Identifier id = 1;
 * @return {?proto.flyteidl.core.Identifier}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.getId = function() {
  return /** @type{?proto.flyteidl.core.Identifier} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.Identifier, 1));
};


/**
 * @param {?proto.flyteidl.core.Identifier|undefined} value
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
*/
proto.flyteidl.core.WorkflowTemplate.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
 */
proto.flyteidl.core.WorkflowTemplate.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WorkflowMetadata metadata = 2;
 * @return {?proto.flyteidl.core.WorkflowMetadata}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.getMetadata = function() {
  return /** @type{?proto.flyteidl.core.WorkflowMetadata} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.WorkflowMetadata, 2));
};


/**
 * @param {?proto.flyteidl.core.WorkflowMetadata|undefined} value
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
*/
proto.flyteidl.core.WorkflowTemplate.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
 */
proto.flyteidl.core.WorkflowTemplate.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TypedInterface interface = 3;
 * @return {?proto.flyteidl.core.TypedInterface}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.getInterface = function() {
  return /** @type{?proto.flyteidl.core.TypedInterface} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.TypedInterface, 3));
};


/**
 * @param {?proto.flyteidl.core.TypedInterface|undefined} value
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
*/
proto.flyteidl.core.WorkflowTemplate.prototype.setInterface = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
 */
proto.flyteidl.core.WorkflowTemplate.prototype.clearInterface = function() {
  return this.setInterface(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.hasInterface = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Node nodes = 4;
 * @return {!Array<!proto.flyteidl.core.Node>}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.getNodesList = function() {
  return /** @type{!Array<!proto.flyteidl.core.Node>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flyteidl.core.Node, 4));
};


/**
 * @param {!Array<!proto.flyteidl.core.Node>} value
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
*/
proto.flyteidl.core.WorkflowTemplate.prototype.setNodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.flyteidl.core.Node=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.core.Node}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.addNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.flyteidl.core.Node, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
 */
proto.flyteidl.core.WorkflowTemplate.prototype.clearNodesList = function() {
  return this.setNodesList([]);
};


/**
 * repeated Binding outputs = 5;
 * @return {!Array<!proto.flyteidl.core.Binding>}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.flyteidl.core.Binding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flyteidl.core.Binding, 5));
};


/**
 * @param {!Array<!proto.flyteidl.core.Binding>} value
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
*/
proto.flyteidl.core.WorkflowTemplate.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.flyteidl.core.Binding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.core.Binding}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.flyteidl.core.Binding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
 */
proto.flyteidl.core.WorkflowTemplate.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};


/**
 * optional Node failure_node = 6;
 * @return {?proto.flyteidl.core.Node}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.getFailureNode = function() {
  return /** @type{?proto.flyteidl.core.Node} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.Node, 6));
};


/**
 * @param {?proto.flyteidl.core.Node|undefined} value
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
*/
proto.flyteidl.core.WorkflowTemplate.prototype.setFailureNode = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
 */
proto.flyteidl.core.WorkflowTemplate.prototype.clearFailureNode = function() {
  return this.setFailureNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.hasFailureNode = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional WorkflowMetadataDefaults metadata_defaults = 7;
 * @return {?proto.flyteidl.core.WorkflowMetadataDefaults}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.getMetadataDefaults = function() {
  return /** @type{?proto.flyteidl.core.WorkflowMetadataDefaults} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.WorkflowMetadataDefaults, 7));
};


/**
 * @param {?proto.flyteidl.core.WorkflowMetadataDefaults|undefined} value
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
*/
proto.flyteidl.core.WorkflowTemplate.prototype.setMetadataDefaults = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.WorkflowTemplate} returns this
 */
proto.flyteidl.core.WorkflowTemplate.prototype.clearMetadataDefaults = function() {
  return this.setMetadataDefaults(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.WorkflowTemplate.prototype.hasMetadataDefaults = function() {
  return jspb.Message.getField(this, 7) != null;
};


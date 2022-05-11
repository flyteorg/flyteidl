// source: flyteidl/event/event.proto
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

goog.provide('proto.flyteidl.event.DynamicWorkflowNodeMetadata');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.flyteidl.core.CompiledWorkflowClosure');
goog.require('proto.flyteidl.core.Identifier');

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
proto.flyteidl.event.DynamicWorkflowNodeMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.event.DynamicWorkflowNodeMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.event.DynamicWorkflowNodeMetadata.displayName = 'proto.flyteidl.event.DynamicWorkflowNodeMetadata';
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
proto.flyteidl.event.DynamicWorkflowNodeMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.event.DynamicWorkflowNodeMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.event.DynamicWorkflowNodeMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.event.DynamicWorkflowNodeMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.flyteidl.core.Identifier.toObject(includeInstance, f),
    compiledWorkflow: (f = msg.getCompiledWorkflow()) && proto.flyteidl.core.CompiledWorkflowClosure.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.event.DynamicWorkflowNodeMetadata}
 */
proto.flyteidl.event.DynamicWorkflowNodeMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.event.DynamicWorkflowNodeMetadata;
  return proto.flyteidl.event.DynamicWorkflowNodeMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.event.DynamicWorkflowNodeMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.event.DynamicWorkflowNodeMetadata}
 */
proto.flyteidl.event.DynamicWorkflowNodeMetadata.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.flyteidl.core.CompiledWorkflowClosure;
      reader.readMessage(value,proto.flyteidl.core.CompiledWorkflowClosure.deserializeBinaryFromReader);
      msg.setCompiledWorkflow(value);
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
proto.flyteidl.event.DynamicWorkflowNodeMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.event.DynamicWorkflowNodeMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.event.DynamicWorkflowNodeMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.event.DynamicWorkflowNodeMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.core.Identifier.serializeBinaryToWriter
    );
  }
  f = message.getCompiledWorkflow();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.core.CompiledWorkflowClosure.serializeBinaryToWriter
    );
  }
};


/**
 * optional flyteidl.core.Identifier id = 1;
 * @return {?proto.flyteidl.core.Identifier}
 */
proto.flyteidl.event.DynamicWorkflowNodeMetadata.prototype.getId = function() {
  return /** @type{?proto.flyteidl.core.Identifier} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.Identifier, 1));
};


/**
 * @param {?proto.flyteidl.core.Identifier|undefined} value
 * @return {!proto.flyteidl.event.DynamicWorkflowNodeMetadata} returns this
*/
proto.flyteidl.event.DynamicWorkflowNodeMetadata.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.event.DynamicWorkflowNodeMetadata} returns this
 */
proto.flyteidl.event.DynamicWorkflowNodeMetadata.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.event.DynamicWorkflowNodeMetadata.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional flyteidl.core.CompiledWorkflowClosure compiled_workflow = 2;
 * @return {?proto.flyteidl.core.CompiledWorkflowClosure}
 */
proto.flyteidl.event.DynamicWorkflowNodeMetadata.prototype.getCompiledWorkflow = function() {
  return /** @type{?proto.flyteidl.core.CompiledWorkflowClosure} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.CompiledWorkflowClosure, 2));
};


/**
 * @param {?proto.flyteidl.core.CompiledWorkflowClosure|undefined} value
 * @return {!proto.flyteidl.event.DynamicWorkflowNodeMetadata} returns this
*/
proto.flyteidl.event.DynamicWorkflowNodeMetadata.prototype.setCompiledWorkflow = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.event.DynamicWorkflowNodeMetadata} returns this
 */
proto.flyteidl.event.DynamicWorkflowNodeMetadata.prototype.clearCompiledWorkflow = function() {
  return this.setCompiledWorkflow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.event.DynamicWorkflowNodeMetadata.prototype.hasCompiledWorkflow = function() {
  return jspb.Message.getField(this, 2) != null;
};


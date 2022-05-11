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

goog.provide('proto.flyteidl.core.BranchNode');
goog.provide('proto.flyteidl.core.IfBlock');
goog.provide('proto.flyteidl.core.IfElseBlock');
goog.provide('proto.flyteidl.core.IfElseBlock.DefaultCase');
goog.provide('proto.flyteidl.core.Node');
goog.provide('proto.flyteidl.core.Node.TargetCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.flyteidl.core.Alias');
goog.require('proto.flyteidl.core.Binding');
goog.require('proto.flyteidl.core.BooleanExpression');
goog.require('proto.flyteidl.core.Error');
goog.require('proto.flyteidl.core.NodeMetadata');
goog.require('proto.flyteidl.core.TaskNode');
goog.require('proto.flyteidl.core.WorkflowNode');

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
proto.flyteidl.core.BranchNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.BranchNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.BranchNode.displayName = 'proto.flyteidl.core.BranchNode';
}
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
proto.flyteidl.core.IfBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flyteidl.core.IfBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.IfBlock.displayName = 'proto.flyteidl.core.IfBlock';
}
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
proto.flyteidl.core.IfElseBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flyteidl.core.IfElseBlock.repeatedFields_, proto.flyteidl.core.IfElseBlock.oneofGroups_);
};
goog.inherits(proto.flyteidl.core.IfElseBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.IfElseBlock.displayName = 'proto.flyteidl.core.IfElseBlock';
}
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
proto.flyteidl.core.Node = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.flyteidl.core.Node.repeatedFields_, proto.flyteidl.core.Node.oneofGroups_);
};
goog.inherits(proto.flyteidl.core.Node, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flyteidl.core.Node.displayName = 'proto.flyteidl.core.Node';
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
proto.flyteidl.core.BranchNode.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.BranchNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.BranchNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.BranchNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    ifElse: (f = msg.getIfElse()) && proto.flyteidl.core.IfElseBlock.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.core.BranchNode}
 */
proto.flyteidl.core.BranchNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.BranchNode;
  return proto.flyteidl.core.BranchNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.BranchNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.BranchNode}
 */
proto.flyteidl.core.BranchNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.core.IfElseBlock;
      reader.readMessage(value,proto.flyteidl.core.IfElseBlock.deserializeBinaryFromReader);
      msg.setIfElse(value);
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
proto.flyteidl.core.BranchNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.BranchNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.BranchNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.BranchNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIfElse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.core.IfElseBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional IfElseBlock if_else = 1;
 * @return {?proto.flyteidl.core.IfElseBlock}
 */
proto.flyteidl.core.BranchNode.prototype.getIfElse = function() {
  return /** @type{?proto.flyteidl.core.IfElseBlock} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.IfElseBlock, 1));
};


/**
 * @param {?proto.flyteidl.core.IfElseBlock|undefined} value
 * @return {!proto.flyteidl.core.BranchNode} returns this
*/
proto.flyteidl.core.BranchNode.prototype.setIfElse = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.BranchNode} returns this
 */
proto.flyteidl.core.BranchNode.prototype.clearIfElse = function() {
  return this.setIfElse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.BranchNode.prototype.hasIfElse = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.flyteidl.core.IfBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.IfBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.IfBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.IfBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    condition: (f = msg.getCondition()) && proto.flyteidl.core.BooleanExpression.toObject(includeInstance, f),
    thenNode: (f = msg.getThenNode()) && proto.flyteidl.core.Node.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.core.IfBlock}
 */
proto.flyteidl.core.IfBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.IfBlock;
  return proto.flyteidl.core.IfBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.IfBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.IfBlock}
 */
proto.flyteidl.core.IfBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.core.BooleanExpression;
      reader.readMessage(value,proto.flyteidl.core.BooleanExpression.deserializeBinaryFromReader);
      msg.setCondition(value);
      break;
    case 2:
      var value = new proto.flyteidl.core.Node;
      reader.readMessage(value,proto.flyteidl.core.Node.deserializeBinaryFromReader);
      msg.setThenNode(value);
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
proto.flyteidl.core.IfBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.IfBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.IfBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.IfBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCondition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.core.BooleanExpression.serializeBinaryToWriter
    );
  }
  f = message.getThenNode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.core.Node.serializeBinaryToWriter
    );
  }
};


/**
 * optional BooleanExpression condition = 1;
 * @return {?proto.flyteidl.core.BooleanExpression}
 */
proto.flyteidl.core.IfBlock.prototype.getCondition = function() {
  return /** @type{?proto.flyteidl.core.BooleanExpression} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.BooleanExpression, 1));
};


/**
 * @param {?proto.flyteidl.core.BooleanExpression|undefined} value
 * @return {!proto.flyteidl.core.IfBlock} returns this
*/
proto.flyteidl.core.IfBlock.prototype.setCondition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.IfBlock} returns this
 */
proto.flyteidl.core.IfBlock.prototype.clearCondition = function() {
  return this.setCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.IfBlock.prototype.hasCondition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Node then_node = 2;
 * @return {?proto.flyteidl.core.Node}
 */
proto.flyteidl.core.IfBlock.prototype.getThenNode = function() {
  return /** @type{?proto.flyteidl.core.Node} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.Node, 2));
};


/**
 * @param {?proto.flyteidl.core.Node|undefined} value
 * @return {!proto.flyteidl.core.IfBlock} returns this
*/
proto.flyteidl.core.IfBlock.prototype.setThenNode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.IfBlock} returns this
 */
proto.flyteidl.core.IfBlock.prototype.clearThenNode = function() {
  return this.setThenNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.IfBlock.prototype.hasThenNode = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flyteidl.core.IfElseBlock.repeatedFields_ = [2];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.flyteidl.core.IfElseBlock.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.flyteidl.core.IfElseBlock.DefaultCase = {
  DEFAULT_NOT_SET: 0,
  ELSE_NODE: 3,
  ERROR: 4
};

/**
 * @return {proto.flyteidl.core.IfElseBlock.DefaultCase}
 */
proto.flyteidl.core.IfElseBlock.prototype.getDefaultCase = function() {
  return /** @type {proto.flyteidl.core.IfElseBlock.DefaultCase} */(jspb.Message.computeOneofCase(this, proto.flyteidl.core.IfElseBlock.oneofGroups_[0]));
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
proto.flyteidl.core.IfElseBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.IfElseBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.IfElseBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.IfElseBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_case: (f = msg.getCase()) && proto.flyteidl.core.IfBlock.toObject(includeInstance, f),
    otherList: jspb.Message.toObjectList(msg.getOtherList(),
    proto.flyteidl.core.IfBlock.toObject, includeInstance),
    elseNode: (f = msg.getElseNode()) && proto.flyteidl.core.Node.toObject(includeInstance, f),
    error: (f = msg.getError()) && proto.flyteidl.core.Error.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.core.IfElseBlock}
 */
proto.flyteidl.core.IfElseBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.IfElseBlock;
  return proto.flyteidl.core.IfElseBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.IfElseBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.IfElseBlock}
 */
proto.flyteidl.core.IfElseBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.flyteidl.core.IfBlock;
      reader.readMessage(value,proto.flyteidl.core.IfBlock.deserializeBinaryFromReader);
      msg.setCase(value);
      break;
    case 2:
      var value = new proto.flyteidl.core.IfBlock;
      reader.readMessage(value,proto.flyteidl.core.IfBlock.deserializeBinaryFromReader);
      msg.addOther(value);
      break;
    case 3:
      var value = new proto.flyteidl.core.Node;
      reader.readMessage(value,proto.flyteidl.core.Node.deserializeBinaryFromReader);
      msg.setElseNode(value);
      break;
    case 4:
      var value = new proto.flyteidl.core.Error;
      reader.readMessage(value,proto.flyteidl.core.Error.deserializeBinaryFromReader);
      msg.setError(value);
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
proto.flyteidl.core.IfElseBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.IfElseBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.IfElseBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.IfElseBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCase();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.flyteidl.core.IfBlock.serializeBinaryToWriter
    );
  }
  f = message.getOtherList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.flyteidl.core.IfBlock.serializeBinaryToWriter
    );
  }
  f = message.getElseNode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.flyteidl.core.Node.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.flyteidl.core.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional IfBlock case = 1;
 * @return {?proto.flyteidl.core.IfBlock}
 */
proto.flyteidl.core.IfElseBlock.prototype.getCase = function() {
  return /** @type{?proto.flyteidl.core.IfBlock} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.IfBlock, 1));
};


/**
 * @param {?proto.flyteidl.core.IfBlock|undefined} value
 * @return {!proto.flyteidl.core.IfElseBlock} returns this
*/
proto.flyteidl.core.IfElseBlock.prototype.setCase = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.IfElseBlock} returns this
 */
proto.flyteidl.core.IfElseBlock.prototype.clearCase = function() {
  return this.setCase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.IfElseBlock.prototype.hasCase = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated IfBlock other = 2;
 * @return {!Array<!proto.flyteidl.core.IfBlock>}
 */
proto.flyteidl.core.IfElseBlock.prototype.getOtherList = function() {
  return /** @type{!Array<!proto.flyteidl.core.IfBlock>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flyteidl.core.IfBlock, 2));
};


/**
 * @param {!Array<!proto.flyteidl.core.IfBlock>} value
 * @return {!proto.flyteidl.core.IfElseBlock} returns this
*/
proto.flyteidl.core.IfElseBlock.prototype.setOtherList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.flyteidl.core.IfBlock=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.core.IfBlock}
 */
proto.flyteidl.core.IfElseBlock.prototype.addOther = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.flyteidl.core.IfBlock, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.core.IfElseBlock} returns this
 */
proto.flyteidl.core.IfElseBlock.prototype.clearOtherList = function() {
  return this.setOtherList([]);
};


/**
 * optional Node else_node = 3;
 * @return {?proto.flyteidl.core.Node}
 */
proto.flyteidl.core.IfElseBlock.prototype.getElseNode = function() {
  return /** @type{?proto.flyteidl.core.Node} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.Node, 3));
};


/**
 * @param {?proto.flyteidl.core.Node|undefined} value
 * @return {!proto.flyteidl.core.IfElseBlock} returns this
*/
proto.flyteidl.core.IfElseBlock.prototype.setElseNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.flyteidl.core.IfElseBlock.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.IfElseBlock} returns this
 */
proto.flyteidl.core.IfElseBlock.prototype.clearElseNode = function() {
  return this.setElseNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.IfElseBlock.prototype.hasElseNode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Error error = 4;
 * @return {?proto.flyteidl.core.Error}
 */
proto.flyteidl.core.IfElseBlock.prototype.getError = function() {
  return /** @type{?proto.flyteidl.core.Error} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.Error, 4));
};


/**
 * @param {?proto.flyteidl.core.Error|undefined} value
 * @return {!proto.flyteidl.core.IfElseBlock} returns this
*/
proto.flyteidl.core.IfElseBlock.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.flyteidl.core.IfElseBlock.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.IfElseBlock} returns this
 */
proto.flyteidl.core.IfElseBlock.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.IfElseBlock.prototype.hasError = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.flyteidl.core.Node.repeatedFields_ = [3,4,5];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.flyteidl.core.Node.oneofGroups_ = [[6,7,8]];

/**
 * @enum {number}
 */
proto.flyteidl.core.Node.TargetCase = {
  TARGET_NOT_SET: 0,
  TASK_NODE: 6,
  WORKFLOW_NODE: 7,
  BRANCH_NODE: 8
};

/**
 * @return {proto.flyteidl.core.Node.TargetCase}
 */
proto.flyteidl.core.Node.prototype.getTargetCase = function() {
  return /** @type {proto.flyteidl.core.Node.TargetCase} */(jspb.Message.computeOneofCase(this, proto.flyteidl.core.Node.oneofGroups_[0]));
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
proto.flyteidl.core.Node.prototype.toObject = function(opt_includeInstance) {
  return proto.flyteidl.core.Node.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flyteidl.core.Node} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.Node.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    metadata: (f = msg.getMetadata()) && proto.flyteidl.core.NodeMetadata.toObject(includeInstance, f),
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    proto.flyteidl.core.Binding.toObject, includeInstance),
    upstreamNodeIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    outputAliasesList: jspb.Message.toObjectList(msg.getOutputAliasesList(),
    proto.flyteidl.core.Alias.toObject, includeInstance),
    taskNode: (f = msg.getTaskNode()) && proto.flyteidl.core.TaskNode.toObject(includeInstance, f),
    workflowNode: (f = msg.getWorkflowNode()) && proto.flyteidl.core.WorkflowNode.toObject(includeInstance, f),
    branchNode: (f = msg.getBranchNode()) && proto.flyteidl.core.BranchNode.toObject(includeInstance, f)
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
 * @return {!proto.flyteidl.core.Node}
 */
proto.flyteidl.core.Node.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flyteidl.core.Node;
  return proto.flyteidl.core.Node.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flyteidl.core.Node} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flyteidl.core.Node}
 */
proto.flyteidl.core.Node.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.flyteidl.core.NodeMetadata;
      reader.readMessage(value,proto.flyteidl.core.NodeMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 3:
      var value = new proto.flyteidl.core.Binding;
      reader.readMessage(value,proto.flyteidl.core.Binding.deserializeBinaryFromReader);
      msg.addInputs(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addUpstreamNodeIds(value);
      break;
    case 5:
      var value = new proto.flyteidl.core.Alias;
      reader.readMessage(value,proto.flyteidl.core.Alias.deserializeBinaryFromReader);
      msg.addOutputAliases(value);
      break;
    case 6:
      var value = new proto.flyteidl.core.TaskNode;
      reader.readMessage(value,proto.flyteidl.core.TaskNode.deserializeBinaryFromReader);
      msg.setTaskNode(value);
      break;
    case 7:
      var value = new proto.flyteidl.core.WorkflowNode;
      reader.readMessage(value,proto.flyteidl.core.WorkflowNode.deserializeBinaryFromReader);
      msg.setWorkflowNode(value);
      break;
    case 8:
      var value = new proto.flyteidl.core.BranchNode;
      reader.readMessage(value,proto.flyteidl.core.BranchNode.deserializeBinaryFromReader);
      msg.setBranchNode(value);
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
proto.flyteidl.core.Node.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flyteidl.core.Node.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flyteidl.core.Node} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flyteidl.core.Node.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.flyteidl.core.NodeMetadata.serializeBinaryToWriter
    );
  }
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.flyteidl.core.Binding.serializeBinaryToWriter
    );
  }
  f = message.getUpstreamNodeIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getOutputAliasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.flyteidl.core.Alias.serializeBinaryToWriter
    );
  }
  f = message.getTaskNode();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.flyteidl.core.TaskNode.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowNode();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.flyteidl.core.WorkflowNode.serializeBinaryToWriter
    );
  }
  f = message.getBranchNode();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.flyteidl.core.BranchNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.flyteidl.core.Node.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.flyteidl.core.Node} returns this
 */
proto.flyteidl.core.Node.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional NodeMetadata metadata = 2;
 * @return {?proto.flyteidl.core.NodeMetadata}
 */
proto.flyteidl.core.Node.prototype.getMetadata = function() {
  return /** @type{?proto.flyteidl.core.NodeMetadata} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.NodeMetadata, 2));
};


/**
 * @param {?proto.flyteidl.core.NodeMetadata|undefined} value
 * @return {!proto.flyteidl.core.Node} returns this
*/
proto.flyteidl.core.Node.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.Node} returns this
 */
proto.flyteidl.core.Node.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.Node.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Binding inputs = 3;
 * @return {!Array<!proto.flyteidl.core.Binding>}
 */
proto.flyteidl.core.Node.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.flyteidl.core.Binding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flyteidl.core.Binding, 3));
};


/**
 * @param {!Array<!proto.flyteidl.core.Binding>} value
 * @return {!proto.flyteidl.core.Node} returns this
*/
proto.flyteidl.core.Node.prototype.setInputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.flyteidl.core.Binding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.core.Binding}
 */
proto.flyteidl.core.Node.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.flyteidl.core.Binding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.core.Node} returns this
 */
proto.flyteidl.core.Node.prototype.clearInputsList = function() {
  return this.setInputsList([]);
};


/**
 * repeated string upstream_node_ids = 4;
 * @return {!Array<string>}
 */
proto.flyteidl.core.Node.prototype.getUpstreamNodeIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.flyteidl.core.Node} returns this
 */
proto.flyteidl.core.Node.prototype.setUpstreamNodeIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.core.Node} returns this
 */
proto.flyteidl.core.Node.prototype.addUpstreamNodeIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.core.Node} returns this
 */
proto.flyteidl.core.Node.prototype.clearUpstreamNodeIdsList = function() {
  return this.setUpstreamNodeIdsList([]);
};


/**
 * repeated Alias output_aliases = 5;
 * @return {!Array<!proto.flyteidl.core.Alias>}
 */
proto.flyteidl.core.Node.prototype.getOutputAliasesList = function() {
  return /** @type{!Array<!proto.flyteidl.core.Alias>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.flyteidl.core.Alias, 5));
};


/**
 * @param {!Array<!proto.flyteidl.core.Alias>} value
 * @return {!proto.flyteidl.core.Node} returns this
*/
proto.flyteidl.core.Node.prototype.setOutputAliasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.flyteidl.core.Alias=} opt_value
 * @param {number=} opt_index
 * @return {!proto.flyteidl.core.Alias}
 */
proto.flyteidl.core.Node.prototype.addOutputAliases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.flyteidl.core.Alias, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.flyteidl.core.Node} returns this
 */
proto.flyteidl.core.Node.prototype.clearOutputAliasesList = function() {
  return this.setOutputAliasesList([]);
};


/**
 * optional TaskNode task_node = 6;
 * @return {?proto.flyteidl.core.TaskNode}
 */
proto.flyteidl.core.Node.prototype.getTaskNode = function() {
  return /** @type{?proto.flyteidl.core.TaskNode} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.TaskNode, 6));
};


/**
 * @param {?proto.flyteidl.core.TaskNode|undefined} value
 * @return {!proto.flyteidl.core.Node} returns this
*/
proto.flyteidl.core.Node.prototype.setTaskNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.flyteidl.core.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.Node} returns this
 */
proto.flyteidl.core.Node.prototype.clearTaskNode = function() {
  return this.setTaskNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.Node.prototype.hasTaskNode = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional WorkflowNode workflow_node = 7;
 * @return {?proto.flyteidl.core.WorkflowNode}
 */
proto.flyteidl.core.Node.prototype.getWorkflowNode = function() {
  return /** @type{?proto.flyteidl.core.WorkflowNode} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.WorkflowNode, 7));
};


/**
 * @param {?proto.flyteidl.core.WorkflowNode|undefined} value
 * @return {!proto.flyteidl.core.Node} returns this
*/
proto.flyteidl.core.Node.prototype.setWorkflowNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.flyteidl.core.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.Node} returns this
 */
proto.flyteidl.core.Node.prototype.clearWorkflowNode = function() {
  return this.setWorkflowNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.Node.prototype.hasWorkflowNode = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional BranchNode branch_node = 8;
 * @return {?proto.flyteidl.core.BranchNode}
 */
proto.flyteidl.core.Node.prototype.getBranchNode = function() {
  return /** @type{?proto.flyteidl.core.BranchNode} */ (
    jspb.Message.getWrapperField(this, proto.flyteidl.core.BranchNode, 8));
};


/**
 * @param {?proto.flyteidl.core.BranchNode|undefined} value
 * @return {!proto.flyteidl.core.Node} returns this
*/
proto.flyteidl.core.Node.prototype.setBranchNode = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.flyteidl.core.Node.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.flyteidl.core.Node} returns this
 */
proto.flyteidl.core.Node.prototype.clearBranchNode = function() {
  return this.setBranchNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.flyteidl.core.Node.prototype.hasBranchNode = function() {
  return jspb.Message.getField(this, 8) != null;
};


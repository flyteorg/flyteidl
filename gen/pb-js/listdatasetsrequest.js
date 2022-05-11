// source: flyteidl/datacatalog/datacatalog.proto
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

goog.provide('proto.datacatalog.ListDatasetsRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.datacatalog.FilterExpression');
goog.require('proto.datacatalog.PaginationOptions');

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
proto.datacatalog.ListDatasetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.datacatalog.ListDatasetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.datacatalog.ListDatasetsRequest.displayName = 'proto.datacatalog.ListDatasetsRequest';
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
proto.datacatalog.ListDatasetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.datacatalog.ListDatasetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.datacatalog.ListDatasetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datacatalog.ListDatasetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filter: (f = msg.getFilter()) && proto.datacatalog.FilterExpression.toObject(includeInstance, f),
    pagination: (f = msg.getPagination()) && proto.datacatalog.PaginationOptions.toObject(includeInstance, f)
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
 * @return {!proto.datacatalog.ListDatasetsRequest}
 */
proto.datacatalog.ListDatasetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.datacatalog.ListDatasetsRequest;
  return proto.datacatalog.ListDatasetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.datacatalog.ListDatasetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.datacatalog.ListDatasetsRequest}
 */
proto.datacatalog.ListDatasetsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.datacatalog.FilterExpression;
      reader.readMessage(value,proto.datacatalog.FilterExpression.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 2:
      var value = new proto.datacatalog.PaginationOptions;
      reader.readMessage(value,proto.datacatalog.PaginationOptions.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.datacatalog.ListDatasetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.datacatalog.ListDatasetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.datacatalog.ListDatasetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.datacatalog.ListDatasetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.datacatalog.FilterExpression.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.datacatalog.PaginationOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional FilterExpression filter = 1;
 * @return {?proto.datacatalog.FilterExpression}
 */
proto.datacatalog.ListDatasetsRequest.prototype.getFilter = function() {
  return /** @type{?proto.datacatalog.FilterExpression} */ (
    jspb.Message.getWrapperField(this, proto.datacatalog.FilterExpression, 1));
};


/**
 * @param {?proto.datacatalog.FilterExpression|undefined} value
 * @return {!proto.datacatalog.ListDatasetsRequest} returns this
*/
proto.datacatalog.ListDatasetsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datacatalog.ListDatasetsRequest} returns this
 */
proto.datacatalog.ListDatasetsRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datacatalog.ListDatasetsRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PaginationOptions pagination = 2;
 * @return {?proto.datacatalog.PaginationOptions}
 */
proto.datacatalog.ListDatasetsRequest.prototype.getPagination = function() {
  return /** @type{?proto.datacatalog.PaginationOptions} */ (
    jspb.Message.getWrapperField(this, proto.datacatalog.PaginationOptions, 2));
};


/**
 * @param {?proto.datacatalog.PaginationOptions|undefined} value
 * @return {!proto.datacatalog.ListDatasetsRequest} returns this
*/
proto.datacatalog.ListDatasetsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.datacatalog.ListDatasetsRequest} returns this
 */
proto.datacatalog.ListDatasetsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.datacatalog.ListDatasetsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


.. _api_file_flyteidl/core/primitives.proto:

primitives.proto
==============================

.. _api_msg_flyteidl.core.Primitive:

flyteidl.core.Primitive
-----------------------

`[flyteidl.core.Primitive proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/primitives.proto#L10>`_

Primitive Types

.. code-block:: json

  {
    "integer": "...",
    "float_value": "...",
    "string_value": "...",
    "boolean": "...",
    "datetime": "{...}",
    "duration": "{...}"
  }

.. _api_field_flyteidl.core.Primitive.integer:

integer
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  Defines one of simple primitive types. These types will get translated into different programming languages as
  described in https://developers.google.com/protocol-buffers/docs/proto#scalar.
  
  
  Only one of :ref:`integer <api_field_flyteidl.core.Primitive.integer>`, :ref:`float_value <api_field_flyteidl.core.Primitive.float_value>`, :ref:`string_value <api_field_flyteidl.core.Primitive.string_value>`, :ref:`boolean <api_field_flyteidl.core.Primitive.boolean>`, :ref:`datetime <api_field_flyteidl.core.Primitive.datetime>`, :ref:`duration <api_field_flyteidl.core.Primitive.duration>` may be set.
  
.. _api_field_flyteidl.core.Primitive.float_value:

float_value
  (`double <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  Defines one of simple primitive types. These types will get translated into different programming languages as
  described in https://developers.google.com/protocol-buffers/docs/proto#scalar.
  
  
  Only one of :ref:`integer <api_field_flyteidl.core.Primitive.integer>`, :ref:`float_value <api_field_flyteidl.core.Primitive.float_value>`, :ref:`string_value <api_field_flyteidl.core.Primitive.string_value>`, :ref:`boolean <api_field_flyteidl.core.Primitive.boolean>`, :ref:`datetime <api_field_flyteidl.core.Primitive.datetime>`, :ref:`duration <api_field_flyteidl.core.Primitive.duration>` may be set.
  
.. _api_field_flyteidl.core.Primitive.string_value:

string_value
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  Defines one of simple primitive types. These types will get translated into different programming languages as
  described in https://developers.google.com/protocol-buffers/docs/proto#scalar.
  
  
  Only one of :ref:`integer <api_field_flyteidl.core.Primitive.integer>`, :ref:`float_value <api_field_flyteidl.core.Primitive.float_value>`, :ref:`string_value <api_field_flyteidl.core.Primitive.string_value>`, :ref:`boolean <api_field_flyteidl.core.Primitive.boolean>`, :ref:`datetime <api_field_flyteidl.core.Primitive.datetime>`, :ref:`duration <api_field_flyteidl.core.Primitive.duration>` may be set.
  
.. _api_field_flyteidl.core.Primitive.boolean:

boolean
  (`bool <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  Defines one of simple primitive types. These types will get translated into different programming languages as
  described in https://developers.google.com/protocol-buffers/docs/proto#scalar.
  
  
  Only one of :ref:`integer <api_field_flyteidl.core.Primitive.integer>`, :ref:`float_value <api_field_flyteidl.core.Primitive.float_value>`, :ref:`string_value <api_field_flyteidl.core.Primitive.string_value>`, :ref:`boolean <api_field_flyteidl.core.Primitive.boolean>`, :ref:`datetime <api_field_flyteidl.core.Primitive.datetime>`, :ref:`duration <api_field_flyteidl.core.Primitive.duration>` may be set.
  
.. _api_field_flyteidl.core.Primitive.datetime:

datetime
  (:ref:`google.protobuf.Timestamp <api_msg_google.protobuf.Timestamp>`) 
  Defines one of simple primitive types. These types will get translated into different programming languages as
  described in https://developers.google.com/protocol-buffers/docs/proto#scalar.
  
  
  Only one of :ref:`integer <api_field_flyteidl.core.Primitive.integer>`, :ref:`float_value <api_field_flyteidl.core.Primitive.float_value>`, :ref:`string_value <api_field_flyteidl.core.Primitive.string_value>`, :ref:`boolean <api_field_flyteidl.core.Primitive.boolean>`, :ref:`datetime <api_field_flyteidl.core.Primitive.datetime>`, :ref:`duration <api_field_flyteidl.core.Primitive.duration>` may be set.
  
.. _api_field_flyteidl.core.Primitive.duration:

duration
  (:ref:`google.protobuf.Duration <api_msg_google.protobuf.Duration>`) 
  Defines one of simple primitive types. These types will get translated into different programming languages as
  described in https://developers.google.com/protocol-buffers/docs/proto#scalar.
  
  
  Only one of :ref:`integer <api_field_flyteidl.core.Primitive.integer>`, :ref:`float_value <api_field_flyteidl.core.Primitive.float_value>`, :ref:`string_value <api_field_flyteidl.core.Primitive.string_value>`, :ref:`boolean <api_field_flyteidl.core.Primitive.boolean>`, :ref:`datetime <api_field_flyteidl.core.Primitive.datetime>`, :ref:`duration <api_field_flyteidl.core.Primitive.duration>` may be set.
  


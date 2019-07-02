.. _api_file_flyteidl/core/parameter.proto:

parameter.proto
=============================

.. _api_msg_flyteidl.core.Parameter:

flyteidl.core.Parameter
-----------------------

`[flyteidl.core.Parameter proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/parameter.proto#L11>`_

A parameter is used as input to a launch plan and has
the special ability to have a default value or mark itself as required.

.. code-block:: json

  {
    "var": "{...}",
    "default": "{...}",
    "required": "..."
  }

.. _api_field_flyteidl.core.Parameter.var:

var
  (:ref:`flyteidl.core.Variable <api_msg_flyteidl.core.Variable>`) required Variable. Defines the type of the variable backing this parameter.
  
  
.. _api_field_flyteidl.core.Parameter.default:

default
  (:ref:`flyteidl.core.Literal <api_msg_flyteidl.core.Literal>`) Defines a default value that has to match the variable type defined.
  
  optional
  
  
  Only one of :ref:`default <api_field_flyteidl.core.Parameter.default>`, :ref:`required <api_field_flyteidl.core.Parameter.required>` may be set.
  
.. _api_field_flyteidl.core.Parameter.required:

required
  (`bool <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) optional, is this value required to be filled.
  
  optional
  
  
  Only one of :ref:`default <api_field_flyteidl.core.Parameter.default>`, :ref:`required <api_field_flyteidl.core.Parameter.required>` may be set.
  


.. _api_msg_flyteidl.core.ParameterMap:

flyteidl.core.ParameterMap
--------------------------

`[flyteidl.core.ParameterMap proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/parameter.proto#L26>`_

A map of Parameters.

.. code-block:: json

  {
    "parameters": "{...}"
  }

.. _api_field_flyteidl.core.ParameterMap.parameters:

parameters
  (map<`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_, :ref:`flyteidl.core.Parameter <api_msg_flyteidl.core.Parameter>`>) Defines a map of parameter names to parameters.
  
  


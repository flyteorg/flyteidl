.. _api_file_flyteidl/plugins/sagemaker/parameterranges.proto:

parameterranges.proto
================================================

.. _api_msg_flyteidl.plugins.sagemaker.ContinuousParameterRange:

flyteidl.plugins.sagemaker.ContinuousParameterRange
---------------------------------------------------

`[flyteidl.plugins.sagemaker.ContinuousParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameterranges.proto#L13>`_


.. code-block:: json

  {
    "max_value": "...",
    "min_value": "...",
    "scaling_type": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.ContinuousParameterRange.max_value:

max_value
  (`double <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.ContinuousParameterRange.min_value:

min_value
  (`double <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.ContinuousParameterRange.scaling_type:

scaling_type
  (:ref:`flyteidl.plugins.sagemaker.HyperparameterScalingType <api_enum_flyteidl.plugins.sagemaker.HyperparameterScalingType>`) 
  


.. _api_msg_flyteidl.plugins.sagemaker.IntegerParameterRange:

flyteidl.plugins.sagemaker.IntegerParameterRange
------------------------------------------------

`[flyteidl.plugins.sagemaker.IntegerParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameterranges.proto#L19>`_


.. code-block:: json

  {
    "max_value": "...",
    "min_value": "...",
    "scaling_type": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.IntegerParameterRange.max_value:

max_value
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.IntegerParameterRange.min_value:

min_value
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.IntegerParameterRange.scaling_type:

scaling_type
  (:ref:`flyteidl.plugins.sagemaker.HyperparameterScalingType <api_enum_flyteidl.plugins.sagemaker.HyperparameterScalingType>`) 
  


.. _api_msg_flyteidl.plugins.sagemaker.CategoricalParameterRange:

flyteidl.plugins.sagemaker.CategoricalParameterRange
----------------------------------------------------

`[flyteidl.plugins.sagemaker.CategoricalParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameterranges.proto#L25>`_


.. code-block:: json

  {
    "values": []
  }

.. _api_field_flyteidl.plugins.sagemaker.CategoricalParameterRange.values:

values
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyteidl.plugins.sagemaker.ParameterRangeOneOf:

flyteidl.plugins.sagemaker.ParameterRangeOneOf
----------------------------------------------

`[flyteidl.plugins.sagemaker.ParameterRangeOneOf proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameterranges.proto#L29>`_


.. code-block:: json

  {
    "continuous_parameter_range": "{...}",
    "integer_parameter_range": "{...}",
    "categorical_parameter_range": "{...}"
  }

.. _api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.continuous_parameter_range:

continuous_parameter_range
  (:ref:`flyteidl.plugins.sagemaker.ContinuousParameterRange <api_msg_flyteidl.plugins.sagemaker.ContinuousParameterRange>`) 
  
  
  Only one of :ref:`continuous_parameter_range <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.continuous_parameter_range>`, :ref:`integer_parameter_range <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.integer_parameter_range>`, :ref:`categorical_parameter_range <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.categorical_parameter_range>` may be set.
  
.. _api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.integer_parameter_range:

integer_parameter_range
  (:ref:`flyteidl.plugins.sagemaker.IntegerParameterRange <api_msg_flyteidl.plugins.sagemaker.IntegerParameterRange>`) 
  
  
  Only one of :ref:`continuous_parameter_range <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.continuous_parameter_range>`, :ref:`integer_parameter_range <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.integer_parameter_range>`, :ref:`categorical_parameter_range <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.categorical_parameter_range>` may be set.
  
.. _api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.categorical_parameter_range:

categorical_parameter_range
  (:ref:`flyteidl.plugins.sagemaker.CategoricalParameterRange <api_msg_flyteidl.plugins.sagemaker.CategoricalParameterRange>`) 
  
  
  Only one of :ref:`continuous_parameter_range <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.continuous_parameter_range>`, :ref:`integer_parameter_range <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.integer_parameter_range>`, :ref:`categorical_parameter_range <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.categorical_parameter_range>` may be set.
  


.. _api_msg_flyteidl.plugins.sagemaker.ParameterRanges:

flyteidl.plugins.sagemaker.ParameterRanges
------------------------------------------

`[flyteidl.plugins.sagemaker.ParameterRanges proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameterranges.proto#L37>`_


.. code-block:: json

  {
    "parameter_range_map": "{...}"
  }

.. _api_field_flyteidl.plugins.sagemaker.ParameterRanges.parameter_range_map:

parameter_range_map
  (map<`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_, :ref:`flyteidl.plugins.sagemaker.ParameterRangeOneOf <api_msg_flyteidl.plugins.sagemaker.ParameterRangeOneOf>`>) 
  

.. _api_enum_flyteidl.plugins.sagemaker.HyperparameterScalingType:

Enum flyteidl.plugins.sagemaker.HyperparameterScalingType
---------------------------------------------------------

`[flyteidl.plugins.sagemaker.HyperparameterScalingType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameterranges.proto#L6>`_


.. _api_enum_value_flyteidl.plugins.sagemaker.HyperparameterScalingType.AUTO:

AUTO
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.plugins.sagemaker.HyperparameterScalingType.LINEAR:

LINEAR
  ⁣
  
.. _api_enum_value_flyteidl.plugins.sagemaker.HyperparameterScalingType.LOGARITHMIC:

LOGARITHMIC
  ⁣
  
.. _api_enum_value_flyteidl.plugins.sagemaker.HyperparameterScalingType.REVERSELOGARITHMIC:

REVERSELOGARITHMIC
  ⁣
  

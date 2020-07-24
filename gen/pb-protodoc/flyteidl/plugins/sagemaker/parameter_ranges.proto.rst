.. _api_file_flyteidl/plugins/sagemaker/parameter_ranges.proto:

parameter_ranges.proto
=================================================

.. _api_msg_flyteidl.plugins.sagemaker.ContinuousParameterRange:

flyteidl.plugins.sagemaker.ContinuousParameterRange
---------------------------------------------------

`[flyteidl.plugins.sagemaker.ContinuousParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameter_ranges.proto#L17>`_

ContinuousParameterRange refers to a continuous range of hyperparameter values, allowing
users to specify the search space of a floating-point hyperparameter

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

`[flyteidl.plugins.sagemaker.IntegerParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameter_ranges.proto#L25>`_

IntegerParameterRange refers to a discrete range of hyperparameter values, allowing
users to specify the search space of an integer hyperparameter

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

`[flyteidl.plugins.sagemaker.CategoricalParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameter_ranges.proto#L33>`_

ContinuousParameterRange refers to a continuous range of hyperparameter values, allowing
users to specify the search space of a floating-point hyperparameter

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

`[flyteidl.plugins.sagemaker.ParameterRangeOneOf proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameter_ranges.proto#L37>`_


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

`[flyteidl.plugins.sagemaker.ParameterRanges proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameter_ranges.proto#L46>`_

ParameterRanges is a map that maps hyperparameter name to the corresponding hyperparameter range

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

`[flyteidl.plugins.sagemaker.HyperparameterScalingType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameter_ranges.proto#L8>`_

HyperparameterScalingType defines the way to increase or decrease the value of the hyperparameter
https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html

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
  

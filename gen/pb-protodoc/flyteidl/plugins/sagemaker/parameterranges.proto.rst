.. _api_file_flyteidl/plugins/sagemaker/parameterranges.proto:

parameterranges.proto
================================================

.. _api_msg_flyteidl.plugins.sagemaker.ContinuousParameterRange:

flyteidl.plugins.sagemaker.ContinuousParameterRange
---------------------------------------------------

`[flyteidl.plugins.sagemaker.ContinuousParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameterranges.proto#L13>`_


.. code-block:: json

  {
    "MaxValue": "...",
    "MinValue": "...",
    "ScalingType": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.ContinuousParameterRange.MaxValue:

MaxValue
  (`double <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.ContinuousParameterRange.MinValue:

MinValue
  (`double <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.ContinuousParameterRange.ScalingType:

ScalingType
  (:ref:`flyteidl.plugins.sagemaker.HyperparameterScalingType <api_enum_flyteidl.plugins.sagemaker.HyperparameterScalingType>`) 
  


.. _api_msg_flyteidl.plugins.sagemaker.IntegerParameterRange:

flyteidl.plugins.sagemaker.IntegerParameterRange
------------------------------------------------

`[flyteidl.plugins.sagemaker.IntegerParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameterranges.proto#L19>`_


.. code-block:: json

  {
    "MaxValue": "...",
    "MinValue": "...",
    "ScalingType": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.IntegerParameterRange.MaxValue:

MaxValue
  (`float <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.IntegerParameterRange.MinValue:

MinValue
  (`float <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.IntegerParameterRange.ScalingType:

ScalingType
  (:ref:`flyteidl.plugins.sagemaker.HyperparameterScalingType <api_enum_flyteidl.plugins.sagemaker.HyperparameterScalingType>`) 
  


.. _api_msg_flyteidl.plugins.sagemaker.CategoricalParameterRange:

flyteidl.plugins.sagemaker.CategoricalParameterRange
----------------------------------------------------

`[flyteidl.plugins.sagemaker.CategoricalParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameterranges.proto#L25>`_


.. code-block:: json

  {
    "Values": []
  }

.. _api_field_flyteidl.plugins.sagemaker.CategoricalParameterRange.Values:

Values
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyteidl.plugins.sagemaker.ParameterRangeOneOf:

flyteidl.plugins.sagemaker.ParameterRangeOneOf
----------------------------------------------

`[flyteidl.plugins.sagemaker.ParameterRangeOneOf proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameterranges.proto#L29>`_


.. code-block:: json

  {
    "ContinuousParameterRange": "{...}",
    "IntegerParameterRange": "{...}",
    "CategoricalParameterRange": "{...}"
  }

.. _api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.ContinuousParameterRange:

ContinuousParameterRange
  (:ref:`flyteidl.plugins.sagemaker.ContinuousParameterRange <api_msg_flyteidl.plugins.sagemaker.ContinuousParameterRange>`) 
  
  
  Only one of :ref:`ContinuousParameterRange <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.ContinuousParameterRange>`, :ref:`IntegerParameterRange <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.IntegerParameterRange>`, :ref:`CategoricalParameterRange <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.CategoricalParameterRange>` may be set.
  
.. _api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.IntegerParameterRange:

IntegerParameterRange
  (:ref:`flyteidl.plugins.sagemaker.IntegerParameterRange <api_msg_flyteidl.plugins.sagemaker.IntegerParameterRange>`) 
  
  
  Only one of :ref:`ContinuousParameterRange <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.ContinuousParameterRange>`, :ref:`IntegerParameterRange <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.IntegerParameterRange>`, :ref:`CategoricalParameterRange <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.CategoricalParameterRange>` may be set.
  
.. _api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.CategoricalParameterRange:

CategoricalParameterRange
  (:ref:`flyteidl.plugins.sagemaker.CategoricalParameterRange <api_msg_flyteidl.plugins.sagemaker.CategoricalParameterRange>`) 
  
  
  Only one of :ref:`ContinuousParameterRange <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.ContinuousParameterRange>`, :ref:`IntegerParameterRange <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.IntegerParameterRange>`, :ref:`CategoricalParameterRange <api_field_flyteidl.plugins.sagemaker.ParameterRangeOneOf.CategoricalParameterRange>` may be set.
  


.. _api_msg_flyteidl.plugins.sagemaker.ParameterRanges:

flyteidl.plugins.sagemaker.ParameterRanges
------------------------------------------

`[flyteidl.plugins.sagemaker.ParameterRanges proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/parameterranges.proto#L37>`_


.. code-block:: json

  {
    "ParameterRangeMap": "{...}"
  }

.. _api_field_flyteidl.plugins.sagemaker.ParameterRanges.ParameterRangeMap:

ParameterRangeMap
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
  

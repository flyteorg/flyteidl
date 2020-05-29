.. _api_file_flyteidl/plugins/sagemaker.proto:

sagemaker.proto
================================

.. _api_msg_flyte.plugins.ContinuousParameterRange:

flyte.plugins.ContinuousParameterRange
--------------------------------------

`[flyte.plugins.ContinuousParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L13>`_


.. code-block:: json

  {
    "Name": "...",
    "MaxValue": "...",
    "MinValue": "...",
    "ScalingType": "..."
  }

.. _api_field_flyte.plugins.ContinuousParameterRange.Name:

Name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.ContinuousParameterRange.MaxValue:

MaxValue
  (`double <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.ContinuousParameterRange.MinValue:

MinValue
  (`double <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.ContinuousParameterRange.ScalingType:

ScalingType
  (:ref:`flyte.plugins.HyperparameterScalingType <api_enum_flyte.plugins.HyperparameterScalingType>`) 
  


.. _api_msg_flyte.plugins.IntegerParameterRange:

flyte.plugins.IntegerParameterRange
-----------------------------------

`[flyte.plugins.IntegerParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L20>`_


.. code-block:: json

  {
    "Name": "...",
    "MaxValue": "...",
    "MinValue": "...",
    "ScalingType": "..."
  }

.. _api_field_flyte.plugins.IntegerParameterRange.Name:

Name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.IntegerParameterRange.MaxValue:

MaxValue
  (`float <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.IntegerParameterRange.MinValue:

MinValue
  (`float <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.IntegerParameterRange.ScalingType:

ScalingType
  (:ref:`flyte.plugins.HyperparameterScalingType <api_enum_flyte.plugins.HyperparameterScalingType>`) 
  


.. _api_msg_flyte.plugins.CategoricalParameterRange:

flyte.plugins.CategoricalParameterRange
---------------------------------------

`[flyte.plugins.CategoricalParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L27>`_


.. code-block:: json

  {
    "Name": "...",
    "Values": []
  }

.. _api_field_flyte.plugins.CategoricalParameterRange.Name:

Name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.CategoricalParameterRange.Values:

Values
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyte.plugins.ParameterRanges:

flyte.plugins.ParameterRanges
-----------------------------

`[flyte.plugins.ParameterRanges proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L32>`_


.. code-block:: json

  {
    "ContinuousParameterRanges": [],
    "IntegerParameterRanges": [],
    "CategoricalParameterRanges": []
  }

.. _api_field_flyte.plugins.ParameterRanges.ContinuousParameterRanges:

ContinuousParameterRanges
  (:ref:`flyte.plugins.ContinuousParameterRange <api_msg_flyte.plugins.ContinuousParameterRange>`) 
  
.. _api_field_flyte.plugins.ParameterRanges.IntegerParameterRanges:

IntegerParameterRanges
  (:ref:`flyte.plugins.IntegerParameterRange <api_msg_flyte.plugins.IntegerParameterRange>`) 
  
.. _api_field_flyte.plugins.ParameterRanges.CategoricalParameterRanges:

CategoricalParameterRanges
  (:ref:`flyte.plugins.CategoricalParameterRange <api_msg_flyte.plugins.CategoricalParameterRange>`) 
  


.. _api_msg_flyte.plugins.AlgorithmSpecification:

flyte.plugins.AlgorithmSpecification
------------------------------------

`[flyte.plugins.AlgorithmSpecification proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L38>`_


.. code-block:: json

  {
    "TrainingImage": "...",
    "TrainingInputMode": "...",
    "AlgorithmName": "...",
    "MetricDefinitions": []
  }

.. _api_field_flyte.plugins.AlgorithmSpecification.TrainingImage:

TrainingImage
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.AlgorithmSpecification.TrainingInputMode:

TrainingInputMode
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.AlgorithmSpecification.AlgorithmName:

AlgorithmName
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.AlgorithmSpecification.MetricDefinitions:

MetricDefinitions
  (:ref:`flyte.plugins.AlgorithmSpecification.MetricDefinition <api_msg_flyte.plugins.AlgorithmSpecification.MetricDefinition>`) 
  
.. _api_msg_flyte.plugins.AlgorithmSpecification.MetricDefinition:

flyte.plugins.AlgorithmSpecification.MetricDefinition
-----------------------------------------------------

`[flyte.plugins.AlgorithmSpecification.MetricDefinition proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L43>`_


.. code-block:: json

  {
    "Name": "...",
    "Regex": "..."
  }

.. _api_field_flyte.plugins.AlgorithmSpecification.MetricDefinition.Name:

Name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.AlgorithmSpecification.MetricDefinition.Regex:

Regex
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  



.. _api_msg_flyte.plugins.ResourceConfig:

flyte.plugins.ResourceConfig
----------------------------

`[flyte.plugins.ResourceConfig proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L50>`_


.. code-block:: json

  {
    "InstanceType": "...",
    "InstanceCount": "...",
    "VolumeSizeInGB": "...",
    "VolumeKmsKeyId": "..."
  }

.. _api_field_flyte.plugins.ResourceConfig.InstanceType:

InstanceType
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.ResourceConfig.InstanceCount:

InstanceCount
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.ResourceConfig.VolumeSizeInGB:

VolumeSizeInGB
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.ResourceConfig.VolumeKmsKeyId:

VolumeKmsKeyId
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyte.plugins.StoppingCondition:

flyte.plugins.StoppingCondition
-------------------------------

`[flyte.plugins.StoppingCondition proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L57>`_


.. code-block:: json

  {
    "MaxRuntimeInSeconds": "...",
    "MaxWaitTimeInSeconds": "..."
  }

.. _api_field_flyte.plugins.StoppingCondition.MaxRuntimeInSeconds:

MaxRuntimeInSeconds
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.StoppingCondition.MaxWaitTimeInSeconds:

MaxWaitTimeInSeconds
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyte.plugins.VpcConfig:

flyte.plugins.VpcConfig
-----------------------

`[flyte.plugins.VpcConfig proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L62>`_


.. code-block:: json

  {
    "SecurityGroupIds": [],
    "Subnets": []
  }

.. _api_field_flyte.plugins.VpcConfig.SecurityGroupIds:

SecurityGroupIds
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.VpcConfig.Subnets:

Subnets
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyte.plugins.SagemakerTrainingJob:

flyte.plugins.SagemakerTrainingJob
----------------------------------

`[flyte.plugins.SagemakerTrainingJob proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L67>`_


.. code-block:: json

  {
    "Region": "...",
    "RoleArn": "...",
    "AlgorithmSpecification": "{...}",
    "ResourceConfig": "{...}",
    "StoppingCondition": "{...}",
    "VpcConfig": "{...}",
    "EnableSpotTraining": "..."
  }

.. _api_field_flyte.plugins.SagemakerTrainingJob.Region:

Region
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.SagemakerTrainingJob.RoleArn:

RoleArn
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.SagemakerTrainingJob.AlgorithmSpecification:

AlgorithmSpecification
  (:ref:`flyte.plugins.AlgorithmSpecification <api_msg_flyte.plugins.AlgorithmSpecification>`) 
  
.. _api_field_flyte.plugins.SagemakerTrainingJob.ResourceConfig:

ResourceConfig
  (:ref:`flyte.plugins.ResourceConfig <api_msg_flyte.plugins.ResourceConfig>`) 
  
.. _api_field_flyte.plugins.SagemakerTrainingJob.StoppingCondition:

StoppingCondition
  (:ref:`flyte.plugins.StoppingCondition <api_msg_flyte.plugins.StoppingCondition>`) 
  
.. _api_field_flyte.plugins.SagemakerTrainingJob.VpcConfig:

VpcConfig
  (:ref:`flyte.plugins.VpcConfig <api_msg_flyte.plugins.VpcConfig>`) 
  
.. _api_field_flyte.plugins.SagemakerTrainingJob.EnableSpotTraining:

EnableSpotTraining
  (`bool <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyte.plugins.HPOJobObjective:

flyte.plugins.HPOJobObjective
-----------------------------

`[flyte.plugins.HPOJobObjective proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L82>`_


.. code-block:: json

  {
    "Type": "...",
    "MetricName": "..."
  }

.. _api_field_flyte.plugins.HPOJobObjective.Type:

Type
  (:ref:`flyte.plugins.HPOJobObjectiveType <api_enum_flyte.plugins.HPOJobObjectiveType>`) 
  
.. _api_field_flyte.plugins.HPOJobObjective.MetricName:

MetricName
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyte.plugins.SagemakerHPOJob:

flyte.plugins.SagemakerHPOJob
-----------------------------

`[flyte.plugins.SagemakerHPOJob proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L87>`_


.. code-block:: json

  {
    "Strategy": "...",
    "Objective": "{...}",
    "MaxNumberOfTrainingJobs": "...",
    "MaxParallelTrainingJobs": "...",
    "ParameterRanges": "{...}",
    "TrainingJob": "{...}"
  }

.. _api_field_flyte.plugins.SagemakerHPOJob.Strategy:

Strategy
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.SagemakerHPOJob.Objective:

Objective
  (:ref:`flyte.plugins.HPOJobObjective <api_msg_flyte.plugins.HPOJobObjective>`) 
  
.. _api_field_flyte.plugins.SagemakerHPOJob.MaxNumberOfTrainingJobs:

MaxNumberOfTrainingJobs
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.SagemakerHPOJob.MaxParallelTrainingJobs:

MaxParallelTrainingJobs
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.SagemakerHPOJob.ParameterRanges:

ParameterRanges
  (:ref:`flyte.plugins.ParameterRanges <api_msg_flyte.plugins.ParameterRanges>`) 
  
.. _api_field_flyte.plugins.SagemakerHPOJob.TrainingJob:

TrainingJob
  (:ref:`flyte.plugins.SagemakerTrainingJob <api_msg_flyte.plugins.SagemakerTrainingJob>`) 
  

.. _api_enum_flyte.plugins.HyperparameterScalingType:

Enum flyte.plugins.HyperparameterScalingType
--------------------------------------------

`[flyte.plugins.HyperparameterScalingType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L6>`_


.. _api_enum_value_flyte.plugins.HyperparameterScalingType.AUTO:

AUTO
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyte.plugins.HyperparameterScalingType.LINEAR:

LINEAR
  ⁣
  
.. _api_enum_value_flyte.plugins.HyperparameterScalingType.LOGARITHMIC:

LOGARITHMIC
  ⁣
  
.. _api_enum_value_flyte.plugins.HyperparameterScalingType.REVERSELOGARITHMIC:

REVERSELOGARITHMIC
  ⁣
  

.. _api_enum_flyte.plugins.HPOJobObjectiveType:

Enum flyte.plugins.HPOJobObjectiveType
--------------------------------------

`[flyte.plugins.HPOJobObjectiveType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker.proto#L77>`_


.. _api_enum_value_flyte.plugins.HPOJobObjectiveType.MINIMIZE:

MINIMIZE
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyte.plugins.HPOJobObjectiveType.MAXIMIZE:

MAXIMIZE
  ⁣
  

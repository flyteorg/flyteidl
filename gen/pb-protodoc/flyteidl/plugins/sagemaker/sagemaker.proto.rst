.. _api_file_flyteidl/plugins/sagemaker/sagemaker.proto:

sagemaker.proto
==========================================

.. _api_msg_flyte.plugins.sagemaker.ContinuousParameterRange:

flyte.plugins.sagemaker.ContinuousParameterRange
------------------------------------------------

`[flyte.plugins.sagemaker.ContinuousParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L13>`_


.. code-block:: json

  {
    "Name": "...",
    "MaxValue": "...",
    "MinValue": "...",
    "ScalingType": "..."
  }

.. _api_field_flyte.plugins.sagemaker.ContinuousParameterRange.Name:

Name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.ContinuousParameterRange.MaxValue:

MaxValue
  (`double <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.ContinuousParameterRange.MinValue:

MinValue
  (`double <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.ContinuousParameterRange.ScalingType:

ScalingType
  (:ref:`flyte.plugins.sagemaker.HyperparameterScalingType <api_enum_flyte.plugins.sagemaker.HyperparameterScalingType>`) 
  


.. _api_msg_flyte.plugins.sagemaker.IntegerParameterRange:

flyte.plugins.sagemaker.IntegerParameterRange
---------------------------------------------

`[flyte.plugins.sagemaker.IntegerParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L20>`_


.. code-block:: json

  {
    "Name": "...",
    "MaxValue": "...",
    "MinValue": "...",
    "ScalingType": "..."
  }

.. _api_field_flyte.plugins.sagemaker.IntegerParameterRange.Name:

Name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.IntegerParameterRange.MaxValue:

MaxValue
  (`float <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.IntegerParameterRange.MinValue:

MinValue
  (`float <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.IntegerParameterRange.ScalingType:

ScalingType
  (:ref:`flyte.plugins.sagemaker.HyperparameterScalingType <api_enum_flyte.plugins.sagemaker.HyperparameterScalingType>`) 
  


.. _api_msg_flyte.plugins.sagemaker.CategoricalParameterRange:

flyte.plugins.sagemaker.CategoricalParameterRange
-------------------------------------------------

`[flyte.plugins.sagemaker.CategoricalParameterRange proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L27>`_


.. code-block:: json

  {
    "Name": "...",
    "Values": []
  }

.. _api_field_flyte.plugins.sagemaker.CategoricalParameterRange.Name:

Name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.CategoricalParameterRange.Values:

Values
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyte.plugins.sagemaker.ParameterRanges:

flyte.plugins.sagemaker.ParameterRanges
---------------------------------------

`[flyte.plugins.sagemaker.ParameterRanges proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L32>`_


.. code-block:: json

  {
    "ContinuousParameterRanges": [],
    "IntegerParameterRanges": [],
    "CategoricalParameterRanges": []
  }

.. _api_field_flyte.plugins.sagemaker.ParameterRanges.ContinuousParameterRanges:

ContinuousParameterRanges
  (:ref:`flyte.plugins.sagemaker.ContinuousParameterRange <api_msg_flyte.plugins.sagemaker.ContinuousParameterRange>`) 
  
.. _api_field_flyte.plugins.sagemaker.ParameterRanges.IntegerParameterRanges:

IntegerParameterRanges
  (:ref:`flyte.plugins.sagemaker.IntegerParameterRange <api_msg_flyte.plugins.sagemaker.IntegerParameterRange>`) 
  
.. _api_field_flyte.plugins.sagemaker.ParameterRanges.CategoricalParameterRanges:

CategoricalParameterRanges
  (:ref:`flyte.plugins.sagemaker.CategoricalParameterRange <api_msg_flyte.plugins.sagemaker.CategoricalParameterRange>`) 
  


.. _api_msg_flyte.plugins.sagemaker.AlgorithmSpecification:

flyte.plugins.sagemaker.AlgorithmSpecification
----------------------------------------------

`[flyte.plugins.sagemaker.AlgorithmSpecification proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L38>`_


.. code-block:: json

  {
    "TrainingImage": "...",
    "TrainingInputMode": "...",
    "AlgorithmName": "...",
    "MetricDefinitions": []
  }

.. _api_field_flyte.plugins.sagemaker.AlgorithmSpecification.TrainingImage:

TrainingImage
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.AlgorithmSpecification.TrainingInputMode:

TrainingInputMode
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.AlgorithmSpecification.AlgorithmName:

AlgorithmName
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.AlgorithmSpecification.MetricDefinitions:

MetricDefinitions
  (:ref:`flyte.plugins.sagemaker.AlgorithmSpecification.MetricDefinition <api_msg_flyte.plugins.sagemaker.AlgorithmSpecification.MetricDefinition>`) 
  
.. _api_msg_flyte.plugins.sagemaker.AlgorithmSpecification.MetricDefinition:

flyte.plugins.sagemaker.AlgorithmSpecification.MetricDefinition
---------------------------------------------------------------

`[flyte.plugins.sagemaker.AlgorithmSpecification.MetricDefinition proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L43>`_


.. code-block:: json

  {
    "Name": "...",
    "Regex": "..."
  }

.. _api_field_flyte.plugins.sagemaker.AlgorithmSpecification.MetricDefinition.Name:

Name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.AlgorithmSpecification.MetricDefinition.Regex:

Regex
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  



.. _api_msg_flyte.plugins.sagemaker.ResourceConfig:

flyte.plugins.sagemaker.ResourceConfig
--------------------------------------

`[flyte.plugins.sagemaker.ResourceConfig proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L50>`_


.. code-block:: json

  {
    "InstanceType": "...",
    "InstanceCount": "...",
    "VolumeSizeInGB": "...",
    "VolumeKmsKeyId": "..."
  }

.. _api_field_flyte.plugins.sagemaker.ResourceConfig.InstanceType:

InstanceType
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.ResourceConfig.InstanceCount:

InstanceCount
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.ResourceConfig.VolumeSizeInGB:

VolumeSizeInGB
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.ResourceConfig.VolumeKmsKeyId:

VolumeKmsKeyId
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyte.plugins.sagemaker.StoppingCondition:

flyte.plugins.sagemaker.StoppingCondition
-----------------------------------------

`[flyte.plugins.sagemaker.StoppingCondition proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L57>`_


.. code-block:: json

  {
    "MaxRuntimeInSeconds": "...",
    "MaxWaitTimeInSeconds": "..."
  }

.. _api_field_flyte.plugins.sagemaker.StoppingCondition.MaxRuntimeInSeconds:

MaxRuntimeInSeconds
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.StoppingCondition.MaxWaitTimeInSeconds:

MaxWaitTimeInSeconds
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyte.plugins.sagemaker.VpcConfig:

flyte.plugins.sagemaker.VpcConfig
---------------------------------

`[flyte.plugins.sagemaker.VpcConfig proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L62>`_


.. code-block:: json

  {
    "SecurityGroupIds": [],
    "Subnets": []
  }

.. _api_field_flyte.plugins.sagemaker.VpcConfig.SecurityGroupIds:

SecurityGroupIds
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.VpcConfig.Subnets:

Subnets
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyte.plugins.sagemaker.SagemakerTrainingJob:

flyte.plugins.sagemaker.SagemakerTrainingJob
--------------------------------------------

`[flyte.plugins.sagemaker.SagemakerTrainingJob proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L67>`_


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

.. _api_field_flyte.plugins.sagemaker.SagemakerTrainingJob.Region:

Region
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.SagemakerTrainingJob.RoleArn:

RoleArn
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.SagemakerTrainingJob.AlgorithmSpecification:

AlgorithmSpecification
  (:ref:`flyte.plugins.sagemaker.AlgorithmSpecification <api_msg_flyte.plugins.sagemaker.AlgorithmSpecification>`) 
  
.. _api_field_flyte.plugins.sagemaker.SagemakerTrainingJob.ResourceConfig:

ResourceConfig
  (:ref:`flyte.plugins.sagemaker.ResourceConfig <api_msg_flyte.plugins.sagemaker.ResourceConfig>`) 
  
.. _api_field_flyte.plugins.sagemaker.SagemakerTrainingJob.StoppingCondition:

StoppingCondition
  (:ref:`flyte.plugins.sagemaker.StoppingCondition <api_msg_flyte.plugins.sagemaker.StoppingCondition>`) 
  
.. _api_field_flyte.plugins.sagemaker.SagemakerTrainingJob.VpcConfig:

VpcConfig
  (:ref:`flyte.plugins.sagemaker.VpcConfig <api_msg_flyte.plugins.sagemaker.VpcConfig>`) 
  
.. _api_field_flyte.plugins.sagemaker.SagemakerTrainingJob.EnableSpotTraining:

EnableSpotTraining
  (`bool <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyte.plugins.sagemaker.HPOJobObjective:

flyte.plugins.sagemaker.HPOJobObjective
---------------------------------------

`[flyte.plugins.sagemaker.HPOJobObjective proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L82>`_


.. code-block:: json

  {
    "Type": "...",
    "MetricName": "..."
  }

.. _api_field_flyte.plugins.sagemaker.HPOJobObjective.Type:

Type
  (:ref:`flyte.plugins.sagemaker.HPOJobObjectiveType <api_enum_flyte.plugins.sagemaker.HPOJobObjectiveType>`) 
  
.. _api_field_flyte.plugins.sagemaker.HPOJobObjective.MetricName:

MetricName
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyte.plugins.sagemaker.SagemakerHPOJob:

flyte.plugins.sagemaker.SagemakerHPOJob
---------------------------------------

`[flyte.plugins.sagemaker.SagemakerHPOJob proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L87>`_


.. code-block:: json

  {
    "Strategy": "...",
    "Objective": "{...}",
    "MaxNumberOfTrainingJobs": "...",
    "MaxParallelTrainingJobs": "...",
    "ParameterRanges": "{...}",
    "TrainingJob": "{...}"
  }

.. _api_field_flyte.plugins.sagemaker.SagemakerHPOJob.Strategy:

Strategy
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.SagemakerHPOJob.Objective:

Objective
  (:ref:`flyte.plugins.sagemaker.HPOJobObjective <api_msg_flyte.plugins.sagemaker.HPOJobObjective>`) 
  
.. _api_field_flyte.plugins.sagemaker.SagemakerHPOJob.MaxNumberOfTrainingJobs:

MaxNumberOfTrainingJobs
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.SagemakerHPOJob.MaxParallelTrainingJobs:

MaxParallelTrainingJobs
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyte.plugins.sagemaker.SagemakerHPOJob.ParameterRanges:

ParameterRanges
  (:ref:`flyte.plugins.sagemaker.ParameterRanges <api_msg_flyte.plugins.sagemaker.ParameterRanges>`) 
  
.. _api_field_flyte.plugins.sagemaker.SagemakerHPOJob.TrainingJob:

TrainingJob
  (:ref:`flyte.plugins.sagemaker.SagemakerTrainingJob <api_msg_flyte.plugins.sagemaker.SagemakerTrainingJob>`) 
  

.. _api_enum_flyte.plugins.sagemaker.HyperparameterScalingType:

Enum flyte.plugins.sagemaker.HyperparameterScalingType
------------------------------------------------------

`[flyte.plugins.sagemaker.HyperparameterScalingType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L6>`_


.. _api_enum_value_flyte.plugins.sagemaker.HyperparameterScalingType.AUTO:

AUTO
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyte.plugins.sagemaker.HyperparameterScalingType.LINEAR:

LINEAR
  ⁣
  
.. _api_enum_value_flyte.plugins.sagemaker.HyperparameterScalingType.LOGARITHMIC:

LOGARITHMIC
  ⁣
  
.. _api_enum_value_flyte.plugins.sagemaker.HyperparameterScalingType.REVERSELOGARITHMIC:

REVERSELOGARITHMIC
  ⁣
  

.. _api_enum_flyte.plugins.sagemaker.HPOJobObjectiveType:

Enum flyte.plugins.sagemaker.HPOJobObjectiveType
------------------------------------------------

`[flyte.plugins.sagemaker.HPOJobObjectiveType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/sagemaker.proto#L77>`_


.. _api_enum_value_flyte.plugins.sagemaker.HPOJobObjectiveType.MINIMIZE:

MINIMIZE
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyte.plugins.sagemaker.HPOJobObjectiveType.MAXIMIZE:

MAXIMIZE
  ⁣
  

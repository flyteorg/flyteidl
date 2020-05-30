.. _api_file_flyteidl/plugins/sagemaker/trainingjob.proto:

trainingjob.proto
============================================

.. _api_msg_flyteidl.plugins.sagemaker.AlgorithmSpecification:

flyteidl.plugins.sagemaker.AlgorithmSpecification
-------------------------------------------------

`[flyteidl.plugins.sagemaker.AlgorithmSpecification proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/trainingjob.proto#L7>`_


.. code-block:: json

  {
    "TrainingImage": "...",
    "TrainingInputMode": "...",
    "AlgorithmName": "...",
    "MetricDefinitions": []
  }

.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.TrainingImage:

TrainingImage
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.TrainingInputMode:

TrainingInputMode
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.AlgorithmName:

AlgorithmName
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinitions:

MetricDefinitions
  (:ref:`flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition <api_msg_flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition>`) 
  
.. _api_msg_flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition:

flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition
------------------------------------------------------------------

`[flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/trainingjob.proto#L12>`_


.. code-block:: json

  {
    "Name": "...",
    "Regex": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition.Name:

Name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition.Regex:

Regex
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  



.. _api_msg_flyteidl.plugins.sagemaker.ResourceConfig:

flyteidl.plugins.sagemaker.ResourceConfig
-----------------------------------------

`[flyteidl.plugins.sagemaker.ResourceConfig proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/trainingjob.proto#L19>`_


.. code-block:: json

  {
    "InstanceType": "...",
    "InstanceCount": "...",
    "VolumeSizeInGB": "...",
    "VolumeKmsKeyId": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.ResourceConfig.InstanceType:

InstanceType
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.ResourceConfig.InstanceCount:

InstanceCount
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.ResourceConfig.VolumeSizeInGB:

VolumeSizeInGB
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.ResourceConfig.VolumeKmsKeyId:

VolumeKmsKeyId
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyteidl.plugins.sagemaker.StoppingCondition:

flyteidl.plugins.sagemaker.StoppingCondition
--------------------------------------------

`[flyteidl.plugins.sagemaker.StoppingCondition proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/trainingjob.proto#L26>`_


.. code-block:: json

  {
    "MaxRuntimeInSeconds": "...",
    "MaxWaitTimeInSeconds": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.StoppingCondition.MaxRuntimeInSeconds:

MaxRuntimeInSeconds
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.StoppingCondition.MaxWaitTimeInSeconds:

MaxWaitTimeInSeconds
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyteidl.plugins.sagemaker.VpcConfig:

flyteidl.plugins.sagemaker.VpcConfig
------------------------------------

`[flyteidl.plugins.sagemaker.VpcConfig proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/trainingjob.proto#L31>`_


.. code-block:: json

  {
    "SecurityGroupIds": [],
    "Subnets": []
  }

.. _api_field_flyteidl.plugins.sagemaker.VpcConfig.SecurityGroupIds:

SecurityGroupIds
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.VpcConfig.Subnets:

Subnets
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyteidl.plugins.sagemaker.TrainingJob:

flyteidl.plugins.sagemaker.TrainingJob
--------------------------------------

`[flyteidl.plugins.sagemaker.TrainingJob proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/trainingjob.proto#L36>`_


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

.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.Region:

Region
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.RoleArn:

RoleArn
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.AlgorithmSpecification:

AlgorithmSpecification
  (:ref:`flyteidl.plugins.sagemaker.AlgorithmSpecification <api_msg_flyteidl.plugins.sagemaker.AlgorithmSpecification>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.ResourceConfig:

ResourceConfig
  (:ref:`flyteidl.plugins.sagemaker.ResourceConfig <api_msg_flyteidl.plugins.sagemaker.ResourceConfig>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.StoppingCondition:

StoppingCondition
  (:ref:`flyteidl.plugins.sagemaker.StoppingCondition <api_msg_flyteidl.plugins.sagemaker.StoppingCondition>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.VpcConfig:

VpcConfig
  (:ref:`flyteidl.plugins.sagemaker.VpcConfig <api_msg_flyteidl.plugins.sagemaker.VpcConfig>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.EnableSpotTraining:

EnableSpotTraining
  (`bool <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


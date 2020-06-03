.. _api_file_flyteidl/plugins/sagemaker/trainingjob.proto:

trainingjob.proto
============================================

.. _api_msg_flyteidl.plugins.sagemaker.AlgorithmSpecification:

flyteidl.plugins.sagemaker.AlgorithmSpecification
-------------------------------------------------

`[flyteidl.plugins.sagemaker.AlgorithmSpecification proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/trainingjob.proto#L7>`_


.. code-block:: json

  {
    "training_image": "...",
    "training_input_mode": "...",
    "algorithm_name": "...",
    "metric_definitions": []
  }

.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.training_image:

training_image
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.training_input_mode:

training_input_mode
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.algorithm_name:

algorithm_name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.metric_definitions:

metric_definitions
  (:ref:`flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition <api_msg_flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition>`) 
  
.. _api_msg_flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition:

flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition
------------------------------------------------------------------

`[flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/trainingjob.proto#L12>`_


.. code-block:: json

  {
    "name": "...",
    "regex": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition.name:

name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition.regex:

regex
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  



.. _api_msg_flyteidl.plugins.sagemaker.ResourceConfig:

flyteidl.plugins.sagemaker.ResourceConfig
-----------------------------------------

`[flyteidl.plugins.sagemaker.ResourceConfig proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/trainingjob.proto#L19>`_


.. code-block:: json

  {
    "instance_type": "...",
    "instance_count": "...",
    "volume_size_in_gb": "...",
    "volume_kms_key_id": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.ResourceConfig.instance_type:

instance_type
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.ResourceConfig.instance_count:

instance_count
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.ResourceConfig.volume_size_in_gb:

volume_size_in_gb
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.ResourceConfig.volume_kms_key_id:

volume_kms_key_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyteidl.plugins.sagemaker.StoppingCondition:

flyteidl.plugins.sagemaker.StoppingCondition
--------------------------------------------

`[flyteidl.plugins.sagemaker.StoppingCondition proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/trainingjob.proto#L26>`_


.. code-block:: json

  {
    "max_runtime_in_seconds": "...",
    "max_wait_time_in_seconds": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.StoppingCondition.max_runtime_in_seconds:

max_runtime_in_seconds
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.StoppingCondition.max_wait_time_in_seconds:

max_wait_time_in_seconds
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyteidl.plugins.sagemaker.VpcConfig:

flyteidl.plugins.sagemaker.VpcConfig
------------------------------------

`[flyteidl.plugins.sagemaker.VpcConfig proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/trainingjob.proto#L31>`_


.. code-block:: json

  {
    "security_group_ids": [],
    "subnets": []
  }

.. _api_field_flyteidl.plugins.sagemaker.VpcConfig.security_group_ids:

security_group_ids
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.VpcConfig.subnets:

subnets
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyteidl.plugins.sagemaker.TrainingJob:

flyteidl.plugins.sagemaker.TrainingJob
--------------------------------------

`[flyteidl.plugins.sagemaker.TrainingJob proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/trainingjob.proto#L36>`_


.. code-block:: json

  {
    "region": "...",
    "role_arn": "...",
    "algorithm_specification": "{...}",
    "resource_config": "{...}",
    "stopping_condition": "{...}",
    "vpc_config": "{...}",
    "enable_spot_training": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.region:

region
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.role_arn:

role_arn
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.algorithm_specification:

algorithm_specification
  (:ref:`flyteidl.plugins.sagemaker.AlgorithmSpecification <api_msg_flyteidl.plugins.sagemaker.AlgorithmSpecification>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.resource_config:

resource_config
  (:ref:`flyteidl.plugins.sagemaker.ResourceConfig <api_msg_flyteidl.plugins.sagemaker.ResourceConfig>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.stopping_condition:

stopping_condition
  (:ref:`flyteidl.plugins.sagemaker.StoppingCondition <api_msg_flyteidl.plugins.sagemaker.StoppingCondition>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.vpc_config:

vpc_config
  (:ref:`flyteidl.plugins.sagemaker.VpcConfig <api_msg_flyteidl.plugins.sagemaker.VpcConfig>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.enable_spot_training:

enable_spot_training
  (`bool <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


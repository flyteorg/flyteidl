.. _api_file_flyteidl/plugins/sagemaker/training_job.proto:

training_job.proto
=============================================

.. _api_msg_flyteidl.plugins.sagemaker.AlgorithmSpecification:

flyteidl.plugins.sagemaker.AlgorithmSpecification
-------------------------------------------------

`[flyteidl.plugins.sagemaker.AlgorithmSpecification proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/training_job.proto#L17>`_


.. code-block:: json

  {
    "input_mode": "...",
    "algorithm_name": "...",
    "algorithm_version": "...",
    "metric_definitions": []
  }

.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.input_mode:

input_mode
  (:ref:`flyteidl.plugins.sagemaker.InputMode <api_enum_flyteidl.plugins.sagemaker.InputMode>`) The input mode can be either PIPE or FILE
  
  
.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.algorithm_name:

algorithm_name
  (:ref:`flyteidl.plugins.sagemaker.AlgorithmName <api_enum_flyteidl.plugins.sagemaker.AlgorithmName>`) The algorithm name is used for deciding which pre-built image to point to
  This is only needed for use cases where SageMaker's built-in algorithm mode is chosen
  
  
.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.algorithm_version:

algorithm_version
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The algorithm version field is used for deciding which pre-built image to point to
  This is only needed for use cases where SageMaker's built-in algorithm mode is chosen
  
  
.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.metric_definitions:

metric_definitions
  (:ref:`flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition <api_msg_flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition>`) A list of metric definitions for SageMaker to evaluate/track on the progress of the training job
  https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics.html
  
  
.. _api_msg_flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition:

flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition
------------------------------------------------------------------

`[flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/training_job.proto#L27>`_


.. code-block:: json

  {
    "name": "...",
    "regex": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition.name:

name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) User-defined name of the metric
  
  
.. _api_field_flyteidl.plugins.sagemaker.AlgorithmSpecification.MetricDefinition.regex:

regex
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) SageMaker hyperparameter tuning parses your algorithm’s stdout and stderr streams to find algorithm metrics
  
  



.. _api_msg_flyteidl.plugins.sagemaker.TrainingJobConfig:

flyteidl.plugins.sagemaker.TrainingJobConfig
--------------------------------------------

`[flyteidl.plugins.sagemaker.TrainingJobConfig proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/training_job.proto#L38>`_


.. code-block:: json

  {
    "instance_count": "...",
    "instance_type": "...",
    "volume_size_in_gb": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.TrainingJobConfig.instance_count:

instance_count
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The number of ML compute instances to use. For distributed training, provide a value greater than 1.
  This is for multi-node training, not multi-GPU training
  
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJobConfig.instance_type:

instance_type
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The ML compute instance type
  
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJobConfig.volume_size_in_gb:

volume_size_in_gb
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The size of the ML storage volume that you want to provision.
  
  


.. _api_msg_flyteidl.plugins.sagemaker.StoppingCondition:

flyteidl.plugins.sagemaker.StoppingCondition
--------------------------------------------

`[flyteidl.plugins.sagemaker.StoppingCondition proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/training_job.proto#L51>`_

This option allows the users to specify a limit to how long a training job can run and
how long the users are willing to wait for a managed spot training job to complete
https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StoppingCondition.html

.. code-block:: json

  {
    "max_runtime_in_seconds": "...",
    "max_wait_time_in_seconds": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.StoppingCondition.max_runtime_in_seconds:

max_runtime_in_seconds
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The maximum length of time in second that the training job can run.
  If this value is not specified, the default expiration time will be 1 day
  
  
.. _api_field_flyteidl.plugins.sagemaker.StoppingCondition.max_wait_time_in_seconds:

max_wait_time_in_seconds
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The maximum length of time in seconds that the users are willing to wait for a managed spot
  training job to complete.
  Note that it is the amount of time spent waiting for Spot capacity plus the amount of time the
  training job runs, so it must be equal to or greater than max_runtime_in_seconds.
  
  


.. _api_msg_flyteidl.plugins.sagemaker.TrainingJob:

flyteidl.plugins.sagemaker.TrainingJob
--------------------------------------

`[flyteidl.plugins.sagemaker.TrainingJob proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/training_job.proto#L65>`_

The spec of a training job

.. code-block:: json

  {
    "algorithm_specification": "{...}",
    "training_job_config": "{...}",
    "interruptible": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.algorithm_specification:

algorithm_specification
  (:ref:`flyteidl.plugins.sagemaker.AlgorithmSpecification <api_msg_flyteidl.plugins.sagemaker.AlgorithmSpecification>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.training_job_config:

training_job_config
  (:ref:`flyteidl.plugins.sagemaker.TrainingJobConfig <api_msg_flyteidl.plugins.sagemaker.TrainingJobConfig>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.TrainingJob.interruptible:

interruptible
  (`bool <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  

.. _api_enum_flyteidl.plugins.sagemaker.InputMode:

Enum flyteidl.plugins.sagemaker.InputMode
-----------------------------------------

`[flyteidl.plugins.sagemaker.InputMode proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/training_job.proto#L7>`_


.. _api_enum_value_flyteidl.plugins.sagemaker.InputMode.FILE:

FILE
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.plugins.sagemaker.InputMode.PIPE:

PIPE
  ⁣
  

.. _api_enum_flyteidl.plugins.sagemaker.AlgorithmName:

Enum flyteidl.plugins.sagemaker.AlgorithmName
---------------------------------------------

`[flyteidl.plugins.sagemaker.AlgorithmName proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/training_job.proto#L12>`_


.. _api_enum_value_flyteidl.plugins.sagemaker.AlgorithmName.CUSTOM:

CUSTOM
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.plugins.sagemaker.AlgorithmName.XGBOOST:

XGBOOST
  ⁣
  

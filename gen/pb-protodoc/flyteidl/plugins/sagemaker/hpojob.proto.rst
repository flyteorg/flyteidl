.. _api_file_flyteidl/plugins/sagemaker/hpojob.proto:

hpojob.proto
=======================================

.. _api_msg_flyteidl.plugins.sagemaker.HyperparameterTuningObjective:

flyteidl.plugins.sagemaker.HyperparameterTuningObjective
--------------------------------------------------------

`[flyteidl.plugins.sagemaker.HyperparameterTuningObjective proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hpojob.proto#L9>`_


.. code-block:: json

  {
    "objective_type": "...",
    "metric_name": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.HyperparameterTuningObjective.objective_type:

objective_type
  (:ref:`flyteidl.plugins.sagemaker.HyperparameterTuningObjective.HyperparameterTuningObjectiveType <api_enum_flyteidl.plugins.sagemaker.HyperparameterTuningObjective.HyperparameterTuningObjectiveType>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.HyperparameterTuningObjective.metric_name:

metric_name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  

.. _api_enum_flyteidl.plugins.sagemaker.HyperparameterTuningObjective.HyperparameterTuningObjectiveType:

Enum flyteidl.plugins.sagemaker.HyperparameterTuningObjective.HyperparameterTuningObjectiveType
-----------------------------------------------------------------------------------------------

`[flyteidl.plugins.sagemaker.HyperparameterTuningObjective.HyperparameterTuningObjectiveType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hpojob.proto#L10>`_


.. _api_enum_value_flyteidl.plugins.sagemaker.HyperparameterTuningObjective.HyperparameterTuningObjectiveType.MINIMIZE:

MINIMIZE
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.plugins.sagemaker.HyperparameterTuningObjective.HyperparameterTuningObjectiveType.MAXIMIZE:

MAXIMIZE
  ⁣
  

.. _api_msg_flyteidl.plugins.sagemaker.HPOJob:

flyteidl.plugins.sagemaker.HPOJob
---------------------------------

`[flyteidl.plugins.sagemaker.HPOJob proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hpojob.proto#L19>`_


.. code-block:: json

  {
    "training_job": "{...}",
    "max_number_of_training_jobs": "...",
    "max_parallel_training_jobs": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.HPOJob.training_job:

training_job
  (:ref:`flyteidl.plugins.sagemaker.TrainingJob <api_msg_flyteidl.plugins.sagemaker.TrainingJob>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.HPOJob.max_number_of_training_jobs:

max_number_of_training_jobs
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.HPOJob.max_parallel_training_jobs:

max_parallel_training_jobs
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyteidl.plugins.sagemaker.HPOJobConfig:

flyteidl.plugins.sagemaker.HPOJobConfig
---------------------------------------

`[flyteidl.plugins.sagemaker.HPOJobConfig proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hpojob.proto#L25>`_


.. code-block:: json

  {
    "hyperparameter_ranges": "{...}",
    "tuning_strategy": "...",
    "tuning_objective": "{...}",
    "training_job_early_stopping_type": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.HPOJobConfig.hyperparameter_ranges:

hyperparameter_ranges
  (:ref:`flyteidl.plugins.sagemaker.ParameterRanges <api_msg_flyteidl.plugins.sagemaker.ParameterRanges>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.HPOJobConfig.tuning_strategy:

tuning_strategy
  (:ref:`flyteidl.plugins.sagemaker.HPOJobConfig.HyperparameterTuningStrategy <api_enum_flyteidl.plugins.sagemaker.HPOJobConfig.HyperparameterTuningStrategy>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.HPOJobConfig.tuning_objective:

tuning_objective
  (:ref:`flyteidl.plugins.sagemaker.HyperparameterTuningObjective <api_msg_flyteidl.plugins.sagemaker.HyperparameterTuningObjective>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.HPOJobConfig.training_job_early_stopping_type:

training_job_early_stopping_type
  (:ref:`flyteidl.plugins.sagemaker.HPOJobConfig.TrainingJobEarlyStoppingType <api_enum_flyteidl.plugins.sagemaker.HPOJobConfig.TrainingJobEarlyStoppingType>`) 
  

.. _api_enum_flyteidl.plugins.sagemaker.HPOJobConfig.HyperparameterTuningStrategy:

Enum flyteidl.plugins.sagemaker.HPOJobConfig.HyperparameterTuningStrategy
-------------------------------------------------------------------------

`[flyteidl.plugins.sagemaker.HPOJobConfig.HyperparameterTuningStrategy proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hpojob.proto#L28>`_


.. _api_enum_value_flyteidl.plugins.sagemaker.HPOJobConfig.HyperparameterTuningStrategy.BAYESIAN:

BAYESIAN
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.plugins.sagemaker.HPOJobConfig.HyperparameterTuningStrategy.RANDOM:

RANDOM
  ⁣
  

.. _api_enum_flyteidl.plugins.sagemaker.HPOJobConfig.TrainingJobEarlyStoppingType:

Enum flyteidl.plugins.sagemaker.HPOJobConfig.TrainingJobEarlyStoppingType
-------------------------------------------------------------------------

`[flyteidl.plugins.sagemaker.HPOJobConfig.TrainingJobEarlyStoppingType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hpojob.proto#L36>`_


.. _api_enum_value_flyteidl.plugins.sagemaker.HPOJobConfig.TrainingJobEarlyStoppingType.OFF:

OFF
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.plugins.sagemaker.HPOJobConfig.TrainingJobEarlyStoppingType.AUTO:

AUTO
  ⁣
  

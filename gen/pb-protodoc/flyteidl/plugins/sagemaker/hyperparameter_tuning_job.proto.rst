.. _api_file_flyteidl/plugins/sagemaker/hyperparameter_tuning_job.proto:

hyperparameter_tuning_job.proto
==========================================================

.. _api_msg_flyteidl.plugins.sagemaker.HyperparameterTuningJob:

flyteidl.plugins.sagemaker.HyperparameterTuningJob
--------------------------------------------------

`[flyteidl.plugins.sagemaker.HyperparameterTuningJob proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hyperparameter_tuning_job.proto#L10>`_

The hyperparameter tuning job

.. code-block:: json

  {
    "training_job": "{...}",
    "max_number_of_training_jobs": "...",
    "max_parallel_training_jobs": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.HyperparameterTuningJob.training_job:

training_job
  (:ref:`flyteidl.plugins.sagemaker.TrainingJob <api_msg_flyteidl.plugins.sagemaker.TrainingJob>`) The underlying training job that the hyperparameter tuning job will launch during the process
  
  
.. _api_field_flyteidl.plugins.sagemaker.HyperparameterTuningJob.max_number_of_training_jobs:

max_number_of_training_jobs
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The maximum number of training jobs that an hpo job can launch. For resource limit purpose.
  
  
.. _api_field_flyteidl.plugins.sagemaker.HyperparameterTuningJob.max_parallel_training_jobs:

max_parallel_training_jobs
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The maximum number of concurrent training job that an hpo job can launch
  
  


.. _api_msg_flyteidl.plugins.sagemaker.HyperparameterTuningObjective:

flyteidl.plugins.sagemaker.HyperparameterTuningObjective
--------------------------------------------------------

`[flyteidl.plugins.sagemaker.HyperparameterTuningObjective proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hyperparameter_tuning_job.proto#L22>`_

The objective of the hyperparameter tuning

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
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The target metric name, which is the user-defined name of the metric specified in the
  training job's algorithm specification
  
  

.. _api_enum_flyteidl.plugins.sagemaker.HyperparameterTuningObjective.HyperparameterTuningObjectiveType:

Enum flyteidl.plugins.sagemaker.HyperparameterTuningObjective.HyperparameterTuningObjectiveType
-----------------------------------------------------------------------------------------------

`[flyteidl.plugins.sagemaker.HyperparameterTuningObjective.HyperparameterTuningObjectiveType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hyperparameter_tuning_job.proto#L23>`_


.. _api_enum_value_flyteidl.plugins.sagemaker.HyperparameterTuningObjective.HyperparameterTuningObjectiveType.MINIMIZE:

MINIMIZE
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.plugins.sagemaker.HyperparameterTuningObjective.HyperparameterTuningObjectiveType.MAXIMIZE:

MAXIMIZE
  ⁣
  

.. _api_msg_flyteidl.plugins.sagemaker.HyperparameterTuningSpecification:

flyteidl.plugins.sagemaker.HyperparameterTuningSpecification
------------------------------------------------------------

`[flyteidl.plugins.sagemaker.HyperparameterTuningSpecification proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hyperparameter_tuning_job.proto#L35>`_

The specification of the hyperparameter tuning process

.. code-block:: json

  {
    "hyperparameter_ranges": "{...}",
    "tuning_strategy": "...",
    "tuning_objective": "{...}",
    "training_job_early_stopping_type": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.hyperparameter_ranges:

hyperparameter_ranges
  (:ref:`flyteidl.plugins.sagemaker.ParameterRanges <api_msg_flyteidl.plugins.sagemaker.ParameterRanges>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.tuning_strategy:

tuning_strategy
  (:ref:`flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.HyperparameterTuningStrategy <api_enum_flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.HyperparameterTuningStrategy>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.tuning_objective:

tuning_objective
  (:ref:`flyteidl.plugins.sagemaker.HyperparameterTuningObjective <api_msg_flyteidl.plugins.sagemaker.HyperparameterTuningObjective>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.training_job_early_stopping_type:

training_job_early_stopping_type
  (:ref:`flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.TrainingJobEarlyStoppingType <api_enum_flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.TrainingJobEarlyStoppingType>`) 
  

.. _api_enum_flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.HyperparameterTuningStrategy:

Enum flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.HyperparameterTuningStrategy
----------------------------------------------------------------------------------------------

`[flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.HyperparameterTuningStrategy proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hyperparameter_tuning_job.proto#L38>`_


.. _api_enum_value_flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.HyperparameterTuningStrategy.BAYESIAN:

BAYESIAN
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.HyperparameterTuningStrategy.RANDOM:

RANDOM
  ⁣
  

.. _api_enum_flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.TrainingJobEarlyStoppingType:

Enum flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.TrainingJobEarlyStoppingType
----------------------------------------------------------------------------------------------

`[flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.TrainingJobEarlyStoppingType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hyperparameter_tuning_job.proto#L50>`_

When the training jobs launched by the hyperparameter tuning job are not improving significantly,
a hyperparameter tuning job can be stopping early.
Note that there's only a subset of built-in algorithms that supports early stopping.
see: https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-early-stopping.html

.. _api_enum_value_flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.TrainingJobEarlyStoppingType.OFF:

OFF
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.plugins.sagemaker.HyperparameterTuningSpecification.TrainingJobEarlyStoppingType.AUTO:

AUTO
  ⁣
  

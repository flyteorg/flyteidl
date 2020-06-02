.. _api_file_flyteidl/plugins/sagemaker/hpojob.proto:

hpojob.proto
=======================================

.. _api_msg_flyteidl.plugins.sagemaker.HPOJobObjective:

flyteidl.plugins.sagemaker.HPOJobObjective
------------------------------------------

`[flyteidl.plugins.sagemaker.HPOJobObjective proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hpojob.proto#L9>`_


.. code-block:: json

  {
    "Type": "...",
    "MetricName": "..."
  }

.. _api_field_flyteidl.plugins.sagemaker.HPOJobObjective.Type:

Type
  (:ref:`flyteidl.plugins.sagemaker.HPOJobObjective.HPOJobObjectiveType <api_enum_flyteidl.plugins.sagemaker.HPOJobObjective.HPOJobObjectiveType>`) 
  
.. _api_field_flyteidl.plugins.sagemaker.HPOJobObjective.MetricName:

MetricName
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  

.. _api_enum_flyteidl.plugins.sagemaker.HPOJobObjective.HPOJobObjectiveType:

Enum flyteidl.plugins.sagemaker.HPOJobObjective.HPOJobObjectiveType
-------------------------------------------------------------------

`[flyteidl.plugins.sagemaker.HPOJobObjective.HPOJobObjectiveType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hpojob.proto#L10>`_


.. _api_enum_value_flyteidl.plugins.sagemaker.HPOJobObjective.HPOJobObjectiveType.MINIMIZE:

MINIMIZE
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.plugins.sagemaker.HPOJobObjective.HPOJobObjectiveType.MAXIMIZE:

MAXIMIZE
  ⁣
  

.. _api_msg_flyteidl.plugins.sagemaker.HPOJob:

flyteidl.plugins.sagemaker.HPOJob
---------------------------------

`[flyteidl.plugins.sagemaker.HPOJob proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/sagemaker/hpojob.proto#L19>`_


.. code-block:: json

  {
    "MaxNumberOfTrainingJobs": "...",
    "MaxParallelTrainingJobs": "...",
    "TrainingJob": "{...}"
  }

.. _api_field_flyteidl.plugins.sagemaker.HPOJob.MaxNumberOfTrainingJobs:

MaxNumberOfTrainingJobs
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.HPOJob.MaxParallelTrainingJobs:

MaxParallelTrainingJobs
  (`int64 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.sagemaker.HPOJob.TrainingJob:

TrainingJob
  (:ref:`flyteidl.plugins.sagemaker.TrainingJob <api_msg_flyteidl.plugins.sagemaker.TrainingJob>`) 
  


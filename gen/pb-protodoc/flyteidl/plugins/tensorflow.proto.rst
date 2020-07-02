.. _api_file_flyteidl/plugins/tensorflow.proto:

tensorflow.proto
=================================

.. _api_msg_flyteidl.plugins.DistributedTensorflowTrainingTask:

flyteidl.plugins.DistributedTensorflowTrainingTask
--------------------------------------------------

`[flyteidl.plugins.DistributedTensorflowTrainingTask proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/tensorflow.proto#L7>`_

Custom proto for plugin that enables distributed training using https://github.com/kubeflow/tf-operator

.. code-block:: json

  {
    "workers": "...",
    "ps": "...",
    "chief": "..."
  }

.. _api_field_flyteidl.plugins.DistributedTensorflowTrainingTask.workers:

workers
  (`int32 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) number of worker, ps, chief replicas spawned in the cluster for this job
  
  
.. _api_field_flyteidl.plugins.DistributedTensorflowTrainingTask.ps:

ps
  (`int32 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.DistributedTensorflowTrainingTask.chief:

chief
  (`int32 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


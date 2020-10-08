.. _api_file_flyteidl/plugins/mpi.proto:

mpi.proto
==========================

.. _api_msg_flyteidl.plugins.DistributedMPITrainingTask:

flyteidl.plugins.DistributedMPITrainingTask
-------------------------------------------

`[flyteidl.plugins.DistributedMPITrainingTask proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/mpi.proto#L7>`_

Custom proto for plugin that enables distributed training using https://github.com/kubeflow/mpi-operator

.. code-block:: json

  {
    "workers": "..."
  }

.. _api_field_flyteidl.plugins.DistributedMPITrainingTask.workers:

workers
  (`int32 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) number of worker replicas spawned in the cluster for this job
  
  


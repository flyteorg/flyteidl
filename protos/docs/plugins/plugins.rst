######################
Protocol Documentation
######################




.. _ref_flyteidl/plugins/array_job.proto:

flyteidl/plugins/array_job.proto
==================================================================





.. _ref_flyteidl.plugins.ArrayJob:

ArrayJob
------------------------------------------------------------------

Describes a job that can process independent pieces of data concurrently. Multiple copies of the runnable component
will be executed concurrently.



.. csv-table:: ArrayJob type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "parallelism", ":ref:`ref_int64`", "", "Defines the minimum number of instances to bring up concurrently at any given point. Note that this is an optimistic restriction and that, due to network partitioning or other failures, the actual number of currently running instances might be more. This has to be a positive number if assigned. Default value is size."
   "size", ":ref:`ref_int64`", "", "Defines the number of instances to launch at most. This number should match the size of the input if the job requires processing of all input data. This has to be a positive number. In the case this is not defined, the back-end will determine the size at run-time by reading the inputs."
   "min_successes", ":ref:`ref_int64`", "", "An absolute number of the minimum number of successful completions of subtasks. As soon as this criteria is met, the array job will be marked as successful and outputs will be computed. This has to be a non-negative number if assigned. Default value is size (if specified)."
   "min_success_ratio", ":ref:`ref_float`", "", "If the array job size is not known beforehand, the min_success_ratio can instead be used to determine when an array job can be marked successful."






..
   end messages


..
   end enums


..
   end HasExtensions


..
   end services




.. _ref_flyteidl/plugins/mpi.proto:

flyteidl/plugins/mpi.proto
==================================================================





.. _ref_flyteidl.plugins.DistributedMPITrainingTask:

DistributedMPITrainingTask
------------------------------------------------------------------

MPI operator proposal https://github.com/kubeflow/community/blob/master/proposals/mpi-operator-proposal.md
Custom proto for plugin that enables distributed training using https://github.com/kubeflow/mpi-operator



.. csv-table:: DistributedMPITrainingTask type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "num_workers", ":ref:`ref_int32`", "", "number of worker spawned in the cluster for this job"
   "num_launcher_replicas", ":ref:`ref_int32`", "", "number of launcher replicas spawned in the cluster for this job The launcher pod invokes mpirun and communicates with worker pods through MPI."
   "slots", ":ref:`ref_int32`", "", "number of slots per worker used in hostfile. The available slots (GPUs) in each pod."






..
   end messages


..
   end enums


..
   end HasExtensions


..
   end services




.. _ref_flyteidl/plugins/presto.proto:

flyteidl/plugins/presto.proto
==================================================================





.. _ref_flyteidl.plugins.PrestoQuery:

PrestoQuery
------------------------------------------------------------------

This message works with the 'presto' task type in the SDK and is the object that will be in the 'custom' field
of a Presto task's TaskTemplate



.. csv-table:: PrestoQuery type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "routing_group", ":ref:`ref_string`", "", ""
   "catalog", ":ref:`ref_string`", "", ""
   "schema", ":ref:`ref_string`", "", ""
   "statement", ":ref:`ref_string`", "", ""






..
   end messages


..
   end enums


..
   end HasExtensions


..
   end services




.. _ref_flyteidl/plugins/pytorch.proto:

flyteidl/plugins/pytorch.proto
==================================================================





.. _ref_flyteidl.plugins.DistributedPyTorchTrainingTask:

DistributedPyTorchTrainingTask
------------------------------------------------------------------

Custom proto for plugin that enables distributed training using https://github.com/kubeflow/pytorch-operator



.. csv-table:: DistributedPyTorchTrainingTask type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "workers", ":ref:`ref_int32`", "", "number of worker replicas spawned in the cluster for this job"






..
   end messages


..
   end enums


..
   end HasExtensions


..
   end services




.. _ref_flyteidl/plugins/qubole.proto:

flyteidl/plugins/qubole.proto
==================================================================





.. _ref_flyteidl.plugins.HiveQuery:

HiveQuery
------------------------------------------------------------------

Defines a query to execute on a hive cluster.



.. csv-table:: HiveQuery type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "query", ":ref:`ref_string`", "", ""
   "timeout_sec", ":ref:`ref_uint32`", "", ""
   "retryCount", ":ref:`ref_uint32`", "", ""







.. _ref_flyteidl.plugins.HiveQueryCollection:

HiveQueryCollection
------------------------------------------------------------------

Defines a collection of hive queries.



.. csv-table:: HiveQueryCollection type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "queries", ":ref:`ref_flyteidl.plugins.HiveQuery`", "repeated", ""







.. _ref_flyteidl.plugins.QuboleHiveJob:

QuboleHiveJob
------------------------------------------------------------------

This message works with the 'hive' task type in the SDK and is the object that will be in the 'custom' field
of a hive task's TaskTemplate



.. csv-table:: QuboleHiveJob type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "cluster_label", ":ref:`ref_string`", "", ""
   "query_collection", ":ref:`ref_flyteidl.plugins.HiveQueryCollection`", "", "**Deprecated.** "
   "tags", ":ref:`ref_string`", "repeated", ""
   "query", ":ref:`ref_flyteidl.plugins.HiveQuery`", "", ""






..
   end messages


..
   end enums


..
   end HasExtensions


..
   end services




.. _ref_flyteidl/plugins/ray.proto:

flyteidl/plugins/ray.proto
==================================================================





.. _ref_flyteidl.core.ClusterSpec:

ClusterSpec
------------------------------------------------------------------





.. csv-table:: ClusterSpec type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "head_group_spec", ":ref:`ref_flyteidl.core.HeadGroupSpec`", "", "The head group configuration"
   "worker_group_spec", ":ref:`ref_flyteidl.core.WorkerGroupSpec`", "repeated", "The worker group configurations"







.. _ref_flyteidl.core.HeadGroupSpec:

HeadGroupSpec
------------------------------------------------------------------





.. csv-table:: HeadGroupSpec type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "ray_start_params", ":ref:`ref_flyteidl.core.HeadGroupSpec.RayStartParamsEntry`", "repeated", "Optional. The ray start params of head node group"







.. _ref_flyteidl.core.HeadGroupSpec.RayStartParamsEntry:

HeadGroupSpec.RayStartParamsEntry
------------------------------------------------------------------





.. csv-table:: HeadGroupSpec.RayStartParamsEntry type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "key", ":ref:`ref_string`", "", ""
   "value", ":ref:`ref_string`", "", ""







.. _ref_flyteidl.core.RayCluster:

RayCluster
------------------------------------------------------------------

Define Ray cluster spec



.. csv-table:: RayCluster type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "cluster_spec", ":ref:`ref_flyteidl.core.ClusterSpec`", "", "Required field. This field indicates ray cluster configuration"







.. _ref_flyteidl.core.RayJob:

RayJob
------------------------------------------------------------------

RayJobSpec defines the desired state of RayJob



.. csv-table:: RayJob type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "rayCluster", ":ref:`ref_flyteidl.core.RayCluster`", "", "RayClusterSpec is the cluster template to run the job"
   "RuntimeEnv", ":ref:`ref_string`", "", "RuntimeEnv is base64 encoded. Ray runtime environments: https://docs.ray.io/en/latest/ray-core/handling-dependencies.html#runtime-environments"
   "ShutdownAfterJobFinishes", ":ref:`ref_bool`", "", "ShutdownAfterJobFinishes will determine whether to delete the ray cluster once rayJob succeed or failed."
   "TTLSecondsAfterFinished", ":ref:`ref_int32`", "", "TTLSecondsAfterFinished is the TTL to clean up RayCluster. It's only working when ShutdownAfterJobFinishes set to true."







.. _ref_flyteidl.core.WorkerGroupSpec:

WorkerGroupSpec
------------------------------------------------------------------





.. csv-table:: WorkerGroupSpec type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "group_name", ":ref:`ref_string`", "", "Required. Group name of the current worker group"
   "replicas", ":ref:`ref_int32`", "", "Required. Desired replicas of the worker group"
   "min_replicas", ":ref:`ref_int32`", "", "Optional. Min replicas of the worker group"
   "max_replicas", ":ref:`ref_int32`", "", "Optional. Max replicas of the worker group"
   "ray_start_params", ":ref:`ref_flyteidl.core.WorkerGroupSpec.RayStartParamsEntry`", "repeated", "Optional. The ray start params of worker node group"







.. _ref_flyteidl.core.WorkerGroupSpec.RayStartParamsEntry:

WorkerGroupSpec.RayStartParamsEntry
------------------------------------------------------------------





.. csv-table:: WorkerGroupSpec.RayStartParamsEntry type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "key", ":ref:`ref_string`", "", ""
   "value", ":ref:`ref_string`", "", ""






..
   end messages


..
   end enums


..
   end HasExtensions


..
   end services




.. _ref_flyteidl/plugins/spark.proto:

flyteidl/plugins/spark.proto
==================================================================





.. _ref_flyteidl.plugins.SparkApplication:

SparkApplication
------------------------------------------------------------------










.. _ref_flyteidl.plugins.SparkJob:

SparkJob
------------------------------------------------------------------

Custom Proto for Spark Plugin.



.. csv-table:: SparkJob type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "applicationType", ":ref:`ref_flyteidl.plugins.SparkApplication.Type`", "", ""
   "mainApplicationFile", ":ref:`ref_string`", "", ""
   "mainClass", ":ref:`ref_string`", "", ""
   "sparkConf", ":ref:`ref_flyteidl.plugins.SparkJob.SparkConfEntry`", "repeated", ""
   "hadoopConf", ":ref:`ref_flyteidl.plugins.SparkJob.HadoopConfEntry`", "repeated", ""
   "executorPath", ":ref:`ref_string`", "", "Executor path for Python jobs."







.. _ref_flyteidl.plugins.SparkJob.HadoopConfEntry:

SparkJob.HadoopConfEntry
------------------------------------------------------------------





.. csv-table:: SparkJob.HadoopConfEntry type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "key", ":ref:`ref_string`", "", ""
   "value", ":ref:`ref_string`", "", ""







.. _ref_flyteidl.plugins.SparkJob.SparkConfEntry:

SparkJob.SparkConfEntry
------------------------------------------------------------------





.. csv-table:: SparkJob.SparkConfEntry type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "key", ":ref:`ref_string`", "", ""
   "value", ":ref:`ref_string`", "", ""






..
   end messages



.. _ref_flyteidl.plugins.SparkApplication.Type:

SparkApplication.Type
------------------------------------------------------------------



.. csv-table:: Enum SparkApplication.Type values
   :header: "Name", "Number", "Description"
   :widths: auto

   "PYTHON", "0", ""
   "JAVA", "1", ""
   "SCALA", "2", ""
   "R", "3", ""


..
   end enums


..
   end HasExtensions


..
   end services




.. _ref_flyteidl/plugins/tensorflow.proto:

flyteidl/plugins/tensorflow.proto
==================================================================





.. _ref_flyteidl.plugins.DistributedTensorflowTrainingTask:

DistributedTensorflowTrainingTask
------------------------------------------------------------------

Custom proto for plugin that enables distributed training using https://github.com/kubeflow/tf-operator



.. csv-table:: DistributedTensorflowTrainingTask type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "workers", ":ref:`ref_int32`", "", "number of worker, ps, chief replicas spawned in the cluster for this job"
   "ps_replicas", ":ref:`ref_int32`", "", "PS -> Parameter server"
   "chief_replicas", ":ref:`ref_int32`", "", ""






..
   end messages


..
   end enums


..
   end HasExtensions


..
   end services




.. _ref_flyteidl/plugins/waitable.proto:

flyteidl/plugins/waitable.proto
==================================================================





.. _ref_flyteidl.plugins.Waitable:

Waitable
------------------------------------------------------------------

Represents an Execution that was launched and could be waited on.



.. csv-table:: Waitable type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "wf_exec_id", ":ref:`ref_flyteidl.core.WorkflowExecutionIdentifier`", "", ""
   "phase", ":ref:`ref_flyteidl.core.WorkflowExecution.Phase`", "", ""
   "workflow_id", ":ref:`ref_string`", "", ""






..
   end messages


..
   end enums


..
   end HasExtensions


..
   end services



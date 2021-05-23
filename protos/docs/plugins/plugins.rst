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





 

 

 

 




.. _ref_flyteidl/plugins/presto.proto:

flyteidl/plugins/presto.proto
==================================================================





.. _ref_flyteidl.plugins.PrestoQuery:

PrestoQuery
------------------------------------------------------------------

This message works with the &#39;presto&#39; task type in the SDK and is the object that will be in the &#39;custom&#39; field
of a Presto task&#39;s TaskTemplate



.. csv-table:: PrestoQuery type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "routing_group", ":ref:`ref_string`", "", ""
   "catalog", ":ref:`ref_string`", "", ""
   "schema", ":ref:`ref_string`", "", ""
   "statement", ":ref:`ref_string`", "", ""





 

 

 

 




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

This message works with the &#39;hive&#39; task type in the SDK and is the object that will be in the &#39;custom&#39; field
of a hive task&#39;s TaskTemplate



.. csv-table:: QuboleHiveJob type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "cluster_label", ":ref:`ref_string`", "", ""
   "query_collection", ":ref:`ref_flyteidl.plugins.HiveQueryCollection`", "", "**Deprecated.** "
   "tags", ":ref:`ref_string`", "repeated", ""
   "query", ":ref:`ref_flyteidl.plugins.HiveQuery`", "", ""





 

 

 

 




.. _ref_flyteidl/plugins/sidecar.proto:

flyteidl/plugins/sidecar.proto
==================================================================





.. _ref_flyteidl.plugins.SidecarJob:

SidecarJob
------------------------------------------------------------------

A sidecar job brings up the desired pod_spec.
The plugin executor is responsible for keeping the pod alive until the primary container terminates
or the task itself times out.



.. csv-table:: SidecarJob type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "pod_spec", ":ref:`ref_k8s.io.api.core.v1.PodSpec`", "", ""
   "primary_container_name", ":ref:`ref_string`", "", ""





 

 

 

 




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
   "ps_replicas", ":ref:`ref_int32`", "", "PS -&gt; Parameter server"
   "chief_replicas", ":ref:`ref_int32`", "", ""





 

 

 

 




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





 

 

 

 



.. _ref_scala_types:

Scalar Value Types
==================



.. _ref_double:

double
-----------------------------



.. csv-table:: double language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "double", "double", "double", "float", "float64", "double", "float", "Float"



.. _ref_float:

float
-----------------------------



.. csv-table:: float language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "float", "float", "float", "float", "float32", "float", "float", "Float"



.. _ref_int32:

int32
-----------------------------

Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead.

.. csv-table:: int32 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "int32", "int32", "int", "int", "int32", "int", "integer", "Bignum or Fixnum (as required)"



.. _ref_int64:

int64
-----------------------------

Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead.

.. csv-table:: int64 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "int64", "int64", "long", "int/long", "int64", "long", "integer/string", "Bignum"



.. _ref_uint32:

uint32
-----------------------------

Uses variable-length encoding.

.. csv-table:: uint32 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "uint32", "uint32", "int", "int/long", "uint32", "uint", "integer", "Bignum or Fixnum (as required)"



.. _ref_uint64:

uint64
-----------------------------

Uses variable-length encoding.

.. csv-table:: uint64 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "uint64", "uint64", "long", "int/long", "uint64", "ulong", "integer/string", "Bignum or Fixnum (as required)"



.. _ref_sint32:

sint32
-----------------------------

Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s.

.. csv-table:: sint32 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "sint32", "int32", "int", "int", "int32", "int", "integer", "Bignum or Fixnum (as required)"



.. _ref_sint64:

sint64
-----------------------------

Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s.

.. csv-table:: sint64 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "sint64", "int64", "long", "int/long", "int64", "long", "integer/string", "Bignum"



.. _ref_fixed32:

fixed32
-----------------------------

Always four bytes. More efficient than uint32 if values are often greater than 2^28.

.. csv-table:: fixed32 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "fixed32", "uint32", "int", "int", "uint32", "uint", "integer", "Bignum or Fixnum (as required)"



.. _ref_fixed64:

fixed64
-----------------------------

Always eight bytes. More efficient than uint64 if values are often greater than 2^56.

.. csv-table:: fixed64 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "fixed64", "uint64", "long", "int/long", "uint64", "ulong", "integer/string", "Bignum"



.. _ref_sfixed32:

sfixed32
-----------------------------

Always four bytes.

.. csv-table:: sfixed32 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "sfixed32", "int32", "int", "int", "int32", "int", "integer", "Bignum or Fixnum (as required)"



.. _ref_sfixed64:

sfixed64
-----------------------------

Always eight bytes.

.. csv-table:: sfixed64 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "sfixed64", "int64", "long", "int/long", "int64", "long", "integer/string", "Bignum"



.. _ref_bool:

bool
-----------------------------



.. csv-table:: bool language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "bool", "bool", "boolean", "boolean", "bool", "bool", "boolean", "TrueClass/FalseClass"



.. _ref_string:

string
-----------------------------

A string must always contain UTF-8 encoded or 7-bit ASCII text.

.. csv-table:: string language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "string", "string", "String", "str/unicode", "string", "string", "string", "String (UTF-8)"



.. _ref_bytes:

bytes
-----------------------------

May contain any arbitrary sequence of bytes.

.. csv-table:: bytes language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "bytes", "string", "ByteString", "str", "[]byte", "ByteString", "string", "String (ASCII-8BIT)"

 
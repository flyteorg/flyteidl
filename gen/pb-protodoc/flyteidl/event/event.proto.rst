.. _api_file_flyteidl/event/event.proto:

event.proto
==========================

.. _api_msg_flyteidl.event.WorkflowExecutionEvent:

flyteidl.event.WorkflowExecutionEvent
-------------------------------------

`[flyteidl.event.WorkflowExecutionEvent proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/event.proto#L11>`_


.. code-block:: json

  {
    "execution_id": "{...}",
    "producer_id": "...",
    "phase": "...",
    "occurred_at": "{...}",
    "output_uri": "...",
    "error": "{...}"
  }

.. _api_field_flyteidl.event.WorkflowExecutionEvent.execution_id:

execution_id
  (:ref:`flyteidl.core.WorkflowExecutionIdentifier <api_msg_flyteidl.core.WorkflowExecutionIdentifier>`) Workflow execution id
  
  
.. _api_field_flyteidl.event.WorkflowExecutionEvent.producer_id:

producer_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) the id of the originator (Propeller) of the event
  
  
.. _api_field_flyteidl.event.WorkflowExecutionEvent.phase:

phase
  (:ref:`flyteidl.core.WorkflowExecution.Phase <api_enum_flyteidl.core.WorkflowExecution.Phase>`) 
  
.. _api_field_flyteidl.event.WorkflowExecutionEvent.occurred_at:

occurred_at
  (:ref:`google.protobuf.Timestamp <api_msg_google.protobuf.Timestamp>`) This timestamp represents when the original event occurred, it is generated
  by the executor of the workflow.
  
  
.. _api_field_flyteidl.event.WorkflowExecutionEvent.output_uri:

output_uri
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) URL to the output of the execution, it encodes all the information
  including Cloud source provider. ie., s3://...
  
  
  
  Only one of :ref:`output_uri <api_field_flyteidl.event.WorkflowExecutionEvent.output_uri>`, :ref:`error <api_field_flyteidl.event.WorkflowExecutionEvent.error>` may be set.
  
.. _api_field_flyteidl.event.WorkflowExecutionEvent.error:

error
  (:ref:`flyteidl.core.ExecutionError <api_msg_flyteidl.core.ExecutionError>`) Error information for the execution
  
  
  
  Only one of :ref:`output_uri <api_field_flyteidl.event.WorkflowExecutionEvent.output_uri>`, :ref:`error <api_field_flyteidl.event.WorkflowExecutionEvent.error>` may be set.
  


.. _api_msg_flyteidl.event.NodeExecutionEvent:

flyteidl.event.NodeExecutionEvent
---------------------------------

`[flyteidl.event.NodeExecutionEvent proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/event.proto#L34>`_


.. code-block:: json

  {
    "id": "{...}",
    "producer_id": "...",
    "phase": "...",
    "occurred_at": "{...}",
    "input_uri": "...",
    "output_uri": "...",
    "error": "{...}",
    "workflow_node_metadata": "{...}",
    "task_node_metadata": "{...}",
    "parent_task_metadata": "{...}"
  }

.. _api_field_flyteidl.event.NodeExecutionEvent.id:

id
  (:ref:`flyteidl.core.NodeExecutionIdentifier <api_msg_flyteidl.core.NodeExecutionIdentifier>`) Unique identifier for this node execution
  
  
.. _api_field_flyteidl.event.NodeExecutionEvent.producer_id:

producer_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) the id of the originator (Propeller) of the event
  
  
.. _api_field_flyteidl.event.NodeExecutionEvent.phase:

phase
  (:ref:`flyteidl.core.NodeExecution.Phase <api_enum_flyteidl.core.NodeExecution.Phase>`) 
  
.. _api_field_flyteidl.event.NodeExecutionEvent.occurred_at:

occurred_at
  (:ref:`google.protobuf.Timestamp <api_msg_google.protobuf.Timestamp>`) This timestamp represents when the original event occurred, it is generated
  by the executor of the node.
  
  
.. _api_field_flyteidl.event.NodeExecutionEvent.input_uri:

input_uri
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.event.NodeExecutionEvent.output_uri:

output_uri
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) URL to the output of the execution, it encodes all the information
  including Cloud source provider. ie., s3://...
  
  
  
  Only one of :ref:`output_uri <api_field_flyteidl.event.NodeExecutionEvent.output_uri>`, :ref:`error <api_field_flyteidl.event.NodeExecutionEvent.error>` may be set.
  
.. _api_field_flyteidl.event.NodeExecutionEvent.error:

error
  (:ref:`flyteidl.core.ExecutionError <api_msg_flyteidl.core.ExecutionError>`) Error information for the execution
  
  
  
  Only one of :ref:`output_uri <api_field_flyteidl.event.NodeExecutionEvent.output_uri>`, :ref:`error <api_field_flyteidl.event.NodeExecutionEvent.error>` may be set.
  
.. _api_field_flyteidl.event.NodeExecutionEvent.workflow_node_metadata:

workflow_node_metadata
  (:ref:`flyteidl.event.WorkflowNodeMetadata <api_msg_flyteidl.event.WorkflowNodeMetadata>`) 
  Additional metadata to do with this event's node target based
  on the node type
  
  
  Only one of :ref:`workflow_node_metadata <api_field_flyteidl.event.NodeExecutionEvent.workflow_node_metadata>`, :ref:`task_node_metadata <api_field_flyteidl.event.NodeExecutionEvent.task_node_metadata>` may be set.
  
.. _api_field_flyteidl.event.NodeExecutionEvent.task_node_metadata:

task_node_metadata
  (:ref:`flyteidl.event.TaskNodeMetadata <api_msg_flyteidl.event.TaskNodeMetadata>`) 
  Additional metadata to do with this event's node target based
  on the node type
  
  
  Only one of :ref:`workflow_node_metadata <api_field_flyteidl.event.NodeExecutionEvent.workflow_node_metadata>`, :ref:`task_node_metadata <api_field_flyteidl.event.NodeExecutionEvent.task_node_metadata>` may be set.
  
.. _api_field_flyteidl.event.NodeExecutionEvent.parent_task_metadata:

parent_task_metadata
  (:ref:`flyteidl.event.ParentTaskExecutionMetadata <api_msg_flyteidl.event.ParentTaskExecutionMetadata>`) Specifies which task (if any) launched this node.
  
  


.. _api_msg_flyteidl.event.WorkflowNodeMetadata:

flyteidl.event.WorkflowNodeMetadata
-----------------------------------

`[flyteidl.event.WorkflowNodeMetadata proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/event.proto#L70>`_

For Workflow Nodes we need to send information about the workflow that's launched

.. code-block:: json

  {
    "execution_id": "{...}"
  }

.. _api_field_flyteidl.event.WorkflowNodeMetadata.execution_id:

execution_id
  (:ref:`flyteidl.core.WorkflowExecutionIdentifier <api_msg_flyteidl.core.WorkflowExecutionIdentifier>`) 
  


.. _api_msg_flyteidl.event.CatalogArtifactTag:

flyteidl.event.CatalogArtifactTag
---------------------------------

`[flyteidl.event.CatalogArtifactTag proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/event.proto#L90>`_


.. code-block:: json

  {
    "artifact_id": "...",
    "name": "..."
  }

.. _api_field_flyteidl.event.CatalogArtifactTag.artifact_id:

artifact_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Artifact ID is generated name
  
  
.. _api_field_flyteidl.event.CatalogArtifactTag.name:

name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Flyte computes the tag automatically, as the hash of the values
  
  


.. _api_msg_flyteidl.event.CatalogMetadata:

flyteidl.event.CatalogMetadata
------------------------------

`[flyteidl.event.CatalogMetadata proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/event.proto#L98>`_

Catalog artifact information with specific metadata

.. code-block:: json

  {
    "dataset_id": "{...}",
    "artifact_tag": "{...}",
    "source_task_execution": "{...}"
  }

.. _api_field_flyteidl.event.CatalogMetadata.dataset_id:

dataset_id
  (:ref:`flyteidl.core.Identifier <api_msg_flyteidl.core.Identifier>`) Dataset ID in the catalog
  
  
.. _api_field_flyteidl.event.CatalogMetadata.artifact_tag:

artifact_tag
  (:ref:`flyteidl.event.CatalogArtifactTag <api_msg_flyteidl.event.CatalogArtifactTag>`) Artifact tag in the catalog
  
  
.. _api_field_flyteidl.event.CatalogMetadata.source_task_execution:

source_task_execution
  (:ref:`flyteidl.core.TaskExecutionIdentifier <api_msg_flyteidl.core.TaskExecutionIdentifier>`) Today we only support TaskExecutionIdentifier as a source, as catalog caching only works for task executions
  
  Optional: Source Execution identifier, if this dataset was generated by another execution in Flyte. This is a one-of field and will depend on the caching context
  
  


.. _api_msg_flyteidl.event.TaskNodeMetadata:

flyteidl.event.TaskNodeMetadata
-------------------------------

`[flyteidl.event.TaskNodeMetadata proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/event.proto#L110>`_


.. code-block:: json

  {
    "cache_status": "...",
    "catalog_key": "{...}"
  }

.. _api_field_flyteidl.event.TaskNodeMetadata.cache_status:

cache_status
  (:ref:`flyteidl.event.CatalogCacheStatus <api_enum_flyteidl.event.CatalogCacheStatus>`) Captures the status of caching for this execution.
  
  
.. _api_field_flyteidl.event.TaskNodeMetadata.catalog_key:

catalog_key
  (:ref:`flyteidl.event.CatalogMetadata <api_msg_flyteidl.event.CatalogMetadata>`) This structure carries the catalog artifact information
  
  


.. _api_msg_flyteidl.event.ParentTaskExecutionMetadata:

flyteidl.event.ParentTaskExecutionMetadata
------------------------------------------

`[flyteidl.event.ParentTaskExecutionMetadata proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/event.proto#L118>`_


.. code-block:: json

  {
    "id": "{...}"
  }

.. _api_field_flyteidl.event.ParentTaskExecutionMetadata.id:

id
  (:ref:`flyteidl.core.TaskExecutionIdentifier <api_msg_flyteidl.core.TaskExecutionIdentifier>`) 
  


.. _api_msg_flyteidl.event.TaskExecutionEvent:

flyteidl.event.TaskExecutionEvent
---------------------------------

`[flyteidl.event.TaskExecutionEvent proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/event.proto#L123>`_

Plugin specific execution event information. For tasks like Python, Hive, Spark, DynamicJob.

.. code-block:: json

  {
    "task_id": "{...}",
    "parent_node_execution_id": "{...}",
    "retry_attempt": "...",
    "phase": "...",
    "producer_id": "...",
    "logs": [],
    "occurred_at": "{...}",
    "input_uri": "...",
    "output_uri": "...",
    "error": "{...}",
    "custom_info": "{...}",
    "phase_version": "..."
  }

.. _api_field_flyteidl.event.TaskExecutionEvent.task_id:

task_id
  (:ref:`flyteidl.core.Identifier <api_msg_flyteidl.core.Identifier>`) ID of the task. In combination with the retryAttempt this will indicate
  the task execution uniquely for a given parent node execution.
  
  
.. _api_field_flyteidl.event.TaskExecutionEvent.parent_node_execution_id:

parent_node_execution_id
  (:ref:`flyteidl.core.NodeExecutionIdentifier <api_msg_flyteidl.core.NodeExecutionIdentifier>`) A task execution is always kicked off by a node execution, the event consumer
  will use the parent_id to relate the task to it's parent node execution
  
  
.. _api_field_flyteidl.event.TaskExecutionEvent.retry_attempt:

retry_attempt
  (`uint32 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) retry attempt number for this task, ie., 2 for the second attempt
  
  
.. _api_field_flyteidl.event.TaskExecutionEvent.phase:

phase
  (:ref:`flyteidl.core.TaskExecution.Phase <api_enum_flyteidl.core.TaskExecution.Phase>`) Phase associated with the event
  
  
.. _api_field_flyteidl.event.TaskExecutionEvent.producer_id:

producer_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) id of the process that sent this event, mainly for trace debugging
  
  
.. _api_field_flyteidl.event.TaskExecutionEvent.logs:

logs
  (:ref:`flyteidl.core.TaskLog <api_msg_flyteidl.core.TaskLog>`) log information for the task execution
  
  
.. _api_field_flyteidl.event.TaskExecutionEvent.occurred_at:

occurred_at
  (:ref:`google.protobuf.Timestamp <api_msg_google.protobuf.Timestamp>`) This timestamp represents when the original event occurred, it is generated
  by the executor of the task.
  
  
.. _api_field_flyteidl.event.TaskExecutionEvent.input_uri:

input_uri
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) URI of the input file, it encodes all the information
  including Cloud source provider. ie., s3://...
  
  
.. _api_field_flyteidl.event.TaskExecutionEvent.output_uri:

output_uri
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) URI to the output of the execution, it will be in a format that encodes all the information
  including Cloud source provider. ie., s3://...
  
  
  
  Only one of :ref:`output_uri <api_field_flyteidl.event.TaskExecutionEvent.output_uri>`, :ref:`error <api_field_flyteidl.event.TaskExecutionEvent.error>` may be set.
  
.. _api_field_flyteidl.event.TaskExecutionEvent.error:

error
  (:ref:`flyteidl.core.ExecutionError <api_msg_flyteidl.core.ExecutionError>`) Error information for the execution
  
  
  
  Only one of :ref:`output_uri <api_field_flyteidl.event.TaskExecutionEvent.output_uri>`, :ref:`error <api_field_flyteidl.event.TaskExecutionEvent.error>` may be set.
  
.. _api_field_flyteidl.event.TaskExecutionEvent.custom_info:

custom_info
  (:ref:`google.protobuf.Struct <api_msg_google.protobuf.Struct>`) Custom data that the task plugin sends back. This is extensible to allow various plugins in the system.
  
  
.. _api_field_flyteidl.event.TaskExecutionEvent.phase_version:

phase_version
  (`uint32 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Some phases, like RUNNING, can send multiple events with changed metadata (new logs, additional custom_info, etc)
  that should be recorded regardless of the lack of phase change.
  The version field should be incremented when metadata changes across the duration of an individual phase.
  
  

.. _api_enum_flyteidl.event.CatalogCacheStatus:

Enum flyteidl.event.CatalogCacheStatus
--------------------------------------

`[flyteidl.event.CatalogCacheStatus proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/event.proto#L75>`_

Indicates the status of CatalogCaching. The reason why this is not embeded in TaskNodeMetadata is, that we may use for other types of nodes as well in the future

.. _api_enum_value_flyteidl.event.CatalogCacheStatus.CACHE_DISABLED:

CACHE_DISABLED
  *(DEFAULT)* ⁣Used to indicate that caching was disabled
  
  
.. _api_enum_value_flyteidl.event.CatalogCacheStatus.CACHE_MISS:

CACHE_MISS
  ⁣Used to indicate that the cache lookup resulted in no matches
  
  
.. _api_enum_value_flyteidl.event.CatalogCacheStatus.CACHE_HIT:

CACHE_HIT
  ⁣used to indicate that the associated artifact was a result of a previous execution
  
  
.. _api_enum_value_flyteidl.event.CatalogCacheStatus.CACHE_POPULATED:

CACHE_POPULATED
  ⁣used to indicate that the resultant artifact was added to the cache
  
  
.. _api_enum_value_flyteidl.event.CatalogCacheStatus.CACHE_LOOKUP_FAILURE:

CACHE_LOOKUP_FAILURE
  ⁣Used to indicate that cache lookup failed because of an error
  
  
.. _api_enum_value_flyteidl.event.CatalogCacheStatus.CACHE_PUT_FAILURE:

CACHE_PUT_FAILURE
  ⁣Used to indicate that cache lookup failed because of an error
  
  

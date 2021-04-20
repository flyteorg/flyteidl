.. _api_file_flyteidl/admin/node_execution.proto:

node_execution.proto
===================================

.. _api_msg_flyteidl.admin.NodeExecutionGetRequest:

flyteidl.admin.NodeExecutionGetRequest
--------------------------------------

`[flyteidl.admin.NodeExecutionGetRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/node_execution.proto#L15>`_

A message used to fetch a single node execution entity.

.. code-block:: json

  {
    "id": "{...}"
  }

.. _api_field_flyteidl.admin.NodeExecutionGetRequest.id:

id
  (:ref:`flyteidl.core.NodeExecutionIdentifier <api_msg_flyteidl.core.NodeExecutionIdentifier>`) Uniquely identifies an individual node execution.
  
  


.. _api_msg_flyteidl.admin.NodeExecutionListRequest:

flyteidl.admin.NodeExecutionListRequest
---------------------------------------

`[flyteidl.admin.NodeExecutionListRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/node_execution.proto#L22>`_

Represents a request structure to retrieve a list of node execution entities.

.. code-block:: json

  {
    "workflow_execution_id": "{...}",
    "limit": "...",
    "token": "...",
    "filters": "...",
    "sort_by": "{...}",
    "unique_parent_id": "..."
  }

.. _api_field_flyteidl.admin.NodeExecutionListRequest.workflow_execution_id:

workflow_execution_id
  (:ref:`flyteidl.core.WorkflowExecutionIdentifier <api_msg_flyteidl.core.WorkflowExecutionIdentifier>`) Indicates the workflow execution to filter by.
  
  
.. _api_field_flyteidl.admin.NodeExecutionListRequest.limit:

limit
  (`uint32 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Indicates the number of resources to be returned.
  
  
.. _api_field_flyteidl.admin.NodeExecutionListRequest.token:

token
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) In the case of multiple pages of results, the, server-provided token can be used to fetch the next page
  in a query.
  +optional
  
  
.. _api_field_flyteidl.admin.NodeExecutionListRequest.filters:

filters
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Indicates a list of filters passed as string.
  More info on constructing filters : <Link>
  +optional
  
  
.. _api_field_flyteidl.admin.NodeExecutionListRequest.sort_by:

sort_by
  (:ref:`flyteidl.admin.Sort <api_msg_flyteidl.admin.Sort>`) Sort ordering.
  +optional
  
  
.. _api_field_flyteidl.admin.NodeExecutionListRequest.unique_parent_id:

unique_parent_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Unique identifier of the parent node in the execution
  +optional
  
  


.. _api_msg_flyteidl.admin.NodeExecutionForTaskListRequest:

flyteidl.admin.NodeExecutionForTaskListRequest
----------------------------------------------

`[flyteidl.admin.NodeExecutionForTaskListRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/node_execution.proto#L47>`_

Represents a request structure to retrieve a list of node execution entities launched by a specific task.

.. code-block:: json

  {
    "task_execution_id": "{...}",
    "limit": "...",
    "token": "...",
    "filters": "...",
    "sort_by": "{...}"
  }

.. _api_field_flyteidl.admin.NodeExecutionForTaskListRequest.task_execution_id:

task_execution_id
  (:ref:`flyteidl.core.TaskExecutionIdentifier <api_msg_flyteidl.core.TaskExecutionIdentifier>`) Indicates the node execution to filter by.
  
  
.. _api_field_flyteidl.admin.NodeExecutionForTaskListRequest.limit:

limit
  (`uint32 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Indicates the number of resources to be returned.
  
  
.. _api_field_flyteidl.admin.NodeExecutionForTaskListRequest.token:

token
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) In the case of multiple pages of results, the, server-provided token can be used to fetch the next page
  in a query.
  +optional
  
  
.. _api_field_flyteidl.admin.NodeExecutionForTaskListRequest.filters:

filters
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Indicates a list of filters passed as string.
  More info on constructing filters : <Link>
  +optional
  
  
.. _api_field_flyteidl.admin.NodeExecutionForTaskListRequest.sort_by:

sort_by
  (:ref:`flyteidl.admin.Sort <api_msg_flyteidl.admin.Sort>`) Sort ordering.
  +optional
  
  


.. _api_msg_flyteidl.admin.NodeExecution:

flyteidl.admin.NodeExecution
----------------------------

`[flyteidl.admin.NodeExecution proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/node_execution.proto#L71>`_

Encapsulates all details for a single node execution entity.
A node represents a component in the overall workflow graph. A node launch a task, multiple tasks, an entire nested
sub-workflow, or even a separate child-workflow execution.
The same task can be called repeatedly in a single workflow but each node is unique.

.. code-block:: json

  {
    "id": "{...}",
    "input_uri": "...",
    "closure": "{...}",
    "metadata": "{...}"
  }

.. _api_field_flyteidl.admin.NodeExecution.id:

id
  (:ref:`flyteidl.core.NodeExecutionIdentifier <api_msg_flyteidl.core.NodeExecutionIdentifier>`) Uniquely identifies an individual node execution.
  
  
.. _api_field_flyteidl.admin.NodeExecution.input_uri:

input_uri
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Path to remote data store where input blob is stored.
  
  
.. _api_field_flyteidl.admin.NodeExecution.closure:

closure
  (:ref:`flyteidl.admin.NodeExecutionClosure <api_msg_flyteidl.admin.NodeExecutionClosure>`) Computed results associated with this node execution.
  
  
.. _api_field_flyteidl.admin.NodeExecution.metadata:

metadata
  (:ref:`flyteidl.admin.NodeExecutionMetaData <api_msg_flyteidl.admin.NodeExecutionMetaData>`) Metadata for Node Execution
  
  


.. _api_msg_flyteidl.admin.NodeExecutionMetaData:

flyteidl.admin.NodeExecutionMetaData
------------------------------------

`[flyteidl.admin.NodeExecutionMetaData proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/node_execution.proto#L87>`_

Represents additional attributes related to a Node Execution

.. code-block:: json

  {
    "retry_group": "...",
    "is_parent_node": "...",
    "spec_node_id": "..."
  }

.. _api_field_flyteidl.admin.NodeExecutionMetaData.retry_group:

retry_group
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Node executions are grouped depending on retries of the parent
  Retry group is unique within the context of a parent node.
  
  
.. _api_field_flyteidl.admin.NodeExecutionMetaData.is_parent_node:

is_parent_node
  (`bool <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Boolean flag indicating if the node has child nodes under it
  
  
.. _api_field_flyteidl.admin.NodeExecutionMetaData.spec_node_id:

spec_node_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Node id of the node in the original workflow
  This maps to value of WorkflowTemplate.nodes[X].id
  
  


.. _api_msg_flyteidl.admin.NodeExecutionList:

flyteidl.admin.NodeExecutionList
--------------------------------

`[flyteidl.admin.NodeExecutionList proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/node_execution.proto#L101>`_

Request structure to retrieve a list of node execution entities.

.. code-block:: json

  {
    "node_executions": [],
    "token": "..."
  }

.. _api_field_flyteidl.admin.NodeExecutionList.node_executions:

node_executions
  (:ref:`flyteidl.admin.NodeExecution <api_msg_flyteidl.admin.NodeExecution>`) 
  
.. _api_field_flyteidl.admin.NodeExecutionList.token:

token
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) In the case of multiple pages of results, the server-provided token can be used to fetch the next page
  in a query. If there are no more results, this value will be empty.
  
  


.. _api_msg_flyteidl.admin.NodeExecutionClosure:

flyteidl.admin.NodeExecutionClosure
-----------------------------------

`[flyteidl.admin.NodeExecutionClosure proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/node_execution.proto#L110>`_

Container for node execution details and results.

.. code-block:: json

  {
    "output_uri": "...",
    "error": "{...}",
    "phase": "...",
    "started_at": "{...}",
    "duration": "{...}",
    "created_at": "{...}",
    "updated_at": "{...}",
    "workflow_node_metadata": "{...}",
    "task_node_metadata": "{...}"
  }

.. _api_field_flyteidl.admin.NodeExecutionClosure.output_uri:

output_uri
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  Only a node in a terminal state will have a non-empty output_result.
  
  
  Only one of :ref:`output_uri <api_field_flyteidl.admin.NodeExecutionClosure.output_uri>`, :ref:`error <api_field_flyteidl.admin.NodeExecutionClosure.error>` may be set.
  
.. _api_field_flyteidl.admin.NodeExecutionClosure.error:

error
  (:ref:`flyteidl.core.ExecutionError <api_msg_flyteidl.core.ExecutionError>`) Error information for the Node
  
  Only a node in a terminal state will have a non-empty output_result.
  
  
  Only one of :ref:`output_uri <api_field_flyteidl.admin.NodeExecutionClosure.output_uri>`, :ref:`error <api_field_flyteidl.admin.NodeExecutionClosure.error>` may be set.
  
.. _api_field_flyteidl.admin.NodeExecutionClosure.phase:

phase
  (:ref:`flyteidl.core.NodeExecution.Phase <api_enum_flyteidl.core.NodeExecution.Phase>`) The last recorded phase for this node execution.
  
  
.. _api_field_flyteidl.admin.NodeExecutionClosure.started_at:

started_at
  (:ref:`google.protobuf.Timestamp <api_msg_google.protobuf.Timestamp>`) Time at which the node execution began running.
  
  
.. _api_field_flyteidl.admin.NodeExecutionClosure.duration:

duration
  (:ref:`google.protobuf.Duration <api_msg_google.protobuf.Duration>`) The amount of time the node execution spent running.
  
  
.. _api_field_flyteidl.admin.NodeExecutionClosure.created_at:

created_at
  (:ref:`google.protobuf.Timestamp <api_msg_google.protobuf.Timestamp>`) Time at which the node execution was created.
  
  
.. _api_field_flyteidl.admin.NodeExecutionClosure.updated_at:

updated_at
  (:ref:`google.protobuf.Timestamp <api_msg_google.protobuf.Timestamp>`) Time at which the node execution was last updated.
  
  
.. _api_field_flyteidl.admin.NodeExecutionClosure.workflow_node_metadata:

workflow_node_metadata
  (:ref:`flyteidl.admin.WorkflowNodeMetadata <api_msg_flyteidl.admin.WorkflowNodeMetadata>`) 
  Store metadata for what the node launched.
  for ex: if this is a workflow node, we store information for the launched workflow.
  
  
  Only one of :ref:`workflow_node_metadata <api_field_flyteidl.admin.NodeExecutionClosure.workflow_node_metadata>`, :ref:`task_node_metadata <api_field_flyteidl.admin.NodeExecutionClosure.task_node_metadata>` may be set.
  
.. _api_field_flyteidl.admin.NodeExecutionClosure.task_node_metadata:

task_node_metadata
  (:ref:`flyteidl.admin.TaskNodeMetadata <api_msg_flyteidl.admin.TaskNodeMetadata>`) 
  Store metadata for what the node launched.
  for ex: if this is a workflow node, we store information for the launched workflow.
  
  
  Only one of :ref:`workflow_node_metadata <api_field_flyteidl.admin.NodeExecutionClosure.workflow_node_metadata>`, :ref:`task_node_metadata <api_field_flyteidl.admin.NodeExecutionClosure.task_node_metadata>` may be set.
  


.. _api_msg_flyteidl.admin.WorkflowNodeMetadata:

flyteidl.admin.WorkflowNodeMetadata
-----------------------------------

`[flyteidl.admin.WorkflowNodeMetadata proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/node_execution.proto#L143>`_

Metadata for a WorkflowNode

.. code-block:: json

  {
    "executionId": "{...}"
  }

.. _api_field_flyteidl.admin.WorkflowNodeMetadata.executionId:

executionId
  (:ref:`flyteidl.core.WorkflowExecutionIdentifier <api_msg_flyteidl.core.WorkflowExecutionIdentifier>`) 
  


.. _api_msg_flyteidl.admin.TaskNodeMetadata:

flyteidl.admin.TaskNodeMetadata
-------------------------------

`[flyteidl.admin.TaskNodeMetadata proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/node_execution.proto#L148>`_

Metadata for the case in which the node is a TaskNode

.. code-block:: json

  {
    "cache_status": "...",
    "catalog_key": "{...}",
    "dynamic_workflow": "{...}"
  }

.. _api_field_flyteidl.admin.TaskNodeMetadata.cache_status:

cache_status
  (:ref:`flyteidl.core.CatalogCacheStatus <api_enum_flyteidl.core.CatalogCacheStatus>`) Captures the status of caching for this execution.
  
  
.. _api_field_flyteidl.admin.TaskNodeMetadata.catalog_key:

catalog_key
  (:ref:`flyteidl.core.CatalogMetadata <api_msg_flyteidl.core.CatalogMetadata>`) This structure carries the catalog artifact information
  
  
.. _api_field_flyteidl.admin.TaskNodeMetadata.dynamic_workflow:

dynamic_workflow
  (:ref:`flyteidl.admin.DynamicWorkflowNodeMetadata <api_msg_flyteidl.admin.DynamicWorkflowNodeMetadata>`) In the case this task launched a dynamic workflow we capture its structure here.
  
  


.. _api_msg_flyteidl.admin.DynamicWorkflowNodeMetadata:

flyteidl.admin.DynamicWorkflowNodeMetadata
------------------------------------------

`[flyteidl.admin.DynamicWorkflowNodeMetadata proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/node_execution.proto#L159>`_

For dynamic workflow nodes we send information about the dynamic workflow definition that gets generated.

.. code-block:: json

  {
    "id": "{...}",
    "compiled_workflow": "{...}"
  }

.. _api_field_flyteidl.admin.DynamicWorkflowNodeMetadata.id:

id
  (:ref:`flyteidl.core.Identifier <api_msg_flyteidl.core.Identifier>`) id represents the unique identifier of the workflow.
  
  
.. _api_field_flyteidl.admin.DynamicWorkflowNodeMetadata.compiled_workflow:

compiled_workflow
  (:ref:`flyteidl.core.CompiledWorkflowClosure <api_msg_flyteidl.core.CompiledWorkflowClosure>`) Represents the compiled representation of the embedded dynamic workflow.
  
  


.. _api_msg_flyteidl.admin.NodeExecutionGetDataRequest:

flyteidl.admin.NodeExecutionGetDataRequest
------------------------------------------

`[flyteidl.admin.NodeExecutionGetDataRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/node_execution.proto#L168>`_

Request structure to fetch inputs and output urls for a node execution.

.. code-block:: json

  {
    "id": "{...}"
  }

.. _api_field_flyteidl.admin.NodeExecutionGetDataRequest.id:

id
  (:ref:`flyteidl.core.NodeExecutionIdentifier <api_msg_flyteidl.core.NodeExecutionIdentifier>`) The identifier of the node execution for which to fetch inputs and outputs.
  
  


.. _api_msg_flyteidl.admin.NodeExecutionGetDataResponse:

flyteidl.admin.NodeExecutionGetDataResponse
-------------------------------------------

`[flyteidl.admin.NodeExecutionGetDataResponse proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/node_execution.proto#L174>`_

Response structure for NodeExecutionGetDataRequest which contains inputs and outputs for a node execution.

.. code-block:: json

  {
    "inputs": "{...}",
    "outputs": "{...}",
    "full_inputs": "{...}",
    "full_outputs": "{...}"
  }

.. _api_field_flyteidl.admin.NodeExecutionGetDataResponse.inputs:

inputs
  (:ref:`flyteidl.admin.UrlBlob <api_msg_flyteidl.admin.UrlBlob>`) Signed url to fetch a core.LiteralMap of node execution inputs.
  
  
.. _api_field_flyteidl.admin.NodeExecutionGetDataResponse.outputs:

outputs
  (:ref:`flyteidl.admin.UrlBlob <api_msg_flyteidl.admin.UrlBlob>`) Signed url to fetch a core.LiteralMap of node execution outputs.
  
  
.. _api_field_flyteidl.admin.NodeExecutionGetDataResponse.full_inputs:

full_inputs
  (:ref:`flyteidl.core.LiteralMap <api_msg_flyteidl.core.LiteralMap>`) Optional, full_inputs will only be populated if they are under a configured size threshold.
  
  
.. _api_field_flyteidl.admin.NodeExecutionGetDataResponse.full_outputs:

full_outputs
  (:ref:`flyteidl.core.LiteralMap <api_msg_flyteidl.core.LiteralMap>`) Optional, full_outputs will only be populated if they are under a configured size threshold. 
  
  


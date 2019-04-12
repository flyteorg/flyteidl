.. _api_file_flyteidl/admin/event.proto:

event.proto
==========================

.. _api_msg_flyteidl.admin.WorkflowExecutionEventRequest:

flyteidl.admin.WorkflowExecutionEventRequest
--------------------------------------------

`[flyteidl.admin.WorkflowExecutionEventRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/event.proto#L8>`_

Request to send a notification that a workflow execution event has occurred.

.. code-block:: json

  {
    "request_id": "...",
    "event": "{...}"
  }

.. _api_field_flyteidl.admin.WorkflowExecutionEventRequest.request_id:

request_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Unique ID for this request that can be traced between services
  
  
.. _api_field_flyteidl.admin.WorkflowExecutionEventRequest.event:

event
  (:ref:`flyteidl.event.WorkflowExecutionEvent <api_msg_flyteidl.event.WorkflowExecutionEvent>`) Details about the event that occurred.
  
  


.. _api_msg_flyteidl.admin.WorkflowExecutionEventResponse:

flyteidl.admin.WorkflowExecutionEventResponse
---------------------------------------------

`[flyteidl.admin.WorkflowExecutionEventResponse proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/event.proto#L16>`_


.. code-block:: json

  {}




.. _api_msg_flyteidl.admin.NodeExecutionEventRequest:

flyteidl.admin.NodeExecutionEventRequest
----------------------------------------

`[flyteidl.admin.NodeExecutionEventRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/event.proto#L21>`_

Request to send a notification that a node execution event has occurred.

.. code-block:: json

  {
    "request_id": "...",
    "event": "{...}"
  }

.. _api_field_flyteidl.admin.NodeExecutionEventRequest.request_id:

request_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Unique ID for this request that can be traced between services
  
  
.. _api_field_flyteidl.admin.NodeExecutionEventRequest.event:

event
  (:ref:`flyteidl.event.NodeExecutionEvent <api_msg_flyteidl.event.NodeExecutionEvent>`) Details about the event that occurred.
  
  


.. _api_msg_flyteidl.admin.NodeExecutionEventResponse:

flyteidl.admin.NodeExecutionEventResponse
-----------------------------------------

`[flyteidl.admin.NodeExecutionEventResponse proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/event.proto#L29>`_


.. code-block:: json

  {}




.. _api_msg_flyteidl.admin.TaskExecutionEventRequest:

flyteidl.admin.TaskExecutionEventRequest
----------------------------------------

`[flyteidl.admin.TaskExecutionEventRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/event.proto#L34>`_

Request to send a notification that a task execution event has occurred.

.. code-block:: json

  {
    "request_id": "...",
    "event": "{...}"
  }

.. _api_field_flyteidl.admin.TaskExecutionEventRequest.request_id:

request_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Unique ID for this request that can be traced between services
  
  
.. _api_field_flyteidl.admin.TaskExecutionEventRequest.event:

event
  (:ref:`flyteidl.event.TaskExecutionEvent <api_msg_flyteidl.event.TaskExecutionEvent>`) Details about the event that occurred.
  
  


.. _api_msg_flyteidl.admin.TaskExecutionEventResponse:

flyteidl.admin.TaskExecutionEventResponse
-----------------------------------------

`[flyteidl.admin.TaskExecutionEventResponse proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/event.proto#L42>`_


.. code-block:: json

  {}




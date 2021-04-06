.. _api_file_flyteidl/event/sensor.proto:

sensor.proto
===========================

.. _api_msg_flyteidl.event.WorkflowEvent:

flyteidl.event.WorkflowEvent
----------------------------

`[flyteidl.event.WorkflowEvent proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor.proto#L16>`_

This message is used to configure events triggered by a terminated workflow execution matching
one of the designated phases.

.. code-block:: json

  {
    "execution_identifier": "{...}",
    "named_entity_identifier": "{...}",
    "phases": []
  }

.. _api_field_flyteidl.event.WorkflowEvent.execution_identifier:

execution_identifier
  (:ref:`flyteidl.core.Identifier <api_msg_flyteidl.core.Identifier>`) 
  Specifies the upstream workflow whose completion triggers this event.
  
  
  Only one of :ref:`execution_identifier <api_field_flyteidl.event.WorkflowEvent.execution_identifier>`, :ref:`named_entity_identifier <api_field_flyteidl.event.WorkflowEvent.named_entity_identifier>` may be set.
  
.. _api_field_flyteidl.event.WorkflowEvent.named_entity_identifier:

named_entity_identifier
  (:ref:`flyteidl.core.NamedEntityIdentifier <api_msg_flyteidl.core.NamedEntityIdentifier>`) 
  Specifies the upstream workflow whose completion triggers this event.
  
  
  Only one of :ref:`execution_identifier <api_field_flyteidl.event.WorkflowEvent.execution_identifier>`, :ref:`named_entity_identifier <api_field_flyteidl.event.WorkflowEvent.named_entity_identifier>` may be set.
  
.. _api_field_flyteidl.event.WorkflowEvent.phases:

phases
  (:ref:`flyteidl.core.WorkflowExecution.Phase <api_enum_flyteidl.core.WorkflowExecution.Phase>`) Specifies terminal workflow phases for which this event should fire.
  
  


.. _api_msg_flyteidl.event.FilePrefix:

flyteidl.event.FilePrefix
-------------------------

`[flyteidl.event.FilePrefix proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor.proto#L31>`_

A file prefix defines a matchable prefix with an optional regex sub-pattern for which to trigger events.
For example, with just the prefix s3://my-s3-bucket/foo/ matches all files under the prefix
But with pattern "*/bar/*.txt", the file s3://my-s3-bucket/foo/1.txt would no longer match, whereas s3://my-s3-bucket/foo/2/bar/1.txt would.

.. code-block:: json

  {
    "prefix": "...",
    "pattern": "..."
  }

.. _api_field_flyteidl.event.FilePrefix.prefix:

prefix
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The primary prefix under which to observe file changes (optionally matching a pattern, if specified below).
  
  
.. _api_field_flyteidl.event.FilePrefix.pattern:

pattern
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Optional, pattern to match within the prefix
  +optional
  
  


.. _api_msg_flyteidl.event.RemoteFileEvent:

flyteidl.event.RemoteFileEvent
------------------------------

`[flyteidl.event.RemoteFileEvent proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor.proto#L41>`_

Defines events triggered by the designated action performed on the specified file (or prefix).

.. code-block:: json

  {
    "path": "...",
    "prefix": "{...}",
    "action": "..."
  }

.. _api_field_flyteidl.event.RemoteFileEvent.path:

path
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The full file path which identifies the file.
  
  
  
  Only one of :ref:`path <api_field_flyteidl.event.RemoteFileEvent.path>`, :ref:`prefix <api_field_flyteidl.event.RemoteFileEvent.prefix>` may be set.
  
.. _api_field_flyteidl.event.RemoteFileEvent.prefix:

prefix
  (:ref:`flyteidl.event.FilePrefix <api_msg_flyteidl.event.FilePrefix>`) 
  
  
  Only one of :ref:`path <api_field_flyteidl.event.RemoteFileEvent.path>`, :ref:`prefix <api_field_flyteidl.event.RemoteFileEvent.prefix>` may be set.
  
.. _api_field_flyteidl.event.RemoteFileEvent.action:

action
  (:ref:`flyteidl.event.RemoteFileEvent.Action <api_enum_flyteidl.event.RemoteFileEvent.Action>`) 
  

.. _api_enum_flyteidl.event.RemoteFileEvent.Action:

Enum flyteidl.event.RemoteFileEvent.Action
------------------------------------------

`[flyteidl.event.RemoteFileEvent.Action proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor.proto#L50>`_

Specifies what filetype action triggers the event.

.. _api_enum_value_flyteidl.event.RemoteFileEvent.Action.CREATE:

CREATE
  *(DEFAULT)* ⁣Trigger the event when a matching file has been created.
  
  

.. _api_msg_flyteidl.event.CustomEvent:

flyteidl.event.CustomEvent
--------------------------

`[flyteidl.event.CustomEvent proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor.proto#L59>`_

Allow users to register event targets for custom event sensors they deploy on their
own Flyte deployments.

.. code-block:: json

  {
    "target_type": "...",
    "custom_info": "{...}"
  }

.. _api_field_flyteidl.event.CustomEvent.target_type:

target_type
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Used to filter ListEventTarget queries by deployed sensors.
  
  
.. _api_field_flyteidl.event.CustomEvent.custom_info:

custom_info
  (:ref:`google.protobuf.Struct <api_msg_google.protobuf.Struct>`) Custom, marshalled user-defined data that the event sensor of type knows how to parse.
  
  


.. _api_msg_flyteidl.event.EventTarget:

flyteidl.event.EventTarget
--------------------------

`[flyteidl.event.EventTarget proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor.proto#L68>`_

This messages defines an event which should trigger a corresponding target.

.. code-block:: json

  {
    "workflow_event": "{...}",
    "remote_file_event": "{...}",
    "custom_event": "{...}",
    "launch_plan": "{...}",
    "event_timeout": "{...}",
    "event_trigger_arg": "..."
  }

.. _api_field_flyteidl.event.EventTarget.workflow_event:

workflow_event
  (:ref:`flyteidl.event.WorkflowEvent <api_msg_flyteidl.event.WorkflowEvent>`) 
  
  
  Only one of :ref:`workflow_event <api_field_flyteidl.event.EventTarget.workflow_event>`, :ref:`remote_file_event <api_field_flyteidl.event.EventTarget.remote_file_event>`, :ref:`custom_event <api_field_flyteidl.event.EventTarget.custom_event>` may be set.
  
.. _api_field_flyteidl.event.EventTarget.remote_file_event:

remote_file_event
  (:ref:`flyteidl.event.RemoteFileEvent <api_msg_flyteidl.event.RemoteFileEvent>`) 
  
  
  Only one of :ref:`workflow_event <api_field_flyteidl.event.EventTarget.workflow_event>`, :ref:`remote_file_event <api_field_flyteidl.event.EventTarget.remote_file_event>`, :ref:`custom_event <api_field_flyteidl.event.EventTarget.custom_event>` may be set.
  
.. _api_field_flyteidl.event.EventTarget.custom_event:

custom_event
  (:ref:`flyteidl.event.CustomEvent <api_msg_flyteidl.event.CustomEvent>`) For extensible use-cases and custom defined event sensors deployed to users' Flyte deployments.
  
  
  
  Only one of :ref:`workflow_event <api_field_flyteidl.event.EventTarget.workflow_event>`, :ref:`remote_file_event <api_field_flyteidl.event.EventTarget.remote_file_event>`, :ref:`custom_event <api_field_flyteidl.event.EventTarget.custom_event>` may be set.
  
.. _api_field_flyteidl.event.EventTarget.launch_plan:

launch_plan
  (:ref:`flyteidl.core.Identifier <api_msg_flyteidl.core.Identifier>`) Identifies a launch plan to create a workflow execution when the above event occurs.
  
  
  
.. _api_field_flyteidl.event.EventTarget.event_timeout:

event_timeout
  (:ref:`google.protobuf.Duration <api_msg_google.protobuf.Duration>`) +optional
  
  
.. _api_field_flyteidl.event.EventTarget.event_trigger_arg:

event_trigger_arg
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Optional, the event trigger will schedule the execution with an input whose name is
  the value of event_trigger_arg. The input value is determined by the specific event.
  For example, in the case of a RemoteFileEvent, the full file path will be substituted as the trigger arg value.
  
  


.. _api_msg_flyteidl.event.EventTargetListRequest:

flyteidl.event.EventTargetListRequest
-------------------------------------

`[flyteidl.event.EventTargetListRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor.proto#L93>`_

A request to fetch event targets registered for a specific event type.

.. code-block:: json

  {
    "event_type": "...",
    "limit": "...",
    "token": "..."
  }

.. _api_field_flyteidl.event.EventTargetListRequest.event_type:

event_type
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Indicates the event sensor type by unique name for which to fetch event targets.
  
  
.. _api_field_flyteidl.event.EventTargetListRequest.limit:

limit
  (`uint32 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Indicates the number of resources to be returned.
  
  
.. _api_field_flyteidl.event.EventTargetListRequest.token:

token
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) In the case of multiple pages of results, the server-provided token can be used to fetch the next page
  in a query.
  +optional
  
  


.. _api_msg_flyteidl.event.EventTargetList:

flyteidl.event.EventTargetList
------------------------------

`[flyteidl.event.EventTargetList proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor.proto#L106>`_


.. code-block:: json

  {
    "event_targets": [],
    "token": "..."
  }

.. _api_field_flyteidl.event.EventTargetList.event_targets:

event_targets
  (:ref:`flyteidl.event.EventTarget <api_msg_flyteidl.event.EventTarget>`) All event targets registered for an event type specified in an EventTargetListRequest.
  
  
.. _api_field_flyteidl.event.EventTargetList.token:

token
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) In the case of multiple pages of results, the server-provided token can be used to fetch the next page
  in a query. If there are no more results, this value will be empty.
  
  


.. _api_msg_flyteidl.event.EventOccurredRequest:

flyteidl.event.EventOccurredRequest
-----------------------------------

`[flyteidl.event.EventOccurredRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor.proto#L116>`_

Notifies a downstream consumer that an event has occurred.

.. code-block:: json

  {
    "execution_create_request": "{...}",
    "launch_plan": "{...}"
  }

.. _api_field_flyteidl.event.EventOccurredRequest.execution_create_request:

execution_create_request
  (:ref:`flyteidl.admin.ExecutionCreateRequest <api_msg_flyteidl.admin.ExecutionCreateRequest>`) Specifies a workflow execution to be created.
  
  
  
.. _api_field_flyteidl.event.EventOccurredRequest.launch_plan:

launch_plan
  (:ref:`flyteidl.core.Identifier <api_msg_flyteidl.core.Identifier>`) Specifies the launch plan reference that originally specified this event as a trigger.
  
  
  


.. _api_msg_flyteidl.event.EventOccurredResponse:

flyteidl.event.EventOccurredResponse
------------------------------------

`[flyteidl.event.EventOccurredResponse proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor.proto#L129>`_

Purposefully empty, may be populated in the future.

.. code-block:: json

  {}




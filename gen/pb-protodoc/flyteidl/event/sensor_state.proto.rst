.. _api_file_flyteidl/event/sensor_state.proto:

sensor_state.proto
=================================

.. _api_msg_flyteidl.event.EventSensorState:

flyteidl.event.EventSensorState
-------------------------------

`[flyteidl.event.EventSensorState proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor_state.proto#L10>`_

Defines custom state an event sensor of a specific type can durably persist.

.. code-block:: json

  {
    "uri": "...",
    "custom_info": "{...}"
  }

.. _api_field_flyteidl.event.EventSensorState.uri:

uri
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Optionally offloaded state
  
  
  
  Only one of :ref:`uri <api_field_flyteidl.event.EventSensorState.uri>`, :ref:`custom_info <api_field_flyteidl.event.EventSensorState.custom_info>` may be set.
  
.. _api_field_flyteidl.event.EventSensorState.custom_info:

custom_info
  (:ref:`google.protobuf.Struct <api_msg_google.protobuf.Struct>`) In-line custom state. This should be used when the saved state is small in size.
  
  
  
  Only one of :ref:`uri <api_field_flyteidl.event.EventSensorState.uri>`, :ref:`custom_info <api_field_flyteidl.event.EventSensorState.custom_info>` may be set.
  


.. _api_msg_flyteidl.event.EventSensorStateGetRequest:

flyteidl.event.EventSensorStateGetRequest
-----------------------------------------

`[flyteidl.event.EventSensorStateGetRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor_state.proto#L21>`_

A request to fetch saved state for a specific event type.

.. code-block:: json

  {
    "event_type": "..."
  }

.. _api_field_flyteidl.event.EventSensorStateGetRequest.event_type:

event_type
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Indicates the event sensor type by unique name for which to fetch event sensor state.
  
  


.. _api_msg_flyteidl.event.EventSensorStateGetResponse:

flyteidl.event.EventSensorStateGetResponse
------------------------------------------

`[flyteidl.event.EventSensorStateGetResponse proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor_state.proto#L27>`_

Saved state for a specific event sensor type.

.. code-block:: json

  {
    "state": "{...}",
    "updated_at": "{...}"
  }

.. _api_field_flyteidl.event.EventSensorStateGetResponse.state:

state
  (:ref:`flyteidl.event.EventSensorState <api_msg_flyteidl.event.EventSensorState>`) 
  
.. _api_field_flyteidl.event.EventSensorStateGetResponse.updated_at:

updated_at
  (:ref:`google.protobuf.Timestamp <api_msg_google.protobuf.Timestamp>`) Event sensor provided timestamp for when this state was last specified.
  
  


.. _api_msg_flyteidl.event.EventSensorStateUpdateRequest:

flyteidl.event.EventSensorStateUpdateRequest
--------------------------------------------

`[flyteidl.event.EventSensorStateUpdateRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor_state.proto#L35>`_

Updates saved state for a specific event sensor type.

.. code-block:: json

  {
    "event_type": "...",
    "state": "{...}",
    "updated_at": "{...}"
  }

.. _api_field_flyteidl.event.EventSensorStateUpdateRequest.event_type:

event_type
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Indicates the event sensor type by unique name for which to fetch event sensor state.
  
  
.. _api_field_flyteidl.event.EventSensorStateUpdateRequest.state:

state
  (:ref:`flyteidl.event.EventSensorState <api_msg_flyteidl.event.EventSensorState>`) 
  
.. _api_field_flyteidl.event.EventSensorStateUpdateRequest.updated_at:

updated_at
  (:ref:`google.protobuf.Timestamp <api_msg_google.protobuf.Timestamp>`) Event sensor provided timestamp for when this state was last specified.
  
  


.. _api_msg_flyteidl.event.EventSensorStateUpdateResponse:

flyteidl.event.EventSensorStateUpdateResponse
---------------------------------------------

`[flyteidl.event.EventSensorStateUpdateResponse proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/event/sensor_state.proto#L46>`_

Purposefully empty, may be populated in the future.

.. code-block:: json

  {}




.. _api_file_flyteidl/admin/audit.proto:

audit.proto
==========================

.. _api_msg_flyteidl.admin.AuditLog:

flyteidl.admin.AuditLog
-----------------------

`[flyteidl.admin.AuditLog proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/audit.proto#L9>`_

Audit log that is emitted on each user request.

.. code-block:: json

  {
    "principal": "{...}",
    "client_ip": "...",
    "client_id": "...",
    "request": "{...}",
    "response": "{...}"
  }

.. _api_field_flyteidl.admin.AuditLog.principal:

principal
  (:ref:`flyteidl.admin.Principal <api_msg_flyteidl.admin.Principal>`) 
  
.. _api_field_flyteidl.admin.AuditLog.client_ip:

client_ip
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.admin.AuditLog.client_id:

client_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The client that initiated the auth flow.
  
  
.. _api_field_flyteidl.admin.AuditLog.request:

request
  (:ref:`flyteidl.admin.Request <api_msg_flyteidl.admin.Request>`) 
  
.. _api_field_flyteidl.admin.AuditLog.response:

response
  (:ref:`flyteidl.admin.Response <api_msg_flyteidl.admin.Response>`) 
  


.. _api_msg_flyteidl.admin.Principal:

flyteidl.admin.Principal
------------------------

`[flyteidl.admin.Principal proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/audit.proto#L23>`_

Details about the authenticated user who issued a service request.

.. code-block:: json

  {
    "subject": "...",
    "token_issued_at": "{...}"
  }

.. _api_field_flyteidl.admin.Principal.subject:

subject
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Identifies authenticated end-user
  
  
.. _api_field_flyteidl.admin.Principal.token_issued_at:

token_issued_at
  (:ref:`google.protobuf.Timestamp <api_msg_google.protobuf.Timestamp>`) 
  


.. _api_msg_flyteidl.admin.Request:

flyteidl.admin.Request
----------------------

`[flyteidl.admin.Request proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/audit.proto#L31>`_

Details about a specific request issued by a user.

.. code-block:: json

  {
    "method": "...",
    "http_verb": "...",
    "parameters": "{...}",
    "mode": "...",
    "received_at": "{...}"
  }

.. _api_field_flyteidl.admin.Request.method:

method
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Service method endpoint e.g. GetWorkflowExecution
  
  
.. _api_field_flyteidl.admin.Request.http_verb:

http_verb
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) In the case of HTTP service calls.
  
  
.. _api_field_flyteidl.admin.Request.parameters:

parameters
  (map<`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_, `string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_>) Includes parameters submitted in the request.
  
  
.. _api_field_flyteidl.admin.Request.mode:

mode
  (:ref:`flyteidl.admin.Request.Mode <api_enum_flyteidl.admin.Request.Mode>`) 
  
.. _api_field_flyteidl.admin.Request.received_at:

received_at
  (:ref:`google.protobuf.Timestamp <api_msg_google.protobuf.Timestamp>`) 
  

.. _api_enum_flyteidl.admin.Request.Mode:

Enum flyteidl.admin.Request.Mode
--------------------------------

`[flyteidl.admin.Request.Mode proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/audit.proto#L41>`_


.. _api_enum_value_flyteidl.admin.Request.Mode.READ_ONLY:

READ_ONLY
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.admin.Request.Mode.READ_WRITE:

READ_WRITE
  ⁣
  

.. _api_msg_flyteidl.admin.Response:

flyteidl.admin.Response
-----------------------

`[flyteidl.admin.Response proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/audit.proto#L51>`_

Summary of service response details.

.. code-block:: json

  {
    "response_code": "...",
    "sent_at": "{...}"
  }

.. _api_field_flyteidl.admin.Response.response_code:

response_code
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) e.g. gRPC status code
  
  
.. _api_field_flyteidl.admin.Response.sent_at:

sent_at
  (:ref:`google.protobuf.Timestamp <api_msg_google.protobuf.Timestamp>`) 
  


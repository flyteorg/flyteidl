.. _api_file_flyteidl/admin/project_attributes.proto:

project_attributes.proto
=======================================

.. _api_msg_flyteidl.admin.ProjectAttributes:

flyteidl.admin.ProjectAttributes
--------------------------------

`[flyteidl.admin.ProjectAttributes proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/project_attributes.proto#L6>`_


.. code-block:: json

  {
    "project": "...",
    "attributes": "{...}",
    "tags": []
  }

.. _api_field_flyteidl.admin.ProjectAttributes.project:

project
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Unique project id for which this set of attributes will be applied.
  
  
.. _api_field_flyteidl.admin.ProjectAttributes.attributes:

attributes
  (map<`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_, `string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_>) Custom resource attributes which will be applied in cluster resource creation (e.g. quotas).
  Map keys are the *case-sensitive* names of variables in templatized resource files.
  Map values should be the custom values which get substituted during resource creation.
  
  
.. _api_field_flyteidl.admin.ProjectAttributes.tags:

tags
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Tags used for assigning execution queues for tasks defined within this project.
  
  


.. _api_msg_flyteidl.admin.ProjectAttributesUpdateRequest:

flyteidl.admin.ProjectAttributesUpdateRequest
---------------------------------------------

`[flyteidl.admin.ProjectAttributesUpdateRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/project_attributes.proto#L20>`_

Sets custom attributes for a project combination.

.. code-block:: json

  {
    "attributes": "{...}"
  }

.. _api_field_flyteidl.admin.ProjectAttributesUpdateRequest.attributes:

attributes
  (:ref:`flyteidl.admin.ProjectAttributes <api_msg_flyteidl.admin.ProjectAttributes>`) 
  


.. _api_msg_flyteidl.admin.ProjectAttributesUpdateResponse:

flyteidl.admin.ProjectAttributesUpdateResponse
----------------------------------------------

`[flyteidl.admin.ProjectAttributesUpdateResponse proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/project_attributes.proto#L25>`_

Purposefully empty, may be populated in the future.

.. code-block:: json

  {}




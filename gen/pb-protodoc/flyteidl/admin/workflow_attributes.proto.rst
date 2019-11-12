.. _api_file_flyteidl/admin/workflow_attributes.proto:

workflow_attributes.proto
========================================

.. _api_msg_flyteidl.admin.WorkflowAttributes:

flyteidl.admin.WorkflowAttributes
---------------------------------

`[flyteidl.admin.WorkflowAttributes proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/workflow_attributes.proto#L7>`_


.. code-block:: json

  {
    "project": "...",
    "domain": "...",
    "workflow": "...",
    "attributes": "{...}",
    "task_resource_attributes": "{...}",
    "tags": []
  }

.. _api_field_flyteidl.admin.WorkflowAttributes.project:

project
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Unique project id for which this set of attributes will be applied.
  
  
.. _api_field_flyteidl.admin.WorkflowAttributes.domain:

domain
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Unique domain id for which this set of attributes will be applied.
  
  
.. _api_field_flyteidl.admin.WorkflowAttributes.workflow:

workflow
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Workflow name for which this set of attributes will be applied.
  
  
.. _api_field_flyteidl.admin.WorkflowAttributes.attributes:

attributes
  (map<`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_, `string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_>) Custom resource attributes which will be applied in cluster resource creation (e.g. quotas).
  Map keys are the *case-sensitive* names of variables in templatized resource files.
  Map values should be the custom values which get substituted during resource creation.
  
  
.. _api_field_flyteidl.admin.WorkflowAttributes.task_resource_attributes:

task_resource_attributes
  (:ref:`flyteidl.core.Resources <api_msg_flyteidl.core.Resources>`) Custom resource defaults for task container resource requests and limits for tasks defined
  within this project, domain and workflow.
  
  
.. _api_field_flyteidl.admin.WorkflowAttributes.tags:

tags
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Tags used for assigning execution queues for tasks defined within this project, domain and workflow.
  
  


.. _api_msg_flyteidl.admin.WorkflowAttributesUpdateRequest:

flyteidl.admin.WorkflowAttributesUpdateRequest
----------------------------------------------

`[flyteidl.admin.WorkflowAttributesUpdateRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/workflow_attributes.proto#L31>`_

Sets custom attributes for a project, domain and workflow combination.

.. code-block:: json

  {
    "attributes": "{...}"
  }

.. _api_field_flyteidl.admin.WorkflowAttributesUpdateRequest.attributes:

attributes
  (:ref:`flyteidl.admin.WorkflowAttributes <api_msg_flyteidl.admin.WorkflowAttributes>`) 
  


.. _api_msg_flyteidl.admin.WorkflowAttributesUpdateResponse:

flyteidl.admin.WorkflowAttributesUpdateResponse
-----------------------------------------------

`[flyteidl.admin.WorkflowAttributesUpdateResponse proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/workflow_attributes.proto#L36>`_

Purposefully empty, may be populated in the future.

.. code-block:: json

  {}




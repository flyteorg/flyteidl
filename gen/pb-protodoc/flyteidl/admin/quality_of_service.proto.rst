.. _api_file_flyteidl/admin/quality_of_service.proto:

quality_of_service.proto
=======================================

.. _api_msg_flyteidl.admin.QualityOfServiceSpec:

flyteidl.admin.QualityOfServiceSpec
-----------------------------------

`[flyteidl.admin.QualityOfServiceSpec proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/quality_of_service.proto#L6>`_


.. code-block:: json

  {
    "queueing_budget_mins": "..."
  }

.. _api_field_flyteidl.admin.QualityOfServiceSpec.queueing_budget_mins:

queueing_budget_mins
  (`uint32 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Indicates how much queueing delay an execution can tolerate.
  
  


.. _api_msg_flyteidl.admin.QualityOfService:

flyteidl.admin.QualityOfService
-------------------------------

`[flyteidl.admin.QualityOfService proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/quality_of_service.proto#L13>`_


.. code-block:: json

  {
    "tier": "...",
    "spec": "{...}"
  }

.. _api_field_flyteidl.admin.QualityOfService.tier:

tier
  (:ref:`flyteidl.admin.QualityOfService.Tier <api_enum_flyteidl.admin.QualityOfService.Tier>`) 
  
  
  Only one of :ref:`tier <api_field_flyteidl.admin.QualityOfService.tier>`, :ref:`spec <api_field_flyteidl.admin.QualityOfService.spec>` may be set.
  
.. _api_field_flyteidl.admin.QualityOfService.spec:

spec
  (:ref:`flyteidl.admin.QualityOfServiceSpec <api_msg_flyteidl.admin.QualityOfServiceSpec>`) 
  
  
  Only one of :ref:`tier <api_field_flyteidl.admin.QualityOfService.tier>`, :ref:`spec <api_field_flyteidl.admin.QualityOfService.spec>` may be set.
  

.. _api_enum_flyteidl.admin.QualityOfService.Tier:

Enum flyteidl.admin.QualityOfService.Tier
-----------------------------------------

`[flyteidl.admin.QualityOfService.Tier proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/admin/quality_of_service.proto#L14>`_


.. _api_enum_value_flyteidl.admin.QualityOfService.Tier.UNDEFINED:

UNDEFINED
  *(DEFAULT)* ⁣Default: no quality of service specified.
  
  
.. _api_enum_value_flyteidl.admin.QualityOfService.Tier.HIGH:

HIGH
  ⁣
  
.. _api_enum_value_flyteidl.admin.QualityOfService.Tier.MEDIUM:

MEDIUM
  ⁣
  
.. _api_enum_value_flyteidl.admin.QualityOfService.Tier.LOW:

LOW
  ⁣
  

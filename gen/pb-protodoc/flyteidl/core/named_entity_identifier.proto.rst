.. _api_file_flyteidl/core/named_entity_identifier.proto:

named_entity_identifier.proto
===========================================

.. _api_msg_flyteidl.core.NamedEntityIdentifier:

flyteidl.core.NamedEntityIdentifier
-----------------------------------

`[flyteidl.core.NamedEntityIdentifier proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/named_entity_identifier.proto#L9>`_

Encapsulation of fields that uniquely identifies a versioned Flyte resource.

.. code-block:: json

  {
    "resource_type": "...",
    "project": "...",
    "domain": "...",
    "name": "..."
  }

.. _api_field_flyteidl.core.NamedEntityIdentifier.resource_type:

resource_type
  (:ref:`flyteidl.core.ResourceType <api_enum_flyteidl.core.ResourceType>`) Identifies the specific type of resource that this identifer corresponds to.
  
  
.. _api_field_flyteidl.core.NamedEntityIdentifier.project:

project
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Name of the project the resource belongs to.
  
  
.. _api_field_flyteidl.core.NamedEntityIdentifier.domain:

domain
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Name of the domain the resource belongs to.
  A domain can be considered as a subset within a specific project.
  
  
.. _api_field_flyteidl.core.NamedEntityIdentifier.name:

name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) User provided value for the resource.
  
  


.. _api_file_flyteidl/plugins/raw_container.proto:

raw_container.proto
====================================

.. _api_msg_flyteidl.plugins.CoPilot:

flyteidl.plugins.CoPilot
------------------------

`[flyteidl.plugins.CoPilot proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/raw_container.proto#L9>`_

This configuration allows executing raw containers in Flyte.
We are starting this as a plugin, but after the container within Pod ordering stabilizes, we can move this
into the default task definition.

.. code-block:: json

  {
    "input_path": "...",
    "output_path": "...",
    "format": "..."
  }

.. _api_field_flyteidl.plugins.CoPilot.input_path:

input_path
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.CoPilot.output_path:

output_path
  (`uint32 <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.plugins.CoPilot.format:

format
  (:ref:`flyteidl.plugins.CoPilot.MetadataFormat <api_enum_flyteidl.plugins.CoPilot.MetadataFormat>`) 
  

.. _api_enum_flyteidl.plugins.CoPilot.MetadataFormat:

Enum flyteidl.plugins.CoPilot.MetadataFormat
--------------------------------------------

`[flyteidl.plugins.CoPilot.MetadataFormat proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/plugins/raw_container.proto#L10>`_


.. _api_enum_value_flyteidl.plugins.CoPilot.MetadataFormat.JSON:

JSON
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.plugins.CoPilot.MetadataFormat.PROTO:

PROTO
  ⁣
  
.. _api_enum_value_flyteidl.plugins.CoPilot.MetadataFormat.YAML:

YAML
  ⁣
  

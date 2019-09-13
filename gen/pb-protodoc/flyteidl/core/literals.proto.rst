.. _api_file_flyteidl/core/literals.proto:

literals.proto
============================

.. _api_msg_flyteidl.core.Void:

flyteidl.core.Void
------------------

`[flyteidl.core.Void proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L17>`_

Used to denote a nil/null/None assignment to a scalar value. The underlying LiteralType for Void is intentionally
undefined since it can be assigned to a scalar of any LiteralType.

.. code-block:: json

  {}




.. _api_msg_flyteidl.core.Blob:

flyteidl.core.Blob
------------------

`[flyteidl.core.Blob proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L22>`_

Refers to an offloaded set of files. It encapsulates the type of the store and a unique uri for where the data is.
There are no restrictions on how the uri is formatted since it will depend on how to interact with the store.

.. code-block:: json

  {
    "metadata": "{...}",
    "uri": "..."
  }

.. _api_field_flyteidl.core.Blob.metadata:

metadata
  (:ref:`flyteidl.core.BlobMetadata <api_msg_flyteidl.core.BlobMetadata>`) 
  
.. _api_field_flyteidl.core.Blob.uri:

uri
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyteidl.core.BlobMetadata:

flyteidl.core.BlobMetadata
--------------------------

`[flyteidl.core.BlobMetadata proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L27>`_


.. code-block:: json

  {
    "type": "{...}"
  }

.. _api_field_flyteidl.core.BlobMetadata.type:

type
  (:ref:`flyteidl.core.BlobType <api_msg_flyteidl.core.BlobType>`) 
  


.. _api_msg_flyteidl.core.Binary:

flyteidl.core.Binary
--------------------

`[flyteidl.core.Binary proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L33>`_

A simple byte array with a tag to help different parts of the system communicate about what is in the byte array.
It's strongly advisable that consumers of this type define a unique tag and validate the tag before parsing the data.

.. code-block:: json

  {
    "value": "...",
    "tag": "..."
  }

.. _api_field_flyteidl.core.Binary.value:

value
  (`bytes <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.core.Binary.tag:

tag
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  


.. _api_msg_flyteidl.core.Schema:

flyteidl.core.Schema
--------------------

`[flyteidl.core.Schema proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L39>`_

A strongly typed schema that defines the interface of data retrieved from the underlying storage medium.

.. code-block:: json

  {
    "uri": "...",
    "type": "{...}"
  }

.. _api_field_flyteidl.core.Schema.uri:

uri
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) 
  
.. _api_field_flyteidl.core.Schema.type:

type
  (:ref:`flyteidl.core.SchemaType <api_msg_flyteidl.core.SchemaType>`) 
  


.. _api_msg_flyteidl.core.Scalar:

flyteidl.core.Scalar
--------------------

`[flyteidl.core.Scalar proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L44>`_


.. code-block:: json

  {
    "primitive": "{...}",
    "blob": "{...}",
    "binary": "{...}",
    "schema": "{...}",
    "none_type": "{...}",
    "error": "{...}",
    "generic": "{...}",
    "closure": "{...}"
  }

.. _api_field_flyteidl.core.Scalar.primitive:

primitive
  (:ref:`flyteidl.core.Primitive <api_msg_flyteidl.core.Primitive>`) 
  
  
  Only one of :ref:`primitive <api_field_flyteidl.core.Scalar.primitive>`, :ref:`blob <api_field_flyteidl.core.Scalar.blob>`, :ref:`binary <api_field_flyteidl.core.Scalar.binary>`, :ref:`schema <api_field_flyteidl.core.Scalar.schema>`, :ref:`none_type <api_field_flyteidl.core.Scalar.none_type>`, :ref:`error <api_field_flyteidl.core.Scalar.error>`, :ref:`generic <api_field_flyteidl.core.Scalar.generic>`, :ref:`closure <api_field_flyteidl.core.Scalar.closure>` may be set.
  
.. _api_field_flyteidl.core.Scalar.blob:

blob
  (:ref:`flyteidl.core.Blob <api_msg_flyteidl.core.Blob>`) 
  
  
  Only one of :ref:`primitive <api_field_flyteidl.core.Scalar.primitive>`, :ref:`blob <api_field_flyteidl.core.Scalar.blob>`, :ref:`binary <api_field_flyteidl.core.Scalar.binary>`, :ref:`schema <api_field_flyteidl.core.Scalar.schema>`, :ref:`none_type <api_field_flyteidl.core.Scalar.none_type>`, :ref:`error <api_field_flyteidl.core.Scalar.error>`, :ref:`generic <api_field_flyteidl.core.Scalar.generic>`, :ref:`closure <api_field_flyteidl.core.Scalar.closure>` may be set.
  
.. _api_field_flyteidl.core.Scalar.binary:

binary
  (:ref:`flyteidl.core.Binary <api_msg_flyteidl.core.Binary>`) 
  
  
  Only one of :ref:`primitive <api_field_flyteidl.core.Scalar.primitive>`, :ref:`blob <api_field_flyteidl.core.Scalar.blob>`, :ref:`binary <api_field_flyteidl.core.Scalar.binary>`, :ref:`schema <api_field_flyteidl.core.Scalar.schema>`, :ref:`none_type <api_field_flyteidl.core.Scalar.none_type>`, :ref:`error <api_field_flyteidl.core.Scalar.error>`, :ref:`generic <api_field_flyteidl.core.Scalar.generic>`, :ref:`closure <api_field_flyteidl.core.Scalar.closure>` may be set.
  
.. _api_field_flyteidl.core.Scalar.schema:

schema
  (:ref:`flyteidl.core.Schema <api_msg_flyteidl.core.Schema>`) 
  
  
  Only one of :ref:`primitive <api_field_flyteidl.core.Scalar.primitive>`, :ref:`blob <api_field_flyteidl.core.Scalar.blob>`, :ref:`binary <api_field_flyteidl.core.Scalar.binary>`, :ref:`schema <api_field_flyteidl.core.Scalar.schema>`, :ref:`none_type <api_field_flyteidl.core.Scalar.none_type>`, :ref:`error <api_field_flyteidl.core.Scalar.error>`, :ref:`generic <api_field_flyteidl.core.Scalar.generic>`, :ref:`closure <api_field_flyteidl.core.Scalar.closure>` may be set.
  
.. _api_field_flyteidl.core.Scalar.none_type:

none_type
  (:ref:`flyteidl.core.Void <api_msg_flyteidl.core.Void>`) 
  
  
  Only one of :ref:`primitive <api_field_flyteidl.core.Scalar.primitive>`, :ref:`blob <api_field_flyteidl.core.Scalar.blob>`, :ref:`binary <api_field_flyteidl.core.Scalar.binary>`, :ref:`schema <api_field_flyteidl.core.Scalar.schema>`, :ref:`none_type <api_field_flyteidl.core.Scalar.none_type>`, :ref:`error <api_field_flyteidl.core.Scalar.error>`, :ref:`generic <api_field_flyteidl.core.Scalar.generic>`, :ref:`closure <api_field_flyteidl.core.Scalar.closure>` may be set.
  
.. _api_field_flyteidl.core.Scalar.error:

error
  (:ref:`flyteidl.core.Error <api_msg_flyteidl.core.Error>`) 
  
  
  Only one of :ref:`primitive <api_field_flyteidl.core.Scalar.primitive>`, :ref:`blob <api_field_flyteidl.core.Scalar.blob>`, :ref:`binary <api_field_flyteidl.core.Scalar.binary>`, :ref:`schema <api_field_flyteidl.core.Scalar.schema>`, :ref:`none_type <api_field_flyteidl.core.Scalar.none_type>`, :ref:`error <api_field_flyteidl.core.Scalar.error>`, :ref:`generic <api_field_flyteidl.core.Scalar.generic>`, :ref:`closure <api_field_flyteidl.core.Scalar.closure>` may be set.
  
.. _api_field_flyteidl.core.Scalar.generic:

generic
  (:ref:`google.protobuf.Struct <api_msg_google.protobuf.Struct>`) 
  
  
  Only one of :ref:`primitive <api_field_flyteidl.core.Scalar.primitive>`, :ref:`blob <api_field_flyteidl.core.Scalar.blob>`, :ref:`binary <api_field_flyteidl.core.Scalar.binary>`, :ref:`schema <api_field_flyteidl.core.Scalar.schema>`, :ref:`none_type <api_field_flyteidl.core.Scalar.none_type>`, :ref:`error <api_field_flyteidl.core.Scalar.error>`, :ref:`generic <api_field_flyteidl.core.Scalar.generic>`, :ref:`closure <api_field_flyteidl.core.Scalar.closure>` may be set.
  
.. _api_field_flyteidl.core.Scalar.closure:

closure
  (:ref:`flyteidl.core.Closure <api_msg_flyteidl.core.Closure>`) 
  
  
  Only one of :ref:`primitive <api_field_flyteidl.core.Scalar.primitive>`, :ref:`blob <api_field_flyteidl.core.Scalar.blob>`, :ref:`binary <api_field_flyteidl.core.Scalar.binary>`, :ref:`schema <api_field_flyteidl.core.Scalar.schema>`, :ref:`none_type <api_field_flyteidl.core.Scalar.none_type>`, :ref:`error <api_field_flyteidl.core.Scalar.error>`, :ref:`generic <api_field_flyteidl.core.Scalar.generic>`, :ref:`closure <api_field_flyteidl.core.Scalar.closure>` may be set.
  


.. _api_msg_flyteidl.core.Closure:

flyteidl.core.Closure
---------------------

`[flyteidl.core.Closure proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L58>`_

Represents a node closure that contain all required information to execute.

.. code-block:: json

  {
    "node": "{...}",
    "tasks": [],
    "sub_workflows": []
  }

.. _api_field_flyteidl.core.Closure.node:

node
  (:ref:`flyteidl.core.Node <api_msg_flyteidl.core.Node>`) A node to execute. All inputs of the node must be statically bound in node input bindings. Dynamic bindings
  is not yet supported.
  
  
.. _api_field_flyteidl.core.Closure.tasks:

tasks
  (:ref:`flyteidl.core.TaskTemplate <api_msg_flyteidl.core.TaskTemplate>`) [Optional] List of task specs directly or indirectly referenced in node. This list will take precedence over
  other task specs found in the environment (e.g. in an enclosing workflow) when resolving task references.
  
  
.. _api_field_flyteidl.core.Closure.sub_workflows:

sub_workflows
  (:ref:`flyteidl.core.WorkflowTemplate <api_msg_flyteidl.core.WorkflowTemplate>`) [Optional] List of workflow specs directly or indirectly referenced in node. This list will take precedence over
  other workflow specs found in the environment (e.g. in an enclosing workflow) when resolving workflows references.
  
  


.. _api_msg_flyteidl.core.Literal:

flyteidl.core.Literal
---------------------

`[flyteidl.core.Literal proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L73>`_

A simple value. This supports any level of nesting (e.g. array of array of array of Blobs) as well as simple primitives.

.. code-block:: json

  {
    "scalar": "{...}",
    "collection": "{...}",
    "map": "{...}"
  }

.. _api_field_flyteidl.core.Literal.scalar:

scalar
  (:ref:`flyteidl.core.Scalar <api_msg_flyteidl.core.Scalar>`) A simple value.
  
  
  
  Only one of :ref:`scalar <api_field_flyteidl.core.Literal.scalar>`, :ref:`collection <api_field_flyteidl.core.Literal.collection>`, :ref:`map <api_field_flyteidl.core.Literal.map>` may be set.
  
.. _api_field_flyteidl.core.Literal.collection:

collection
  (:ref:`flyteidl.core.LiteralCollection <api_msg_flyteidl.core.LiteralCollection>`) A collection of literals to allow nesting.
  
  
  
  Only one of :ref:`scalar <api_field_flyteidl.core.Literal.scalar>`, :ref:`collection <api_field_flyteidl.core.Literal.collection>`, :ref:`map <api_field_flyteidl.core.Literal.map>` may be set.
  
.. _api_field_flyteidl.core.Literal.map:

map
  (:ref:`flyteidl.core.LiteralMap <api_msg_flyteidl.core.LiteralMap>`) A map of strings to literals.
  
  
  
  Only one of :ref:`scalar <api_field_flyteidl.core.Literal.scalar>`, :ref:`collection <api_field_flyteidl.core.Literal.collection>`, :ref:`map <api_field_flyteidl.core.Literal.map>` may be set.
  


.. _api_msg_flyteidl.core.LiteralCollection:

flyteidl.core.LiteralCollection
-------------------------------

`[flyteidl.core.LiteralCollection proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L87>`_

A collection of literals. This is a workaround since oneofs in proto messages cannot contain a repeated field.

.. code-block:: json

  {
    "literals": []
  }

.. _api_field_flyteidl.core.LiteralCollection.literals:

literals
  (:ref:`flyteidl.core.Literal <api_msg_flyteidl.core.Literal>`) 
  


.. _api_msg_flyteidl.core.LiteralMap:

flyteidl.core.LiteralMap
------------------------

`[flyteidl.core.LiteralMap proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L92>`_

A map of literals. This is a workaround since oneofs in proto messages cannot contain a repeated field.

.. code-block:: json

  {
    "literals": "{...}"
  }

.. _api_field_flyteidl.core.LiteralMap.literals:

literals
  (map<`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_, :ref:`flyteidl.core.Literal <api_msg_flyteidl.core.Literal>`>) 
  


.. _api_msg_flyteidl.core.BindingDataCollection:

flyteidl.core.BindingDataCollection
-----------------------------------

`[flyteidl.core.BindingDataCollection proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L97>`_

A collection of BindingData items.

.. code-block:: json

  {
    "bindings": []
  }

.. _api_field_flyteidl.core.BindingDataCollection.bindings:

bindings
  (:ref:`flyteidl.core.BindingData <api_msg_flyteidl.core.BindingData>`) 
  


.. _api_msg_flyteidl.core.BindingDataMap:

flyteidl.core.BindingDataMap
----------------------------

`[flyteidl.core.BindingDataMap proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L102>`_

A map of BindingData items.

.. code-block:: json

  {
    "bindings": "{...}"
  }

.. _api_field_flyteidl.core.BindingDataMap.bindings:

bindings
  (map<`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_, :ref:`flyteidl.core.BindingData <api_msg_flyteidl.core.BindingData>`>) 
  


.. _api_msg_flyteidl.core.BindingData:

flyteidl.core.BindingData
-------------------------

`[flyteidl.core.BindingData proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L107>`_

Specifies either a simple value or a reference to another output.

.. code-block:: json

  {
    "scalar": "{...}",
    "collection": "{...}",
    "promise": "{...}",
    "map": "{...}",
    "closure": "{...}"
  }

.. _api_field_flyteidl.core.BindingData.scalar:

scalar
  (:ref:`flyteidl.core.Scalar <api_msg_flyteidl.core.Scalar>`) A simple scalar value.
  
  
  
  Only one of :ref:`scalar <api_field_flyteidl.core.BindingData.scalar>`, :ref:`collection <api_field_flyteidl.core.BindingData.collection>`, :ref:`promise <api_field_flyteidl.core.BindingData.promise>`, :ref:`map <api_field_flyteidl.core.BindingData.map>`, :ref:`closure <api_field_flyteidl.core.BindingData.closure>` may be set.
  
.. _api_field_flyteidl.core.BindingData.collection:

collection
  (:ref:`flyteidl.core.BindingDataCollection <api_msg_flyteidl.core.BindingDataCollection>`) A collection of binding data. This allows nesting of binding data to any number
  of levels.
  
  
  
  Only one of :ref:`scalar <api_field_flyteidl.core.BindingData.scalar>`, :ref:`collection <api_field_flyteidl.core.BindingData.collection>`, :ref:`promise <api_field_flyteidl.core.BindingData.promise>`, :ref:`map <api_field_flyteidl.core.BindingData.map>`, :ref:`closure <api_field_flyteidl.core.BindingData.closure>` may be set.
  
.. _api_field_flyteidl.core.BindingData.promise:

promise
  (:ref:`flyteidl.core.OutputReference <api_msg_flyteidl.core.OutputReference>`) References an output promised by another node.
  
  
  
  Only one of :ref:`scalar <api_field_flyteidl.core.BindingData.scalar>`, :ref:`collection <api_field_flyteidl.core.BindingData.collection>`, :ref:`promise <api_field_flyteidl.core.BindingData.promise>`, :ref:`map <api_field_flyteidl.core.BindingData.map>`, :ref:`closure <api_field_flyteidl.core.BindingData.closure>` may be set.
  
.. _api_field_flyteidl.core.BindingData.map:

map
  (:ref:`flyteidl.core.BindingDataMap <api_msg_flyteidl.core.BindingDataMap>`) A map of bindings. The key is always a string.
  
  
  
  Only one of :ref:`scalar <api_field_flyteidl.core.BindingData.scalar>`, :ref:`collection <api_field_flyteidl.core.BindingData.collection>`, :ref:`promise <api_field_flyteidl.core.BindingData.promise>`, :ref:`map <api_field_flyteidl.core.BindingData.map>`, :ref:`closure <api_field_flyteidl.core.BindingData.closure>` may be set.
  
.. _api_field_flyteidl.core.BindingData.closure:

closure
  (:ref:`flyteidl.core.Closure <api_msg_flyteidl.core.Closure>`) 
  
  
  Only one of :ref:`scalar <api_field_flyteidl.core.BindingData.scalar>`, :ref:`collection <api_field_flyteidl.core.BindingData.collection>`, :ref:`promise <api_field_flyteidl.core.BindingData.promise>`, :ref:`map <api_field_flyteidl.core.BindingData.map>`, :ref:`closure <api_field_flyteidl.core.BindingData.closure>` may be set.
  


.. _api_msg_flyteidl.core.Binding:

flyteidl.core.Binding
---------------------

`[flyteidl.core.Binding proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L127>`_

An input/output binding of a variable to either static value or a node output.

.. code-block:: json

  {
    "var": "...",
    "binding": "{...}"
  }

.. _api_field_flyteidl.core.Binding.var:

var
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Variable name must match an input/output variable of the node.
  
  
.. _api_field_flyteidl.core.Binding.binding:

binding
  (:ref:`flyteidl.core.BindingData <api_msg_flyteidl.core.BindingData>`) Data to use to bind this variable.
  
  


.. _api_msg_flyteidl.core.IfBlock:

flyteidl.core.IfBlock
---------------------

`[flyteidl.core.IfBlock proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L136>`_

Defines a condition and the execution unit that should be executed if the condition is satisfied.

.. code-block:: json

  {
    "condition": "{...}",
    "then_node": "{...}"
  }

.. _api_field_flyteidl.core.IfBlock.condition:

condition
  (:ref:`flyteidl.core.BooleanExpression <api_msg_flyteidl.core.BooleanExpression>`) 
  
.. _api_field_flyteidl.core.IfBlock.then_node:

then_node
  (:ref:`flyteidl.core.Node <api_msg_flyteidl.core.Node>`) 
  


.. _api_msg_flyteidl.core.IfElseBlock:

flyteidl.core.IfElseBlock
-------------------------

`[flyteidl.core.IfElseBlock proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L143>`_

Defines a series of if/else blocks. The first branch whose condition evaluates to true is the one to execute.
If no conditions were satisfied, the else_node or the error will execute.

.. code-block:: json

  {
    "case": "{...}",
    "other": [],
    "else_node": "{...}",
    "error": "{...}"
  }

.. _api_field_flyteidl.core.IfElseBlock.case:

case
  (:ref:`flyteidl.core.IfBlock <api_msg_flyteidl.core.IfBlock>`) required. First condition to evaluate.
  
  
.. _api_field_flyteidl.core.IfElseBlock.other:

other
  (:ref:`flyteidl.core.IfBlock <api_msg_flyteidl.core.IfBlock>`) optional. Additional branches to evaluate.
  
  
.. _api_field_flyteidl.core.IfElseBlock.else_node:

else_node
  (:ref:`flyteidl.core.Node <api_msg_flyteidl.core.Node>`) The node to execute in case none of the branches were taken.
  
  required.
  
  
  Only one of :ref:`else_node <api_field_flyteidl.core.IfElseBlock.else_node>`, :ref:`error <api_field_flyteidl.core.IfElseBlock.error>` may be set.
  
.. _api_field_flyteidl.core.IfElseBlock.error:

error
  (:ref:`flyteidl.core.Error <api_msg_flyteidl.core.Error>`) An error to throw in case none of the branches were taken.
  
  required.
  
  
  Only one of :ref:`else_node <api_field_flyteidl.core.IfElseBlock.else_node>`, :ref:`error <api_field_flyteidl.core.IfElseBlock.error>` may be set.
  


.. _api_msg_flyteidl.core.BranchNode:

flyteidl.core.BranchNode
------------------------

`[flyteidl.core.BranchNode proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L162>`_

BranchNode is a special node that alter the flow of the workflow graph. It allows the control flow to branch at
runtime based on a series of conditions that get evaluated on various parameters (e.g. inputs, primtives).

.. code-block:: json

  {
    "if_else": "{...}"
  }

.. _api_field_flyteidl.core.BranchNode.if_else:

if_else
  (:ref:`flyteidl.core.IfElseBlock <api_msg_flyteidl.core.IfElseBlock>`) required
  
  


.. _api_msg_flyteidl.core.ClosureNode:

flyteidl.core.ClosureNode
-------------------------

`[flyteidl.core.ClosureNode proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L169>`_

A specialized node type that expects a Closure as an additional input called "input_closure". Other inputs bound
will be passed down to the closure if it expects any, otherwise additional inputs will be ignored.

.. code-block:: json

  {
    "closure_type": "{...}"
  }

.. _api_field_flyteidl.core.ClosureNode.closure_type:

closure_type
  (:ref:`flyteidl.core.ClosureType <api_msg_flyteidl.core.ClosureType>`) The closure type to expect to be bound to "input_closure" input for this node. ClosureType interface must be
  populated if inputs/outputs are expected to be passed to and consumed from, respectively, the executed closure.
  
  


.. _api_msg_flyteidl.core.TaskNode:

flyteidl.core.TaskNode
----------------------

`[flyteidl.core.TaskNode proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L176>`_

Refers to the task that the Node is to execute.

.. code-block:: json

  {
    "reference_id": "{...}"
  }

.. _api_field_flyteidl.core.TaskNode.reference_id:

reference_id
  (:ref:`flyteidl.core.Identifier <api_msg_flyteidl.core.Identifier>`) A globally unique identifier for the task.
  
  
  


.. _api_msg_flyteidl.core.WorkflowNode:

flyteidl.core.WorkflowNode
--------------------------

`[flyteidl.core.WorkflowNode proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L184>`_

Refers to a the workflow the node is to execute.

.. code-block:: json

  {
    "launchplan_ref": "{...}",
    "sub_workflow_ref": "{...}"
  }

.. _api_field_flyteidl.core.WorkflowNode.launchplan_ref:

launchplan_ref
  (:ref:`flyteidl.core.Identifier <api_msg_flyteidl.core.Identifier>`) A globally unique identifier for the launch plan.
  
  
  
  Only one of :ref:`launchplan_ref <api_field_flyteidl.core.WorkflowNode.launchplan_ref>`, :ref:`sub_workflow_ref <api_field_flyteidl.core.WorkflowNode.sub_workflow_ref>` may be set.
  
.. _api_field_flyteidl.core.WorkflowNode.sub_workflow_ref:

sub_workflow_ref
  (:ref:`flyteidl.core.Identifier <api_msg_flyteidl.core.Identifier>`) Reference to a subworkflow, that should be defined with the compiler context
  
  
  
  Only one of :ref:`launchplan_ref <api_field_flyteidl.core.WorkflowNode.launchplan_ref>`, :ref:`sub_workflow_ref <api_field_flyteidl.core.WorkflowNode.sub_workflow_ref>` may be set.
  


.. _api_msg_flyteidl.core.NodeMetadata:

flyteidl.core.NodeMetadata
--------------------------

`[flyteidl.core.NodeMetadata proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L195>`_

Defines extra information about the Node.

.. code-block:: json

  {
    "name": "...",
    "timeout": "{...}",
    "retries": "{...}"
  }

.. _api_field_flyteidl.core.NodeMetadata.name:

name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) A friendly name for the Node
  
  
.. _api_field_flyteidl.core.NodeMetadata.timeout:

timeout
  (:ref:`google.protobuf.Duration <api_msg_google.protobuf.Duration>`) The overall timeout of a task.
  
  
.. _api_field_flyteidl.core.NodeMetadata.retries:

retries
  (:ref:`flyteidl.core.RetryStrategy <api_msg_flyteidl.core.RetryStrategy>`) Number of retries per task.
  
  


.. _api_msg_flyteidl.core.Alias:

flyteidl.core.Alias
-------------------

`[flyteidl.core.Alias proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L207>`_

Links a variable to an alias.

.. code-block:: json

  {
    "var": "...",
    "alias": "..."
  }

.. _api_field_flyteidl.core.Alias.var:

var
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Must match one of the output variable names on a node.
  
  
.. _api_field_flyteidl.core.Alias.alias:

alias
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) A workflow-level unique alias that downstream nodes can refer to in their input.
  
  


.. _api_msg_flyteidl.core.Node:

flyteidl.core.Node
------------------

`[flyteidl.core.Node proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L217>`_

A Workflow graph Node. One unit of execution in the graph. Each node can be linked to a Task, a Workflow or a branch
node.

.. code-block:: json

  {
    "id": "...",
    "metadata": "{...}",
    "inputs": [],
    "upstream_node_ids": [],
    "output_aliases": [],
    "task_node": "{...}",
    "workflow_node": "{...}",
    "branch_node": "{...}",
    "closure_node": "{...}"
  }

.. _api_field_flyteidl.core.Node.id:

id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) A workflow-level unique identifier that identifies this node in the workflow. "inputs" and "outputs" are reserved
  node ids that cannot be used by other nodes.
  
  
.. _api_field_flyteidl.core.Node.metadata:

metadata
  (:ref:`flyteidl.core.NodeMetadata <api_msg_flyteidl.core.NodeMetadata>`) Extra metadata about the node.
  
  
.. _api_field_flyteidl.core.Node.inputs:

inputs
  (:ref:`flyteidl.core.Binding <api_msg_flyteidl.core.Binding>`) Specifies how to bind the underlying interface's inputs. All required inputs specified in the underlying interface
  must be fullfilled.
  
  
.. _api_field_flyteidl.core.Node.upstream_node_ids:

upstream_node_ids
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) optional Specifies execution depdendency for this node ensuring it will only get scheduled to run after all its
  upstream nodes have completed. This node will have an implicit depdendency on any node that appears in inputs
  field.
  
  
.. _api_field_flyteidl.core.Node.output_aliases:

output_aliases
  (:ref:`flyteidl.core.Alias <api_msg_flyteidl.core.Alias>`) optional. A node can define aliases for a subset of its outputs. This is particularly useful if different nodes
  need to conform to the same interface (e.g. all branches in a branch node). Downstream nodes must refer to this
  nodes outputs using the alias if one's specified.
  
  
.. _api_field_flyteidl.core.Node.task_node:

task_node
  (:ref:`flyteidl.core.TaskNode <api_msg_flyteidl.core.TaskNode>`) Information about the Task to execute in this node.
  
  Information about the target to execute in this node.
  
  
  Only one of :ref:`task_node <api_field_flyteidl.core.Node.task_node>`, :ref:`workflow_node <api_field_flyteidl.core.Node.workflow_node>`, :ref:`branch_node <api_field_flyteidl.core.Node.branch_node>`, :ref:`closure_node <api_field_flyteidl.core.Node.closure_node>` may be set.
  
.. _api_field_flyteidl.core.Node.workflow_node:

workflow_node
  (:ref:`flyteidl.core.WorkflowNode <api_msg_flyteidl.core.WorkflowNode>`) Information about the Workflow to execute in this mode.
  
  Information about the target to execute in this node.
  
  
  Only one of :ref:`task_node <api_field_flyteidl.core.Node.task_node>`, :ref:`workflow_node <api_field_flyteidl.core.Node.workflow_node>`, :ref:`branch_node <api_field_flyteidl.core.Node.branch_node>`, :ref:`closure_node <api_field_flyteidl.core.Node.closure_node>` may be set.
  
.. _api_field_flyteidl.core.Node.branch_node:

branch_node
  (:ref:`flyteidl.core.BranchNode <api_msg_flyteidl.core.BranchNode>`) Information about the branch node to evaluate in this node.
  
  Information about the target to execute in this node.
  
  
  Only one of :ref:`task_node <api_field_flyteidl.core.Node.task_node>`, :ref:`workflow_node <api_field_flyteidl.core.Node.workflow_node>`, :ref:`branch_node <api_field_flyteidl.core.Node.branch_node>`, :ref:`closure_node <api_field_flyteidl.core.Node.closure_node>` may be set.
  
.. _api_field_flyteidl.core.Node.closure_node:

closure_node
  (:ref:`flyteidl.core.ClosureNode <api_msg_flyteidl.core.ClosureNode>`) 
  Information about the target to execute in this node.
  
  
  Only one of :ref:`task_node <api_field_flyteidl.core.Node.task_node>`, :ref:`workflow_node <api_field_flyteidl.core.Node.workflow_node>`, :ref:`branch_node <api_field_flyteidl.core.Node.branch_node>`, :ref:`closure_node <api_field_flyteidl.core.Node.closure_node>` may be set.
  


.. _api_msg_flyteidl.core.WorkflowMetadata:

flyteidl.core.WorkflowMetadata
------------------------------

`[flyteidl.core.WorkflowMetadata proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L256>`_

Metadata for the entire workflow.
To be used in the future.

.. code-block:: json

  {}




.. _api_msg_flyteidl.core.WorkflowTemplate:

flyteidl.core.WorkflowTemplate
------------------------------

`[flyteidl.core.WorkflowTemplate proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/literals.proto#L261>`_

Flyte Workflow Structure that encapsulates task, branch and subworkflow nodes to form a statically analyzable,
directed acyclic graph.

.. code-block:: json

  {
    "id": "{...}",
    "metadata": "{...}",
    "interface": "{...}",
    "nodes": [],
    "outputs": [],
    "failure_node": "{...}"
  }

.. _api_field_flyteidl.core.WorkflowTemplate.id:

id
  (:ref:`flyteidl.core.Identifier <api_msg_flyteidl.core.Identifier>`) This is an autogenerated id by the system. The id is globally unique across the system.
  
  
.. _api_field_flyteidl.core.WorkflowTemplate.metadata:

metadata
  (:ref:`flyteidl.core.WorkflowMetadata <api_msg_flyteidl.core.WorkflowMetadata>`) Extra metadata about the workflow.
  
  
.. _api_field_flyteidl.core.WorkflowTemplate.interface:

interface
  (:ref:`flyteidl.core.TypedInterface <api_msg_flyteidl.core.TypedInterface>`) Defines a strongly typed interface for the Workflow. This can include some optional parameters.
  
  
.. _api_field_flyteidl.core.WorkflowTemplate.nodes:

nodes
  (:ref:`flyteidl.core.Node <api_msg_flyteidl.core.Node>`) A list of nodes. In addition, "globals" is a special reserved node id that can be used to consume workflow inputs.
  
  
.. _api_field_flyteidl.core.WorkflowTemplate.outputs:

outputs
  (:ref:`flyteidl.core.Binding <api_msg_flyteidl.core.Binding>`) A list of output bindings that specify how to construct workflow outputs. Bindings can pull node outputs or
  specify literals. All workflow outputs specified in the interface field must be bound in order for the workflow
  to be validated. A workflow has an implicit dependency on all of its nodes to execute successfully in order to
  bind final outputs.
  Most of these outputs will be Binding's with a BindingData of type OutputReference.  That is, your workflow can
  just have an output of some constant (`Output(5)`), but usually, the workflow will be pulling
  outputs from the output of a task.
  
  
.. _api_field_flyteidl.core.WorkflowTemplate.failure_node:

failure_node
  (:ref:`flyteidl.core.Node <api_msg_flyteidl.core.Node>`) optional A catch-all node. This node is executed whenever the execution engine determines the workflow has failed.
  The interface of this node must match the Workflow interface with an additional input named "error" of type
  pb.lyft.flyte.core.Error.
  
  


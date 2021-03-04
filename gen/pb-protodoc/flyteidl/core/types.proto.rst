.. _api_file_flyteidl/core/types.proto:

types.proto
=========================

.. _api_msg_flyteidl.core.SchemaType:

flyteidl.core.SchemaType
------------------------

`[flyteidl.core.SchemaType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L23>`_

Defines schema columns and types to strongly type-validate schemas interoperability.

.. code-block:: json

  {
    "columns": []
  }

.. _api_field_flyteidl.core.SchemaType.columns:

columns
  (:ref:`flyteidl.core.SchemaType.SchemaColumn <api_msg_flyteidl.core.SchemaType.SchemaColumn>`) A list of ordered columns this schema comprises of.
  
  
.. _api_msg_flyteidl.core.SchemaType.SchemaColumn:

flyteidl.core.SchemaType.SchemaColumn
-------------------------------------

`[flyteidl.core.SchemaType.SchemaColumn proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L24>`_


.. code-block:: json

  {
    "name": "...",
    "type": "..."
  }

.. _api_field_flyteidl.core.SchemaType.SchemaColumn.name:

name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) A unique name -within the schema type- for the column
  
  
.. _api_field_flyteidl.core.SchemaType.SchemaColumn.type:

type
  (:ref:`flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType <api_enum_flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType>`) The column type. This allows a limited set of types currently.
  
  

.. _api_enum_flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType:

Enum flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType
-----------------------------------------------------------

`[flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L28>`_


.. _api_enum_value_flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType.INTEGER:

INTEGER
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType.FLOAT:

FLOAT
  ⁣
  
.. _api_enum_value_flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType.STRING:

STRING
  ⁣
  
.. _api_enum_value_flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType.BOOLEAN:

BOOLEAN
  ⁣
  
.. _api_enum_value_flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType.DATETIME:

DATETIME
  ⁣
  
.. _api_enum_value_flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType.DURATION:

DURATION
  ⁣
  


.. _api_msg_flyteidl.core.BlobType:

flyteidl.core.BlobType
----------------------

`[flyteidl.core.BlobType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L46>`_

Defines type behavior for blob objects

.. code-block:: json

  {
    "format": "...",
    "dimensionality": "..."
  }

.. _api_field_flyteidl.core.BlobType.format:

format
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Format can be a free form string understood by SDK/UI etc like
  csv, parquet etc
  
  
.. _api_field_flyteidl.core.BlobType.dimensionality:

dimensionality
  (:ref:`flyteidl.core.BlobType.BlobDimensionality <api_enum_flyteidl.core.BlobType.BlobDimensionality>`) 
  

.. _api_enum_flyteidl.core.BlobType.BlobDimensionality:

Enum flyteidl.core.BlobType.BlobDimensionality
----------------------------------------------

`[flyteidl.core.BlobType.BlobDimensionality proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L47>`_


.. _api_enum_value_flyteidl.core.BlobType.BlobDimensionality.SINGLE:

SINGLE
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.core.BlobType.BlobDimensionality.MULTIPART:

MULTIPART
  ⁣
  

.. _api_msg_flyteidl.core.LiteralType:

flyteidl.core.LiteralType
-------------------------

`[flyteidl.core.LiteralType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L59>`_

Defines a strong type to allow type checking between interfaces.

.. code-block:: json

  {
    "simple": "...",
    "schema": "{...}",
    "collection_type": "{...}",
    "map_value_type": "{...}",
    "blob": "{...}",
    "metadata": "{...}"
  }

.. _api_field_flyteidl.core.LiteralType.simple:

simple
  (:ref:`flyteidl.core.SimpleType <api_enum_flyteidl.core.SimpleType>`) A simple type that can be compared one-to-one with another.
  
  
  
  Only one of :ref:`simple <api_field_flyteidl.core.LiteralType.simple>`, :ref:`schema <api_field_flyteidl.core.LiteralType.schema>`, :ref:`collection_type <api_field_flyteidl.core.LiteralType.collection_type>`, :ref:`map_value_type <api_field_flyteidl.core.LiteralType.map_value_type>`, :ref:`blob <api_field_flyteidl.core.LiteralType.blob>` may be set.
  
.. _api_field_flyteidl.core.LiteralType.schema:

schema
  (:ref:`flyteidl.core.SchemaType <api_msg_flyteidl.core.SchemaType>`) A complex type that requires matching of inner fields.
  
  
  
  Only one of :ref:`simple <api_field_flyteidl.core.LiteralType.simple>`, :ref:`schema <api_field_flyteidl.core.LiteralType.schema>`, :ref:`collection_type <api_field_flyteidl.core.LiteralType.collection_type>`, :ref:`map_value_type <api_field_flyteidl.core.LiteralType.map_value_type>`, :ref:`blob <api_field_flyteidl.core.LiteralType.blob>` may be set.
  
.. _api_field_flyteidl.core.LiteralType.collection_type:

collection_type
  (:ref:`flyteidl.core.LiteralType <api_msg_flyteidl.core.LiteralType>`) Defines the type of the value of a collection. Only homogeneous collections are allowed.
  
  
  
  Only one of :ref:`simple <api_field_flyteidl.core.LiteralType.simple>`, :ref:`schema <api_field_flyteidl.core.LiteralType.schema>`, :ref:`collection_type <api_field_flyteidl.core.LiteralType.collection_type>`, :ref:`map_value_type <api_field_flyteidl.core.LiteralType.map_value_type>`, :ref:`blob <api_field_flyteidl.core.LiteralType.blob>` may be set.
  
.. _api_field_flyteidl.core.LiteralType.map_value_type:

map_value_type
  (:ref:`flyteidl.core.LiteralType <api_msg_flyteidl.core.LiteralType>`) Defines the type of the value of a map type. The type of the key is always a string.
  
  
  
  Only one of :ref:`simple <api_field_flyteidl.core.LiteralType.simple>`, :ref:`schema <api_field_flyteidl.core.LiteralType.schema>`, :ref:`collection_type <api_field_flyteidl.core.LiteralType.collection_type>`, :ref:`map_value_type <api_field_flyteidl.core.LiteralType.map_value_type>`, :ref:`blob <api_field_flyteidl.core.LiteralType.blob>` may be set.
  
.. _api_field_flyteidl.core.LiteralType.blob:

blob
  (:ref:`flyteidl.core.BlobType <api_msg_flyteidl.core.BlobType>`) A blob might have specialized implementation details depending on associated metadata.
  
  
  
  Only one of :ref:`simple <api_field_flyteidl.core.LiteralType.simple>`, :ref:`schema <api_field_flyteidl.core.LiteralType.schema>`, :ref:`collection_type <api_field_flyteidl.core.LiteralType.collection_type>`, :ref:`map_value_type <api_field_flyteidl.core.LiteralType.map_value_type>`, :ref:`blob <api_field_flyteidl.core.LiteralType.blob>` may be set.
  
.. _api_field_flyteidl.core.LiteralType.metadata:

metadata
  (:ref:`google.protobuf.Struct <api_msg_google.protobuf.Struct>`) This field contains type metadata that is descriptive of the type, but is NOT considered in type-checking.  This might be used by
  consumers to identify special behavior or display extended information for the type.
  
  


.. _api_msg_flyteidl.core.OutputReference:

flyteidl.core.OutputReference
-----------------------------

`[flyteidl.core.OutputReference proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L84>`_

A reference to an output produced by a node. The type can be retrieved -and validated- from
the underlying interface of the node.

.. code-block:: json

  {
    "node_id": "...",
    "var": "..."
  }

.. _api_field_flyteidl.core.OutputReference.node_id:

node_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Node id must exist at the graph layer.
  
  
.. _api_field_flyteidl.core.OutputReference.var:

var
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Variable name must refer to an output variable for the node.
  
  


.. _api_msg_flyteidl.core.Error:

flyteidl.core.Error
-------------------

`[flyteidl.core.Error proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L93>`_

Represents an error thrown from a node.

.. code-block:: json

  {
    "failed_node_id": "...",
    "message": "..."
  }

.. _api_field_flyteidl.core.Error.failed_node_id:

failed_node_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The node id that threw the error.
  
  
.. _api_field_flyteidl.core.Error.message:

message
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) Error message thrown.
  
  


.. _api_msg_flyteidl.core.Secret:

flyteidl.core.Secret
--------------------

`[flyteidl.core.Secret proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L106>`_

Secret encapsulates information about the secret a task needs to proceed. An environment variable
_FLYTE_SECRET_ENV_PREFIX will be passed to indicate the prefix of the environment variables that will be present if
secrets are passed through environment variables.
_FLYTE_SECRET_PATH_PREFIX will be passed to indicate the prefix of the path where secrets will be mounted if secrets
are passed through file mounts.

.. code-block:: json

  {
    "name": "...",
    "type": "..."
  }

.. _api_field_flyteidl.core.Secret.name:

name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) The name of the secret to mount. This has to match an existing secret in the system. It's up to the implementation
  of the secret management system to require case sensitivity.
  
  
.. _api_field_flyteidl.core.Secret.type:

type
  (:ref:`flyteidl.core.Secret.Type <api_enum_flyteidl.core.Secret.Type>`) Type indicates the type of key requested. Asymmetric keys can not be passed through environment variables. If the
  underlying key management system cannot mount it through files, the task will fail.
  
  

.. _api_enum_flyteidl.core.Secret.Type:

Enum flyteidl.core.Secret.Type
------------------------------

`[flyteidl.core.Secret.Type proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L107>`_


.. _api_enum_value_flyteidl.core.Secret.Type.Symmetric:

Symmetric
  *(DEFAULT)* ⁣Symmetric indicates a shared secret (e.g. password).
  
  
.. _api_enum_value_flyteidl.core.Secret.Type.Asymmetric:

Asymmetric
  ⁣Asymmetric indicates a public-private key where the reference is to the private portion of the key.
  
  

.. _api_msg_flyteidl.core.OAuth2Client:

flyteidl.core.OAuth2Client
--------------------------

`[flyteidl.core.OAuth2Client proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L125>`_

OAuth2Client encapsulates OAuth2 Client Credentials to be used when making calls on behalf of that task.

.. code-block:: json

  {
    "client_id": "...",
    "client_secret": "{...}"
  }

.. _api_field_flyteidl.core.OAuth2Client.client_id:

client_id
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) client_id is the public id for the client to use. The system will not perform any pre-auth validation that the
  secret requested matches the client_id indicated here.
  
  
.. _api_field_flyteidl.core.OAuth2Client.client_secret:

client_secret
  (:ref:`flyteidl.core.Secret <api_msg_flyteidl.core.Secret>`) client_secret is a reference to the secret used to authenticate the OAuth2 client.
  
  


.. _api_msg_flyteidl.core.Identity:

flyteidl.core.Identity
----------------------

`[flyteidl.core.Identity proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L136>`_

Identity encapsulates the various security identities a task can run as. It's up to the underlying plugin to pick the
right identity for the execution environment.

.. code-block:: json

  {
    "iam_role": "...",
    "k8s_service_account": "...",
    "oauth2_client": "{...}"
  }

.. _api_field_flyteidl.core.Identity.iam_role:

iam_role
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) iam_role references the fully qualified name of Identity & Access Management role to impersonate.
  
  
.. _api_field_flyteidl.core.Identity.k8s_service_account:

k8s_service_account
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) k8s_service_account references a kubernetes service account to impersonate.
  
  
.. _api_field_flyteidl.core.Identity.oauth2_client:

oauth2_client
  (:ref:`flyteidl.core.OAuth2Client <api_msg_flyteidl.core.OAuth2Client>`) oauth2_client references an oauth2 client. Backend plugins can use this information to impersonate the client when
  making external calls.
  
  


.. _api_msg_flyteidl.core.OAuth2TokenRequest:

flyteidl.core.OAuth2TokenRequest
--------------------------------

`[flyteidl.core.OAuth2TokenRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L153>`_

OAuth2TokenRequest encapsulates information needed to request an OAuth2 token.
_FLYTE_TOKEN_ENV_PREFIX will be passed to indicate the prefix of the environment variables that will be present if
tokens are passed through environment variables.
_FLYTE_TOKEN_PATH_PREFIX will be passed to indicate the prefix of the path where secrets will be mounted if tokens
are passed through file mounts.

.. code-block:: json

  {
    "name": "...",
    "type": "...",
    "client": "{...}",
    "idp_discovery_endpoint": "...",
    "token_endpoint": "..."
  }

.. _api_field_flyteidl.core.OAuth2TokenRequest.name:

name
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) name indicates a unique id for the token request within this task token requests. It'll be used as a suffix for
  environment variables and as a filename for mounting tokens as files.
  
  
.. _api_field_flyteidl.core.OAuth2TokenRequest.type:

type
  (:ref:`flyteidl.core.OAuth2TokenRequest.Type <api_enum_flyteidl.core.OAuth2TokenRequest.Type>`) type indicates the type of the request to make. Defaults to CLIENT_CREDENTIALS.
  
  
.. _api_field_flyteidl.core.OAuth2TokenRequest.client:

client
  (:ref:`flyteidl.core.OAuth2Client <api_msg_flyteidl.core.OAuth2Client>`) client references the client_id/secret to use to request the OAuth2 token.
  
  
.. _api_field_flyteidl.core.OAuth2TokenRequest.idp_discovery_endpoint:

idp_discovery_endpoint
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) idp_discovery_endpoint references the discovery endpoint used to retrieve token endpoint and other related
  information.
  +optional
  
  
.. _api_field_flyteidl.core.OAuth2TokenRequest.token_endpoint:

token_endpoint
  (`string <https://developers.google.com/protocol-buffers/docs/proto#scalar>`_) token_endpoint references the token issuance endpoint. If idp_discovery_endpoint is not provided, this parameter is
  mandatory.
  +optional
  
  

.. _api_enum_flyteidl.core.OAuth2TokenRequest.Type:

Enum flyteidl.core.OAuth2TokenRequest.Type
------------------------------------------

`[flyteidl.core.OAuth2TokenRequest.Type proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L155>`_

Type of the token requested.

.. _api_enum_value_flyteidl.core.OAuth2TokenRequest.Type.CLIENT_CREDENTIALS:

CLIENT_CREDENTIALS
  *(DEFAULT)* ⁣CLIENT_CREDENTIALS indicates a 2-legged OAuth token requested using client credentials.
  
  

.. _api_msg_flyteidl.core.SecurityContext:

flyteidl.core.SecurityContext
-----------------------------

`[flyteidl.core.SecurityContext proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L182>`_

SecurityContext holds security attributes that apply to tasks.

.. code-block:: json

  {
    "run_as": "{...}",
    "secrets": [],
    "tokens": []
  }

.. _api_field_flyteidl.core.SecurityContext.run_as:

run_as
  (:ref:`flyteidl.core.Identity <api_msg_flyteidl.core.Identity>`) run_as encapsulates the identity a pod should run as. If the task fills in multiple fields here, it'll be up to the
  backend plugin to choose the appropriate identity for the execution engine the task will run on.
  
  
.. _api_field_flyteidl.core.SecurityContext.secrets:

secrets
  (:ref:`flyteidl.core.Secret <api_msg_flyteidl.core.Secret>`) secrets indicate the list of secrets the task needs in order to proceed. Secrets will be mounted/passed to the
  pod as it starts. If the plugin responsible for kicking of the task will not run it on a flyte cluster (e.g. AWS
  Batch), it's the responsibility of the plugin to fetch the secret (which means propeller identity will need access
  to the secret) and to pass it to the remote execution engine.
  
  
.. _api_field_flyteidl.core.SecurityContext.tokens:

tokens
  (:ref:`flyteidl.core.OAuth2TokenRequest <api_msg_flyteidl.core.OAuth2TokenRequest>`) tokens indicate the list of token requests the task needs in order to proceed. Tokens will be mounted/passed to the
  pod as it starts. If the plugin responsible for kicking of the task will not run it on a flyte cluster (e.g. AWS
  Batch), it's the responsibility of the plugin to fetch the secret (which means propeller identity will need access
  to the secret) and to pass it to the remote execution engine.
  
  

.. _api_enum_flyteidl.core.SimpleType:

Enum flyteidl.core.SimpleType
-----------------------------

`[flyteidl.core.SimpleType proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/types.proto#L9>`_

Define a set of simple types.

.. _api_enum_value_flyteidl.core.SimpleType.NONE:

NONE
  *(DEFAULT)* ⁣
  
.. _api_enum_value_flyteidl.core.SimpleType.INTEGER:

INTEGER
  ⁣
  
.. _api_enum_value_flyteidl.core.SimpleType.FLOAT:

FLOAT
  ⁣
  
.. _api_enum_value_flyteidl.core.SimpleType.STRING:

STRING
  ⁣
  
.. _api_enum_value_flyteidl.core.SimpleType.BOOLEAN:

BOOLEAN
  ⁣
  
.. _api_enum_value_flyteidl.core.SimpleType.DATETIME:

DATETIME
  ⁣
  
.. _api_enum_value_flyteidl.core.SimpleType.DURATION:

DURATION
  ⁣
  
.. _api_enum_value_flyteidl.core.SimpleType.BINARY:

BINARY
  ⁣
  
.. _api_enum_value_flyteidl.core.SimpleType.ERROR:

ERROR
  ⁣
  
.. _api_enum_value_flyteidl.core.SimpleType.STRUCT:

STRUCT
  ⁣
  

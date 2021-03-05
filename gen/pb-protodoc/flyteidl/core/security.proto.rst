.. _api_file_flyteidl/core/security.proto:

security.proto
============================

.. _api_msg_flyteidl.core.Secret:

flyteidl.core.Secret
--------------------

`[flyteidl.core.Secret proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/security.proto#L11>`_

Secret encapsulates information about the secret a task needs to proceed. An environment variable
FLYTE_SECRETS_ENV_PREFIX will be passed to indicate the prefix of the environment variables that will be present if
secrets are passed through environment variables.
FLYTE_SECRETS_DEFAULT_DIR will be passed to indicate the prefix of the path where secrets will be mounted if secrets
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

`[flyteidl.core.Secret.Type proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/security.proto#L12>`_


.. _api_enum_value_flyteidl.core.Secret.Type.Symmetric:

Symmetric
  *(DEFAULT)* ⁣Symmetric indicates a shared secret (e.g. password).
  
  
.. _api_enum_value_flyteidl.core.Secret.Type.Asymmetric:

Asymmetric
  ⁣Asymmetric indicates a public-private key where the reference is to the private portion of the key.
  
  

.. _api_msg_flyteidl.core.OAuth2Client:

flyteidl.core.OAuth2Client
--------------------------

`[flyteidl.core.OAuth2Client proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/security.proto#L30>`_

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

`[flyteidl.core.Identity proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/security.proto#L41>`_

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

`[flyteidl.core.OAuth2TokenRequest proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/security.proto#L58>`_

OAuth2TokenRequest encapsulates information needed to request an OAuth2 token.
FLYTE_TOKENS_ENV_PREFIX will be passed to indicate the prefix of the environment variables that will be present if
tokens are passed through environment variables.
FLYTE_TOKENS_PATH_PREFIX will be passed to indicate the prefix of the path where secrets will be mounted if tokens
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

`[flyteidl.core.OAuth2TokenRequest.Type proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/security.proto#L60>`_

Type of the token requested.

.. _api_enum_value_flyteidl.core.OAuth2TokenRequest.Type.CLIENT_CREDENTIALS:

CLIENT_CREDENTIALS
  *(DEFAULT)* ⁣CLIENT_CREDENTIALS indicates a 2-legged OAuth token requested using client credentials.
  
  

.. _api_msg_flyteidl.core.SecurityContext:

flyteidl.core.SecurityContext
-----------------------------

`[flyteidl.core.SecurityContext proto] <https://github.com/lyft/flyteidl/blob/master/protos/flyteidl/core/security.proto#L87>`_

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
  
  


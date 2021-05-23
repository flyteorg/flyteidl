######################
Protocol Documentation
######################




.. _ref_flyteidl/service/admin.proto:

flyteidl/service/admin.proto
==================================================================



 

 

 



.. _ref_flyteidl.service.AdminService:

AdminService
------------------------------------------------------------------

The following defines an RPC service that is also served over HTTP via grpc-gateway.
Standard response codes for both are defined here: https://github.com/grpc-ecosystem/grpc-gateway/blob/master/runtime/errors.go

.. csv-table:: AdminService service methods
   :header: "Method Name", "Request Type", "Response Type", "Description"
   :widths: auto

   "CreateTask", ":ref:`ref_flyteidl.admin.TaskCreateRequest`", ":ref:`ref_flyteidl.admin.TaskCreateResponse`", ""
   "GetTask", ":ref:`ref_flyteidl.admin.ObjectGetRequest`", ":ref:`ref_flyteidl.admin.Task`", ""
   "ListTaskIds", ":ref:`ref_flyteidl.admin.NamedEntityIdentifierListRequest`", ":ref:`ref_flyteidl.admin.NamedEntityIdentifierList`", ""
   "ListTasks", ":ref:`ref_flyteidl.admin.ResourceListRequest`", ":ref:`ref_flyteidl.admin.TaskList`", ""
   "CreateWorkflow", ":ref:`ref_flyteidl.admin.WorkflowCreateRequest`", ":ref:`ref_flyteidl.admin.WorkflowCreateResponse`", ""
   "GetWorkflow", ":ref:`ref_flyteidl.admin.ObjectGetRequest`", ":ref:`ref_flyteidl.admin.Workflow`", ""
   "ListWorkflowIds", ":ref:`ref_flyteidl.admin.NamedEntityIdentifierListRequest`", ":ref:`ref_flyteidl.admin.NamedEntityIdentifierList`", ""
   "ListWorkflows", ":ref:`ref_flyteidl.admin.ResourceListRequest`", ":ref:`ref_flyteidl.admin.WorkflowList`", ""
   "CreateLaunchPlan", ":ref:`ref_flyteidl.admin.LaunchPlanCreateRequest`", ":ref:`ref_flyteidl.admin.LaunchPlanCreateResponse`", ""
   "GetLaunchPlan", ":ref:`ref_flyteidl.admin.ObjectGetRequest`", ":ref:`ref_flyteidl.admin.LaunchPlan`", ""
   "GetActiveLaunchPlan", ":ref:`ref_flyteidl.admin.ActiveLaunchPlanRequest`", ":ref:`ref_flyteidl.admin.LaunchPlan`", ""
   "ListActiveLaunchPlans", ":ref:`ref_flyteidl.admin.ActiveLaunchPlanListRequest`", ":ref:`ref_flyteidl.admin.LaunchPlanList`", ""
   "ListLaunchPlanIds", ":ref:`ref_flyteidl.admin.NamedEntityIdentifierListRequest`", ":ref:`ref_flyteidl.admin.NamedEntityIdentifierList`", ""
   "ListLaunchPlans", ":ref:`ref_flyteidl.admin.ResourceListRequest`", ":ref:`ref_flyteidl.admin.LaunchPlanList`", ""
   "UpdateLaunchPlan", ":ref:`ref_flyteidl.admin.LaunchPlanUpdateRequest`", ":ref:`ref_flyteidl.admin.LaunchPlanUpdateResponse`", ""
   "CreateExecution", ":ref:`ref_flyteidl.admin.ExecutionCreateRequest`", ":ref:`ref_flyteidl.admin.ExecutionCreateResponse`", ""
   "RelaunchExecution", ":ref:`ref_flyteidl.admin.ExecutionRelaunchRequest`", ":ref:`ref_flyteidl.admin.ExecutionCreateResponse`", ""
   "GetExecution", ":ref:`ref_flyteidl.admin.WorkflowExecutionGetRequest`", ":ref:`ref_flyteidl.admin.Execution`", ""
   "GetExecutionData", ":ref:`ref_flyteidl.admin.WorkflowExecutionGetDataRequest`", ":ref:`ref_flyteidl.admin.WorkflowExecutionGetDataResponse`", ""
   "ListExecutions", ":ref:`ref_flyteidl.admin.ResourceListRequest`", ":ref:`ref_flyteidl.admin.ExecutionList`", ""
   "TerminateExecution", ":ref:`ref_flyteidl.admin.ExecutionTerminateRequest`", ":ref:`ref_flyteidl.admin.ExecutionTerminateResponse`", ""
   "GetNodeExecution", ":ref:`ref_flyteidl.admin.NodeExecutionGetRequest`", ":ref:`ref_flyteidl.admin.NodeExecution`", ""
   "ListNodeExecutions", ":ref:`ref_flyteidl.admin.NodeExecutionListRequest`", ":ref:`ref_flyteidl.admin.NodeExecutionList`", ""
   "ListNodeExecutionsForTask", ":ref:`ref_flyteidl.admin.NodeExecutionForTaskListRequest`", ":ref:`ref_flyteidl.admin.NodeExecutionList`", ""
   "GetNodeExecutionData", ":ref:`ref_flyteidl.admin.NodeExecutionGetDataRequest`", ":ref:`ref_flyteidl.admin.NodeExecutionGetDataResponse`", ""
   "RegisterProject", ":ref:`ref_flyteidl.admin.ProjectRegisterRequest`", ":ref:`ref_flyteidl.admin.ProjectRegisterResponse`", ""
   "UpdateProject", ":ref:`ref_flyteidl.admin.Project`", ":ref:`ref_flyteidl.admin.ProjectUpdateResponse`", "flyteidl.admin.Project should be passed but the domains property should be empty; it will be ignored in the handler as domains cannot be updated via this API."
   "ListProjects", ":ref:`ref_flyteidl.admin.ProjectListRequest`", ":ref:`ref_flyteidl.admin.Projects`", ""
   "CreateWorkflowEvent", ":ref:`ref_flyteidl.admin.WorkflowExecutionEventRequest`", ":ref:`ref_flyteidl.admin.WorkflowExecutionEventResponse`", ""
   "CreateNodeEvent", ":ref:`ref_flyteidl.admin.NodeExecutionEventRequest`", ":ref:`ref_flyteidl.admin.NodeExecutionEventResponse`", ""
   "CreateTaskEvent", ":ref:`ref_flyteidl.admin.TaskExecutionEventRequest`", ":ref:`ref_flyteidl.admin.TaskExecutionEventResponse`", ""
   "GetTaskExecution", ":ref:`ref_flyteidl.admin.TaskExecutionGetRequest`", ":ref:`ref_flyteidl.admin.TaskExecution`", ""
   "ListTaskExecutions", ":ref:`ref_flyteidl.admin.TaskExecutionListRequest`", ":ref:`ref_flyteidl.admin.TaskExecutionList`", ""
   "GetTaskExecutionData", ":ref:`ref_flyteidl.admin.TaskExecutionGetDataRequest`", ":ref:`ref_flyteidl.admin.TaskExecutionGetDataResponse`", ""
   "UpdateProjectDomainAttributes", ":ref:`ref_flyteidl.admin.ProjectDomainAttributesUpdateRequest`", ":ref:`ref_flyteidl.admin.ProjectDomainAttributesUpdateResponse`", ""
   "GetProjectDomainAttributes", ":ref:`ref_flyteidl.admin.ProjectDomainAttributesGetRequest`", ":ref:`ref_flyteidl.admin.ProjectDomainAttributesGetResponse`", ""
   "DeleteProjectDomainAttributes", ":ref:`ref_flyteidl.admin.ProjectDomainAttributesDeleteRequest`", ":ref:`ref_flyteidl.admin.ProjectDomainAttributesDeleteResponse`", ""
   "UpdateWorkflowAttributes", ":ref:`ref_flyteidl.admin.WorkflowAttributesUpdateRequest`", ":ref:`ref_flyteidl.admin.WorkflowAttributesUpdateResponse`", ""
   "GetWorkflowAttributes", ":ref:`ref_flyteidl.admin.WorkflowAttributesGetRequest`", ":ref:`ref_flyteidl.admin.WorkflowAttributesGetResponse`", ""
   "DeleteWorkflowAttributes", ":ref:`ref_flyteidl.admin.WorkflowAttributesDeleteRequest`", ":ref:`ref_flyteidl.admin.WorkflowAttributesDeleteResponse`", ""
   "ListMatchableAttributes", ":ref:`ref_flyteidl.admin.ListMatchableAttributesRequest`", ":ref:`ref_flyteidl.admin.ListMatchableAttributesResponse`", ""
   "ListNamedEntities", ":ref:`ref_flyteidl.admin.NamedEntityListRequest`", ":ref:`ref_flyteidl.admin.NamedEntityList`", ""
   "GetNamedEntity", ":ref:`ref_flyteidl.admin.NamedEntityGetRequest`", ":ref:`ref_flyteidl.admin.NamedEntity`", ""
   "UpdateNamedEntity", ":ref:`ref_flyteidl.admin.NamedEntityUpdateRequest`", ":ref:`ref_flyteidl.admin.NamedEntityUpdateResponse`", ""
   "GetVersion", ":ref:`ref_flyteidl.admin.GetVersionRequest`", ":ref:`ref_flyteidl.admin.GetVersionResponse`", ""
 




.. _ref_flyteidl/service/auth.proto:

flyteidl/service/auth.proto
==================================================================





.. _ref_flyteidl.service.OAuth2MetadataRequest:

OAuth2MetadataRequest
------------------------------------------------------------------










.. _ref_flyteidl.service.OAuth2MetadataResponse:

OAuth2MetadataResponse
------------------------------------------------------------------

OAuth2MetadataResponse defines an RFC-Compliant response for /.well-known/oauth-authorization-server metadata
as defined in https://tools.ietf.org/html/rfc8414



.. csv-table:: OAuth2MetadataResponse type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "issuer", ":ref:`ref_string`", "", "Defines the issuer string in all JWT tokens this server issues. The issuer can be admin itself or an external issuer."
   "authorization_endpoint", ":ref:`ref_string`", "", "URL of the authorization server&#39;s authorization endpoint [RFC6749]. This is REQUIRED unless no grant types are supported that use the authorization endpoint."
   "token_endpoint", ":ref:`ref_string`", "", "URL of the authorization server&#39;s token endpoint [RFC6749]."
   "response_types_supported", ":ref:`ref_string`", "repeated", "Array containing a list of the OAuth 2.0 &#34;response_type&#34; values that this authorization server supports."
   "scopes_supported", ":ref:`ref_string`", "repeated", "JSON array containing a list of the OAuth 2.0 [RFC6749] &#34;scope&#34; values that this authorization server supports."
   "token_endpoint_auth_methods_supported", ":ref:`ref_string`", "repeated", "JSON array containing a list of client authentication methods supported by this token endpoint."
   "jwks_uri", ":ref:`ref_string`", "", "URL of the authorization server&#39;s JWK Set [JWK] document. The referenced document contains the signing key(s) the client uses to validate signatures from the authorization server."
   "code_challenge_methods_supported", ":ref:`ref_string`", "repeated", "JSON array containing a list of Proof Key for Code Exchange (PKCE) [RFC7636] code challenge methods supported by this authorization server."
   "grant_types_supported", ":ref:`ref_string`", "repeated", "JSON array containing a list of the OAuth 2.0 grant type values that this authorization server supports."







.. _ref_flyteidl.service.PublicClientAuthConfigRequest:

PublicClientAuthConfigRequest
------------------------------------------------------------------










.. _ref_flyteidl.service.PublicClientAuthConfigResponse:

PublicClientAuthConfigResponse
------------------------------------------------------------------

FlyteClientResponse encapsulates public information that flyte clients (CLIs... etc.) can use to authenticate users.



.. csv-table:: PublicClientAuthConfigResponse type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "client_id", ":ref:`ref_string`", "", "client_id to use when initiating OAuth2 authorization requests."
   "redirect_uri", ":ref:`ref_string`", "", "redirect uri to use when initiating OAuth2 authorization requests."
   "scopes", ":ref:`ref_string`", "repeated", "scopes to request when initiating OAuth2 authorization requests."
   "authorization_metadata_key", ":ref:`ref_string`", "", "Authorization Header to use when passing Access Tokens to the server. If not provided, the client should use the default http `Authorization` header."





 

 

 



.. _ref_flyteidl.service.AuthMetadataService:

AuthMetadataService
------------------------------------------------------------------

The following defines an RPC service that is also served over HTTP via grpc-gateway.
Standard response codes for both are defined here: https://github.com/grpc-ecosystem/grpc-gateway/blob/master/runtime/errors.go
RPCs defined in this service must be anonymously accessible.

.. csv-table:: AuthMetadataService service methods
   :header: "Method Name", "Request Type", "Response Type", "Description"
   :widths: auto

   "GetOAuth2Metadata", ":ref:`ref_flyteidl.service.OAuth2MetadataRequest`", ":ref:`ref_flyteidl.service.OAuth2MetadataResponse`", "Anonymously accessible. Retrieves local or external oauth authorization server metadata."
   "GetPublicClientConfig", ":ref:`ref_flyteidl.service.PublicClientAuthConfigRequest`", ":ref:`ref_flyteidl.service.PublicClientAuthConfigResponse`", "Anonymously accessible. Retrieves the client information clients should use when initiating OAuth2 authorization requests."
 




.. _ref_flyteidl/service/identity.proto:

flyteidl/service/identity.proto
==================================================================





.. _ref_flyteidl.service.UserInfoRequest:

UserInfoRequest
------------------------------------------------------------------










.. _ref_flyteidl.service.UserInfoResponse:

UserInfoResponse
------------------------------------------------------------------

See the OpenID Connect spec at https://openid.net/specs/openid-connect-core-1_0.html#UserInfoResponse for more information.



.. csv-table:: UserInfoResponse type fields
   :header: "Field", "Type", "Label", "Description"
   :widths: auto

   "subject", ":ref:`ref_string`", "", "Locally unique and never reassigned identifier within the Issuer for the End-User, which is intended to be consumed by the Client."
   "name", ":ref:`ref_string`", "", "Full name"
   "preferred_username", ":ref:`ref_string`", "", "Shorthand name by which the End-User wishes to be referred to"
   "given_name", ":ref:`ref_string`", "", "Given name(s) or first name(s)"
   "family_name", ":ref:`ref_string`", "", "Surname(s) or last name(s)"
   "email", ":ref:`ref_string`", "", "Preferred e-mail address"
   "picture", ":ref:`ref_string`", "", "Profile picture URL"





 

 

 



.. _ref_flyteidl.service.IdentityService:

IdentityService
------------------------------------------------------------------

IdentityService defines an RPC Service that interacts with user/app identities.

.. csv-table:: IdentityService service methods
   :header: "Method Name", "Request Type", "Response Type", "Description"
   :widths: auto

   "UserInfo", ":ref:`ref_flyteidl.service.UserInfoRequest`", ":ref:`ref_flyteidl.service.UserInfoResponse`", "Retrieves user information about the currently logged in user."
 



.. _ref_scala_types:

Scalar Value Types
==================



.. _ref_double:

double
-----------------------------



.. csv-table:: double language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "double", "double", "double", "float", "float64", "double", "float", "Float"



.. _ref_float:

float
-----------------------------



.. csv-table:: float language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "float", "float", "float", "float", "float32", "float", "float", "Float"



.. _ref_int32:

int32
-----------------------------

Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead.

.. csv-table:: int32 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "int32", "int32", "int", "int", "int32", "int", "integer", "Bignum or Fixnum (as required)"



.. _ref_int64:

int64
-----------------------------

Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead.

.. csv-table:: int64 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "int64", "int64", "long", "int/long", "int64", "long", "integer/string", "Bignum"



.. _ref_uint32:

uint32
-----------------------------

Uses variable-length encoding.

.. csv-table:: uint32 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "uint32", "uint32", "int", "int/long", "uint32", "uint", "integer", "Bignum or Fixnum (as required)"



.. _ref_uint64:

uint64
-----------------------------

Uses variable-length encoding.

.. csv-table:: uint64 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "uint64", "uint64", "long", "int/long", "uint64", "ulong", "integer/string", "Bignum or Fixnum (as required)"



.. _ref_sint32:

sint32
-----------------------------

Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s.

.. csv-table:: sint32 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "sint32", "int32", "int", "int", "int32", "int", "integer", "Bignum or Fixnum (as required)"



.. _ref_sint64:

sint64
-----------------------------

Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s.

.. csv-table:: sint64 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "sint64", "int64", "long", "int/long", "int64", "long", "integer/string", "Bignum"



.. _ref_fixed32:

fixed32
-----------------------------

Always four bytes. More efficient than uint32 if values are often greater than 2^28.

.. csv-table:: fixed32 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "fixed32", "uint32", "int", "int", "uint32", "uint", "integer", "Bignum or Fixnum (as required)"



.. _ref_fixed64:

fixed64
-----------------------------

Always eight bytes. More efficient than uint64 if values are often greater than 2^56.

.. csv-table:: fixed64 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "fixed64", "uint64", "long", "int/long", "uint64", "ulong", "integer/string", "Bignum"



.. _ref_sfixed32:

sfixed32
-----------------------------

Always four bytes.

.. csv-table:: sfixed32 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "sfixed32", "int32", "int", "int", "int32", "int", "integer", "Bignum or Fixnum (as required)"



.. _ref_sfixed64:

sfixed64
-----------------------------

Always eight bytes.

.. csv-table:: sfixed64 language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "sfixed64", "int64", "long", "int/long", "int64", "long", "integer/string", "Bignum"



.. _ref_bool:

bool
-----------------------------



.. csv-table:: bool language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "bool", "bool", "boolean", "boolean", "bool", "bool", "boolean", "TrueClass/FalseClass"



.. _ref_string:

string
-----------------------------

A string must always contain UTF-8 encoded or 7-bit ASCII text.

.. csv-table:: string language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "string", "string", "String", "str/unicode", "string", "string", "string", "String (UTF-8)"



.. _ref_bytes:

bytes
-----------------------------

May contain any arbitrary sequence of bytes.

.. csv-table:: bytes language representation
   :header: ".proto Type", "C++", "Java", "Python", "Go", "C#", "PHP", "Ruby"
   :widths: auto

   "bytes", "string", "ByteString", "str", "[]byte", "ByteString", "string", "String (ASCII-8BIT)"

 
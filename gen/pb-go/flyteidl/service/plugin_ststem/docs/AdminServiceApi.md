# \AdminServiceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateExecution**](AdminServiceApi.md#CreateExecution) | **Post** /api/v1/executions | Triggers the creation of a :ref:&#x60;ref_flyteidl.admin.Execution&#x60;
[**CreateLaunchPlan**](AdminServiceApi.md#CreateLaunchPlan) | **Post** /api/v1/launch_plans | Create and upload a :ref:&#x60;ref_flyteidl.admin.LaunchPlan&#x60; definition
[**CreateNodeEvent**](AdminServiceApi.md#CreateNodeEvent) | **Post** /api/v1/events/nodes | Indicates a :ref:&#x60;ref_flyteidl.event.NodeExecutionEvent&#x60; has occurred.
[**CreateTask**](AdminServiceApi.md#CreateTask) | **Post** /api/v1/tasks | Create and upload a :ref:&#x60;ref_flyteidl.admin.Task&#x60; definition
[**CreateTaskEvent**](AdminServiceApi.md#CreateTaskEvent) | **Post** /api/v1/events/tasks | Indicates a :ref:&#x60;ref_flyteidl.event.TaskExecutionEvent&#x60; has occurred.
[**CreateWorkflow**](AdminServiceApi.md#CreateWorkflow) | **Post** /api/v1/workflows | Create and upload a :ref:&#x60;ref_flyteidl.admin.Workflow&#x60; definition
[**CreateWorkflowEvent**](AdminServiceApi.md#CreateWorkflowEvent) | **Post** /api/v1/events/workflows | Indicates a :ref:&#x60;ref_flyteidl.event.WorkflowExecutionEvent&#x60; has occurred.
[**DeleteProjectAttributes**](AdminServiceApi.md#DeleteProjectAttributes) | **Delete** /api/v1/project_attributes/{project} | Deletes custom :ref:&#x60;ref_flyteidl.admin.MatchableAttributesConfiguration&#x60; for a project and domain.
[**DeleteProjectDomainAttributes**](AdminServiceApi.md#DeleteProjectDomainAttributes) | **Delete** /api/v1/project_domain_attributes/{project}/{domain} | Deletes custom :ref:&#x60;ref_flyteidl.admin.MatchableAttributesConfiguration&#x60; for a project and domain.
[**DeleteWorkflowAttributes**](AdminServiceApi.md#DeleteWorkflowAttributes) | **Delete** /api/v1/workflow_attributes/{project}/{domain}/{workflow} | Deletes custom :ref:&#x60;ref_flyteidl.admin.MatchableAttributesConfiguration&#x60; for a project, domain and workflow.
[**GetActiveLaunchPlan**](AdminServiceApi.md#GetActiveLaunchPlan) | **Get** /api/v1/active_launch_plans/{id.project}/{id.domain}/{id.name} | Fetch the active version of a :ref:&#x60;ref_flyteidl.admin.LaunchPlan&#x60;.
[**GetDescriptionEntity**](AdminServiceApi.md#GetDescriptionEntity) | **Get** /api/v1/description_entities/{id.resource_type}/{id.project}/{id.domain}/{id.name}/{id.version} | Fetch a :ref:&#x60;ref_flyteidl.admin.DescriptionEntity&#x60; object.
[**GetExecution**](AdminServiceApi.md#GetExecution) | **Get** /api/v1/executions/{id.project}/{id.domain}/{id.name} | Fetches a :ref:&#x60;ref_flyteidl.admin.Execution&#x60;.
[**GetExecutionData**](AdminServiceApi.md#GetExecutionData) | **Get** /api/v1/data/executions/{id.project}/{id.domain}/{id.name} | Fetches input and output data for a :ref:&#x60;ref_flyteidl.admin.Execution&#x60;.
[**GetLaunchPlan**](AdminServiceApi.md#GetLaunchPlan) | **Get** /api/v1/launch_plans/{id.project}/{id.domain}/{id.name}/{id.version} | Fetch a :ref:&#x60;ref_flyteidl.admin.LaunchPlan&#x60; definition.
[**GetNamedEntity**](AdminServiceApi.md#GetNamedEntity) | **Get** /api/v1/named_entities/{resource_type}/{id.project}/{id.domain}/{id.name} | Returns a :ref:&#x60;ref_flyteidl.admin.NamedEntity&#x60; object.
[**GetNodeExecution**](AdminServiceApi.md#GetNodeExecution) | **Get** /api/v1/node_executions/{id.execution_id.project}/{id.execution_id.domain}/{id.execution_id.name}/{id.node_id} | Fetches a :ref:&#x60;ref_flyteidl.admin.NodeExecution&#x60;.
[**GetNodeExecutionData**](AdminServiceApi.md#GetNodeExecutionData) | **Get** /api/v1/data/node_executions/{id.execution_id.project}/{id.execution_id.domain}/{id.execution_id.name}/{id.node_id} | Fetches input and output data for a :ref:&#x60;ref_flyteidl.admin.NodeExecution&#x60;.
[**GetProjectAttributes**](AdminServiceApi.md#GetProjectAttributes) | **Get** /api/v1/project_attributes/{project} | Fetches custom :ref:&#x60;ref_flyteidl.admin.MatchableAttributesConfiguration&#x60; for a project and domain.
[**GetProjectDomainAttributes**](AdminServiceApi.md#GetProjectDomainAttributes) | **Get** /api/v1/project_domain_attributes/{project}/{domain} | Fetches custom :ref:&#x60;ref_flyteidl.admin.MatchableAttributesConfiguration&#x60; for a project and domain.
[**GetTask**](AdminServiceApi.md#GetTask) | **Get** /api/v1/tasks/{id.project}/{id.domain}/{id.name}/{id.version} | Fetch a :ref:&#x60;ref_flyteidl.admin.Task&#x60; definition.
[**GetTaskExecution**](AdminServiceApi.md#GetTaskExecution) | **Get** /api/v1/task_executions/{id.node_execution_id.execution_id.project}/{id.node_execution_id.execution_id.domain}/{id.node_execution_id.execution_id.name}/{id.node_execution_id.node_id}/{id.task_id.project}/{id.task_id.domain}/{id.task_id.name}/{id.task_id.version}/{id.retry_attempt} | Fetches a :ref:&#x60;ref_flyteidl.admin.TaskExecution&#x60;.
[**GetTaskExecutionData**](AdminServiceApi.md#GetTaskExecutionData) | **Get** /api/v1/data/task_executions/{id.node_execution_id.execution_id.project}/{id.node_execution_id.execution_id.domain}/{id.node_execution_id.execution_id.name}/{id.node_execution_id.node_id}/{id.task_id.project}/{id.task_id.domain}/{id.task_id.name}/{id.task_id.version}/{id.retry_attempt} | Fetches input and output data for a :ref:&#x60;ref_flyteidl.admin.TaskExecution&#x60;.
[**GetVersion**](AdminServiceApi.md#GetVersion) | **Get** /api/v1/version | 
[**GetWorkflow**](AdminServiceApi.md#GetWorkflow) | **Get** /api/v1/workflows/{id.project}/{id.domain}/{id.name}/{id.version} | Fetch a :ref:&#x60;ref_flyteidl.admin.Workflow&#x60; definition.
[**GetWorkflowAttributes**](AdminServiceApi.md#GetWorkflowAttributes) | **Get** /api/v1/workflow_attributes/{project}/{domain}/{workflow} | Fetches custom :ref:&#x60;ref_flyteidl.admin.MatchableAttributesConfiguration&#x60; for a project, domain and workflow.
[**ListActiveLaunchPlans**](AdminServiceApi.md#ListActiveLaunchPlans) | **Get** /api/v1/active_launch_plans/{project}/{domain} | List active versions of :ref:&#x60;ref_flyteidl.admin.LaunchPlan&#x60;.
[**ListDescriptionEntities**](AdminServiceApi.md#ListDescriptionEntities) | **Get** /api/v1/description_entities/{resource_type}/{id.project}/{id.domain}/{id.name} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.DescriptionEntity&#x60; definitions.
[**ListDescriptionEntities2**](AdminServiceApi.md#ListDescriptionEntities2) | **Get** /api/v1/description_entities/{resource_type}/{id.project}/{id.domain} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.DescriptionEntity&#x60; definitions.
[**ListExecutions**](AdminServiceApi.md#ListExecutions) | **Get** /api/v1/executions/{id.project}/{id.domain} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.Execution&#x60;.
[**ListLaunchPlanIds**](AdminServiceApi.md#ListLaunchPlanIds) | **Get** /api/v1/launch_plan_ids/{project}/{domain} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.NamedEntityIdentifier&#x60; of launch plan objects.
[**ListLaunchPlans**](AdminServiceApi.md#ListLaunchPlans) | **Get** /api/v1/launch_plans/{id.project}/{id.domain}/{id.name} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.LaunchPlan&#x60; definitions.
[**ListLaunchPlans2**](AdminServiceApi.md#ListLaunchPlans2) | **Get** /api/v1/launch_plans/{id.project}/{id.domain} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.LaunchPlan&#x60; definitions.
[**ListMatchableAttributes**](AdminServiceApi.md#ListMatchableAttributes) | **Get** /api/v1/matchable_attributes | Lists custom :ref:&#x60;ref_flyteidl.admin.MatchableAttributesConfiguration&#x60; for a specific resource type.
[**ListNamedEntities**](AdminServiceApi.md#ListNamedEntities) | **Get** /api/v1/named_entities/{resource_type}/{project}/{domain} | Returns a list of :ref:&#x60;ref_flyteidl.admin.NamedEntity&#x60; objects.
[**ListNodeExecutions**](AdminServiceApi.md#ListNodeExecutions) | **Get** /api/v1/node_executions/{workflow_execution_id.project}/{workflow_execution_id.domain}/{workflow_execution_id.name} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.NodeExecution&#x60;.
[**ListNodeExecutionsForTask**](AdminServiceApi.md#ListNodeExecutionsForTask) | **Get** /api/v1/children/task_executions/{task_execution_id.node_execution_id.execution_id.project}/{task_execution_id.node_execution_id.execution_id.domain}/{task_execution_id.node_execution_id.execution_id.name}/{task_execution_id.node_execution_id.node_id}/{task_execution_id.task_id.project}/{task_execution_id.task_id.domain}/{task_execution_id.task_id.name}/{task_execution_id.task_id.version}/{task_execution_id.retry_attempt} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.NodeExecution&#x60; launched by the reference :ref:&#x60;ref_flyteidl.admin.TaskExecution&#x60;.
[**ListProjects**](AdminServiceApi.md#ListProjects) | **Get** /api/v1/projects | Fetches a list of :ref:&#x60;ref_flyteidl.admin.Project&#x60;
[**ListTaskExecutions**](AdminServiceApi.md#ListTaskExecutions) | **Get** /api/v1/task_executions/{node_execution_id.execution_id.project}/{node_execution_id.execution_id.domain}/{node_execution_id.execution_id.name}/{node_execution_id.node_id} | Fetches a list of :ref:&#x60;ref_flyteidl.admin.TaskExecution&#x60;.
[**ListTaskIds**](AdminServiceApi.md#ListTaskIds) | **Get** /api/v1/task_ids/{project}/{domain} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.NamedEntityIdentifier&#x60; of task objects.
[**ListTasks**](AdminServiceApi.md#ListTasks) | **Get** /api/v1/tasks/{id.project}/{id.domain}/{id.name} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.Task&#x60; definitions.
[**ListTasks2**](AdminServiceApi.md#ListTasks2) | **Get** /api/v1/tasks/{id.project}/{id.domain} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.Task&#x60; definitions.
[**ListWorkflowIds**](AdminServiceApi.md#ListWorkflowIds) | **Get** /api/v1/workflow_ids/{project}/{domain} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.NamedEntityIdentifier&#x60; of workflow objects.
[**ListWorkflows**](AdminServiceApi.md#ListWorkflows) | **Get** /api/v1/workflows/{id.project}/{id.domain}/{id.name} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.Workflow&#x60; definitions.
[**ListWorkflows2**](AdminServiceApi.md#ListWorkflows2) | **Get** /api/v1/workflows/{id.project}/{id.domain} | Fetch a list of :ref:&#x60;ref_flyteidl.admin.Workflow&#x60; definitions.
[**RecoverExecution**](AdminServiceApi.md#RecoverExecution) | **Post** /api/v1/executions/recover | Recreates a previously-run workflow execution that will only start executing from the last known failure point. In Recover mode, users cannot change any input parameters or update the version of the execution. This is extremely useful to recover from system errors and byzantine faults like - Loss of K8s cluster, bugs in platform or instability, machine failures, downstream system failures (downstream services), or simply to recover executions that failed because of retry exhaustion and should complete if tried again. See :ref:&#x60;ref_flyteidl.admin.ExecutionRecoverRequest&#x60; for more details.
[**RegisterProject**](AdminServiceApi.md#RegisterProject) | **Post** /api/v1/projects | Registers a :ref:&#x60;ref_flyteidl.admin.Project&#x60; with the Flyte deployment.
[**RelaunchExecution**](AdminServiceApi.md#RelaunchExecution) | **Post** /api/v1/executions/relaunch | Triggers the creation of an identical :ref:&#x60;ref_flyteidl.admin.Execution&#x60;
[**TerminateExecution**](AdminServiceApi.md#TerminateExecution) | **Delete** /api/v1/executions/{id.project}/{id.domain}/{id.name} | Terminates an in-progress :ref:&#x60;ref_flyteidl.admin.Execution&#x60;.
[**UpdateExecution**](AdminServiceApi.md#UpdateExecution) | **Put** /api/v1/executions/{id.project}/{id.domain}/{id.name} | Update execution belonging to project domain :ref:&#x60;ref_flyteidl.admin.Execution&#x60;.
[**UpdateLaunchPlan**](AdminServiceApi.md#UpdateLaunchPlan) | **Put** /api/v1/launch_plans/{id.project}/{id.domain}/{id.name}/{id.version} | Updates the status of a registered :ref:&#x60;ref_flyteidl.admin.LaunchPlan&#x60;.
[**UpdateNamedEntity**](AdminServiceApi.md#UpdateNamedEntity) | **Put** /api/v1/named_entities/{resource_type}/{id.project}/{id.domain}/{id.name} | Updates a :ref:&#x60;ref_flyteidl.admin.NamedEntity&#x60; object.
[**UpdateProject**](AdminServiceApi.md#UpdateProject) | **Put** /api/v1/projects/{id} | Updates an existing :ref:&#x60;ref_flyteidl.admin.Project&#x60;  flyteidl.admin.Project should be passed but the domains property should be empty; it will be ignored in the handler as domains cannot be updated via this API.
[**UpdateProjectAttributes**](AdminServiceApi.md#UpdateProjectAttributes) | **Put** /api/v1/project_attributes/{attributes.project} | Creates or updates custom :ref:&#x60;ref_flyteidl.admin.MatchableAttributesConfiguration&#x60; at the project level
[**UpdateProjectDomainAttributes**](AdminServiceApi.md#UpdateProjectDomainAttributes) | **Put** /api/v1/project_domain_attributes/{attributes.project}/{attributes.domain} | Creates or updates custom :ref:&#x60;ref_flyteidl.admin.MatchableAttributesConfiguration&#x60; for a project and domain.
[**UpdateWorkflowAttributes**](AdminServiceApi.md#UpdateWorkflowAttributes) | **Put** /api/v1/workflow_attributes/{attributes.project}/{attributes.domain}/{attributes.workflow} | Creates or updates custom :ref:&#x60;ref_flyteidl.admin.MatchableAttributesConfiguration&#x60; for a project, domain and workflow.


# **CreateExecution**
> AdminExecutionCreateResponse CreateExecution(ctx, body)
Triggers the creation of a :ref:`ref_flyteidl.admin.Execution`

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**AdminExecutionCreateRequest**](AdminExecutionCreateRequest.md)|  | 

### Return type

[**AdminExecutionCreateResponse**](adminExecutionCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateLaunchPlan**
> AdminLaunchPlanCreateResponse CreateLaunchPlan(ctx, body)
Create and upload a :ref:`ref_flyteidl.admin.LaunchPlan` definition

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**AdminLaunchPlanCreateRequest**](AdminLaunchPlanCreateRequest.md)|  | 

### Return type

[**AdminLaunchPlanCreateResponse**](adminLaunchPlanCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateNodeEvent**
> AdminNodeExecutionEventResponse CreateNodeEvent(ctx, body)
Indicates a :ref:`ref_flyteidl.event.NodeExecutionEvent` has occurred.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**AdminNodeExecutionEventRequest**](AdminNodeExecutionEventRequest.md)|  | 

### Return type

[**AdminNodeExecutionEventResponse**](adminNodeExecutionEventResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateTask**
> FlyteidladminTaskCreateResponse CreateTask(ctx, body)
Create and upload a :ref:`ref_flyteidl.admin.Task` definition

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**FlyteidladminTaskCreateRequest**](FlyteidladminTaskCreateRequest.md)|  | 

### Return type

[**FlyteidladminTaskCreateResponse**](flyteidladminTaskCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateTaskEvent**
> AdminTaskExecutionEventResponse CreateTaskEvent(ctx, body)
Indicates a :ref:`ref_flyteidl.event.TaskExecutionEvent` has occurred.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**AdminTaskExecutionEventRequest**](AdminTaskExecutionEventRequest.md)|  | 

### Return type

[**AdminTaskExecutionEventResponse**](adminTaskExecutionEventResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateWorkflow**
> AdminWorkflowCreateResponse CreateWorkflow(ctx, body)
Create and upload a :ref:`ref_flyteidl.admin.Workflow` definition

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**AdminWorkflowCreateRequest**](AdminWorkflowCreateRequest.md)|  | 

### Return type

[**AdminWorkflowCreateResponse**](adminWorkflowCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **CreateWorkflowEvent**
> AdminWorkflowExecutionEventResponse CreateWorkflowEvent(ctx, body)
Indicates a :ref:`ref_flyteidl.event.WorkflowExecutionEvent` has occurred.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**AdminWorkflowExecutionEventRequest**](AdminWorkflowExecutionEventRequest.md)|  | 

### Return type

[**AdminWorkflowExecutionEventResponse**](adminWorkflowExecutionEventResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DeleteProjectAttributes**
> AdminProjectAttributesDeleteResponse DeleteProjectAttributes(ctx, project, body)
Deletes custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **project** | **string**| Unique project id which this set of attributes references. +required | 
  **body** | [**AdminProjectAttributesDeleteRequest**](AdminProjectAttributesDeleteRequest.md)|  | 

### Return type

[**AdminProjectAttributesDeleteResponse**](adminProjectAttributesDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DeleteProjectDomainAttributes**
> AdminProjectDomainAttributesDeleteResponse DeleteProjectDomainAttributes(ctx, project, domain, body)
Deletes custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **project** | **string**| Unique project id which this set of attributes references. +required | 
  **domain** | **string**| Unique domain id which this set of attributes references. +required | 
  **body** | [**AdminProjectDomainAttributesDeleteRequest**](AdminProjectDomainAttributesDeleteRequest.md)|  | 

### Return type

[**AdminProjectDomainAttributesDeleteResponse**](adminProjectDomainAttributesDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DeleteWorkflowAttributes**
> AdminWorkflowAttributesDeleteResponse DeleteWorkflowAttributes(ctx, project, domain, workflow, body)
Deletes custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project, domain and workflow.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **project** | **string**| Unique project id which this set of attributes references. +required | 
  **domain** | **string**| Unique domain id which this set of attributes references. +required | 
  **workflow** | **string**| Workflow name which this set of attributes references. +required | 
  **body** | [**AdminWorkflowAttributesDeleteRequest**](AdminWorkflowAttributesDeleteRequest.md)|  | 

### Return type

[**AdminWorkflowAttributesDeleteResponse**](adminWorkflowAttributesDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetActiveLaunchPlan**
> AdminLaunchPlan GetActiveLaunchPlan(ctx, idProject, idDomain, idName)
Fetch the active version of a :ref:`ref_flyteidl.admin.LaunchPlan`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User provided value for the resource. The combination of project + domain + name uniquely identifies the resource. +optional - in certain contexts - like &#39;List API&#39;, &#39;Launch plans&#39; | 

### Return type

[**AdminLaunchPlan**](adminLaunchPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetDescriptionEntity**
> AdminDescriptionEntity GetDescriptionEntity(ctx, idResourceType, idProject, idDomain, idName, idVersion)
Fetch a :ref:`ref_flyteidl.admin.DescriptionEntity` object.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idResourceType** | **string**| Identifies the specific type of resource that this identifier corresponds to. | 
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User provided value for the resource. | 
  **idVersion** | **string**| Specific version of the resource. | 

### Return type

[**AdminDescriptionEntity**](adminDescriptionEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetExecution**
> AdminExecution GetExecution(ctx, idProject, idDomain, idName)
Fetches a :ref:`ref_flyteidl.admin.Execution`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User or system provided value for the resource. | 

### Return type

[**AdminExecution**](adminExecution.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetExecutionData**
> AdminWorkflowExecutionGetDataResponse GetExecutionData(ctx, idProject, idDomain, idName)
Fetches input and output data for a :ref:`ref_flyteidl.admin.Execution`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User or system provided value for the resource. | 

### Return type

[**AdminWorkflowExecutionGetDataResponse**](adminWorkflowExecutionGetDataResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetLaunchPlan**
> AdminLaunchPlan GetLaunchPlan(ctx, idProject, idDomain, idName, idVersion, optional)
Fetch a :ref:`ref_flyteidl.admin.LaunchPlan` definition.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User provided value for the resource. | 
  **idVersion** | **string**| Specific version of the resource. | 
 **optional** | ***GetLaunchPlanOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GetLaunchPlanOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **idResourceType** | **optional.String**| Identifies the specific type of resource that this identifier corresponds to.   - DATASET: A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects. Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects  in a similar manner to other Flyte objects | [default to UNSPECIFIED]

### Return type

[**AdminLaunchPlan**](adminLaunchPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetNamedEntity**
> AdminNamedEntity GetNamedEntity(ctx, resourceType, idProject, idDomain, idName)
Returns a :ref:`ref_flyteidl.admin.NamedEntity` object.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **resourceType** | **string**| Resource type of the metadata to get. One of Task, Workflow or LaunchPlan. +required | 
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User provided value for the resource. The combination of project + domain + name uniquely identifies the resource. +optional - in certain contexts - like &#39;List API&#39;, &#39;Launch plans&#39; | 

### Return type

[**AdminNamedEntity**](adminNamedEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetNodeExecution**
> FlyteidladminNodeExecution GetNodeExecution(ctx, idExecutionIdProject, idExecutionIdDomain, idExecutionIdName, idNodeId)
Fetches a :ref:`ref_flyteidl.admin.NodeExecution`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idExecutionIdProject** | **string**| Name of the project the resource belongs to. | 
  **idExecutionIdDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idExecutionIdName** | **string**| User or system provided value for the resource. | 
  **idNodeId** | **string**|  | 

### Return type

[**FlyteidladminNodeExecution**](flyteidladminNodeExecution.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetNodeExecutionData**
> AdminNodeExecutionGetDataResponse GetNodeExecutionData(ctx, idExecutionIdProject, idExecutionIdDomain, idExecutionIdName, idNodeId)
Fetches input and output data for a :ref:`ref_flyteidl.admin.NodeExecution`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idExecutionIdProject** | **string**| Name of the project the resource belongs to. | 
  **idExecutionIdDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idExecutionIdName** | **string**| User or system provided value for the resource. | 
  **idNodeId** | **string**|  | 

### Return type

[**AdminNodeExecutionGetDataResponse**](adminNodeExecutionGetDataResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetProjectAttributes**
> AdminProjectAttributesGetResponse GetProjectAttributes(ctx, project, optional)
Fetches custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **project** | **string**| Unique project id which this set of attributes references. +required | 
 **optional** | ***GetProjectAttributesOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GetProjectAttributesOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **resourceType** | **optional.String**| Which type of matchable attributes to return. +required.   - TASK_RESOURCE: Applies to customizable task resource requests and limits.  - CLUSTER_RESOURCE: Applies to configuring templated kubernetes cluster resources.  - EXECUTION_QUEUE: Configures task and dynamic task execution queue assignment.  - EXECUTION_CLUSTER_LABEL: Configures the K8s cluster label to be used for execution to be run  - QUALITY_OF_SERVICE_SPECIFICATION: Configures default quality of service when undefined in an execution spec.  - PLUGIN_OVERRIDE: Selects configurable plugin implementation behavior for a given task type.  - WORKFLOW_EXECUTION_CONFIG: Adds defaults for customizable workflow-execution specifications and overrides.  - CLUSTER_ASSIGNMENT: Controls how to select an available cluster on which this execution should run. | [default to TASK_RESOURCE]

### Return type

[**AdminProjectAttributesGetResponse**](adminProjectAttributesGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetProjectDomainAttributes**
> AdminProjectDomainAttributesGetResponse GetProjectDomainAttributes(ctx, project, domain, optional)
Fetches custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **project** | **string**| Unique project id which this set of attributes references. +required | 
  **domain** | **string**| Unique domain id which this set of attributes references. +required | 
 **optional** | ***GetProjectDomainAttributesOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GetProjectDomainAttributesOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **resourceType** | **optional.String**| Which type of matchable attributes to return. +required.   - TASK_RESOURCE: Applies to customizable task resource requests and limits.  - CLUSTER_RESOURCE: Applies to configuring templated kubernetes cluster resources.  - EXECUTION_QUEUE: Configures task and dynamic task execution queue assignment.  - EXECUTION_CLUSTER_LABEL: Configures the K8s cluster label to be used for execution to be run  - QUALITY_OF_SERVICE_SPECIFICATION: Configures default quality of service when undefined in an execution spec.  - PLUGIN_OVERRIDE: Selects configurable plugin implementation behavior for a given task type.  - WORKFLOW_EXECUTION_CONFIG: Adds defaults for customizable workflow-execution specifications and overrides.  - CLUSTER_ASSIGNMENT: Controls how to select an available cluster on which this execution should run. | [default to TASK_RESOURCE]

### Return type

[**AdminProjectDomainAttributesGetResponse**](adminProjectDomainAttributesGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetTask**
> AdminTask GetTask(ctx, idProject, idDomain, idName, idVersion, optional)
Fetch a :ref:`ref_flyteidl.admin.Task` definition.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User provided value for the resource. | 
  **idVersion** | **string**| Specific version of the resource. | 
 **optional** | ***GetTaskOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GetTaskOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **idResourceType** | **optional.String**| Identifies the specific type of resource that this identifier corresponds to.   - DATASET: A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects. Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects  in a similar manner to other Flyte objects | [default to UNSPECIFIED]

### Return type

[**AdminTask**](adminTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetTaskExecution**
> FlyteidladminTaskExecution GetTaskExecution(ctx, idNodeExecutionIdExecutionIdProject, idNodeExecutionIdExecutionIdDomain, idNodeExecutionIdExecutionIdName, idNodeExecutionIdNodeId, idTaskIdProject, idTaskIdDomain, idTaskIdName, idTaskIdVersion, idRetryAttempt, optional)
Fetches a :ref:`ref_flyteidl.admin.TaskExecution`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idNodeExecutionIdExecutionIdProject** | **string**| Name of the project the resource belongs to. | 
  **idNodeExecutionIdExecutionIdDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idNodeExecutionIdExecutionIdName** | **string**| User or system provided value for the resource. | 
  **idNodeExecutionIdNodeId** | **string**|  | 
  **idTaskIdProject** | **string**| Name of the project the resource belongs to. | 
  **idTaskIdDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idTaskIdName** | **string**| User provided value for the resource. | 
  **idTaskIdVersion** | **string**| Specific version of the resource. | 
  **idRetryAttempt** | **int64**|  | 
 **optional** | ***GetTaskExecutionOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GetTaskExecutionOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------









 **idTaskIdResourceType** | **optional.String**| Identifies the specific type of resource that this identifier corresponds to.   - DATASET: A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects. Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects  in a similar manner to other Flyte objects | [default to UNSPECIFIED]

### Return type

[**FlyteidladminTaskExecution**](flyteidladminTaskExecution.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetTaskExecutionData**
> AdminTaskExecutionGetDataResponse GetTaskExecutionData(ctx, idNodeExecutionIdExecutionIdProject, idNodeExecutionIdExecutionIdDomain, idNodeExecutionIdExecutionIdName, idNodeExecutionIdNodeId, idTaskIdProject, idTaskIdDomain, idTaskIdName, idTaskIdVersion, idRetryAttempt, optional)
Fetches input and output data for a :ref:`ref_flyteidl.admin.TaskExecution`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idNodeExecutionIdExecutionIdProject** | **string**| Name of the project the resource belongs to. | 
  **idNodeExecutionIdExecutionIdDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idNodeExecutionIdExecutionIdName** | **string**| User or system provided value for the resource. | 
  **idNodeExecutionIdNodeId** | **string**|  | 
  **idTaskIdProject** | **string**| Name of the project the resource belongs to. | 
  **idTaskIdDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idTaskIdName** | **string**| User provided value for the resource. | 
  **idTaskIdVersion** | **string**| Specific version of the resource. | 
  **idRetryAttempt** | **int64**|  | 
 **optional** | ***GetTaskExecutionDataOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GetTaskExecutionDataOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------









 **idTaskIdResourceType** | **optional.String**| Identifies the specific type of resource that this identifier corresponds to.   - DATASET: A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects. Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects  in a similar manner to other Flyte objects | [default to UNSPECIFIED]

### Return type

[**AdminTaskExecutionGetDataResponse**](adminTaskExecutionGetDataResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetVersion**
> AdminGetVersionResponse GetVersion(ctx, )


### Required Parameters
This endpoint does not need any parameter.

### Return type

[**AdminGetVersionResponse**](adminGetVersionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetWorkflow**
> AdminWorkflow GetWorkflow(ctx, idProject, idDomain, idName, idVersion, optional)
Fetch a :ref:`ref_flyteidl.admin.Workflow` definition.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User provided value for the resource. | 
  **idVersion** | **string**| Specific version of the resource. | 
 **optional** | ***GetWorkflowOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GetWorkflowOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **idResourceType** | **optional.String**| Identifies the specific type of resource that this identifier corresponds to.   - DATASET: A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects. Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects  in a similar manner to other Flyte objects | [default to UNSPECIFIED]

### Return type

[**AdminWorkflow**](adminWorkflow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetWorkflowAttributes**
> AdminWorkflowAttributesGetResponse GetWorkflowAttributes(ctx, project, domain, workflow, optional)
Fetches custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project, domain and workflow.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **project** | **string**| Unique project id which this set of attributes references. +required | 
  **domain** | **string**| Unique domain id which this set of attributes references. +required | 
  **workflow** | **string**| Workflow name which this set of attributes references. +required | 
 **optional** | ***GetWorkflowAttributesOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GetWorkflowAttributesOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **resourceType** | **optional.String**| Which type of matchable attributes to return. +required.   - TASK_RESOURCE: Applies to customizable task resource requests and limits.  - CLUSTER_RESOURCE: Applies to configuring templated kubernetes cluster resources.  - EXECUTION_QUEUE: Configures task and dynamic task execution queue assignment.  - EXECUTION_CLUSTER_LABEL: Configures the K8s cluster label to be used for execution to be run  - QUALITY_OF_SERVICE_SPECIFICATION: Configures default quality of service when undefined in an execution spec.  - PLUGIN_OVERRIDE: Selects configurable plugin implementation behavior for a given task type.  - WORKFLOW_EXECUTION_CONFIG: Adds defaults for customizable workflow-execution specifications and overrides.  - CLUSTER_ASSIGNMENT: Controls how to select an available cluster on which this execution should run. | [default to TASK_RESOURCE]

### Return type

[**AdminWorkflowAttributesGetResponse**](adminWorkflowAttributesGetResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListActiveLaunchPlans**
> AdminLaunchPlanList ListActiveLaunchPlans(ctx, project, domain, optional)
List active versions of :ref:`ref_flyteidl.admin.LaunchPlan`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **project** | **string**| Name of the project that contains the identifiers. +required. | 
  **domain** | **string**| Name of the domain the identifiers belongs to within the project. +required. | 
 **optional** | ***ListActiveLaunchPlansOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListActiveLaunchPlansOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, the server-provided token can be used to fetch the next page in a query. +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]

### Return type

[**AdminLaunchPlanList**](adminLaunchPlanList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListDescriptionEntities**
> AdminDescriptionEntityList ListDescriptionEntities(ctx, resourceType, idProject, idDomain, idName, optional)
Fetch a list of :ref:`ref_flyteidl.admin.DescriptionEntity` definitions.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **resourceType** | **string**| Identifies the specific type of resource that this identifier corresponds to. | 
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User provided value for the resource. The combination of project + domain + name uniquely identifies the resource. +optional - in certain contexts - like &#39;List API&#39;, &#39;Launch plans&#39; | 
 **optional** | ***ListDescriptionEntitiesOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListDescriptionEntitiesOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, the server-provided token can be used to fetch the next page in a query. +optional. | 
 **filters** | **optional.String**| Indicates a list of filters passed as string. More info on constructing filters : &lt;Link&gt; +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]

### Return type

[**AdminDescriptionEntityList**](adminDescriptionEntityList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListDescriptionEntities2**
> AdminDescriptionEntityList ListDescriptionEntities2(ctx, resourceType, idProject, idDomain, optional)
Fetch a list of :ref:`ref_flyteidl.admin.DescriptionEntity` definitions.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **resourceType** | **string**| Identifies the specific type of resource that this identifier corresponds to. | 
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
 **optional** | ***ListDescriptionEntities2Opts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListDescriptionEntities2Opts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **idName** | **optional.String**| User provided value for the resource. The combination of project + domain + name uniquely identifies the resource. +optional - in certain contexts - like &#39;List API&#39;, &#39;Launch plans&#39;. | 
 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, the server-provided token can be used to fetch the next page in a query. +optional. | 
 **filters** | **optional.String**| Indicates a list of filters passed as string. More info on constructing filters : &lt;Link&gt; +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]

### Return type

[**AdminDescriptionEntityList**](adminDescriptionEntityList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListExecutions**
> AdminExecutionList ListExecutions(ctx, idProject, idDomain, optional)
Fetch a list of :ref:`ref_flyteidl.admin.Execution`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
 **optional** | ***ListExecutionsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListExecutionsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **idName** | **optional.String**| User provided value for the resource. The combination of project + domain + name uniquely identifies the resource. +optional - in certain contexts - like &#39;List API&#39;, &#39;Launch plans&#39;. | 
 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, this server-provided token can be used to fetch the next page in a query. +optional. | 
 **filters** | **optional.String**| Indicates a list of filters passed as string. More info on constructing filters : &lt;Link&gt; +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]

### Return type

[**AdminExecutionList**](adminExecutionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListLaunchPlanIds**
> AdminNamedEntityIdentifierList ListLaunchPlanIds(ctx, project, domain, optional)
Fetch a list of :ref:`ref_flyteidl.admin.NamedEntityIdentifier` of launch plan objects.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **project** | **string**| Name of the project that contains the identifiers. +required | 
  **domain** | **string**| Name of the domain the identifiers belongs to within the project. +required | 
 **optional** | ***ListLaunchPlanIdsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListLaunchPlanIdsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, the server-provided token can be used to fetch the next page in a query. +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]
 **filters** | **optional.String**| Indicates a list of filters passed as string. +optional. | 

### Return type

[**AdminNamedEntityIdentifierList**](adminNamedEntityIdentifierList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListLaunchPlans**
> AdminLaunchPlanList ListLaunchPlans(ctx, idProject, idDomain, idName, optional)
Fetch a list of :ref:`ref_flyteidl.admin.LaunchPlan` definitions.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User provided value for the resource. The combination of project + domain + name uniquely identifies the resource. +optional - in certain contexts - like &#39;List API&#39;, &#39;Launch plans&#39; | 
 **optional** | ***ListLaunchPlansOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListLaunchPlansOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, this server-provided token can be used to fetch the next page in a query. +optional. | 
 **filters** | **optional.String**| Indicates a list of filters passed as string. More info on constructing filters : &lt;Link&gt; +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]

### Return type

[**AdminLaunchPlanList**](adminLaunchPlanList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListLaunchPlans2**
> AdminLaunchPlanList ListLaunchPlans2(ctx, idProject, idDomain, optional)
Fetch a list of :ref:`ref_flyteidl.admin.LaunchPlan` definitions.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
 **optional** | ***ListLaunchPlans2Opts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListLaunchPlans2Opts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **idName** | **optional.String**| User provided value for the resource. The combination of project + domain + name uniquely identifies the resource. +optional - in certain contexts - like &#39;List API&#39;, &#39;Launch plans&#39;. | 
 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, this server-provided token can be used to fetch the next page in a query. +optional. | 
 **filters** | **optional.String**| Indicates a list of filters passed as string. More info on constructing filters : &lt;Link&gt; +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]

### Return type

[**AdminLaunchPlanList**](adminLaunchPlanList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListMatchableAttributes**
> AdminListMatchableAttributesResponse ListMatchableAttributes(ctx, optional)
Lists custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a specific resource type.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ListMatchableAttributesOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListMatchableAttributesOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceType** | **optional.String**| +required.   - TASK_RESOURCE: Applies to customizable task resource requests and limits.  - CLUSTER_RESOURCE: Applies to configuring templated kubernetes cluster resources.  - EXECUTION_QUEUE: Configures task and dynamic task execution queue assignment.  - EXECUTION_CLUSTER_LABEL: Configures the K8s cluster label to be used for execution to be run  - QUALITY_OF_SERVICE_SPECIFICATION: Configures default quality of service when undefined in an execution spec.  - PLUGIN_OVERRIDE: Selects configurable plugin implementation behavior for a given task type.  - WORKFLOW_EXECUTION_CONFIG: Adds defaults for customizable workflow-execution specifications and overrides.  - CLUSTER_ASSIGNMENT: Controls how to select an available cluster on which this execution should run. | [default to TASK_RESOURCE]

### Return type

[**AdminListMatchableAttributesResponse**](adminListMatchableAttributesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListNamedEntities**
> AdminNamedEntityList ListNamedEntities(ctx, resourceType, project, domain, optional)
Returns a list of :ref:`ref_flyteidl.admin.NamedEntity` objects.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **resourceType** | **string**| Resource type of the metadata to query. One of Task, Workflow or LaunchPlan. +required | 
  **project** | **string**| Name of the project that contains the identifiers. +required | 
  **domain** | **string**| Name of the domain the identifiers belongs to within the project. | 
 **optional** | ***ListNamedEntitiesOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListNamedEntitiesOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **limit** | **optional.Int64**| Indicates the number of resources to be returned. | 
 **token** | **optional.String**| In the case of multiple pages of results, the server-provided token can be used to fetch the next page in a query. +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]
 **filters** | **optional.String**| Indicates a list of filters passed as string. +optional. | 

### Return type

[**AdminNamedEntityList**](adminNamedEntityList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListNodeExecutions**
> AdminNodeExecutionList ListNodeExecutions(ctx, workflowExecutionIdProject, workflowExecutionIdDomain, workflowExecutionIdName, optional)
Fetch a list of :ref:`ref_flyteidl.admin.NodeExecution`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **workflowExecutionIdProject** | **string**| Name of the project the resource belongs to. | 
  **workflowExecutionIdDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **workflowExecutionIdName** | **string**| User or system provided value for the resource. | 
 **optional** | ***ListNodeExecutionsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListNodeExecutionsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**|  | 
 **filters** | **optional.String**| Indicates a list of filters passed as string. More info on constructing filters : &lt;Link&gt; +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]
 **uniqueParentId** | **optional.String**| Unique identifier of the parent node in the execution +optional. | 

### Return type

[**AdminNodeExecutionList**](adminNodeExecutionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListNodeExecutionsForTask**
> AdminNodeExecutionList ListNodeExecutionsForTask(ctx, taskExecutionIdNodeExecutionIdExecutionIdProject, taskExecutionIdNodeExecutionIdExecutionIdDomain, taskExecutionIdNodeExecutionIdExecutionIdName, taskExecutionIdNodeExecutionIdNodeId, taskExecutionIdTaskIdProject, taskExecutionIdTaskIdDomain, taskExecutionIdTaskIdName, taskExecutionIdTaskIdVersion, taskExecutionIdRetryAttempt, optional)
Fetch a list of :ref:`ref_flyteidl.admin.NodeExecution` launched by the reference :ref:`ref_flyteidl.admin.TaskExecution`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **taskExecutionIdNodeExecutionIdExecutionIdProject** | **string**| Name of the project the resource belongs to. | 
  **taskExecutionIdNodeExecutionIdExecutionIdDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **taskExecutionIdNodeExecutionIdExecutionIdName** | **string**| User or system provided value for the resource. | 
  **taskExecutionIdNodeExecutionIdNodeId** | **string**|  | 
  **taskExecutionIdTaskIdProject** | **string**| Name of the project the resource belongs to. | 
  **taskExecutionIdTaskIdDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **taskExecutionIdTaskIdName** | **string**| User provided value for the resource. | 
  **taskExecutionIdTaskIdVersion** | **string**| Specific version of the resource. | 
  **taskExecutionIdRetryAttempt** | **int64**|  | 
 **optional** | ***ListNodeExecutionsForTaskOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListNodeExecutionsForTaskOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------









 **taskExecutionIdTaskIdResourceType** | **optional.String**| Identifies the specific type of resource that this identifier corresponds to.   - DATASET: A dataset represents an entity modeled in Flyte DataCatalog. A Dataset is also a versioned entity and can be a compilation of multiple individual objects. Eventually all Catalog objects should be modeled similar to Flyte Objects. The Dataset entities makes it possible for the UI  and CLI to act on the objects  in a similar manner to other Flyte objects | [default to UNSPECIFIED]
 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, the, server-provided token can be used to fetch the next page in a query. +optional. | 
 **filters** | **optional.String**| Indicates a list of filters passed as string. More info on constructing filters : &lt;Link&gt; +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]

### Return type

[**AdminNodeExecutionList**](adminNodeExecutionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListProjects**
> AdminProjects ListProjects(ctx, optional)
Fetches a list of :ref:`ref_flyteidl.admin.Project`

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ListProjectsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListProjectsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **optional.Int64**| Indicates the number of projects to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, this server-provided token can be used to fetch the next page in a query. +optional. | 
 **filters** | **optional.String**| Indicates a list of filters passed as string. More info on constructing filters : &lt;Link&gt; +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]

### Return type

[**AdminProjects**](adminProjects.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListTaskExecutions**
> AdminTaskExecutionList ListTaskExecutions(ctx, nodeExecutionIdExecutionIdProject, nodeExecutionIdExecutionIdDomain, nodeExecutionIdExecutionIdName, nodeExecutionIdNodeId, optional)
Fetches a list of :ref:`ref_flyteidl.admin.TaskExecution`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **nodeExecutionIdExecutionIdProject** | **string**| Name of the project the resource belongs to. | 
  **nodeExecutionIdExecutionIdDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **nodeExecutionIdExecutionIdName** | **string**| User or system provided value for the resource. | 
  **nodeExecutionIdNodeId** | **string**|  | 
 **optional** | ***ListTaskExecutionsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListTaskExecutionsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, the server-provided token can be used to fetch the next page in a query. +optional. | 
 **filters** | **optional.String**| Indicates a list of filters passed as string. More info on constructing filters : &lt;Link&gt; +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]

### Return type

[**AdminTaskExecutionList**](adminTaskExecutionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListTaskIds**
> AdminNamedEntityIdentifierList ListTaskIds(ctx, project, domain, optional)
Fetch a list of :ref:`ref_flyteidl.admin.NamedEntityIdentifier` of task objects.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **project** | **string**| Name of the project that contains the identifiers. +required | 
  **domain** | **string**| Name of the domain the identifiers belongs to within the project. +required | 
 **optional** | ***ListTaskIdsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListTaskIdsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, the server-provided token can be used to fetch the next page in a query. +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]
 **filters** | **optional.String**| Indicates a list of filters passed as string. +optional. | 

### Return type

[**AdminNamedEntityIdentifierList**](adminNamedEntityIdentifierList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListTasks**
> AdminTaskList ListTasks(ctx, idProject, idDomain, idName, optional)
Fetch a list of :ref:`ref_flyteidl.admin.Task` definitions.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User provided value for the resource. The combination of project + domain + name uniquely identifies the resource. +optional - in certain contexts - like &#39;List API&#39;, &#39;Launch plans&#39; | 
 **optional** | ***ListTasksOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListTasksOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, this server-provided token can be used to fetch the next page in a query. +optional. | 
 **filters** | **optional.String**| Indicates a list of filters passed as string. More info on constructing filters : &lt;Link&gt; +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]

### Return type

[**AdminTaskList**](adminTaskList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListTasks2**
> AdminTaskList ListTasks2(ctx, idProject, idDomain, optional)
Fetch a list of :ref:`ref_flyteidl.admin.Task` definitions.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
 **optional** | ***ListTasks2Opts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListTasks2Opts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **idName** | **optional.String**| User provided value for the resource. The combination of project + domain + name uniquely identifies the resource. +optional - in certain contexts - like &#39;List API&#39;, &#39;Launch plans&#39;. | 
 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, this server-provided token can be used to fetch the next page in a query. +optional. | 
 **filters** | **optional.String**| Indicates a list of filters passed as string. More info on constructing filters : &lt;Link&gt; +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]

### Return type

[**AdminTaskList**](adminTaskList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListWorkflowIds**
> AdminNamedEntityIdentifierList ListWorkflowIds(ctx, project, domain, optional)
Fetch a list of :ref:`ref_flyteidl.admin.NamedEntityIdentifier` of workflow objects.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **project** | **string**| Name of the project that contains the identifiers. +required | 
  **domain** | **string**| Name of the domain the identifiers belongs to within the project. +required | 
 **optional** | ***ListWorkflowIdsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListWorkflowIdsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, the server-provided token can be used to fetch the next page in a query. +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]
 **filters** | **optional.String**| Indicates a list of filters passed as string. +optional. | 

### Return type

[**AdminNamedEntityIdentifierList**](adminNamedEntityIdentifierList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListWorkflows**
> AdminWorkflowList ListWorkflows(ctx, idProject, idDomain, idName, optional)
Fetch a list of :ref:`ref_flyteidl.admin.Workflow` definitions.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User provided value for the resource. The combination of project + domain + name uniquely identifies the resource. +optional - in certain contexts - like &#39;List API&#39;, &#39;Launch plans&#39; | 
 **optional** | ***ListWorkflowsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListWorkflowsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, this server-provided token can be used to fetch the next page in a query. +optional. | 
 **filters** | **optional.String**| Indicates a list of filters passed as string. More info on constructing filters : &lt;Link&gt; +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]

### Return type

[**AdminWorkflowList**](adminWorkflowList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ListWorkflows2**
> AdminWorkflowList ListWorkflows2(ctx, idProject, idDomain, optional)
Fetch a list of :ref:`ref_flyteidl.admin.Workflow` definitions.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
 **optional** | ***ListWorkflows2Opts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListWorkflows2Opts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **idName** | **optional.String**| User provided value for the resource. The combination of project + domain + name uniquely identifies the resource. +optional - in certain contexts - like &#39;List API&#39;, &#39;Launch plans&#39;. | 
 **limit** | **optional.Int64**| Indicates the number of resources to be returned. +required. | 
 **token** | **optional.String**| In the case of multiple pages of results, this server-provided token can be used to fetch the next page in a query. +optional. | 
 **filters** | **optional.String**| Indicates a list of filters passed as string. More info on constructing filters : &lt;Link&gt; +optional. | 
 **sortByKey** | **optional.String**| Indicates an attribute to sort the response values. +required. | 
 **sortByDirection** | **optional.String**| Indicates the direction to apply sort key for response values. +optional.   - DESCENDING: By default, fields are sorted in descending order. | [default to DESCENDING]

### Return type

[**AdminWorkflowList**](adminWorkflowList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RecoverExecution**
> AdminExecutionCreateResponse RecoverExecution(ctx, body)
Recreates a previously-run workflow execution that will only start executing from the last known failure point. In Recover mode, users cannot change any input parameters or update the version of the execution. This is extremely useful to recover from system errors and byzantine faults like - Loss of K8s cluster, bugs in platform or instability, machine failures, downstream system failures (downstream services), or simply to recover executions that failed because of retry exhaustion and should complete if tried again. See :ref:`ref_flyteidl.admin.ExecutionRecoverRequest` for more details.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**AdminExecutionRecoverRequest**](AdminExecutionRecoverRequest.md)|  | 

### Return type

[**AdminExecutionCreateResponse**](adminExecutionCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RegisterProject**
> AdminProjectRegisterResponse RegisterProject(ctx, body)
Registers a :ref:`ref_flyteidl.admin.Project` with the Flyte deployment.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**AdminProjectRegisterRequest**](AdminProjectRegisterRequest.md)|  | 

### Return type

[**AdminProjectRegisterResponse**](adminProjectRegisterResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **RelaunchExecution**
> AdminExecutionCreateResponse RelaunchExecution(ctx, body)
Triggers the creation of an identical :ref:`ref_flyteidl.admin.Execution`

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **body** | [**AdminExecutionRelaunchRequest**](AdminExecutionRelaunchRequest.md)|  | 

### Return type

[**AdminExecutionCreateResponse**](adminExecutionCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **TerminateExecution**
> AdminExecutionTerminateResponse TerminateExecution(ctx, idProject, idDomain, idName, body)
Terminates an in-progress :ref:`ref_flyteidl.admin.Execution`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User or system provided value for the resource. | 
  **body** | [**AdminExecutionTerminateRequest**](AdminExecutionTerminateRequest.md)|  | 

### Return type

[**AdminExecutionTerminateResponse**](adminExecutionTerminateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UpdateExecution**
> AdminExecutionUpdateResponse UpdateExecution(ctx, idProject, idDomain, idName, body)
Update execution belonging to project domain :ref:`ref_flyteidl.admin.Execution`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User or system provided value for the resource. | 
  **body** | [**AdminExecutionUpdateRequest**](AdminExecutionUpdateRequest.md)|  | 

### Return type

[**AdminExecutionUpdateResponse**](adminExecutionUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UpdateLaunchPlan**
> AdminLaunchPlanUpdateResponse UpdateLaunchPlan(ctx, idProject, idDomain, idName, idVersion, body)
Updates the status of a registered :ref:`ref_flyteidl.admin.LaunchPlan`.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User provided value for the resource. | 
  **idVersion** | **string**| Specific version of the resource. | 
  **body** | [**AdminLaunchPlanUpdateRequest**](AdminLaunchPlanUpdateRequest.md)|  | 

### Return type

[**AdminLaunchPlanUpdateResponse**](adminLaunchPlanUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UpdateNamedEntity**
> AdminNamedEntityUpdateResponse UpdateNamedEntity(ctx, resourceType, idProject, idDomain, idName, body)
Updates a :ref:`ref_flyteidl.admin.NamedEntity` object.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **resourceType** | **string**| Resource type of the metadata to update +required | 
  **idProject** | **string**| Name of the project the resource belongs to. | 
  **idDomain** | **string**| Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project. | 
  **idName** | **string**| User provided value for the resource. The combination of project + domain + name uniquely identifies the resource. +optional - in certain contexts - like &#39;List API&#39;, &#39;Launch plans&#39; | 
  **body** | [**AdminNamedEntityUpdateRequest**](AdminNamedEntityUpdateRequest.md)|  | 

### Return type

[**AdminNamedEntityUpdateResponse**](adminNamedEntityUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UpdateProject**
> AdminProjectUpdateResponse UpdateProject(ctx, id, body)
Updates an existing :ref:`ref_flyteidl.admin.Project`  flyteidl.admin.Project should be passed but the domains property should be empty; it will be ignored in the handler as domains cannot be updated via this API.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **id** | **string**| Globally unique project name. | 
  **body** | [**AdminProject**](AdminProject.md)|  | 

### Return type

[**AdminProjectUpdateResponse**](adminProjectUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UpdateProjectAttributes**
> AdminProjectAttributesUpdateResponse UpdateProjectAttributes(ctx, attributesProject, body)
Creates or updates custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` at the project level

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **attributesProject** | **string**| Unique project id for which this set of attributes will be applied. | 
  **body** | [**AdminProjectAttributesUpdateRequest**](AdminProjectAttributesUpdateRequest.md)|  | 

### Return type

[**AdminProjectAttributesUpdateResponse**](adminProjectAttributesUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UpdateProjectDomainAttributes**
> AdminProjectDomainAttributesUpdateResponse UpdateProjectDomainAttributes(ctx, attributesProject, attributesDomain, body)
Creates or updates custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **attributesProject** | **string**| Unique project id for which this set of attributes will be applied. | 
  **attributesDomain** | **string**| Unique domain id for which this set of attributes will be applied. | 
  **body** | [**AdminProjectDomainAttributesUpdateRequest**](AdminProjectDomainAttributesUpdateRequest.md)|  | 

### Return type

[**AdminProjectDomainAttributesUpdateResponse**](adminProjectDomainAttributesUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UpdateWorkflowAttributes**
> AdminWorkflowAttributesUpdateResponse UpdateWorkflowAttributes(ctx, attributesProject, attributesDomain, attributesWorkflow, body)
Creates or updates custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project, domain and workflow.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **attributesProject** | **string**| Unique project id for which this set of attributes will be applied. | 
  **attributesDomain** | **string**| Unique domain id for which this set of attributes will be applied. | 
  **attributesWorkflow** | **string**| Workflow name for which this set of attributes will be applied. | 
  **body** | [**AdminWorkflowAttributesUpdateRequest**](AdminWorkflowAttributesUpdateRequest.md)|  | 

### Return type

[**AdminWorkflowAttributesUpdateResponse**](adminWorkflowAttributesUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/service/admin.proto

package flyteidl.service;

public final class Admin {
  private Admin() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\034flyteidl/service/admin.proto\022\020flyteidl" +
      ".service\032\034google/api/annotations.proto\032\034" +
      "flyteidl/admin/project.proto\032.flyteidl/a" +
      "dmin/project_domain_attributes.proto\032\031fl" +
      "yteidl/admin/task.proto\032\035flyteidl/admin/" +
      "workflow.proto\032(flyteidl/admin/workflow_" +
      "attributes.proto\032 flyteidl/admin/launch_" +
      "plan.proto\032\032flyteidl/admin/event.proto\032\036" +
      "flyteidl/admin/execution.proto\032\'flyteidl" +
      "/admin/matchable_resource.proto\032#flyteid" +
      "l/admin/node_execution.proto\032#flyteidl/a" +
      "dmin/task_execution.proto\032\034flyteidl/admi" +
      "n/version.proto\032\033flyteidl/admin/common.p" +
      "roto\032\'flyteidl/admin/description_entity." +
      "proto\032,protoc-gen-swagger/options/annota" +
      "tions.proto2\207m\n\014AdminService\022\305\002\n\nCreateT" +
      "ask\022!.flyteidl.admin.TaskCreateRequest\032\"" +
      ".flyteidl.admin.TaskCreateResponse\"\357\001\202\323\344" +
      "\223\002\022\"\r/api/v1/tasks:\001*\222A\323\001\032&Create and re" +
      "gister a task definition.JB\n\003400\022;\n9Retu" +
      "rned for bad request that may have faile" +
      "d validation.Je\n\003409\022^\n\\Returned for a r" +
      "equest that references an identical enti" +
      "ty that has already been registered.\022\262\001\n" +
      "\007GetTask\022 .flyteidl.admin.ObjectGetReque" +
      "st\032\024.flyteidl.admin.Task\"o\202\323\344\223\002?\022=/api/v" +
      "1/tasks/{id.project}/{id.domain}/{id.nam" +
      "e}/{id.version}\222A\'\032%Retrieve an existing" +
      " task definition.\022\336\001\n\013ListTaskIds\0220.flyt" +
      "eidl.admin.NamedEntityIdentifierListRequ" +
      "est\032).flyteidl.admin.NamedEntityIdentifi" +
      "erList\"r\202\323\344\223\002%\022#/api/v1/task_ids/{projec" +
      "t}/{domain}\222AD\032BFetch existing task defi" +
      "nition identifiers matching input filter" +
      "s.\022\353\001\n\tListTasks\022#.flyteidl.admin.Resour" +
      "ceListRequest\032\030.flyteidl.admin.TaskList\"" +
      "\236\001\202\323\344\223\002\\\0220/api/v1/tasks/{id.project}/{id" +
      ".domain}/{id.name}Z(\022&/api/v1/tasks/{id." +
      "project}/{id.domain}\222A9\0327Fetch existing " +
      "task definitions matching input filters." +
      "\022\331\002\n\016CreateWorkflow\022%.flyteidl.admin.Wor" +
      "kflowCreateRequest\032&.flyteidl.admin.Work" +
      "flowCreateResponse\"\367\001\202\323\344\223\002\026\"\021/api/v1/wor" +
      "kflows:\001*\222A\327\001\032*Create and register a wor" +
      "kflow definition.JB\n\003400\022;\n9Returned for" +
      " bad request that may have failed valida" +
      "tion.Je\n\003409\022^\n\\Returned for a request t" +
      "hat references an identical entity that " +
      "has already been registered.\022\302\001\n\013GetWork" +
      "flow\022 .flyteidl.admin.ObjectGetRequest\032\030" +
      ".flyteidl.admin.Workflow\"w\202\323\344\223\002C\022A/api/v" +
      "1/workflows/{id.project}/{id.domain}/{id" +
      ".name}/{id.version}\222A+\032)Retrieve an exis" +
      "ting workflow definition.\022\355\001\n\017ListWorkfl" +
      "owIds\0220.flyteidl.admin.NamedEntityIdenti" +
      "fierListRequest\032).flyteidl.admin.NamedEn" +
      "tityIdentifierList\"}\202\323\344\223\002)\022\'/api/v1/work" +
      "flow_ids/{project}/{domain}\222AK\032IFetch an" +
      " existing workflow definition identifier" +
      "s matching input filters.\022\377\001\n\rListWorkfl" +
      "ows\022#.flyteidl.admin.ResourceListRequest" +
      "\032\034.flyteidl.admin.WorkflowList\"\252\001\202\323\344\223\002d\022" +
      "4/api/v1/workflows/{id.project}/{id.doma" +
      "in}/{id.name}Z,\022*/api/v1/workflows/{id.p" +
      "roject}/{id.domain}\222A=\032;Fetch existing w" +
      "orkflow definitions matching input filte" +
      "rs.\022\345\002\n\020CreateLaunchPlan\022\'.flyteidl.admi" +
      "n.LaunchPlanCreateRequest\032(.flyteidl.adm" +
      "in.LaunchPlanCreateResponse\"\375\001\202\323\344\223\002\031\"\024/a" +
      "pi/v1/launch_plans:\001*\222A\332\001\032-Create and re" +
      "gister a launch plan definition.JB\n\003400\022" +
      ";\n9Returned for bad request that may hav" +
      "e failed validation.Je\n\003409\022^\n\\Returned " +
      "for a request that references an identic" +
      "al entity that has already been register" +
      "ed.\022\314\001\n\rGetLaunchPlan\022 .flyteidl.admin.O" +
      "bjectGetRequest\032\032.flyteidl.admin.LaunchP" +
      "lan\"}\202\323\344\223\002F\022D/api/v1/launch_plans/{id.pr" +
      "oject}/{id.domain}/{id.name}/{id.version" +
      "}\222A.\032,Retrieve an existing launch plan d" +
      "efinition.\022\363\001\n\023GetActiveLaunchPlan\022\'.fly" +
      "teidl.admin.ActiveLaunchPlanRequest\032\032.fl" +
      "yteidl.admin.LaunchPlan\"\226\001\202\323\344\223\002@\022>/api/v" +
      "1/active_launch_plans/{id.project}/{id.d" +
      "omain}/{id.name}\222AM\032KRetrieve the active" +
      " launch plan version specified by input " +
      "request filters.\022\353\001\n\025ListActiveLaunchPla" +
      "ns\022+.flyteidl.admin.ActiveLaunchPlanList" +
      "Request\032\036.flyteidl.admin.LaunchPlanList\"" +
      "\204\001\202\323\344\223\0020\022./api/v1/active_launch_plans/{p" +
      "roject}/{domain}\222AK\032IFetch the active la" +
      "unch plan versions specified by input re" +
      "quest filters.\022\363\001\n\021ListLaunchPlanIds\0220.f" +
      "lyteidl.admin.NamedEntityIdentifierListR" +
      "equest\032).flyteidl.admin.NamedEntityIdent" +
      "ifierList\"\200\001\202\323\344\223\002,\022*/api/v1/launch_plan_" +
      "ids/{project}/{domain}\222AK\032IFetch existin" +
      "g launch plan definition identifiers mat" +
      "ching input filters.\022\214\002\n\017ListLaunchPlans" +
      "\022#.flyteidl.admin.ResourceListRequest\032\036." +
      "flyteidl.admin.LaunchPlanList\"\263\001\202\323\344\223\002j\0227" +
      "/api/v1/launch_plans/{id.project}/{id.do" +
      "main}/{id.name}Z/\022-/api/v1/launch_plans/" +
      "{id.project}/{id.domain}\222A@\032>Fetch exist" +
      "ing launch plan definitions matching inp" +
      "ut filters.\022\300\006\n\020UpdateLaunchPlan\022\'.flyte" +
      "idl.admin.LaunchPlanUpdateRequest\032(.flyt" +
      "eidl.admin.LaunchPlanUpdateResponse\"\330\005\202\323" +
      "\344\223\002I\032D/api/v1/launch_plans/{id.project}/" +
      "{id.domain}/{id.name}/{id.version}:\001*\222A\205" +
      "\005\032\202\005Update the status of an existing lau" +
      "nch plan definition. At most one launch " +
      "plan version for a given {project, domai" +
      "n, name} can be active at a time. If thi" +
      "s call sets a launch plan to active and " +
      "existing version is already active, the " +
      "result of this call will be that the for" +
      "merly active launch plan will be made in" +
      "active and specified launch plan in this" +
      " request will be made active. In the eve" +
      "nt that the formerly active launch plan " +
      "had a schedule associated it with it, th" +
      "is schedule will be disabled. If the ref" +
      "erence launch plan in this request is be" +
      "ing set to active and has a schedule ass" +
      "ociated with it, the schedule will be en" +
      "abled.\022\242\001\n\017CreateExecution\022&.flyteidl.ad" +
      "min.ExecutionCreateRequest\032\'.flyteidl.ad" +
      "min.ExecutionCreateResponse\">\202\323\344\223\002\027\"\022/ap" +
      "i/v1/executions:\001*\222A\036\032\034Create a workflow" +
      " execution.\022\261\001\n\021RelaunchExecution\022(.flyt" +
      "eidl.admin.ExecutionRelaunchRequest\032\'.fl" +
      "yteidl.admin.ExecutionCreateResponse\"I\202\323" +
      "\344\223\002 \"\033/api/v1/executions/relaunch:\001*\222A \032" +
      "\036Relaunch a workflow execution.\022\235\005\n\020Reco" +
      "verExecution\022\'.flyteidl.admin.ExecutionR" +
      "ecoverRequest\032\'.flyteidl.admin.Execution" +
      "CreateResponse\"\266\004\202\323\344\223\002\037\"\032/api/v1/executi" +
      "ons/recover:\001*\222A\215\004\032\212\004Recreates a previou" +
      "sly-run workflow execution that will onl" +
      "y start executing from the last known fa" +
      "ilure point. In Recover mode, users cann" +
      "ot change any input parameters or update" +
      " the version of the execution. This is e" +
      "xtremely useful to recover from system e" +
      "rrors and byzantine faults like - Loss o" +
      "f K8s cluster, bugs in platform or insta" +
      "bility, machine failures, downstream sys" +
      "tem failures (downstream services), or s" +
      "imply to recover executions that failed " +
      "because of retry exhaustion and should c" +
      "omplete if tried again.\022\302\001\n\014GetExecution" +
      "\022+.flyteidl.admin.WorkflowExecutionGetRe" +
      "quest\032\031.flyteidl.admin.Execution\"j\202\323\344\223\0027" +
      "\0225/api/v1/executions/{id.project}/{id.do" +
      "main}/{id.name}\222A*\032(Retrieve an existing" +
      " workflow execution.\022\326\001\n\017UpdateExecution" +
      "\022&.flyteidl.admin.ExecutionUpdateRequest" +
      "\032\'.flyteidl.admin.ExecutionUpdateRespons" +
      "e\"r\202\323\344\223\002:\0325/api/v1/executions/{id.projec" +
      "t}/{id.domain}/{id.name}:\001*\222A/\032-Update e" +
      "xecution belonging to project domain.\022\202\002" +
      "\n\020GetExecutionData\022/.flyteidl.admin.Work" +
      "flowExecutionGetDataRequest\0320.flyteidl.a" +
      "dmin.WorkflowExecutionGetDataResponse\"\212\001" +
      "\202\323\344\223\002<\022:/api/v1/data/executions/{id.proj" +
      "ect}/{id.domain}/{id.name}\222AE\032CRetrieve " +
      "input and output data from an existing w" +
      "orkflow execution.\022\310\001\n\016ListExecutions\022#." +
      "flyteidl.admin.ResourceListRequest\032\035.fly" +
      "teidl.admin.ExecutionList\"r\202\323\344\223\002-\022+/api/" +
      "v1/executions/{id.project}/{id.domain}\222A" +
      "<\032:Fetch existing workflow executions ma" +
      "tching input filters.\022\364\001\n\022TerminateExecu" +
      "tion\022).flyteidl.admin.ExecutionTerminate" +
      "Request\032*.flyteidl.admin.ExecutionTermin" +
      "ateResponse\"\206\001\202\323\344\223\002:*5/api/v1/executions" +
      "/{id.project}/{id.domain}/{id.name}:\001*\222A" +
      "C\032ATerminate the active workflow executi" +
      "on specified in the request.\022\374\001\n\020GetNode" +
      "Execution\022\'.flyteidl.admin.NodeExecution" +
      "GetRequest\032\035.flyteidl.admin.NodeExecutio" +
      "n\"\237\001\202\323\344\223\002p\022n/api/v1/node_executions/{id." +
      "execution_id.project}/{id.execution_id.d" +
      "omain}/{id.execution_id.name}/{id.node_i" +
      "d}\222A&\032$Retrieve an existing node executi" +
      "on.\022\232\002\n\022ListNodeExecutions\022(.flyteidl.ad" +
      "min.NodeExecutionListRequest\032!.flyteidl." +
      "admin.NodeExecutionList\"\266\001\202\323\344\223\002u\022s/api/v" +
      "1/node_executions/{workflow_execution_id" +
      ".project}/{workflow_execution_id.domain}" +
      "/{workflow_execution_id.name}\222A8\0326Fetch " +
      "existing node executions matching input " +
      "filters.\022\357\004\n\031ListNodeExecutionsForTask\022/" +
      ".flyteidl.admin.NodeExecutionForTaskList" +
      "Request\032!.flyteidl.admin.NodeExecutionLi" +
      "st\"\375\003\202\323\344\223\002\254\003\022\251\003/api/v1/children/task_exe" +
      "cutions/{task_execution_id.node_executio" +
      "n_id.execution_id.project}/{task_executi" +
      "on_id.node_execution_id.execution_id.dom" +
      "ain}/{task_execution_id.node_execution_i" +
      "d.execution_id.name}/{task_execution_id." +
      "node_execution_id.node_id}/{task_executi" +
      "on_id.task_id.project}/{task_execution_i" +
      "d.task_id.domain}/{task_execution_id.tas" +
      "k_id.name}/{task_execution_id.task_id.ve" +
      "rsion}/{task_execution_id.retry_attempt}" +
      "\222AG\032EFetch child node executions launche" +
      "d by the specified task execution.\022\263\002\n\024G" +
      "etNodeExecutionData\022+.flyteidl.admin.Nod" +
      "eExecutionGetDataRequest\032,.flyteidl.admi" +
      "n.NodeExecutionGetDataResponse\"\277\001\202\323\344\223\002u\022" +
      "s/api/v1/data/node_executions/{id.execut" +
      "ion_id.project}/{id.execution_id.domain}" +
      "/{id.execution_id.name}/{id.node_id}\222AA\032" +
      "?Retrieve input and output data from an " +
      "existing node execution.\022\227\001\n\017RegisterPro" +
      "ject\022&.flyteidl.admin.ProjectRegisterReq" +
      "uest\032\'.flyteidl.admin.ProjectRegisterRes" +
      "ponse\"3\202\323\344\223\002\025\"\020/api/v1/projects:\001*\222A\025\032\023R" +
      "egister a project.\022\207\001\n\rUpdateProject\022\027.f" +
      "lyteidl.admin.Project\032%.flyteidl.admin.P" +
      "rojectUpdateResponse\"6\202\323\344\223\002\032\032\025/api/v1/pr" +
      "ojects/{id}:\001*\222A\023\032\021Update a project.\022\205\001\n" +
      "\014ListProjects\022\".flyteidl.admin.ProjectLi" +
      "stRequest\032\030.flyteidl.admin.Projects\"7\202\323\344" +
      "\223\002\022\022\020/api/v1/projects\222A\034\032\032Fetch register" +
      "ed projects.\022\335\001\n\023CreateWorkflowEvent\022-.f" +
      "lyteidl.admin.WorkflowExecutionEventRequ" +
      "est\032..flyteidl.admin.WorkflowExecutionEv" +
      "entResponse\"g\202\323\344\223\002\035\"\030/api/v1/events/work" +
      "flows:\001*\222AA\032?Create a workflow execution" +
      " event recording a phase transition.\022\311\001\n" +
      "\017CreateNodeEvent\022).flyteidl.admin.NodeEx" +
      "ecutionEventRequest\032*.flyteidl.admin.Nod" +
      "eExecutionEventResponse\"_\202\323\344\223\002\031\"\024/api/v1" +
      "/events/nodes:\001*\222A=\032;Create a node execu" +
      "tion event recording a phase transition." +
      "\022\311\001\n\017CreateTaskEvent\022).flyteidl.admin.Ta" +
      "skExecutionEventRequest\032*.flyteidl.admin" +
      ".TaskExecutionEventResponse\"_\202\323\344\223\002\031\"\024/ap" +
      "i/v1/events/tasks:\001*\222A=\032;Create a task e" +
      "xecution event recording a phase transit" +
      "ion.\022\251\003\n\020GetTaskExecution\022\'.flyteidl.adm" +
      "in.TaskExecutionGetRequest\032\035.flyteidl.ad" +
      "min.TaskExecution\"\314\002\202\323\344\223\002\234\002\022\231\002/api/v1/ta" +
      "sk_executions/{id.node_execution_id.exec" +
      "ution_id.project}/{id.node_execution_id." +
      "execution_id.domain}/{id.node_execution_" +
      "id.execution_id.name}/{id.node_execution" +
      "_id.node_id}/{id.task_id.project}/{id.ta" +
      "sk_id.domain}/{id.task_id.name}/{id.task" +
      "_id.version}/{id.retry_attempt}\222A&\032$Retr" +
      "ieve an existing task execution.\022\323\002\n\022Lis" +
      "tTaskExecutions\022(.flyteidl.admin.TaskExe" +
      "cutionListRequest\032!.flyteidl.admin.TaskE" +
      "xecutionList\"\357\001\202\323\344\223\002\255\001\022\252\001/api/v1/task_ex" +
      "ecutions/{node_execution_id.execution_id" +
      ".project}/{node_execution_id.execution_i" +
      "d.domain}/{node_execution_id.execution_i" +
      "d.name}/{node_execution_id.node_id}\222A8\0326" +
      "Fetch existing task executions matching " +
      "input filters.\022\340\003\n\024GetTaskExecutionData\022" +
      "+.flyteidl.admin.TaskExecutionGetDataReq" +
      "uest\032,.flyteidl.admin.TaskExecutionGetDa" +
      "taResponse\"\354\002\202\323\344\223\002\241\002\022\236\002/api/v1/data/task" +
      "_executions/{id.node_execution_id.execut" +
      "ion_id.project}/{id.node_execution_id.ex" +
      "ecution_id.domain}/{id.node_execution_id" +
      ".execution_id.name}/{id.node_execution_i" +
      "d.node_id}/{id.task_id.project}/{id.task" +
      "_id.domain}/{id.task_id.name}/{id.task_i" +
      "d.version}/{id.retry_attempt}\222AA\032?Retrie" +
      "ve input and output data from an existin" +
      "g task execution.\022\277\002\n\035UpdateProjectDomai" +
      "nAttributes\0224.flyteidl.admin.ProjectDoma" +
      "inAttributesUpdateRequest\0325.flyteidl.adm" +
      "in.ProjectDomainAttributesUpdateResponse" +
      "\"\260\001\202\323\344\223\002O\032J/api/v1/project_domain_attrib" +
      "utes/{attributes.project}/{attributes.do" +
      "main}:\001*\222AX\032VUpdate the customized resou" +
      "rce attributes associated with a project" +
      "-domain combination\022\237\002\n\032GetProjectDomain" +
      "Attributes\0221.flyteidl.admin.ProjectDomai" +
      "nAttributesGetRequest\0322.flyteidl.admin.P" +
      "rojectDomainAttributesGetResponse\"\231\001\202\323\344\223" +
      "\0026\0224/api/v1/project_domain_attributes/{p" +
      "roject}/{domain}\222AZ\032XRetrieve the custom" +
      "ized resource attributes associated with" +
      " a project-domain combination\022\251\002\n\035Delete" +
      "ProjectDomainAttributes\0224.flyteidl.admin" +
      ".ProjectDomainAttributesDeleteRequest\0325." +
      "flyteidl.admin.ProjectDomainAttributesDe" +
      "leteResponse\"\232\001\202\323\344\223\0029*4/api/v1/project_d" +
      "omain_attributes/{project}/{domain}:\001*\222A" +
      "X\032VDelete the customized resource attrib" +
      "utes associated with a project-domain co" +
      "mbination\022\316\002\n\030UpdateWorkflowAttributes\022/" +
      ".flyteidl.admin.WorkflowAttributesUpdate" +
      "Request\0320.flyteidl.admin.WorkflowAttribu" +
      "tesUpdateResponse\"\316\001\202\323\344\223\002_\032Z/api/v1/work" +
      "flow_attributes/{attributes.project}/{at" +
      "tributes.domain}/{attributes.workflow}:\001" +
      "*\222Af\032dUpdate the customized resource att" +
      "ributes associated with a project, domai" +
      "n and workflow combination\022\243\002\n\025GetWorkfl" +
      "owAttributes\022,.flyteidl.admin.WorkflowAt" +
      "tributesGetRequest\032-.flyteidl.admin.Work" +
      "flowAttributesGetResponse\"\254\001\202\323\344\223\002;\0229/api" +
      "/v1/workflow_attributes/{project}/{domai" +
      "n}/{workflow}\222Ah\032fRetrieve the customize" +
      "d resource attributes associated with a " +
      "project, domain and workflow combination" +
      "\022\255\002\n\030DeleteWorkflowAttributes\022/.flyteidl" +
      ".admin.WorkflowAttributesDeleteRequest\0320" +
      ".flyteidl.admin.WorkflowAttributesDelete" +
      "Response\"\255\001\202\323\344\223\002>*9/api/v1/workflow_attr" +
      "ibutes/{project}/{domain}/{workflow}:\001*\222" +
      "Af\032dDelete the customized resource attri" +
      "butes associated with a project, domain " +
      "and workflow combination\022\341\001\n\027ListMatchab" +
      "leAttributes\022..flyteidl.admin.ListMatcha" +
      "bleAttributesRequest\032/.flyteidl.admin.Li" +
      "stMatchableAttributesResponse\"e\202\323\344\223\002\036\022\034/" +
      "api/v1/matchable_attributes\222A>\032<Retrieve" +
      " a list of MatchableAttributesConfigurat" +
      "ion objects.\022\200\002\n\021ListNamedEntities\022&.fly" +
      "teidl.admin.NamedEntityListRequest\032\037.fly" +
      "teidl.admin.NamedEntityList\"\241\001\202\323\344\223\002;\0229/a" +
      "pi/v1/named_entities/{resource_type}/{pr" +
      "oject}/{domain}\222A]\032[Retrieve a list of N" +
      "amedEntity objects sharing a common reso" +
      "urce type, project, and domain.\022\312\001\n\016GetN" +
      "amedEntity\022%.flyteidl.admin.NamedEntityG" +
      "etRequest\032\033.flyteidl.admin.NamedEntity\"t" +
      "\202\323\344\223\002K\022I/api/v1/named_entities/{resource" +
      "_type}/{id.project}/{id.domain}/{id.name" +
      "}\222A \032\036Retrieve a NamedEntity object.\022\363\001\n" +
      "\021UpdateNamedEntity\022(.flyteidl.admin.Name" +
      "dEntityUpdateRequest\032).flyteidl.admin.Na" +
      "medEntityUpdateResponse\"\210\001\202\323\344\223\002N\032I/api/v" +
      "1/named_entities/{resource_type}/{id.pro" +
      "ject}/{id.domain}/{id.name}:\001*\222A1\032/Updat" +
      "e the fields associated with a NamedEnti" +
      "ty\022\277\001\n\nGetVersion\022!.flyteidl.admin.GetVe" +
      "rsionRequest\032\".flyteidl.admin.GetVersion" +
      "Response\"j\202\323\344\223\002\021\022\017/api/v1/version\222AP\032NRe" +
      "trieve the Version (including the Build " +
      " information) for FlyteAdmin service\022\207\003\n" +
      "\027CreateDescriptionEntity\022..flyteidl.admi" +
      "n.DescriptionEntityCreateRequest\032/.flyte" +
      "idl.admin.DescriptionEntityCreateRespons" +
      "e\"\212\002\202\323\344\223\002\037\"\032/api/v1/description_entity:\001" +
      "*\222A\341\001\0324Create and register a description" +
      " entity definition.JB\n\003400\022;\n9Returned f" +
      "or bad request that may have failed vali" +
      "dation.Je\n\003409\022^\n\\Returned for a request" +
      " that references an identical entity tha" +
      "t has already been registered.\022\334\001\n\024GetDe" +
      "scriptionEntity\022 .flyteidl.admin.ObjectG" +
      "etRequest\032!.flyteidl.admin.DescriptionEn" +
      "tity\"\177\202\323\344\223\002L\022J/api/v1/description_entity" +
      "/{id.project}/{id.domain}/{id.name}/{id." +
      "version}\222A*\032(Retrieve an existing entity" +
      " description.B9Z7github.com/flyteorg/fly" +
      "teidl/gen/pb-go/flyteidl/serviceb\006proto3"
    };
    com.google.protobuf.Descriptors.FileDescriptor.InternalDescriptorAssigner assigner =
        new com.google.protobuf.Descriptors.FileDescriptor.    InternalDescriptorAssigner() {
          public com.google.protobuf.ExtensionRegistry assignDescriptors(
              com.google.protobuf.Descriptors.FileDescriptor root) {
            descriptor = root;
            return null;
          }
        };
    com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.api.AnnotationsProto.getDescriptor(),
          flyteidl.admin.ProjectOuterClass.getDescriptor(),
          flyteidl.admin.ProjectDomainAttributesOuterClass.getDescriptor(),
          flyteidl.admin.TaskOuterClass.getDescriptor(),
          flyteidl.admin.WorkflowOuterClass.getDescriptor(),
          flyteidl.admin.WorkflowAttributesOuterClass.getDescriptor(),
          flyteidl.admin.LaunchPlanOuterClass.getDescriptor(),
          flyteidl.admin.Event.getDescriptor(),
          flyteidl.admin.ExecutionOuterClass.getDescriptor(),
          flyteidl.admin.MatchableResourceOuterClass.getDescriptor(),
          flyteidl.admin.NodeExecutionOuterClass.getDescriptor(),
          flyteidl.admin.TaskExecutionOuterClass.getDescriptor(),
          flyteidl.admin.VersionOuterClass.getDescriptor(),
          flyteidl.admin.Common.getDescriptor(),
          flyteidl.admin.DescriptionEntityOuterClass.getDescriptor(),
          grpc.gateway.protoc_gen_swagger.options.Annotations.getDescriptor(),
        }, assigner);
    com.google.protobuf.ExtensionRegistry registry =
        com.google.protobuf.ExtensionRegistry.newInstance();
    registry.add(com.google.api.AnnotationsProto.http);
    registry.add(grpc.gateway.protoc_gen_swagger.options.Annotations.openapiv2Operation);
    com.google.protobuf.Descriptors.FileDescriptor
        .internalUpdateFileDescriptor(descriptor, registry);
    com.google.api.AnnotationsProto.getDescriptor();
    flyteidl.admin.ProjectOuterClass.getDescriptor();
    flyteidl.admin.ProjectDomainAttributesOuterClass.getDescriptor();
    flyteidl.admin.TaskOuterClass.getDescriptor();
    flyteidl.admin.WorkflowOuterClass.getDescriptor();
    flyteidl.admin.WorkflowAttributesOuterClass.getDescriptor();
    flyteidl.admin.LaunchPlanOuterClass.getDescriptor();
    flyteidl.admin.Event.getDescriptor();
    flyteidl.admin.ExecutionOuterClass.getDescriptor();
    flyteidl.admin.MatchableResourceOuterClass.getDescriptor();
    flyteidl.admin.NodeExecutionOuterClass.getDescriptor();
    flyteidl.admin.TaskExecutionOuterClass.getDescriptor();
    flyteidl.admin.VersionOuterClass.getDescriptor();
    flyteidl.admin.Common.getDescriptor();
    flyteidl.admin.DescriptionEntityOuterClass.getDescriptor();
    grpc.gateway.protoc_gen_swagger.options.Annotations.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}

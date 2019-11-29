package flyteidl.service;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 * <pre>
 * The following defines an RPC service that is also served over HTTP via grpc-gateway.
 * Standard response codes for both are defined here: https://github.com/grpc-ecosystem/grpc-gateway/blob/master/runtime/errors.go
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.21.1-SNAPSHOT)",
    comments = "Source: flyteidl/service/admin.proto")
public final class AdminServiceGrpc {

  private AdminServiceGrpc() {}

  public static final String SERVICE_NAME = "flyteidl.service.AdminService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.TaskOuterClass.TaskCreateRequest,
      flyteidl.admin.TaskOuterClass.TaskCreateResponse> getCreateTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateTask",
      requestType = flyteidl.admin.TaskOuterClass.TaskCreateRequest.class,
      responseType = flyteidl.admin.TaskOuterClass.TaskCreateResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.TaskOuterClass.TaskCreateRequest,
      flyteidl.admin.TaskOuterClass.TaskCreateResponse> getCreateTaskMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.TaskOuterClass.TaskCreateRequest, flyteidl.admin.TaskOuterClass.TaskCreateResponse> getCreateTaskMethod;
    if ((getCreateTaskMethod = AdminServiceGrpc.getCreateTaskMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getCreateTaskMethod = AdminServiceGrpc.getCreateTaskMethod) == null) {
          AdminServiceGrpc.getCreateTaskMethod = getCreateTaskMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.TaskOuterClass.TaskCreateRequest, flyteidl.admin.TaskOuterClass.TaskCreateResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "CreateTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.TaskOuterClass.TaskCreateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.TaskOuterClass.TaskCreateResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("CreateTask"))
                  .build();
          }
        }
     }
     return getCreateTaskMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.Common.ObjectGetRequest,
      flyteidl.admin.TaskOuterClass.Task> getGetTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetTask",
      requestType = flyteidl.admin.Common.ObjectGetRequest.class,
      responseType = flyteidl.admin.TaskOuterClass.Task.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.Common.ObjectGetRequest,
      flyteidl.admin.TaskOuterClass.Task> getGetTaskMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.Common.ObjectGetRequest, flyteidl.admin.TaskOuterClass.Task> getGetTaskMethod;
    if ((getGetTaskMethod = AdminServiceGrpc.getGetTaskMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getGetTaskMethod = AdminServiceGrpc.getGetTaskMethod) == null) {
          AdminServiceGrpc.getGetTaskMethod = getGetTaskMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.Common.ObjectGetRequest, flyteidl.admin.TaskOuterClass.Task>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "GetTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Common.ObjectGetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.TaskOuterClass.Task.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("GetTask"))
                  .build();
          }
        }
     }
     return getGetTaskMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.Common.NamedEntityIdentifierListRequest,
      flyteidl.admin.Common.NamedEntityIdentifierList> getListTaskIdsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListTaskIds",
      requestType = flyteidl.admin.Common.NamedEntityIdentifierListRequest.class,
      responseType = flyteidl.admin.Common.NamedEntityIdentifierList.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.Common.NamedEntityIdentifierListRequest,
      flyteidl.admin.Common.NamedEntityIdentifierList> getListTaskIdsMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.Common.NamedEntityIdentifierListRequest, flyteidl.admin.Common.NamedEntityIdentifierList> getListTaskIdsMethod;
    if ((getListTaskIdsMethod = AdminServiceGrpc.getListTaskIdsMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getListTaskIdsMethod = AdminServiceGrpc.getListTaskIdsMethod) == null) {
          AdminServiceGrpc.getListTaskIdsMethod = getListTaskIdsMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.Common.NamedEntityIdentifierListRequest, flyteidl.admin.Common.NamedEntityIdentifierList>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "ListTaskIds"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Common.NamedEntityIdentifierListRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Common.NamedEntityIdentifierList.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("ListTaskIds"))
                  .build();
          }
        }
     }
     return getListTaskIdsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.Common.ResourceListRequest,
      flyteidl.admin.TaskOuterClass.TaskList> getListTasksMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListTasks",
      requestType = flyteidl.admin.Common.ResourceListRequest.class,
      responseType = flyteidl.admin.TaskOuterClass.TaskList.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.Common.ResourceListRequest,
      flyteidl.admin.TaskOuterClass.TaskList> getListTasksMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.Common.ResourceListRequest, flyteidl.admin.TaskOuterClass.TaskList> getListTasksMethod;
    if ((getListTasksMethod = AdminServiceGrpc.getListTasksMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getListTasksMethod = AdminServiceGrpc.getListTasksMethod) == null) {
          AdminServiceGrpc.getListTasksMethod = getListTasksMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.Common.ResourceListRequest, flyteidl.admin.TaskOuterClass.TaskList>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "ListTasks"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Common.ResourceListRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.TaskOuterClass.TaskList.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("ListTasks"))
                  .build();
          }
        }
     }
     return getListTasksMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.WorkflowOuterClass.WorkflowCreateRequest,
      flyteidl.admin.WorkflowOuterClass.WorkflowCreateResponse> getCreateWorkflowMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateWorkflow",
      requestType = flyteidl.admin.WorkflowOuterClass.WorkflowCreateRequest.class,
      responseType = flyteidl.admin.WorkflowOuterClass.WorkflowCreateResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.WorkflowOuterClass.WorkflowCreateRequest,
      flyteidl.admin.WorkflowOuterClass.WorkflowCreateResponse> getCreateWorkflowMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.WorkflowOuterClass.WorkflowCreateRequest, flyteidl.admin.WorkflowOuterClass.WorkflowCreateResponse> getCreateWorkflowMethod;
    if ((getCreateWorkflowMethod = AdminServiceGrpc.getCreateWorkflowMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getCreateWorkflowMethod = AdminServiceGrpc.getCreateWorkflowMethod) == null) {
          AdminServiceGrpc.getCreateWorkflowMethod = getCreateWorkflowMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.WorkflowOuterClass.WorkflowCreateRequest, flyteidl.admin.WorkflowOuterClass.WorkflowCreateResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "CreateWorkflow"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.WorkflowOuterClass.WorkflowCreateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.WorkflowOuterClass.WorkflowCreateResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("CreateWorkflow"))
                  .build();
          }
        }
     }
     return getCreateWorkflowMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.Common.ObjectGetRequest,
      flyteidl.admin.WorkflowOuterClass.Workflow> getGetWorkflowMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetWorkflow",
      requestType = flyteidl.admin.Common.ObjectGetRequest.class,
      responseType = flyteidl.admin.WorkflowOuterClass.Workflow.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.Common.ObjectGetRequest,
      flyteidl.admin.WorkflowOuterClass.Workflow> getGetWorkflowMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.Common.ObjectGetRequest, flyteidl.admin.WorkflowOuterClass.Workflow> getGetWorkflowMethod;
    if ((getGetWorkflowMethod = AdminServiceGrpc.getGetWorkflowMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getGetWorkflowMethod = AdminServiceGrpc.getGetWorkflowMethod) == null) {
          AdminServiceGrpc.getGetWorkflowMethod = getGetWorkflowMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.Common.ObjectGetRequest, flyteidl.admin.WorkflowOuterClass.Workflow>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "GetWorkflow"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Common.ObjectGetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.WorkflowOuterClass.Workflow.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("GetWorkflow"))
                  .build();
          }
        }
     }
     return getGetWorkflowMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.Common.NamedEntityIdentifierListRequest,
      flyteidl.admin.Common.NamedEntityIdentifierList> getListWorkflowIdsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListWorkflowIds",
      requestType = flyteidl.admin.Common.NamedEntityIdentifierListRequest.class,
      responseType = flyteidl.admin.Common.NamedEntityIdentifierList.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.Common.NamedEntityIdentifierListRequest,
      flyteidl.admin.Common.NamedEntityIdentifierList> getListWorkflowIdsMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.Common.NamedEntityIdentifierListRequest, flyteidl.admin.Common.NamedEntityIdentifierList> getListWorkflowIdsMethod;
    if ((getListWorkflowIdsMethod = AdminServiceGrpc.getListWorkflowIdsMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getListWorkflowIdsMethod = AdminServiceGrpc.getListWorkflowIdsMethod) == null) {
          AdminServiceGrpc.getListWorkflowIdsMethod = getListWorkflowIdsMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.Common.NamedEntityIdentifierListRequest, flyteidl.admin.Common.NamedEntityIdentifierList>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "ListWorkflowIds"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Common.NamedEntityIdentifierListRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Common.NamedEntityIdentifierList.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("ListWorkflowIds"))
                  .build();
          }
        }
     }
     return getListWorkflowIdsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.Common.ResourceListRequest,
      flyteidl.admin.WorkflowOuterClass.WorkflowList> getListWorkflowsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListWorkflows",
      requestType = flyteidl.admin.Common.ResourceListRequest.class,
      responseType = flyteidl.admin.WorkflowOuterClass.WorkflowList.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.Common.ResourceListRequest,
      flyteidl.admin.WorkflowOuterClass.WorkflowList> getListWorkflowsMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.Common.ResourceListRequest, flyteidl.admin.WorkflowOuterClass.WorkflowList> getListWorkflowsMethod;
    if ((getListWorkflowsMethod = AdminServiceGrpc.getListWorkflowsMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getListWorkflowsMethod = AdminServiceGrpc.getListWorkflowsMethod) == null) {
          AdminServiceGrpc.getListWorkflowsMethod = getListWorkflowsMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.Common.ResourceListRequest, flyteidl.admin.WorkflowOuterClass.WorkflowList>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "ListWorkflows"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Common.ResourceListRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.WorkflowOuterClass.WorkflowList.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("ListWorkflows"))
                  .build();
          }
        }
     }
     return getListWorkflowsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateRequest,
      flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateResponse> getCreateLaunchPlanMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateLaunchPlan",
      requestType = flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateRequest.class,
      responseType = flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateRequest,
      flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateResponse> getCreateLaunchPlanMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateRequest, flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateResponse> getCreateLaunchPlanMethod;
    if ((getCreateLaunchPlanMethod = AdminServiceGrpc.getCreateLaunchPlanMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getCreateLaunchPlanMethod = AdminServiceGrpc.getCreateLaunchPlanMethod) == null) {
          AdminServiceGrpc.getCreateLaunchPlanMethod = getCreateLaunchPlanMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateRequest, flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "CreateLaunchPlan"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("CreateLaunchPlan"))
                  .build();
          }
        }
     }
     return getCreateLaunchPlanMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.Common.ObjectGetRequest,
      flyteidl.admin.LaunchPlanOuterClass.LaunchPlan> getGetLaunchPlanMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetLaunchPlan",
      requestType = flyteidl.admin.Common.ObjectGetRequest.class,
      responseType = flyteidl.admin.LaunchPlanOuterClass.LaunchPlan.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.Common.ObjectGetRequest,
      flyteidl.admin.LaunchPlanOuterClass.LaunchPlan> getGetLaunchPlanMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.Common.ObjectGetRequest, flyteidl.admin.LaunchPlanOuterClass.LaunchPlan> getGetLaunchPlanMethod;
    if ((getGetLaunchPlanMethod = AdminServiceGrpc.getGetLaunchPlanMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getGetLaunchPlanMethod = AdminServiceGrpc.getGetLaunchPlanMethod) == null) {
          AdminServiceGrpc.getGetLaunchPlanMethod = getGetLaunchPlanMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.Common.ObjectGetRequest, flyteidl.admin.LaunchPlanOuterClass.LaunchPlan>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "GetLaunchPlan"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Common.ObjectGetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.LaunchPlanOuterClass.LaunchPlan.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("GetLaunchPlan"))
                  .build();
          }
        }
     }
     return getGetLaunchPlanMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanRequest,
      flyteidl.admin.LaunchPlanOuterClass.LaunchPlan> getGetActiveLaunchPlanMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetActiveLaunchPlan",
      requestType = flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanRequest.class,
      responseType = flyteidl.admin.LaunchPlanOuterClass.LaunchPlan.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanRequest,
      flyteidl.admin.LaunchPlanOuterClass.LaunchPlan> getGetActiveLaunchPlanMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanRequest, flyteidl.admin.LaunchPlanOuterClass.LaunchPlan> getGetActiveLaunchPlanMethod;
    if ((getGetActiveLaunchPlanMethod = AdminServiceGrpc.getGetActiveLaunchPlanMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getGetActiveLaunchPlanMethod = AdminServiceGrpc.getGetActiveLaunchPlanMethod) == null) {
          AdminServiceGrpc.getGetActiveLaunchPlanMethod = getGetActiveLaunchPlanMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanRequest, flyteidl.admin.LaunchPlanOuterClass.LaunchPlan>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "GetActiveLaunchPlan"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.LaunchPlanOuterClass.LaunchPlan.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("GetActiveLaunchPlan"))
                  .build();
          }
        }
     }
     return getGetActiveLaunchPlanMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanListRequest,
      flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList> getListActiveLaunchPlansMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListActiveLaunchPlans",
      requestType = flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanListRequest.class,
      responseType = flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanListRequest,
      flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList> getListActiveLaunchPlansMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanListRequest, flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList> getListActiveLaunchPlansMethod;
    if ((getListActiveLaunchPlansMethod = AdminServiceGrpc.getListActiveLaunchPlansMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getListActiveLaunchPlansMethod = AdminServiceGrpc.getListActiveLaunchPlansMethod) == null) {
          AdminServiceGrpc.getListActiveLaunchPlansMethod = getListActiveLaunchPlansMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanListRequest, flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "ListActiveLaunchPlans"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanListRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("ListActiveLaunchPlans"))
                  .build();
          }
        }
     }
     return getListActiveLaunchPlansMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.Common.NamedEntityIdentifierListRequest,
      flyteidl.admin.Common.NamedEntityIdentifierList> getListLaunchPlanIdsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListLaunchPlanIds",
      requestType = flyteidl.admin.Common.NamedEntityIdentifierListRequest.class,
      responseType = flyteidl.admin.Common.NamedEntityIdentifierList.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.Common.NamedEntityIdentifierListRequest,
      flyteidl.admin.Common.NamedEntityIdentifierList> getListLaunchPlanIdsMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.Common.NamedEntityIdentifierListRequest, flyteidl.admin.Common.NamedEntityIdentifierList> getListLaunchPlanIdsMethod;
    if ((getListLaunchPlanIdsMethod = AdminServiceGrpc.getListLaunchPlanIdsMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getListLaunchPlanIdsMethod = AdminServiceGrpc.getListLaunchPlanIdsMethod) == null) {
          AdminServiceGrpc.getListLaunchPlanIdsMethod = getListLaunchPlanIdsMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.Common.NamedEntityIdentifierListRequest, flyteidl.admin.Common.NamedEntityIdentifierList>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "ListLaunchPlanIds"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Common.NamedEntityIdentifierListRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Common.NamedEntityIdentifierList.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("ListLaunchPlanIds"))
                  .build();
          }
        }
     }
     return getListLaunchPlanIdsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.Common.ResourceListRequest,
      flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList> getListLaunchPlansMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListLaunchPlans",
      requestType = flyteidl.admin.Common.ResourceListRequest.class,
      responseType = flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.Common.ResourceListRequest,
      flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList> getListLaunchPlansMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.Common.ResourceListRequest, flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList> getListLaunchPlansMethod;
    if ((getListLaunchPlansMethod = AdminServiceGrpc.getListLaunchPlansMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getListLaunchPlansMethod = AdminServiceGrpc.getListLaunchPlansMethod) == null) {
          AdminServiceGrpc.getListLaunchPlansMethod = getListLaunchPlansMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.Common.ResourceListRequest, flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "ListLaunchPlans"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Common.ResourceListRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("ListLaunchPlans"))
                  .build();
          }
        }
     }
     return getListLaunchPlansMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateRequest,
      flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateResponse> getUpdateLaunchPlanMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "UpdateLaunchPlan",
      requestType = flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateRequest.class,
      responseType = flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateRequest,
      flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateResponse> getUpdateLaunchPlanMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateRequest, flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateResponse> getUpdateLaunchPlanMethod;
    if ((getUpdateLaunchPlanMethod = AdminServiceGrpc.getUpdateLaunchPlanMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getUpdateLaunchPlanMethod = AdminServiceGrpc.getUpdateLaunchPlanMethod) == null) {
          AdminServiceGrpc.getUpdateLaunchPlanMethod = getUpdateLaunchPlanMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateRequest, flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "UpdateLaunchPlan"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("UpdateLaunchPlan"))
                  .build();
          }
        }
     }
     return getUpdateLaunchPlanMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.ExecutionCreateRequest,
      flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse> getCreateExecutionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateExecution",
      requestType = flyteidl.admin.ExecutionOuterClass.ExecutionCreateRequest.class,
      responseType = flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.ExecutionCreateRequest,
      flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse> getCreateExecutionMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.ExecutionCreateRequest, flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse> getCreateExecutionMethod;
    if ((getCreateExecutionMethod = AdminServiceGrpc.getCreateExecutionMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getCreateExecutionMethod = AdminServiceGrpc.getCreateExecutionMethod) == null) {
          AdminServiceGrpc.getCreateExecutionMethod = getCreateExecutionMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.ExecutionOuterClass.ExecutionCreateRequest, flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "CreateExecution"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ExecutionOuterClass.ExecutionCreateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("CreateExecution"))
                  .build();
          }
        }
     }
     return getCreateExecutionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.ExecutionRelaunchRequest,
      flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse> getRelaunchExecutionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RelaunchExecution",
      requestType = flyteidl.admin.ExecutionOuterClass.ExecutionRelaunchRequest.class,
      responseType = flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.ExecutionRelaunchRequest,
      flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse> getRelaunchExecutionMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.ExecutionRelaunchRequest, flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse> getRelaunchExecutionMethod;
    if ((getRelaunchExecutionMethod = AdminServiceGrpc.getRelaunchExecutionMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getRelaunchExecutionMethod = AdminServiceGrpc.getRelaunchExecutionMethod) == null) {
          AdminServiceGrpc.getRelaunchExecutionMethod = getRelaunchExecutionMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.ExecutionOuterClass.ExecutionRelaunchRequest, flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "RelaunchExecution"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ExecutionOuterClass.ExecutionRelaunchRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("RelaunchExecution"))
                  .build();
          }
        }
     }
     return getRelaunchExecutionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetRequest,
      flyteidl.admin.ExecutionOuterClass.Execution> getGetExecutionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetExecution",
      requestType = flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetRequest.class,
      responseType = flyteidl.admin.ExecutionOuterClass.Execution.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetRequest,
      flyteidl.admin.ExecutionOuterClass.Execution> getGetExecutionMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetRequest, flyteidl.admin.ExecutionOuterClass.Execution> getGetExecutionMethod;
    if ((getGetExecutionMethod = AdminServiceGrpc.getGetExecutionMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getGetExecutionMethod = AdminServiceGrpc.getGetExecutionMethod) == null) {
          AdminServiceGrpc.getGetExecutionMethod = getGetExecutionMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetRequest, flyteidl.admin.ExecutionOuterClass.Execution>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "GetExecution"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ExecutionOuterClass.Execution.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("GetExecution"))
                  .build();
          }
        }
     }
     return getGetExecutionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataRequest,
      flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataResponse> getGetExecutionDataMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetExecutionData",
      requestType = flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataRequest.class,
      responseType = flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataRequest,
      flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataResponse> getGetExecutionDataMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataRequest, flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataResponse> getGetExecutionDataMethod;
    if ((getGetExecutionDataMethod = AdminServiceGrpc.getGetExecutionDataMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getGetExecutionDataMethod = AdminServiceGrpc.getGetExecutionDataMethod) == null) {
          AdminServiceGrpc.getGetExecutionDataMethod = getGetExecutionDataMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataRequest, flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "GetExecutionData"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("GetExecutionData"))
                  .build();
          }
        }
     }
     return getGetExecutionDataMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.Common.ResourceListRequest,
      flyteidl.admin.ExecutionOuterClass.ExecutionList> getListExecutionsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListExecutions",
      requestType = flyteidl.admin.Common.ResourceListRequest.class,
      responseType = flyteidl.admin.ExecutionOuterClass.ExecutionList.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.Common.ResourceListRequest,
      flyteidl.admin.ExecutionOuterClass.ExecutionList> getListExecutionsMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.Common.ResourceListRequest, flyteidl.admin.ExecutionOuterClass.ExecutionList> getListExecutionsMethod;
    if ((getListExecutionsMethod = AdminServiceGrpc.getListExecutionsMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getListExecutionsMethod = AdminServiceGrpc.getListExecutionsMethod) == null) {
          AdminServiceGrpc.getListExecutionsMethod = getListExecutionsMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.Common.ResourceListRequest, flyteidl.admin.ExecutionOuterClass.ExecutionList>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "ListExecutions"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Common.ResourceListRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ExecutionOuterClass.ExecutionList.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("ListExecutions"))
                  .build();
          }
        }
     }
     return getListExecutionsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.ExecutionTerminateRequest,
      flyteidl.admin.ExecutionOuterClass.ExecutionTerminateResponse> getTerminateExecutionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TerminateExecution",
      requestType = flyteidl.admin.ExecutionOuterClass.ExecutionTerminateRequest.class,
      responseType = flyteidl.admin.ExecutionOuterClass.ExecutionTerminateResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.ExecutionTerminateRequest,
      flyteidl.admin.ExecutionOuterClass.ExecutionTerminateResponse> getTerminateExecutionMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.ExecutionOuterClass.ExecutionTerminateRequest, flyteidl.admin.ExecutionOuterClass.ExecutionTerminateResponse> getTerminateExecutionMethod;
    if ((getTerminateExecutionMethod = AdminServiceGrpc.getTerminateExecutionMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getTerminateExecutionMethod = AdminServiceGrpc.getTerminateExecutionMethod) == null) {
          AdminServiceGrpc.getTerminateExecutionMethod = getTerminateExecutionMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.ExecutionOuterClass.ExecutionTerminateRequest, flyteidl.admin.ExecutionOuterClass.ExecutionTerminateResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "TerminateExecution"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ExecutionOuterClass.ExecutionTerminateRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ExecutionOuterClass.ExecutionTerminateResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("TerminateExecution"))
                  .build();
          }
        }
     }
     return getTerminateExecutionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetRequest,
      flyteidl.admin.NodeExecutionOuterClass.NodeExecution> getGetNodeExecutionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetNodeExecution",
      requestType = flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetRequest.class,
      responseType = flyteidl.admin.NodeExecutionOuterClass.NodeExecution.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetRequest,
      flyteidl.admin.NodeExecutionOuterClass.NodeExecution> getGetNodeExecutionMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetRequest, flyteidl.admin.NodeExecutionOuterClass.NodeExecution> getGetNodeExecutionMethod;
    if ((getGetNodeExecutionMethod = AdminServiceGrpc.getGetNodeExecutionMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getGetNodeExecutionMethod = AdminServiceGrpc.getGetNodeExecutionMethod) == null) {
          AdminServiceGrpc.getGetNodeExecutionMethod = getGetNodeExecutionMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetRequest, flyteidl.admin.NodeExecutionOuterClass.NodeExecution>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "GetNodeExecution"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.NodeExecutionOuterClass.NodeExecution.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("GetNodeExecution"))
                  .build();
          }
        }
     }
     return getGetNodeExecutionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionListRequest,
      flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList> getListNodeExecutionsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListNodeExecutions",
      requestType = flyteidl.admin.NodeExecutionOuterClass.NodeExecutionListRequest.class,
      responseType = flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionListRequest,
      flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList> getListNodeExecutionsMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionListRequest, flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList> getListNodeExecutionsMethod;
    if ((getListNodeExecutionsMethod = AdminServiceGrpc.getListNodeExecutionsMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getListNodeExecutionsMethod = AdminServiceGrpc.getListNodeExecutionsMethod) == null) {
          AdminServiceGrpc.getListNodeExecutionsMethod = getListNodeExecutionsMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionListRequest, flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "ListNodeExecutions"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.NodeExecutionOuterClass.NodeExecutionListRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("ListNodeExecutions"))
                  .build();
          }
        }
     }
     return getListNodeExecutionsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionForTaskListRequest,
      flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList> getListNodeExecutionsForTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListNodeExecutionsForTask",
      requestType = flyteidl.admin.NodeExecutionOuterClass.NodeExecutionForTaskListRequest.class,
      responseType = flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionForTaskListRequest,
      flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList> getListNodeExecutionsForTaskMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionForTaskListRequest, flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList> getListNodeExecutionsForTaskMethod;
    if ((getListNodeExecutionsForTaskMethod = AdminServiceGrpc.getListNodeExecutionsForTaskMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getListNodeExecutionsForTaskMethod = AdminServiceGrpc.getListNodeExecutionsForTaskMethod) == null) {
          AdminServiceGrpc.getListNodeExecutionsForTaskMethod = getListNodeExecutionsForTaskMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionForTaskListRequest, flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "ListNodeExecutionsForTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.NodeExecutionOuterClass.NodeExecutionForTaskListRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("ListNodeExecutionsForTask"))
                  .build();
          }
        }
     }
     return getListNodeExecutionsForTaskMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataRequest,
      flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataResponse> getGetNodeExecutionDataMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetNodeExecutionData",
      requestType = flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataRequest.class,
      responseType = flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataRequest,
      flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataResponse> getGetNodeExecutionDataMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataRequest, flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataResponse> getGetNodeExecutionDataMethod;
    if ((getGetNodeExecutionDataMethod = AdminServiceGrpc.getGetNodeExecutionDataMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getGetNodeExecutionDataMethod = AdminServiceGrpc.getGetNodeExecutionDataMethod) == null) {
          AdminServiceGrpc.getGetNodeExecutionDataMethod = getGetNodeExecutionDataMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataRequest, flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "GetNodeExecutionData"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("GetNodeExecutionData"))
                  .build();
          }
        }
     }
     return getGetNodeExecutionDataMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.ProjectOuterClass.ProjectRegisterRequest,
      flyteidl.admin.ProjectOuterClass.ProjectRegisterResponse> getRegisterProjectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "RegisterProject",
      requestType = flyteidl.admin.ProjectOuterClass.ProjectRegisterRequest.class,
      responseType = flyteidl.admin.ProjectOuterClass.ProjectRegisterResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.ProjectOuterClass.ProjectRegisterRequest,
      flyteidl.admin.ProjectOuterClass.ProjectRegisterResponse> getRegisterProjectMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.ProjectOuterClass.ProjectRegisterRequest, flyteidl.admin.ProjectOuterClass.ProjectRegisterResponse> getRegisterProjectMethod;
    if ((getRegisterProjectMethod = AdminServiceGrpc.getRegisterProjectMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getRegisterProjectMethod = AdminServiceGrpc.getRegisterProjectMethod) == null) {
          AdminServiceGrpc.getRegisterProjectMethod = getRegisterProjectMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.ProjectOuterClass.ProjectRegisterRequest, flyteidl.admin.ProjectOuterClass.ProjectRegisterResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "RegisterProject"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ProjectOuterClass.ProjectRegisterRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ProjectOuterClass.ProjectRegisterResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("RegisterProject"))
                  .build();
          }
        }
     }
     return getRegisterProjectMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.ProjectOuterClass.ProjectListRequest,
      flyteidl.admin.ProjectOuterClass.Projects> getListProjectsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListProjects",
      requestType = flyteidl.admin.ProjectOuterClass.ProjectListRequest.class,
      responseType = flyteidl.admin.ProjectOuterClass.Projects.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.ProjectOuterClass.ProjectListRequest,
      flyteidl.admin.ProjectOuterClass.Projects> getListProjectsMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.ProjectOuterClass.ProjectListRequest, flyteidl.admin.ProjectOuterClass.Projects> getListProjectsMethod;
    if ((getListProjectsMethod = AdminServiceGrpc.getListProjectsMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getListProjectsMethod = AdminServiceGrpc.getListProjectsMethod) == null) {
          AdminServiceGrpc.getListProjectsMethod = getListProjectsMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.ProjectOuterClass.ProjectListRequest, flyteidl.admin.ProjectOuterClass.Projects>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "ListProjects"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ProjectOuterClass.ProjectListRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.ProjectOuterClass.Projects.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("ListProjects"))
                  .build();
          }
        }
     }
     return getListProjectsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.Event.WorkflowExecutionEventRequest,
      flyteidl.admin.Event.WorkflowExecutionEventResponse> getCreateWorkflowEventMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateWorkflowEvent",
      requestType = flyteidl.admin.Event.WorkflowExecutionEventRequest.class,
      responseType = flyteidl.admin.Event.WorkflowExecutionEventResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.Event.WorkflowExecutionEventRequest,
      flyteidl.admin.Event.WorkflowExecutionEventResponse> getCreateWorkflowEventMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.Event.WorkflowExecutionEventRequest, flyteidl.admin.Event.WorkflowExecutionEventResponse> getCreateWorkflowEventMethod;
    if ((getCreateWorkflowEventMethod = AdminServiceGrpc.getCreateWorkflowEventMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getCreateWorkflowEventMethod = AdminServiceGrpc.getCreateWorkflowEventMethod) == null) {
          AdminServiceGrpc.getCreateWorkflowEventMethod = getCreateWorkflowEventMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.Event.WorkflowExecutionEventRequest, flyteidl.admin.Event.WorkflowExecutionEventResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "CreateWorkflowEvent"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Event.WorkflowExecutionEventRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Event.WorkflowExecutionEventResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("CreateWorkflowEvent"))
                  .build();
          }
        }
     }
     return getCreateWorkflowEventMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.Event.NodeExecutionEventRequest,
      flyteidl.admin.Event.NodeExecutionEventResponse> getCreateNodeEventMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateNodeEvent",
      requestType = flyteidl.admin.Event.NodeExecutionEventRequest.class,
      responseType = flyteidl.admin.Event.NodeExecutionEventResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.Event.NodeExecutionEventRequest,
      flyteidl.admin.Event.NodeExecutionEventResponse> getCreateNodeEventMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.Event.NodeExecutionEventRequest, flyteidl.admin.Event.NodeExecutionEventResponse> getCreateNodeEventMethod;
    if ((getCreateNodeEventMethod = AdminServiceGrpc.getCreateNodeEventMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getCreateNodeEventMethod = AdminServiceGrpc.getCreateNodeEventMethod) == null) {
          AdminServiceGrpc.getCreateNodeEventMethod = getCreateNodeEventMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.Event.NodeExecutionEventRequest, flyteidl.admin.Event.NodeExecutionEventResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "CreateNodeEvent"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Event.NodeExecutionEventRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Event.NodeExecutionEventResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("CreateNodeEvent"))
                  .build();
          }
        }
     }
     return getCreateNodeEventMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.Event.TaskExecutionEventRequest,
      flyteidl.admin.Event.TaskExecutionEventResponse> getCreateTaskEventMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CreateTaskEvent",
      requestType = flyteidl.admin.Event.TaskExecutionEventRequest.class,
      responseType = flyteidl.admin.Event.TaskExecutionEventResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.Event.TaskExecutionEventRequest,
      flyteidl.admin.Event.TaskExecutionEventResponse> getCreateTaskEventMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.Event.TaskExecutionEventRequest, flyteidl.admin.Event.TaskExecutionEventResponse> getCreateTaskEventMethod;
    if ((getCreateTaskEventMethod = AdminServiceGrpc.getCreateTaskEventMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getCreateTaskEventMethod = AdminServiceGrpc.getCreateTaskEventMethod) == null) {
          AdminServiceGrpc.getCreateTaskEventMethod = getCreateTaskEventMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.Event.TaskExecutionEventRequest, flyteidl.admin.Event.TaskExecutionEventResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "CreateTaskEvent"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Event.TaskExecutionEventRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.Event.TaskExecutionEventResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("CreateTaskEvent"))
                  .build();
          }
        }
     }
     return getCreateTaskEventMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetRequest,
      flyteidl.admin.TaskExecutionOuterClass.TaskExecution> getGetTaskExecutionMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetTaskExecution",
      requestType = flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetRequest.class,
      responseType = flyteidl.admin.TaskExecutionOuterClass.TaskExecution.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetRequest,
      flyteidl.admin.TaskExecutionOuterClass.TaskExecution> getGetTaskExecutionMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetRequest, flyteidl.admin.TaskExecutionOuterClass.TaskExecution> getGetTaskExecutionMethod;
    if ((getGetTaskExecutionMethod = AdminServiceGrpc.getGetTaskExecutionMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getGetTaskExecutionMethod = AdminServiceGrpc.getGetTaskExecutionMethod) == null) {
          AdminServiceGrpc.getGetTaskExecutionMethod = getGetTaskExecutionMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetRequest, flyteidl.admin.TaskExecutionOuterClass.TaskExecution>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "GetTaskExecution"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.TaskExecutionOuterClass.TaskExecution.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("GetTaskExecution"))
                  .build();
          }
        }
     }
     return getGetTaskExecutionMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionListRequest,
      flyteidl.admin.TaskExecutionOuterClass.TaskExecutionList> getListTaskExecutionsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ListTaskExecutions",
      requestType = flyteidl.admin.TaskExecutionOuterClass.TaskExecutionListRequest.class,
      responseType = flyteidl.admin.TaskExecutionOuterClass.TaskExecutionList.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionListRequest,
      flyteidl.admin.TaskExecutionOuterClass.TaskExecutionList> getListTaskExecutionsMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionListRequest, flyteidl.admin.TaskExecutionOuterClass.TaskExecutionList> getListTaskExecutionsMethod;
    if ((getListTaskExecutionsMethod = AdminServiceGrpc.getListTaskExecutionsMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getListTaskExecutionsMethod = AdminServiceGrpc.getListTaskExecutionsMethod) == null) {
          AdminServiceGrpc.getListTaskExecutionsMethod = getListTaskExecutionsMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionListRequest, flyteidl.admin.TaskExecutionOuterClass.TaskExecutionList>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "ListTaskExecutions"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.TaskExecutionOuterClass.TaskExecutionListRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.TaskExecutionOuterClass.TaskExecutionList.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("ListTaskExecutions"))
                  .build();
          }
        }
     }
     return getListTaskExecutionsMethod;
  }

  private static volatile io.grpc.MethodDescriptor<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataRequest,
      flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataResponse> getGetTaskExecutionDataMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "GetTaskExecutionData",
      requestType = flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataRequest.class,
      responseType = flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataRequest,
      flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataResponse> getGetTaskExecutionDataMethod() {
    io.grpc.MethodDescriptor<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataRequest, flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataResponse> getGetTaskExecutionDataMethod;
    if ((getGetTaskExecutionDataMethod = AdminServiceGrpc.getGetTaskExecutionDataMethod) == null) {
      synchronized (AdminServiceGrpc.class) {
        if ((getGetTaskExecutionDataMethod = AdminServiceGrpc.getGetTaskExecutionDataMethod) == null) {
          AdminServiceGrpc.getGetTaskExecutionDataMethod = getGetTaskExecutionDataMethod = 
              io.grpc.MethodDescriptor.<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataRequest, flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "flyteidl.service.AdminService", "GetTaskExecutionData"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new AdminServiceMethodDescriptorSupplier("GetTaskExecutionData"))
                  .build();
          }
        }
     }
     return getGetTaskExecutionDataMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static AdminServiceStub newStub(io.grpc.Channel channel) {
    return new AdminServiceStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static AdminServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new AdminServiceBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static AdminServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new AdminServiceFutureStub(channel);
  }

  /**
   * <pre>
   * The following defines an RPC service that is also served over HTTP via grpc-gateway.
   * Standard response codes for both are defined here: https://github.com/grpc-ecosystem/grpc-gateway/blob/master/runtime/errors.go
   * </pre>
   */
  public static abstract class AdminServiceImplBase implements io.grpc.BindableService {

    /**
     */
    public void createTask(flyteidl.admin.TaskOuterClass.TaskCreateRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.TaskOuterClass.TaskCreateResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getCreateTaskMethod(), responseObserver);
    }

    /**
     */
    public void getTask(flyteidl.admin.Common.ObjectGetRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.TaskOuterClass.Task> responseObserver) {
      asyncUnimplementedUnaryCall(getGetTaskMethod(), responseObserver);
    }

    /**
     */
    public void listTaskIds(flyteidl.admin.Common.NamedEntityIdentifierListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.Common.NamedEntityIdentifierList> responseObserver) {
      asyncUnimplementedUnaryCall(getListTaskIdsMethod(), responseObserver);
    }

    /**
     */
    public void listTasks(flyteidl.admin.Common.ResourceListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.TaskOuterClass.TaskList> responseObserver) {
      asyncUnimplementedUnaryCall(getListTasksMethod(), responseObserver);
    }

    /**
     */
    public void createWorkflow(flyteidl.admin.WorkflowOuterClass.WorkflowCreateRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.WorkflowOuterClass.WorkflowCreateResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getCreateWorkflowMethod(), responseObserver);
    }

    /**
     */
    public void getWorkflow(flyteidl.admin.Common.ObjectGetRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.WorkflowOuterClass.Workflow> responseObserver) {
      asyncUnimplementedUnaryCall(getGetWorkflowMethod(), responseObserver);
    }

    /**
     */
    public void listWorkflowIds(flyteidl.admin.Common.NamedEntityIdentifierListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.Common.NamedEntityIdentifierList> responseObserver) {
      asyncUnimplementedUnaryCall(getListWorkflowIdsMethod(), responseObserver);
    }

    /**
     */
    public void listWorkflows(flyteidl.admin.Common.ResourceListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.WorkflowOuterClass.WorkflowList> responseObserver) {
      asyncUnimplementedUnaryCall(getListWorkflowsMethod(), responseObserver);
    }

    /**
     */
    public void createLaunchPlan(flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getCreateLaunchPlanMethod(), responseObserver);
    }

    /**
     */
    public void getLaunchPlan(flyteidl.admin.Common.ObjectGetRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlan> responseObserver) {
      asyncUnimplementedUnaryCall(getGetLaunchPlanMethod(), responseObserver);
    }

    /**
     */
    public void getActiveLaunchPlan(flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlan> responseObserver) {
      asyncUnimplementedUnaryCall(getGetActiveLaunchPlanMethod(), responseObserver);
    }

    /**
     */
    public void listActiveLaunchPlans(flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList> responseObserver) {
      asyncUnimplementedUnaryCall(getListActiveLaunchPlansMethod(), responseObserver);
    }

    /**
     */
    public void listLaunchPlanIds(flyteidl.admin.Common.NamedEntityIdentifierListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.Common.NamedEntityIdentifierList> responseObserver) {
      asyncUnimplementedUnaryCall(getListLaunchPlanIdsMethod(), responseObserver);
    }

    /**
     */
    public void listLaunchPlans(flyteidl.admin.Common.ResourceListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList> responseObserver) {
      asyncUnimplementedUnaryCall(getListLaunchPlansMethod(), responseObserver);
    }

    /**
     */
    public void updateLaunchPlan(flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getUpdateLaunchPlanMethod(), responseObserver);
    }

    /**
     */
    public void createExecution(flyteidl.admin.ExecutionOuterClass.ExecutionCreateRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getCreateExecutionMethod(), responseObserver);
    }

    /**
     */
    public void relaunchExecution(flyteidl.admin.ExecutionOuterClass.ExecutionRelaunchRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getRelaunchExecutionMethod(), responseObserver);
    }

    /**
     */
    public void getExecution(flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.Execution> responseObserver) {
      asyncUnimplementedUnaryCall(getGetExecutionMethod(), responseObserver);
    }

    /**
     */
    public void getExecutionData(flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getGetExecutionDataMethod(), responseObserver);
    }

    /**
     */
    public void listExecutions(flyteidl.admin.Common.ResourceListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.ExecutionList> responseObserver) {
      asyncUnimplementedUnaryCall(getListExecutionsMethod(), responseObserver);
    }

    /**
     */
    public void terminateExecution(flyteidl.admin.ExecutionOuterClass.ExecutionTerminateRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.ExecutionTerminateResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getTerminateExecutionMethod(), responseObserver);
    }

    /**
     */
    public void getNodeExecution(flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.NodeExecutionOuterClass.NodeExecution> responseObserver) {
      asyncUnimplementedUnaryCall(getGetNodeExecutionMethod(), responseObserver);
    }

    /**
     */
    public void listNodeExecutions(flyteidl.admin.NodeExecutionOuterClass.NodeExecutionListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList> responseObserver) {
      asyncUnimplementedUnaryCall(getListNodeExecutionsMethod(), responseObserver);
    }

    /**
     */
    public void listNodeExecutionsForTask(flyteidl.admin.NodeExecutionOuterClass.NodeExecutionForTaskListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList> responseObserver) {
      asyncUnimplementedUnaryCall(getListNodeExecutionsForTaskMethod(), responseObserver);
    }

    /**
     */
    public void getNodeExecutionData(flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getGetNodeExecutionDataMethod(), responseObserver);
    }

    /**
     */
    public void registerProject(flyteidl.admin.ProjectOuterClass.ProjectRegisterRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ProjectOuterClass.ProjectRegisterResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getRegisterProjectMethod(), responseObserver);
    }

    /**
     */
    public void listProjects(flyteidl.admin.ProjectOuterClass.ProjectListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ProjectOuterClass.Projects> responseObserver) {
      asyncUnimplementedUnaryCall(getListProjectsMethod(), responseObserver);
    }

    /**
     */
    public void createWorkflowEvent(flyteidl.admin.Event.WorkflowExecutionEventRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.Event.WorkflowExecutionEventResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getCreateWorkflowEventMethod(), responseObserver);
    }

    /**
     */
    public void createNodeEvent(flyteidl.admin.Event.NodeExecutionEventRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.Event.NodeExecutionEventResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getCreateNodeEventMethod(), responseObserver);
    }

    /**
     */
    public void createTaskEvent(flyteidl.admin.Event.TaskExecutionEventRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.Event.TaskExecutionEventResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getCreateTaskEventMethod(), responseObserver);
    }

    /**
     */
    public void getTaskExecution(flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.TaskExecutionOuterClass.TaskExecution> responseObserver) {
      asyncUnimplementedUnaryCall(getGetTaskExecutionMethod(), responseObserver);
    }

    /**
     */
    public void listTaskExecutions(flyteidl.admin.TaskExecutionOuterClass.TaskExecutionListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionList> responseObserver) {
      asyncUnimplementedUnaryCall(getListTaskExecutionsMethod(), responseObserver);
    }

    /**
     */
    public void getTaskExecutionData(flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getGetTaskExecutionDataMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getCreateTaskMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.TaskOuterClass.TaskCreateRequest,
                flyteidl.admin.TaskOuterClass.TaskCreateResponse>(
                  this, METHODID_CREATE_TASK)))
          .addMethod(
            getGetTaskMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.Common.ObjectGetRequest,
                flyteidl.admin.TaskOuterClass.Task>(
                  this, METHODID_GET_TASK)))
          .addMethod(
            getListTaskIdsMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.Common.NamedEntityIdentifierListRequest,
                flyteidl.admin.Common.NamedEntityIdentifierList>(
                  this, METHODID_LIST_TASK_IDS)))
          .addMethod(
            getListTasksMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.Common.ResourceListRequest,
                flyteidl.admin.TaskOuterClass.TaskList>(
                  this, METHODID_LIST_TASKS)))
          .addMethod(
            getCreateWorkflowMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.WorkflowOuterClass.WorkflowCreateRequest,
                flyteidl.admin.WorkflowOuterClass.WorkflowCreateResponse>(
                  this, METHODID_CREATE_WORKFLOW)))
          .addMethod(
            getGetWorkflowMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.Common.ObjectGetRequest,
                flyteidl.admin.WorkflowOuterClass.Workflow>(
                  this, METHODID_GET_WORKFLOW)))
          .addMethod(
            getListWorkflowIdsMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.Common.NamedEntityIdentifierListRequest,
                flyteidl.admin.Common.NamedEntityIdentifierList>(
                  this, METHODID_LIST_WORKFLOW_IDS)))
          .addMethod(
            getListWorkflowsMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.Common.ResourceListRequest,
                flyteidl.admin.WorkflowOuterClass.WorkflowList>(
                  this, METHODID_LIST_WORKFLOWS)))
          .addMethod(
            getCreateLaunchPlanMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateRequest,
                flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateResponse>(
                  this, METHODID_CREATE_LAUNCH_PLAN)))
          .addMethod(
            getGetLaunchPlanMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.Common.ObjectGetRequest,
                flyteidl.admin.LaunchPlanOuterClass.LaunchPlan>(
                  this, METHODID_GET_LAUNCH_PLAN)))
          .addMethod(
            getGetActiveLaunchPlanMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanRequest,
                flyteidl.admin.LaunchPlanOuterClass.LaunchPlan>(
                  this, METHODID_GET_ACTIVE_LAUNCH_PLAN)))
          .addMethod(
            getListActiveLaunchPlansMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanListRequest,
                flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList>(
                  this, METHODID_LIST_ACTIVE_LAUNCH_PLANS)))
          .addMethod(
            getListLaunchPlanIdsMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.Common.NamedEntityIdentifierListRequest,
                flyteidl.admin.Common.NamedEntityIdentifierList>(
                  this, METHODID_LIST_LAUNCH_PLAN_IDS)))
          .addMethod(
            getListLaunchPlansMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.Common.ResourceListRequest,
                flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList>(
                  this, METHODID_LIST_LAUNCH_PLANS)))
          .addMethod(
            getUpdateLaunchPlanMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateRequest,
                flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateResponse>(
                  this, METHODID_UPDATE_LAUNCH_PLAN)))
          .addMethod(
            getCreateExecutionMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.ExecutionOuterClass.ExecutionCreateRequest,
                flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse>(
                  this, METHODID_CREATE_EXECUTION)))
          .addMethod(
            getRelaunchExecutionMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.ExecutionOuterClass.ExecutionRelaunchRequest,
                flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse>(
                  this, METHODID_RELAUNCH_EXECUTION)))
          .addMethod(
            getGetExecutionMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetRequest,
                flyteidl.admin.ExecutionOuterClass.Execution>(
                  this, METHODID_GET_EXECUTION)))
          .addMethod(
            getGetExecutionDataMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataRequest,
                flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataResponse>(
                  this, METHODID_GET_EXECUTION_DATA)))
          .addMethod(
            getListExecutionsMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.Common.ResourceListRequest,
                flyteidl.admin.ExecutionOuterClass.ExecutionList>(
                  this, METHODID_LIST_EXECUTIONS)))
          .addMethod(
            getTerminateExecutionMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.ExecutionOuterClass.ExecutionTerminateRequest,
                flyteidl.admin.ExecutionOuterClass.ExecutionTerminateResponse>(
                  this, METHODID_TERMINATE_EXECUTION)))
          .addMethod(
            getGetNodeExecutionMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetRequest,
                flyteidl.admin.NodeExecutionOuterClass.NodeExecution>(
                  this, METHODID_GET_NODE_EXECUTION)))
          .addMethod(
            getListNodeExecutionsMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.NodeExecutionOuterClass.NodeExecutionListRequest,
                flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList>(
                  this, METHODID_LIST_NODE_EXECUTIONS)))
          .addMethod(
            getListNodeExecutionsForTaskMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.NodeExecutionOuterClass.NodeExecutionForTaskListRequest,
                flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList>(
                  this, METHODID_LIST_NODE_EXECUTIONS_FOR_TASK)))
          .addMethod(
            getGetNodeExecutionDataMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataRequest,
                flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataResponse>(
                  this, METHODID_GET_NODE_EXECUTION_DATA)))
          .addMethod(
            getRegisterProjectMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.ProjectOuterClass.ProjectRegisterRequest,
                flyteidl.admin.ProjectOuterClass.ProjectRegisterResponse>(
                  this, METHODID_REGISTER_PROJECT)))
          .addMethod(
            getListProjectsMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.ProjectOuterClass.ProjectListRequest,
                flyteidl.admin.ProjectOuterClass.Projects>(
                  this, METHODID_LIST_PROJECTS)))
          .addMethod(
            getCreateWorkflowEventMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.Event.WorkflowExecutionEventRequest,
                flyteidl.admin.Event.WorkflowExecutionEventResponse>(
                  this, METHODID_CREATE_WORKFLOW_EVENT)))
          .addMethod(
            getCreateNodeEventMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.Event.NodeExecutionEventRequest,
                flyteidl.admin.Event.NodeExecutionEventResponse>(
                  this, METHODID_CREATE_NODE_EVENT)))
          .addMethod(
            getCreateTaskEventMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.Event.TaskExecutionEventRequest,
                flyteidl.admin.Event.TaskExecutionEventResponse>(
                  this, METHODID_CREATE_TASK_EVENT)))
          .addMethod(
            getGetTaskExecutionMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetRequest,
                flyteidl.admin.TaskExecutionOuterClass.TaskExecution>(
                  this, METHODID_GET_TASK_EXECUTION)))
          .addMethod(
            getListTaskExecutionsMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.TaskExecutionOuterClass.TaskExecutionListRequest,
                flyteidl.admin.TaskExecutionOuterClass.TaskExecutionList>(
                  this, METHODID_LIST_TASK_EXECUTIONS)))
          .addMethod(
            getGetTaskExecutionDataMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataRequest,
                flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataResponse>(
                  this, METHODID_GET_TASK_EXECUTION_DATA)))
          .build();
    }
  }

  /**
   * <pre>
   * The following defines an RPC service that is also served over HTTP via grpc-gateway.
   * Standard response codes for both are defined here: https://github.com/grpc-ecosystem/grpc-gateway/blob/master/runtime/errors.go
   * </pre>
   */
  public static final class AdminServiceStub extends io.grpc.stub.AbstractStub<AdminServiceStub> {
    private AdminServiceStub(io.grpc.Channel channel) {
      super(channel);
    }

    private AdminServiceStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AdminServiceStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new AdminServiceStub(channel, callOptions);
    }

    /**
     */
    public void createTask(flyteidl.admin.TaskOuterClass.TaskCreateRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.TaskOuterClass.TaskCreateResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCreateTaskMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getTask(flyteidl.admin.Common.ObjectGetRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.TaskOuterClass.Task> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetTaskMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listTaskIds(flyteidl.admin.Common.NamedEntityIdentifierListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.Common.NamedEntityIdentifierList> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListTaskIdsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listTasks(flyteidl.admin.Common.ResourceListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.TaskOuterClass.TaskList> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListTasksMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void createWorkflow(flyteidl.admin.WorkflowOuterClass.WorkflowCreateRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.WorkflowOuterClass.WorkflowCreateResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCreateWorkflowMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getWorkflow(flyteidl.admin.Common.ObjectGetRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.WorkflowOuterClass.Workflow> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetWorkflowMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listWorkflowIds(flyteidl.admin.Common.NamedEntityIdentifierListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.Common.NamedEntityIdentifierList> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListWorkflowIdsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listWorkflows(flyteidl.admin.Common.ResourceListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.WorkflowOuterClass.WorkflowList> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListWorkflowsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void createLaunchPlan(flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCreateLaunchPlanMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getLaunchPlan(flyteidl.admin.Common.ObjectGetRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlan> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetLaunchPlanMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getActiveLaunchPlan(flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlan> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetActiveLaunchPlanMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listActiveLaunchPlans(flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListActiveLaunchPlansMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listLaunchPlanIds(flyteidl.admin.Common.NamedEntityIdentifierListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.Common.NamedEntityIdentifierList> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListLaunchPlanIdsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listLaunchPlans(flyteidl.admin.Common.ResourceListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListLaunchPlansMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateLaunchPlan(flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getUpdateLaunchPlanMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void createExecution(flyteidl.admin.ExecutionOuterClass.ExecutionCreateRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCreateExecutionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void relaunchExecution(flyteidl.admin.ExecutionOuterClass.ExecutionRelaunchRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getRelaunchExecutionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getExecution(flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.Execution> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetExecutionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getExecutionData(flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetExecutionDataMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listExecutions(flyteidl.admin.Common.ResourceListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.ExecutionList> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListExecutionsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void terminateExecution(flyteidl.admin.ExecutionOuterClass.ExecutionTerminateRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.ExecutionTerminateResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getTerminateExecutionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getNodeExecution(flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.NodeExecutionOuterClass.NodeExecution> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetNodeExecutionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listNodeExecutions(flyteidl.admin.NodeExecutionOuterClass.NodeExecutionListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListNodeExecutionsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listNodeExecutionsForTask(flyteidl.admin.NodeExecutionOuterClass.NodeExecutionForTaskListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListNodeExecutionsForTaskMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getNodeExecutionData(flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetNodeExecutionDataMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void registerProject(flyteidl.admin.ProjectOuterClass.ProjectRegisterRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ProjectOuterClass.ProjectRegisterResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getRegisterProjectMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listProjects(flyteidl.admin.ProjectOuterClass.ProjectListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.ProjectOuterClass.Projects> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListProjectsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void createWorkflowEvent(flyteidl.admin.Event.WorkflowExecutionEventRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.Event.WorkflowExecutionEventResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCreateWorkflowEventMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void createNodeEvent(flyteidl.admin.Event.NodeExecutionEventRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.Event.NodeExecutionEventResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCreateNodeEventMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void createTaskEvent(flyteidl.admin.Event.TaskExecutionEventRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.Event.TaskExecutionEventResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCreateTaskEventMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getTaskExecution(flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.TaskExecutionOuterClass.TaskExecution> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetTaskExecutionMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void listTaskExecutions(flyteidl.admin.TaskExecutionOuterClass.TaskExecutionListRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionList> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getListTaskExecutionsMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getTaskExecutionData(flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataRequest request,
        io.grpc.stub.StreamObserver<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetTaskExecutionDataMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * The following defines an RPC service that is also served over HTTP via grpc-gateway.
   * Standard response codes for both are defined here: https://github.com/grpc-ecosystem/grpc-gateway/blob/master/runtime/errors.go
   * </pre>
   */
  public static final class AdminServiceBlockingStub extends io.grpc.stub.AbstractStub<AdminServiceBlockingStub> {
    private AdminServiceBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private AdminServiceBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AdminServiceBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new AdminServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public flyteidl.admin.TaskOuterClass.TaskCreateResponse createTask(flyteidl.admin.TaskOuterClass.TaskCreateRequest request) {
      return blockingUnaryCall(
          getChannel(), getCreateTaskMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.TaskOuterClass.Task getTask(flyteidl.admin.Common.ObjectGetRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetTaskMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.Common.NamedEntityIdentifierList listTaskIds(flyteidl.admin.Common.NamedEntityIdentifierListRequest request) {
      return blockingUnaryCall(
          getChannel(), getListTaskIdsMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.TaskOuterClass.TaskList listTasks(flyteidl.admin.Common.ResourceListRequest request) {
      return blockingUnaryCall(
          getChannel(), getListTasksMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.WorkflowOuterClass.WorkflowCreateResponse createWorkflow(flyteidl.admin.WorkflowOuterClass.WorkflowCreateRequest request) {
      return blockingUnaryCall(
          getChannel(), getCreateWorkflowMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.WorkflowOuterClass.Workflow getWorkflow(flyteidl.admin.Common.ObjectGetRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetWorkflowMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.Common.NamedEntityIdentifierList listWorkflowIds(flyteidl.admin.Common.NamedEntityIdentifierListRequest request) {
      return blockingUnaryCall(
          getChannel(), getListWorkflowIdsMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.WorkflowOuterClass.WorkflowList listWorkflows(flyteidl.admin.Common.ResourceListRequest request) {
      return blockingUnaryCall(
          getChannel(), getListWorkflowsMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateResponse createLaunchPlan(flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateRequest request) {
      return blockingUnaryCall(
          getChannel(), getCreateLaunchPlanMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.LaunchPlanOuterClass.LaunchPlan getLaunchPlan(flyteidl.admin.Common.ObjectGetRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetLaunchPlanMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.LaunchPlanOuterClass.LaunchPlan getActiveLaunchPlan(flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetActiveLaunchPlanMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList listActiveLaunchPlans(flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanListRequest request) {
      return blockingUnaryCall(
          getChannel(), getListActiveLaunchPlansMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.Common.NamedEntityIdentifierList listLaunchPlanIds(flyteidl.admin.Common.NamedEntityIdentifierListRequest request) {
      return blockingUnaryCall(
          getChannel(), getListLaunchPlanIdsMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList listLaunchPlans(flyteidl.admin.Common.ResourceListRequest request) {
      return blockingUnaryCall(
          getChannel(), getListLaunchPlansMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateResponse updateLaunchPlan(flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateRequest request) {
      return blockingUnaryCall(
          getChannel(), getUpdateLaunchPlanMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse createExecution(flyteidl.admin.ExecutionOuterClass.ExecutionCreateRequest request) {
      return blockingUnaryCall(
          getChannel(), getCreateExecutionMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse relaunchExecution(flyteidl.admin.ExecutionOuterClass.ExecutionRelaunchRequest request) {
      return blockingUnaryCall(
          getChannel(), getRelaunchExecutionMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.ExecutionOuterClass.Execution getExecution(flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetExecutionMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataResponse getExecutionData(flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetExecutionDataMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.ExecutionOuterClass.ExecutionList listExecutions(flyteidl.admin.Common.ResourceListRequest request) {
      return blockingUnaryCall(
          getChannel(), getListExecutionsMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.ExecutionOuterClass.ExecutionTerminateResponse terminateExecution(flyteidl.admin.ExecutionOuterClass.ExecutionTerminateRequest request) {
      return blockingUnaryCall(
          getChannel(), getTerminateExecutionMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.NodeExecutionOuterClass.NodeExecution getNodeExecution(flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetNodeExecutionMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList listNodeExecutions(flyteidl.admin.NodeExecutionOuterClass.NodeExecutionListRequest request) {
      return blockingUnaryCall(
          getChannel(), getListNodeExecutionsMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList listNodeExecutionsForTask(flyteidl.admin.NodeExecutionOuterClass.NodeExecutionForTaskListRequest request) {
      return blockingUnaryCall(
          getChannel(), getListNodeExecutionsForTaskMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataResponse getNodeExecutionData(flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetNodeExecutionDataMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.ProjectOuterClass.ProjectRegisterResponse registerProject(flyteidl.admin.ProjectOuterClass.ProjectRegisterRequest request) {
      return blockingUnaryCall(
          getChannel(), getRegisterProjectMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.ProjectOuterClass.Projects listProjects(flyteidl.admin.ProjectOuterClass.ProjectListRequest request) {
      return blockingUnaryCall(
          getChannel(), getListProjectsMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.Event.WorkflowExecutionEventResponse createWorkflowEvent(flyteidl.admin.Event.WorkflowExecutionEventRequest request) {
      return blockingUnaryCall(
          getChannel(), getCreateWorkflowEventMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.Event.NodeExecutionEventResponse createNodeEvent(flyteidl.admin.Event.NodeExecutionEventRequest request) {
      return blockingUnaryCall(
          getChannel(), getCreateNodeEventMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.Event.TaskExecutionEventResponse createTaskEvent(flyteidl.admin.Event.TaskExecutionEventRequest request) {
      return blockingUnaryCall(
          getChannel(), getCreateTaskEventMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.TaskExecutionOuterClass.TaskExecution getTaskExecution(flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetTaskExecutionMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.TaskExecutionOuterClass.TaskExecutionList listTaskExecutions(flyteidl.admin.TaskExecutionOuterClass.TaskExecutionListRequest request) {
      return blockingUnaryCall(
          getChannel(), getListTaskExecutionsMethod(), getCallOptions(), request);
    }

    /**
     */
    public flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataResponse getTaskExecutionData(flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetTaskExecutionDataMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * The following defines an RPC service that is also served over HTTP via grpc-gateway.
   * Standard response codes for both are defined here: https://github.com/grpc-ecosystem/grpc-gateway/blob/master/runtime/errors.go
   * </pre>
   */
  public static final class AdminServiceFutureStub extends io.grpc.stub.AbstractStub<AdminServiceFutureStub> {
    private AdminServiceFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private AdminServiceFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AdminServiceFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new AdminServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.TaskOuterClass.TaskCreateResponse> createTask(
        flyteidl.admin.TaskOuterClass.TaskCreateRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getCreateTaskMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.TaskOuterClass.Task> getTask(
        flyteidl.admin.Common.ObjectGetRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetTaskMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.Common.NamedEntityIdentifierList> listTaskIds(
        flyteidl.admin.Common.NamedEntityIdentifierListRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListTaskIdsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.TaskOuterClass.TaskList> listTasks(
        flyteidl.admin.Common.ResourceListRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListTasksMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.WorkflowOuterClass.WorkflowCreateResponse> createWorkflow(
        flyteidl.admin.WorkflowOuterClass.WorkflowCreateRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getCreateWorkflowMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.WorkflowOuterClass.Workflow> getWorkflow(
        flyteidl.admin.Common.ObjectGetRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetWorkflowMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.Common.NamedEntityIdentifierList> listWorkflowIds(
        flyteidl.admin.Common.NamedEntityIdentifierListRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListWorkflowIdsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.WorkflowOuterClass.WorkflowList> listWorkflows(
        flyteidl.admin.Common.ResourceListRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListWorkflowsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateResponse> createLaunchPlan(
        flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getCreateLaunchPlanMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.LaunchPlanOuterClass.LaunchPlan> getLaunchPlan(
        flyteidl.admin.Common.ObjectGetRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetLaunchPlanMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.LaunchPlanOuterClass.LaunchPlan> getActiveLaunchPlan(
        flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetActiveLaunchPlanMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList> listActiveLaunchPlans(
        flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanListRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListActiveLaunchPlansMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.Common.NamedEntityIdentifierList> listLaunchPlanIds(
        flyteidl.admin.Common.NamedEntityIdentifierListRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListLaunchPlanIdsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList> listLaunchPlans(
        flyteidl.admin.Common.ResourceListRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListLaunchPlansMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateResponse> updateLaunchPlan(
        flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getUpdateLaunchPlanMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse> createExecution(
        flyteidl.admin.ExecutionOuterClass.ExecutionCreateRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getCreateExecutionMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse> relaunchExecution(
        flyteidl.admin.ExecutionOuterClass.ExecutionRelaunchRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getRelaunchExecutionMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.ExecutionOuterClass.Execution> getExecution(
        flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetExecutionMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataResponse> getExecutionData(
        flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetExecutionDataMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.ExecutionOuterClass.ExecutionList> listExecutions(
        flyteidl.admin.Common.ResourceListRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListExecutionsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.ExecutionOuterClass.ExecutionTerminateResponse> terminateExecution(
        flyteidl.admin.ExecutionOuterClass.ExecutionTerminateRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getTerminateExecutionMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.NodeExecutionOuterClass.NodeExecution> getNodeExecution(
        flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetNodeExecutionMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList> listNodeExecutions(
        flyteidl.admin.NodeExecutionOuterClass.NodeExecutionListRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListNodeExecutionsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList> listNodeExecutionsForTask(
        flyteidl.admin.NodeExecutionOuterClass.NodeExecutionForTaskListRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListNodeExecutionsForTaskMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataResponse> getNodeExecutionData(
        flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetNodeExecutionDataMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.ProjectOuterClass.ProjectRegisterResponse> registerProject(
        flyteidl.admin.ProjectOuterClass.ProjectRegisterRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getRegisterProjectMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.ProjectOuterClass.Projects> listProjects(
        flyteidl.admin.ProjectOuterClass.ProjectListRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListProjectsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.Event.WorkflowExecutionEventResponse> createWorkflowEvent(
        flyteidl.admin.Event.WorkflowExecutionEventRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getCreateWorkflowEventMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.Event.NodeExecutionEventResponse> createNodeEvent(
        flyteidl.admin.Event.NodeExecutionEventRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getCreateNodeEventMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.Event.TaskExecutionEventResponse> createTaskEvent(
        flyteidl.admin.Event.TaskExecutionEventRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getCreateTaskEventMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.TaskExecutionOuterClass.TaskExecution> getTaskExecution(
        flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetTaskExecutionMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionList> listTaskExecutions(
        flyteidl.admin.TaskExecutionOuterClass.TaskExecutionListRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getListTaskExecutionsMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataResponse> getTaskExecutionData(
        flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetTaskExecutionDataMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CREATE_TASK = 0;
  private static final int METHODID_GET_TASK = 1;
  private static final int METHODID_LIST_TASK_IDS = 2;
  private static final int METHODID_LIST_TASKS = 3;
  private static final int METHODID_CREATE_WORKFLOW = 4;
  private static final int METHODID_GET_WORKFLOW = 5;
  private static final int METHODID_LIST_WORKFLOW_IDS = 6;
  private static final int METHODID_LIST_WORKFLOWS = 7;
  private static final int METHODID_CREATE_LAUNCH_PLAN = 8;
  private static final int METHODID_GET_LAUNCH_PLAN = 9;
  private static final int METHODID_GET_ACTIVE_LAUNCH_PLAN = 10;
  private static final int METHODID_LIST_ACTIVE_LAUNCH_PLANS = 11;
  private static final int METHODID_LIST_LAUNCH_PLAN_IDS = 12;
  private static final int METHODID_LIST_LAUNCH_PLANS = 13;
  private static final int METHODID_UPDATE_LAUNCH_PLAN = 14;
  private static final int METHODID_CREATE_EXECUTION = 15;
  private static final int METHODID_RELAUNCH_EXECUTION = 16;
  private static final int METHODID_GET_EXECUTION = 17;
  private static final int METHODID_GET_EXECUTION_DATA = 18;
  private static final int METHODID_LIST_EXECUTIONS = 19;
  private static final int METHODID_TERMINATE_EXECUTION = 20;
  private static final int METHODID_GET_NODE_EXECUTION = 21;
  private static final int METHODID_LIST_NODE_EXECUTIONS = 22;
  private static final int METHODID_LIST_NODE_EXECUTIONS_FOR_TASK = 23;
  private static final int METHODID_GET_NODE_EXECUTION_DATA = 24;
  private static final int METHODID_REGISTER_PROJECT = 25;
  private static final int METHODID_LIST_PROJECTS = 26;
  private static final int METHODID_CREATE_WORKFLOW_EVENT = 27;
  private static final int METHODID_CREATE_NODE_EVENT = 28;
  private static final int METHODID_CREATE_TASK_EVENT = 29;
  private static final int METHODID_GET_TASK_EXECUTION = 30;
  private static final int METHODID_LIST_TASK_EXECUTIONS = 31;
  private static final int METHODID_GET_TASK_EXECUTION_DATA = 32;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AdminServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(AdminServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CREATE_TASK:
          serviceImpl.createTask((flyteidl.admin.TaskOuterClass.TaskCreateRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.TaskOuterClass.TaskCreateResponse>) responseObserver);
          break;
        case METHODID_GET_TASK:
          serviceImpl.getTask((flyteidl.admin.Common.ObjectGetRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.TaskOuterClass.Task>) responseObserver);
          break;
        case METHODID_LIST_TASK_IDS:
          serviceImpl.listTaskIds((flyteidl.admin.Common.NamedEntityIdentifierListRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.Common.NamedEntityIdentifierList>) responseObserver);
          break;
        case METHODID_LIST_TASKS:
          serviceImpl.listTasks((flyteidl.admin.Common.ResourceListRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.TaskOuterClass.TaskList>) responseObserver);
          break;
        case METHODID_CREATE_WORKFLOW:
          serviceImpl.createWorkflow((flyteidl.admin.WorkflowOuterClass.WorkflowCreateRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.WorkflowOuterClass.WorkflowCreateResponse>) responseObserver);
          break;
        case METHODID_GET_WORKFLOW:
          serviceImpl.getWorkflow((flyteidl.admin.Common.ObjectGetRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.WorkflowOuterClass.Workflow>) responseObserver);
          break;
        case METHODID_LIST_WORKFLOW_IDS:
          serviceImpl.listWorkflowIds((flyteidl.admin.Common.NamedEntityIdentifierListRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.Common.NamedEntityIdentifierList>) responseObserver);
          break;
        case METHODID_LIST_WORKFLOWS:
          serviceImpl.listWorkflows((flyteidl.admin.Common.ResourceListRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.WorkflowOuterClass.WorkflowList>) responseObserver);
          break;
        case METHODID_CREATE_LAUNCH_PLAN:
          serviceImpl.createLaunchPlan((flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanCreateResponse>) responseObserver);
          break;
        case METHODID_GET_LAUNCH_PLAN:
          serviceImpl.getLaunchPlan((flyteidl.admin.Common.ObjectGetRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlan>) responseObserver);
          break;
        case METHODID_GET_ACTIVE_LAUNCH_PLAN:
          serviceImpl.getActiveLaunchPlan((flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlan>) responseObserver);
          break;
        case METHODID_LIST_ACTIVE_LAUNCH_PLANS:
          serviceImpl.listActiveLaunchPlans((flyteidl.admin.LaunchPlanOuterClass.ActiveLaunchPlanListRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList>) responseObserver);
          break;
        case METHODID_LIST_LAUNCH_PLAN_IDS:
          serviceImpl.listLaunchPlanIds((flyteidl.admin.Common.NamedEntityIdentifierListRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.Common.NamedEntityIdentifierList>) responseObserver);
          break;
        case METHODID_LIST_LAUNCH_PLANS:
          serviceImpl.listLaunchPlans((flyteidl.admin.Common.ResourceListRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanList>) responseObserver);
          break;
        case METHODID_UPDATE_LAUNCH_PLAN:
          serviceImpl.updateLaunchPlan((flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.LaunchPlanOuterClass.LaunchPlanUpdateResponse>) responseObserver);
          break;
        case METHODID_CREATE_EXECUTION:
          serviceImpl.createExecution((flyteidl.admin.ExecutionOuterClass.ExecutionCreateRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse>) responseObserver);
          break;
        case METHODID_RELAUNCH_EXECUTION:
          serviceImpl.relaunchExecution((flyteidl.admin.ExecutionOuterClass.ExecutionRelaunchRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.ExecutionCreateResponse>) responseObserver);
          break;
        case METHODID_GET_EXECUTION:
          serviceImpl.getExecution((flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.Execution>) responseObserver);
          break;
        case METHODID_GET_EXECUTION_DATA:
          serviceImpl.getExecutionData((flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.WorkflowExecutionGetDataResponse>) responseObserver);
          break;
        case METHODID_LIST_EXECUTIONS:
          serviceImpl.listExecutions((flyteidl.admin.Common.ResourceListRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.ExecutionList>) responseObserver);
          break;
        case METHODID_TERMINATE_EXECUTION:
          serviceImpl.terminateExecution((flyteidl.admin.ExecutionOuterClass.ExecutionTerminateRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.ExecutionOuterClass.ExecutionTerminateResponse>) responseObserver);
          break;
        case METHODID_GET_NODE_EXECUTION:
          serviceImpl.getNodeExecution((flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.NodeExecutionOuterClass.NodeExecution>) responseObserver);
          break;
        case METHODID_LIST_NODE_EXECUTIONS:
          serviceImpl.listNodeExecutions((flyteidl.admin.NodeExecutionOuterClass.NodeExecutionListRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList>) responseObserver);
          break;
        case METHODID_LIST_NODE_EXECUTIONS_FOR_TASK:
          serviceImpl.listNodeExecutionsForTask((flyteidl.admin.NodeExecutionOuterClass.NodeExecutionForTaskListRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionList>) responseObserver);
          break;
        case METHODID_GET_NODE_EXECUTION_DATA:
          serviceImpl.getNodeExecutionData((flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.NodeExecutionOuterClass.NodeExecutionGetDataResponse>) responseObserver);
          break;
        case METHODID_REGISTER_PROJECT:
          serviceImpl.registerProject((flyteidl.admin.ProjectOuterClass.ProjectRegisterRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.ProjectOuterClass.ProjectRegisterResponse>) responseObserver);
          break;
        case METHODID_LIST_PROJECTS:
          serviceImpl.listProjects((flyteidl.admin.ProjectOuterClass.ProjectListRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.ProjectOuterClass.Projects>) responseObserver);
          break;
        case METHODID_CREATE_WORKFLOW_EVENT:
          serviceImpl.createWorkflowEvent((flyteidl.admin.Event.WorkflowExecutionEventRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.Event.WorkflowExecutionEventResponse>) responseObserver);
          break;
        case METHODID_CREATE_NODE_EVENT:
          serviceImpl.createNodeEvent((flyteidl.admin.Event.NodeExecutionEventRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.Event.NodeExecutionEventResponse>) responseObserver);
          break;
        case METHODID_CREATE_TASK_EVENT:
          serviceImpl.createTaskEvent((flyteidl.admin.Event.TaskExecutionEventRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.Event.TaskExecutionEventResponse>) responseObserver);
          break;
        case METHODID_GET_TASK_EXECUTION:
          serviceImpl.getTaskExecution((flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.TaskExecutionOuterClass.TaskExecution>) responseObserver);
          break;
        case METHODID_LIST_TASK_EXECUTIONS:
          serviceImpl.listTaskExecutions((flyteidl.admin.TaskExecutionOuterClass.TaskExecutionListRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionList>) responseObserver);
          break;
        case METHODID_GET_TASK_EXECUTION_DATA:
          serviceImpl.getTaskExecutionData((flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataRequest) request,
              (io.grpc.stub.StreamObserver<flyteidl.admin.TaskExecutionOuterClass.TaskExecutionGetDataResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class AdminServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    AdminServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return flyteidl.service.Admin.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("AdminService");
    }
  }

  private static final class AdminServiceFileDescriptorSupplier
      extends AdminServiceBaseDescriptorSupplier {
    AdminServiceFileDescriptorSupplier() {}
  }

  private static final class AdminServiceMethodDescriptorSupplier
      extends AdminServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    AdminServiceMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (AdminServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new AdminServiceFileDescriptorSupplier())
              .addMethod(getCreateTaskMethod())
              .addMethod(getGetTaskMethod())
              .addMethod(getListTaskIdsMethod())
              .addMethod(getListTasksMethod())
              .addMethod(getCreateWorkflowMethod())
              .addMethod(getGetWorkflowMethod())
              .addMethod(getListWorkflowIdsMethod())
              .addMethod(getListWorkflowsMethod())
              .addMethod(getCreateLaunchPlanMethod())
              .addMethod(getGetLaunchPlanMethod())
              .addMethod(getGetActiveLaunchPlanMethod())
              .addMethod(getListActiveLaunchPlansMethod())
              .addMethod(getListLaunchPlanIdsMethod())
              .addMethod(getListLaunchPlansMethod())
              .addMethod(getUpdateLaunchPlanMethod())
              .addMethod(getCreateExecutionMethod())
              .addMethod(getRelaunchExecutionMethod())
              .addMethod(getGetExecutionMethod())
              .addMethod(getGetExecutionDataMethod())
              .addMethod(getListExecutionsMethod())
              .addMethod(getTerminateExecutionMethod())
              .addMethod(getGetNodeExecutionMethod())
              .addMethod(getListNodeExecutionsMethod())
              .addMethod(getListNodeExecutionsForTaskMethod())
              .addMethod(getGetNodeExecutionDataMethod())
              .addMethod(getRegisterProjectMethod())
              .addMethod(getListProjectsMethod())
              .addMethod(getCreateWorkflowEventMethod())
              .addMethod(getCreateNodeEventMethod())
              .addMethod(getCreateTaskEventMethod())
              .addMethod(getGetTaskExecutionMethod())
              .addMethod(getListTaskExecutionsMethod())
              .addMethod(getGetTaskExecutionDataMethod())
              .build();
        }
      }
    }
    return result;
  }
}

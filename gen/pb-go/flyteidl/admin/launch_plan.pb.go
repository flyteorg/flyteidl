// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/admin/launch_plan.proto

package admin

import (
	fmt "fmt"
	core "github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/core"
	proto "github.com/golang/protobuf/proto"
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
	wrappers "github.com/golang/protobuf/ptypes/wrappers"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

// By default any launch plan regardless of state can be used to launch a workflow execution.
// However, at most one version of a launch plan
// (e.g. a NamedEntityIdentifier set of shared project, domain and name values) can be
// active at a time in regards to *schedules*. That is, at most one schedule in a NamedEntityIdentifier
// group will be observed and trigger executions at a defined cadence.
type LaunchPlanState int32

const (
	LaunchPlanState_INACTIVE LaunchPlanState = 0
	LaunchPlanState_ACTIVE   LaunchPlanState = 1
)

var LaunchPlanState_name = map[int32]string{
	0: "INACTIVE",
	1: "ACTIVE",
}

var LaunchPlanState_value = map[string]int32{
	"INACTIVE": 0,
	"ACTIVE":   1,
}

func (x LaunchPlanState) String() string {
	return proto.EnumName(LaunchPlanState_name, int32(x))
}

func (LaunchPlanState) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_368a863574f5e699, []int{0}
}

// Request to register a launch plan. The included LaunchPlanSpec may have a complete or incomplete set of inputs required
// to launch a workflow execution. By default all launch plans are registered in state INACTIVE. If you wish to
// set the state to ACTIVE, you must submit a LaunchPlanUpdateRequest, after you have successfully created a launch plan.
type LaunchPlanCreateRequest struct {
	// Uniquely identifies a launch plan entity.
	Id *core.Identifier `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// User-provided launch plan details, including reference workflow, inputs and other metadata.
	Spec                 *LaunchPlanSpec `protobuf:"bytes,2,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *LaunchPlanCreateRequest) Reset()         { *m = LaunchPlanCreateRequest{} }
func (m *LaunchPlanCreateRequest) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanCreateRequest) ProtoMessage()    {}
func (*LaunchPlanCreateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_368a863574f5e699, []int{0}
}

func (m *LaunchPlanCreateRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanCreateRequest.Unmarshal(m, b)
}
func (m *LaunchPlanCreateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanCreateRequest.Marshal(b, m, deterministic)
}
func (m *LaunchPlanCreateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanCreateRequest.Merge(m, src)
}
func (m *LaunchPlanCreateRequest) XXX_Size() int {
	return xxx_messageInfo_LaunchPlanCreateRequest.Size(m)
}
func (m *LaunchPlanCreateRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlanCreateRequest.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlanCreateRequest proto.InternalMessageInfo

func (m *LaunchPlanCreateRequest) GetId() *core.Identifier {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *LaunchPlanCreateRequest) GetSpec() *LaunchPlanSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type LaunchPlanCreateResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LaunchPlanCreateResponse) Reset()         { *m = LaunchPlanCreateResponse{} }
func (m *LaunchPlanCreateResponse) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanCreateResponse) ProtoMessage()    {}
func (*LaunchPlanCreateResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_368a863574f5e699, []int{1}
}

func (m *LaunchPlanCreateResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanCreateResponse.Unmarshal(m, b)
}
func (m *LaunchPlanCreateResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanCreateResponse.Marshal(b, m, deterministic)
}
func (m *LaunchPlanCreateResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanCreateResponse.Merge(m, src)
}
func (m *LaunchPlanCreateResponse) XXX_Size() int {
	return xxx_messageInfo_LaunchPlanCreateResponse.Size(m)
}
func (m *LaunchPlanCreateResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlanCreateResponse.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlanCreateResponse proto.InternalMessageInfo

// A LaunchPlan provides the capability to templatize workflow executions.
// Launch plans simplify associating one or more schedules, inputs and notifications with your workflows.
// Launch plans can be shared and used to trigger executions with predefined inputs even when a workflow
// definition doesn't necessarily have a default value for said input.
type LaunchPlan struct {
	// Uniquely identifies a launch plan entity.
	Id *core.Identifier `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// User-provided launch plan details, including reference workflow, inputs and other metadata.
	Spec *LaunchPlanSpec `protobuf:"bytes,2,opt,name=spec,proto3" json:"spec,omitempty"`
	// Values computed by the flyte platform after launch plan registration.
	Closure              *LaunchPlanClosure `protobuf:"bytes,3,opt,name=closure,proto3" json:"closure,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *LaunchPlan) Reset()         { *m = LaunchPlan{} }
func (m *LaunchPlan) String() string { return proto.CompactTextString(m) }
func (*LaunchPlan) ProtoMessage()    {}
func (*LaunchPlan) Descriptor() ([]byte, []int) {
	return fileDescriptor_368a863574f5e699, []int{2}
}

func (m *LaunchPlan) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlan.Unmarshal(m, b)
}
func (m *LaunchPlan) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlan.Marshal(b, m, deterministic)
}
func (m *LaunchPlan) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlan.Merge(m, src)
}
func (m *LaunchPlan) XXX_Size() int {
	return xxx_messageInfo_LaunchPlan.Size(m)
}
func (m *LaunchPlan) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlan.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlan proto.InternalMessageInfo

func (m *LaunchPlan) GetId() *core.Identifier {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *LaunchPlan) GetSpec() *LaunchPlanSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

func (m *LaunchPlan) GetClosure() *LaunchPlanClosure {
	if m != nil {
		return m.Closure
	}
	return nil
}

// Response object for list launch plan requests.
// See :ref:`ref_flyteidl.admin.LaunchPlan` for more details
type LaunchPlanList struct {
	LaunchPlans []*LaunchPlan `protobuf:"bytes,1,rep,name=launch_plans,json=launchPlans,proto3" json:"launch_plans,omitempty"`
	// In the case of multiple pages of results, the server-provided token can be used to fetch the next page
	// in a query. If there are no more results, this value will be empty.
	Token                string   `protobuf:"bytes,2,opt,name=token,proto3" json:"token,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LaunchPlanList) Reset()         { *m = LaunchPlanList{} }
func (m *LaunchPlanList) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanList) ProtoMessage()    {}
func (*LaunchPlanList) Descriptor() ([]byte, []int) {
	return fileDescriptor_368a863574f5e699, []int{3}
}

func (m *LaunchPlanList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanList.Unmarshal(m, b)
}
func (m *LaunchPlanList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanList.Marshal(b, m, deterministic)
}
func (m *LaunchPlanList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanList.Merge(m, src)
}
func (m *LaunchPlanList) XXX_Size() int {
	return xxx_messageInfo_LaunchPlanList.Size(m)
}
func (m *LaunchPlanList) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlanList.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlanList proto.InternalMessageInfo

func (m *LaunchPlanList) GetLaunchPlans() []*LaunchPlan {
	if m != nil {
		return m.LaunchPlans
	}
	return nil
}

func (m *LaunchPlanList) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

// Defines permissions associated with executions created by this launch plan spec.
// Use either of these roles when they have permissions required by your workflow execution.
// Deprecated.
//
// Deprecated: Do not use.
type Auth struct {
	// Defines an optional iam role which will be used for tasks run in executions created with this launch plan.
	AssumableIamRole string `protobuf:"bytes,1,opt,name=assumable_iam_role,json=assumableIamRole,proto3" json:"assumable_iam_role,omitempty"`
	// Defines an optional kubernetes service account which will be used for tasks run in executions created with this launch plan.
	KubernetesServiceAccount string   `protobuf:"bytes,2,opt,name=kubernetes_service_account,json=kubernetesServiceAccount,proto3" json:"kubernetes_service_account,omitempty"`
	XXX_NoUnkeyedLiteral     struct{} `json:"-"`
	XXX_unrecognized         []byte   `json:"-"`
	XXX_sizecache            int32    `json:"-"`
}

func (m *Auth) Reset()         { *m = Auth{} }
func (m *Auth) String() string { return proto.CompactTextString(m) }
func (*Auth) ProtoMessage()    {}
func (*Auth) Descriptor() ([]byte, []int) {
	return fileDescriptor_368a863574f5e699, []int{4}
}

func (m *Auth) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Auth.Unmarshal(m, b)
}
func (m *Auth) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Auth.Marshal(b, m, deterministic)
}
func (m *Auth) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Auth.Merge(m, src)
}
func (m *Auth) XXX_Size() int {
	return xxx_messageInfo_Auth.Size(m)
}
func (m *Auth) XXX_DiscardUnknown() {
	xxx_messageInfo_Auth.DiscardUnknown(m)
}

var xxx_messageInfo_Auth proto.InternalMessageInfo

func (m *Auth) GetAssumableIamRole() string {
	if m != nil {
		return m.AssumableIamRole
	}
	return ""
}

func (m *Auth) GetKubernetesServiceAccount() string {
	if m != nil {
		return m.KubernetesServiceAccount
	}
	return ""
}

// User-provided launch plan definition and configuration values.
type LaunchPlanSpec struct {
	// Reference to the Workflow template that the launch plan references
	WorkflowId *core.Identifier `protobuf:"bytes,1,opt,name=workflow_id,json=workflowId,proto3" json:"workflow_id,omitempty"`
	// Metadata for the Launch Plan
	EntityMetadata *LaunchPlanMetadata `protobuf:"bytes,2,opt,name=entity_metadata,json=entityMetadata,proto3" json:"entity_metadata,omitempty"`
	// Input values to be passed for the execution.
	// These can be overriden when an execution is created with this launch plan.
	DefaultInputs *core.ParameterMap `protobuf:"bytes,3,opt,name=default_inputs,json=defaultInputs,proto3" json:"default_inputs,omitempty"`
	// Fixed, non-overridable inputs for the Launch Plan.
	// These can not be overriden when an execution is created with this launch plan.
	FixedInputs *core.LiteralMap `protobuf:"bytes,4,opt,name=fixed_inputs,json=fixedInputs,proto3" json:"fixed_inputs,omitempty"`
	// String to indicate the role to use to execute the workflow underneath
	Role string `protobuf:"bytes,5,opt,name=role,proto3" json:"role,omitempty"` // Deprecated: Do not use.
	// Custom labels to be applied to the execution resource.
	Labels *Labels `protobuf:"bytes,6,opt,name=labels,proto3" json:"labels,omitempty"`
	// Custom annotations to be applied to the execution resource.
	Annotations *Annotations `protobuf:"bytes,7,opt,name=annotations,proto3" json:"annotations,omitempty"`
	// Indicates the permission associated with workflow executions triggered with this launch plan.
	Auth     *Auth     `protobuf:"bytes,8,opt,name=auth,proto3" json:"auth,omitempty"`                         // Deprecated: Do not use.
	AuthRole *AuthRole `protobuf:"bytes,9,opt,name=auth_role,json=authRole,proto3" json:"auth_role,omitempty"` // Deprecated: Do not use.
	// Indicates security context for permissions triggered with this launch plan
	SecurityContext *core.SecurityContext `protobuf:"bytes,10,opt,name=security_context,json=securityContext,proto3" json:"security_context,omitempty"`
	// Indicates the runtime priority of the execution.
	QualityOfService *core.QualityOfService `protobuf:"bytes,16,opt,name=quality_of_service,json=qualityOfService,proto3" json:"quality_of_service,omitempty"`
	// Encapsulates user settings pertaining to offloaded data (i.e. Blobs, Schema, query data, etc.).
	RawOutputDataConfig *RawOutputDataConfig `protobuf:"bytes,17,opt,name=raw_output_data_config,json=rawOutputDataConfig,proto3" json:"raw_output_data_config,omitempty"`
	// Controls the maximum number of tasknodes that can be run in parallel for the entire workflow.
	// This is useful to achieve fairness. Note: MapTasks are regarded as one unit,
	// and parallelism/concurrency of MapTasks is independent from this.
	MaxParallelism int32 `protobuf:"varint,18,opt,name=max_parallelism,json=maxParallelism,proto3" json:"max_parallelism,omitempty"`
	// Allows for the interruptible flag of a workflow to be overwritten for a single execution.
	// Omitting this field uses the workflow's value as a default.
	// As we need to distinguish between the field not being provided and its default value false, we have to use a wrapper
	// around the bool field.
	Interruptible *wrappers.BoolValue `protobuf:"bytes,19,opt,name=interruptible,proto3" json:"interruptible,omitempty"`
	// Allows for all cached values of a workflow and its tasks to be skipped for a single execution.
	// If enabled, all calculations are performed even if cached results would be available, overwriting the stored
	// data once execution finishes successfully.
	SkipCache            bool     `protobuf:"varint,20,opt,name=skip_cache,json=skipCache,proto3" json:"skip_cache,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LaunchPlanSpec) Reset()         { *m = LaunchPlanSpec{} }
func (m *LaunchPlanSpec) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanSpec) ProtoMessage()    {}
func (*LaunchPlanSpec) Descriptor() ([]byte, []int) {
	return fileDescriptor_368a863574f5e699, []int{5}
}

func (m *LaunchPlanSpec) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanSpec.Unmarshal(m, b)
}
func (m *LaunchPlanSpec) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanSpec.Marshal(b, m, deterministic)
}
func (m *LaunchPlanSpec) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanSpec.Merge(m, src)
}
func (m *LaunchPlanSpec) XXX_Size() int {
	return xxx_messageInfo_LaunchPlanSpec.Size(m)
}
func (m *LaunchPlanSpec) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlanSpec.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlanSpec proto.InternalMessageInfo

func (m *LaunchPlanSpec) GetWorkflowId() *core.Identifier {
	if m != nil {
		return m.WorkflowId
	}
	return nil
}

func (m *LaunchPlanSpec) GetEntityMetadata() *LaunchPlanMetadata {
	if m != nil {
		return m.EntityMetadata
	}
	return nil
}

func (m *LaunchPlanSpec) GetDefaultInputs() *core.ParameterMap {
	if m != nil {
		return m.DefaultInputs
	}
	return nil
}

func (m *LaunchPlanSpec) GetFixedInputs() *core.LiteralMap {
	if m != nil {
		return m.FixedInputs
	}
	return nil
}

// Deprecated: Do not use.
func (m *LaunchPlanSpec) GetRole() string {
	if m != nil {
		return m.Role
	}
	return ""
}

func (m *LaunchPlanSpec) GetLabels() *Labels {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *LaunchPlanSpec) GetAnnotations() *Annotations {
	if m != nil {
		return m.Annotations
	}
	return nil
}

// Deprecated: Do not use.
func (m *LaunchPlanSpec) GetAuth() *Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

// Deprecated: Do not use.
func (m *LaunchPlanSpec) GetAuthRole() *AuthRole {
	if m != nil {
		return m.AuthRole
	}
	return nil
}

func (m *LaunchPlanSpec) GetSecurityContext() *core.SecurityContext {
	if m != nil {
		return m.SecurityContext
	}
	return nil
}

func (m *LaunchPlanSpec) GetQualityOfService() *core.QualityOfService {
	if m != nil {
		return m.QualityOfService
	}
	return nil
}

func (m *LaunchPlanSpec) GetRawOutputDataConfig() *RawOutputDataConfig {
	if m != nil {
		return m.RawOutputDataConfig
	}
	return nil
}

func (m *LaunchPlanSpec) GetMaxParallelism() int32 {
	if m != nil {
		return m.MaxParallelism
	}
	return 0
}

func (m *LaunchPlanSpec) GetInterruptible() *wrappers.BoolValue {
	if m != nil {
		return m.Interruptible
	}
	return nil
}

func (m *LaunchPlanSpec) GetSkipCache() bool {
	if m != nil {
		return m.SkipCache
	}
	return false
}

// Values computed by the flyte platform after launch plan registration.
// These include expected_inputs required to be present in a CreateExecutionRequest
// to launch the reference workflow as well timestamp values associated with the launch plan.
type LaunchPlanClosure struct {
	// Indicate the Launch plan state.
	State LaunchPlanState `protobuf:"varint,1,opt,name=state,proto3,enum=flyteidl.admin.LaunchPlanState" json:"state,omitempty"`
	// Indicates the set of inputs expected when creating an execution with the Launch plan
	ExpectedInputs *core.ParameterMap `protobuf:"bytes,2,opt,name=expected_inputs,json=expectedInputs,proto3" json:"expected_inputs,omitempty"`
	// Indicates the set of outputs expected to be produced by creating an execution with the Launch plan
	ExpectedOutputs *core.VariableMap `protobuf:"bytes,3,opt,name=expected_outputs,json=expectedOutputs,proto3" json:"expected_outputs,omitempty"`
	// Time at which the launch plan was created.
	CreatedAt *timestamp.Timestamp `protobuf:"bytes,4,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	// Time at which the launch plan was last updated.
	UpdatedAt            *timestamp.Timestamp `protobuf:"bytes,5,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *LaunchPlanClosure) Reset()         { *m = LaunchPlanClosure{} }
func (m *LaunchPlanClosure) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanClosure) ProtoMessage()    {}
func (*LaunchPlanClosure) Descriptor() ([]byte, []int) {
	return fileDescriptor_368a863574f5e699, []int{6}
}

func (m *LaunchPlanClosure) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanClosure.Unmarshal(m, b)
}
func (m *LaunchPlanClosure) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanClosure.Marshal(b, m, deterministic)
}
func (m *LaunchPlanClosure) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanClosure.Merge(m, src)
}
func (m *LaunchPlanClosure) XXX_Size() int {
	return xxx_messageInfo_LaunchPlanClosure.Size(m)
}
func (m *LaunchPlanClosure) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlanClosure.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlanClosure proto.InternalMessageInfo

func (m *LaunchPlanClosure) GetState() LaunchPlanState {
	if m != nil {
		return m.State
	}
	return LaunchPlanState_INACTIVE
}

func (m *LaunchPlanClosure) GetExpectedInputs() *core.ParameterMap {
	if m != nil {
		return m.ExpectedInputs
	}
	return nil
}

func (m *LaunchPlanClosure) GetExpectedOutputs() *core.VariableMap {
	if m != nil {
		return m.ExpectedOutputs
	}
	return nil
}

func (m *LaunchPlanClosure) GetCreatedAt() *timestamp.Timestamp {
	if m != nil {
		return m.CreatedAt
	}
	return nil
}

func (m *LaunchPlanClosure) GetUpdatedAt() *timestamp.Timestamp {
	if m != nil {
		return m.UpdatedAt
	}
	return nil
}

// Additional launch plan attributes included in the LaunchPlanSpec not strictly required to launch
// the reference workflow.
type LaunchPlanMetadata struct {
	// Schedule to execute the Launch Plan
	Schedule *Schedule `protobuf:"bytes,1,opt,name=schedule,proto3" json:"schedule,omitempty"`
	// List of notifications based on Execution status transitions
	Notifications        []*Notification `protobuf:"bytes,2,rep,name=notifications,proto3" json:"notifications,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *LaunchPlanMetadata) Reset()         { *m = LaunchPlanMetadata{} }
func (m *LaunchPlanMetadata) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanMetadata) ProtoMessage()    {}
func (*LaunchPlanMetadata) Descriptor() ([]byte, []int) {
	return fileDescriptor_368a863574f5e699, []int{7}
}

func (m *LaunchPlanMetadata) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanMetadata.Unmarshal(m, b)
}
func (m *LaunchPlanMetadata) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanMetadata.Marshal(b, m, deterministic)
}
func (m *LaunchPlanMetadata) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanMetadata.Merge(m, src)
}
func (m *LaunchPlanMetadata) XXX_Size() int {
	return xxx_messageInfo_LaunchPlanMetadata.Size(m)
}
func (m *LaunchPlanMetadata) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlanMetadata.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlanMetadata proto.InternalMessageInfo

func (m *LaunchPlanMetadata) GetSchedule() *Schedule {
	if m != nil {
		return m.Schedule
	}
	return nil
}

func (m *LaunchPlanMetadata) GetNotifications() []*Notification {
	if m != nil {
		return m.Notifications
	}
	return nil
}

// Request to set the referenced launch plan state to the configured value.
// See :ref:`ref_flyteidl.admin.LaunchPlan` for more details
type LaunchPlanUpdateRequest struct {
	// Identifier of launch plan for which to change state.
	// +required.
	Id *core.Identifier `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Desired state to apply to the launch plan.
	// +required.
	State                LaunchPlanState `protobuf:"varint,2,opt,name=state,proto3,enum=flyteidl.admin.LaunchPlanState" json:"state,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *LaunchPlanUpdateRequest) Reset()         { *m = LaunchPlanUpdateRequest{} }
func (m *LaunchPlanUpdateRequest) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanUpdateRequest) ProtoMessage()    {}
func (*LaunchPlanUpdateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_368a863574f5e699, []int{8}
}

func (m *LaunchPlanUpdateRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanUpdateRequest.Unmarshal(m, b)
}
func (m *LaunchPlanUpdateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanUpdateRequest.Marshal(b, m, deterministic)
}
func (m *LaunchPlanUpdateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanUpdateRequest.Merge(m, src)
}
func (m *LaunchPlanUpdateRequest) XXX_Size() int {
	return xxx_messageInfo_LaunchPlanUpdateRequest.Size(m)
}
func (m *LaunchPlanUpdateRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlanUpdateRequest.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlanUpdateRequest proto.InternalMessageInfo

func (m *LaunchPlanUpdateRequest) GetId() *core.Identifier {
	if m != nil {
		return m.Id
	}
	return nil
}

func (m *LaunchPlanUpdateRequest) GetState() LaunchPlanState {
	if m != nil {
		return m.State
	}
	return LaunchPlanState_INACTIVE
}

// Purposefully empty, may be populated in the future.
type LaunchPlanUpdateResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LaunchPlanUpdateResponse) Reset()         { *m = LaunchPlanUpdateResponse{} }
func (m *LaunchPlanUpdateResponse) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanUpdateResponse) ProtoMessage()    {}
func (*LaunchPlanUpdateResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_368a863574f5e699, []int{9}
}

func (m *LaunchPlanUpdateResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanUpdateResponse.Unmarshal(m, b)
}
func (m *LaunchPlanUpdateResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanUpdateResponse.Marshal(b, m, deterministic)
}
func (m *LaunchPlanUpdateResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanUpdateResponse.Merge(m, src)
}
func (m *LaunchPlanUpdateResponse) XXX_Size() int {
	return xxx_messageInfo_LaunchPlanUpdateResponse.Size(m)
}
func (m *LaunchPlanUpdateResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlanUpdateResponse.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlanUpdateResponse proto.InternalMessageInfo

// Represents a request struct for finding an active launch plan for a given NamedEntityIdentifier
// See :ref:`ref_flyteidl.admin.LaunchPlan` for more details
type ActiveLaunchPlanRequest struct {
	// +required.
	Id                   *NamedEntityIdentifier `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *ActiveLaunchPlanRequest) Reset()         { *m = ActiveLaunchPlanRequest{} }
func (m *ActiveLaunchPlanRequest) String() string { return proto.CompactTextString(m) }
func (*ActiveLaunchPlanRequest) ProtoMessage()    {}
func (*ActiveLaunchPlanRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_368a863574f5e699, []int{10}
}

func (m *ActiveLaunchPlanRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ActiveLaunchPlanRequest.Unmarshal(m, b)
}
func (m *ActiveLaunchPlanRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ActiveLaunchPlanRequest.Marshal(b, m, deterministic)
}
func (m *ActiveLaunchPlanRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ActiveLaunchPlanRequest.Merge(m, src)
}
func (m *ActiveLaunchPlanRequest) XXX_Size() int {
	return xxx_messageInfo_ActiveLaunchPlanRequest.Size(m)
}
func (m *ActiveLaunchPlanRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ActiveLaunchPlanRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ActiveLaunchPlanRequest proto.InternalMessageInfo

func (m *ActiveLaunchPlanRequest) GetId() *NamedEntityIdentifier {
	if m != nil {
		return m.Id
	}
	return nil
}

// Represents a request structure to list active launch plans within a project/domain.
// See :ref:`ref_flyteidl.admin.LaunchPlan` for more details
type ActiveLaunchPlanListRequest struct {
	// Name of the project that contains the identifiers.
	// +required.
	Project string `protobuf:"bytes,1,opt,name=project,proto3" json:"project,omitempty"`
	// Name of the domain the identifiers belongs to within the project.
	// +required.
	Domain string `protobuf:"bytes,2,opt,name=domain,proto3" json:"domain,omitempty"`
	// Indicates the number of resources to be returned.
	// +required.
	Limit uint32 `protobuf:"varint,3,opt,name=limit,proto3" json:"limit,omitempty"`
	// In the case of multiple pages of results, the server-provided token can be used to fetch the next page
	// in a query.
	// +optional
	Token string `protobuf:"bytes,4,opt,name=token,proto3" json:"token,omitempty"`
	// Sort ordering.
	// +optional
	SortBy               *Sort    `protobuf:"bytes,5,opt,name=sort_by,json=sortBy,proto3" json:"sort_by,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ActiveLaunchPlanListRequest) Reset()         { *m = ActiveLaunchPlanListRequest{} }
func (m *ActiveLaunchPlanListRequest) String() string { return proto.CompactTextString(m) }
func (*ActiveLaunchPlanListRequest) ProtoMessage()    {}
func (*ActiveLaunchPlanListRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_368a863574f5e699, []int{11}
}

func (m *ActiveLaunchPlanListRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ActiveLaunchPlanListRequest.Unmarshal(m, b)
}
func (m *ActiveLaunchPlanListRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ActiveLaunchPlanListRequest.Marshal(b, m, deterministic)
}
func (m *ActiveLaunchPlanListRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ActiveLaunchPlanListRequest.Merge(m, src)
}
func (m *ActiveLaunchPlanListRequest) XXX_Size() int {
	return xxx_messageInfo_ActiveLaunchPlanListRequest.Size(m)
}
func (m *ActiveLaunchPlanListRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ActiveLaunchPlanListRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ActiveLaunchPlanListRequest proto.InternalMessageInfo

func (m *ActiveLaunchPlanListRequest) GetProject() string {
	if m != nil {
		return m.Project
	}
	return ""
}

func (m *ActiveLaunchPlanListRequest) GetDomain() string {
	if m != nil {
		return m.Domain
	}
	return ""
}

func (m *ActiveLaunchPlanListRequest) GetLimit() uint32 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func (m *ActiveLaunchPlanListRequest) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func (m *ActiveLaunchPlanListRequest) GetSortBy() *Sort {
	if m != nil {
		return m.SortBy
	}
	return nil
}

func init() {
	proto.RegisterEnum("flyteidl.admin.LaunchPlanState", LaunchPlanState_name, LaunchPlanState_value)
	proto.RegisterType((*LaunchPlanCreateRequest)(nil), "flyteidl.admin.LaunchPlanCreateRequest")
	proto.RegisterType((*LaunchPlanCreateResponse)(nil), "flyteidl.admin.LaunchPlanCreateResponse")
	proto.RegisterType((*LaunchPlan)(nil), "flyteidl.admin.LaunchPlan")
	proto.RegisterType((*LaunchPlanList)(nil), "flyteidl.admin.LaunchPlanList")
	proto.RegisterType((*Auth)(nil), "flyteidl.admin.Auth")
	proto.RegisterType((*LaunchPlanSpec)(nil), "flyteidl.admin.LaunchPlanSpec")
	proto.RegisterType((*LaunchPlanClosure)(nil), "flyteidl.admin.LaunchPlanClosure")
	proto.RegisterType((*LaunchPlanMetadata)(nil), "flyteidl.admin.LaunchPlanMetadata")
	proto.RegisterType((*LaunchPlanUpdateRequest)(nil), "flyteidl.admin.LaunchPlanUpdateRequest")
	proto.RegisterType((*LaunchPlanUpdateResponse)(nil), "flyteidl.admin.LaunchPlanUpdateResponse")
	proto.RegisterType((*ActiveLaunchPlanRequest)(nil), "flyteidl.admin.ActiveLaunchPlanRequest")
	proto.RegisterType((*ActiveLaunchPlanListRequest)(nil), "flyteidl.admin.ActiveLaunchPlanListRequest")
}

func init() { proto.RegisterFile("flyteidl/admin/launch_plan.proto", fileDescriptor_368a863574f5e699) }

var fileDescriptor_368a863574f5e699 = []byte{
	// 1131 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x56, 0xdb, 0x8e, 0x1b, 0x45,
	0x13, 0xfe, 0xed, 0xec, 0xb1, 0x9c, 0xf5, 0x3a, 0x9d, 0x68, 0x33, 0xbf, 0x73, 0x5a, 0x8c, 0x10,
	0x0b, 0x24, 0xb6, 0x14, 0x88, 0x50, 0x42, 0x22, 0x61, 0x3b, 0xb9, 0xb0, 0xc8, 0x61, 0xe9, 0x0d,
	0x11, 0xe2, 0x66, 0xd4, 0x9e, 0x29, 0xdb, 0xcd, 0xf6, 0x4c, 0x4f, 0xba, 0x7b, 0xb2, 0x5e, 0xf1,
	0x04, 0xdc, 0xf0, 0x1c, 0x88, 0x77, 0xe1, 0x9d, 0xd0, 0xf4, 0xf4, 0xf8, 0x30, 0x93, 0x55, 0x00,
	0x89, 0xab, 0xdd, 0xea, 0xfa, 0xbe, 0xea, 0xaa, 0x9a, 0xea, 0xaf, 0x0c, 0x87, 0x13, 0x71, 0x6e,
	0x90, 0x87, 0xa2, 0xc7, 0xc2, 0x88, 0xc7, 0x3d, 0xc1, 0xd2, 0x38, 0x98, 0xf9, 0x89, 0x60, 0x71,
	0x37, 0x51, 0xd2, 0x48, 0xd2, 0x2c, 0x10, 0x5d, 0x8b, 0x68, 0xdf, 0x5a, 0x30, 0x02, 0xa9, 0xb0,
	0x87, 0x73, 0x0c, 0x52, 0xc3, 0xa5, 0x83, 0xb7, 0x6f, 0xae, 0xbb, 0x05, 0x37, 0xa8, 0x98, 0xd0,
	0xce, 0x7b, 0x7b, 0xdd, 0xcb, 0x43, 0x8c, 0x0d, 0x9f, 0x70, 0x54, 0xce, 0x5f, 0x0a, 0xce, 0x63,
	0x83, 0x6a, 0xc2, 0x02, 0x7c, 0x7f, 0x70, 0x8d, 0x41, 0xaa, 0xb8, 0x39, 0xaf, 0x90, 0xf3, 0x5a,
	0x74, 0x30, 0xc3, 0x30, 0x15, 0x05, 0xf9, 0x46, 0xc9, 0x1d, 0xc8, 0x28, 0x5a, 0xa4, 0x7d, 0x67,
	0x2a, 0xe5, 0x54, 0x60, 0xcf, 0x5a, 0xe3, 0x74, 0xd2, 0x33, 0x3c, 0x42, 0x6d, 0x58, 0x94, 0x14,
	0x99, 0x97, 0x01, 0x67, 0x8a, 0x25, 0x09, 0x2a, 0x57, 0x59, 0x67, 0x0e, 0xd7, 0x9f, 0xdb, 0xde,
	0x1d, 0x0b, 0x16, 0x0f, 0x15, 0x32, 0x83, 0x14, 0xdf, 0xa6, 0xa8, 0x0d, 0xf9, 0x0c, 0xea, 0x3c,
	0xf4, 0x6a, 0x87, 0xb5, 0xa3, 0xc6, 0xfd, 0xff, 0x77, 0x17, 0xed, 0xcc, 0x4a, 0xe8, 0x8e, 0x16,
	0x1d, 0xa0, 0x75, 0x1e, 0x92, 0xfb, 0xb0, 0xa1, 0x13, 0x0c, 0xbc, 0xba, 0x05, 0xdf, 0xee, 0xae,
	0xf7, 0xbe, 0xbb, 0xbc, 0xe1, 0x24, 0xc1, 0x80, 0x5a, 0x6c, 0xa7, 0x0d, 0x5e, 0xf5, 0x66, 0x9d,
	0xc8, 0x58, 0x63, 0xe7, 0xf7, 0x1a, 0xc0, 0xd2, 0xf9, 0x1f, 0x67, 0x42, 0xbe, 0x81, 0xed, 0x40,
	0x48, 0x9d, 0x2a, 0xf4, 0x2e, 0x59, 0xda, 0x47, 0x17, 0xd3, 0x86, 0x39, 0x90, 0x16, 0x8c, 0x0e,
	0x42, 0x73, 0xe9, 0x7d, 0xce, 0xb5, 0x21, 0x4f, 0xe0, 0xf2, 0xca, 0x38, 0x6a, 0xaf, 0x76, 0x78,
	0xe9, 0xa8, 0x71, 0xbf, 0x7d, 0x71, 0x4c, 0xda, 0x10, 0x8b, 0xff, 0x35, 0xb9, 0x06, 0x9b, 0x46,
	0x9e, 0x62, 0x6c, 0x4b, 0xd8, 0xa5, 0xb9, 0xd1, 0x79, 0x07, 0x1b, 0xfd, 0xd4, 0xcc, 0xc8, 0x5d,
	0x20, 0x4c, 0xeb, 0x34, 0x62, 0x63, 0x81, 0x3e, 0x67, 0x91, 0xaf, 0xa4, 0x40, 0xdb, 0x9a, 0x5d,
	0xda, 0x5a, 0x78, 0x46, 0x2c, 0xa2, 0x52, 0x20, 0x79, 0x0c, 0xed, 0xd3, 0x74, 0x8c, 0x2a, 0x46,
	0x83, 0xda, 0xd7, 0xa8, 0xde, 0xf1, 0x00, 0x7d, 0x16, 0x04, 0x32, 0x8d, 0x8d, 0xbb, 0xc0, 0x5b,
	0x22, 0x4e, 0x72, 0x40, 0x3f, 0xf7, 0x3f, 0xaa, 0x7b, 0xb5, 0xce, 0xaf, 0xdb, 0xab, 0xf5, 0x65,
	0x4d, 0x23, 0x8f, 0xa0, 0x71, 0x26, 0xd5, 0xe9, 0x44, 0xc8, 0x33, 0xff, 0xef, 0x7c, 0x16, 0x28,
	0xd0, 0xa3, 0x90, 0x7c, 0x07, 0xfb, 0xd9, 0xb9, 0x39, 0xf7, 0x23, 0x34, 0x2c, 0x64, 0x86, 0xb9,
	0x2f, 0xd5, 0xb9, 0xb8, 0x3d, 0x2f, 0x1c, 0x92, 0x36, 0x73, 0x6a, 0x61, 0x93, 0x01, 0x34, 0x43,
	0x9c, 0xb0, 0x54, 0x18, 0x9f, 0xc7, 0x49, 0x6a, 0xb4, 0xfb, 0x7c, 0x37, 0x4a, 0xb9, 0x1c, 0x33,
	0xc5, 0x22, 0x34, 0xa8, 0x5e, 0xb0, 0x84, 0xee, 0x39, 0xca, 0xc8, 0x32, 0xc8, 0x63, 0xb8, 0x3c,
	0xe1, 0x73, 0x0c, 0x8b, 0x08, 0x1b, 0xef, 0xad, 0xe6, 0x79, 0x2e, 0x07, 0x19, 0xbf, 0x61, 0xe1,
	0x8e, 0x7d, 0x00, 0x1b, 0xb6, 0xff, 0x9b, 0x59, 0x27, 0x07, 0x75, 0xaf, 0x46, 0xad, 0x4d, 0xba,
	0xb0, 0x25, 0xd8, 0x18, 0x85, 0xf6, 0xb6, 0x6c, 0xbc, 0x83, 0x6a, 0x75, 0x99, 0x97, 0x3a, 0x14,
	0x79, 0x02, 0x0d, 0x16, 0xc7, 0xd2, 0xb0, 0x4c, 0x91, 0xb4, 0xb7, 0x5d, 0x2e, 0x23, 0x27, 0xf5,
	0x97, 0x10, 0xba, 0x8a, 0x27, 0x77, 0x61, 0x83, 0xa5, 0x66, 0xe6, 0xed, 0x58, 0xde, 0xb5, 0x0a,
	0x2f, 0x35, 0xb3, 0x3c, 0xb9, 0x0c, 0x45, 0x1e, 0xc2, 0x6e, 0xf6, 0x37, 0x9f, 0x9c, 0x5d, 0x4b,
	0xf1, 0xde, 0x47, 0xc9, 0x26, 0xc8, 0xd2, 0x76, 0x98, 0xb3, 0xc8, 0x08, 0x5a, 0x85, 0x78, 0xf9,
	0x81, 0x8c, 0x0d, 0xce, 0x8d, 0x07, 0xe5, 0x97, 0x66, 0x3b, 0x76, 0xe2, 0x60, 0xc3, 0x1c, 0x45,
	0xf7, 0xf5, 0xfa, 0x01, 0x79, 0x01, 0xe4, 0x6d, 0xca, 0x44, 0x16, 0x49, 0x4e, 0x8a, 0xd1, 0xf4,
	0x5a, 0x36, 0xd8, 0x9d, 0x52, 0xb0, 0xef, 0x73, 0xe0, 0xab, 0x89, 0x1b, 0x50, 0xda, 0x7a, 0x5b,
	0x3a, 0x21, 0x3f, 0xc2, 0x81, 0x62, 0x67, 0xbe, 0x4c, 0x4d, 0x92, 0x1a, 0x3f, 0x1b, 0x8f, 0x2c,
	0xc1, 0x09, 0x9f, 0x7a, 0x57, 0x6c, 0xc8, 0x8f, 0xcb, 0x15, 0x52, 0x76, 0xf6, 0xca, 0x82, 0x9f,
	0x32, 0xc3, 0x86, 0x16, 0x4a, 0xaf, 0xaa, 0xea, 0x21, 0xf9, 0x14, 0xf6, 0x23, 0x36, 0xf7, 0x13,
	0xa6, 0x98, 0x10, 0x28, 0xb8, 0x8e, 0x3c, 0x72, 0x58, 0x3b, 0xda, 0xa4, 0xcd, 0x88, 0xcd, 0x8f,
	0x97, 0xa7, 0xe4, 0x5b, 0xd8, 0xb3, 0xc2, 0xaf, 0xd2, 0xc4, 0xf0, 0xb1, 0x40, 0xef, 0xaa, 0xbd,
	0xb9, 0xdd, 0xcd, 0x25, 0xb8, 0x5b, 0x48, 0x70, 0x77, 0x20, 0xa5, 0x78, 0xc3, 0x44, 0x8a, 0x74,
	0x9d, 0x40, 0x6e, 0x01, 0xe8, 0x53, 0x9e, 0xf8, 0x01, 0x0b, 0x66, 0xe8, 0x5d, 0x3b, 0xac, 0x1d,
	0xed, 0xd0, 0xdd, 0xec, 0x64, 0x98, 0x1d, 0x74, 0xfe, 0xac, 0xc3, 0x95, 0x8a, 0x12, 0x91, 0x07,
	0xb0, 0xa9, 0x0d, 0x33, 0xb9, 0x08, 0x34, 0x57, 0x7b, 0x57, 0x91, 0xbc, 0x0c, 0x46, 0x73, 0x34,
	0x79, 0x0a, 0xfb, 0x38, 0x4f, 0x30, 0x30, 0xcb, 0xd9, 0xaf, 0x7f, 0xf8, 0xf5, 0x34, 0x0b, 0x8e,
	0x7b, 0x00, 0xcf, 0xa0, 0xb5, 0x88, 0x92, 0xf7, 0xbe, 0x78, 0x84, 0xed, 0x52, 0x98, 0x37, 0x4c,
	0xf1, 0x4c, 0x9a, 0xb2, 0x28, 0x8b, 0x9b, 0xf3, 0x66, 0x6b, 0xf2, 0x10, 0x20, 0xb0, 0x1b, 0x20,
	0xf4, 0x99, 0x71, 0x6f, 0xb0, 0xda, 0xb7, 0xd7, 0xc5, 0x6e, 0xa3, 0xbb, 0x0e, 0xdd, 0x37, 0x19,
	0x35, 0x4d, 0xc2, 0x82, 0xba, 0xf9, 0x61, 0xaa, 0x43, 0xf7, 0x4d, 0xe7, 0xb7, 0x1a, 0x90, 0xaa,
	0xcc, 0x90, 0xaf, 0x60, 0xa7, 0x58, 0xc1, 0x4e, 0xdc, 0x2a, 0xcf, 0xe3, 0xc4, 0xf9, 0xe9, 0x02,
	0x49, 0x06, 0xb0, 0x17, 0xcb, 0x4c, 0xf1, 0x02, 0xf7, 0x88, 0xeb, 0x56, 0xf6, 0x6f, 0x96, 0xa9,
	0x2f, 0x57, 0x40, 0x74, 0x9d, 0xd2, 0xf9, 0x65, 0x75, 0x19, 0xff, 0x60, 0xf3, 0xfc, 0x17, 0xcb,
	0x78, 0x31, 0x10, 0xf5, 0x7f, 0x32, 0x10, 0xeb, 0xfb, 0xb8, 0xb8, 0xdc, 0xed, 0xe3, 0x63, 0xb8,
	0xde, 0x0f, 0x0c, 0x7f, 0x87, 0x2b, 0x4b, 0xcb, 0x25, 0xf6, 0x60, 0x25, 0xb1, 0x4f, 0x2a, 0xc5,
	0xb2, 0x08, 0xc3, 0x67, 0x56, 0xb5, 0xd7, 0x93, 0xec, 0xfc, 0x51, 0x83, 0x1b, 0xe5, 0x90, 0xd9,
	0xf6, 0x2c, 0xc2, 0x7a, 0xb0, 0x9d, 0x28, 0xf9, 0x33, 0x06, 0xc6, 0x2d, 0xb7, 0xc2, 0x24, 0x07,
	0xb0, 0x15, 0xca, 0x88, 0xf1, 0x62, 0x41, 0x3a, 0x2b, 0xdb, 0x9b, 0x82, 0x47, 0xdc, 0xd8, 0xf9,
	0xdb, 0xa3, 0xb9, 0xb1, 0xdc, 0xa6, 0x1b, 0x2b, 0xdb, 0x94, 0xdc, 0x83, 0x6d, 0x2d, 0x95, 0xf1,
	0xc7, 0xe7, 0x6e, 0x62, 0x2a, 0x9a, 0x79, 0x22, 0x95, 0xa1, 0x5b, 0x19, 0x68, 0x70, 0xfe, 0xf9,
	0x17, 0xb0, 0x5f, 0x6a, 0x1a, 0xb9, 0x0c, 0x3b, 0xa3, 0x97, 0xfd, 0xe1, 0xeb, 0xd1, 0x9b, 0x67,
	0xad, 0xff, 0x11, 0x80, 0x2d, 0xf7, 0x7f, 0x6d, 0xf0, 0xf5, 0x4f, 0x0f, 0xa6, 0xdc, 0xcc, 0xd2,
	0x71, 0x37, 0x90, 0x51, 0xcf, 0x86, 0x95, 0x6a, 0xda, 0x5b, 0xfc, 0x8a, 0x9b, 0x62, 0xdc, 0x4b,
	0xc6, 0xf7, 0xa6, 0xb2, 0xb7, 0xfe, 0xc3, 0x6e, 0xbc, 0x65, 0xa7, 0xf5, 0xcb, 0xbf, 0x02, 0x00,
	0x00, 0xff, 0xff, 0x37, 0x3e, 0x66, 0xae, 0xdc, 0x0a, 0x00, 0x00,
}

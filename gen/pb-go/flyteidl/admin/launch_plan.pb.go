// Code generated by protoc-gen-go. DO NOT EDIT.
// source: flyteidl/admin/launch_plan.proto

package admin // import "github.com/lyft/flyteidl/gen/pb-go/flyteidl/admin"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import timestamp "github.com/golang/protobuf/ptypes/timestamp"
import core "github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

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
	return fileDescriptor_launch_plan_90ff450d6671eec5, []int{0}
}

// Request to register a launch plan. A LaunchPlanSpec may include a complete or incomplete set of inputs required
// to launch a workflow execution. By default all launch plans are registered in state INACTIVE. If you wish to
// set the state to ACTIVE, you must submit a LaunchPlanUpdateRequest, after you have created a launch plan.
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
	return fileDescriptor_launch_plan_90ff450d6671eec5, []int{0}
}
func (m *LaunchPlanCreateRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanCreateRequest.Unmarshal(m, b)
}
func (m *LaunchPlanCreateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanCreateRequest.Marshal(b, m, deterministic)
}
func (dst *LaunchPlanCreateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanCreateRequest.Merge(dst, src)
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
	return fileDescriptor_launch_plan_90ff450d6671eec5, []int{1}
}
func (m *LaunchPlanCreateResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanCreateResponse.Unmarshal(m, b)
}
func (m *LaunchPlanCreateResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanCreateResponse.Marshal(b, m, deterministic)
}
func (dst *LaunchPlanCreateResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanCreateResponse.Merge(dst, src)
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
	Id                   *core.Identifier   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Spec                 *LaunchPlanSpec    `protobuf:"bytes,2,opt,name=spec,proto3" json:"spec,omitempty"`
	Closure              *LaunchPlanClosure `protobuf:"bytes,3,opt,name=closure,proto3" json:"closure,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *LaunchPlan) Reset()         { *m = LaunchPlan{} }
func (m *LaunchPlan) String() string { return proto.CompactTextString(m) }
func (*LaunchPlan) ProtoMessage()    {}
func (*LaunchPlan) Descriptor() ([]byte, []int) {
	return fileDescriptor_launch_plan_90ff450d6671eec5, []int{2}
}
func (m *LaunchPlan) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlan.Unmarshal(m, b)
}
func (m *LaunchPlan) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlan.Marshal(b, m, deterministic)
}
func (dst *LaunchPlan) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlan.Merge(dst, src)
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
	return fileDescriptor_launch_plan_90ff450d6671eec5, []int{3}
}
func (m *LaunchPlanList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanList.Unmarshal(m, b)
}
func (m *LaunchPlanList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanList.Marshal(b, m, deterministic)
}
func (dst *LaunchPlanList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanList.Merge(dst, src)
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
type Auth struct {
	// Types that are valid to be assigned to Method:
	//	*Auth_AssumableIamRole
	//	*Auth_KubernetesServiceAccount
	Method               isAuth_Method `protobuf_oneof:"method"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *Auth) Reset()         { *m = Auth{} }
func (m *Auth) String() string { return proto.CompactTextString(m) }
func (*Auth) ProtoMessage()    {}
func (*Auth) Descriptor() ([]byte, []int) {
	return fileDescriptor_launch_plan_90ff450d6671eec5, []int{4}
}
func (m *Auth) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Auth.Unmarshal(m, b)
}
func (m *Auth) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Auth.Marshal(b, m, deterministic)
}
func (dst *Auth) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Auth.Merge(dst, src)
}
func (m *Auth) XXX_Size() int {
	return xxx_messageInfo_Auth.Size(m)
}
func (m *Auth) XXX_DiscardUnknown() {
	xxx_messageInfo_Auth.DiscardUnknown(m)
}

var xxx_messageInfo_Auth proto.InternalMessageInfo

type isAuth_Method interface {
	isAuth_Method()
}

type Auth_AssumableIamRole struct {
	AssumableIamRole string `protobuf:"bytes,1,opt,name=assumable_iam_role,json=assumableIamRole,proto3,oneof"`
}

type Auth_KubernetesServiceAccount struct {
	KubernetesServiceAccount string `protobuf:"bytes,2,opt,name=kubernetes_service_account,json=kubernetesServiceAccount,proto3,oneof"`
}

func (*Auth_AssumableIamRole) isAuth_Method() {}

func (*Auth_KubernetesServiceAccount) isAuth_Method() {}

func (m *Auth) GetMethod() isAuth_Method {
	if m != nil {
		return m.Method
	}
	return nil
}

func (m *Auth) GetAssumableIamRole() string {
	if x, ok := m.GetMethod().(*Auth_AssumableIamRole); ok {
		return x.AssumableIamRole
	}
	return ""
}

func (m *Auth) GetKubernetesServiceAccount() string {
	if x, ok := m.GetMethod().(*Auth_KubernetesServiceAccount); ok {
		return x.KubernetesServiceAccount
	}
	return ""
}

// XXX_OneofFuncs is for the internal use of the proto package.
func (*Auth) XXX_OneofFuncs() (func(msg proto.Message, b *proto.Buffer) error, func(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error), func(msg proto.Message) (n int), []interface{}) {
	return _Auth_OneofMarshaler, _Auth_OneofUnmarshaler, _Auth_OneofSizer, []interface{}{
		(*Auth_AssumableIamRole)(nil),
		(*Auth_KubernetesServiceAccount)(nil),
	}
}

func _Auth_OneofMarshaler(msg proto.Message, b *proto.Buffer) error {
	m := msg.(*Auth)
	// method
	switch x := m.Method.(type) {
	case *Auth_AssumableIamRole:
		b.EncodeVarint(1<<3 | proto.WireBytes)
		b.EncodeStringBytes(x.AssumableIamRole)
	case *Auth_KubernetesServiceAccount:
		b.EncodeVarint(2<<3 | proto.WireBytes)
		b.EncodeStringBytes(x.KubernetesServiceAccount)
	case nil:
	default:
		return fmt.Errorf("Auth.Method has unexpected type %T", x)
	}
	return nil
}

func _Auth_OneofUnmarshaler(msg proto.Message, tag, wire int, b *proto.Buffer) (bool, error) {
	m := msg.(*Auth)
	switch tag {
	case 1: // method.assumable_iam_role
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeStringBytes()
		m.Method = &Auth_AssumableIamRole{x}
		return true, err
	case 2: // method.kubernetes_service_account
		if wire != proto.WireBytes {
			return true, proto.ErrInternalBadWireType
		}
		x, err := b.DecodeStringBytes()
		m.Method = &Auth_KubernetesServiceAccount{x}
		return true, err
	default:
		return false, nil
	}
}

func _Auth_OneofSizer(msg proto.Message) (n int) {
	m := msg.(*Auth)
	// method
	switch x := m.Method.(type) {
	case *Auth_AssumableIamRole:
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(len(x.AssumableIamRole)))
		n += len(x.AssumableIamRole)
	case *Auth_KubernetesServiceAccount:
		n += 1 // tag and wire
		n += proto.SizeVarint(uint64(len(x.KubernetesServiceAccount)))
		n += len(x.KubernetesServiceAccount)
	case nil:
	default:
		panic(fmt.Sprintf("proto: unexpected type %T in oneof", x))
	}
	return n
}

// User-provided launch plan definition and configuration values.
type LaunchPlanSpec struct {
	// Reference to the Workflow template that the launch plan references
	WorkflowId *core.Identifier `protobuf:"bytes,1,opt,name=workflow_id,json=workflowId,proto3" json:"workflow_id,omitempty"`
	// Metadata for the Launch Plan
	EntityMetadata *LaunchPlanMetadata `protobuf:"bytes,2,opt,name=entity_metadata,json=entityMetadata,proto3" json:"entity_metadata,omitempty"`
	// Input values to be passed for the execution
	DefaultInputs *core.ParameterMap `protobuf:"bytes,3,opt,name=default_inputs,json=defaultInputs,proto3" json:"default_inputs,omitempty"`
	// Fixed, non-overridable inputs for the Launch Plan
	FixedInputs *core.LiteralMap `protobuf:"bytes,4,opt,name=fixed_inputs,json=fixedInputs,proto3" json:"fixed_inputs,omitempty"`
	// String to indicate the role to use to execute the workflow underneath
	Role string `protobuf:"bytes,5,opt,name=role,proto3" json:"role,omitempty"` // Deprecated: Do not use.
	// Custom labels to be applied to the execution resource.
	Labels *Labels `protobuf:"bytes,6,opt,name=labels,proto3" json:"labels,omitempty"`
	// Custom annotations to be applied to the execution resource.
	Annotations *Annotations `protobuf:"bytes,7,opt,name=annotations,proto3" json:"annotations,omitempty"`
	// Indicates the permission associated with workflow executions triggered with this launch plan.
	Auth                 *Auth    `protobuf:"bytes,8,opt,name=auth,proto3" json:"auth,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *LaunchPlanSpec) Reset()         { *m = LaunchPlanSpec{} }
func (m *LaunchPlanSpec) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanSpec) ProtoMessage()    {}
func (*LaunchPlanSpec) Descriptor() ([]byte, []int) {
	return fileDescriptor_launch_plan_90ff450d6671eec5, []int{5}
}
func (m *LaunchPlanSpec) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanSpec.Unmarshal(m, b)
}
func (m *LaunchPlanSpec) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanSpec.Marshal(b, m, deterministic)
}
func (dst *LaunchPlanSpec) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanSpec.Merge(dst, src)
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

func (m *LaunchPlanSpec) GetAuth() *Auth {
	if m != nil {
		return m.Auth
	}
	return nil
}

// Values computed by the flyte platform after launch plan registration.
// These include expected_inputs required to be present in a CreateExecutionRequest
// to launch the reference workflow as well timestamp values associated with the launch plan.
type LaunchPlanClosure struct {
	// Indicate the Launch plan phase
	State LaunchPlanState `protobuf:"varint,1,opt,name=state,proto3,enum=flyteidl.admin.LaunchPlanState" json:"state,omitempty"`
	// Indicates the set of inputs to execute the Launch plan
	ExpectedInputs *core.ParameterMap `protobuf:"bytes,2,opt,name=expected_inputs,json=expectedInputs,proto3" json:"expected_inputs,omitempty"`
	// Indicates the set of outputs from the Launch plan
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
	return fileDescriptor_launch_plan_90ff450d6671eec5, []int{6}
}
func (m *LaunchPlanClosure) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanClosure.Unmarshal(m, b)
}
func (m *LaunchPlanClosure) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanClosure.Marshal(b, m, deterministic)
}
func (dst *LaunchPlanClosure) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanClosure.Merge(dst, src)
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
	return fileDescriptor_launch_plan_90ff450d6671eec5, []int{7}
}
func (m *LaunchPlanMetadata) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanMetadata.Unmarshal(m, b)
}
func (m *LaunchPlanMetadata) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanMetadata.Marshal(b, m, deterministic)
}
func (dst *LaunchPlanMetadata) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanMetadata.Merge(dst, src)
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
type LaunchPlanUpdateRequest struct {
	// Identifier of launch plan for which to change state.
	Id *core.Identifier `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Desired state to apply to the launch plan.
	State                LaunchPlanState `protobuf:"varint,2,opt,name=state,proto3,enum=flyteidl.admin.LaunchPlanState" json:"state,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *LaunchPlanUpdateRequest) Reset()         { *m = LaunchPlanUpdateRequest{} }
func (m *LaunchPlanUpdateRequest) String() string { return proto.CompactTextString(m) }
func (*LaunchPlanUpdateRequest) ProtoMessage()    {}
func (*LaunchPlanUpdateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_launch_plan_90ff450d6671eec5, []int{8}
}
func (m *LaunchPlanUpdateRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanUpdateRequest.Unmarshal(m, b)
}
func (m *LaunchPlanUpdateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanUpdateRequest.Marshal(b, m, deterministic)
}
func (dst *LaunchPlanUpdateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanUpdateRequest.Merge(dst, src)
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
	return fileDescriptor_launch_plan_90ff450d6671eec5, []int{9}
}
func (m *LaunchPlanUpdateResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_LaunchPlanUpdateResponse.Unmarshal(m, b)
}
func (m *LaunchPlanUpdateResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_LaunchPlanUpdateResponse.Marshal(b, m, deterministic)
}
func (dst *LaunchPlanUpdateResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_LaunchPlanUpdateResponse.Merge(dst, src)
}
func (m *LaunchPlanUpdateResponse) XXX_Size() int {
	return xxx_messageInfo_LaunchPlanUpdateResponse.Size(m)
}
func (m *LaunchPlanUpdateResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_LaunchPlanUpdateResponse.DiscardUnknown(m)
}

var xxx_messageInfo_LaunchPlanUpdateResponse proto.InternalMessageInfo

func init() {
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
	proto.RegisterEnum("flyteidl.admin.LaunchPlanState", LaunchPlanState_name, LaunchPlanState_value)
}

func init() {
	proto.RegisterFile("flyteidl/admin/launch_plan.proto", fileDescriptor_launch_plan_90ff450d6671eec5)
}

var fileDescriptor_launch_plan_90ff450d6671eec5 = []byte{
	// 825 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x95, 0xdd, 0x72, 0xdb, 0x44,
	0x14, 0xc7, 0x63, 0xc7, 0x71, 0x93, 0xe3, 0xd4, 0x09, 0x3b, 0x9d, 0xa2, 0xba, 0xa5, 0x0d, 0xba,
	0x0a, 0x30, 0x48, 0x43, 0x0a, 0x17, 0x7c, 0x94, 0x19, 0x3b, 0x74, 0xa6, 0x1e, 0xd2, 0xd2, 0xd9,
	0x94, 0x5e, 0x70, 0xa3, 0x59, 0x4b, 0xc7, 0xb6, 0x26, 0x2b, 0xad, 0xd0, 0x1e, 0xd1, 0x64, 0xb8,
	0xe1, 0x09, 0x78, 0x0e, 0x1e, 0x06, 0xde, 0x89, 0xd1, 0x6a, 0x25, 0x7f, 0x35, 0x04, 0x98, 0xe9,
	0x9d, 0xd7, 0xe7, 0xf7, 0x3f, 0x7b, 0xbe, 0xf6, 0x08, 0x8e, 0xa6, 0xf2, 0x8a, 0x30, 0x8e, 0xa4,
	0x2f, 0xa2, 0x24, 0x4e, 0x7d, 0x29, 0x8a, 0x34, 0x9c, 0x07, 0x99, 0x14, 0xa9, 0x97, 0xe5, 0x8a,
	0x14, 0xeb, 0xd7, 0x84, 0x67, 0x88, 0xc1, 0x83, 0x46, 0x11, 0xaa, 0x1c, 0x7d, 0x19, 0x13, 0xe6,
	0x42, 0xea, 0x8a, 0x1e, 0x3c, 0x5c, 0xb5, 0xc6, 0x11, 0xa6, 0x14, 0x4f, 0x63, 0xcc, 0xad, 0xfd,
	0x83, 0x55, 0x7b, 0x26, 0x72, 0x91, 0x20, 0xbd, 0xc5, 0x5c, 0x85, 0xa3, 0xc3, 0x39, 0x46, 0x85,
	0x44, 0x6b, 0xbe, 0xbf, 0x66, 0x0e, 0x55, 0x92, 0x28, 0x1b, 0xe8, 0xe0, 0xde, 0xaa, 0x6b, 0xba,
	0xca, 0xb0, 0x8e, 0xea, 0xd1, 0x4c, 0xa9, 0x99, 0x44, 0xdf, 0x9c, 0x26, 0xc5, 0xd4, 0xa7, 0x38,
	0x41, 0x4d, 0x22, 0xc9, 0x2a, 0xc0, 0xbd, 0x84, 0xf7, 0xcf, 0x4c, 0xe6, 0x2f, 0xa5, 0x48, 0x4f,
	0x73, 0x14, 0x84, 0x1c, 0x7f, 0x2e, 0x50, 0x13, 0xfb, 0x08, 0xda, 0x71, 0xe4, 0xb4, 0x8e, 0x5a,
	0xc7, 0xbd, 0x93, 0x7b, 0x5e, 0x53, 0x8c, 0xf2, 0x0e, 0x6f, 0xdc, 0xa4, 0xc7, 0xdb, 0x71, 0xc4,
	0x4e, 0xa0, 0xa3, 0x33, 0x0c, 0x9d, 0xb6, 0x81, 0x1f, 0x7a, 0xab, 0x95, 0xf3, 0x16, 0x37, 0x9c,
	0x67, 0x18, 0x72, 0xc3, 0xba, 0x03, 0x70, 0x36, 0x6f, 0xd6, 0x99, 0x4a, 0x35, 0xba, 0x7f, 0xb4,
	0x00, 0x16, 0xc6, 0x77, 0x1c, 0x09, 0xfb, 0x1a, 0x6e, 0x85, 0x52, 0xe9, 0x22, 0x47, 0x67, 0xdb,
	0xc8, 0x3e, 0xbc, 0x5e, 0x76, 0x5a, 0x81, 0xbc, 0x56, 0xb8, 0x08, 0xfd, 0x85, 0xf5, 0x2c, 0xd6,
	0xc4, 0x9e, 0xc0, 0xfe, 0xd2, 0x30, 0x69, 0xa7, 0x75, 0xb4, 0x7d, 0xdc, 0x3b, 0x19, 0x5c, 0xef,
	0x93, 0xf7, 0x64, 0xf3, 0x5b, 0xb3, 0x3b, 0xb0, 0x43, 0xea, 0x02, 0x53, 0x93, 0xc2, 0x1e, 0xaf,
	0x0e, 0xee, 0x6f, 0x2d, 0xe8, 0x0c, 0x0b, 0x9a, 0x33, 0x0f, 0x98, 0xd0, 0xba, 0x48, 0xc4, 0x44,
	0x62, 0x10, 0x8b, 0x24, 0xc8, 0x95, 0x44, 0x53, 0x9b, 0xbd, 0x67, 0x5b, 0xfc, 0xb0, 0xb1, 0x8d,
	0x45, 0xc2, 0x95, 0x44, 0xf6, 0x2d, 0x0c, 0x2e, 0x8a, 0x09, 0xe6, 0x29, 0x12, 0xea, 0x40, 0x63,
	0xfe, 0x4b, 0x1c, 0x62, 0x20, 0xc2, 0x50, 0x15, 0x29, 0x55, 0x77, 0x3c, 0xdb, 0xe2, 0xce, 0x82,
	0x39, 0xaf, 0x90, 0x61, 0x45, 0x8c, 0x76, 0xa1, 0x9b, 0x20, 0xcd, 0x55, 0xe4, 0xfe, 0xb9, 0xbd,
	0x9c, 0x6a, 0x59, 0x3f, 0xf6, 0x15, 0xf4, 0xde, 0xa8, 0xfc, 0x62, 0x2a, 0xd5, 0x9b, 0xe0, 0xdf,
	0x74, 0x08, 0x6a, 0x7a, 0x1c, 0xb1, 0xef, 0xe1, 0xa0, 0xfc, 0x9f, 0xae, 0x82, 0x04, 0x49, 0x44,
	0x82, 0x84, 0x6d, 0x9a, 0x7b, 0x7d, 0xa5, 0x9e, 0x5b, 0x92, 0xf7, 0x2b, 0x69, 0x7d, 0x66, 0x23,
	0xe8, 0x47, 0x38, 0x15, 0x85, 0xa4, 0x20, 0x4e, 0xb3, 0x82, 0xb4, 0xed, 0xe4, 0xfd, 0xb5, 0x58,
	0x5e, 0xd6, 0xcf, 0xee, 0xb9, 0xc8, 0xf8, 0x6d, 0x2b, 0x19, 0x1b, 0x05, 0xfb, 0x06, 0xf6, 0xa7,
	0xf1, 0x25, 0x46, 0xb5, 0x87, 0xce, 0x5b, 0xb3, 0x39, 0xab, 0x9e, 0x7d, 0xa9, 0xef, 0x19, 0xdc,
	0xaa, 0xef, 0x42, 0xc7, 0x74, 0x62, 0xa7, 0xac, 0xe8, 0xa8, 0xed, 0xb4, 0xb8, 0x39, 0x33, 0x0f,
	0xba, 0x52, 0x4c, 0x50, 0x6a, 0xa7, 0x6b, 0xfc, 0xdd, 0xdd, 0xcc, 0xae, 0xb4, 0x72, 0x4b, 0xb1,
	0x27, 0xd0, 0x13, 0x69, 0xaa, 0x48, 0x50, 0xac, 0x52, 0xed, 0xdc, 0x5a, 0x4f, 0xa3, 0x12, 0x0d,
	0x17, 0x08, 0x5f, 0xe6, 0xd9, 0x31, 0x74, 0x44, 0x41, 0x73, 0x67, 0xd7, 0xe8, 0xee, 0x6c, 0xe8,
	0x0a, 0x9a, 0x73, 0x43, 0xb8, 0x7f, 0xb5, 0xe1, 0xbd, 0x8d, 0xb9, 0x66, 0x5f, 0xc0, 0x8e, 0x26,
	0x41, 0xd5, 0x44, 0xf5, 0x4f, 0x1e, 0xfd, 0xc3, 0x03, 0x2a, 0x31, 0x5e, 0xd1, 0xec, 0x3b, 0x38,
	0xc0, 0xcb, 0x0c, 0x43, 0x5a, 0x94, 0xaf, 0x7d, 0x73, 0x03, 0xfa, 0xb5, 0xc6, 0xd6, 0xf0, 0x29,
	0x1c, 0x36, 0x5e, 0x54, 0x41, 0x4b, 0x7d, 0x1c, 0xac, 0xb9, 0x79, 0x2d, 0xf2, 0xb8, 0x9c, 0xf2,
	0xd2, 0x4b, 0x73, 0xf3, 0x0f, 0x95, 0x84, 0x7d, 0x09, 0x10, 0x9a, 0x7d, 0x12, 0x05, 0x82, 0x6c,
	0x1b, 0x07, 0x5e, 0xb5, 0x09, 0xbd, 0x7a, 0x13, 0x7a, 0xaf, 0xea, 0x4d, 0xc8, 0xf7, 0x2c, 0x3d,
	0xa4, 0x52, 0x5a, 0x64, 0x51, 0x2d, 0xdd, 0xb9, 0x59, 0x6a, 0xe9, 0x21, 0xb9, 0xbf, 0xb7, 0x80,
	0x6d, 0x4e, 0x2a, 0xfb, 0x1c, 0x76, 0xeb, 0x5d, 0x6e, 0xdf, 0x87, 0xb3, 0x5e, 0xd3, 0x73, 0x6b,
	0xe7, 0x0d, 0xc9, 0x46, 0x70, 0x3b, 0x55, 0xe5, 0xa3, 0x09, 0xed, 0x1c, 0xb4, 0xcd, 0x12, 0x79,
	0xb0, 0x2e, 0x7d, 0xb1, 0x04, 0xf1, 0x55, 0x89, 0xfb, 0xeb, 0xf2, 0x6a, 0xff, 0xd1, 0xc4, 0xf9,
	0x3f, 0x56, 0x7b, 0x33, 0x10, 0xed, 0xff, 0x32, 0x10, 0xab, 0xdb, 0xbd, 0xbe, 0xbc, 0xda, 0xee,
	0x1f, 0x7f, 0x02, 0x07, 0x6b, 0x2a, 0xb6, 0x0f, 0xbb, 0xe3, 0x17, 0xc3, 0xd3, 0x57, 0xe3, 0xd7,
	0x4f, 0x0f, 0xb7, 0x18, 0x40, 0xd7, 0xfe, 0x6e, 0x8d, 0x1e, 0xff, 0xf4, 0xd9, 0x2c, 0xa6, 0x79,
	0x31, 0xf1, 0x42, 0x95, 0xf8, 0xf2, 0x6a, 0x4a, 0x7e, 0xf3, 0xb9, 0x9b, 0x61, 0xea, 0x67, 0x93,
	0x4f, 0x67, 0xca, 0x5f, 0xfd, 0x3c, 0x4e, 0xba, 0xa6, 0x55, 0x8f, 0xff, 0x0e, 0x00, 0x00, 0xff,
	0xff, 0x53, 0x94, 0x2e, 0xb8, 0xe5, 0x07, 0x00, 0x00,
}

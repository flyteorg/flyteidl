/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin

// A LaunchPlan provides the capability to templatize workflow executions. Launch plans simplify associating one or more schedules, inputs and notifications with your workflows. Launch plans can be shared and used to trigger executions with predefined inputs even when a workflow definition doesn't necessarily have a default value for said input.
type AdminLaunchPlan struct {
	Id *CoreIdentifier `json:"id,omitempty"`
	Spec *AdminLaunchPlanSpec `json:"spec,omitempty"`
	Closure *AdminLaunchPlanClosure `json:"closure,omitempty"`
}

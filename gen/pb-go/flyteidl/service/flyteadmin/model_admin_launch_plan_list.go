/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin

// Response object for list launch plan requests.
type AdminLaunchPlanList struct {
	LaunchPlans []AdminLaunchPlan `json:"launch_plans,omitempty"`
	// In the case of multiple pages of results, the server-provided token can be used to fetch the next page in a query. If there are no more results, this value will be empty.
	Token string `json:"token,omitempty"`
}

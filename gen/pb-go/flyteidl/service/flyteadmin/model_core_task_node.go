/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin

// Refers to the task that the Node is to execute.
type CoreTaskNode struct {
	// A globally unique identifier for the task.
	ReferenceId *CoreIdentifier `json:"reference_id,omitempty"`
}

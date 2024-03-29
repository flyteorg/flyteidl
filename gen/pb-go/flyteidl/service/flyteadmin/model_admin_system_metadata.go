/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin

// Represents system, rather than user-facing, metadata about an execution.
type AdminSystemMetadata struct {
	// Which execution cluster this execution ran on.
	ExecutionCluster string `json:"execution_cluster,omitempty"`
	// Which kubernetes namespace the execution ran under.
	Namespace string `json:"namespace,omitempty"`
}

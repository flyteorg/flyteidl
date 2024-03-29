/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin

// ApproveCondition represents a dependency on an external approval. During execution, this will manifest as a boolean signal with the provided signal_id.
type CoreApproveCondition struct {
	// A unique identifier for the requested boolean signal.
	SignalId string `json:"signal_id,omitempty"`
}

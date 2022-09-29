/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin

// Defines a series of if/else blocks. The first branch whose condition evaluates to true is the one to execute. If no conditions were satisfied, the else_node or the error will execute.
type CoreIfElseBlock struct {
	// +required. First condition to evaluate.
	Case_ *CoreIfBlock `json:"case,omitempty"`
	// +optional. Additional branches to evaluate.
	Other []CoreIfBlock `json:"other,omitempty"`
	// The node to execute in case none of the branches were taken.
	ElseNode *CoreNode `json:"else_node,omitempty"`
	// An error to throw in case none of the branches were taken.
	Error_ *CoreError `json:"error,omitempty"`
}

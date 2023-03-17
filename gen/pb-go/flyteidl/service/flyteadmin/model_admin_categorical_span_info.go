/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin

// CategoricalSpanInfo represents a labelled Span, providing a brief attribution for the duration.
type AdminCategoricalSpanInfo struct {
	// category defines the category that this span is labeled as.
	Category string `json:"category,omitempty"`
}
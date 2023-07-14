/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin

type ArtifactArtifact struct {
	ArtifactId *CoreArtifactId `json:"artifact_id,omitempty"`
	// This is unique access url generated by the service based on the ArtifactKey.
	Uri string `json:"uri,omitempty"`
	Spec *ArtifactArtifactSpec `json:"spec,omitempty"`
}

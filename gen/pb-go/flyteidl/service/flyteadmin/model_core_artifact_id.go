/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin

type CoreArtifactId struct {
	ArtifactKey *CoreArtifactKey `json:"artifact_key,omitempty"`
	// consider hiding - this is a storage layer ID. Might even change for the same object.
	Uuid string `json:"uuid,omitempty"`
}

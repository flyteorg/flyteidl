/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin

type FlyteidlartifactAlias struct {
	ArtifactId *CoreArtifactId `json:"artifact_id,omitempty"`
	Name string `json:"name,omitempty"`
	Value string `json:"value,omitempty"`
}

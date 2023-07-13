/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin

type ArtifactArtifactSpec struct {
	Value *CoreLiteral `json:"value,omitempty"`
	// This type will not form part of the artifact key, so for user-named artifacts, if the user changes the type, but forgets to change the name, that is okay. And the reason why this is a separate field is because adding the type to all Literals is a lot of work.
	Type_ *CoreLiteralType `json:"type,omitempty"`
	// When you want to set tags on creation.
	Tags []ArtifactTag `json:"tags,omitempty"`
	// Set here when you want to set an alias on creation. Aliases created will have the same project/domain as the artifact.
	Aliases []FlyteidlartifactAlias `json:"aliases,omitempty"`
	// Outputs of tasks will have this.
	TaskExecution *CoreTaskExecutionIdentifier `json:"task_execution,omitempty"`
	// Workflow outputs will have this.
	Execution *CoreWorkflowExecutionIdentifier `json:"execution,omitempty"`
	// Uploads, either from the UI or from the CLI, or FlyteRemote, will have this.
	Principal string `json:"principal,omitempty"`
	ShortDescription string `json:"short_description,omitempty"`
	LongDescription string `json:"long_description,omitempty"`
}

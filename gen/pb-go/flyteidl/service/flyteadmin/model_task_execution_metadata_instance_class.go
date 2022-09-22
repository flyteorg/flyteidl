/*
 * flyteidl/service/admin.proto
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: version not set
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package flyteadmin
// TaskExecutionMetadataInstanceClass : Includes the broad category of machine used for this specific task execution.   - DEFAULT: The default instance class configured for the flyte application platform.  - INTERRUPTIBLE: The instance class configured for interruptible tasks.
type TaskExecutionMetadataInstanceClass string

// List of TaskExecutionMetadataInstanceClass
const (
	TaskExecutionMetadataInstanceClassDEFAULT_ TaskExecutionMetadataInstanceClass = "DEFAULT"
	TaskExecutionMetadataInstanceClassINTERRUPTIBLE TaskExecutionMetadataInstanceClass = "INTERRUPTIBLE"
)

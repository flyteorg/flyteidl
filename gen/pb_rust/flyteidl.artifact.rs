// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Artifact {
    #[prost(message, optional, tag="1")]
    pub artifact_id: ::core::option::Option<super::core::ArtifactId>,
    #[prost(message, optional, tag="2")]
    pub spec: ::core::option::Option<ArtifactSpec>,
    /// references the tag field in ArtifactTag
    #[prost(string, repeated, tag="3")]
    pub tags: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateArtifactRequest {
    /// Specify just project/domain on creation
    #[prost(message, optional, tag="1")]
    pub artifact_key: ::core::option::Option<super::core::ArtifactKey>,
    #[prost(string, tag="3")]
    pub version: ::prost::alloc::string::String,
    #[prost(message, optional, tag="2")]
    pub spec: ::core::option::Option<ArtifactSpec>,
    #[prost(map="string, string", tag="4")]
    pub partitions: ::std::collections::HashMap<::prost::alloc::string::String, ::prost::alloc::string::String>,
    #[prost(string, tag="5")]
    pub tag: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ArtifactSpec {
    #[prost(message, optional, tag="1")]
    pub value: ::core::option::Option<super::core::Literal>,
    /// This type will not form part of the artifact key, so for user-named artifacts, if the user changes the type, but
    /// forgets to change the name, that is okay. And the reason why this is a separate field is because adding the
    /// type to all Literals is a lot of work.
    #[prost(message, optional, tag="2")]
    pub r#type: ::core::option::Option<super::core::LiteralType>,
    #[prost(string, tag="8")]
    pub short_description: ::prost::alloc::string::String,
    #[prost(string, tag="9")]
    pub long_description: ::prost::alloc::string::String,
    #[prost(oneof="artifact_spec::Source", tags="5, 6, 7")]
    pub source: ::core::option::Option<artifact_spec::Source>,
}
/// Nested message and enum types in `ArtifactSpec`.
pub mod artifact_spec {
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Source {
        /// Outputs of tasks will have this.
        #[prost(message, tag="5")]
        TaskExecution(super::super::core::TaskExecutionIdentifier),
        /// Workflow outputs will have this.
        #[prost(message, tag="6")]
        Execution(super::super::core::WorkflowExecutionIdentifier),
        /// Uploads, either from the UI or from the CLI, or FlyteRemote, will have this.
        #[prost(string, tag="7")]
        Principal(::prost::alloc::string::String),
    }
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateArtifactResponse {
    #[prost(message, optional, tag="1")]
    pub artifact: ::core::option::Option<Artifact>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetArtifactRequest {
    #[prost(message, optional, tag="1")]
    pub query: ::core::option::Option<super::core::ArtifactQuery>,
    /// If false, then long_description is not returned.
    #[prost(bool, tag="2")]
    pub details: bool,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct GetArtifactResponse {
    #[prost(message, optional, tag="1")]
    pub artifact: ::core::option::Option<Artifact>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListArtifactNamesRequest {
    #[prost(string, tag="1")]
    pub project: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub domain: ::prost::alloc::string::String,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListArtifactNamesResponse {
    #[prost(message, repeated, tag="1")]
    pub artifact_keys: ::prost::alloc::vec::Vec<super::core::ArtifactKey>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListArtifactsRequest {
    #[prost(message, optional, tag="1")]
    pub artifact_key: ::core::option::Option<super::core::ArtifactKey>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ListArtifactsResponse {
    #[prost(message, repeated, tag="1")]
    pub artifacts: ::prost::alloc::vec::Vec<Artifact>,
}
/// Aliases identify a particular version of an artifact. They are different than tags in that they
/// have to be unique for a given artifact project/domain/name. That is, for a given project/domain/name/kind,
/// at most one version can have any given value at any point.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddTagRequest {
    #[prost(message, optional, tag="1")]
    pub artifact_id: ::core::option::Option<super::core::ArtifactId>,
    #[prost(string, tag="2")]
    pub value: ::prost::alloc::string::String,
    /// If true, and another version already has the specified kind/value, set this version instead
    #[prost(bool, tag="3")]
    pub overwrite: bool,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddTagResponse {
}
/// Artifact Trigger
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateTriggerRequest {
    /// TODO: This should be a list of artifact keys
    #[prost(message, optional, tag="1")]
    pub artifact_key: ::core::option::Option<super::core::ArtifactKey>,
    #[prost(message, optional, tag="2")]
    pub downstream_id: ::core::option::Option<super::core::Identifier>,
    #[prost(message, optional, tag="3")]
    pub inputs: ::core::option::Option<super::core::ParameterMap>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateTriggerResponse {
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteTriggerRequest {
    #[prost(message, optional, tag="1")]
    pub artifact_key: ::core::option::Option<super::core::ArtifactKey>,
    #[prost(message, optional, tag="2")]
    pub downstream_id: ::core::option::Option<super::core::Identifier>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct DeleteTriggerResponse {
}
// @@protoc_insertion_point(module)

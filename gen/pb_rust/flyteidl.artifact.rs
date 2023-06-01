// @generated
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Artifact {
    #[prost(message, optional, tag="1")]
    pub artifact_id: ::core::option::Option<super::core::ArtifactId>,
    /// This has to be unique across the entire installation. For OSS, we will write the flyte url here for now.
    #[prost(string, tag="2")]
    pub uri: ::prost::alloc::string::String,
    #[prost(message, optional, tag="3")]
    pub spec: ::core::option::Option<ArtifactSpec>,
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
    /// When you want to set tags on creation.
    #[prost(message, repeated, tag="3")]
    pub tags: ::prost::alloc::vec::Vec<Tag>,
    /// When you want to set an alias on creation. should this also be repeated?
    #[prost(message, repeated, tag="4")]
    pub aliases: ::prost::alloc::vec::Vec<Alias>,
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
pub struct ArtifactQuery {
    #[prost(message, optional, tag="1")]
    pub artifact_key: ::core::option::Option<super::core::ArtifactKey>,
    #[prost(string, tag="2")]
    pub version: ::prost::alloc::string::String,
    #[prost(message, optional, tag="3")]
    pub alias: ::core::option::Option<Alias>,
    #[prost(message, repeated, tag="4")]
    pub tags: ::prost::alloc::vec::Vec<Tag>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateArtifactRequest {
    #[prost(message, optional, tag="1")]
    pub artifact_key: ::core::option::Option<super::core::ArtifactKey>,
    /// optional
    #[prost(string, tag="2")]
    pub version: ::prost::alloc::string::String,
    #[prost(string, tag="3")]
    pub uri: ::prost::alloc::string::String,
    #[prost(message, optional, tag="4")]
    pub spec: ::core::option::Option<ArtifactSpec>,
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
    /// If false, then long_description is not returned.
    #[prost(bool, tag="3")]
    pub details: bool,
    #[prost(oneof="get_artifact_request::Identifier", tags="1, 2")]
    pub identifier: ::core::option::Option<get_artifact_request::Identifier>,
}
/// Nested message and enum types in `GetArtifactRequest`.
pub mod get_artifact_request {
    #[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Oneof)]
    pub enum Identifier {
        #[prost(message, tag="1")]
        ArtifactId(super::super::core::ArtifactId),
        #[prost(string, tag="2")]
        Uri(::prost::alloc::string::String),
    }
}
/// Tags are general key/value pairs associated with an Artifact. They can be used to search and filter things.
/// Tags have to be unique by key for a given artifact. That is, for a given project/domain/name/version/key, there
/// can only be one value, obviously.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Tag {
    /// tag types can be user specified if they want, though we'd probably recommend sticking with some constants
    /// that we embed in various libraries.
    #[prost(string, tag="1")]
    pub key: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub value: ::prost::alloc::string::String,
}
/// Add tags on an artifact.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddTagsRequest {
    #[prost(message, optional, tag="1")]
    pub artifact_id: ::core::option::Option<super::core::ArtifactId>,
    /// Why is this a repeated and not a map? Not sure. Just what ketan and I ended up on when we were quickly
    /// hacking this out.
    #[prost(message, repeated, tag="2")]
    pub tags: ::prost::alloc::vec::Vec<Tag>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct AddTagsResponse {
}
/// Probably will not do value match. Just remove by key.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RemoveTagsRequest {
    #[prost(message, optional, tag="1")]
    pub artifact_id: ::core::option::Option<super::core::ArtifactId>,
    /// can make these strings if necessary.
    #[prost(message, repeated, tag="2")]
    pub tags: ::prost::alloc::vec::Vec<Tag>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RemoveTagsResponse {
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
pub struct CreateAliasRequest {
    #[prost(message, optional, tag="1")]
    pub artifact_key: ::core::option::Option<super::core::ArtifactKey>,
    #[prost(message, optional, tag="2")]
    pub alias: ::core::option::Option<Alias>,
    /// If true, and another version already has the specified kind/value, set this version instead.
    #[prost(bool, tag="3")]
    pub overwrite: bool,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct CreateAliasResponse {
}
/// This removes an exact match only. That is, the kind/value in the Alias have to be set on the version for the
/// given core.ArtifactKey.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RemoveAliasRequest {
    #[prost(message, optional, tag="1")]
    pub artifact_id: ::core::option::Option<super::core::ArtifactId>,
    #[prost(message, optional, tag="2")]
    pub alias: ::core::option::Option<Alias>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct RemoveAliasResponse {
}
/// This is the key/value pair. For example an alias kind might be user facing version like a semver
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct Alias {
    /// Should this be an enum? I think it should be. version is the canonical example.
    /// If we leave this as a string, we could merge this with Tag, like use a Tag in this message instead.
    #[prost(string, tag="1")]
    pub key: ::prost::alloc::string::String,
    #[prost(string, tag="2")]
    pub value: ::prost::alloc::string::String,
}
// @@protoc_insertion_point(module)

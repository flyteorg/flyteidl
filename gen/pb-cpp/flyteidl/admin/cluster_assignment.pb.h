// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/admin/cluster_assignment.proto

#ifndef PROTOBUF_INCLUDED_flyteidl_2fadmin_2fcluster_5fassignment_2eproto
#define PROTOBUF_INCLUDED_flyteidl_2fadmin_2fcluster_5fassignment_2eproto

#include <limits>
#include <string>

#include <google/protobuf/port_def.inc>
#if PROTOBUF_VERSION < 3007000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers. Please update
#error your headers.
#endif
#if 3007000 < PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers. Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/port_undef.inc>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_table_driven.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/inlined_string_field.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_flyteidl_2fadmin_2fcluster_5fassignment_2eproto

// Internal implementation detail -- do not use these members.
struct TableStruct_flyteidl_2fadmin_2fcluster_5fassignment_2eproto {
  static const ::google::protobuf::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::google::protobuf::internal::AuxillaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::google::protobuf::internal::ParseTable schema[1]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::google::protobuf::internal::FieldMetadata field_metadata[];
  static const ::google::protobuf::internal::SerializationTable serialization_table[];
  static const ::google::protobuf::uint32 offsets[];
};
void AddDescriptors_flyteidl_2fadmin_2fcluster_5fassignment_2eproto();
namespace flyteidl {
namespace admin {
class ClusterAssignment;
class ClusterAssignmentDefaultTypeInternal;
extern ClusterAssignmentDefaultTypeInternal _ClusterAssignment_default_instance_;
}  // namespace admin
}  // namespace flyteidl
namespace google {
namespace protobuf {
template<> ::flyteidl::admin::ClusterAssignment* Arena::CreateMaybeMessage<::flyteidl::admin::ClusterAssignment>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace flyteidl {
namespace admin {

// ===================================================================

class ClusterAssignment final :
    public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:flyteidl.admin.ClusterAssignment) */ {
 public:
  ClusterAssignment();
  virtual ~ClusterAssignment();

  ClusterAssignment(const ClusterAssignment& from);

  inline ClusterAssignment& operator=(const ClusterAssignment& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  ClusterAssignment(ClusterAssignment&& from) noexcept
    : ClusterAssignment() {
    *this = ::std::move(from);
  }

  inline ClusterAssignment& operator=(ClusterAssignment&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }
  #endif
  static const ::google::protobuf::Descriptor* descriptor() {
    return default_instance().GetDescriptor();
  }
  static const ClusterAssignment& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const ClusterAssignment* internal_default_instance() {
    return reinterpret_cast<const ClusterAssignment*>(
               &_ClusterAssignment_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(ClusterAssignment* other);
  friend void swap(ClusterAssignment& a, ClusterAssignment& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline ClusterAssignment* New() const final {
    return CreateMaybeMessage<ClusterAssignment>(nullptr);
  }

  ClusterAssignment* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<ClusterAssignment>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const ClusterAssignment& from);
  void MergeFrom(const ClusterAssignment& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  #if GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
  static const char* _InternalParse(const char* begin, const char* end, void* object, ::google::protobuf::internal::ParseContext* ctx);
  ::google::protobuf::internal::ParseFunc _ParseFunc() const final { return _InternalParse; }
  #else
  bool MergePartialFromCodedStream(
      ::google::protobuf::io::CodedInputStream* input) final;
  #endif  // GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
  void SerializeWithCachedSizes(
      ::google::protobuf::io::CodedOutputStream* output) const final;
  ::google::protobuf::uint8* InternalSerializeWithCachedSizesToArray(
      ::google::protobuf::uint8* target) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(ClusterAssignment* other);
  private:
  inline ::google::protobuf::Arena* GetArenaNoVirtual() const {
    return nullptr;
  }
  inline void* MaybeArenaPtr() const {
    return nullptr;
  }
  public:

  ::google::protobuf::Metadata GetMetadata() const final;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  // string cluster_pool_name = 3;
  void clear_cluster_pool_name();
  static const int kClusterPoolNameFieldNumber = 3;
  const ::std::string& cluster_pool_name() const;
  void set_cluster_pool_name(const ::std::string& value);
  #if LANG_CXX11
  void set_cluster_pool_name(::std::string&& value);
  #endif
  void set_cluster_pool_name(const char* value);
  void set_cluster_pool_name(const char* value, size_t size);
  ::std::string* mutable_cluster_pool_name();
  ::std::string* release_cluster_pool_name();
  void set_allocated_cluster_pool_name(::std::string* cluster_pool_name);

  // @@protoc_insertion_point(class_scope:flyteidl.admin.ClusterAssignment)
 private:
  class HasBitSetters;

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::ArenaStringPtr cluster_pool_name_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_flyteidl_2fadmin_2fcluster_5fassignment_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// ClusterAssignment

// string cluster_pool_name = 3;
inline void ClusterAssignment::clear_cluster_pool_name() {
  cluster_pool_name_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& ClusterAssignment::cluster_pool_name() const {
  // @@protoc_insertion_point(field_get:flyteidl.admin.ClusterAssignment.cluster_pool_name)
  return cluster_pool_name_.GetNoArena();
}
inline void ClusterAssignment::set_cluster_pool_name(const ::std::string& value) {
  
  cluster_pool_name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:flyteidl.admin.ClusterAssignment.cluster_pool_name)
}
#if LANG_CXX11
inline void ClusterAssignment::set_cluster_pool_name(::std::string&& value) {
  
  cluster_pool_name_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:flyteidl.admin.ClusterAssignment.cluster_pool_name)
}
#endif
inline void ClusterAssignment::set_cluster_pool_name(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  cluster_pool_name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:flyteidl.admin.ClusterAssignment.cluster_pool_name)
}
inline void ClusterAssignment::set_cluster_pool_name(const char* value, size_t size) {
  
  cluster_pool_name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:flyteidl.admin.ClusterAssignment.cluster_pool_name)
}
inline ::std::string* ClusterAssignment::mutable_cluster_pool_name() {
  
  // @@protoc_insertion_point(field_mutable:flyteidl.admin.ClusterAssignment.cluster_pool_name)
  return cluster_pool_name_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* ClusterAssignment::release_cluster_pool_name() {
  // @@protoc_insertion_point(field_release:flyteidl.admin.ClusterAssignment.cluster_pool_name)
  
  return cluster_pool_name_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void ClusterAssignment::set_allocated_cluster_pool_name(::std::string* cluster_pool_name) {
  if (cluster_pool_name != nullptr) {
    
  } else {
    
  }
  cluster_pool_name_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), cluster_pool_name);
  // @@protoc_insertion_point(field_set_allocated:flyteidl.admin.ClusterAssignment.cluster_pool_name)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace admin
}  // namespace flyteidl

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // PROTOBUF_INCLUDED_flyteidl_2fadmin_2fcluster_5fassignment_2eproto

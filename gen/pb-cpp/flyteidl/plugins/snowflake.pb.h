// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/plugins/snowflake.proto

#ifndef PROTOBUF_INCLUDED_flyteidl_2fplugins_2fsnowflake_2eproto
#define PROTOBUF_INCLUDED_flyteidl_2fplugins_2fsnowflake_2eproto

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
#define PROTOBUF_INTERNAL_EXPORT_flyteidl_2fplugins_2fsnowflake_2eproto

// Internal implementation detail -- do not use these members.
struct TableStruct_flyteidl_2fplugins_2fsnowflake_2eproto {
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
void AddDescriptors_flyteidl_2fplugins_2fsnowflake_2eproto();
namespace flyteidl {
namespace plugins {
class SnowflakeQuery;
class SnowflakeQueryDefaultTypeInternal;
extern SnowflakeQueryDefaultTypeInternal _SnowflakeQuery_default_instance_;
}  // namespace plugins
}  // namespace flyteidl
namespace google {
namespace protobuf {
template<> ::flyteidl::plugins::SnowflakeQuery* Arena::CreateMaybeMessage<::flyteidl::plugins::SnowflakeQuery>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace flyteidl {
namespace plugins {

// ===================================================================

class SnowflakeQuery final :
    public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:flyteidl.plugins.SnowflakeQuery) */ {
 public:
  SnowflakeQuery();
  virtual ~SnowflakeQuery();

  SnowflakeQuery(const SnowflakeQuery& from);

  inline SnowflakeQuery& operator=(const SnowflakeQuery& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  SnowflakeQuery(SnowflakeQuery&& from) noexcept
    : SnowflakeQuery() {
    *this = ::std::move(from);
  }

  inline SnowflakeQuery& operator=(SnowflakeQuery&& from) noexcept {
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
  static const SnowflakeQuery& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const SnowflakeQuery* internal_default_instance() {
    return reinterpret_cast<const SnowflakeQuery*>(
               &_SnowflakeQuery_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(SnowflakeQuery* other);
  friend void swap(SnowflakeQuery& a, SnowflakeQuery& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline SnowflakeQuery* New() const final {
    return CreateMaybeMessage<SnowflakeQuery>(nullptr);
  }

  SnowflakeQuery* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<SnowflakeQuery>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const SnowflakeQuery& from);
  void MergeFrom(const SnowflakeQuery& from);
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
  void InternalSwap(SnowflakeQuery* other);
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

  // string account = 1;
  void clear_account();
  static const int kAccountFieldNumber = 1;
  const ::std::string& account() const;
  void set_account(const ::std::string& value);
  #if LANG_CXX11
  void set_account(::std::string&& value);
  #endif
  void set_account(const char* value);
  void set_account(const char* value, size_t size);
  ::std::string* mutable_account();
  ::std::string* release_account();
  void set_allocated_account(::std::string* account);

  // string warehouse = 2;
  void clear_warehouse();
  static const int kWarehouseFieldNumber = 2;
  const ::std::string& warehouse() const;
  void set_warehouse(const ::std::string& value);
  #if LANG_CXX11
  void set_warehouse(::std::string&& value);
  #endif
  void set_warehouse(const char* value);
  void set_warehouse(const char* value, size_t size);
  ::std::string* mutable_warehouse();
  ::std::string* release_warehouse();
  void set_allocated_warehouse(::std::string* warehouse);

  // string schema = 3;
  void clear_schema();
  static const int kSchemaFieldNumber = 3;
  const ::std::string& schema() const;
  void set_schema(const ::std::string& value);
  #if LANG_CXX11
  void set_schema(::std::string&& value);
  #endif
  void set_schema(const char* value);
  void set_schema(const char* value, size_t size);
  ::std::string* mutable_schema();
  ::std::string* release_schema();
  void set_allocated_schema(::std::string* schema);

  // string database = 4;
  void clear_database();
  static const int kDatabaseFieldNumber = 4;
  const ::std::string& database() const;
  void set_database(const ::std::string& value);
  #if LANG_CXX11
  void set_database(::std::string&& value);
  #endif
  void set_database(const char* value);
  void set_database(const char* value, size_t size);
  ::std::string* mutable_database();
  ::std::string* release_database();
  void set_allocated_database(::std::string* database);

  // @@protoc_insertion_point(class_scope:flyteidl.plugins.SnowflakeQuery)
 private:
  class HasBitSetters;

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::ArenaStringPtr account_;
  ::google::protobuf::internal::ArenaStringPtr warehouse_;
  ::google::protobuf::internal::ArenaStringPtr schema_;
  ::google::protobuf::internal::ArenaStringPtr database_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_flyteidl_2fplugins_2fsnowflake_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// SnowflakeQuery

// string account = 1;
inline void SnowflakeQuery::clear_account() {
  account_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& SnowflakeQuery::account() const {
  // @@protoc_insertion_point(field_get:flyteidl.plugins.SnowflakeQuery.account)
  return account_.GetNoArena();
}
inline void SnowflakeQuery::set_account(const ::std::string& value) {
  
  account_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:flyteidl.plugins.SnowflakeQuery.account)
}
#if LANG_CXX11
inline void SnowflakeQuery::set_account(::std::string&& value) {
  
  account_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:flyteidl.plugins.SnowflakeQuery.account)
}
#endif
inline void SnowflakeQuery::set_account(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  account_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:flyteidl.plugins.SnowflakeQuery.account)
}
inline void SnowflakeQuery::set_account(const char* value, size_t size) {
  
  account_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:flyteidl.plugins.SnowflakeQuery.account)
}
inline ::std::string* SnowflakeQuery::mutable_account() {
  
  // @@protoc_insertion_point(field_mutable:flyteidl.plugins.SnowflakeQuery.account)
  return account_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* SnowflakeQuery::release_account() {
  // @@protoc_insertion_point(field_release:flyteidl.plugins.SnowflakeQuery.account)
  
  return account_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void SnowflakeQuery::set_allocated_account(::std::string* account) {
  if (account != nullptr) {
    
  } else {
    
  }
  account_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), account);
  // @@protoc_insertion_point(field_set_allocated:flyteidl.plugins.SnowflakeQuery.account)
}

// string warehouse = 2;
inline void SnowflakeQuery::clear_warehouse() {
  warehouse_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& SnowflakeQuery::warehouse() const {
  // @@protoc_insertion_point(field_get:flyteidl.plugins.SnowflakeQuery.warehouse)
  return warehouse_.GetNoArena();
}
inline void SnowflakeQuery::set_warehouse(const ::std::string& value) {
  
  warehouse_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:flyteidl.plugins.SnowflakeQuery.warehouse)
}
#if LANG_CXX11
inline void SnowflakeQuery::set_warehouse(::std::string&& value) {
  
  warehouse_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:flyteidl.plugins.SnowflakeQuery.warehouse)
}
#endif
inline void SnowflakeQuery::set_warehouse(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  warehouse_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:flyteidl.plugins.SnowflakeQuery.warehouse)
}
inline void SnowflakeQuery::set_warehouse(const char* value, size_t size) {
  
  warehouse_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:flyteidl.plugins.SnowflakeQuery.warehouse)
}
inline ::std::string* SnowflakeQuery::mutable_warehouse() {
  
  // @@protoc_insertion_point(field_mutable:flyteidl.plugins.SnowflakeQuery.warehouse)
  return warehouse_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* SnowflakeQuery::release_warehouse() {
  // @@protoc_insertion_point(field_release:flyteidl.plugins.SnowflakeQuery.warehouse)
  
  return warehouse_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void SnowflakeQuery::set_allocated_warehouse(::std::string* warehouse) {
  if (warehouse != nullptr) {
    
  } else {
    
  }
  warehouse_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), warehouse);
  // @@protoc_insertion_point(field_set_allocated:flyteidl.plugins.SnowflakeQuery.warehouse)
}

// string schema = 3;
inline void SnowflakeQuery::clear_schema() {
  schema_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& SnowflakeQuery::schema() const {
  // @@protoc_insertion_point(field_get:flyteidl.plugins.SnowflakeQuery.schema)
  return schema_.GetNoArena();
}
inline void SnowflakeQuery::set_schema(const ::std::string& value) {
  
  schema_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:flyteidl.plugins.SnowflakeQuery.schema)
}
#if LANG_CXX11
inline void SnowflakeQuery::set_schema(::std::string&& value) {
  
  schema_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:flyteidl.plugins.SnowflakeQuery.schema)
}
#endif
inline void SnowflakeQuery::set_schema(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  schema_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:flyteidl.plugins.SnowflakeQuery.schema)
}
inline void SnowflakeQuery::set_schema(const char* value, size_t size) {
  
  schema_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:flyteidl.plugins.SnowflakeQuery.schema)
}
inline ::std::string* SnowflakeQuery::mutable_schema() {
  
  // @@protoc_insertion_point(field_mutable:flyteidl.plugins.SnowflakeQuery.schema)
  return schema_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* SnowflakeQuery::release_schema() {
  // @@protoc_insertion_point(field_release:flyteidl.plugins.SnowflakeQuery.schema)
  
  return schema_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void SnowflakeQuery::set_allocated_schema(::std::string* schema) {
  if (schema != nullptr) {
    
  } else {
    
  }
  schema_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), schema);
  // @@protoc_insertion_point(field_set_allocated:flyteidl.plugins.SnowflakeQuery.schema)
}

// string database = 4;
inline void SnowflakeQuery::clear_database() {
  database_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& SnowflakeQuery::database() const {
  // @@protoc_insertion_point(field_get:flyteidl.plugins.SnowflakeQuery.database)
  return database_.GetNoArena();
}
inline void SnowflakeQuery::set_database(const ::std::string& value) {
  
  database_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:flyteidl.plugins.SnowflakeQuery.database)
}
#if LANG_CXX11
inline void SnowflakeQuery::set_database(::std::string&& value) {
  
  database_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:flyteidl.plugins.SnowflakeQuery.database)
}
#endif
inline void SnowflakeQuery::set_database(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  database_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:flyteidl.plugins.SnowflakeQuery.database)
}
inline void SnowflakeQuery::set_database(const char* value, size_t size) {
  
  database_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:flyteidl.plugins.SnowflakeQuery.database)
}
inline ::std::string* SnowflakeQuery::mutable_database() {
  
  // @@protoc_insertion_point(field_mutable:flyteidl.plugins.SnowflakeQuery.database)
  return database_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* SnowflakeQuery::release_database() {
  // @@protoc_insertion_point(field_release:flyteidl.plugins.SnowflakeQuery.database)
  
  return database_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void SnowflakeQuery::set_allocated_database(::std::string* database) {
  if (database != nullptr) {
    
  } else {
    
  }
  database_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), database);
  // @@protoc_insertion_point(field_set_allocated:flyteidl.plugins.SnowflakeQuery.database)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace plugins
}  // namespace flyteidl

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // PROTOBUF_INCLUDED_flyteidl_2fplugins_2fsnowflake_2eproto

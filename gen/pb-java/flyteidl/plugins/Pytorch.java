// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: flyteidl/plugins/pytorch.proto

package flyteidl.plugins;

public final class Pytorch {
  private Pytorch() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface PyTorchOperatorTaskOrBuilder extends
      // @@protoc_insertion_point(interface_extends:flyteidl.plugins.PyTorchOperatorTask)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <pre>
     * number of worker replicas spawned in the cluster for this job
     * </pre>
     *
     * <code>int32 workers = 1;</code>
     */
    int getWorkers();
  }
  /**
   * <pre>
   * Custom proto for Pytorch plugin
   * </pre>
   *
   * Protobuf type {@code flyteidl.plugins.PyTorchOperatorTask}
   */
  public  static final class PyTorchOperatorTask extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:flyteidl.plugins.PyTorchOperatorTask)
      PyTorchOperatorTaskOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use PyTorchOperatorTask.newBuilder() to construct.
    private PyTorchOperatorTask(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private PyTorchOperatorTask() {
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private PyTorchOperatorTask(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      this();
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      int mutable_bitField0_ = 0;
      com.google.protobuf.UnknownFieldSet.Builder unknownFields =
          com.google.protobuf.UnknownFieldSet.newBuilder();
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 8: {

              workers_ = input.readInt32();
              break;
            }
            default: {
              if (!parseUnknownField(
                  input, unknownFields, extensionRegistry, tag)) {
                done = true;
              }
              break;
            }
          }
        }
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(this);
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(
            e).setUnfinishedMessage(this);
      } finally {
        this.unknownFields = unknownFields.build();
        makeExtensionsImmutable();
      }
    }
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return flyteidl.plugins.Pytorch.internal_static_flyteidl_plugins_PyTorchOperatorTask_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return flyteidl.plugins.Pytorch.internal_static_flyteidl_plugins_PyTorchOperatorTask_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              flyteidl.plugins.Pytorch.PyTorchOperatorTask.class, flyteidl.plugins.Pytorch.PyTorchOperatorTask.Builder.class);
    }

    public static final int WORKERS_FIELD_NUMBER = 1;
    private int workers_;
    /**
     * <pre>
     * number of worker replicas spawned in the cluster for this job
     * </pre>
     *
     * <code>int32 workers = 1;</code>
     */
    public int getWorkers() {
      return workers_;
    }

    private byte memoizedIsInitialized = -1;
    @java.lang.Override
    public final boolean isInitialized() {
      byte isInitialized = memoizedIsInitialized;
      if (isInitialized == 1) return true;
      if (isInitialized == 0) return false;

      memoizedIsInitialized = 1;
      return true;
    }

    @java.lang.Override
    public void writeTo(com.google.protobuf.CodedOutputStream output)
                        throws java.io.IOException {
      if (workers_ != 0) {
        output.writeInt32(1, workers_);
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (workers_ != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeInt32Size(1, workers_);
      }
      size += unknownFields.getSerializedSize();
      memoizedSize = size;
      return size;
    }

    @java.lang.Override
    public boolean equals(final java.lang.Object obj) {
      if (obj == this) {
       return true;
      }
      if (!(obj instanceof flyteidl.plugins.Pytorch.PyTorchOperatorTask)) {
        return super.equals(obj);
      }
      flyteidl.plugins.Pytorch.PyTorchOperatorTask other = (flyteidl.plugins.Pytorch.PyTorchOperatorTask) obj;

      if (getWorkers()
          != other.getWorkers()) return false;
      if (!unknownFields.equals(other.unknownFields)) return false;
      return true;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptor().hashCode();
      hash = (37 * hash) + WORKERS_FIELD_NUMBER;
      hash = (53 * hash) + getWorkers();
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static flyteidl.plugins.Pytorch.PyTorchOperatorTask parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static flyteidl.plugins.Pytorch.PyTorchOperatorTask parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static flyteidl.plugins.Pytorch.PyTorchOperatorTask parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static flyteidl.plugins.Pytorch.PyTorchOperatorTask parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static flyteidl.plugins.Pytorch.PyTorchOperatorTask parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static flyteidl.plugins.Pytorch.PyTorchOperatorTask parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static flyteidl.plugins.Pytorch.PyTorchOperatorTask parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static flyteidl.plugins.Pytorch.PyTorchOperatorTask parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static flyteidl.plugins.Pytorch.PyTorchOperatorTask parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static flyteidl.plugins.Pytorch.PyTorchOperatorTask parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static flyteidl.plugins.Pytorch.PyTorchOperatorTask parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static flyteidl.plugins.Pytorch.PyTorchOperatorTask parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }

    @java.lang.Override
    public Builder newBuilderForType() { return newBuilder(); }
    public static Builder newBuilder() {
      return DEFAULT_INSTANCE.toBuilder();
    }
    public static Builder newBuilder(flyteidl.plugins.Pytorch.PyTorchOperatorTask prototype) {
      return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
    }
    @java.lang.Override
    public Builder toBuilder() {
      return this == DEFAULT_INSTANCE
          ? new Builder() : new Builder().mergeFrom(this);
    }

    @java.lang.Override
    protected Builder newBuilderForType(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      Builder builder = new Builder(parent);
      return builder;
    }
    /**
     * <pre>
     * Custom proto for Pytorch plugin
     * </pre>
     *
     * Protobuf type {@code flyteidl.plugins.PyTorchOperatorTask}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:flyteidl.plugins.PyTorchOperatorTask)
        flyteidl.plugins.Pytorch.PyTorchOperatorTaskOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return flyteidl.plugins.Pytorch.internal_static_flyteidl_plugins_PyTorchOperatorTask_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return flyteidl.plugins.Pytorch.internal_static_flyteidl_plugins_PyTorchOperatorTask_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                flyteidl.plugins.Pytorch.PyTorchOperatorTask.class, flyteidl.plugins.Pytorch.PyTorchOperatorTask.Builder.class);
      }

      // Construct using flyteidl.plugins.Pytorch.PyTorchOperatorTask.newBuilder()
      private Builder() {
        maybeForceBuilderInitialization();
      }

      private Builder(
          com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
        super(parent);
        maybeForceBuilderInitialization();
      }
      private void maybeForceBuilderInitialization() {
        if (com.google.protobuf.GeneratedMessageV3
                .alwaysUseFieldBuilders) {
        }
      }
      @java.lang.Override
      public Builder clear() {
        super.clear();
        workers_ = 0;

        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return flyteidl.plugins.Pytorch.internal_static_flyteidl_plugins_PyTorchOperatorTask_descriptor;
      }

      @java.lang.Override
      public flyteidl.plugins.Pytorch.PyTorchOperatorTask getDefaultInstanceForType() {
        return flyteidl.plugins.Pytorch.PyTorchOperatorTask.getDefaultInstance();
      }

      @java.lang.Override
      public flyteidl.plugins.Pytorch.PyTorchOperatorTask build() {
        flyteidl.plugins.Pytorch.PyTorchOperatorTask result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public flyteidl.plugins.Pytorch.PyTorchOperatorTask buildPartial() {
        flyteidl.plugins.Pytorch.PyTorchOperatorTask result = new flyteidl.plugins.Pytorch.PyTorchOperatorTask(this);
        result.workers_ = workers_;
        onBuilt();
        return result;
      }

      @java.lang.Override
      public Builder clone() {
        return super.clone();
      }
      @java.lang.Override
      public Builder setField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.setField(field, value);
      }
      @java.lang.Override
      public Builder clearField(
          com.google.protobuf.Descriptors.FieldDescriptor field) {
        return super.clearField(field);
      }
      @java.lang.Override
      public Builder clearOneof(
          com.google.protobuf.Descriptors.OneofDescriptor oneof) {
        return super.clearOneof(oneof);
      }
      @java.lang.Override
      public Builder setRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          int index, java.lang.Object value) {
        return super.setRepeatedField(field, index, value);
      }
      @java.lang.Override
      public Builder addRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.addRepeatedField(field, value);
      }
      @java.lang.Override
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof flyteidl.plugins.Pytorch.PyTorchOperatorTask) {
          return mergeFrom((flyteidl.plugins.Pytorch.PyTorchOperatorTask)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(flyteidl.plugins.Pytorch.PyTorchOperatorTask other) {
        if (other == flyteidl.plugins.Pytorch.PyTorchOperatorTask.getDefaultInstance()) return this;
        if (other.getWorkers() != 0) {
          setWorkers(other.getWorkers());
        }
        this.mergeUnknownFields(other.unknownFields);
        onChanged();
        return this;
      }

      @java.lang.Override
      public final boolean isInitialized() {
        return true;
      }

      @java.lang.Override
      public Builder mergeFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws java.io.IOException {
        flyteidl.plugins.Pytorch.PyTorchOperatorTask parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (flyteidl.plugins.Pytorch.PyTorchOperatorTask) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private int workers_ ;
      /**
       * <pre>
       * number of worker replicas spawned in the cluster for this job
       * </pre>
       *
       * <code>int32 workers = 1;</code>
       */
      public int getWorkers() {
        return workers_;
      }
      /**
       * <pre>
       * number of worker replicas spawned in the cluster for this job
       * </pre>
       *
       * <code>int32 workers = 1;</code>
       */
      public Builder setWorkers(int value) {
        
        workers_ = value;
        onChanged();
        return this;
      }
      /**
       * <pre>
       * number of worker replicas spawned in the cluster for this job
       * </pre>
       *
       * <code>int32 workers = 1;</code>
       */
      public Builder clearWorkers() {
        
        workers_ = 0;
        onChanged();
        return this;
      }
      @java.lang.Override
      public final Builder setUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.setUnknownFields(unknownFields);
      }

      @java.lang.Override
      public final Builder mergeUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.mergeUnknownFields(unknownFields);
      }


      // @@protoc_insertion_point(builder_scope:flyteidl.plugins.PyTorchOperatorTask)
    }

    // @@protoc_insertion_point(class_scope:flyteidl.plugins.PyTorchOperatorTask)
    private static final flyteidl.plugins.Pytorch.PyTorchOperatorTask DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new flyteidl.plugins.Pytorch.PyTorchOperatorTask();
    }

    public static flyteidl.plugins.Pytorch.PyTorchOperatorTask getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<PyTorchOperatorTask>
        PARSER = new com.google.protobuf.AbstractParser<PyTorchOperatorTask>() {
      @java.lang.Override
      public PyTorchOperatorTask parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new PyTorchOperatorTask(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<PyTorchOperatorTask> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<PyTorchOperatorTask> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public flyteidl.plugins.Pytorch.PyTorchOperatorTask getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_flyteidl_plugins_PyTorchOperatorTask_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_flyteidl_plugins_PyTorchOperatorTask_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\036flyteidl/plugins/pytorch.proto\022\020flytei" +
      "dl.plugins\"&\n\023PyTorchOperatorTask\022\017\n\007wor" +
      "kers\030\001 \001(\005B5Z3github.com/lyft/flyteidl/g" +
      "en/pb-go/flyteidl/pluginsb\006proto3"
    };
    com.google.protobuf.Descriptors.FileDescriptor.InternalDescriptorAssigner assigner =
        new com.google.protobuf.Descriptors.FileDescriptor.    InternalDescriptorAssigner() {
          public com.google.protobuf.ExtensionRegistry assignDescriptors(
              com.google.protobuf.Descriptors.FileDescriptor root) {
            descriptor = root;
            return null;
          }
        };
    com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        }, assigner);
    internal_static_flyteidl_plugins_PyTorchOperatorTask_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_flyteidl_plugins_PyTorchOperatorTask_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_flyteidl_plugins_PyTorchOperatorTask_descriptor,
        new java.lang.String[] { "Workers", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}

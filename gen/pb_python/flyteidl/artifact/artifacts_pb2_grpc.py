# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from flyteidl.artifact import artifacts_pb2 as flyteidl_dot_artifact_dot_artifacts__pb2


class ArtifactRegistryStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.CreateArtifact = channel.unary_unary(
                '/flyteidl.artifact.ArtifactRegistry/CreateArtifact',
                request_serializer=flyteidl_dot_artifact_dot_artifacts__pb2.CreateArtifactRequest.SerializeToString,
                response_deserializer=flyteidl_dot_artifact_dot_artifacts__pb2.CreateArtifactResponse.FromString,
                )
        self.GetArtifact = channel.unary_unary(
                '/flyteidl.artifact.ArtifactRegistry/GetArtifact',
                request_serializer=flyteidl_dot_artifact_dot_artifacts__pb2.GetArtifactRequest.SerializeToString,
                response_deserializer=flyteidl_dot_artifact_dot_artifacts__pb2.GetArtifactResponse.FromString,
                )
        self.AddTag = channel.unary_unary(
                '/flyteidl.artifact.ArtifactRegistry/AddTag',
                request_serializer=flyteidl_dot_artifact_dot_artifacts__pb2.AddTagRequest.SerializeToString,
                response_deserializer=flyteidl_dot_artifact_dot_artifacts__pb2.AddTagResponse.FromString,
                )


class ArtifactRegistryServicer(object):
    """Missing associated documentation comment in .proto file."""

    def CreateArtifact(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetArtifact(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def AddTag(self, request, context):
        """rpc ListArtifactNames (ListArtifactNamesRequest) returns (ListArtifactNamesResponse) {}

        rpc ListArtifacts (ListArtifactsRequest) returns (ListArtifactsResponse) {}

        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ArtifactRegistryServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'CreateArtifact': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateArtifact,
                    request_deserializer=flyteidl_dot_artifact_dot_artifacts__pb2.CreateArtifactRequest.FromString,
                    response_serializer=flyteidl_dot_artifact_dot_artifacts__pb2.CreateArtifactResponse.SerializeToString,
            ),
            'GetArtifact': grpc.unary_unary_rpc_method_handler(
                    servicer.GetArtifact,
                    request_deserializer=flyteidl_dot_artifact_dot_artifacts__pb2.GetArtifactRequest.FromString,
                    response_serializer=flyteidl_dot_artifact_dot_artifacts__pb2.GetArtifactResponse.SerializeToString,
            ),
            'AddTag': grpc.unary_unary_rpc_method_handler(
                    servicer.AddTag,
                    request_deserializer=flyteidl_dot_artifact_dot_artifacts__pb2.AddTagRequest.FromString,
                    response_serializer=flyteidl_dot_artifact_dot_artifacts__pb2.AddTagResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'flyteidl.artifact.ArtifactRegistry', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ArtifactRegistry(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def CreateArtifact(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/flyteidl.artifact.ArtifactRegistry/CreateArtifact',
            flyteidl_dot_artifact_dot_artifacts__pb2.CreateArtifactRequest.SerializeToString,
            flyteidl_dot_artifact_dot_artifacts__pb2.CreateArtifactResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetArtifact(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/flyteidl.artifact.ArtifactRegistry/GetArtifact',
            flyteidl_dot_artifact_dot_artifacts__pb2.GetArtifactRequest.SerializeToString,
            flyteidl_dot_artifact_dot_artifacts__pb2.GetArtifactResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def AddTag(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/flyteidl.artifact.ArtifactRegistry/AddTag',
            flyteidl_dot_artifact_dot_artifacts__pb2.AddTagRequest.SerializeToString,
            flyteidl_dot_artifact_dot_artifacts__pb2.AddTagResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

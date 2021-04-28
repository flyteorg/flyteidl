package _leggedoauth
//
//import (
//	"context"
//
//	"github.com/flyteorg/flyteidl/clients/go/admin"
//	"github.com/flyteorg/flyteidl/clients/go/admin/3leggedoauth/interfaces"
//	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
//
//	"golang.org/x/oauth2"
//	"google.golang.org/grpc"
//	"google.golang.org/grpc/codes"
//	"google.golang.org/grpc/status"
//)
//
//var (
//	defaultTokenOrchestrator = NewTokenOrchestrator()
//)
//
//func NewTokenOrchestrator() interfaces.FetchTokenOrchestrator {
//	return TokenOrchestrator{}
//}
//
//type AdminGrpcAPICallContext func(ctx context.Context, callOptions []grpc.CallOption) error
//
//type AdminGrpcCallOptions func(ctx context.Context, callOptions []grpc.CallOption) ([]grpc.CallOption, error)
//
//func callOptionForToken(ctx context.Context, authMetadataClient service.AuthMetadataServiceClient, token *oauth2.Token) (grpc.CallOption, error) {
//	defaultHeaderTokenSource := &DefaultHeaderTokenSource{
//		FlyteCtlToken: token,
//	}
//	var flyteClientResp *service.FlyteClientResponse
//	var err error
//	if flyteClientResp, err = authMetadataClient.FlyteClient(ctx, &service.FlyteClientRequest{}); err != nil {
//		return nil, err
//	}
//	customHeaderTokenSource := admin.NewCustomHeaderTokenSource(defaultHeaderTokenSource, admin.GetConfig(ctx).UseInsecureConnection,
//		flyteClientResp.AuthorizationMetadataKey)
//	return grpc.PerRPCCredentials(customHeaderTokenSource), nil
//}
//
//func dialOptionForToken(ctx context.Context, authMetadataClient service.AuthMetadataServiceClient, token *oauth2.Token) (grpc.DialOption, error) {
//	defaultHeaderTokenSource := &DefaultHeaderTokenSource{
//		FlyteCtlToken: token,
//	}
//	var flyteClientResp *service.FlyteClientResponse
//	var err error
//	if flyteClientResp, err = authMetadataClient.FlyteClient(ctx, &service.FlyteClientRequest{}); err != nil {
//		return nil, err
//	}
//	customHeaderTokenSource := admin.NewCustomHeaderTokenSource(defaultHeaderTokenSource, admin.GetConfig(ctx).UseInsecureConnection,
//		flyteClientResp.AuthorizationMetadataKey)
//	return grpc.PerRPCCredentials(customHeaderTokenSource), nil
//}
//
//func updateWithNewToken(ctx context.Context, authMetadataClient service.AuthMetadataServiceClient, callOptions []grpc.CallOption) ([]grpc.CallOption, error) {
//	var newToken *oauth2.Token
//	var err error
//	if newToken, err = defaultTokenOrchestrator.FetchTokenFromAuthFlow(ctx, authMetadataClient); err != nil {
//		return nil, err
//	}
//	var tokenCallOption grpc.CallOption
//	if tokenCallOption, err = callOptionForToken(ctx, authMetadataClient, newToken); err != nil {
//		return nil, err
//	}
//	return append(callOptions, tokenCallOption), nil
//}
//
//func updateWithCachedOrRefreshedToken(ctx context.Context, authMetadataClient service.AuthMetadataServiceClient, callOptions []grpc.CallOption) []grpc.CallOption {
//	var cachedOrRefreshedToken *oauth2.Token
//	if cachedOrRefreshedToken = defaultTokenOrchestrator.FetchTokenFromCacheOrRefreshIt(ctx, authMetadataClient); cachedOrRefreshedToken == nil {
//		return callOptions
//	}
//	var tokenCallOption grpc.CallOption
//	var err error
//	if tokenCallOption, err = callOptionForToken(ctx, authMetadataClient, cachedOrRefreshedToken); err != nil {
//		return nil
//	}
//	return append(callOptions, tokenCallOption)
//}
//
//func Do(ctx context.Context, authMetadataClient service.AuthMetadataServiceClient, grpcAPICallContext AdminGrpcAPICallContext, callOptions []grpc.CallOption) error {
//	// Fetch from the cache only when usAuth is enabled.
//	callOptions = updateWithCachedOrRefreshedToken(ctx, authMetadataClient, callOptions)
//	if grpcStatusError := grpcAPICallContext(ctx, callOptions); grpcStatusError != nil {
//		if grpcStatus, ok := status.FromError(grpcStatusError); ok && grpcStatus.Code() == codes.Unauthenticated {
//			var err error
//			if callOptions, err = updateWithNewToken(ctx, authMetadataClient, callOptions); err != nil {
//				return err
//			}
//			return grpcAPICallContext(ctx, callOptions)
//		}
//		return grpcStatusError
//	}
//	return nil
//}

package _leggedoauth
//
//import (
//	"context"
//	"errors"
//	"fmt"
//	"testing"
//	"time"
//
//	"github.com/flyteorg/flytectl/cmd/testutils"
//	"github.com/flyteorg/flytectl/pkg/auth/interfaces/mocks"
//	"github.com/flyteorg/flyteidl/clients/go/admin"
//	adminMocks "github.com/flyteorg/flyteidl/clients/go/admin/mocks"
//	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
//
//	"github.com/stretchr/testify/assert"
//	"github.com/stretchr/testify/mock"
//	"golang.org/x/oauth2"
//	"google.golang.org/grpc"
//	"google.golang.org/grpc/codes"
//	"google.golang.org/grpc/status"
//)
//
//var setup = testutils.Setup
//
//var (
//	ctx                   context.Context
//	authMetadataClient    *adminMocks.AuthMetadataServiceClient
//	grpcAPICallContext    AdminGrpcAPICallContext
//	callOptions           []grpc.CallOption
//	useAuth               bool
//	mockTokenOrchestrator *mocks.FetchTokenOrchestrator
//)
//
//func GrpcCallUtilSetup() {
//	ctx = testutils.Ctx
//	authMetadataClient = testutils.MockAuthClient
//	useAuth = false
//	mockTokenOrchestrator = &mocks.FetchTokenOrchestrator{}
//	defaultTokenOrchestrator = mockTokenOrchestrator
//	grpcAPICallContext = func(ctx context.Context, callOptions []grpc.CallOption) error {
//		return nil
//	}
//	authMetadataClient.OnFlyteClientMatch(mock.Anything, mock.Anything).Return(&service.FlyteClientResponse{
//		AuthorizationMetadataKey: "flyte_authorization",
//	}, nil)
//}
//
//func TestDo(t *testing.T) {
//	setup()
//	GrpcCallUtilSetup()
//	err := Do(ctx, authMetadataClient, grpcAPICallContext, callOptions)
//	assert.Nil(t, err)
//}
//
//func TestDoWithNonAuthError(t *testing.T) {
//	setup()
//	GrpcCallUtilSetup()
//	grpcAPICallContext = func(ctx context.Context, callOptions []grpc.CallOption) error {
//		return fmt.Errorf("nonAuthError")
//	}
//	err := Do(ctx, authMetadataClient, grpcAPICallContext, callOptions)
//	assert.NotNil(t, err)
//	assert.Equal(t, err, fmt.Errorf("nonAuthError"))
//}
//
//func TestDoWithAuthErrorWithClientAuthDisabled(t *testing.T) {
//	setup()
//	GrpcCallUtilSetup()
//	grpcAPICallContext = func(ctx context.Context, callOptions []grpc.CallOption) error {
//		return status.New(codes.Unauthenticated, "empty identity").Err()
//	}
//	err := Do(ctx, authMetadataClient, grpcAPICallContext, callOptions)
//	assert.NotNil(t, err)
//	s, ok := status.FromError(err)
//	assert.True(t, ok)
//	assert.Equal(t, s, status.New(codes.Unauthenticated, "empty identity"))
//}
//
//func TestDoWithAuthErrorWithClientAuthEnabled(t *testing.T) {
//	setup()
//	GrpcCallUtilSetup()
//	admin.GetConfig(ctx).UseAuth = true
//	grpcAPICallContext = func(ctx context.Context, callOptions []grpc.CallOption) error {
//		return status.New(codes.Unauthenticated, "empty identity").Err()
//	}
//
//	token := &oauth2.Token{
//		AccessToken: "fakeAccessToken",
//		Expiry:      time.Now().Add(time.Minute * 30),
//	}
//	mockTokenOrchestrator.OnFetchTokenFromAuthFlowMatch(mock.Anything, mock.Anything, mock.Anything).Return(token, nil)
//	mockTokenOrchestrator.OnFetchTokenFromCacheOrRefreshItMatch(mock.Anything, mock.Anything).Return(token)
//	mockTokenOrchestrator.OnRefreshTheTokenMatch(mock.Anything, mock.Anything, mock.Anything).Return(token)
//	err := Do(ctx, authMetadataClient, grpcAPICallContext, callOptions)
//	assert.NotNil(t, err)
//	assert.Equal(t, err, status.New(codes.Unauthenticated, "empty identity").Err())
//}
//
//func TestDoWithAuthErrorWithClientAuthEnabledAndError(t *testing.T) {
//	setup()
//	GrpcCallUtilSetup()
//
//	admin.GetConfig(ctx).UseAuth = true
//	grpcAPICallContext = func(ctx context.Context, callOptions []grpc.CallOption) error {
//		return status.New(codes.Unauthenticated, "empty identity").Err()
//	}
//	mockTokenOrchestrator.OnFetchTokenFromAuthFlowMatch(mock.Anything, mock.Anything, mock.Anything).Return(nil, errors.New("failed to fetch token using auth flow"))
//	mockTokenOrchestrator.OnFetchTokenFromCacheOrRefreshItMatch(mock.Anything, mock.Anything).Return(nil)
//	mockTokenOrchestrator.OnRefreshTheTokenMatch(mock.Anything, mock.Anything, mock.Anything).Return(nil)
//	err := Do(ctx, authMetadataClient, grpcAPICallContext, callOptions)
//	assert.NotNil(t, err)
//	assert.Equal(t, err, errors.New("failed to fetch token using auth flow"))
//}
//
//func TestDoWithAuthErrorWithClientAuthEnabledInsecureCreds(t *testing.T) {
//	setup()
//	GrpcCallUtilSetup()
//	admin.GetConfig(ctx).UseAuth = true
//	admin.GetConfig(ctx).UseInsecureConnection = true
//	grpcAPICallContext = func(ctx context.Context, callOptions []grpc.CallOption) error {
//		return status.New(codes.Unauthenticated, "empty identity").Err()
//	}
//	token := &oauth2.Token{
//		AccessToken: "fakeAccessToken",
//		Expiry:      time.Now().Add(time.Minute * 30),
//	}
//	mockTokenOrchestrator.OnFetchTokenFromAuthFlowMatch(mock.Anything, mock.Anything, mock.Anything).Return(token, nil)
//	mockTokenOrchestrator.OnFetchTokenFromCacheOrRefreshItMatch(mock.Anything, mock.Anything).Return(token)
//	mockTokenOrchestrator.OnRefreshTheTokenMatch(mock.Anything, mock.Anything, mock.Anything).Return(token)
//	err := Do(ctx, authMetadataClient, grpcAPICallContext, callOptions)
//	assert.NotNil(t, err)
//	assert.Equal(t, err, status.New(codes.Unauthenticated, "empty identity").Err())
//}

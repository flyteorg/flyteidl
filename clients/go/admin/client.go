package admin

import (
	"context"
	"fmt"
	"github.com/grpc-ecosystem/go-grpc-middleware"
	"github.com/grpc-ecosystem/go-grpc-middleware/retry"
	"github.com/grpc-ecosystem/go-grpc-prometheus"
	"github.com/lyft/flyteidl/clients/go/admin/mocks"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/lyft/flytestdlib/logger"
	"golang.org/x/oauth2/clientcredentials"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"sync"
)

var (
	once            = sync.Once{}
	adminConnection *grpc.ClientConn
)

func NewAdminClient(ctx context.Context, conn *grpc.ClientConn) service.AdminServiceClient {
	logger.Infof(ctx, "Initialized Admin client")
	client := service.NewAdminServiceClient(conn)
	return client
}

func GetAdditionalAdminClientConfigOptions(cfg Config) []grpc.DialOption {
	opts := make([]grpc.DialOption, 0, 2)
	backoffConfig := grpc.BackoffConfig{
		MaxDelay: cfg.MaxBackoffDelay.Duration,
	}
	opts = append(opts, grpc.WithBackoffConfig(backoffConfig))

	timeoutDialOption := grpc_retry.WithPerRetryTimeout(cfg.PerRetryTimeout.Duration)
	maxRetriesOption := grpc_retry.WithMax(uint(cfg.MaxRetries))

	retryInterceptor := grpc_retry.UnaryClientInterceptor(timeoutDialOption, maxRetriesOption)
	finalUnaryInterceptor := grpc_middleware.ChainUnaryClient(
		grpc_prometheus.UnaryClientInterceptor,
		retryInterceptor,
	)

	// We only make unary calls in this client, no streaming calls.  We can add a streaming interceptor if admin
	// ever has those endpoints
	opts = append(opts, grpc.WithUnaryInterceptor(finalUnaryInterceptor))

	return opts
}

func NewAdminConnection(ctx context.Context, cfg Config) (*grpc.ClientConn, error) {
	var opts []grpc.DialOption

	if cfg.UseInsecureConnection {
		opts = append(opts, grpc.WithInsecure())
	} else {

		creds, err := credentials.NewClientTLSFromFile("/Users/ytong/.ssh/admin/server.pem", ":8088")
		if err != nil {
			return nil, err
		}
		//creds := credentials.NewClientTLSFromCert(nil, "")

		opts = append(opts, grpc.WithTransportCredentials(creds))

		if cfg.UseAuth {
			logger.Infof(ctx, "Instantiating a TokenSource to authenticate against Admin, ID: %s", cfg.ClientId)
			ccConfig := clientcredentials.Config{
				ClientID:     cfg.ClientId,
				ClientSecret: cfg.ClientSecret,
				TokenURL:     cfg.TokenURL,
				Scopes:       cfg.Scopes,
			}
			tSource := ccConfig.TokenSource(ctx)
			oauthTokenSource := NewTokenSource(tSource, cfg.GrpcAuthorizationHeader)
			jwtDialOption := grpc.WithPerRPCCredentials(oauthTokenSource)
			opts = append(opts, jwtDialOption)
		}
	}

	opts = append(opts, GetAdditionalAdminClientConfigOptions(cfg)...)
	return grpc.Dial(cfg.Endpoint.String(), opts...)
}

// Create an AdminClient with a shared Admin connection for the process
func InitializeAdminClient(ctx context.Context, cfg Config) service.AdminServiceClient {
	once.Do(func() {
		var err error
		adminConnection, err = NewAdminConnection(ctx, cfg)
		if err != nil {
			logger.Panicf(ctx, "failed to initialize Admin connection. Err: %s", err.Error())
		}
	})

	return NewAdminClient(ctx, adminConnection)
}

func InitializeAdminClientFromConfig(ctx context.Context) (service.AdminServiceClient, error) {
	cfg := GetConfig(ctx)
	if cfg == nil {
		return nil, fmt.Errorf("retrieved Nil config for [%s] key", configSectionKey)
	}
	return InitializeAdminClient(ctx, *cfg), nil
}

func InitializeMockAdminClient() service.AdminServiceClient {
	logger.Infof(context.TODO(), "Initialized Mock Admin client")
	return &mocks.AdminServiceClient{}
}

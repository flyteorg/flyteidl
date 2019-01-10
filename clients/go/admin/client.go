package admin

import (
	"context"
	"fmt"
	"sync"

	"github.com/lyft/flyteidl/clients/go/admin/mocks"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/lyft/flytestdlib/logger"
	"google.golang.org/grpc"
)

var (
	once        = sync.Once{}
	adminClient service.AdminServiceClient
)

func NewAdminClient(_ context.Context, conn *grpc.ClientConn) service.AdminServiceClient {
	return service.NewAdminServiceClient(conn)
}

// TODO Use config to configure the connection correctly with backoff etc
func NewAdminConnection(_ context.Context, cfg Config) (*grpc.ClientConn, error) {
	var opts []grpc.DialOption
	opts = append(opts, grpc.WithInsecure())
	return grpc.Dial(cfg.Endpoint.String(), opts...)
}

func InitializeAdminClient(ctx context.Context, cfg Config) service.AdminServiceClient {
	once.Do(func() {
		conn, err := NewAdminConnection(ctx, cfg)
		if err != nil {
			logger.Panicf(ctx, "failed to initialize Admin connection. Err: %s", err.Error())
		}
		adminClient = NewAdminClient(ctx, conn)
		logger.Infof(ctx, "Initialized Admin client")
	})
	return adminClient
}

func InitializeAdminClientFromConfig(ctx context.Context) (service.AdminServiceClient, error) {
	cfg := GetConfig(ctx)
	if cfg == nil {
		return nil, fmt.Errorf("retrieved Nil config for [%s] key", configSectionKey)
	}
	return InitializeAdminClient(ctx, *cfg), nil
}

func InitializeMockAdminClient() service.AdminServiceClient {
	once.Do(func() {
		logger.Infof(context.TODO(), "Initialized Mock Admin client")
		adminClient = &mocks.AdminServiceClient{}
	})
	return adminClient
}

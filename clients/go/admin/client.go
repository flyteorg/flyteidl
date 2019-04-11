package admin

import (
	"context"
	"crypto/x509"
	"fmt"
	"google.golang.org/grpc/credentials"
	"sync"

	"github.com/lyft/flyteidl/clients/go/admin/mocks"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/lyft/flytestdlib/logger"
	"google.golang.org/grpc"
)

var (
	once            = sync.Once{}
	adminConnection *grpc.ClientConn
)

func NewAdminClient(ctx context.Context, conn *grpc.ClientConn) service.AdminServiceClient {
	logger.Infof(ctx, "Initialized Admin client")
	return service.NewAdminServiceClient(conn)
}

// TODO Use config to configure the connection correctly with backoff etc
func NewAdminConnection(_ context.Context, cfg Config) (*grpc.ClientConn, error) {
	var opts []grpc.DialOption
	if cfg.UseInsecureConnection {
		opts = append(opts, grpc.WithInsecure())
	} else {
		// TODO: as of Go 1.11.4, this is not supported on Windows. https://github.com/golang/go/issues/16736
		pool, err := x509.SystemCertPool()
		if err != nil {
			return nil, err
		}

		creds := credentials.NewClientTLSFromCert(pool, "")
		opts = append(opts, grpc.WithTransportCredentials(creds))
	}

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

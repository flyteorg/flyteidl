package datacatalog

import (
	"context"
	"crypto/x509"
	"fmt"
	"github.com/lyft/flytestdlib/logger"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"sync"
	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/datacatalog"
	"github.com/grpc-ecosystem/go-grpc-middleware/retry"
	"github.com/grpc-ecosystem/go-grpc-middleware"
	"github.com/grpc-ecosystem/go-grpc-prometheus"
)

var (
	once            = sync.Once{}
	dataCatalogConnection *grpc.ClientConn
)

func NewDataCatalogClient(ctx context.Context, conn *grpc.ClientConn) datacatalog.DataCatalogServiceClient {
	logger.Infof(ctx, "Initialized Data Catalog client")
	return datacatalog.NewDataCatalogServiceClient(conn)
}

func NewDataCatalogConnection(_ context.Context, cfg ClientConfig) (*grpc.ClientConn, error) {
	var opts []grpc.DialOption

	// configure secure connection options
	if cfg.UseInsecureConnection {
		opts = append(opts, grpc.WithInsecure())
	} else {
		pool, err := x509.SystemCertPool()
		if err != nil {
			return nil, err
		}

		creds := credentials.NewClientTLSFromCert(pool, "")
		opts = append(opts, grpc.WithTransportCredentials(creds))
	}

	// configure rety timeout options
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

	// We only make unary calls in this client, no streaming calls.
	// We can add a streaming interceptor if datacatalog ever has those endpoints
	opts = append(opts, grpc.WithUnaryInterceptor(finalUnaryInterceptor))
	return grpc.Dial(cfg.Endpoint.String(), opts...)
}

// Create an DataCatalogClient that shares a single DataCatalog connection for the process
func InitializeDataCatalogClient(ctx context.Context, cfg ClientConfig) datacatalog.DataCatalogServiceClient {
	once.Do(func() {
		var err error
		dataCatalogConnection, err = NewDataCatalogConnection(ctx, cfg)
		if err != nil {
			logger.Panicf(ctx, "failed to initialize datacatalog connection. Err: %s", err.Error())
		}
	})

	return NewDataCatalogClient(ctx, dataCatalogConnection)
}

func InitializeDataCatalogClientFromConfig(ctx context.Context) (datacatalog.DataCatalogServiceClient, error) {
	cfg := GetConfig(ctx)
	if cfg == nil {
		return nil, fmt.Errorf("retrieved Nil config for [%s] key", configSectionKey)
	}
	return InitializeDataCatalogClient(ctx, *cfg), nil
}

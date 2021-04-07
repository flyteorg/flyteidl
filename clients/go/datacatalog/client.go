package datacatalog

import (
	"context"
	"crypto/x509"
	"fmt"
	"github.com/flyteorg/flyteidl/clients/go/datacatalog/mocks"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/datacatalog"
	"sync"
	"time"

	"github.com/flyteorg/flytestdlib/logger"
	grpcRetry "github.com/grpc-ecosystem/go-grpc-middleware/retry"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials"
)

var (
	once            = sync.Once{}
	dataCatalogConnection *grpc.ClientConn
)

// Create a new Datacatalog client for task execution caching
func NewDataCatalogClient(ctx context.Context, conn *grpc.ClientConn) (datacatalog.DataCatalogClient,
	error) {

	logger.Infof(ctx, "Initialized Admin client")
	return datacatalog.NewDataCatalogClient(conn), nil
}

func NewDataCatalogConnection(ctx context.Context, cfg Config) (*grpc.ClientConn, error) {
	var opts []grpc.DialOption

	grpcOptions := []grpcRetry.CallOption{
		grpcRetry.WithBackoff(grpcRetry.BackoffLinear(100 * time.Millisecond)),
		grpcRetry.WithCodes(codes.DeadlineExceeded, codes.Unavailable, codes.Canceled),
		grpcRetry.WithMax(5),
	}

	if cfg.Insecure {
		logger.Debug(ctx, "Establishing insecure connection to DataCatalog")
		opts = append(opts, grpc.WithInsecure())
	} else {
		logger.Debug(ctx, "Establishing secure connection to DataCatalog")
		pool, err := x509.SystemCertPool()
		if err != nil {
			return nil, err
		}

		creds := credentials.NewClientTLSFromCert(pool, "")
		opts = append(opts, grpc.WithTransportCredentials(creds))
	}

	retryInterceptor := grpc.WithUnaryInterceptor(grpcRetry.UnaryClientInterceptor(grpcOptions...))

	opts = append(opts, retryInterceptor)
	return grpc.Dial(cfg.Endpoint, opts...)
}

// Create an AdminClient with a shared Admin connection for the process
func InitializeDataCatalogClient(ctx context.Context, cfg Config) (datacatalog.DataCatalogClient,
	error)  {
	once.Do(func() {
		var err error
		dataCatalogConnection, err = NewDataCatalogConnection(ctx, cfg)
		if err != nil {
			logger.Panicf(ctx, "failed to initialize Admin connection. Err: %s", err.Error())
		}
	})
	return NewDataCatalogClient(ctx, dataCatalogConnection)
}

func InitializeDataCatalogClientFromConfig(ctx context.Context) (datacatalog.DataCatalogClient,
	error) {
	cfg := GetConfig(ctx)
	if cfg == nil {
		return nil, fmt.Errorf("retrieved Nil config for [%s] key", ConfigSectionKey)
	}
	return InitializeDataCatalogClient(ctx, *cfg)
}

func InitializeMockDataCatalogClient() datacatalog.DataCatalogClient {
	logger.Infof(context.TODO(), "Initialized Mock Admin client")
	return &mocks.DataCatalogClient{}
}

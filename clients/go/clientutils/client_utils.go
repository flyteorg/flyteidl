package clientutils

import (
	"context"

	"github.com/flyteorg/flytestdlib/config"
	grpcMiddleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpcRetry "github.com/grpc-ecosystem/go-grpc-middleware/retry"
	grpcPrometheus "github.com/grpc-ecosystem/go-grpc-prometheus"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

type ClientBaseConfig struct {
	Endpoint              config.URL      `json:"endpoint" pflag:",For admin types, specify where the uri of the service is located."`
	UseInsecureConnection bool            `json:"insecure" pflag:",Use insecure connection."`
	MaxBackoffDelay       config.Duration `json:"maxBackoffDelay" pflag:",Max delay for grpc backoff"`
	PerRetryTimeout       config.Duration `json:"perRetryTimeout" pflag:",gRPC per retry timeout"`
	MaxRetries            int             `json:"maxRetries" pflag:",Max number of gRPC retries"`
}

func GetAdditionalClientConfigOptions(cfg *ClientBaseConfig) []grpc.DialOption {
	opts := make([]grpc.DialOption, 0, 2)
	backoffConfig := grpc.BackoffConfig{
		MaxDelay: cfg.MaxBackoffDelay.Duration,
	}

	opts = append(opts, grpc.WithBackoffConfig(backoffConfig))

	timeoutDialOption := grpcRetry.WithPerRetryTimeout(cfg.PerRetryTimeout.Duration)
	maxRetriesOption := grpcRetry.WithMax(uint(cfg.MaxRetries))

	retryInterceptor := grpcRetry.UnaryClientInterceptor(timeoutDialOption, maxRetriesOption)
	finalUnaryInterceptor := grpcMiddleware.ChainUnaryClient(
		grpcPrometheus.UnaryClientInterceptor,
		retryInterceptor,
	)

	// We only make unary calls in this client, no streaming calls.  We can add a streaming interceptor if admin
	// ever has those endpoints
	opts = append(opts, grpc.WithUnaryInterceptor(finalUnaryInterceptor))

	return opts
}

func NewConnection(_ context.Context, cfg *ClientBaseConfig, opts ...grpc.DialOption) (*grpc.ClientConn, error) {
	if opts == nil {
		// Initialize opts list to the potential number of options we will add. Initialization optimizes memory
		// allocation.
		opts = make([]grpc.DialOption, 0, 5)
	}

	if cfg.UseInsecureConnection {
		opts = append(opts, grpc.WithInsecure())
	} else {
		// TODO: as of Go 1.11.4, this is not supported on Windows. https://github.com/golang/go/issues/16736
		creds := credentials.NewClientTLSFromCert(nil, "")
		opts = append(opts, grpc.WithTransportCredentials(creds))
	}

	opts = append(opts, GetAdditionalClientConfigOptions(cfg)...)

	return grpc.Dial(cfg.Endpoint.String(), opts...)
}

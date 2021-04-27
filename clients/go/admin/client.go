package admin

import (
	"context"
	"fmt"
	"io/ioutil"
	"strings"
	"sync"

	"github.com/flyteorg/flyteidl/clients/go/admin/mocks"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/flyteorg/flytestdlib/logger"
	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_retry "github.com/grpc-ecosystem/go-grpc-middleware/retry"
	grpc_prometheus "github.com/grpc-ecosystem/go-grpc-prometheus"
	"golang.org/x/oauth2/clientcredentials"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

var (
	once            = sync.Once{}
	adminConnection *grpc.ClientConn

	// A new connection just for auth metadata service since it will be used to retrieve auth
	// related information that's needed to initialize the Clientset.
	onceAuthMetadata       = sync.Once{}
	authMetadataConnection *grpc.ClientConn
)

// Clientset contains the clients exposed to communicate with various admin services.
type Clientset struct {
	adminServiceClient        service.AdminServiceClient
	authMetadataServiceClient service.AuthMetadataServiceClient
	identityServiceClient     service.IdentityServiceClient
}

// AdminClient retrieves the AdminServiceClient
func (c Clientset) AdminClient() service.AdminServiceClient {
	return c.adminServiceClient
}

// AuthServiceClient retrieves the AuthServiceClient
func (c Clientset) AuthMetadataClient() service.AuthMetadataServiceClient {
	return c.authMetadataServiceClient
}

func (c Clientset) IdentityClient() service.IdentityServiceClient {
	return c.identityServiceClient
}

func NewAdminClient(ctx context.Context, conn *grpc.ClientConn) service.AdminServiceClient {
	logger.Infof(ctx, "Initialized Admin client")

	return service.NewAdminServiceClient(conn)
}

func GetAdditionalAdminClientConfigOptions(cfg *Config) []grpc.DialOption {
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

// This retrieves a DialOption that contains a source for generating JWTs for authentication with Flyte Admin. If
// the token endpoint is set in the config, that will be used, otherwise it'll attempt to make a metadata call.
func getAuthenticationDialOption(ctx context.Context, cfg *Config, authClient service.AuthMetadataServiceClient) (grpc.DialOption, error) {
	tokenURL := cfg.TokenURL
	if len(tokenURL) == 0 {
		metadata, err := authClient.OAuth2Metadata(ctx, &service.OAuth2MetadataRequest{})
		if err != nil {
			return nil, fmt.Errorf("failed to fetch auth metadata. Error: %v", err)
		}

		tokenURL = metadata.TokenEndpoint
	}

	clientMetadata, err := authClient.FlyteClient(ctx, &service.FlyteClientRequest{})
	if err != nil {
		return nil, fmt.Errorf("failed to fetch client metadata. Error: %v", err)
	}

	secretBytes, err := ioutil.ReadFile(cfg.ClientSecretLocation)
	if err != nil {
		logger.Errorf(ctx, "Error reading secret from location %s", cfg.ClientSecretLocation)
		return nil, err
	}

	secret := strings.TrimSpace(string(secretBytes))

	scopes := cfg.Scopes
	if len(scopes) == 0 {
		scopes = clientMetadata.Scopes
	}

	ccConfig := clientcredentials.Config{
		ClientID:     cfg.ClientID,
		ClientSecret: secret,
		TokenURL:     tokenURL,
		Scopes:       scopes,
	}

	tSource := ccConfig.TokenSource(ctx)
	oauthTokenSource := NewCustomHeaderTokenSource(tSource, cfg.UseInsecureConnection, clientMetadata.AuthorizationMetadataKey)
	return grpc.WithPerRPCCredentials(oauthTokenSource), nil
}

// InitializeAuthMetadataClient creates a new anonymously Auth Metadata Service client.
func InitializeAuthMetadataClient(ctx context.Context, cfg *Config) (client service.AuthMetadataServiceClient, err error) {
	onceAuthMetadata.Do(func() {
		authMetadataConnection, err = NewAdminConnection(ctx, cfg)
	})

	if err != nil {
		return nil, fmt.Errorf("failed to initialize admin connection. Error: %w", err)
	}

	return service.NewAuthMetadataServiceClient(authMetadataConnection), nil
}

func NewServiceAuthDialOptions(ctx context.Context, cfg *Config, authClient service.AuthMetadataServiceClient) ([]grpc.DialOption, error) {
	logger.Infof(ctx, "Instantiating a token source to authenticate against Admin, ID: %s", cfg.ClientID)
	opt, err := getAuthenticationDialOption(ctx, cfg, authClient)
	if err != nil {
		return nil, err
	}

	return []grpc.DialOption{opt}, nil
}

func NewAdminConnection(_ context.Context, cfg *Config, opts ...grpc.DialOption) (*grpc.ClientConn, error) {
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

	opts = append(opts, GetAdditionalAdminClientConfigOptions(cfg)...)

	return grpc.Dial(cfg.Endpoint.String(), opts...)
}

// Create an AdminClient with a shared Admin connection for the process
// Deprecated: Please use InitializeClients instead.
func InitializeAdminClient(ctx context.Context, cfg *Config, opts ...grpc.DialOption) service.AdminServiceClient {
	set, err := InitializeClients(ctx, cfg, opts...)
	if err != nil {
		logger.Panicf(ctx, "Failed to initialize client. Error: %v", err)
		return nil
	}

	return set.AdminClient()
}

// InitializeClients creates an AdminClient and AuthServiceClient with a shared Admin connection for the process.
// Note that if called with different cfg/dialoptions, it will not
func InitializeClients(ctx context.Context, cfg *Config, opts ...grpc.DialOption) (*Clientset, error) {
	once.Do(func() {
		authMetadataClient, err := InitializeAuthMetadataClient(ctx, cfg)
		if err != nil {
			logger.Panicf(ctx, "failed to initialize Auth Metadata Client. Error: %v", err)
		}

		// If auth is enabled, this endpoint will return the required information to use to authenticate, otherwise,
		// start the client without authentication.
		authOpts, err := NewServiceAuthDialOptions(ctx, cfg, authMetadataClient)
		if err != nil {
			logger.Warnf(ctx, "Starting an unauthenticated client because: %v", err)
		}

		adminConnection, err = NewAdminConnection(ctx, cfg, append(opts, authOpts...)...)
		if err != nil {
			logger.Panicf(ctx, "failed to initialize Admin connection. Err: %s", err.Error())
		}
	})

	var cs Clientset
	cs.adminServiceClient = NewAdminClient(ctx, adminConnection)
	cs.authMetadataServiceClient = service.NewAuthMetadataServiceClient(adminConnection)
	cs.identityServiceClient = service.NewIdentityServiceClient(adminConnection)
	return &cs, nil
}

// Deprecated: Please use InitializeClientsFromConfig instead.
func InitializeAdminClientFromConfig(ctx context.Context, opts ...grpc.DialOption) (service.AdminServiceClient, error) {
	clientSet, err := InitializeClientsFromConfig(ctx, opts...)
	if err != nil {
		return nil, err
	}

	return clientSet.AdminClient(), nil
}

func InitializeClientsFromConfig(ctx context.Context, opts ...grpc.DialOption) (*Clientset, error) {
	cfg := GetConfig(ctx)
	if cfg == nil {
		return nil, fmt.Errorf("retrieved Nil config for [%s] key", configSectionKey)
	}

	return InitializeClients(ctx, cfg, opts...)
}

func InitializeMockAdminClient() service.AdminServiceClient {
	logger.Infof(context.TODO(), "Initialized Mock Admin client")
	return &mocks.AdminServiceClient{}
}

func InitializeMockClientset() *Clientset {
	logger.Infof(context.TODO(), "Initialized Mock Clientset")
	return &Clientset{
		adminServiceClient:        &mocks.AdminServiceClient{},
		authMetadataServiceClient: &mocks.AuthMetadataServiceClient{},
		identityServiceClient:     &mocks.IdentityServiceClient{},
	}
}

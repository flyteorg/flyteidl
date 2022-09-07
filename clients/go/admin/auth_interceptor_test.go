package admin

import (
	"context"
	"fmt"
	"io"
	"net"
	"net/http"
	"net/http/httptest"
	"net/url"
	"strings"
	"sync"
	"testing"

	mocks2 "github.com/flyteorg/flyteidl/clients/go/admin/mocks"
	"github.com/stretchr/testify/mock"

	service2 "github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/service"
	"github.com/flyteorg/flytestdlib/config"

	"github.com/stretchr/testify/assert"

	"github.com/flyteorg/flyteidl/clients/go/admin/cache/mocks"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const authServerPort = "50051"

// authMetadataServer is a fake AuthMetadataServer that takes in an AuthMetadataServer implementation (usually one
// initialized through mockery) and starts a local server that uses it to respond to grpc requests.
type authMetadataServer struct {
	s           *httptest.Server
	t           testing.TB
	grpcServer  *grpc.Server
	netListener net.Listener
	impl        service2.AuthMetadataServiceServer
	lck         *sync.RWMutex
}

func (s authMetadataServer) GetOAuth2Metadata(ctx context.Context, in *service2.OAuth2MetadataRequest) (*service2.OAuth2MetadataResponse, error) {
	return s.impl.GetOAuth2Metadata(ctx, in)
}

func (s authMetadataServer) GetPublicClientConfig(ctx context.Context, in *service2.PublicClientAuthConfigRequest) (*service2.PublicClientAuthConfigResponse, error) {
	return s.impl.GetPublicClientConfig(ctx, in)
}

func (s authMetadataServer) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	var issuer string
	switch r.URL.Path {
	case "/.well-known/oauth-authorization-server":
		w.Header().Set("Content-Type", "application/json")
		_, err := io.WriteString(w, strings.ReplaceAll(`{
				"issuer": "https://dev-14186422.okta.com",
				"authorization_endpoint": "https://example.com/auth",
				"token_endpoint": "https://example.com/token",
				"jwks_uri": "https://example.com/keys",
				"id_token_signing_alg_values_supported": ["RS256"]
			}`, "ISSUER", issuer))
		if !assert.NoError(s.t, err) {
			s.t.FailNow()
		}

		return
	}

	http.NotFound(w, r)
}

func (s *authMetadataServer) Start(_ context.Context) error {
	s.lck.Lock()
	defer s.lck.Unlock()

	/***** Set up the server serving channelz service. *****/
	lis, err := net.Listen("tcp", fmt.Sprintf(":%s", authServerPort))
	if err != nil {
		return fmt.Errorf("failed to listen: %w", err)
	}

	grpcS := grpc.NewServer()
	service2.RegisterAuthMetadataServiceServer(grpcS, s)
	go func() {
		err := grpcS.Serve(lis)
		assert.NoError(s.t, err)
	}()

	s.grpcServer = grpcS
	s.netListener = lis

	s.s = httptest.NewServer(s)

	return nil
}

func (s *authMetadataServer) Close() {
	s.lck.RLock()
	defer s.lck.RUnlock()

	s.grpcServer.Stop()
	s.s.Close()
}

func newAuthMetadataServer(t testing.TB, impl service2.AuthMetadataServiceServer) *authMetadataServer {
	return &authMetadataServer{
		t:    t,
		impl: impl,
		lck:  &sync.RWMutex{},
	}
}

func Test_newAuthInterceptor(t *testing.T) {
	t.Run("Other Error", func(t *testing.T) {
		f := NewPerRPCCredentialsFuture()
		interceptor := newAuthInterceptor(&Config{}, &mocks.TokenCache{}, f)
		otherError := func(ctx context.Context, method string, req, reply interface{}, cc *grpc.ClientConn, opts ...grpc.CallOption) error {
			return status.New(codes.Canceled, "").Err()
		}

		assert.Error(t, interceptor(context.Background(), "POST", nil, nil, nil, otherError))
	})

	t.Run("Unauthenticated first time, succeed", func(t *testing.T) {
		m := &mocks2.AuthMetadataServiceServer{}
		m.OnGetOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(&service2.OAuth2MetadataResponse{
			AuthorizationEndpoint: fmt.Sprintf("http://localhost:%s/oauth2/authorize", authServerPort),
			TokenEndpoint:         fmt.Sprintf("http://localhost:%s/oauth2/token", authServerPort),
			JwksUri:               fmt.Sprintf("http://localhost:%s/oauth2/jwks", authServerPort),
		}, nil)
		m.OnGetPublicClientConfigMatch(mock.Anything, mock.Anything).Return(&service2.PublicClientAuthConfigResponse{
			Scopes: []string{"all"},
		}, nil)
		s := newAuthMetadataServer(t, m)
		ctx := context.Background()
		assert.NoError(t, s.Start(ctx))
		defer s.Close()

		u, err := url.Parse("dns:///localhost:50051")
		assert.NoError(t, err)

		f := NewPerRPCCredentialsFuture()
		interceptor := newAuthInterceptor(&Config{
			Endpoint:              config.URL{URL: *u},
			UseInsecureConnection: true,
		}, &mocks.TokenCache{}, f)
		unauthenticated := func(ctx context.Context, method string, req, reply interface{}, cc *grpc.ClientConn, opts ...grpc.CallOption) error {
			return status.New(codes.Unauthenticated, "").Err()
		}

		err = interceptor(ctx, "POST", nil, nil, nil, unauthenticated)
		assert.Error(t, err)
		assert.Truef(t, f.IsInitialized(), "PerRPCCredentialFuture should be initialized")
		assert.False(t, f.Get().RequireTransportSecurity(), "Insecure should be true leading to RequireTLS false")
	})

	t.Run("Other error, doesn't authenticate", func(t *testing.T) {
		m := &mocks2.AuthMetadataServiceServer{}
		m.OnGetOAuth2MetadataMatch(mock.Anything, mock.Anything).Return(&service2.OAuth2MetadataResponse{
			AuthorizationEndpoint: fmt.Sprintf("http://localhost:%s/oauth2/authorize", authServerPort),
			TokenEndpoint:         fmt.Sprintf("http://localhost:%s/oauth2/token", authServerPort),
			JwksUri:               fmt.Sprintf("http://localhost:%s/oauth2/jwks", authServerPort),
		}, nil)
		m.OnGetPublicClientConfigMatch(mock.Anything, mock.Anything).Return(&service2.PublicClientAuthConfigResponse{
			Scopes: []string{"all"},
		}, nil)
		s := newAuthMetadataServer(t, m)
		ctx := context.Background()
		assert.NoError(t, s.Start(ctx))
		defer s.Close()

		u, err := url.Parse("dns:///localhost:50051")
		assert.NoError(t, err)

		f := NewPerRPCCredentialsFuture()
		interceptor := newAuthInterceptor(&Config{
			Endpoint:              config.URL{URL: *u},
			UseInsecureConnection: true,
		}, &mocks.TokenCache{}, f)
		unauthenticated := func(ctx context.Context, method string, req, reply interface{}, cc *grpc.ClientConn, opts ...grpc.CallOption) error {
			return status.New(codes.Aborted, "").Err()
		}

		err = interceptor(ctx, "POST", nil, nil, nil, unauthenticated)
		assert.Error(t, err)
		assert.Falsef(t, f.IsInitialized(), "PerRPCCredentialFuture should not be initialized")
	})
}

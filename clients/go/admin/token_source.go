package admin

import (
	"context"
	"sync/atomic"

	"golang.org/x/oauth2"
)

// CustomHeaderTokenSource class is here because we cannot use the normal "github.com/grpc/grpc-go/credentials/oauth" package to satisfy
// the credentials.PerRPCCredentials interface. This is because we want to be able to support a different 'header'
// when passing the token in the gRPC call's metadata. The default is filled in in the constructor if none is supplied.
type CustomHeaderTokenSource struct {
	tokenProperties atomicTokenProperties
}

const DefaultAuthorizationHeader = "authorization"

// tokenSourceProperties encapsulates properties needed by the TokenSource to set the token on the request.
type tokenSourceProperties struct {
	tokenSource  oauth2.TokenSource
	customHeader string
	insecure     bool
	initialized  bool
}

// atomicTokenProperties provides a convenience on top of tokenSourceProperties to be thread-safe.
type atomicTokenProperties struct {
	atomic.Value
}

func (t *atomicTokenProperties) Store(properties tokenSourceProperties) {
	t.Value.Store(properties)
}

func (t *atomicTokenProperties) Load() tokenSourceProperties {
	val := t.Value.Load()
	if val == nil {
		return tokenSourceProperties{}
	}

	return val.(tokenSourceProperties)
}

// GetRequestMetadata gets the authorization metadata as a map using a TokenSource to generate a token
func (ts *CustomHeaderTokenSource) GetRequestMetadata(ctx context.Context, uri ...string) (map[string]string, error) {
	tp := ts.tokenProperties.Load()
	if !tp.initialized {
		return map[string]string{}, nil
	}

	token, err := tp.tokenSource.Token()
	if err != nil {
		return nil, err
	}

	return map[string]string{
		tp.customHeader: token.Type() + " " + token.AccessToken,
	}, nil
}

// RequireTransportSecurity returns whether this credentials class requires TLS/SSL. OAuth uses Bearer tokens that are
// susceptible to MITM (Man-In-The-Middle) attacks that are mitigated by TLS/SSL. We may return false here to make it
// easier to setup auth. However, in a production environment, TLS for OAuth2 is a requirement.
// see also: https://tools.ietf.org/html/rfc6749#section-3.1
func (ts *CustomHeaderTokenSource) RequireTransportSecurity() bool {
	tp := ts.tokenProperties.Load()
	return tp.initialized && !tp.insecure
}

func NewCustomHeaderTokenSource(source oauth2.TokenSource, insecure bool, customHeader string) *CustomHeaderTokenSource {
	tokenSource := NewDelayedCustomHeaderTokenSource()
	tokenSource.Reset(source, customHeader, insecure)
	return tokenSource
}

func (ts *CustomHeaderTokenSource) Reset(source oauth2.TokenSource, customHeader string, insecure bool) {
	header := DefaultAuthorizationHeader
	if customHeader != "" {
		header = customHeader
	}

	ts.tokenProperties.Store(tokenSourceProperties{
		tokenSource:  source,
		customHeader: header,
		insecure:     insecure,
		initialized:  true,
	})
}

func NewDelayedCustomHeaderTokenSource() *CustomHeaderTokenSource {
	tp := atomicTokenProperties{
		Value: atomic.Value{},
	}

	tokenSource := CustomHeaderTokenSource{
		tokenProperties: tp,
	}

	return &tokenSource
}

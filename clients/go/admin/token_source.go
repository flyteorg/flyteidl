package admin

import "golang.org/x/oauth2"
import "context"

// This class is here because we cannot use the normal "github.com/grpc/grpc-go/credentials/oauth" package to satisfy
// the credentials.PerRPCCredentials interface. This is because we want to be able to support a different 'header'
// when passing the token in the gRPC call's metadata. The default is filled in in the constructor if none is supplied.
type TokenSource struct {
	oauth2.TokenSource
	customHeader string
}

const DefaultAuthorizationHeader = "authorization"

// GetRequestMetadata gets the request metadata as a map from a TokenSource.
func (ts TokenSource) GetRequestMetadata(ctx context.Context, uri ...string) (map[string]string, error) {
	token, err := ts.Token()
	if err != nil {
		return nil, err
	}
	return map[string]string{
		ts.customHeader: token.Type() + " " + token.AccessToken,
	}, nil
}

// RequireTransportSecurity indicates whether the credentials requires transport security.
func (ts TokenSource) RequireTransportSecurity() bool {
	return true
}

func NewTokenSource(source oauth2.TokenSource, customHeader string) TokenSource {
	header := DefaultAuthorizationHeader
	if customHeader != "" {
		header = customHeader
	}
	return TokenSource{
		TokenSource:  source,
		customHeader: header,
	}
}

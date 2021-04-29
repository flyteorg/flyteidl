package pkce

import "golang.org/x/oauth2"

// TokenCache defines the interface needed to cache and retrieve oauth tokens.
type TokenCache interface {
	// SaveToken saves the token securely to cache.
	SaveToken(token *oauth2.Token) error
	// Retrieves the token from the cache.
	GetToken() (*oauth2.Token, error)
}

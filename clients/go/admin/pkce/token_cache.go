package pkce

import "golang.org/x/oauth2"

// TokenCache defines the interface needed to cache and retrieve oauth tokens.
type TokenCache interface {
	SaveToken(token *oauth2.Token) error
	GetToken() (*oauth2.Token, error)
}

package interfaces

import "golang.org/x/oauth2"

//go:generate mockery -all -case=underscore

type TokenCache interface {
	SaveToken(token oauth2.Token) error
	GetToken() (oauth2.Token, error)
}

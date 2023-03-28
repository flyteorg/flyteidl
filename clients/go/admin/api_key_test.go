package admin

import (
	"fmt"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestDecodeAPIKey(t *testing.T) {
	tests := []struct {
		name    string
		apiKey  string
		want    APIKey
		wantErr assert.ErrorAssertionFunc
	}{
		{"happy path", "eyJpZCI6IiIsInNlY3JldCI6IiJ9", APIKey{}, assert.NoError},
		{"happy path", "eyJpZCI6ImFiYyIsInNlY3JldCI6IiJ9", APIKey{ClientID: "abc"}, assert.NoError},
		{"happy path", "eyJpZCI6ImFiYyIsInNlY3JldCI6ImRlZiJ9", APIKey{ClientID: "abc", Secret: "def"}, assert.NoError},
		{"happy path", "eyJpZCI6IiMkQCFAYWJjIiwic2VjcmV0IjoiIChcdTAwMjZAIGRlZiAifQ==", APIKey{ClientID: "#$@!@abc", Secret: " (&@ def "}, assert.NoError},
		{"invalid base64", "blah bloh==", APIKey{}, assert.Error},
		{"invalid json", "aGVsbG8gd29ybGQK", APIKey{}, assert.Error},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := DecodeAPIKey(tt.apiKey)
			if !tt.wantErr(t, err, fmt.Sprintf("DecodeAPIKey(%v)", tt.apiKey)) {
				return
			}
			assert.Equalf(t, tt.want, got, "DecodeAPIKey(%v)", tt.apiKey)
		})
	}
}

func TestAPIKey_Encode(t *testing.T) {
	tests := []struct {
		name    string
		apiKey  APIKey
		want    string
		wantErr assert.ErrorAssertionFunc
	}{
		{"happy path", APIKey{}, "eyJpZCI6IiIsInNlY3JldCI6IiJ9", assert.NoError},
		{"happy path", APIKey{ClientID: "abc"}, "eyJpZCI6ImFiYyIsInNlY3JldCI6IiJ9", assert.NoError},
		{"happy path", APIKey{ClientID: "abc", Secret: "def"}, "eyJpZCI6ImFiYyIsInNlY3JldCI6ImRlZiJ9", assert.NoError},
		{"happy path", APIKey{ClientID: "#$@!@abc", Secret: " (&@ def "}, "eyJpZCI6IiMkQCFAYWJjIiwic2VjcmV0IjoiIChcdTAwMjZAIGRlZiAifQ==", assert.NoError},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			k := APIKey{
				ClientID: tt.apiKey.ClientID,
				Secret:   tt.apiKey.Secret,
			}
			got, err := k.Encode()
			if !tt.wantErr(t, err, fmt.Sprintf("Encode()")) {
				return
			}
			assert.Equalf(t, tt.want, got, "Encode()")
		})
	}
}

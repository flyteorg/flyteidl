package admin

import (
	"encoding/base64"
	"encoding/json"
)

// APIKey is a struct that represents the API key used to authenticate with the Admin service.
type APIKey struct {
	ClientID string `json:"id"`
	Secret   string `json:"secret"`
}

// Encode encodes the API key into a base64 encoded string.
func (k APIKey) Encode() (string, error) {
	raw, err := json.Marshal(k)
	if err != nil {
		return "", err
	}

	return base64.StdEncoding.EncodeToString(raw), nil
}

// DecodeAPIKey decodes a base64 encoded API key into a struct.
func DecodeAPIKey(apiKey string) (APIKey, error) {
	var k APIKey
	raw, err := base64.StdEncoding.DecodeString(apiKey)
	if err != nil {
		return k, err
	}

	err = json.Unmarshal(raw, &k)
	if err != nil {
		return k, err
	}

	return k, nil
}

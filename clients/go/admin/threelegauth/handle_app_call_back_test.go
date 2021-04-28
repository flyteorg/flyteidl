package threelegauth

import (
	"errors"
	"net/http"
	"net/url"
	"strings"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	testhttp "github.com/stretchr/testify/http"
	"golang.org/x/oauth2"
)

var (
	rw         *testhttp.TestResponseWriter
	req        *http.Request
	callBackFn func(rw http.ResponseWriter, req *http.Request)
)

const TestTimeout = 5 * time.Second

func HandleAppCallBackSetup(t *testing.T) {
	// Since we are using channels, its crucial that the tests dont hang , hence adding a timeout channel
	go func() {
		time.Sleep(TestTimeout)
		timeoutChannel <- true
	}()
	var testAuthConfig oauth2.Config
	errorChannel = make(chan error, 1)
	testAuthConfig = oauth2.Config{}
	callBackFn = callbackHandler(testAuthConfig)
	assert.NotNil(t, callBackFn)
	req = &http.Request{
		Method: http.MethodGet,
		URL: &url.URL{
			Scheme:   "http",
			Host:     "dummyHost",
			Path:     "dummyPath",
			RawQuery: "&error=invalid_request",
		},
	}
	rw = &testhttp.TestResponseWriter{}
}

func TestHandleAppCallBackWithErrorInRequest(t *testing.T) {
	HandleAppCallBackSetup(t)
	req = &http.Request{
		Method: http.MethodGet,
		URL: &url.URL{
			Scheme:   "http",
			Host:     "dummyHost",
			Path:     "dummyPath",
			RawQuery: "&error=invalid_request",
		},
	}
	callBackFn(rw, req)
	var errorValue error
	select {
	case errorValue = <-errorChannel:
		assert.NotNil(t, errorValue)
		assert.True(t, strings.Contains(rw.Output, "invalid_request"))
		assert.Equal(t, errors.New("error on callback during authorization due to invalid_request"), errorValue)
	case <-timeoutChannel:
		assert.Fail(t, "timeout occurred")
	case <-tokenChannel:
		assert.Fail(t, "received a token for a failed test")
	}
}

func TestHandleAppCallBackWithCodeNotFound(t *testing.T) {
	HandleAppCallBackSetup(t)
	req = &http.Request{
		Method: http.MethodGet,
		URL: &url.URL{
			Scheme:   "http",
			Host:     "dummyHost",
			Path:     "dummyPath",
			RawQuery: "",
		},
	}
	callBackFn(rw, req)
	var errorValue error
	select {
	case errorValue = <-errorChannel:
		assert.NotNil(t, errorValue)
		assert.True(t, strings.Contains(rw.Output, "Could not find the authorize code"))
		assert.Equal(t, errors.New("could not find the authorize code"), errorValue)
	case <-timeoutChannel:
		assert.Fail(t, "timeout occurred")
	case <-tokenChannel:
		assert.Fail(t, "received a token for a failed test")
	}
}

func TestHandleAppCallBackCsrfAttach(t *testing.T) {
	HandleAppCallBackSetup(t)
	stateString = "realStateString"
	req = &http.Request{
		Method: http.MethodGet,
		URL: &url.URL{
			Scheme:   "http",
			Host:     "dummyHost",
			Path:     "dummyPath",
			RawQuery: "&code=dummyCode&state=imposterString",
		},
	}
	callBackFn(rw, req)
	var errorValue error
	select {
	case errorValue = <-errorChannel:
		assert.NotNil(t, errorValue)
		assert.True(t, strings.Contains(rw.Output, "Sorry we can't serve your request"))
		assert.Equal(t, errors.New("possibly a csrf attack"), errorValue)
	case <-timeoutChannel:
		assert.Fail(t, "timeout occurred")
	case <-tokenChannel:
		assert.Fail(t, "received a token for a failed test")
	}
}

func TestHandleAppCallBackFailedTokenExchange(t *testing.T) {
	HandleAppCallBackSetup(t)
	stateString = "realStateString"
	req = &http.Request{
		Method: http.MethodGet,
		URL: &url.URL{
			Scheme:   "http",
			Host:     "dummyHost",
			Path:     "dummyPath",
			RawQuery: "&code=dummyCode&state=realStateString",
		},
	}
	rw = &testhttp.TestResponseWriter{}
	callBackFn(rw, req)
	var errorValue error
	select {
	case errorValue = <-errorChannel:
		assert.NotNil(t, errorValue)
		assert.True(t, strings.Contains(errorValue.Error(), "error while exchanging auth code due"))
	case <-timeoutChannel:
		assert.Fail(t, "timeout occurred")
	case <-tokenChannel:
		assert.Fail(t, "received a token for a failed test")
	}
}

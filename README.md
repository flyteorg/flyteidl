# flyteidl
Repo that contains all of Flyte's IDLs (Public, eventually)

## Generating Protobufs -> Code

### Mac OS

1. Install Docker 'Edge' for Mac (https://www.docker.com/docker-mac)
2. Start 'docker' and sign in.  You should see a whale icon in your toolbar.
3. cd to the root of your flyteidl repository.
4. Run `./generate_protos.sh`

### When Adding/Changing RPC Endpoints to Admin

When an endpoint is updated or added, the mock client must be regenerated.  The steps to do so are as follows:

1. go get github.com/golang/mock/gomock
2. go install github.com/golang/mock/mockgen
3. mockgen -package events -destination=clients/go/events/mock_adminclient.go github.com/lyft/flyteidl/gen/pb-go/flyteidl/service AdminServiceClient

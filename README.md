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

1. Follow installation instructions here: https://github.com/vektra/mockery#installation
2. Run `mockery -dir ../../../gen/pb-go/flyteidl/service -name AdminServiceClient -output ../admin/mocks`


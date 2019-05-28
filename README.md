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


### Clients generation

Currently, the go and Python clients are generated using swagger codegen from the swagger.json file.

The code is generated using a custom `swagger-codegen-cli` docker image we created.

Two bugs were solved in the image:

1. GO constant redefinition (detailed [here](https://github.com/OpenAPITools/openapi-generator/issues/535))
2. Use version 2.4.0 to solve the pointer struct fields.

To create the image:
1. We re-built `swagger-codegen-cli.jar` with the [fixed go template](https://github.com/grokify/openapi-generator/blob/5a6d4fc1f844181fa113c18c3cf8d2b720f811e8/modules/openapi-generator/src/main/resources/go/model.mustache#L26) using Maven `mvn clean package`.
2. We created a new docker image starting from the [original one](https://hub.docker.com/r/swaggerapi/swagger-codegen-cli)
3. We pushed the new image in a new [public repository](docker.io/lyft/swagger-codegen-cli)

Currently, the default host is `localhost` for both the clients and the version is `1.0.0`.

The GO client can be tested creating a main file, like:
```go
    cfg := flyteadmin.NewConfiguration()
    cfg.BasePath += ":30081" // default localhost.
    client := flyteadmin.NewAPIClient(cfg)
    
    // e.g. This calls the list projects endpoint.
    projects, _, err := client.AdminServiceApi.ListProjects(context.Background())
```
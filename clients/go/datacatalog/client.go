/*
This package provides a basic wrapper for the data catalog client. There are two ways to
create a data catalog client:
1. Add a config section in the config file, like:
```
data-catalog:
	endpoint: localhost:8089
	inscure: true
```
Then in your application you can create a data catalog client like this:
```
client := datacatalog.InitializeDataCatalogClientFromConfig(ctx)
client.GetArtifact(ctx, getArtifactRequest)
```
2. Call InitializeDataCatalogClient directly and fill the config in your application
```
cfg := datacatalog.Config{
    Endpoint: "localhost:8089",
    Insecure: false,
}
client := datacatalog.InitializeDataCatalogClient(ctx, cfg)
client.GetArtifact(ctx, request)
```
*/
package datacatalog

import (
	"context"
	"fmt"
	"sync"

	"github.com/flyteorg/flyteidl/clients/go/clientutils"
	"github.com/flyteorg/flyteidl/clients/go/datacatalog/mocks"
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/datacatalog"

	"github.com/flyteorg/flytestdlib/logger"
	"google.golang.org/grpc"
)

var (
	once                  = sync.Once{}
	dataCatalogConnection *grpc.ClientConn
)

// Create a new Datacatalog client for task execution caching
func NewDataCatalogClient(ctx context.Context, conn *grpc.ClientConn) (datacatalog.DataCatalogClient,
	error) {

	logger.Infof(ctx, "Initialized Admin client")
	return datacatalog.NewDataCatalogClient(conn), nil
}

// Create an AdminClient with a shared Admin connection for the process
func InitializeDataCatalogClient(ctx context.Context, cfg Config) (datacatalog.DataCatalogClient,
	error) {
	once.Do(func() {
		var err error
		dataCatalogConnection, err = clientutils.NewConnection(ctx,
			&clientutils.ClientBaseConfig{
				Endpoint:              cfg.Endpoint,
				UseInsecureConnection: cfg.UseInsecureConnection,
				MaxBackoffDelay:       cfg.MaxBackoffDelay,
				PerRetryTimeout:       cfg.PerRetryTimeout,
				MaxRetries:            cfg.MaxRetries,
			})
		if err != nil {
			logger.Panicf(ctx, "failed to initialize Admin connection. Err: %s", err.Error())
		}
	})
	return NewDataCatalogClient(ctx, dataCatalogConnection)
}

func InitializeDataCatalogClientFromConfig(ctx context.Context) (datacatalog.DataCatalogClient,
	error) {
	cfg := GetConfig(ctx)
	if cfg == nil {
		return nil, fmt.Errorf("retrieved Nil config for [%s] key", ConfigSectionKey)
	}
	return InitializeDataCatalogClient(ctx, *cfg)
}

func InitializeMockDataCatalogClient() datacatalog.DataCatalogClient {
	logger.Infof(context.TODO(), "Initialized Mock Admin client")
	return &mocks.DataCatalogClient{}
}

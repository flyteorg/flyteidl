#!/bin/bash
set -e
set -x
which mockery || (go get github.com/vektra/mockery/cmd/mockery)

mockery -dir=gen/pb-go/flyteidl/service/ -name=AdminServiceClient -output=clients/go/admin/mocks
mockery -dir=gen/pb-go/flyteidl/datacatalog/ -name=ArtifactsClient -output=clients/go/datacatalog/mocks

# workaround https://github.com/golang/go/issues/33008
# here we can not install outside of current module because we need the replacement in
# go.mod
rm go.sum
go mod tidy

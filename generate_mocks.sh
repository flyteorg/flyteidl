#!/bin/bash
set -e
set -x

which mockery || (cd boilerplate/lyft/golang_support_tools && go get github.com/vektra/mockery/cmd/mockery && cd -)

mockery -dir=gen/pb-go/flyteidl/service/ -name=AdminServiceClient -output=clients/go/admin/mocks
mockery -dir=gen/pb-go/flyteidl/datacatalog/ -name=ArtifactsClient -output=clients/go/datacatalog/mocks

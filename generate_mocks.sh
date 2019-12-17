#!/bin/bash
set -e
set -x

# install outside of current module, workaround https://github.com/golang/go/issues/30515
# we need to copy go.mod and go.sum because we have a mockery fork
go_get_mockery () {
  tmp_dir=$(mktemp -d -t mockery-XXXXXXXXXX)
  cp go.mod go.sum "$tmp_dir"
  cd "$tmp_dir"
  go get github.com/vektra/mockery/cmd/mockery
  cd -
}

which mockery || go_get_mockery

mockery -dir=gen/pb-go/flyteidl/service/ -name=AdminServiceClient -output=clients/go/admin/mocks
mockery -dir=gen/pb-go/flyteidl/datacatalog/ -name=ArtifactsClient -output=clients/go/datacatalog/mocks

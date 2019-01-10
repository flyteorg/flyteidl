!#/bin/bash
set -e
set -x
go get github.com/vektra/mockery/.../
mockery -dir=gen/pb-go/flyteidl/service/ -name=AdminServiceClient -output=clients/go/admin/mocks

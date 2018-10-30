#!/bin/bash
export REPOSITORY=flyteidl
include go.mk

.PHONY: generate
generate: # generate protos
	./generate_protos.sh

.PHONY: test
test: # ensures generate_protos script has been run
	DELTA_CHECK=true ./generate_protos.sh

.PHONY: test_unit
test_unit: 
    # we cannot use test_unit from go.mk because generated files contain commented import statements that
    # go tries to intepret. So we need to use go list to get the packages that go understands.
	go test -cover `go list ./...` -race

.PHONY: update_framework
update_framework:
	@script/update.sh

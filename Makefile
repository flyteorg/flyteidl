#!/bin/bash
export REPOSITORY=flyteidl
include boilerplate/lyft/golang_test_targets/Makefile

.PHONY: update_boilerplate
update_boilerplate:
	@boilerplate/update.sh

.PHONY: generate
generate: # generate protos, mocks and pflags
	go mod download
	./generate_protos.sh
	./generate_mocks.sh
	go generate ./...

.PHONY: test
test: # ensures generate_protos script has been run
	make install
	which pflags || (cd boilerplate/lyft/golang_support_tools && go install github.com/lyft/flytestdlib/cli/pflags && cd -)
	git diff
	./generate_mocks.sh
	go generate ./...
	DELTA_CHECK=true ./generate_protos.sh

.PHONY: test_unit
test_unit:
    # we cannot use test_unit from go.mk because generated files contain commented import statements that
    # go tries to intepret. So we need to use go list to get the packages that go understands.
	go test -cover `go list ./...` -race

.PHONY: build_python
build_python:
	@python setup.py sdist

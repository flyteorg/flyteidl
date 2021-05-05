#!/bin/bash

#NOOP 

export REPOSITORY=flyteidl
include boilerplate/lyft/golang_test_targets/Makefile

define PIP_COMPILE
pip-compile $(1) --upgrade --verbose
endef

.PHONY: update_boilerplate
update_boilerplate:
	@boilerplate/update.sh

.PHONY: generate
generate: install # install tools, generate protos, mocks and pflags
	./generate_protos.sh
	./generate_mocks.sh
	go generate ./...

.PHONY: test
test: install # ensures generate_protos script has been run
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

.PHONY: install-piptools
install-piptools:
	pip install -U pip-tools

.PHONY: doc-requirements.txt
doc-requirements.txt: doc-requirements.in install-piptools
	$(call PIP_COMPILE,doc-requirements.in)

PLACEHOLDER := "__version__\ =\ \"develop\""
PLACEHOLDER_NPM := \"version\": \"develop\"

.PHONY: update_pyversion
update_pyversion:
	grep "$(PLACEHOLDER)" "setup.py"
	sed -i "s/$(PLACEHOLDER)/__version__ = \"${VERSION}\"/g" "setup.py"

.PHONY: update_npmversion
update_npmversion:
	grep "$(PLACEHOLDER_NPM)" "package.json"
	sed -i "s/$(PLACEHOLDER_NPM)/\"version\":  \"${VERSION}\"/g" "package.json"

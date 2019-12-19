#!/bin/bash

# Everything in this file needs to be installed outside of current module
# The reason we cannot turn off module entirely and install is that we need the replace statement in go.mod
# because we are installing a mockery fork. Turning it off would result installing the original not the fork.
# However, because the installation of these tools themselves sometimes modifies the go.mod/go.sum files. We don't
# want this either. So instead, we're going to copy those files into a temporary directory, do the installation, and=
# ignore any changes made to the go mod files.
# (See https://github.com/golang/go/issues/30515 for some background context)

set -e

go_install_tool () {
  tmp_dir=$(mktemp -d -t gotooling-XXXXXXXXXX)
  echo "Installing $1 inside ${tmp_dir}"
  cp go.mod go.sum "$tmp_dir"
  pushd "$tmp_dir"
  go get $1
  popd
}

tools=(
  "github.com/vektra/mockery/cmd/mockery"
  "github.com/lyft/flytestdlib/cli/pflags"
  "github.com/golangci/golangci-lint/cmd/golangci-lint"
  "github.com/alvaroloes/enumer"
)

for tool in "${tools[@]}"
do
    go_install_tool $tool
done

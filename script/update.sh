#!/usr/bin/env bash

# WARNING: THIS FILE IS MANAGED IN THE 'FLYTE' REPO AND COPIED TO OTHER REPOSITORIES.
# ONLY EDIT THIS FILE IF:
#   A) THIS IS THE 'FLYTE' REPO
#   B) THIS CHANGE WORKS ACCROSS ALL APPLICABLE FLYTE SERVICES
# TO OPT OUT OF UPDATES, SEE https://github.com/lyft/flyte/blob/master/sync_files/Readme.rst

# This script syncs files that are common accross flyte repos.

set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

rm -rf /tmp/flyte
git clone git@github.com:lyft/flyte.git /tmp/flyte

echo "Updating the update.sh script."
cp /tmp/flyte/sync_files/update.sh ${DIR}/update.sh
echo ""

CONFIG_FILE="${DIR}/update.cfg"
README="https://github.com/lyft/flyte/blob/master/sync_files/Readme.rst"

if [ ! -f "$CONFIG_FILE" ]; then
  echo "$CONFIG_FILE not found."
  echo "This file is required in order to select which features to include." 
  echo "See $README for more details."
  exit 1
fi

if [ -z "$REPOSITORY" ]; then
  echo '$REPOSITORY is required to run this script'
  echo "See $README for more details."
  exit 1
fi

source "$CONFIG_FILE"

if [ -n "$DOCKER_BUILD_TARGETS" ]; then
  # Update the universal build scripts.
  # These apply to any service which needs to build and push docker images.
  echo "***********************************************************************************"
  echo 'DOCKER_BUILD_TARGETS is configured in update.cfg. Running Logic.'
  echo "***********************************************************************************"
  echo "     - syncing script/docker_build.sh"
  cp /tmp/flyte/sync_files/docker_build.sh ${DIR}/docker_build.sh
  echo "     - syncing build.mk"
  cp /tmp/flyte/sync_files/build.mk ${DIR}/../build.mk
  echo ""
fi

if [ -n "$GOLANG_DOCKERFILE" ]; then
  # Dockerfile for Golang Services
  echo "***********************************************************************************"
  echo 'GOLANG_DOCKERFILE is configured in update.cfg. Running Logic.'
  echo "***********************************************************************************"
  echo "     - syncing Dockerfile"
  # replace FLYTEADMIN_SHA with the test SHA
  sed -e "s/{{REPOSITORY}}/${REPOSITORY}/g" /tmp/flyte/sync_files/Dockerfile.GoTemplate > ${DIR}/../Dockerfile
  echo ""
fi

if [ -n "$GOLANG_TEST_TARGETS" ]; then
  # Clone the universal go scripts
  # These apply to any go service.
  echo "***********************************************************************************"
  echo 'GOLANG_TEST_TARGETS is configured in update.cfg. Running Logic.'
  echo "***********************************************************************************"
  echo "     - syncing go.mk"
  cp /tmp/flyte/sync_files/go.mk ${DIR}/../go.mk
  echo "     - syncing script/goimports"
  cp /tmp/flyte/sync_files/goimports ${DIR}/goimports
  echo ""
fi

if [ -n "$GOLANGCI_FILE" ]; then
  # Clone the .golangci file
  # You may want to skip this if you have custom skip_dirs enabled in golangci
  echo "***********************************************************************************"
  echo 'GOLANG_CI_FILE is configured in update.cfg. Running Logic.'
  echo "***********************************************************************************"
  echo "     - syncing .golangci"
  cp /tmp/flyte/sync_files/.golangci.yml ${DIR}/../.golangci.yml
  echo ""
fi

rm -rf /tmp/flyte

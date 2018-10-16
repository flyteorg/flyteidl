#!/usr/bin/env bash

# WARNING: THIS FILE IS MANAGED IN THE 'FLYTE' REPO AND COPIED TO OTHER REPOSITORIES.
# ONLY EDIT THIS FILE IF:
#   A) THIS IS THE 'FLYTE' REPO
#   B) THIS CHANGE WORKS ACCROSS ALL APPLICABLE FLYTE SERVICES
# TO OPT OUT OF UPDATES, SEE https://github.com/lyft/flyte/blob/master/sync_files/Readme.rst

set -e

# If you have a special id_rsa file, you can pass it here.
: ${RSA_FILE=~/.ssh/id_rsa}

if [ -n "$REGISTRY" ]; then
  # Do not push if there are unstaged git changes
  CHANGED=$(git status --porcelain)
  if [ -n "$CHANGED" ]; then
    echo "Please commit git changes before pushing to a registry"
    exit 1
  fi
fi

docker build --target builder -t "$IMAGE_NAME:builder" --build-arg=SSH_PRIVATE_KEY="$(cat ${RSA_FILE})" .
docker build -t "$IMAGE_NAME:latest" --build-arg=SSH_PRIVATE_KEY="$(cat ${RSA_FILE})" .

if [ -n "$REGISTRY" ]; then

  # set default tag to the latest git SHA
  if [ -z "$TAG" ]; then
    TAG=$(git rev-parse HEAD)
  fi

  PRODUCTION_TAG="${REGISTRY}/${IMAGE_NAME}:${TAG}"
  BUILDER_TAG="${REGISTRY}/${IMAGE_NAME}:${TAG}-builder"

  docker tag "${IMAGE_NAME}:latest" "$PRODUCTION_TAG"
  docker tag "${IMAGE_NAME}:builder" "$BUILDER_TAG"

  if [ -n "${DOCKER_REGISTRY_PASSWORD}" ]; then
    docker login --username=${DOCKER_REGISTRY_USERNAME} --password=${DOCKER_REGISTRY_PASSWORD}
  fi

  docker push "$PRODUCTION_TAG"
  docker push "$BUILDER_TAG"

fi

echo ""
echo "------------------------------------"
echo "              SUCCESS"
echo "------------------------------------"
echo ""

echo "$IMAGE_NAME:latest built locally."
echo "$IMAGE_NAME:builder built locally."

if [ -n "$REGISTRY" ]; then
  echo "${PRODUCTION_TAG} pushed to remote."
  echo "${BUILDER_TAG} pushed to remote."
fi
echo ""

# WARNING: THIS FILE IS MANAGED IN THE 'FLYTE' REPO AND COPIED TO OTHER REPOSITORIES.
# ONLY EDIT THIS FILE IF:
#   A) THIS IS THE 'FLYTE' REPO
#   B) THIS CHANGE WORKS ACCROSS ALL APPLICABLE FLYTE SERVICES
# TO OPT OUT OF UPDATES, SEE https://github.com/lyft/flyte/blob/master/sync_files/Readme.rst

# These targets are shared concerns across flyte repos.
# They're separated so we may easily update all our repositories.

.PHONY: docker_build
docker_build:
	IMAGE_NAME=$$REPOSITORY ./script/docker_build.sh

.PHONY: dockerhub_push
dockerhub_push:
	IMAGE_NAME=lyft/$$REPOSITORY REGISTRY=docker.io ./script/docker_build.sh

.PHONY: tensorgym_push
tensorgym_push:
	IMAGE_NAME=$$REPOSITORY REGISTRY=registry.ingress.ktensorgym.us-east-1.k8s.lyft.net ./script/docker_build.sh

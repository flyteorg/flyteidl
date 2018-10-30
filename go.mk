# WARNING: THIS FILE IS MANAGED IN THE 'FLYTE' REPO AND COPIED TO OTHER REPOSITORIES.
# ONLY EDIT THIS FILE IF:
#   A) THIS IS THE 'FLYTE' REPO
#   B) THIS CHANGE WORKS ACCROSS ALL APPLICABLE FLYTE SERVICES
# TO OPT OUT OF UPDATES, SEE https://github.com/lyft/flyte/blob/master/sync_files/Readme.rst

# These targets are shared concerns across go flyte repos.
# They're separated so we can easily update all go repositories.

.PHONY: lint
lint: #lints the package for common code smells
	which golangci-lint || curl -sfL https://install.goreleaser.com/github.com/golangci/golangci-lint.sh | bash -s -- -b $$GOPATH/bin v1.10
	golangci-lint run

# If code is failing goimports linter, this will fix.
# skips 'vendor'
.PHONY: goimports
goimports:
	@script/goimports

.PHONY: install
install: #download dependencies (including test deps) for the package
	which dep || (curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh)
	dep ensure

.PHONY: test_unit
test_unit:
	go test -cover ./... -race

.PHONY: test_benchmark
test_benchmark:
	go test -bench . ./...

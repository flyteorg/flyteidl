#!/bin/bash
set -e

# Grab the tag, since this script should only run on a tagged release.
GIT_SHA=$(git rev-parse HEAD)
# Or true, so that this command will succeed and we can return a nicer error message
RELEASE_SEMVER=$(git describe --tags --exact-match "$GIT_SHA" 2>/dev/null) || true

if [[ -z "${RELEASE_SEMVER}" ]]
then
    echo "${RELEASE_SEMVER}"
    printf "\n\n-------------------\n"
    echo "Error. No git tag detected!  This script should only be run on a tagged release."
    echo "==================="
    exit 1
fi

# Strip the v from v1.0.0
RELEASE_SEMVER_NO_V="${RELEASE_SEMVER//v}"

# Fail this script if the tag doesn't match the Python version
if grep "${RELEASE_SEMVER_NO_V}" setup.py; then
    echo "Using tag ${RELEASE_SEMVER_NO_V}"
else
    echo "The tag ${RELEASE_SEMVER_NO_V} does not match the version in setup.py"
    exit 1
fi

# Setup output folder
TMP_DIR=/tmp/flyte_dist
rm -rf ${TMP_DIR} || true

# Build the tar file source archive and the .whl built distribution.
python3 setup.py sdist bdist_wheel --dist-dir ${TMP_DIR}

python3 -m twine upload "${TMP_DIR}/*"



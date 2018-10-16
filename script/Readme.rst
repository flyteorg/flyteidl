==========
Sync Files
==========

Overview
--------

The Flyte system is composed of multiple isolated components that share considerations such as:

- Which file system to run on

- Where to store Docker images

- How to run CI

- etc...

The team has agreed on conventions for these cross-cutting concerns. As the system evolves, so too will these conventions.  

This directory contains a collection of files that allow automatic updates to the latest conventions. 


Adding automatic updates to a service
-------------------------------------

To enable automatic updates for a service:

1. Add ``export REPOSITORY=<YOUR_REPO_NAME>`` at the top of your ``Makefile`` (create a ``Makefile``, if needed)

2. Add the following to your ``Makefile``

::

  .PHONY: update_framework
  update_framework:
    @script/update.sh

3. Copy the `update.sh <https://github.com/lyft/flyte/blob/master/sync_files/update.sh>`_ script and paste it to ``script/update.sh`` of your repository.

4. Add a file ``script/update.cfg`` and configure it with the options below.

5. execute ``make update_framework`` in the root of your repository.

Configuration
-------------

The full functionality provided here does not apply to all flyte components. For example, the flyteconsole (written in nodejs) does not require any of our golang conventions.

Services opt into desired functionality with the following configurations in ``script/update.cfg`` 


Docker Build and Push
~~~~~~~~~~~~~~~~~~~~~

Provides a ``make docker_build`` target that builds your image locally.

Provides a ``make dockerhub_push`` target that pushes your final image to Dockerhub with the tag ``<IMAGE>:<GIT COMMIT SHA>``, and pushes your builder image to Dockerhub with the tag ``<IMAGE>:<GIT COMMIT SHA>-builder``.

**To Enable:**

Your Dockerfile **must** use docker's `multi-stage builds <https://docs.docker.com/develop/develop-images/multistage-build/>`_ and name the builder stage '`builder <https://github.com/lyft/flytepropeller/blob/720fe9a3c6bab6f92c867bc01f4f3607f89b3289/Dockerfile#L7>`_'.

Add ``DOCKER_BUILD_TARGETS=True`` to your ``script/update.cfg``

Add ``include build.mk`` in your main ``Makefile`` _after_ your REPOSITORY environment variable

::

  	REPOSITORY=<myreponame>
  	include build.mk

(this ensures the extra make targets get included in your main Makefile)

  
Golang Dockerfile
~~~~~~~~~~~~~~~~~

Provides a Dockerfile that produces a small image.

**To Enable:**

Add ``GOLANG_DOCKERFILE=True`` to your ``script/update.cfg``

Create and configure a ``make linux_compile`` target that compiles your go binaries to the ``/artifacts`` directory ::

  .PHONY: linux_compile
  linux_compile:
    RUN GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o /usr/local/bin/<repo_name> github.com/lyft/<repo_name>/cmd/<repo_name>

All binaries compiled to ``/artifacts`` will be available at ``/bin`` in your final image.


Golang Test Targets
~~~~~~~~~~~~~~~~~~~

Provides an 'install' make target that uses 'glide' install golang dependencies.

Provides a 'lint' make target that uses golangci to lint your code.

Provides a 'test_unit' target for unit tests.

Provides a 'test_benchmark' target for benchmark tests.

**To Enable:**

Add ``GOLANG_TEST_TARGETS=True`` to your ``script/update.cfg``

Make sure you're using ``glide`` for dependency management.

Provide a ``.golangci`` configuration (or use to ``GOLANGCI_FILE=True`` config below to get one automatically)


GolangCI File
~~~~~~~~~~~~~

Provides a ``.golangci`` file with the linters we've agreed upon.

**To Enable:**

Add ``GOLANGCI_FILE=True`` to your ``script/update.cfg``


How does it work?
-----------------

The ``flyte`` repo acts as the source of truth for these files. Any updates to these files should happen here.

The ``update.sh`` script contains the syncing logic and should be run periodically in each repo.

The ``update.sh`` script should not be run in the flyte repo itself.

# Flyte IDL

This is one of the core repositories of Flyte and contains the Specification of the Flyte Lanugage using protobuf messages, the Backend API specification in gRPC and Swagger REST. The repo contains generated clients and protocol message structures in multiple languages. Along-with the generated code, the repository also contains the Golang clients for Flyte's backend API's (the services grouped under Flyteadmin).

* [flyte.org](https://flyte.org)
* [Flyte Docs](http://docs.flyte.org)
* [FlyteIDL API reference documentation](https://docs.flyte.org/projects/flyteidl/en/stable/index.html)

## Contributing to FlyteIDL

## Tooling for FlyteIDL

1. Run ``make download_tooling`` to install generator dependencies

```bash
   make download_tooling
```

2. Make sure docker is installed locally.
3. Once installed, run ``make generate`` to generate all the code and mock client for FlyteAdmin Service

```bash
    make generate
```

4. To add new dependencies for documentation generation, modify ``doc_requirements.in`` and then

```bash
   make doc-requirements.txt
```

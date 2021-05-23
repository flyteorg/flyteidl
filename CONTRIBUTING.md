# Contributing to FlyteIDL

## Docs structure
The index.rst files for protos are kept in parallel folder structure under the docs folder.
All the proto definitions are within protos/flyteidl and there corresponding docs are kept in protos/docs

Each module in protos has same named module under the docs also.
eg : protos/flyteidl/core has same named doc structure placing it index and other documentation files in protos/docs/core

## Docs Generation
Relies on protoc plugin pseudomuto/protoc-gen-doc for generating the docs.
Currently pseudomuto/protoc-gen-doc is being used for generating the RST files which are placed in protos/docs and corresponding folder based on the module.
Until this code is checkedin https://github.com/pseudomuto/protoc-gen-doc/pull/440, use the branch to build the protoc-gen-doc executable
Follow the steps to build and use the protoc-gen-doc 
* Clone the git repo protoc-gen-doc 
  ``git clone https://github.com/paweld2/protoc-gen-doc.git``

* Run the following command to make the distributions for various environments. 
    ``make dist``

* Untar the executable from the distribution. eg for darwin
   ``tar -xvf protoc-gen-doc-1.4.1.darwin-amd64.go1.16.3.tar.gz``

* Copy the executable into your GOPATH/bin
   ``cp protoc-gen-doc-1.4.1.darwin-amd64.go1.16.3/protoc-gen-doc $GOPATH/bin/``

---
**NOTE**
Make sure protoc-gen-doc is available on PATH variable for protoc to pick up the plugin
---

The protoc-gen-doc will now be available for protoc
Following is an example on how to generate docs using this plugin locally

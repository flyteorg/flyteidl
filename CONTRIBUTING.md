# Contributing to FlyteIDL

## Docs structure
The index.rst files for protos are kept in parallel folder structure under the docs folder.
All the proto definitions are within protos/flyteidl and there corresponding docs are kept in protos/docs

Each module in protos has same named module under the docs also.
eg : protos/flyteidl/core has same named doc structure placing it index and other documentation files in protos/docs/core

## Docs Generation
Currently pseudomuto/protoc-gen-doc is being used for generating the MD files which are placed in protos/docs and corresponding folder based on the module

protoc-gen-doc generates a single MD file if we include all the protos and doesn't provide a way to split these.
The MD files are then fed as input to sphinx for html doc generation
Inorder to modularize this and not have one single huge html file the MD files are being generated per module(eg :core,admin,plugin)
But due to this process if there references in html/md files which don't exist in the same file then they lead to broken links.

eg: If we generate admin docs through this process , they would generate admin.md file in protos/docs/admin folder but if they reference docs from core 
like for flyteidl.core.ResourceType	then they would try to find it in the same MD/html file which wont be available

Inorder to fix this issue an additional post build step has been added to fix such links.
Check conf.py for sphinx to see build-finished event handler

Note : The plan is to move to generating RST file instead of MD files once this PR is checkedin https://github.com/pseudomuto/protoc-gen-doc/pull/440#issuecomment-845678919
which would simplify the doc generation further


================
Flyte IDL
================
This is one of the core repositories of Flyte and contains the Specification of
the Flyte Language. The Specification is maintained using Google's fantastic
Protocol buffers library. The code and docs are auto-generated.

* `flyte.org <https://flyte.org>`_
* `Flyte Docs <http://flyte.readthedocs.org/>`_
* `FlyteIDL Docs <http://flyteidl.readthedocs.org>`_

Generate Code from protobuf
----------------------------
#. Run ``make download_tooling`` to install generator dependencies

   .. prompt:: bash

   make download_tooling

#. Make sure docker is installed locally.
#. Once installed, run ``make generate`` to generate all the code and mock
   client for FlyteAdmin Service

   .. prompt:: bash

    make generate

#. To add new dependencies for a doc, modify ``doc_requirements.in`` and then

   .. prompt:: bash

   make doc-requirements.txt

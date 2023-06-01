# coding: utf-8

"""
    flyteidl/service/admin.proto

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: version not set
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from flyteadmin.models.artifact_artifact_spec import ArtifactArtifactSpec  # noqa: F401,E501
from flyteadmin.models.core_artifact_id import CoreArtifactID  # noqa: F401,E501


class ArtifactArtifact(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'artifact_id': 'CoreArtifactID',
        'uri': 'str',
        'spec': 'ArtifactArtifactSpec'
    }

    attribute_map = {
        'artifact_id': 'artifact_id',
        'uri': 'uri',
        'spec': 'spec'
    }

    def __init__(self, artifact_id=None, uri=None, spec=None):  # noqa: E501
        """ArtifactArtifact - a model defined in Swagger"""  # noqa: E501

        self._artifact_id = None
        self._uri = None
        self._spec = None
        self.discriminator = None

        if artifact_id is not None:
            self.artifact_id = artifact_id
        if uri is not None:
            self.uri = uri
        if spec is not None:
            self.spec = spec

    @property
    def artifact_id(self):
        """Gets the artifact_id of this ArtifactArtifact.  # noqa: E501


        :return: The artifact_id of this ArtifactArtifact.  # noqa: E501
        :rtype: CoreArtifactID
        """
        return self._artifact_id

    @artifact_id.setter
    def artifact_id(self, artifact_id):
        """Sets the artifact_id of this ArtifactArtifact.


        :param artifact_id: The artifact_id of this ArtifactArtifact.  # noqa: E501
        :type: CoreArtifactID
        """

        self._artifact_id = artifact_id

    @property
    def uri(self):
        """Gets the uri of this ArtifactArtifact.  # noqa: E501

        This has to be unique across the entire installation. For OSS, we will write the flyte url here for now.  # noqa: E501

        :return: The uri of this ArtifactArtifact.  # noqa: E501
        :rtype: str
        """
        return self._uri

    @uri.setter
    def uri(self, uri):
        """Sets the uri of this ArtifactArtifact.

        This has to be unique across the entire installation. For OSS, we will write the flyte url here for now.  # noqa: E501

        :param uri: The uri of this ArtifactArtifact.  # noqa: E501
        :type: str
        """

        self._uri = uri

    @property
    def spec(self):
        """Gets the spec of this ArtifactArtifact.  # noqa: E501


        :return: The spec of this ArtifactArtifact.  # noqa: E501
        :rtype: ArtifactArtifactSpec
        """
        return self._spec

    @spec.setter
    def spec(self, spec):
        """Sets the spec of this ArtifactArtifact.


        :param spec: The spec of this ArtifactArtifact.  # noqa: E501
        :type: ArtifactArtifactSpec
        """

        self._spec = spec

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(ArtifactArtifact, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, ArtifactArtifact):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
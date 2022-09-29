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

from flyteadmin.models.runtime_metadata_runtime_type import RuntimeMetadataRuntimeType  # noqa: F401,E501


class CoreRuntimeMetadata(object):
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
        'type': 'RuntimeMetadataRuntimeType',
        'version': 'str',
        'flavor': 'str'
    }

    attribute_map = {
        'type': 'type',
        'version': 'version',
        'flavor': 'flavor'
    }

    def __init__(self, type=None, version=None, flavor=None):  # noqa: E501
        """CoreRuntimeMetadata - a model defined in Swagger"""  # noqa: E501

        self._type = None
        self._version = None
        self._flavor = None
        self.discriminator = None

        if type is not None:
            self.type = type
        if version is not None:
            self.version = version
        if flavor is not None:
            self.flavor = flavor

    @property
    def type(self):
        """Gets the type of this CoreRuntimeMetadata.  # noqa: E501

        Type of runtime.  # noqa: E501

        :return: The type of this CoreRuntimeMetadata.  # noqa: E501
        :rtype: RuntimeMetadataRuntimeType
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this CoreRuntimeMetadata.

        Type of runtime.  # noqa: E501

        :param type: The type of this CoreRuntimeMetadata.  # noqa: E501
        :type: RuntimeMetadataRuntimeType
        """

        self._type = type

    @property
    def version(self):
        """Gets the version of this CoreRuntimeMetadata.  # noqa: E501

        Version of the runtime. All versions should be backward compatible. However, certain cases call for version checks to ensure tighter validation or setting expectations.  # noqa: E501

        :return: The version of this CoreRuntimeMetadata.  # noqa: E501
        :rtype: str
        """
        return self._version

    @version.setter
    def version(self, version):
        """Sets the version of this CoreRuntimeMetadata.

        Version of the runtime. All versions should be backward compatible. However, certain cases call for version checks to ensure tighter validation or setting expectations.  # noqa: E501

        :param version: The version of this CoreRuntimeMetadata.  # noqa: E501
        :type: str
        """

        self._version = version

    @property
    def flavor(self):
        """Gets the flavor of this CoreRuntimeMetadata.  # noqa: E501

        +optional It can be used to provide extra information about the runtime (e.g. python, golang... etc.).  # noqa: E501

        :return: The flavor of this CoreRuntimeMetadata.  # noqa: E501
        :rtype: str
        """
        return self._flavor

    @flavor.setter
    def flavor(self, flavor):
        """Sets the flavor of this CoreRuntimeMetadata.

        +optional It can be used to provide extra information about the runtime (e.g. python, golang... etc.).  # noqa: E501

        :param flavor: The flavor of this CoreRuntimeMetadata.  # noqa: E501
        :type: str
        """

        self._flavor = flavor

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
        if issubclass(CoreRuntimeMetadata, dict):
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
        if not isinstance(other, CoreRuntimeMetadata):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other

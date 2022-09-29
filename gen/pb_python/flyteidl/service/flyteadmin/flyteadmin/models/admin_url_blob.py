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


class AdminUrlBlob(object):
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
        'url': 'str',
        'bytes': 'str'
    }

    attribute_map = {
        'url': 'url',
        'bytes': 'bytes'
    }

    def __init__(self, url=None, bytes=None):  # noqa: E501
        """AdminUrlBlob - a model defined in Swagger"""  # noqa: E501

        self._url = None
        self._bytes = None
        self.discriminator = None

        if url is not None:
            self.url = url
        if bytes is not None:
            self.bytes = bytes

    @property
    def url(self):
        """Gets the url of this AdminUrlBlob.  # noqa: E501

        Actual url value.  # noqa: E501

        :return: The url of this AdminUrlBlob.  # noqa: E501
        :rtype: str
        """
        return self._url

    @url.setter
    def url(self, url):
        """Sets the url of this AdminUrlBlob.

        Actual url value.  # noqa: E501

        :param url: The url of this AdminUrlBlob.  # noqa: E501
        :type: str
        """

        self._url = url

    @property
    def bytes(self):
        """Gets the bytes of this AdminUrlBlob.  # noqa: E501

        Represents the size of the file accessible at the above url.  # noqa: E501

        :return: The bytes of this AdminUrlBlob.  # noqa: E501
        :rtype: str
        """
        return self._bytes

    @bytes.setter
    def bytes(self, bytes):
        """Sets the bytes of this AdminUrlBlob.

        Represents the size of the file accessible at the above url.  # noqa: E501

        :param bytes: The bytes of this AdminUrlBlob.  # noqa: E501
        :type: str
        """

        self._bytes = bytes

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
        if issubclass(AdminUrlBlob, dict):
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
        if not isinstance(other, AdminUrlBlob):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other

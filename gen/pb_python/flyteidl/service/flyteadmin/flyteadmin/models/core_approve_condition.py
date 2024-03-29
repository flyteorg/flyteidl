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


class CoreApproveCondition(object):
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
        'signal_id': 'str'
    }

    attribute_map = {
        'signal_id': 'signal_id'
    }

    def __init__(self, signal_id=None):  # noqa: E501
        """CoreApproveCondition - a model defined in Swagger"""  # noqa: E501

        self._signal_id = None
        self.discriminator = None

        if signal_id is not None:
            self.signal_id = signal_id

    @property
    def signal_id(self):
        """Gets the signal_id of this CoreApproveCondition.  # noqa: E501

        A unique identifier for the requested boolean signal.  # noqa: E501

        :return: The signal_id of this CoreApproveCondition.  # noqa: E501
        :rtype: str
        """
        return self._signal_id

    @signal_id.setter
    def signal_id(self, signal_id):
        """Sets the signal_id of this CoreApproveCondition.

        A unique identifier for the requested boolean signal.  # noqa: E501

        :param signal_id: The signal_id of this CoreApproveCondition.  # noqa: E501
        :type: str
        """

        self._signal_id = signal_id

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
        if issubclass(CoreApproveCondition, dict):
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
        if not isinstance(other, CoreApproveCondition):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other

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

from flyteadmin.models.admin_description_entity import AdminDescriptionEntity  # noqa: F401,E501


class AdminDescriptionList(object):
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
        'description_entities': 'list[AdminDescriptionEntity]',
        'token': 'str'
    }

    attribute_map = {
        'description_entities': 'descriptionEntities',
        'token': 'token'
    }

    def __init__(self, description_entities=None, token=None):  # noqa: E501
        """AdminDescriptionList - a model defined in Swagger"""  # noqa: E501

        self._description_entities = None
        self._token = None
        self.discriminator = None

        if description_entities is not None:
            self.description_entities = description_entities
        if token is not None:
            self.token = token

    @property
    def description_entities(self):
        """Gets the description_entities of this AdminDescriptionList.  # noqa: E501

        A list of DescriptionEntities returned based on the request.  # noqa: E501

        :return: The description_entities of this AdminDescriptionList.  # noqa: E501
        :rtype: list[AdminDescriptionEntity]
        """
        return self._description_entities

    @description_entities.setter
    def description_entities(self, description_entities):
        """Sets the description_entities of this AdminDescriptionList.

        A list of DescriptionEntities returned based on the request.  # noqa: E501

        :param description_entities: The description_entities of this AdminDescriptionList.  # noqa: E501
        :type: list[AdminDescriptionEntity]
        """

        self._description_entities = description_entities

    @property
    def token(self):
        """Gets the token of this AdminDescriptionList.  # noqa: E501

        In the case of multiple pages of results, the server-provided token can be used to fetch the next page in a query. If there are no more results, this value will be empty.  # noqa: E501

        :return: The token of this AdminDescriptionList.  # noqa: E501
        :rtype: str
        """
        return self._token

    @token.setter
    def token(self, token):
        """Sets the token of this AdminDescriptionList.

        In the case of multiple pages of results, the server-provided token can be used to fetch the next page in a query. If there are no more results, this value will be empty.  # noqa: E501

        :param token: The token of this AdminDescriptionList.  # noqa: E501
        :type: str
        """

        self._token = token

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
        if issubclass(AdminDescriptionList, dict):
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
        if not isinstance(other, AdminDescriptionList):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other

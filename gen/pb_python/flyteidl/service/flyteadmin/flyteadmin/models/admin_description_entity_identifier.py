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

from flyteadmin.models.core_resource_type import CoreResourceType  # noqa: F401,E501


class AdminDescriptionEntityIdentifier(object):
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
        'resource_type': 'CoreResourceType',
        'project': 'str',
        'domain': 'str',
        'name': 'str'
    }

    attribute_map = {
        'resource_type': 'resource_type',
        'project': 'project',
        'domain': 'domain',
        'name': 'name'
    }

    def __init__(self, resource_type=None, project=None, domain=None, name=None):  # noqa: E501
        """AdminDescriptionEntityIdentifier - a model defined in Swagger"""  # noqa: E501

        self._resource_type = None
        self._project = None
        self._domain = None
        self._name = None
        self.discriminator = None

        if resource_type is not None:
            self.resource_type = resource_type
        if project is not None:
            self.project = project
        if domain is not None:
            self.domain = domain
        if name is not None:
            self.name = name

    @property
    def resource_type(self):
        """Gets the resource_type of this AdminDescriptionEntityIdentifier.  # noqa: E501

        Identifies the specific type of resource that this identifier corresponds to.  # noqa: E501

        :return: The resource_type of this AdminDescriptionEntityIdentifier.  # noqa: E501
        :rtype: CoreResourceType
        """
        return self._resource_type

    @resource_type.setter
    def resource_type(self, resource_type):
        """Sets the resource_type of this AdminDescriptionEntityIdentifier.

        Identifies the specific type of resource that this identifier corresponds to.  # noqa: E501

        :param resource_type: The resource_type of this AdminDescriptionEntityIdentifier.  # noqa: E501
        :type: CoreResourceType
        """

        self._resource_type = resource_type

    @property
    def project(self):
        """Gets the project of this AdminDescriptionEntityIdentifier.  # noqa: E501

        Name of the project the resource belongs to.  # noqa: E501

        :return: The project of this AdminDescriptionEntityIdentifier.  # noqa: E501
        :rtype: str
        """
        return self._project

    @project.setter
    def project(self, project):
        """Sets the project of this AdminDescriptionEntityIdentifier.

        Name of the project the resource belongs to.  # noqa: E501

        :param project: The project of this AdminDescriptionEntityIdentifier.  # noqa: E501
        :type: str
        """

        self._project = project

    @property
    def domain(self):
        """Gets the domain of this AdminDescriptionEntityIdentifier.  # noqa: E501

        Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project.  # noqa: E501

        :return: The domain of this AdminDescriptionEntityIdentifier.  # noqa: E501
        :rtype: str
        """
        return self._domain

    @domain.setter
    def domain(self, domain):
        """Sets the domain of this AdminDescriptionEntityIdentifier.

        Name of the domain the resource belongs to. A domain can be considered as a subset within a specific project.  # noqa: E501

        :param domain: The domain of this AdminDescriptionEntityIdentifier.  # noqa: E501
        :type: str
        """

        self._domain = domain

    @property
    def name(self):
        """Gets the name of this AdminDescriptionEntityIdentifier.  # noqa: E501

        User or system provided value for the resource.  # noqa: E501

        :return: The name of this AdminDescriptionEntityIdentifier.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this AdminDescriptionEntityIdentifier.

        User or system provided value for the resource.  # noqa: E501

        :param name: The name of this AdminDescriptionEntityIdentifier.  # noqa: E501
        :type: str
        """

        self._name = name

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
        if issubclass(AdminDescriptionEntityIdentifier, dict):
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
        if not isinstance(other, AdminDescriptionEntityIdentifier):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other

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

from flyteadmin.models.admin_execution_state import AdminExecutionState  # noqa: F401,E501
from flyteadmin.models.core_workflow_execution_identifier import CoreWorkflowExecutionIdentifier  # noqa: F401,E501


class AdminExecutionUpdateRequest(object):
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
        'id': 'CoreWorkflowExecutionIdentifier',
        'state': 'AdminExecutionState',
        'tags': 'list[str]'
    }

    attribute_map = {
        'id': 'id',
        'state': 'state',
        'tags': 'tags'
    }

    def __init__(self, id=None, state=None, tags=None):  # noqa: E501
        """AdminExecutionUpdateRequest - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._state = None
        self._tags = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if state is not None:
            self.state = state
        if tags is not None:
            self.tags = tags

    @property
    def id(self):
        """Gets the id of this AdminExecutionUpdateRequest.  # noqa: E501


        :return: The id of this AdminExecutionUpdateRequest.  # noqa: E501
        :rtype: CoreWorkflowExecutionIdentifier
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this AdminExecutionUpdateRequest.


        :param id: The id of this AdminExecutionUpdateRequest.  # noqa: E501
        :type: CoreWorkflowExecutionIdentifier
        """

        self._id = id

    @property
    def state(self):
        """Gets the state of this AdminExecutionUpdateRequest.  # noqa: E501


        :return: The state of this AdminExecutionUpdateRequest.  # noqa: E501
        :rtype: AdminExecutionState
        """
        return self._state

    @state.setter
    def state(self, state):
        """Sets the state of this AdminExecutionUpdateRequest.


        :param state: The state of this AdminExecutionUpdateRequest.  # noqa: E501
        :type: AdminExecutionState
        """

        self._state = state

    @property
    def tags(self):
        """Gets the tags of this AdminExecutionUpdateRequest.  # noqa: E501


        :return: The tags of this AdminExecutionUpdateRequest.  # noqa: E501
        :rtype: list[str]
        """
        return self._tags

    @tags.setter
    def tags(self, tags):
        """Sets the tags of this AdminExecutionUpdateRequest.


        :param tags: The tags of this AdminExecutionUpdateRequest.  # noqa: E501
        :type: list[str]
        """

        self._tags = tags

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
        if issubclass(AdminExecutionUpdateRequest, dict):
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
        if not isinstance(other, AdminExecutionUpdateRequest):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other

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

from flyteadmin.models.admin_span import AdminSpan  # noqa: F401,E501
from flyteadmin.models.core_node_execution_identifier import CoreNodeExecutionIdentifier  # noqa: F401,E501
from flyteadmin.models.core_task_execution_identifier import CoreTaskExecutionIdentifier  # noqa: F401,E501
from flyteadmin.models.core_workflow_execution_identifier import CoreWorkflowExecutionIdentifier  # noqa: F401,E501


class AdminReferenceSpanInfo(object):
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
        'workflow_id': 'CoreWorkflowExecutionIdentifier',
        'node_id': 'CoreNodeExecutionIdentifier',
        'task_id': 'CoreTaskExecutionIdentifier',
        'spans': 'list[AdminSpan]'
    }

    attribute_map = {
        'workflow_id': 'workflow_id',
        'node_id': 'node_id',
        'task_id': 'task_id',
        'spans': 'spans'
    }

    def __init__(self, workflow_id=None, node_id=None, task_id=None, spans=None):  # noqa: E501
        """AdminReferenceSpanInfo - a model defined in Swagger"""  # noqa: E501

        self._workflow_id = None
        self._node_id = None
        self._task_id = None
        self._spans = None
        self.discriminator = None

        if workflow_id is not None:
            self.workflow_id = workflow_id
        if node_id is not None:
            self.node_id = node_id
        if task_id is not None:
            self.task_id = task_id
        if spans is not None:
            self.spans = spans

    @property
    def workflow_id(self):
        """Gets the workflow_id of this AdminReferenceSpanInfo.  # noqa: E501

        workflow_id is the id of the workflow execution this Span represents.  # noqa: E501

        :return: The workflow_id of this AdminReferenceSpanInfo.  # noqa: E501
        :rtype: CoreWorkflowExecutionIdentifier
        """
        return self._workflow_id

    @workflow_id.setter
    def workflow_id(self, workflow_id):
        """Sets the workflow_id of this AdminReferenceSpanInfo.

        workflow_id is the id of the workflow execution this Span represents.  # noqa: E501

        :param workflow_id: The workflow_id of this AdminReferenceSpanInfo.  # noqa: E501
        :type: CoreWorkflowExecutionIdentifier
        """

        self._workflow_id = workflow_id

    @property
    def node_id(self):
        """Gets the node_id of this AdminReferenceSpanInfo.  # noqa: E501

        node_id is the id of the node execution this Span represents.  # noqa: E501

        :return: The node_id of this AdminReferenceSpanInfo.  # noqa: E501
        :rtype: CoreNodeExecutionIdentifier
        """
        return self._node_id

    @node_id.setter
    def node_id(self, node_id):
        """Sets the node_id of this AdminReferenceSpanInfo.

        node_id is the id of the node execution this Span represents.  # noqa: E501

        :param node_id: The node_id of this AdminReferenceSpanInfo.  # noqa: E501
        :type: CoreNodeExecutionIdentifier
        """

        self._node_id = node_id

    @property
    def task_id(self):
        """Gets the task_id of this AdminReferenceSpanInfo.  # noqa: E501

        task_id is the id of the task execution this Span represents.  # noqa: E501

        :return: The task_id of this AdminReferenceSpanInfo.  # noqa: E501
        :rtype: CoreTaskExecutionIdentifier
        """
        return self._task_id

    @task_id.setter
    def task_id(self, task_id):
        """Sets the task_id of this AdminReferenceSpanInfo.

        task_id is the id of the task execution this Span represents.  # noqa: E501

        :param task_id: The task_id of this AdminReferenceSpanInfo.  # noqa: E501
        :type: CoreTaskExecutionIdentifier
        """

        self._task_id = task_id

    @property
    def spans(self):
        """Gets the spans of this AdminReferenceSpanInfo.  # noqa: E501

        spans defines a collection of Spans that breakdown this execution.  # noqa: E501

        :return: The spans of this AdminReferenceSpanInfo.  # noqa: E501
        :rtype: list[AdminSpan]
        """
        return self._spans

    @spans.setter
    def spans(self, spans):
        """Sets the spans of this AdminReferenceSpanInfo.

        spans defines a collection of Spans that breakdown this execution.  # noqa: E501

        :param spans: The spans of this AdminReferenceSpanInfo.  # noqa: E501
        :type: list[AdminSpan]
        """

        self._spans = spans

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
        if issubclass(AdminReferenceSpanInfo, dict):
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
        if not isinstance(other, AdminReferenceSpanInfo):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
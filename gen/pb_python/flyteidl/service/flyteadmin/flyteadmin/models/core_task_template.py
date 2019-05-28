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

from flyteadmin.models.core_container import CoreContainer  # noqa: F401,E501
from flyteadmin.models.core_identifier import CoreIdentifier  # noqa: F401,E501
from flyteadmin.models.core_task_metadata import CoreTaskMetadata  # noqa: F401,E501
from flyteadmin.models.core_typed_interface import CoreTypedInterface  # noqa: F401,E501
from flyteadmin.models.protobuf_struct import ProtobufStruct  # noqa: F401,E501


class CoreTaskTemplate(object):
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
        'id': 'CoreIdentifier',
        'type': 'str',
        'metadata': 'CoreTaskMetadata',
        'interface': 'CoreTypedInterface',
        'custom': 'ProtobufStruct',
        'container': 'CoreContainer'
    }

    attribute_map = {
        'id': 'id',
        'type': 'type',
        'metadata': 'metadata',
        'interface': 'interface',
        'custom': 'custom',
        'container': 'container'
    }

    def __init__(self, id=None, type=None, metadata=None, interface=None, custom=None, container=None):  # noqa: E501
        """CoreTaskTemplate - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._type = None
        self._metadata = None
        self._interface = None
        self._custom = None
        self._container = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if type is not None:
            self.type = type
        if metadata is not None:
            self.metadata = metadata
        if interface is not None:
            self.interface = interface
        if custom is not None:
            self.custom = custom
        if container is not None:
            self.container = container

    @property
    def id(self):
        """Gets the id of this CoreTaskTemplate.  # noqa: E501

        Auto generated taskId by the system. Task Id uniquely identifies this task globally.  # noqa: E501

        :return: The id of this CoreTaskTemplate.  # noqa: E501
        :rtype: CoreIdentifier
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this CoreTaskTemplate.

        Auto generated taskId by the system. Task Id uniquely identifies this task globally.  # noqa: E501

        :param id: The id of this CoreTaskTemplate.  # noqa: E501
        :type: CoreIdentifier
        """

        self._id = id

    @property
    def type(self):
        """Gets the type of this CoreTaskTemplate.  # noqa: E501

        A predefined yet extensible Task type identifier. This can be used to customize any of the components. If no extensions are provided in the system, Flyte will resolve the this task to its TaskCategory and default the implementation registered for the TaskCategory.  # noqa: E501

        :return: The type of this CoreTaskTemplate.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this CoreTaskTemplate.

        A predefined yet extensible Task type identifier. This can be used to customize any of the components. If no extensions are provided in the system, Flyte will resolve the this task to its TaskCategory and default the implementation registered for the TaskCategory.  # noqa: E501

        :param type: The type of this CoreTaskTemplate.  # noqa: E501
        :type: str
        """

        self._type = type

    @property
    def metadata(self):
        """Gets the metadata of this CoreTaskTemplate.  # noqa: E501

        Extra metadata about the task.  # noqa: E501

        :return: The metadata of this CoreTaskTemplate.  # noqa: E501
        :rtype: CoreTaskMetadata
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this CoreTaskTemplate.

        Extra metadata about the task.  # noqa: E501

        :param metadata: The metadata of this CoreTaskTemplate.  # noqa: E501
        :type: CoreTaskMetadata
        """

        self._metadata = metadata

    @property
    def interface(self):
        """Gets the interface of this CoreTaskTemplate.  # noqa: E501

        A strongly typed interface for the task. This enables others to use this task within a workflow and gauarantees compile-time validation of the workflow to avoid costly runtime failures.  # noqa: E501

        :return: The interface of this CoreTaskTemplate.  # noqa: E501
        :rtype: CoreTypedInterface
        """
        return self._interface

    @interface.setter
    def interface(self, interface):
        """Sets the interface of this CoreTaskTemplate.

        A strongly typed interface for the task. This enables others to use this task within a workflow and gauarantees compile-time validation of the workflow to avoid costly runtime failures.  # noqa: E501

        :param interface: The interface of this CoreTaskTemplate.  # noqa: E501
        :type: CoreTypedInterface
        """

        self._interface = interface

    @property
    def custom(self):
        """Gets the custom of this CoreTaskTemplate.  # noqa: E501

        Custom data about the task. This is extensible to allow various plugins in the system.  # noqa: E501

        :return: The custom of this CoreTaskTemplate.  # noqa: E501
        :rtype: ProtobufStruct
        """
        return self._custom

    @custom.setter
    def custom(self, custom):
        """Sets the custom of this CoreTaskTemplate.

        Custom data about the task. This is extensible to allow various plugins in the system.  # noqa: E501

        :param custom: The custom of this CoreTaskTemplate.  # noqa: E501
        :type: ProtobufStruct
        """

        self._custom = custom

    @property
    def container(self):
        """Gets the container of this CoreTaskTemplate.  # noqa: E501


        :return: The container of this CoreTaskTemplate.  # noqa: E501
        :rtype: CoreContainer
        """
        return self._container

    @container.setter
    def container(self, container):
        """Sets the container of this CoreTaskTemplate.


        :param container: The container of this CoreTaskTemplate.  # noqa: E501
        :type: CoreContainer
        """

        self._container = container

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
        if issubclass(CoreTaskTemplate, dict):
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
        if not isinstance(other, CoreTaskTemplate):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other

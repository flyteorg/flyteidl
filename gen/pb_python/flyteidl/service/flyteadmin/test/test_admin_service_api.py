# coding: utf-8

"""
    flyteidl/service/admin.proto

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: version not set
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import flyteadmin
from flyteadmin.api.admin_service_api import AdminServiceApi  # noqa: E501
from flyteadmin.rest import ApiException


class TestAdminServiceApi(unittest.TestCase):
    """AdminServiceApi unit test stubs"""

    def setUp(self):
        self.api = flyteadmin.api.admin_service_api.AdminServiceApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_execution(self):
        """Test case for create_execution

        Triggers the creation of a :ref:`ref_flyteidl.admin.Execution`  # noqa: E501
        """
        pass

    def test_create_launch_plan(self):
        """Test case for create_launch_plan

        Create and upload a :ref:`ref_flyteidl.admin.LaunchPlan` definition  # noqa: E501
        """
        pass

    def test_create_node_event(self):
        """Test case for create_node_event

        Indicates a :ref:`ref_flyteidl.event.NodeExecutionEvent` has occurred.  # noqa: E501
        """
        pass

    def test_create_task(self):
        """Test case for create_task

        Create and upload a :ref:`ref_flyteidl.admin.Task` definition  # noqa: E501
        """
        pass

    def test_create_task_event(self):
        """Test case for create_task_event

        Indicates a :ref:`ref_flyteidl.event.TaskExecutionEvent` has occurred.  # noqa: E501
        """
        pass

    def test_create_workflow(self):
        """Test case for create_workflow

        Create and upload a :ref:`ref_flyteidl.admin.Workflow` definition  # noqa: E501
        """
        pass

    def test_create_workflow_event(self):
        """Test case for create_workflow_event

        Indicates a :ref:`ref_flyteidl.event.WorkflowExecutionEvent` has occurred.  # noqa: E501
        """
        pass

    def test_delete_project_domain_attributes(self):
        """Test case for delete_project_domain_attributes

        Deletes custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.  # noqa: E501
        """
        pass

    def test_delete_workflow_attributes(self):
        """Test case for delete_workflow_attributes

        Deletes custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project, domain and workflow.  # noqa: E501
        """
        pass

    def test_get_active_launch_plan(self):
        """Test case for get_active_launch_plan

        Fetch the active version of a :ref:`ref_flyteidl.admin.LaunchPlan`.  # noqa: E501
        """
        pass

    def test_get_execution(self):
        """Test case for get_execution

        Fetches a :ref:`ref_flyteidl.admin.Execution`.  # noqa: E501
        """
        pass

    def test_get_execution_data(self):
        """Test case for get_execution_data

        Fetches input and output data for a :ref:`ref_flyteidl.admin.Execution`.  # noqa: E501
        """
        pass

    def test_get_launch_plan(self):
        """Test case for get_launch_plan

        Fetch a :ref:`ref_flyteidl.admin.LaunchPlan` definition.  # noqa: E501
        """
        pass

    def test_get_named_entity(self):
        """Test case for get_named_entity

        Returns a :ref:`ref_flyteidl.admin.NamedEntity` object.  # noqa: E501
        """
        pass

    def test_get_node_execution(self):
        """Test case for get_node_execution

        Fetches a :ref:`ref_flyteidl.admin.NodeExecution`.  # noqa: E501
        """
        pass

    def test_get_node_execution_data(self):
        """Test case for get_node_execution_data

        Fetches input and output data for a :ref:`ref_flyteidl.admin.NodeExecution`.  # noqa: E501
        """
        pass

    def test_get_project_domain_attributes(self):
        """Test case for get_project_domain_attributes

        Fetches custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.  # noqa: E501
        """
        pass

    def test_get_task(self):
        """Test case for get_task

        Fetch a :ref:`ref_flyteidl.admin.Task` definition.  # noqa: E501
        """
        pass

    def test_get_task_execution(self):
        """Test case for get_task_execution

        Fetches a :ref:`ref_flyteidl.admin.TaskExecution`.  # noqa: E501
        """
        pass

    def test_get_task_execution_data(self):
        """Test case for get_task_execution_data

        Fetches input and output data for a :ref:`ref_flyteidl.admin.TaskExecution`.  # noqa: E501
        """
        pass

    def test_get_version(self):
        """Test case for get_version

        """
        pass

    def test_get_workflow(self):
        """Test case for get_workflow

        Fetch a :ref:`ref_flyteidl.admin.Workflow` definition.  # noqa: E501
        """
        pass

    def test_get_workflow_attributes(self):
        """Test case for get_workflow_attributes

        Fetches custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project, domain and workflow.  # noqa: E501
        """
        pass

    def test_list_active_launch_plans(self):
        """Test case for list_active_launch_plans

        List active versions of :ref:`ref_flyteidl.admin.LaunchPlan`.  # noqa: E501
        """
        pass

    def test_list_executions(self):
        """Test case for list_executions

        Fetch a list of :ref:`ref_flyteidl.admin.Execution`.  # noqa: E501
        """
        pass

    def test_list_launch_plan_ids(self):
        """Test case for list_launch_plan_ids

        Fetch a list of :ref:`ref_flyteidl.admin.NamedEntityIdentifier` of launch plan objects.  # noqa: E501
        """
        pass

    def test_list_launch_plans(self):
        """Test case for list_launch_plans

        Fetch a list of :ref:`ref_flyteidl.admin.LaunchPlan` definitions.  # noqa: E501
        """
        pass

    def test_list_launch_plans2(self):
        """Test case for list_launch_plans2

        Fetch a list of :ref:`ref_flyteidl.admin.LaunchPlan` definitions.  # noqa: E501
        """
        pass

    def test_list_matchable_attributes(self):
        """Test case for list_matchable_attributes

        Lists custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a specific resource type.  # noqa: E501
        """
        pass

    def test_list_named_entities(self):
        """Test case for list_named_entities

        Returns a list of :ref:`ref_flyteidl.admin.NamedEntity` objects.  # noqa: E501
        """
        pass

    def test_list_node_executions(self):
        """Test case for list_node_executions

        Fetch a list of :ref:`ref_flyteidl.admin.NodeExecution`.  # noqa: E501
        """
        pass

    def test_list_node_executions_for_task(self):
        """Test case for list_node_executions_for_task

        Fetch a list of :ref:`ref_flyteidl.admin.NodeExecution` launched by the reference :ref:`ref_flyteidl.admin.TaskExecution`.  # noqa: E501
        """
        pass

    def test_list_projects(self):
        """Test case for list_projects

        Fetches a list of :ref:`ref_flyteidl.admin.Project`  # noqa: E501
        """
        pass

    def test_list_task_executions(self):
        """Test case for list_task_executions

        Fetches a list of :ref:`ref_flyteidl.admin.TaskExecution`.  # noqa: E501
        """
        pass

    def test_list_task_ids(self):
        """Test case for list_task_ids

        Fetch a list of :ref:`ref_flyteidl.admin.NamedEntityIdentifier` of task objects.  # noqa: E501
        """
        pass

    def test_list_tasks(self):
        """Test case for list_tasks

        Fetch a list of :ref:`ref_flyteidl.admin.Task` definitions.  # noqa: E501
        """
        pass

    def test_list_tasks2(self):
        """Test case for list_tasks2

        Fetch a list of :ref:`ref_flyteidl.admin.Task` definitions.  # noqa: E501
        """
        pass

    def test_list_workflow_ids(self):
        """Test case for list_workflow_ids

        Fetch a list of :ref:`ref_flyteidl.admin.NamedEntityIdentifier` of workflow objects.  # noqa: E501
        """
        pass

    def test_list_workflows(self):
        """Test case for list_workflows

        Fetch a list of :ref:`ref_flyteidl.admin.Workflow` definitions.  # noqa: E501
        """
        pass

    def test_list_workflows2(self):
        """Test case for list_workflows2

        Fetch a list of :ref:`ref_flyteidl.admin.Workflow` definitions.  # noqa: E501
        """
        pass

    def test_recover_execution(self):
        """Test case for recover_execution

        Recreates a previously-run workflow execution that will only start executing from the last known failure point. In Recover mode, users cannot change any input parameters or update the version of the execution. This is extremely useful to recover from system errors and byzantine faults like - Loss of K8s cluster, bugs in platform or instability, machine failures, downstream system failures (downstream services), or simply to recover executions that failed because of retry exhaustion and should complete if tried again. See :ref:`ref_flyteidl.admin.ExecutionRecoverRequest` for more details.  # noqa: E501
        """
        pass

    def test_register_project(self):
        """Test case for register_project

        Registers a :ref:`ref_flyteidl.admin.Project` with the Flyte deployment.  # noqa: E501
        """
        pass

    def test_relaunch_execution(self):
        """Test case for relaunch_execution

        Triggers the creation of an identical :ref:`ref_flyteidl.admin.Execution`  # noqa: E501
        """
        pass

    def test_terminate_execution(self):
        """Test case for terminate_execution

        Terminates an in-progress :ref:`ref_flyteidl.admin.Execution`.  # noqa: E501
        """
        pass

    def test_update_execution(self):
        """Test case for update_execution

        Update execution belonging to project domain :ref:`ref_flyteidl.admin.Execution`.  # noqa: E501
        """
        pass

    def test_update_launch_plan(self):
        """Test case for update_launch_plan

        Updates the status of a registered :ref:`ref_flyteidl.admin.LaunchPlan`.  # noqa: E501
        """
        pass

    def test_update_named_entity(self):
        """Test case for update_named_entity

        Updates a :ref:`ref_flyteidl.admin.NamedEntity` object.  # noqa: E501
        """
        pass

    def test_update_project(self):
        """Test case for update_project

        Updates an existing :ref:`ref_flyteidl.admin.Project`  flyteidl.admin.Project should be passed but the domains property should be empty; it will be ignored in the handler as domains cannot be updated via this API.  # noqa: E501
        """
        pass

    def test_update_project_domain_attributes(self):
        """Test case for update_project_domain_attributes

        Creates or updates custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project and domain.  # noqa: E501
        """
        pass

    def test_update_workflow_attributes(self):
        """Test case for update_workflow_attributes

        Creates or updates custom :ref:`ref_flyteidl.admin.MatchableAttributesConfiguration` for a project, domain and workflow.  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()

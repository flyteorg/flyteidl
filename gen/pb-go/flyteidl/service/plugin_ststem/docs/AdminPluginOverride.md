# AdminPluginOverride

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskType** | **string** | A predefined yet extensible Task type identifier. | [optional] [default to null]
**PluginId** | **[]string** | A set of plugin ids which should handle tasks of this type instead of the default registered plugin. The list will be tried in order until a plugin is found with that id. | [optional] [default to null]
**MissingPluginBehavior** | [***PluginOverrideMissingPluginBehavior**](PluginOverrideMissingPluginBehavior.md) | Defines the behavior when no plugin from the plugin_id list is not found. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



[**cc-everywhere**](..\..\..\..\..\index.md)

***

# Interface: StyleSetting

Represents the configuration for panel styles.
Extends BasePanelSetting, with the value being an array of StyleId enums.
Used to specify which styles (themes, techniques, etc.) are applied in the panel.

## Extends

- [`BasePanelSetting`](base-panel-setting.md)<[`ImageStyleId`](..\type-aliases\image-style-id.md)[]\>

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `value` | [`ImageStyleId`](..\type-aliases\image-style-id.md)[] | The value of the setting. Generic type allows for different value types. | [`BasePanelSetting`](base-panel-setting.md).[`value`](base-panel-setting.md#value) |

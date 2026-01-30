---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: BasePanelSetting&lt;T&gt;

Base setting interface that all settings should extend.
Provides common properties for value.

## Extended by

- [`StyleSetting`](style-setting.md)
- [`ContentTypeSetting`](content-type-setting.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `value` | `T` | The value of the setting. Generic type allows for different value types. |

[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / sdk/src/actions/editor/BaseEditorAction

# sdk/src/actions/editor/BaseEditorAction

## Classes

### `abstract` BaseEditorAction\<T\>

A action is a specific thing that the user can do. End user will be interacting
with the action implemented using BaseAction (this class). Action class takes care
of creating the modal dialog/window.
of creating the modal dialog/window.

Each implementation of BaseAction is mapped to Workflow & AnalyticsWorkflow

#### Extends

- [`BaseAction`](../BaseAction.md#baseactiont)\<`T`\>

#### Extended by

- [`CreateAction`](CreateAction.md#createaction)
- [`CreateWithAssetAction`](CreateWithAssetAction.md#createwithassetaction)
- [`CreateWithTemplateAction`](CreateWithTemplateAction.md#createwithtemplateaction)
- [`EditAction`](EditAction.md#editaction)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DesignConfig`](../../../../shared/src/types/editor/DesignConfig.md#designconfig) |

#### Constructors

##### new BaseEditorAction()

```ts
new BaseEditorAction<T>(context, workflow): BaseEditorAction<T>
```

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `context` | [`ActionContext`](../ActionContext.md#actioncontextt)\<`T`\> | `undefined` |
| `workflow` | [`AnalyticsWorkflow`](../../analytics/AnalyticsManager.md#analyticsworkflow) | `AnalyticsWorkflow.CREATE_DESIGN` |

###### Returns

[`BaseEditorAction`](BaseEditorAction.md#baseeditoractiont)\<`T`\>

###### Overrides

[`BaseAction`](../BaseAction.md#baseactiont).[`constructor`](../BaseAction.md#constructors)

#### Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `hostCallbackHandler` | `readonly` | [`HostCallbackHandler`](../../host/HostCallbackHandler.md#hostcallbackhandler) | [`BaseAction`](../BaseAction.md#baseactiont).`hostCallbackHandler` |
| `context` | `public` | [`ActionContext`](../ActionContext.md#actioncontextt)\<`T`\> | [`BaseAction`](../BaseAction.md#baseactiont).`context` |

#### Methods

##### isActive()

```ts
isActive(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`isActive`](../BaseAction.md#isactive)

##### isTerminating()

```ts
isTerminating(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`isTerminating`](../BaseAction.md#isterminating)

##### isTerminated()

```ts
isTerminated(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`isTerminated`](../BaseAction.md#isterminated)

##### isCancellable()

```ts
isCancellable(): boolean
```

###### Returns

`boolean`

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`isCancellable`](../BaseAction.md#iscancellable)

##### getTargetInfoInternal()

```ts
getTargetInfoInternal(): Promise<TargetInfo>
```

###### Returns

`Promise`\<[`TargetInfo`](../../../../shared/src/types/TargetInfo.md#targetinfo)\>

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`getTargetInfoInternal`](../BaseAction.md#gettargetinfointernal)

##### execute()

```ts
execute(): Promise<void>
```

###### Returns

`Promise`\<`void`\>

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`execute`](../BaseAction.md#execute)

##### close()

```ts
close(reason): void
```

###### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `reason` | `ContainerCloseReason` | `ContainerCloseReason.HOST` |

###### Returns

`void`

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`close`](../BaseAction.md#close)

##### didContainerRemove()

```ts
didContainerRemove(): void
```

###### Returns

`void`

###### Inherited from

[`BaseAction`](../BaseAction.md#baseactiont).[`didContainerRemove`](../BaseAction.md#didcontainerremove)

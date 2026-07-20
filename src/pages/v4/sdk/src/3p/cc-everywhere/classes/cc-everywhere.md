---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Class: CCEverywhere

Class to create CCEverywhere object.

## Extends

- [`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md)

## Implements

- [`CCEverywhereInterface`](../../cc-everywhere-types/interfaces/cc-everywhere-interface.md)

## Constructors

### Constructor

```ts
new CCEverywhere(
   validator, 
   hostInfo, 
   configParams, 
   authProvider, 
   clientAuthProvider): CCEverywhere;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `validator` | `Validator` |
| `hostInfo` | [`HostInfoSpecifiedBase`](../../../../../shared/src/types/host-info-types/interfaces/host-info-specified-base.md) |
| `configParams` | [`ConfigParamsBase`](../../../../../shared/src/types/host-info-types/interfaces/config-params-base.md) |
| `authProvider` | `AuthProvider` |
| `clientAuthProvider` | [`ClientAuthProvider`](../../../../../shared/src/types/client-authentication-types/interfaces/client-auth-provider.md) |

#### Returns

`CCEverywhere`

#### Overrides

[`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md).[`constructor`](../../../cc-everywhere-base/classes/cc-everywhere-base.md#constructor)

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| `editor` | `readonly` | [`EditorWorkflow`](../../../workflows/3p/editor-workflow/classes/editor-workflow.md) |
| `module` | `readonly` | [`ModuleWorkflow`](../../../workflows/3p/module-workflow/classes/module-workflow.md) |
| `quickAction` | `readonly` | [`QuickActionWorkflow`](../../../workflows/3p/quick-action-workflow/classes/quick-action-workflow.md) |

## Accessors

### activeInstance

#### Get Signature

```ts
get static activeInstance(): 
  | CCEverywhereBase
  | undefined;
```

##### Returns

  \| [`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md)
  \| `undefined`

#### Set Signature

```ts
set static activeInstance(instance): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `instance` | \| [`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md) \| `undefined` |

##### Returns

`void`

#### Inherited from

[`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md).[`activeInstance`](../../../cc-everywhere-base/classes/cc-everywhere-base.md#activeinstance)

<HorizontalLine />

### state

#### Get Signature

```ts
get static state(): State;
```

##### Returns

[`State`](../../../types/cc-everywhere-types/enumerations/state.md)

#### Set Signature

```ts
set static state(value): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`State`](../../../types/cc-everywhere-types/enumerations/state.md) |

##### Returns

`void`

#### Inherited from

[`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md).[`state`](../../../cc-everywhere-base/classes/cc-everywhere-base.md#state)

<HorizontalLine />

### version

#### Get Signature

```ts
get version(): string;
```

Get version of SDK

##### Returns

`string`

#### Inherited from

[`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md).[`version`](../../../cc-everywhere-base/classes/cc-everywhere-base.md#version)

## Methods

### terminate()

```ts
terminate(): void;
```

Method to un-initialize cceverywhere object

#### Returns

`void`

#### Inherited from

[`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md).[`terminate`](../../../cc-everywhere-base/classes/cc-everywhere-base.md#terminate)

<HorizontalLine />

### close()

```ts
close(showConfirmationDialog?): 
  | boolean
| Promise<CloseStatusMessage>;
```

Closes any active design in progress.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `showConfirmationDialog?` | `boolean` | boolean value indicating whether to show confirmation dialog or not. |

#### Returns

  \| `boolean`
  \| `Promise`&lt;[`CloseStatusMessage`](../../../../../shared/src/messenger/message-types/interfaces/close-status-message.md)&gt;

boolean value indicating whether the close operation was successful or not.

#### Implementation of

[`CCEverywhereInterface`](../../cc-everywhere-types/interfaces/cc-everywhere-interface.md).[`close`](../../cc-everywhere-types/interfaces/cc-everywhere-interface.md#close)

#### Inherited from

[`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md).[`close`](../../../cc-everywhere-base/classes/cc-everywhere-base.md#close)

<HorizontalLine />

### onRequestIdUpdate()

```ts
onRequestIdUpdate(requestId): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

#### Returns

`void`

#### Inherited from

[`CCEverywhereBase`](../../../cc-everywhere-base/classes/cc-everywhere-base.md).[`onRequestIdUpdate`](../../../cc-everywhere-base/classes/cc-everywhere-base.md#onrequestidupdate)

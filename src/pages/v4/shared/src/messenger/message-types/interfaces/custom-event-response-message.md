---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: CustomEventResponseMessage&lt;T&gt;

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

## Properties

| Property | Type |
| ------ | ------ |
| `data` | `object` |
| `data.type` | [`CUSTOM_EVENT`](../../message-data-types/enumerations/host-event-type.md#custom_event) |
| `data.data` | [`CustomEventResponsePayload`](custom-event-response-payload.md)&lt;`T`&gt; |

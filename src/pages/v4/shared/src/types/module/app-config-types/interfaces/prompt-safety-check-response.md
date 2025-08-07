[**cc-everywhere**](../../../../../../index.md)

***

# Interface: PromptSafetyCheckResponse

Represents the safety status of a prompt

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="issafe"></a> `isSafe` | `boolean` | Whether the prompt is safe to use |
| <a id="reason"></a> `reason?` | `string` | Optional reason why the prompt is unsafe. Only relevant when isSafe is false. |
| <a id="category"></a> `category?` | [`PromptSafetyCategory`](../../app-config-types/enumerations/prompt-safety-category.md) | Optional category of the safety assessment. Only relevant when isSafe is false. |
| <a id="confidence"></a> `confidence?` | `number` | Optional confidence score of the safety check (0-1). Higher values indicate higher confidence in the safety assessment. |

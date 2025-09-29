[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: PromptSafetyCheckResponse

Represents the safety status of a prompt

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `isSafe` | `boolean` | Whether the prompt is safe to use |
| `reason?` | `string` | Optional reason why the prompt is unsafe. Only relevant when isSafe is false. |
| `category?` | [`PromptSafetyCategory`](../enumerations/prompt-safety-category.md) | Optional category of the safety assessment. Only relevant when isSafe is false. |
| `confidence?` | `number` | Optional confidence score of the safety check (0-1). Higher values indicate higher confidence in the safety assessment. |

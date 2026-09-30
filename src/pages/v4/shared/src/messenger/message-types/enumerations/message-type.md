---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Enumeration: MessageType

## Enumeration Members

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `INIT_TARGET_LOAD` | `"INIT_TARGET_LOAD"` | - |
| `WILL_TARGET_LOAD` | `"WILL_TARGET_LOAD"` | - |
| `DID_TARGET_LOAD` | `"DID_TARGET_LOAD"` | - |
| `WILL_PUBLISH` | `"WILL_PUBLISH"` | - |
| `DID_PUBLISH` | `"DID_PUBLISH"` | - |
| `CANCEL` | `"CANCEL"` | - |
| `ERROR` | `"ERROR"` | - |
| `DID_COMPLETE` | `"DID_COMPLETE"` | - |
| `MIGRATE_ASSETS_COMPLETE` | `"MIGRATE_ASSETS_COMPLETE"` | - |
| `INVOKE_CLOSE` | `"INVOKE_CLOSE"` | - |
| `LOGIN_COMPLETE` | `"LOGIN_COMPLETE"` | Not part of "jump on trigger" sign-in (see [MessageType.SIGN\_IN\_REQUIRED](#enumeration-member-sign_in_required)): that completes via a full iframe reload, which leaves no JS context to send a completion from — the reload is the signal. |
| `LOGIN_REQUEST` | `"LOGIN_REQUEST"` | - |
| `SIGN_IN_REQUIRED` | `"SIGN_IN_REQUIRED"` | Sent agent → SDK when the anonymous embedded session needs the user signed in before continuing (e.g. a mid-session export/save). The host's SignInRequiredCallback resolves with a token, and the SDK completes sign-in by reloading the active action's iframe as a jump. |
| `TOKEN_REQUEST` | `"TOKEN_REQUEST"` | - |
| `TOKEN_RESPONSE` | `"TOKEN_RESPONSE"` | - |
| `PARAMS_REQUEST` | `"PARAMS_REQUEST"` | - |
| `PARAMS_RESPONSE` | `"PARAMS_RESPONSE"` | - |
| `CW_ASSET_RESPONSE` | `"CW_ASSET_RESPONSE"` | - |
| `PUBLISH_STATUS` | `"PUBLISH_STATUS"` | - |
| `EVENT` | `"EVENT"` | - |
| `WORKFLOW_CONTEXT_UPDATE` | `"WORKFLOW_CONTEXT_UPDATE"` | - |
| `CLOSE_STATUS` | `"CLOSE_STATUS"` | - |
| `PROMPT_SAFETY_CHECK_RESPONSE` | `"PROMPT_SAFETY_CHECK_RESPONSE"` | - |
| `CLIENT_AUTH_DETAILS` | `"CLIENT_AUTH_DETAILS"` | - |
| `AUTH_OPTION_REFRESH_RESPONSE` | `"AUTH_OPTION_REFRESH_RESPONSE"` | - |
| `SWITCH_EMBED_ACTION` | `"SWITCH_EMBED_ACTION"` | - |
| `TARGET_LOAD` | `"TARGET_LOAD"` | - |
| `WORKFLOW_CONTEXT` | `"WORKFLOW_CONTEXT"` | - |
| `PRIVACY_IFRAME_STORAGE` | `"PRIVACY_IFRAME_STORAGE"` | - |
| `UPDATE_DOCUMENT_ID` | `"UPDATE_DOCUMENT_ID"` | - |

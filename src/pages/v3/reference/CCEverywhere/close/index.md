---
keywords:
  - close
  - v3
title: close Reference
description: This is the reference page for the close API
contributors:
  - https://github.com/amandahuarng
--- 

# close()

<InlineAlert variant="error" slots="header, text" />

### IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated in 2024.

## close: () => boolean

The default method `close()` will close any active design in progress. This method will:

Closes any active design in progress. It returns a boolean value indicating whether the close operation was successful or not.

* Return **true** once if the close operation was successful
* Return **false** if the operation was unsuccessful

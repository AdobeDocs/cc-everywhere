# SDK sign in options

This guide describes the various Sign-in Options supported by Embed SDK including what is currently supported and what is desired and what are the gaps to achieve the desire.

## Currently Supported Options

Embed SDK Currently supports following Sign-in options:

1.  Upfront Login
2.  Delayed Login
3.  SSO
    2.  Assisted Sign-in by passing Signed-in User ID

### Upfront Login

This is the **default** login option in Embed SDK and user is asked to login via an Embed (or partner) specific SUSI experience as soon as the Embed workflow is launched.

### Delayed Login

The initial module experience is displayed without an upfront sign-in requirement. Sign-in is required when user choses an option that requires sign-in.

Target app support matrix:

|       Target App      | Delayed Login Status |
|:---------------------:|:--------------------:|
| Full Editor           |           Yes        |
| Quick Actions         |              Yes     |
| Edit Image Module     |              Yes     |
| Generate Image Module |                 No   |

### Single Sign-On (SSO) Support

| Account Type        | Sign-in Option                                       | SSO Status                  | Seamless | Comments                                                                                                                                                                                                                                                                                                    |
|---------------------|------------------------------------------------------|-----------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enterprise Accounts |                                                      |                             |          |                                                                                                                                                                                                                                                                                                             |
|                     | SSO via federated user-id and JIT                    | Supported                 | No     | Adobe Enterprise customer admins can configure federated ids and their domains using Admin Console and choose to create JIT accounts.New IDP can be onboarded with a defined process.                                                                                                                   |
|                     | Seamless SSO                                         | Custom Work Required by IMS | Yes    | This requires IMS and Client to do custom work. EDU workflows are using this kind of SSO                                                                                                                                                                                                                  |
| Personal Accounts   |                                                      |                             |          |                                                                                                                                                                                                                                                                                                             |
|                     | Assisted Sign-in by passing Signed-in user-id/domain | Supported                 | No     | The passed user-id/domain is forwarded to IMS which avoids one step for the user in the Authentication process                                                                                                                                                                                              |
|                     | SSO via Google One Tap                               | Supported                 | No     | Google One Tap Widget is shown during SUSI and can automatically sign-in user using Google account using the widget affordance                                                                                                                                                                              |
|                     | SSO via Social Sign-in Providers                     | Not supported by IMS      | N/A      | IMS claimed to support this, but when we tried, we found out that IMS currently requires both clients to be Adobe-owned, which prevents them from exchanging tokens.  This is not possible with 3P Embed SDK clients.  Once supported in IMS, Embed SDK also needs to provide these options in its API. |
|                     | SSO via Client acting as IDP                         | Not supported by IMS      | N/A      | IMS supports onboarding new IDPs with a defined process. IMS currently requires both the clients to be Adobe-owned. This is not possible with 3P Embed SDK clients.  Once supported in IMS, Embed SDK also need to provide this option in its API.                                                      |

## Other Features Supported

### SUSI Lite Experience

Embed SDK has onboarded to SUSI Lite experience for sign-in. IMS SUSI Lite initiative enables IMS clients to pick and choose contextually relevant login options to show based on the app’s context. For example, “Continue sign in with google” for G-suite integrations might be a popular choice for Google users using Embed integration in G-Suite apps. So, we probably can hide other social sign in buttons for login to prevent cognitive overload. Similarly if a host application is itself an IDP,  they may only want user to see them as the sign-in provider.

### Partner Specific Welcome Screen

Embed SDK also supports partner specific Welcome Screen that allows each SDK client to design and customise the initial screen of the Sign-in workflow.

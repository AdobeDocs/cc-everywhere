---
keywords:
  - Embed FAQ
  - FAQ
  - Frequently Asked Questions
  - Adobe Express is not available
  - Error
title: Adobe Express is not available Error
description: How to troubleshoot the "Adobe Express is not available" Error
contributors:
  - https://github.com/undavide
  - https://github.com/nimithajalal
---

# Adobe Express is not available

Troubleshooting the "Adobe Express is not available" error, that might appear when trying to launch any of the Embed SDK experiences.

![Adobe Express is not available](./img/unavailable.png)

## Wrong or missing API Key

The most common reason for the "Adobe Express is not available" error is a wrong or missing [API Key](../quickstart/index.md#step-1-get-an-api-key) (Client ID). Make sure you have the correct API Key in your configuration files.

## Wrong Domain or Port

In the [Allowed Domain](../quickstart/index.md#edit-the-list-of-allowed-domains) section of your Project in the Adobe Developer Console, make sure you have set the correct domain (and port!) where your application is running. Please note that wildcards are supported with the following restrictions:

- Only one subdomain level is matched: `*.company.com` matches `editor.company.com` but not `private.editor.company.com`.
- Only one wildcard is allowed: `*.company.com` is accepted, but `*.*.company.com` is not. Explicitly add the subdomain if needed.
- If you need to allow-list the domain and subdomains, you must add them both: `*.company.com` and `company.com`.

## Missing Referrer Header

When you launch any Embed SDK experience, the Embed SDK validates requests by checking the HTTP Referrer header. If your application, server, or CDN removes or blocks this header, the validation will fail, and you will see the "Adobe Express is not available" error.

### Troubleshooting

#### Server/CDN Configuration

Some servers or CDNs (like AWS CloudFront) are configured to [strip the Referrer header](https://stackoverflow.com/questions/24343001/amazon-cloudfront-removes-referer-header) by default. Check your server or CDN settings to ensure the Referrer header is allowed and passed through. In AWS CloudFront, review the [behavior settings](https://aws.amazon.com/blogs/aws/enhanced-cloudfront-customization/) and enable or whitelist the Referrer header in cache policies.

#### Referrer Policy or Meta Tags

If you have set a Referrer Policy that blocks or redacts the header (e.g., `no-referrer`), change it to a less restrictive policy (e.g., `strict-origin-when-cross-origin` or `origin-when-cross-origin`). Avoid using any meta tags that might unset the Referrer header.

```html
❌ <meta name="referrer" content="no-referrer"> 
✅ <meta name="referrer" content="strict-origin-when-cross-origin"> 
```

#### Browser Privacy Settings or Extensions

Certain browser privacy settings or plugins can strip the Referrer header. If you suspect a browser issue, test in a different browser or a fresh profile.

#### Confirm the Allowed Domain

Double-check that the exact domain in the Referrer header appears in the [Allowed Domain](../quickstart/index.md#edit-the-list-of-allowed-domains) list of your Adobe Developer Console project.

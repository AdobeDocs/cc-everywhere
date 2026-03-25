export function generateReadme(config) {
  const sdk = config.sdk || {};
  const meta = config.meta || {};
  const name = meta.customerName || 'Custom Demo';

  return `# ${name} — Embed SDK Demo

This is a standalone Adobe Express Embed SDK demo${meta.vertical ? ` for the **${meta.vertical}** vertical` : ''}.

## Prerequisites

- An API key from the [Adobe Developer Console](https://developer.adobe.com/console)
- The domain you serve from must be allowlisted in the Developer Console
- HTTPS is required (the SDK will not load over plain HTTP)

## Quick Start

### 1. Set your API key

Open \`app.js\` and replace \`"${sdk.clientId || 'your-client-id'}"\` with your real API key.

### 2. Set up HTTPS locally

Install [\`mkcert\`](https://github.com/FiloSottile/mkcert) and generate a local certificate:

\`\`\`bash
brew install mkcert
mkcert -install
mkcert localhost
\`\`\`

### 3. Serve the files

\`\`\`bash
npx http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 8000 -a localhost
\`\`\`

Open **https://localhost:8000** in your browser.

## Files

| File        | Purpose                                      |
|-------------|----------------------------------------------|
| index.html  | Page structure, SDK script tag, Spectrum CSS  |
| app.js      | All SDK integration logic                    |
| styles.css  | Layout and branding                          |
| README.md   | This file                                    |

## Customization

This demo was generated from a JSON config, but every file is plain HTML/JS/CSS — edit anything directly:

- **Branding**: Edit CSS custom properties at the top of \`styles.css\`
- **Features**: Add/remove buttons and sections in \`index.html\`, wire them in \`app.js\`
- **SDK behavior**: Modify callbacks, export configs, and SDK calls in \`app.js\`
${meta.preparedBy ? `\n---\nPrepared by ${meta.preparedBy}${meta.date ? ` on ${meta.date}` : ''}\n` : ''}`;
}

# Embed SDK Demo Kit

Two ways to create tailored Adobe Express Embed SDK demos for customers and partners — both driven by the same JSON config format.

| Approach | Best for | Output |
|----------|----------|--------|
| **Option A: Config-driven app** | Quick iteration, live demos | Vite dev server or static build |
| **Option B: Generator CLI** | Self-contained hand-offs, full customization | Standalone HTML/JS/CSS folder |

---

## Option A: Config-Driven App

Swap a JSON config file to change branding, features, and copy — no code changes. Best for live demos and quick iteration.

### Quick Start

```bash
cd demo-kit
npm install
npm run dev
```

Open `http://localhost:3000` in your browser. The app loads `configs/default.json` by default.

### Load a specific config

Append the `?config=` query parameter to the URL:

```
http://localhost:3000?config=presets/e-commerce.json
http://localhost:3000?config=presets/social-media.json
http://localhost:3000?config=presets/marketing-agency.json
http://localhost:3000?config=presets/education.json
```

You can also point to an absolute URL for a remotely hosted config:

```
http://localhost:3000?config=https://example.com/configs/acme-corp.json
```

## Creating a Tailored Demo

1. **Copy a preset** that's closest to the customer's vertical:

   ```bash
   cp configs/presets/e-commerce.json configs/acme-corp.json
   ```

2. **Edit the config** — see [Config Reference](#config-reference) below.

3. **Set your API key** — replace `"your-client-id"` in `sdk.clientId` with a real key from the [Adobe Developer Console](https://developer.adobe.com/console). Make sure the domain you're serving from is allowlisted.

4. **Run the demo**:

   ```bash
   npm run dev
   ```

   Then open `http://localhost:3000?config=acme-corp.json`.

5. **Iterate** — edit the JSON, save, and the page hot-reloads.

## Config Reference

### `meta`

| Field          | Type   | Description                              |
|----------------|--------|------------------------------------------|
| `customerName` | string | Shown in the footer                      |
| `vertical`     | string | For your own reference (e.g., "e-commerce") |
| `preparedBy`   | string | Shown in the footer                      |
| `date`         | string | Shown in the footer                      |

### `branding`

| Field             | Type   | Default     | Description                              |
|-------------------|--------|-------------|------------------------------------------|
| `title`           | string | "Adobe Express Embed SDK" | Hero heading and page title |
| `tagline`         | string |             | Hero subtitle                            |
| `logoUrl`         | string |             | URL to a logo image shown in the hero    |
| `primaryColor`    | string | `#6E38B1`   | Primary brand color (buttons, tabs, gradient) |
| `accentColor`     | string | `#E03ADC`   | Accent color (gradient end)              |
| `backgroundColor` | string | `#FFFFFF`   | Page background                          |
| `theme`           | string | `light`     | `"light"` or `"dark"`                    |

### `sdk`

| Field       | Type   | Required | Description                          |
|-------------|--------|----------|--------------------------------------|
| `clientId`  | string | Yes      | API key from Adobe Developer Console |
| `appName`   | string |          | Shown in SDK UI                      |
| `loginMode` | string |          | `"delayed"` (default) or `"auto"`    |
| `locale`    | string |          | e.g., `"en_US"`, `"fr_FR"`          |

### `layout`

| Field        | Type    | Default | Description                              |
|--------------|---------|---------|------------------------------------------|
| `navigation` | string  | `tabs`  | `"tabs"` (tabbed) or `"sections"` (scrollable) |
| `showHero`   | boolean | `true`  | Show the branded hero header             |

### `features.editor`

| Field              | Type    | Default | Description                                |
|--------------------|---------|---------|-------------------------------------------|
| `enabled`          | boolean | `true`  | Show the Full Editor panel                 |
| `label`            | string  | "Full Editor" | Tab/section heading                  |
| `description`      | string  |         | Descriptive text shown below the heading   |
| `canvasSize`       | object  |         | `{ width, height }` preset canvas size     |
| `selectedCategory` | string  |         | Pre-select a template category             |

### `features.quickActions`

| Field          | Type     | Description                                   |
|----------------|----------|-----------------------------------------------|
| `enabled`      | boolean  | Show the Quick Actions panel                   |
| `label`        | string   | Tab/section heading                            |
| `description`  | string   | Descriptive text                               |
| `imageActions` | string[] | Subset of: `cropImage`, `resizeImage`, `removeBackground`, `convertToJPEG`, `convertToPNG`, `convertToSVG`, `generateQRCode` |
| `videoActions` | string[] | Subset of: `cropVideo`, `resizeVideo`, `trimVideo`, `mergeVideos`, `convertToGIF`, `convertToMP4`, `animateFromAudio`, `captionVideo` |

### `features.modules.generateImage`

| Field           | Type    | Description                               |
|-----------------|---------|------------------------------------------|
| `enabled`       | boolean | Show the Generate Image section           |
| `label`         | string  | Section heading                           |
| `description`   | string  | Descriptive text                          |
| `defaultPrompt` | string  | Pre-filled text prompt                    |

### `features.modules.editImage`

| Field         | Type    | Description                          |
|---------------|---------|--------------------------------------|
| `enabled`     | boolean | Show the Edit Image section          |
| `label`       | string  | Section heading                      |
| `description` | string  | Descriptive text                     |

### `features.modules.templateBrowser`

| Field                | Type     | Description                              |
|----------------------|----------|------------------------------------------|
| `enabled`            | boolean  | Show the Template Browser section         |
| `label`              | string   | Section heading                           |
| `description`        | string   | Descriptive text                          |
| `headerText`         | string   | Heading inside the template browser modal |
| `searchQuery`        | string   | Pre-populated search query                |
| `hideSearchBar`      | boolean  | Hide the search bar                       |
| `hideFilters`        | boolean  | Hide the filter sidebar                   |
| `shortcutPillTerms`  | string[] | Exactly 5 shortcut pill labels            |

### `exportConfig`

| Field            | Type    | Default | Description                          |
|------------------|---------|---------|--------------------------------------|
| `download`       | boolean | `true`  | Show "Download" export button         |
| `saveToApp`      | boolean | `true`  | Show "Save" (publish) export button   |
| `editInExpress`  | boolean | `false` | Show "Edit in Adobe Express" button   |
| `customButtons`  | array   |         | Additional custom export buttons      |

## Deployment

Build the static site:

```bash
npm run build
```

The output goes to `demo-kit/dist/`. Deploy to any static host:

- **Netlify/Vercel**: Point to the `demo-kit` directory; set build command to `npm run build` and publish directory to `dist`.
- **S3 / CloudFront**: Upload the `dist/` folder contents.
- **GitHub Pages**: Use the `dist/` output.

Remember to allowlist the deployment domain in the Adobe Developer Console for your API key.

## Preset Configs

| Preset                | Vertical   | Key Features Highlighted                                |
|-----------------------|------------|--------------------------------------------------------|
| `e-commerce.json`     | E-Commerce | Remove background, AI product visuals, product templates |
| `social-media.json`   | Social     | Resize for platforms, video tools, social templates      |
| `marketing-agency.json` | Marketing | Full toolset, QR codes, campaign templates              |
| `education.json`      | Education  | Presentations, captions, illustration generation         |

## Architecture (Option A)

```
index.html          → loads SDK script + mounts #app
src/main.js         → entry: load config → init SDK → render
src/config-loader.js → resolves config from ?config= param or default
src/sdk-init.js     → CCEverywhere.initialize() wrapper
src/renderer.js     → builds hero, nav, panels from config
src/panels/         → editor.js, quick-actions.js, modules.js
src/shared/         → export-config builder, asset-loader, callbacks
src/styles/         → main.css (layout), branding.css (theme vars)
configs/            → default.json, presets/, _schema.json
```

---

## Option B: Generator CLI

Generate a **standalone, self-contained** demo folder (HTML + JS + CSS) from any config file. The output has no runtime dependencies on the demo-kit app — you can zip it, host it, or hand it to a customer.

### Usage

```bash
cd demo-kit
npm run generate -- configs/presets/e-commerce.json
```

Or with a custom output name:

```bash
npm run generate -- configs/acme-corp.json acme-demo
```

Output goes to `demo-kit/output/<name>/` with 4 files:

| File        | Purpose                                      |
|-------------|----------------------------------------------|
| `index.html` | Page structure, SDK script tag, Spectrum CSS |
| `app.js`    | All SDK logic, baked from config             |
| `styles.css` | Layout + branding (CSS custom properties)   |
| `README.md` | Setup instructions for this specific demo    |

### Running a generated demo

```bash
cd output/e-commerce-partner
# Edit app.js to set your real clientId
mkcert localhost   # one-time: generate local HTTPS cert
npx http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 8000
```

Open **https://localhost:8000**.

### What makes it different from Option A

- **Fully independent** — no Vite, no config loading at runtime, no shared code
- **Hand-editable** — every file is clean, readable, commented JS/HTML/CSS
- **Deliverable** — zip the folder and send it to a partner or deploy it anywhere
- **Divergence-friendly** — add custom sections, bespoke workflows, or partner-specific logic directly in the generated files

### Architecture (Option B)

```
generator/
  generate.js              → CLI entry point (node generator/generate.js <config>)
  templates/
    index.html.js          → HTML generator (hero, tabs, panels from config)
    app.js.js              → JS generator (SDK init, event wiring, baked values)
    styles.css.js          → CSS generator (branding vars from config)
    readme.md.js           → Per-demo README generator
output/                    → generated demos (gitignored)
```

export function generateHTML(config) {
  const b = config.branding || {};
  const layout = config.layout || {};
  const features = config.features || {};
  const meta = config.meta || {};
  const isDark = b.theme === 'dark';
  const isTabs = layout.navigation !== 'sections';

  const panels = collectPanels(features);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(b.title || 'Embed SDK Demo')}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@spectrum-css/tokens@latest/dist/index.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@spectrum-css/page@latest/dist/index-vars.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@spectrum-css/typography@latest/dist/index-vars.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@spectrum-css/button@latest/dist/index-vars.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@spectrum-css/textfield@latest/dist/index-vars.css" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body class="spectrum spectrum--medium ${isDark ? 'spectrum--dark' : 'spectrum--light'}">
  <div id="app">
${layout.showHero !== false ? buildHeroHTML(b) : ''}
${isTabs && panels.length > 1 ? buildTabBarHTML(panels) : ''}
    <div class="demo-content${isTabs ? '' : ' demo-content--sections'}">
${panels.map((p, i) => p.html(features, isTabs && i === 0)).join('\n')}
    </div>
${buildFooterHTML(meta)}
  </div>
  <script src="https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js"></script>
  <script src="app.js"></script>
</body>
</html>`;
}

// ── Panel collectors ──

function collectPanels(features) {
  const panels = [];
  if (features.editor?.enabled) {
    panels.push({ id: 'editor', domId: 'panel-editor', label: features.editor.label || 'Full Editor', html: buildEditorHTML });
  }
  const hasQA = features.quickActions?.enabled &&
    ((features.quickActions.imageActions?.length > 0) || (features.quickActions.videoActions?.length > 0));
  if (hasQA) {
    panels.push({ id: 'quickActions', domId: 'panel-quick-actions', label: features.quickActions.label || 'Quick Actions', html: buildQAHTML });
  }
  const mods = features.modules || {};
  if (mods.generateImage?.enabled || mods.editImage?.enabled || mods.templateBrowser?.enabled) {
    panels.push({ id: 'modules', domId: 'panel-modules', label: 'Modules', html: buildModulesHTML });
  }
  return panels;
}

// ── HTML builders ──

function buildHeroHTML(b) {
  return `    <div class="demo-hero">
${b.logoUrl ? `      <img src="${esc(b.logoUrl)}" alt="" class="demo-hero__logo" />\n` : ''}      <h1 class="demo-hero__title">${esc(b.title || 'Adobe Express Embed SDK')}</h1>
${b.tagline ? `      <p class="demo-hero__tagline">${esc(b.tagline)}</p>\n` : ''}    </div>`;
}

function buildTabBarHTML(panels) {
  const tabs = panels.map((p, i) =>
    `      <button class="demo-nav__tab${i === 0 ? ' demo-nav__tab--active' : ''}" data-panel="${p.domId}">${esc(p.label)}</button>`
  ).join('\n');
  return `    <nav class="demo-nav">\n${tabs}\n    </nav>`;
}

function buildEditorHTML(features, isActive) {
  const cfg = features.editor;
  return `      <div id="panel-editor" class="demo-panel${isActive ? ' demo-panel--active' : ''}">
        <h2 class="demo-panel__title">${esc(cfg.label || 'Full Editor')}</h2>
        <p class="demo-panel__description">${esc(cfg.description || '')}</p>
        <div class="demo-actions">
          <button id="btn-create-design" class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM">
            <span class="spectrum-Button-label">Create Design</span>
          </button>
          <button id="btn-edit-design" class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM">
            <span class="spectrum-Button-label">Edit Design</span>
          </button>
        </div>
        <p class="demo-panel__description">Or load an image to start from an existing asset:</p>
        <div class="asset-loader">
          <input type="file" id="editor-file-input" accept="image/*,video/*" />
          <button id="btn-create-from-asset" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM">
            <span class="spectrum-Button-label">Create from Asset</span>
          </button>
          <button id="btn-editor-clear" class="spectrum-Button spectrum-Button--outline spectrum-Button--secondary spectrum-Button--sizeS">
            <span class="spectrum-Button-label">Clear</span>
          </button>
        </div>
        <img class="published-asset" alt="Published design" />
      </div>`;
}

function buildQAHTML(features, isActive) {
  const cfg = features.quickActions;
  const imageActions = cfg.imageActions || [];
  const videoActions = cfg.videoActions || [];

  const labels = {
    cropImage: 'Crop Image', resizeImage: 'Resize Image', removeBackground: 'Remove Background',
    convertToJPEG: 'Convert to JPG', convertToPNG: 'Convert to PNG', convertToSVG: 'Convert to SVG',
    generateQRCode: 'Generate QR Code',
    cropVideo: 'Crop Video', resizeVideo: 'Resize Video', trimVideo: 'Trim Video',
    mergeVideos: 'Merge Videos', convertToGIF: 'Convert to GIF', convertToMP4: 'Convert to MP4',
    animateFromAudio: 'Animate from Audio', captionVideo: 'Caption Video',
  };

  const makeBtn = (id) =>
    `          <button id="btn-${camelToKebab(id)}" class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM"><span class="spectrum-Button-label">${labels[id] || id}</span></button>`;

  let actionsHTML = '';
  if (imageActions.length > 0) {
    actionsHTML += `        <h3 style="font-size:1.1rem;margin:20px 0 12px;font-weight:600;">Image</h3>\n        <div class="demo-actions">\n${imageActions.map(makeBtn).join('\n')}\n        </div>\n`;
  }
  if (videoActions.length > 0) {
    actionsHTML += `        <h3 style="font-size:1.1rem;margin:20px 0 12px;font-weight:600;">Video</h3>\n        <div class="demo-actions">\n${videoActions.map(makeBtn).join('\n')}\n        </div>\n`;
  }

  return `      <div id="panel-quick-actions" class="demo-panel${isActive ? ' demo-panel--active' : ''}">
        <h2 class="demo-panel__title">${esc(cfg.label || 'Quick Actions')}</h2>
        <p class="demo-panel__description">${esc(cfg.description || '')}</p>
        <div class="asset-loader">
          <input type="file" id="qa-file-input" accept="image/*,video/*" />
          <button id="btn-qa-clear" class="spectrum-Button spectrum-Button--outline spectrum-Button--secondary spectrum-Button--sizeS">
            <span class="spectrum-Button-label">Clear</span>
          </button>
        </div>
${actionsHTML}        <img class="published-asset" alt="Quick action output" />
      </div>`;
}

function buildModulesHTML(features, isActive) {
  const mods = features.modules || {};
  let inner = '';

  if (mods.generateImage?.enabled) {
    const g = mods.generateImage;
    inner += `        <div id="section-generate-image" class="demo-section">
          <h3>${esc(g.label || 'Generate Image')}</h3>
          <p class="demo-panel__description">${esc(g.description || '')}</p>
          <div class="demo-field">
            <label for="gen-prompt">Text prompt</label>
            <input type="text" id="gen-prompt" value="${esc(g.defaultPrompt || '')}" placeholder="Describe the image you want to create..." />
          </div>
          <div class="demo-actions">
            <button id="btn-generate-image" class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM">
              <span class="spectrum-Button-label">Generate</span>
            </button>
            <button id="btn-gen-clear" class="spectrum-Button spectrum-Button--outline spectrum-Button--secondary spectrum-Button--sizeS">
              <span class="spectrum-Button-label">Clear</span>
            </button>
          </div>
          <img class="published-asset" alt="Generated image" />
        </div>\n`;
  }

  if (mods.editImage?.enabled) {
    const e = mods.editImage;
    inner += `        <div id="section-edit-image" class="demo-section">
          <h3>${esc(e.label || 'Edit Image')}</h3>
          <p class="demo-panel__description">${esc(e.description || '')}</p>
          <div class="asset-loader">
            <input type="file" id="edit-file-input" accept="image/*" />
          </div>
          <div class="demo-actions">
            <button id="btn-edit-image" class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM">
              <span class="spectrum-Button-label">Edit Image</span>
            </button>
          </div>
          <img class="published-asset" alt="Edited image" />
        </div>\n`;
  }

  if (mods.templateBrowser?.enabled) {
    const t = mods.templateBrowser;
    inner += `        <div id="section-template-browser" class="demo-section">
          <h3>${esc(t.label || 'Template Browser')}</h3>
          <p class="demo-panel__description">${esc(t.description || '')}</p>
          <div class="demo-actions">
            <button id="btn-browse-templates" class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM">
              <span class="spectrum-Button-label">Browse Templates</span>
            </button>
          </div>
          <img class="published-asset" alt="Template output" />
        </div>\n`;
  }

  return `      <div id="panel-modules" class="demo-panel${isActive ? ' demo-panel--active' : ''}">
        <h2 class="demo-panel__title">Modules</h2>
${inner}      </div>`;
}

function buildFooterHTML(meta) {
  const parts = ['Powered by Adobe Express Embed SDK'];
  if (meta.customerName && meta.customerName !== 'Default Demo') parts.unshift(`Prepared for ${esc(meta.customerName)}`);
  if (meta.preparedBy) parts.push(`by ${esc(meta.preparedBy)}`);
  if (meta.date) parts.push(`(${esc(meta.date)})`);
  return `    <footer class="demo-footer">${parts.join(' &middot; ')}</footer>`;
}

// ── Utilities ──
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function camelToKebab(str) { return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(); }

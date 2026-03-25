export function generateAppJS(config) {
  const sdk = config.sdk || {};
  const features = config.features || {};
  const layout = config.layout || {};
  const branding = config.branding || {};
  const expCfg = config.exportConfig || {};
  const meta = config.meta || {};

  const isTabs = layout.navigation !== 'sections';
  const panels = [];

  if (features.editor?.enabled) panels.push('editor');
  const hasImageQA = features.quickActions?.enabled && features.quickActions?.imageActions?.length > 0;
  const hasVideoQA = features.quickActions?.enabled && features.quickActions?.videoActions?.length > 0;
  if (hasImageQA || hasVideoQA) panels.push('quickActions');
  const mods = features.modules || {};
  if (mods.generateImage?.enabled || mods.editImage?.enabled || mods.templateBrowser?.enabled) {
    panels.push('modules');
  }

  const exportOptions = buildExportOptionsLiteral(expCfg);
  const imageActions = features.quickActions?.imageActions || [];
  const videoActions = features.quickActions?.videoActions || [];

  return `/* Generated app.js — edit freely to customize behavior */
(async () => {
  // ── SDK Initialization ──
  const { ${panels.includes('editor') ? 'editor, ' : ''}${panels.includes('quickActions') ? 'quickAction, ' : ''}${panels.includes('modules') ? 'module' : ''} } = await window.CCEverywhere.initialize(
    { clientId: ${JSON.stringify(sdk.clientId || 'your-client-id')}, appName: ${JSON.stringify(sdk.appName || 'Embed SDK Demo')} },
    { ${sdk.loginMode ? `loginMode: ${JSON.stringify(sdk.loginMode)}` : ''}${sdk.locale ? `, locale: ${JSON.stringify(sdk.locale)}` : ''} }
  );

  // ── Export Config ──
  const exportConfig = ${exportOptions};

  // ── Shared Helpers ──
  function readFileAsBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  }

  function showAsset(imgEl, data) {
    imgEl.src = data;
    imgEl.style.display = 'block';
  }

  function hideAsset(imgEl) {
    imgEl.src = '';
    imgEl.style.display = 'none';
  }

${panels.includes('editor') ? generateEditorSection(features.editor) : ''}
${panels.includes('quickActions') ? generateQASection(features.quickActions, imageActions, videoActions) : ''}
${panels.includes('modules') ? generateModulesSection(mods, branding) : ''}
${isTabs && panels.length > 1 ? generateTabLogic(panels) : ''}
})();
`;
}

// ── Section generators ──

function generateEditorSection(cfg) {
  return `
  // ── Full Editor ──
  {
    const outputImg = document.querySelector('#panel-editor .published-asset');
    let projectId = null;

    const callbacks = {
      onCancel: () => {},
      onPublish: (_intent, params) => {
        if (params.asset?.[0]?.data) showAsset(outputImg, params.asset[0].data);
        if (params.projectId) projectId = params.projectId;
      },
      onError: (err) => console.error('Editor error:', err.toString()),
    };

    document.getElementById('btn-create-design')?.addEventListener('click', () => {
      const docConfig = {};${cfg.canvasSize ? `\n      docConfig.canvasSize = ${JSON.stringify(cfg.canvasSize)};` : ''}
      const appConfig = { callbacks };${cfg.selectedCategory ? `\n      appConfig.selectedCategory = ${JSON.stringify(cfg.selectedCategory)};` : ''}
      editor.create(docConfig, appConfig, exportConfig);
    });

    document.getElementById('btn-edit-design')?.addEventListener('click', () => {
      if (!projectId) { alert('Create and save a design first.'); return; }
      editor.edit({ documentId: projectId }, { callbacks }, exportConfig);
    });

    const fileInput = document.getElementById('editor-file-input');
    document.getElementById('btn-create-from-asset')?.addEventListener('click', async () => {
      if (!fileInput?.files[0]) { alert('Select a file first.'); return; }
      const data = await readFileAsBase64(fileInput.files[0]);
      editor.createWithAsset({ asset: { data, dataType: 'base64', type: 'image' } }, { callbacks }, exportConfig);
    });

    document.getElementById('btn-editor-clear')?.addEventListener('click', () => {
      hideAsset(outputImg);
      if (fileInput) fileInput.value = '';
    });
  }`;
}

function generateQASection(cfg, imageActions, videoActions) {
  const actionMap = {
    cropImage: 'cropImage', resizeImage: 'resizeImage', removeBackground: 'removeBackground',
    convertToJPEG: 'convertToJPEG', convertToPNG: 'convertToPNG', convertToSVG: 'convertToSVG',
    generateQRCode: 'generateQRCode',
    cropVideo: 'cropVideo', resizeVideo: 'resizeVideo', trimVideo: 'trimVideo',
    mergeVideos: 'mergeVideos', convertToGIF: 'convertToGIF', convertToMP4: 'convertToMP4',
    animateFromAudio: 'animateFromAudio', captionVideo: 'captionVideo',
  };

  const allActions = [...imageActions, ...videoActions];

  return `
  // ── Quick Actions ──
  {
    const outputImg = document.querySelector('#panel-quick-actions .published-asset');
    const qaFileInput = document.getElementById('qa-file-input');
    const docConfig = {};

    const callbacks = {
      onCancel: () => {},
      onPublish: (_intent, params) => {
        if (params.exportButtonId === 'save-to-app' && params.asset?.[0]?.data) {
          showAsset(outputImg, params.asset[0].data);
        }
      },
      onError: (err) => console.error('QA error:', err.toString()),
    };

    qaFileInput?.addEventListener('change', async (e) => {
      if (e.target.files[0]) {
        docConfig.asset = { data: await readFileAsBase64(e.target.files[0]), dataType: 'base64', type: 'image' };
      }
    });

    const appConfig = { callbacks };
    const modalParams = {};

    ${allActions.map((a) => `document.getElementById('btn-${camelToKebab(a)}')?.addEventListener('click', () => quickAction.${actionMap[a]}(docConfig, appConfig, exportConfig, modalParams));`).join('\n    ')}

    document.getElementById('btn-qa-clear')?.addEventListener('click', () => {
      hideAsset(outputImg);
      if (qaFileInput) { qaFileInput.value = ''; delete docConfig.asset; }
    });
  }`;
}

function generateModulesSection(mods, branding) {
  const parts = [];

  if (mods.generateImage?.enabled) {
    parts.push(`
    // Generate Image
    {
      const outputImg = document.querySelector('#section-generate-image .published-asset');
      const promptInput = document.getElementById('gen-prompt');
      const callbacks = {
        onCancel: () => {},
        onPublish: (_intent, params) => { if (params.asset?.[0]?.data) showAsset(outputImg, params.asset[0].data); },
        onError: (err) => console.error('Generate error:', err.toString()),
      };
      document.getElementById('btn-generate-image')?.addEventListener('click', () => {
        module.createImageFromText({ promptText: promptInput?.value || '', callbacks }, exportConfig);
      });
      document.getElementById('btn-gen-clear')?.addEventListener('click', () => { if (promptInput) promptInput.value = ''; hideAsset(outputImg); });
    }`);
  }

  if (mods.editImage?.enabled) {
    parts.push(`
    // Edit Image
    {
      const outputImg = document.querySelector('#section-edit-image .published-asset');
      const editFileInput = document.getElementById('edit-file-input');
      const callbacks = {
        onCancel: () => {},
        onPublish: (_intent, params) => { if (params.asset?.[0]?.data) showAsset(outputImg, params.asset[0].data); },
        onError: (err) => console.error('Edit error:', err.toString()),
      };
      document.getElementById('btn-edit-image')?.addEventListener('click', async () => {
        if (!editFileInput?.files[0]) { alert('Select an image first.'); return; }
        const data = await readFileAsBase64(editFileInput.files[0]);
        module.editImage({ asset: { data, type: 'image', dataType: 'base64' } }, { callbacks }, exportConfig);
      });
    }`);
  }

  if (mods.templateBrowser?.enabled) {
    const tb = mods.templateBrowser;
    parts.push(`
    // Template Browser
    {
      const outputImg = document.querySelector('#section-template-browser .published-asset');
      const templateExportConfig = [
        { id: 'download', label: 'Download', action: { target: 'download' }, style: { uiType: 'button' } },
        { id: 'save-template', label: 'Save', action: { target: 'publish' }, style: { uiType: 'button' } },
      ];
      const containerConfig = { width: '100%', height: '600px', showDarkerBackgroundForLoader: true, showExpressIconWithText: true };
      document.getElementById('btn-browse-templates')?.addEventListener('click', () => {
        module.startFromContent({
          colorTheme: ${JSON.stringify(branding.theme || 'light')},
          contentBrowseConfig: {
            headerText: ${JSON.stringify(tb.headerText || 'Start from a template')},
            searchQuery: ${JSON.stringify(tb.searchQuery || '')},
            hideSearchBar: ${JSON.stringify(!!tb.hideSearchBar)},
            hideFilters: ${JSON.stringify(!!tb.hideFilters)},
            shortcutPillTerms: ${JSON.stringify(tb.shortcutPillTerms || [])},
            categoriesConfig: [{ category: 'templates' }],
          },
          callbacks: {
            onPublish: (_intent, params) => { if (params.asset?.[0]?.data) showAsset(outputImg, params.asset[0].data); },
            onIntentChange: () => ({ exportConfig: templateExportConfig }),
          },
        }, null, containerConfig);
      });
    }`);
  }

  return `
  // ── Modules ──
  {${parts.join('\n')}
  }`;
}

function generateTabLogic(panels) {
  const panelIdMap = { editor: 'panel-editor', quickActions: 'panel-quick-actions', modules: 'panel-modules' };
  return `
  // ── Tab Navigation ──
  document.querySelectorAll('.demo-nav__tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.demo-nav__tab').forEach(t => t.classList.remove('demo-nav__tab--active'));
      tab.classList.add('demo-nav__tab--active');
      document.querySelectorAll('.demo-panel').forEach(p => p.classList.remove('demo-panel--active'));
      const target = document.getElementById(tab.dataset.panel);
      if (target) target.classList.add('demo-panel--active');
    });
  });`;
}

// ── Utilities ──

function buildExportOptionsLiteral(expCfg) {
  const items = [];
  if (expCfg.download !== false) items.push(`    { id: 'download', label: 'Download', action: { target: 'download' }, style: { uiType: 'button' } }`);
  if (expCfg.editInExpress) items.push(`    { id: 'edit-in-express', label: 'Edit in Adobe Express', action: { target: 'express' }, style: { uiType: 'button' } }`);
  if (expCfg.saveToApp !== false) items.push(`    { id: 'save-to-app', label: 'Save', action: { target: 'publish' }, style: { uiType: 'button' } }`);
  if (expCfg.customButtons) {
    for (const btn of expCfg.customButtons) {
      items.push(`    { id: ${JSON.stringify(btn.id)}, label: ${JSON.stringify(btn.label)}, action: { target: ${JSON.stringify(btn.target || 'publish')} }, style: { uiType: ${JSON.stringify(btn.uiType || 'button')} } }`);
    }
  }
  return `[\n${items.join(',\n')}\n  ]`;
}

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

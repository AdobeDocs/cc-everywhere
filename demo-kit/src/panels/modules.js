import { buildExportConfig } from '../shared/export-config.js';
import { createAssetLoader } from '../shared/asset-loader.js';
import { createCallbacks } from '../shared/callbacks.js';

export function renderModulesPanel(container, sdk, config) {
  const modulesCfg = config.features.modules;
  const panel = document.createElement('div');
  panel.id = 'panel-modules';
  panel.className = 'demo-panel';

  const title = document.createElement('h2');
  title.className = 'demo-panel__title';
  title.textContent = 'Modules';
  panel.appendChild(title);

  const displayArea = document.createElement('div');
  const { callbacks, clearDisplay } = createCallbacks(displayArea);
  const exportConfig = buildExportConfig(config);

  // --- Generate Image ---
  const genCfg = modulesCfg?.generateImage;
  if (genCfg?.enabled) {
    const section = createSection(
      genCfg.label || 'Generate Image',
      genCfg.description || '',
    );

    const field = document.createElement('div');
    field.className = 'demo-field';
    const label = document.createElement('label');
    label.textContent = 'Text prompt';
    const input = document.createElement('input');
    input.type = 'text';
    input.value = genCfg.defaultPrompt || '';
    input.placeholder = 'Describe the image you want to create...';
    field.append(label, input);
    section.appendChild(field);

    const actions = document.createElement('div');
    actions.className = 'demo-actions';

    const genBtn = makeButton('Generate', 'fill', () => {
      const appConfig = {
        promptText: input.value,
        callbacks,
      };
      sdk.module.createImageFromText(appConfig, exportConfig);
    });

    const clearPromptBtn = makeButton('Clear', 'outline--secondary', () => {
      input.value = '';
    });

    actions.append(genBtn, clearPromptBtn);
    section.appendChild(actions);
    panel.appendChild(section);
  }

  // --- Edit Image ---
  const editCfg = modulesCfg?.editImage;
  if (editCfg?.enabled) {
    const section = createSection(
      editCfg.label || 'Edit Image',
      editCfg.description || '',
    );

    const assetLoader = createAssetLoader(section, { accept: 'image/*' });

    const actions = document.createElement('div');
    actions.className = 'demo-actions';
    actions.style.marginTop = '8px';

    const editBtn = makeButton('Edit Image', 'fill', () => {
      const data = assetLoader.getBase64();
      if (!data) {
        alert('Select an image first.');
        return;
      }
      const docConfig = {
        asset: { data, type: 'image', dataType: 'base64' },
      };
      sdk.module.editImage(docConfig, { callbacks }, exportConfig);
    });
    actions.appendChild(editBtn);
    section.appendChild(actions);
    panel.appendChild(section);
  }

  // --- Template Browser ---
  const tbCfg = modulesCfg?.templateBrowser;
  if (tbCfg?.enabled) {
    const section = createSection(
      tbCfg.label || 'Template Browser',
      tbCfg.description || '',
    );

    const templateExportConfig = [
      {
        id: 'download',
        label: 'Download',
        action: { target: 'download' },
        style: { uiType: 'button' },
      },
      {
        id: 'save-template-asset',
        label: 'Save',
        action: { target: 'publish' },
        style: { uiType: 'button' },
      },
    ];

    const containerConfig = {
      width: '100%',
      height: '600px',
      showDarkerBackgroundForLoader: true,
      showExpressIconWithText: true,
    };

    const actions = document.createElement('div');
    actions.className = 'demo-actions';

    const browseBtn = makeButton('Browse Templates', 'fill', () => {
      const appConfig = {
        colorTheme: config.branding?.theme || 'light',
        contentBrowseConfig: {
          headerText: tbCfg.headerText || 'Start from a template',
          searchQuery: tbCfg.searchQuery || '',
          hideSearchBar: tbCfg.hideSearchBar || false,
          hideFilters: tbCfg.hideFilters || false,
          shortcutPillTerms: tbCfg.shortcutPillTerms || [],
          categoriesConfig: [{ category: 'templates' }],
        },
        callbacks: {
          onPublish: (_intent, publishParams) => {
            if (publishParams.asset?.[0]?.data) {
              const img = displayArea.querySelector('.published-asset');
              if (img) {
                img.src = publishParams.asset[0].data;
                img.style.display = 'block';
              }
            }
          },
          onIntentChange: () => ({ exportConfig: templateExportConfig }),
        },
      };
      sdk.module.startFromContent(appConfig, null, containerConfig);
    });

    actions.appendChild(browseBtn);
    section.appendChild(actions);
    panel.appendChild(section);
  }

  // Global clear
  const clearAllBtn = makeButton('Clear Output', 'outline--secondary', () => clearDisplay());
  clearAllBtn.style.marginTop = '16px';
  panel.appendChild(clearAllBtn);

  panel.appendChild(displayArea);
  container.appendChild(panel);
}

function createSection(titleText, descText) {
  const section = document.createElement('div');
  section.style.marginBottom = '32px';

  const h3 = document.createElement('h3');
  h3.style.cssText = 'font-size: 1.15rem; font-weight: 600; margin: 0 0 6px;';
  h3.textContent = titleText;
  section.appendChild(h3);

  if (descText) {
    const p = document.createElement('p');
    p.className = 'demo-panel__description';
    p.textContent = descText;
    section.appendChild(p);
  }
  return section;
}

function makeButton(label, variant, onClick) {
  const btn = document.createElement('button');
  const variantClass = variant === 'fill'
    ? 'spectrum-Button--fill spectrum-Button--accent'
    : variant === 'outline--secondary'
      ? 'spectrum-Button--outline spectrum-Button--secondary'
      : 'spectrum-Button--outline spectrum-Button--primary';
  btn.className = `spectrum-Button ${variantClass} spectrum-Button--sizeM`;
  btn.innerHTML = `<span class="spectrum-Button-label">${label}</span>`;
  btn.addEventListener('click', onClick);
  return btn;
}

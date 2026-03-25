export function buildExportConfig(config) {
  const options = [];

  if (config.exportConfig?.download !== false) {
    options.push({
      id: 'download',
      label: 'Download',
      action: { target: 'download' },
      style: { uiType: 'button' },
    });
  }

  if (config.exportConfig?.editInExpress) {
    options.push({
      id: 'edit-in-express',
      label: 'Edit in Adobe Express',
      action: { target: 'express' },
      style: { uiType: 'button' },
    });
  }

  if (config.exportConfig?.saveToApp !== false) {
    options.push({
      id: 'save-to-app',
      label: 'Save',
      action: { target: 'publish' },
      style: { uiType: 'button' },
    });
  }

  if (config.exportConfig?.customButtons) {
    for (const btn of config.exportConfig.customButtons) {
      options.push({
        id: btn.id,
        label: btn.label,
        action: { target: btn.target || 'publish' },
        style: { uiType: btn.uiType || 'button' },
      });
    }
  }

  return options;
}

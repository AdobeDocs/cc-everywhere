export function createCallbacks(displayContainer) {
  let projectId = null;

  const imgEl = document.createElement('img');
  imgEl.className = 'published-asset';
  imgEl.style.display = 'none';
  displayContainer.appendChild(imgEl);

  return {
    callbacks: {
      onCancel: () => {},
      onPublish: (_intent, publishParams) => {
        if (publishParams.asset?.[0]?.data) {
          imgEl.src = publishParams.asset[0].data;
          imgEl.style.display = 'block';
        }
        if (publishParams.projectId) {
          projectId = publishParams.projectId;
        }
      },
      onError: (err) => {
        console.error('[demo-kit] SDK error:', err.toString());
      },
    },
    getProjectId: () => projectId,
    clearDisplay: () => {
      imgEl.src = '';
      imgEl.style.display = 'none';
    },
  };
}

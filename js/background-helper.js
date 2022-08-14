chrome.storage.local.get(
  {
    enabled: FOCUS_INDICATOR.ENABLED,
    color: FOCUS_INDICATOR.COLOR,
    width: FOCUS_INDICATOR.WIDTH,
  },
  (options) => {
    if (options.enabled) {
      removeStyle();
      addStyle(options);
    } else {
      removeStyle();
    }
  }
);

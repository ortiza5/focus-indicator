const FOCUS_INDICATOR = {
  ENABLED: true,
  COLOR: "#50e3c2",
  WIDTH: "2px",
};

chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get(
    {
      enabled: true,
    },
    (options) => {
      const enabled = !options.enabled;
      let iconPath = "";

      if (enabled) {
        iconPath = "icons/enabled/48.png";
      } else {
        iconPath = "icons/disabled/48.png";
      }

      chrome.action.setIcon({ path: iconPath });

      chrome.storage.local.set(
        {
          enabled,
        },
        () => {
          chrome.tabs.executeScript(null, { file: "js/background-helper.js" });
        }
      );
    }
  );
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set(
    {
      enabled: FOCUS_INDICATOR.ENABLED,
      color: FOCUS_INDICATOR.COLOR,
      width: FOCUS_INDICATOR.WIDTH,
      show: FOCUS_INDICATOR.SHOW,
    },
    () => {}
  );
  chrome.tabs.create({ url: "html/options.html" });
});

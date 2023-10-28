chrome.runtime.onMessage.addListener((message) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];

    if (tab.url.includes("loadboard")) {
      if ("name" in message) {
        chrome.tabs.sendMessage(tab.id, message);
      }
    }
  });
});

chrome.tabs.onUpdated.addListener((_, changeInfo) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const tab = tabs[0];

    if (tab.url.includes("loadboard")) {
      chrome.storage.local.get(["name"]).then((result) => {
        if ("name" in result) {
          if (changeInfo.status === "complete") {
            chrome.tabs.sendMessage(tab.id, result);
          }
        }
      });
    }
  });
});

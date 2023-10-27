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

chrome.tabs.onUpdated.addListener(() => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const tab = tabs[0];

    if (tab.url.includes("loadboard")) {
      chrome.storage.session.get(["name"]).then((result) => {
        if ("name" in result) {
          chrome.tabs.sendMessage(tab.id, result, (response) => {
            console.log(response);
          });
        }
      });
    }
  });
});

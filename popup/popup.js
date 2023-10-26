window.addEventListener("message", (e) => {
  chrome.runtime.sendMessage(e.data);
});

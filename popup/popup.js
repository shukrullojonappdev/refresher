// DOM elements
const notFound = document.getElementById("not-found");
const loginForm = document.getElementById("login-form");
const companyInfo = document.getElementById("company-info");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  document.getElementById("sandbox").contentWindow.postMessage(
    {
      email,
      password,
    },
    "*"
  );
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];

  if (tab.url.includes("loadboard")) {
    notFound.hidden = true;
    loginForm.hidden = false;

    chrome.storage.session.get(["name"]).then((result) => {
      if ("name" in result) {
        loginForm.hidden = true;
        companyInfo.hidden = false;
      }
    });
  }
});

window.addEventListener("message", (e) => {
  chrome.storage.session.set(e.data);
  chrome.runtime.sendMessage(e.data);
  if ("name" in e.data) {
    loginForm.hidden = true;
    companyInfo.hidden = false;
  }
});

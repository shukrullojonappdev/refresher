// DOM elements
const notFound = document.getElementById("not-found");
const loginForm = document.getElementById("login-form");
const companyInfo = document.getElementById("company-info");
const companyName = document.getElementById("company-name");

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

    document.getElementById("exit").addEventListener("click", () => {
      chrome.storage.local.clear(() => {
        companyInfo.hidden = true;
        loginForm.hidden = false;
      });
    });

    chrome.storage.local.get(["name"]).then((result) => {
      if ("name" in result) {
        loginForm.hidden = true;
        companyInfo.hidden = false;
        companyName.innerText = result.name;
      }
    });
  }
});

window.addEventListener("message", (e) => {
  if ("name" in e.data) {
    chrome.storage.local.set(e.data);
    chrome.runtime.sendMessage(e.data);

    loginForm.hidden = true;
    companyInfo.hidden = false;
    companyName.innerText = e.data.name;

    return;
  }

  if ("error" in e.data) {
    document.getElementById("error").innerText = e.data.error;
  }
});

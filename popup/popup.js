function popup() {
  function d(a) {
    var b = "#content:before{ content: none;}";
    a
      ? ((document.querySelector("#contentOfContent").style.opacity = 0.5),
        (b =
          '#content:before { content : " ";position: absolute;top: 50%;left: 50%;width: 50px;height: 50px;border: 5px solid #229ed1;border-color: transparent #229ed1 transparent #229ed1;border-radius: 50%;animation: loader 1s linear infinite;}'))
      : ((document.querySelector("#contentOfContent").style.opacity = 1),
        document.querySelector("header").classList.remove("headerLoading"),
        document.querySelector("#content").classList.remove("contentLoading"));
    a = document.createElement("style");
    a.innerHTML = b;
    b = document.querySelector("script");
    b.parentNode.insertBefore(a, b);
  }
  function e() {
    chrome.runtime.sendMessage({ type: "npp" }, function (a) {
      h(a);
    });
  }
  function h(a) {
    if ("useLoggedIn" == a.type) e();
    else {
      if ("dgl" == a.type)
        return (
          (document.querySelector("#notSignedIn").hidden = !1),
          (document.querySelector("#signedIn").hidden = !0),
          d(!1),
          !0
        );
      if ("logged" == a.type)
        return (
          (document.querySelector("#signedIn").hidden = !1),
          (document.querySelector("#notSignedIn").hidden = !0),
          new Date() > new Date("02/29/2021") &&
            (document.querySelector("#tempMessage").hidden = !0),
          (document.querySelector("#cusEmail").innerHTML = a.email),
          (f = a.uid),
          null != a.sts && k(a.sts),
          d(!1),
          !0
        );
      if ("tw" == a.type)
        return (
          document.querySelector("header").classList.add("headerLoading"),
          document.querySelector("#content").classList.add("contentLoading"),
          !0
        );
      "nac" == a.type && setTimeout(e, 1e3);
    }
  }
  function k(a) {
    var b = document.querySelector("#subStatus"),
      g = "INACTIVE";
    a &&
      ((g = "ACTIVE"),
      (document.querySelector("#notActiveSub").hidden = !0),
      (document.querySelector("#settings").hidden = !1),
      chrome.storage.local.get(["smb"], function (c) {
        "undefined" !== typeof c.smb && null !== c.smb
          ? (document.querySelector("#similarSearchesAllowed").checked = !c.smb)
          : (document.querySelector("#similarSearchesAllowed").checked = !0);
      }),
      document
        .querySelector("#similarSearchesAllowed")
        .addEventListener("change", function (c) {
          chrome.storage.local.set({ smb: !c.currentTarget.checked });
          chrome.runtime.sendMessage({
            type: "smb",
            val: c.currentTarget.checked,
          });
        }),
      (b.style.backgroundColor = "#71d122"));
    b.innerHTML = g;
  }
  var f = null;
  window.addEventListener("DOMContentLoaded", function (a) {
    d(!0);
    e();
    chrome.runtime.onMessage.addListener(function (b, g, c) {
      h(b);
    });
    document
      .getElementById("google_login_button")
      .addEventListener("click", function () {
        d(!0);
        chrome.runtime.sendMessage({ type: "nlg" });
      });
    document.getElementById("activate").addEventListener("click", function () {
      null != f && window.open("https://hvnidea.com/subscribe/" + f);
    });
    document.querySelector("#signOut").addEventListener("click", function () {
      chrome.runtime.sendMessage({ type: "tgl" });
      document.querySelector("#notSignedIn").hidden = !1;
      document.querySelector("#signedIn").hidden = !0;
    });
    document
      .querySelector("#refreshBtn")
      .addEventListener("click", function () {
        window.location.reload();
      });
  });
}
popup();

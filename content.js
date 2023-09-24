var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (p) {
  var B = 0;
  return function () {
    return B < p.length ? { done: !1, value: p[B++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (p) {
  return { next: $jscomp.arrayIteratorImpl(p) };
};
$jscomp.makeIterator = function (p) {
  var B = "undefined" != typeof Symbol && Symbol.iterator && p[Symbol.iterator];
  if (B) return B.call(p);
  if ("number" == typeof p.length) return $jscomp.arrayIterator(p);
  throw Error(String(p) + " is not an iterable or ArrayLike");
};
function theFunction2() {
  // Yangi asosiy div yaratish funksiyasi
  function p() {
    console.log("function p");

    var a = document.createElement("div");
    a.id = "parentForFilters";
    var b = document.createElement("div");
    b.id = "boxForfilters";
    var c = document.createElement("style");
    a.appendChild(c);
    c = document.createElement("div");
    c.id = "hideSettingsButtonContainer";
    c.style =
      "display: none; grid-column: 1/3; text-align: center; padding-bottom: 0.5rem; margin-top:-0.5rem;";
    c.innerHTML =
      "<span id='hideSettingsButton' style='background:none; border:none; cursor:pointer; line-height:1.5rem; padding:0 1rem;user-select: none; color: #077398' type='button' >Hide</span>";
    H.appendChild(c);
    a.appendChild(b);
    document
      .getElementById("hideSettingsButton")
      .addEventListener("click", function (d) {
        (X = !X)
          ? ((d.target.innerHTML = "Hide"),
            (document.getElementById("parentForFilters").style.display =
              "block"),
            (document.getElementById(
              "hideSettingsButtonContainer"
            ).style.gridColumn = "1/3"))
          : ((d.target.innerHTML = "Show"),
            (document.getElementById("parentForFilters").style.display =
              "none"),
            (document.getElementById(
              "hideSettingsButtonContainer"
            ).style.gridColumn = "1/2"));
      });
    H.appendChild(a);
    C = !1;
    a = document.createElement("div");
    a.id = "onBtn";
    b = chrome.runtime.getURL("assets/onBtn2.png");
    a.innerHTML =
      '<img align="right" src="' +
      b +
      '"  height="' +
      q +
      '" width="' +
      q +
      ' style="' +
      F +
      '">';
    b = document.createElement("div");
    b.id = "spanTagParent";
    k("spanTagParent");
    b.style.cssText =
      "display: flex; justify-content: right; align-items: center;";
    b.appendChild(a);
    H.appendChild(b);
  }
  function B() {
    k("parentForFilters");
    k("boxForfilters");
    k("onBtn");
    k("hideSettingsButtonContainer");
    p();
  }

  // Yangilashni bosilganda ikonkani o'zgartirish funksiyasi
  function ra() {
    console.log("function ra");

    setTimeout(function () {
      var a = document.getElementById("onBtn"),
        b = "assets/offBtn.png";
      C ? ((C = !1), (b = "assets/onBtn2.png"), (u = !0)) : ((C = !0), sa());
      b = chrome.runtime.getURL(b);
      a.innerHTML =
        '<img align="right" src="' +
        b +
        '" height="' +
        q +
        '" width="' +
        q +
        '" style="' +
        F +
        '">';
    }, 10);
  }
  function ya() {
    console.log("function ya");

    if (D) return !1;
    if (1 > document.getElementsByClassName("css-17dpd3l").length) {
      if (u) return (u = D = !0), clearInterval(G), (G = null), !1;
      var a = document.getElementsByClassName("css-wck2if").item(0);
      null == a && (a = document.getElementsByClassName("no-results").item(0));
      if (null == a) {
        a = document.getElementsByClassName("wo-card").item(0).parentNode;
        if (-1 == l) {
          m.length = 0;
          m = [];
          l = a.childElementCount;
          for (var b = (m.length = 0); b < a.childElementCount - 1; b++)
            if (
              "css-5tvjft" != a.childNodes[b].className &&
              "css-176mvq0" != a.childNodes[b].className &&
              "css-1ropudr" != a.childNodes[b].className &&
              "css-93d7hd" != a.childNodes[b].className
            ) {
              var c = a.childNodes[b].id,
                d = T(a.childNodes[b]).innerText;
              m.push({ 1: c, 2: d });
            }
        } else {
          D = !0;
          b = !1;
          if (null == a) a = D = !1;
          else {
            c = null;
            for (d = 0; d < a.childElementCount - 1; d++)
              if (
                "css-5tvjft" != a.childNodes[d].className &&
                "css-176mvq0" != a.childNodes[d].className &&
                "css-1ropudr" != a.childNodes[d].className &&
                "css-93d7hd" != a.childNodes[d].className
              ) {
                var f = a.childNodes[d];
                f.childNodes[0].childNodes[0].setAttribute(
                  "style",
                  "background-color: #FFF !important"
                );
                for (
                  var U = f.id, da = T(f), I = da.innerText, ea = !1, r = 0;
                  r < m.length;
                  r++
                )
                  if (U == m[r][1]) {
                    ea = !0;
                    if (I != m[r][2]) {
                      U = parseInt(I.substr(1).replace(/,/g, ""));
                      var za = parseInt(m[r][2].substr(1).replace(/,/g, ""));
                      50 < U - za &&
                        ((b = !0),
                        (da.innerHTML = I + " &#8593;"),
                        f.childNodes[0].childNodes[0].setAttribute(
                          "style",
                          "background-color:rgb(185, 247, 218) !important"
                        ),
                        t ? (c = f) : null == c && (c = f),
                        t && 0 < d && fa(a, d),
                        (m[r][2] = I));
                    }
                    m.push(m.splice(r, 1)[0]);
                    break;
                  }
                ea ||
                  ((b = !0),
                  f.childNodes[0].childNodes[0].setAttribute(
                    "style",
                    "background-color:rgb(185, 247, 218) !important"
                  ),
                  t ? (c = f) : null == c && (c = f),
                  t && 0 < d && fa(a, d));
              }
            if (
              V &&
              null !== c &&
              (c.childNodes[0].childNodes[0].childNodes[0].click(),
              (a = c.childNodes[0].childNodes[1].childElementCount),
              1 < a)
            )
              for (d = 0; d < a; d++)
                c.childNodes[0].childNodes[1].childNodes[
                  d
                ].childNodes[0].click();
            D = !1;
            a = b;
          }
          if (a) return K.play(), ta(), E(), !1;
        }
        Y();
      } else {
        if (
          "There are no matches" == a.innerText ||
          "There are no matches" == a.innerText.slice(0, 20)
        )
          l = 0;
        Y();
        L = !1;
      }
    } else
      L
        ? 3e3 < new Date().getTime() - ha && (Y(), (ha = new Date().getTime()))
        : ((L = !0), (ha = new Date().getTime()));
    Z();
  }
  function ta() {
    console.log("function ta");

    clearInterval(x);
    x = null;
    n.style.backgroundColor = "rgb(255,255,255)";
    y = 100;
    x = setInterval(function () {
      241 > y
        ? (y++,
          (n.style.backgroundColor = "rgb(" + y + ", " + y + ", " + y + ")"))
        : (clearInterval(x),
          (x = null),
          (n.style.backgroundColor = "rgb(255,255,255)"));
    }, 7);
  }
  function T(a) {
    console.log("function T");

    var b = "css-btlcoa",
      c = [0, 1];
    801 > window.innerWidth
      ? (b = "css-2iq9sy")
      : 1201 > window.innerWidth &&
        ((b = "css-i2uha"),
        null == document.getElementsByClassName(b).item(0) &&
          (b = "css-7sk8a6"),
        (c = [1, 0]));
    return a.getElementsByClassName(b).item(0).childNodes[c[0]].childNodes[c[1]]
      .childNodes[0].childNodes[0].childNodes[0].childNodes[0];
  }
  function Y() {
    console.log("function Y");

    M += 1;
    M == N &&
      null != O &&
      (P(O), console.log("dnc"), (M = 0), (N = aa(20, 50)));
    g = document.getElementsByClassName("css-10ebv51").item(0);
    null == g &&
      ((g =
        801 > window.innerWidth
          ? document.getElementsByClassName("css-1gp38wa").item(1)
          : document.getElementsByClassName("css-1gp38wa").item(0)),
      null == g &&
        ((g = document.getElementsByClassName("css-174gqfj").item(0)),
        null == g &&
          (g = document.getElementsByClassName("css-ppc4rt").item(0))));
    P(g);
    ua();
  }
  function sa() {
    console.log("function sa");

    M = 0;
    N = aa(20, 50);
    if (null == O)
      try {
        (O = document.getElementsByClassName("css-1tjbqgb").item(0)),
          document
            .getElementsByClassName("css-1tjbqgb")
            .item(0)
            .addEventListener("click", function () {});
      } catch (a) {
        console.log("Dummy node not found");
      }
    ba ||
      ((ba = !0),
      window.addEventListener("beforeunload", function (a) {
        a.preventDefault();
        a.returnValue = "";
      }));
    clearInterval(G);
    G = null;
    l = -1;
    D = u = !1;
    Z();
  }
  function Z() {
    console.log("function Z");

    var a = e[0];
    z && (a = aa(e[0], e[1]));
    G = setTimeout(ya, a);
  }
  function E() {
    console.log("function E");

    var a = document.getElementById("onBtn");
    if (null != a && C) {
      C = !1;
      u = !0;
      var b = chrome.runtime.getURL("assets/onBtn2.png");
      a.innerHTML =
        '<img align="right" src="' +
        b +
        '"  height="' +
        q +
        '" width="' +
        q +
        '" style="' +
        F +
        '">';
    }
  }
  function ia() {
    console.log("function ia");

    var a = document.getElementById("boxForfilters"),
      b = document.createElement("div");
    b.id = "ratePickerSpan";
    a.appendChild(b);
    ja();
    ka();
    b = document.createElement("span");
    b.className = "departure_date";
    b.id = "switches";
    b.style = "max-width: 200px;";
    var c = "";
    t && (c = "checked");
    b.innerHTML =
      '<div class="form-check"><input type="checkbox" class="check-input swiper" ' +
      c +
      ' id="highlightedOnTopBox" title="Places all highlighted loads at the top of the list"><div style="display: inline-flex;">&nbsp;&nbsp;Show at the top</div></div>                                                                                                                                                                                                                                                                        <div class="form-check"><input type="checkbox" class="check-input swiper" id="ncb" style="margin-right: 0.5rem;" title="Allows to book loads with only one click"><div style="display: inline-flex;">Easy book</div></div>';
    c = document.createElement("span");
    c.id = "switches2";
    c.style = "max-width: 200px;";
    c.innerHTML =
      '<div class="form-check" ><input type="checkbox" id="autoExpand" class="check-input swiper" ' +
      (V ? "checked " : " ") +
      ' style="margin-right: 0.5rem;" title="Automatically expands (shows detailed information about) the first highlighted load"><div style="display: inline-flex; ">Show details</div></div>';
    a.appendChild(b);
    a.appendChild(c);
    document.getElementById("ncb").addEventListener("click", Aa);
    document
      .getElementById("highlightedOnTopBox")
      .addEventListener("click", Ba);
    // document.getElementById("refRateRange").addEventListener("click", Ca);
    document.getElementById("autoExpand").addEventListener("click", la);
    h && document.getElementById("ncb").click();
  }
  function ma() {
    console.log("function ma");

    501 > window.innerWidth
      ? Q(!0)
      : (Q(!1), X || document.getElementById("hideSettingsButton").click());
    if (
      null !== document.getElementById("utility-bar") &&
      null === document.getElementById("onBtn")
    ) {
      try {
        "Next" ===
          document
            .getElementById("utility-bar")
            .getElementsByClassName("css-lz9wxf")[0]
            .innerText.slice(0, 4) &&
          document
            .getElementById("utility-bar")
            .getElementsByClassName("css-hkr77h")
            .item(0)
            .click();
      } catch (a) {}
      k("relayAutoRefresher");
      w = 801 > window.innerWidth ? 0 : 1201 > window.innerWidth ? 1 : 2;
      H.id = "relayAutoRefresher";
      F = "";
      H.style.cssText =
        " display: grid;grid-template-columns: 90% 10%; padding:8px; font-size:14px; line-height:16px;";
      document
        .getElementById("utility-bar")
        .children[0].insertBefore(
          H,
          document.getElementById("utility-bar").children[0].children[0]
        );
      q = "30px";
      A
        ? (B(),
          (g = document.getElementsByClassName("css-1gp38wa").item(0)),
          null == g &&
            ((g = document.getElementsByClassName("css-ppc4rt").item(0)),
            null == g &&
              ((g = document.getElementsByClassName("css-174gqfj").item(0)),
              null == g && console.log("ERROR: 412"))),
          ia(),
          document.getElementById("onBtn").addEventListener("click", ra))
        : chrome.runtime.sendMessage({ type: "6ad1f6as5f1" }, function (a) {});
    }
  }
  function k(a) {
    console.log("function k");

    null != document.getElementById(a) &&
      ((a = document.getElementById(a)), a.parentNode.removeChild(a));
  }
  function ca() {
    console.log("function ca");

    if (1 > document.getElementsByClassName("css-17dpd3l").length) {
      var a = document.getElementsByClassName("wo-card").item(0).parentNode,
        b = "wo-book-button css-njqtsz";
      null == a.getElementsByClassName(b).item(0) &&
        (b = "wo-book-button css-ymgcc0");
      null == a.getElementsByClassName(b).item(0) &&
        (b = "wo-book-button css-1nxp3bi");
      a = $jscomp.makeIterator(a.getElementsByClassName(b));
      for (b = a.next(); !b.done; b = a.next())
        (v = b.value),
          (v.style.backgroundColor = "#002e36"),
          (v.style.color = "#FFF"),
          (v.innerHTML = "ACCEPT"),
          v.addEventListener("click", va);
      return !0;
    }
    return !1;
  }
  function va() {
    console.log("function va");

    var a = null,
      b = 0;
    a = setInterval(function () {
      b++;
      var c = null;
      100 > b
        ? ((c = document.getElementsByClassName("css-1by7sx9").item(0)),
          null == c &&
            ((c = document.getElementsByClassName("css-123rhkh").item(0)),
            null == c &&
              (c = document.getElementsByClassName("css-1v6nfka").item(0))))
        : clearInterval(a);
      null != c
        ? "css-1by7sx9" == c.className ||
          "css-123rhkh" == c.className ||
          "css-1v6nfka" == c.className
          ? (c.click(), clearInterval(a))
          : console.log("ERROR: 419")
        : console.log("ERROR: 420");
    }, 1);
  }
  function ua() {
    console.log("function ua");

    clearInterval(J);
    h &&
      (J = setInterval(function () {
        ca() && clearInterval(J);
      }, 10));
    na();
  }
  function na() {
    console.log("function na");

    clearInterval(R);
    R = setInterval(function () {
      if (null === G) {
        if (
          800 < window.innerWidth &&
          (50 === document.getElementsByClassName("wo-card").length &&
            (document.getElementsByClassName(
              "wo-card"
            )[0].parentNode.style.cssText = "padding-bottom: 50px;"),
          1200 < window.innerWidth &&
            21 > document.getElementsByClassName("wo-card").length)
        )
          try {
            0 < document.getElementsByClassName("css-1eeyk4n").length
              ? (document.getElementsByClassName(
                  "css-1eeyk4n"
                )[0].childNodes[0].style.cssText = "padding-bottom:50px;")
              : 0 < document.getElementsByClassName("css-1r4y4sy").length &&
                (document.getElementsByClassName(
                  "css-1r4y4sy"
                )[0].childNodes[0].style.cssText = "padding-bottom:70px;");
          } catch (a) {}
        clearInterval(R);
      }
    }, 1e3);
  }
  function Aa() {
    console.log("function Aa");

    document.getElementById("ncb").checked ? ((h = !0), ca()) : ((h = !1), Y());
  }
  function fa(a, b) {
    console.log("function fa");

    var c = 0;
    if (
      "css-5tvjft" == a.childNodes[0].className ||
      "css-176mvq0" == a.childNodes[0].className ||
      "css-1ropudr" == a.childNodes[0].className
    )
      c = 1;
    a.insertBefore(a.childNodes[b], a.childNodes[c]);
  }
  function Ba() {
    console.log("function Ba");

    t = !t;
  }
  function Ca() {
    console.log("function Ca");

    (z = !z) ? oa() : ja();
    pa();
  }
  function oa() {
    console.log("function oa");

    z = !0;
    k("rfrrtsldr");
    -1 == e[1] && (e = [500, 200]);
    document.querySelector("#ratePickerSpan").innerHTML =
      '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #077398;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important;font-size:0.9rem;}}</style>            <section class="range-sliders"><input id="lwrsldr" type="range" max="10" min="0.1" step="0.1" value="2.0"><input id="pprsldr" type="range" max="10" min="0.1" step="0.1" value="5.0"></section><div><p id="rrr" align="center">Range: 2X - 5X</p></div>';
    W();
    document.getElementById("lwrsldr").addEventListener("input", wa);
    document.getElementById("pprsldr").addEventListener("input", wa);
  }
  function ja() {
    console.log("function ja");

    z = !1;
    k("lwrsldr");
    k("pprsldr");
    document.querySelector("#ratePickerSpan").innerHTML =
      '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #077398;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important; font-size:0.9rem;}}</style>  <section class="range-sliders"><input id="rfrrtsldr" type="range" max="10" min="0.1" step="0.1" value="5" style = "width: 100%;"></input> </section><div><p id="rrr" align="center">Refresh Rate: 5X</p></div>';
    W();
    document.getElementById("rfrrtsldr").addEventListener("input", xa);
  }
  function xa() {
    console.log("function xa");

    var a = document.getElementById("rfrrtsldr").value;
    e[0] = 1e3 / a;
    pa();
    document.getElementById("rrr").innerHTML = "Refresh Rate: " + a + "X";
  }
  function wa() {
    console.log("function wa");

    var a = parseFloat(document.getElementById("lwrsldr").value),
      b = parseFloat(document.getElementById("pprsldr").value);
    if (a > b) {
      var c = b;
      b = a;
      a = c;
    }
    e = [1e3 / a, 1e3 / b];
    document.getElementById("rrr").innerHTML = "Range: " + a + "X - " + b + "X";
    pa();
  }
  function ka() {
    console.log("function ka");

    chrome.storage.local.get(["refreshRateRangeTypeIsRange"], function (a) {
      var b = a.refreshRateRangeTypeIsRange;
      null != a.refreshRateRangeTypeIsRange &&
        chrome.storage.local.get(["refRate"], function (c) {
          null != c.refRate &&
            ((e = c.refRate),
            b
              ? ((document.querySelector("#refRateRange").checked = !0), oa())
              : ja(),
            W());
        });
    });
  }
  function W() {
    console.log("function W");

    if (z) {
      var a = +(Math.round(1e3 / e[0] + "e+1") + "e-1"),
        b = +(Math.round(1e3 / e[1] + "e+1") + "e-1");
      document.querySelector("#lwrsldr").value = a;
      document.querySelector("#pprsldr").value = b;
      document.getElementById("rrr").innerHTML =
        "Range: " + a + "X - " + b + "X";
    } else
      (a = +(Math.round(1e3 / e[0] + "e+1") + "e-1")),
        (document.querySelector("#rfrrtsldr").value = a),
        (document.querySelector("#rrr").innerHTML = "Refresh Rate: " + a + "X");
  }
  function pa() {
    console.log("function Pa");

    chrome.storage.local.set({ refRate: e, refreshRateRangeTypeIsRange: z });
  }
  function la() {
    console.log("function La");

    V = !V;
  }
  function aa(a, b) {
    console.log("function aa");

    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a) + a);
  }
  function P(a) {
    console.log("function P");

    var b = new MouseEvent("mousedown", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      }),
      c = new MouseEvent("click", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      }),
      d = new MouseEvent("mouseup", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      });
    a.dispatchEvent(new MouseEvent("mouseover"));
    S = !0;
    a.dispatchEvent(b);
    a.dispatchEvent(c);
    a.dispatchEvent(d);
  }
  function Q(a) {
    console.log("function Q");

    setTimeout(function () {
      try {
        document.getElementById("hideSettingsButtonContainer").style.display = a
          ? "block"
          : "none";
      } catch (b) {}
    }, 200);
  }
  var u = !1,
    G = null,
    C = !1,
    L = !1,
    ha = null,
    l = -1,
    K = new Audio(chrome.runtime.getURL("assets/n.mp3")),
    m = [],
    D = !1,
    A = !1,
    F = "margin-left: 5px; margin-right: 10px;",
    z = !1,
    x = null,
    n = document.getElementsByClassName("background-mode__light").item(0),
    y = 0,
    g = null,
    h = !1,
    J = null,
    e = [200, -1],
    q = null,
    H = document.createElement("div"),
    qa = !1,
    t = !1,
    M = 0,
    N = 50,
    O = null,
    S = !1,
    ba = !1,
    V = !1,
    R = null,
    w = null,
    X = !0;

  // * Checker
  // chrome.runtime.onMessage.addListener(function (a, b, c) {
  //   console.log(a);

  //   "kr" === a.k &&
  //     (!a.s
  //       ? (B(),
  //         document
  //           .getElementById("onBtn")
  //           .addEventListener("click", function () {
  //             chrome.runtime.sendMessage({ type: "openPopupHtml" });
  //           }),
  //         A && (z = A = !1))
  //       : A || (k("relayAutoRefresher"), (A = !0), ma()));
  // });

  setTimeout(() => {
    A || (k("relayAutoRefresher"), (A = !0), ma());
  }, 1000);

  document.body.addEventListener("mouseup", function () {
    1 == S
      ? (S = !1)
      : ((qa = C),
        setTimeout(function () {
          qa && E();
        }, 50),
        setTimeout(function () {
          0 < document.getElementsByClassName("css-17dpd3l").length &&
            (h && ua(), na());
        }, 30),
        setTimeout(function () {
          ma();
        }, 200));
  });
  document.body.onkeyup = function (a) {
    32 == a.keyCode ? E() : 192 == a.keyCode && ra();
  };
  window.addEventListener("resize", function () {
    0 === w
      ? 1200 < window.innerWidth
        ? ((w = 2), E())
        : 800 < window.innerWidth && ((w = 1), E())
      : 1 === w
      ? 801 > window.innerWidth
        ? ((w = 0), E())
        : 1200 < window.innerWidth && ((w = 2), E())
      : 2 === w &&
        (801 > window.innerWidth
          ? ((w = 0), E())
          : 1201 > window.innerWidth && ((w = 1), E()));
    ma();
  });
}
function theFunction() {
  function p() {
    k("parentForFilters");
    k("boxForfilters");
    k("onBtn");
    var a = document.createElement("div");
    a.id = "parentForFilters";
    var b = document.createElement("div");
    b.id = "boxForfilters";
    var c = document.createElement("style");
    c.innerText =
      "#boxForfilters{display: grid;grid-template-columns: 210px 210px 100%;} #ratePickerSpan{max-width: 170px;} @media only screen and (max-width: 670px) {#boxForfilters{grid-template-columns: 1fr 1fr;} #ratePickerSpan{grid-column: 1/2;} #switches, #switches2{grid-column: 2/3 } } @media only screen and (max-width: 450px) {#ratePickerSpan{max-width: 130px;} #boxForfilters{grid-template-columns: 130px 1fr;}}";
    a.appendChild(c);
    a.appendChild(b);
    q.appendChild(a);
    u = !1;
    a = document.createElement("div");
    a.id = "onBtn";
    b = chrome.runtime.getURL("assets/onBtn.png");
    a.innerHTML =
      '<img align="right" src="' +
      b +
      '"  height="' +
      e +
      '" width="' +
      e +
      ' style="' +
      D +
      '">';
    q.appendChild(a);
  }
  function B() {
    setTimeout(function () {
      var a = document.getElementById("onBtn"),
        b = "assets/offBtn.png";
      u ? ((u = !1), (b = "assets/onBtn.png"), (P = !0)) : ((u = !0), Y());
      b = chrome.runtime.getURL(b);
      a.innerHTML =
        '<img align="right" src="' +
        b +
        '" height="' +
        e +
        '" width="' +
        e +
        '" style="' +
        D +
        '">';
    }, 10);
  }
  function ra() {
    if (K) return !1;
    if (1 > document.getElementsByClassName("css-17dpd3l").length) {
      if (P) return (P = K = !0), clearInterval(Q), (Q = null), !1;
      var a = document.getElementsByClassName("css-wck2if").item(0);
      null == a && (a = document.getElementsByClassName("no-results").item(0));
      if (null == a) {
        a = document.getElementById("relayAutoRefresher").nextSibling;
        if (-1 == L) {
          l.length = 0;
          l = [];
          L = a.childElementCount;
          for (var b = (l.length = 0); b < a.childElementCount - 1; b++)
            if (
              "css-5tvjft" != a.childNodes[b].className &&
              "css-176mvq0" != a.childNodes[b].className &&
              "css-1ropudr" != a.childNodes[b].className
            ) {
              var c = a.childNodes[b].id,
                d = ta(a.childNodes[b]).innerText;
              l.push({ 1: c, 2: d });
            }
        } else {
          K = !0;
          b = !1;
          if (null == a) a = K = !1;
          else {
            c = null;
            for (d = 0; d < a.childElementCount - 1; d++)
              if (
                "css-5tvjft" != a.childNodes[d].className &&
                "css-176mvq0" != a.childNodes[d].className &&
                "css-1ropudr" != a.childNodes[d].className
              ) {
                var f = a.childNodes[d];
                f.childNodes[0].childNodes[0].setAttribute(
                  "style",
                  "background-color: #FFF !important"
                );
                for (
                  var U = f.id, da = ta(f), I = da.innerText, ea = !1, r = 0;
                  r < l.length;
                  r++
                )
                  if (U == l[r][1]) {
                    ea = !0;
                    if (I != l[r][2]) {
                      U = parseInt(I.substr(1).replace(/,/g, ""));
                      var za = parseInt(l[r][2].substr(1).replace(/,/g, ""));
                      50 < U - za &&
                        ((b = !0),
                        (da.innerHTML = I + " &#8593;"),
                        f.childNodes[0].childNodes[0].setAttribute(
                          "style",
                          "background-color:#bff7ff !important"
                        ),
                        t ? (c = f) : null == c && (c = f),
                        t && 0 < d && fa(a, d),
                        (l[r][2] = I));
                    }
                    l.push(l.splice(r, 1)[0]);
                    break;
                  }
                ea ||
                  ((b = !0),
                  f.childNodes[0].childNodes[0].setAttribute(
                    "style",
                    "background-color:#bff7ff !important"
                  ),
                  t ? (c = f) : null == c && (c = f),
                  t && 0 < d && fa(a, d));
              }
            if (
              R &&
              null !== c &&
              (c.childNodes[0].childNodes[0].childNodes[0].click(),
              (a = c.childNodes[0].childNodes[1].childElementCount),
              1 < a)
            )
              for (d = 0; d < a; d++)
                c.childNodes[0].childNodes[1].childNodes[
                  d
                ].childNodes[0].click();
            K = !1;
            a = b;
          }
          if (a) return ha.play(), ya(), Z(), !1;
        }
        T();
      } else {
        if (
          "There are no matches" == a.innerText ||
          "There are no matches" == a.innerText.slice(0, 20)
        )
          L = 0;
        T();
        G = !1;
      }
    } else
      G
        ? 1500 < new Date().getTime() - C && (T(), (C = new Date().getTime()))
        : ((G = !0), (C = new Date().getTime()));
    sa();
  }
  function ya() {
    clearInterval(F);
    F = null;
    z.style.backgroundColor = "rgb(255,255,255)";
    x = 100;
    F = setInterval(function () {
      241 > x
        ? (x++,
          (z.style.backgroundColor = "rgb(" + x + ", " + x + ", " + x + ")"))
        : (clearInterval(F),
          (F = null),
          (z.style.backgroundColor = "rgb(255,255,255)"));
    }, 7);
  }
  function ta(a) {
    var b = "css-btlcoa",
      c = [0, 1];
    801 > window.innerWidth
      ? (b = "css-2iq9sy")
      : 1201 > window.innerWidth &&
        ((b = "css-i2uha"),
        null == document.getElementsByClassName(b).item(0) &&
          (b = "css-7sk8a6"),
        (c = [1, 0]));
    return a.getElementsByClassName(b).item(0).childNodes[c[0]].childNodes[c[1]]
      .childNodes[0].childNodes[0].childNodes[0].childNodes[0];
  }
  function T() {
    N += 1;
    N == O &&
      null != S &&
      (aa(S), console.log("dnc"), (N = 0), (O = la(20, 50)));
    n =
      801 > window.innerWidth
        ? document.getElementsByClassName("css-1gp38wa").item(1)
        : document.getElementsByClassName("css-1gp38wa").item(0);
    null == n &&
      ((n = document.getElementsByClassName("css-174gqfj").item(0)),
      null == n && (n = document.getElementsByClassName("css-ppc4rt").item(0)));
    aa(n);
    na();
  }
  function Y() {
    N = 0;
    O = la(20, 50);
    if (null == S)
      try {
        (S = document.getElementsByClassName("css-1tjbqgb").item(0)),
          document
            .getElementsByClassName("css-1tjbqgb")
            .item(0)
            .addEventListener("click", function () {});
      } catch (a) {
        console.log("Dummy node not found");
      }
    w = new Date();
    V ||
      ((V = !0),
      window.addEventListener("beforeunload", function (a) {
        X = new Date();
        console.log(Math.round((X - w) / 1e3) + " seconds");
        a.preventDefault();
        a.returnValue = "";
      }));
    clearInterval(Q);
    Q = null;
    L = -1;
    K = P = !1;
    sa();
  }
  function sa() {
    var a = h[0];
    A && (a = la(h[0], h[1]));
    Q = setTimeout(ra, a);
  }
  function Z() {
    var a = document.getElementById("onBtn");
    if (null != a && u) {
      u = !1;
      P = !0;
      var b = chrome.runtime.getURL("assets/onBtn.png");
      a.innerHTML =
        '<img align="right" src="' +
        b +
        '"  height="' +
        e +
        '" width="' +
        e +
        '" style="' +
        D +
        '">';
    }
  }
  function E() {
    var a = document.getElementById("boxForfilters"),
      b = document.createElement("div");
    b.id = "ratePickerSpan";
    a.appendChild(b);
    oa();
    wa();
    b = document.createElement("span");
    b.className = "departure_date";
    b.id = "switches";
    b.style = "max-width: 200px;";
    var c = "";
    t && (c = "checked");
    b.innerHTML =
      '<div class="form-check"><input type="checkbox" class="check-input swiper" ' +
      c +
      ' id="highlightedOnTopBox" title="Places all highlighted loads at the top of the list"><div style="display: inline-flex;">&nbsp;&nbsp;Highlighted at the top</div></div>                                                                                                                                                                                                                                                                        <div class="form-check"><input type="checkbox" class="check-input swiper" id="ncb" style="margin-right: 0.5rem;" title="Allows to book loads with only one click"><div style="display: inline-flex;">Click-to-book</div></div>';
    c = document.createElement("span");
    c.id = "switches2";
    c.style = "max-width: 200px;";
    c.innerHTML =
      ' <div class="form-check" ><input type="checkbox" id="refRateRange" class="check-input swiper" style="margin-right: 0.5rem;" title="Refresh Rate Range"><div style="display: inline-flex; ">Refresh Range</div></div>                                                                <div class="form-check" ><input type="checkbox" id="autoExpand" class="check-input swiper" ' +
      R
        ? "checked "
        : '  style="margin-right: 0.5rem;" title="Automatically expands (shows detailed information about) the first highlighted load"><div style="display: inline-flex; ">Auto Expand</div></div>';
    a.appendChild(b);
    a.appendChild(c);
    document.getElementById("ncb").addEventListener("click", Aa);
    document
      .getElementById("highlightedOnTopBox")
      .addEventListener("click", Ba);
    document.getElementById("refRateRange").addEventListener("click", Ca);
    document.getElementById("autoExpand").addEventListener("click", pa);
    y && document.getElementById("ncb").click();
  }
  function ia(a) {
    setTimeout(function () {
      q.id = "relayAutoRefresher";
      D = "";
      q.style.cssText =
        "display: grid;grid-template-columns: 90% 8%; padding:8px";
      var b = document.getElementById("base-container-body").childNodes[0]
        .childNodes[0];
      0 < document.getElementsByClassName("css-86j7sx").length
        ? b.parentElement.insertBefore(q, b.nextSibling.nextSibling.nextSibling)
        : 0 < document.getElementsByClassName("css-dsf1ob").length
        ? "css-1bpb3sf" ==
          document.getElementById("base-container-body").childNodes[0]
            .childNodes[1].className
          ? b.parentElement.insertBefore(
              q,
              b.nextSibling.nextSibling.nextSibling
            )
          : b.parentElement.insertBefore(q, b.nextSibling.nextSibling)
        : (H++, 30 > H && ia(200));
      J = document.getElementsByClassName("css-1dyp3a5").item(0);
      null == J && (J = document.getElementsByClassName("css-18wuixk").item(0));
      null == J
        ? ma()
        : ((e = J.offsetHeight - 12),
          chrome.runtime.sendMessage({ type: "6ad1f6as5f1" }, function (c) {}));
    }, a);
  }
  function ma() {
    for (
      var a = document.getElementsByClassName("css-1tjbqgb").item(0).children,
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b];
      "Search" == c.innerText && ca(c);
    }
  }
  function k(a) {
    null != document.getElementById(a) &&
      ((a = document.getElementById(a)), a.parentNode.removeChild(a));
  }
  function ca(a) {
    M ||
      ((M = !M),
      a.addEventListener("click", function () {
        null == document.getElementById("boxForfilters") && ia(100);
      }));
  }
  function va() {
    if (1 > document.getElementsByClassName("css-17dpd3l").length) {
      var a = document.getElementById("relayAutoRefresher").nextSibling,
        b = "wo-book-button css-njqtsz";
      null == a.getElementsByClassName(b).item(0) &&
        (b = "wo-book-button css-ymgcc0");
      null == a.getElementsByClassName(b).item(0) &&
        (b = "wo-book-button css-1nxp3bi");
      a = $jscomp.makeIterator(a.getElementsByClassName(b));
      for (b = a.next(); !b.done; b = a.next())
        (v = b.value),
          (v.style.backgroundColor = "#03505b"),
          (v.style.color = "#FFF"),
          (v.innerHTML = "ACCEPT"),
          v.addEventListener("click", ua);
      return !0;
    }
    return !1;
  }
  function ua() {
    var a = null,
      b = 0;
    a = setInterval(function () {
      b++;
      var c = null;
      100 > b
        ? ((c = document.getElementsByClassName("css-1by7sx9").item(0)),
          null == c &&
            ((c = document.getElementsByClassName("css-123rhkh").item(0)),
            null == c &&
              (c = document.getElementsByClassName("css-1v6nfka").item(0))))
        : clearInterval(a);
      null != c
        ? "css-1by7sx9" == c.className ||
          "css-123rhkh" == c.className ||
          "css-1v6nfka" == c.className
          ? (c.click(), clearInterval(a))
          : console.log("ERROR: 419")
        : console.log("ERROR: 420");
    }, 1);
  }
  function na() {
    clearInterval(g);
    y &&
      (g = setInterval(function () {
        va() && clearInterval(g);
      }, 10));
  }
  function Aa() {
    document.getElementById("ncb").checked ? ((y = !0), va()) : ((y = !1), T());
  }
  function fa(a, b) {
    var c = 0;
    if (
      "css-5tvjft" == a.childNodes[0].className ||
      ("css-176mvq0" == a.childNodes[0].className) |
        ("css-1ropudr" == a.childNodes[0].className)
    )
      c = 1;
    a.insertBefore(a.childNodes[b], a.childNodes[c]);
  }
  function Ba() {
    t = !t;
  }
  function Ca() {
    (A = !A)
      ? (k("rfrrtsldr"),
        -1 == h[1] && ((h = [500, 200]), W()),
        (document.querySelector("#ratePickerSpan").innerHTML =
          '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #34688c;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important;font-size:0.9rem;}}</style>            <section class="range-sliders"><input id="lwrsldr" type="range" max="10" min="0.1" step="0.1" value="2.0"><input id="pprsldr" type="range" max="10" min="0.1" step="0.1" value="5.0"></section><div><p id="rrr" align="center">Range: 2X - 5X</p></div>'),
        ka(),
        document.getElementById("lwrsldr").addEventListener("input", xa),
        document.getElementById("pprsldr").addEventListener("input", xa))
      : oa();
  }
  function oa() {
    k("lwrsldr");
    k("pprsldr");
    document.querySelector("#ratePickerSpan").innerHTML =
      '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #34688c;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important; font-size:0.9rem;}}</style>  <section class="range-sliders"><input id="rfrrtsldr" type="range" max="10" min="0.1" step="0.1" value="5" style = "width: 100%;"></input> </section><div><p id="rrr" align="center">Refresh Rate: 5X</p></div>';
    ka();
    document.getElementById("rfrrtsldr").addEventListener("input", ja);
  }
  function ja() {
    var a = document.getElementById("rfrrtsldr").value;
    h[0] = 1e3 / a;
    W();
    document.getElementById("rrr").innerHTML = "Refresh Rate: " + a + "X";
  }
  function xa() {
    var a = parseFloat(document.getElementById("lwrsldr").value),
      b = parseFloat(document.getElementById("pprsldr").value);
    if (a > b) {
      var c = b;
      b = a;
      a = c;
    }
    h = [1e3 / a, 1e3 / b];
    document.getElementById("rrr").innerHTML = "Range: " + a + "X - " + b + "X";
    W();
  }
  function wa() {
    chrome.storage.local.get(["refreshRateRangeTypeIsRange"], function (a) {
      null != a.refreshRateRangeTypeIsRange &&
        chrome.storage.local.get(["refRate"], function (b) {
          null != b.refRate &&
            ((h = b.refRate),
            a.refreshRateRangeTypeIsRange
              ? document.querySelector("#refRateRange").click()
              : ka());
        });
    });
  }
  function ka() {
    if (A) {
      var a = +(Math.round(1e3 / h[0] + "e+1") + "e-1"),
        b = +(Math.round(1e3 / h[1] + "e+1") + "e-1");
      document.querySelector("#lwrsldr").value = a;
      document.querySelector("#pprsldr").value = b;
      document.getElementById("rrr").innerHTML =
        "Range: " + a + "X - " + b + "X";
    } else
      (a = +(Math.round(1e3 / h[0] + "e+1") + "e-1")),
        (document.querySelector("#rfrrtsldr").value = a),
        (document.querySelector("#rrr").innerHTML = "Refresh Rate: " + a + "X");
  }
  function W() {
    chrome.storage.local.set({ refRate: h, refreshRateRangeTypeIsRange: A });
  }
  function pa() {
    R = !R;
  }
  function la(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a) + a);
  }
  function aa(a) {
    var b = new MouseEvent("mousedown", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      }),
      c = new MouseEvent("click", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      }),
      d = new MouseEvent("mouseup", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      });
    a.dispatchEvent(new MouseEvent("mouseover"));
    ba = !0;
    a.dispatchEvent(b);
    a.dispatchEvent(c);
    a.dispatchEvent(d);
  }
  var P = !1,
    Q = null,
    u = !1,
    G = !1,
    C = null,
    L = -1,
    ha = new Audio(chrome.runtime.getURL("assets/n.mp3")),
    l = [],
    K = !1,
    m = !1,
    D = "margin-left: 5px; margin-right: 10px;",
    A = !1,
    F = null,
    z = document.getElementsByClassName("background-mode__light").item(0),
    x = 0,
    n = null,
    y = !1,
    g = null,
    h = [200, -1],
    J = null,
    e = null,
    q = document.createElement("div"),
    H = 0,
    qa = !1,
    t = !1,
    M = !1,
    N = 0,
    O = 50,
    S = null,
    ba = !1,
    V = !1,
    R = !1;
  chrome.runtime.onMessage.addListener(function (a, b, c) {
    "kr" === a.k &&
      (!a.s
        ? (p(),
          document
            .getElementById("onBtn")
            .addEventListener("click", function () {
              chrome.runtime.sendMessage({ type: "openPopupHtml" });
            }),
          m && (A = m = !1))
        : m ||
          (p(),
          (m = !0),
          (n = document.getElementsByClassName("css-1gp38wa").item(0)),
          null == n &&
            ((n = document.getElementsByClassName("css-ppc4rt").item(0)),
            null == n &&
              ((n = document.getElementsByClassName("css-174gqfj").item(0)),
              null == n && console.log("ERROR: 412"))),
          E(),
          document.getElementById("onBtn").addEventListener("click", B)));
  });
  var w, X;
  document.body.addEventListener("mouseup", function () {
    1 == ba
      ? (ba = !1)
      : ((qa = u),
        setTimeout(function () {
          qa && Z();
        }, 50),
        setTimeout(function () {
          y &&
            0 < document.getElementsByClassName("css-17dpd3l").length &&
            na();
        }, 30));
  });
  document.body.onkeyup = function (a) {
    32 == a.keyCode ? Z() : 192 == a.keyCode && B();
  };
  ia(200);
  document
    .querySelectorAll(".css-14dbfau")
    .item(2)
    .addEventListener("click", function () {
      ca(document.querySelectorAll(".css-14dbfau").item(1));
    });
  document
    .querySelectorAll(".css-14dbfau")
    .item(0)
    .addEventListener("click", function () {
      ca(document.querySelectorAll(".css-14dbfau").item(1));
    });
}
function mainFunction() {
  0 < document.querySelectorAll("#multi-work-container").length
    ? theFunction2()
    : theFunction();
}
setTimeout(function () {
  mainFunction();
}, 100);

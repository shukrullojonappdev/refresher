var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (w) {
  var F = 0;
  return function () {
    return F < w.length ? { done: !1, value: w[F++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (w) {
  return { next: $jscomp.arrayIteratorImpl(w) };
};
$jscomp.makeIterator = function (w) {
  var F = "undefined" != typeof Symbol && Symbol.iterator && w[Symbol.iterator];
  if (F) return F.call(w);
  if ("number" == typeof w.length) return $jscomp.arrayIterator(w);
  throw Error(String(w) + " is not an iterable or ArrayLike");
};

let isLogined = false;

function run3(w) {
  function F() {
    var d = document.createElement("div");
    d.id = "parentForFilters";
    var f = document.createElement("div");
    f.id = "boxForfilters";
    var g = document.createElement("style");
    g.innerText =
      ".swiper{accent-color:#077398} #boxForfilters{display: grid;grid-template-columns: 210px 210px 1fr;} #ratePickerSpan{max-width: 170px;} @media only screen and (max-width: 670px) {#boxForfilters{grid-template-columns: 1fr 1fr;} #ratePickerSpan{grid-column: 1/2;} #switches, #switches2{grid-column: 2/3 } } @media only screen and (max-width: 450px) {#ratePickerSpan{max-width: 130px;} #boxForfilters{grid-template-columns: 130px 1fr;}}";
    d.appendChild(g);
    g = document.createElement("div");
    g.id = "hideSettingsButtonContainer";
    g.style =
      "display: none; grid-column: 1/3; text-align: center; padding-bottom: 0.5rem; margin-top:-0.5rem;";
    g.innerHTML =
      "<span id='hideSettingsButton' style='background:none; border:none; cursor:pointer; line-height:1.5rem; padding:0 1rem;user-select: none; color: #077398' type='button' >Hide</span>";
    M.appendChild(g);
    d.appendChild(f);
    document
      .getElementById("hideSettingsButton")
      .addEventListener("click", function (q) {
        (K = !K)
          ? ((q.target.innerHTML = "Hide"),
            (document.getElementById("parentForFilters").style.display =
              "block"),
            (document.getElementById(
              "hideSettingsButtonContainer"
            ).style.gridColumn = "1/3"))
          : ((q.target.innerHTML = "Show"),
            (document.getElementById("parentForFilters").style.display =
              "none"),
            (document.getElementById(
              "hideSettingsButtonContainer"
            ).style.gridColumn = "1/2"));
      });
    M.appendChild(d);
    L = !1;
    d = document.createElement("div");
    d.id = "onBtn";
    f = chrome.runtime.getURL("assets/onBtn2.png");
    d.innerHTML =
      '<img align="right" src="' +
      f +
      '"  height="' +
      x +
      '" width="' +
      x +
      ' style="' +
      N +
      '">';
    f = document.createElement("div");
    f.id = "spanTagParent";
    t("spanTagParent");
    f.style.cssText =
      "display: flex; justify-content: right; align-items: center;";
    f.appendChild(d);
    M.appendChild(f);
  }
  function la() {
    t("parentForFilters");
    t("boxForfilters");
    t("onBtn");
    t("hideSettingsButtonContainer");
    F();
  }
  function oa() {
    setTimeout(function () {
      var d = document.getElementById("onBtn"),
        f = "assets/offBtn.png";
      L ? ((L = !1), (f = "assets/onBtn2.png"), (R = !0)) : ((L = !0), va());
      f = chrome.runtime.getURL(f);
      d.innerHTML =
        '<img align="right" src="' +
        f +
        '" height="' +
        x +
        '" width="' +
        x +
        '" style="' +
        N +
        '">';
    }, 10);
  }
  function Aa() {
    if (O) return !1;
    if (1 > document.getElementsByClassName("css-17dpd3l").length) {
      if (R) return (R = O = !0), clearInterval(Z), (Z = null), !1;
      var d = document.getElementsByClassName("css-wck2if").item(0);
      null == d && (d = document.getElementsByClassName("no-results").item(0));

      if (null == d) {
        d = document.getElementsByClassName("load-list").item(0);
        if (
          document.getElementById("autoBook")?.checked &&
          d.childElementCount > 0
        ) {
          P.play();
          wa();
          u();
          d.childNodes[0].childNodes[0].click();
          const inter = setInterval(() => {
            if (
              document.getElementsByClassName("css-1bbunrx")[0].innerText ===
                document
                  .getElementsByClassName("load-card__selected")[0]
                  .getElementsByClassName("css-iw1w20")[0].innerText &&
              document.getElementsByClassName("wo-book-button")[0]
            ) {
              document.getElementsByClassName("wo-book-button")[0].click();
              clearInterval(inter);
            }
          }, 500);
          return !1;
        }
        if (-1 == G) {
          p.length = 0;
          p = [];
          G = d.childElementCount;
          for (var f = (p.length = 0); f < d.childElementCount; f++)
            if ("" !== d.childNodes[f].childNodes[0].id) {
              var g = d.childNodes[f].childNodes[0].id,
                q = aa(d.childNodes[f]).innerText;
              p.push({ 1: g, 2: q });
            }
        } else {
          O = !0;
          f = !1;
          if (null == d) d = O = !1;
          else {
            g = null;
            for (q = 0; q < d.childElementCount; q++)
              if ("" !== d.childNodes[q].childNodes[0].id) {
                var y = d.childNodes[q].childNodes[0];
                "load-card__selected" !== y.parentNode.className &&
                  (y.parentNode.className = "load-card");
                for (
                  var A = y.id, X = aa(y), c = X.innerText, a = !1, b = 0;
                  b < p.length;
                  b++
                )
                  if (A == p[b][1]) {
                    a = !0;
                    if (c != p[b][2]) {
                      A = parseInt(c.substr(1).replace(/,/g, ""));
                      var e = parseInt(p[b][2].substr(1).replace(/,/g, ""));
                      50 < A - e &&
                        ((f = !0),
                        (X.innerHTML = c + " &#8593;"),
                        y.parentElement.setAttribute(
                          "style",
                          "background-color:rgb(185, 247, 218) !important"
                        ),
                        h ? (g = y) : null == g && (g = y),
                        h &&
                          0 < q &&
                          d.insertBefore(d.childNodes[q], d.childNodes[0]),
                        (p[b][2] = c));
                    }
                    p.push(p.splice(b, 1)[0]);
                    break;
                  }
                a ||
                  ((f = !0),
                  y.parentElement.setAttribute(
                    "style",
                    "background-color:rgb(185, 247, 218) !important"
                  ),
                  h ? (g = y) : null == g && (g = y),
                  h &&
                    0 < q &&
                    d.insertBefore(d.childNodes[q], d.childNodes[0]));
              }
            if (H && null !== g)
              for (
                g.click(),
                  d = $jscomp.makeIterator(
                    document.getElementsByClassName("custom-expander")
                  ),
                  g = d.next();
                !g.done;
                g = d.next()
              )
                (trip = g.value), trip.childNodes[0].click();
            O = !1;
            d = f;
          }
          if (d) return P.play(), wa(), u(), !1;
        }
        ba();
      } else {
        if (
          "There are no matches" == d.innerText ||
          "There are no matches" == d.innerText.slice(0, 20)
        )
          G = 0;
        ba();
        fa = !1;
      }
    } else
      fa
        ? 3e3 < new Date().getTime() - ha && (ba(), (ha = new Date().getTime()))
        : ((fa = !0), (ha = new Date().getTime()));
    ia();
  }
  function wa() {
    clearInterval(m);
    m = null;
    B.style.backgroundColor = "rgb(255,255,255)";
    C = 100;
    m = setInterval(function () {
      241 > C
        ? (C++,
          (B.style.backgroundColor = "rgb(" + C + ", " + C + ", " + C + ")"))
        : (clearInterval(m),
          (m = null),
          (B.style.backgroundColor = "rgb(255,255,255)"));
    }, 7);
  }
  function aa(d) {
    return null !== d.getElementsByClassName("wo-total_payout").item(0)
      ? d.getElementsByClassName("wo-total_payout").item(0)
      : null !==
        d
          .getElementsByClassName(
            "wo-total_payout__modified-load-increase-attr"
          )
          .item(0)
      ? d
          .getElementsByClassName(
            "wo-total_payout__modified-load-increase-attr"
          )
          .item(0)
      : null !==
        d
          .getElementsByClassName(
            "wo-total_payout__modified-load-decrease-attr"
          )
          .item(0)
      ? d
          .getElementsByClassName(
            "wo-total_payout__modified-load-decrease-attr"
          )
          .item(0)
      : d.getElementsByClassName("css-dspfjs").item(0).childNodes[0];
  }
  function ba() {
    I += 1;
    I == Y &&
      null != l &&
      (xa(l), console.log("dnc"), (I = 0), (Y = ja(20, 50)));
    r = document.getElementsByClassName("css-10ebv51").item(0);
    null == r &&
      ((r =
        801 > window.innerWidth
          ? document.getElementsByClassName("css-1gp38wa").item(1)
          : document.getElementsByClassName("css-1gp38wa").item(0)),
      null == r &&
        ((r = document.getElementsByClassName("css-174gqfj").item(0)),
        null == r &&
          (r = document.getElementsByClassName("css-ppc4rt").item(0))));
    xa(r);
    S();
  }
  function va() {
    I = 0;
    Y = ja(20, 50);
    if (null == l)
      try {
        (l = document.getElementsByClassName("css-1tjbqgb").item(0)),
          document
            .getElementsByClassName("css-1tjbqgb")
            .item(0)
            .addEventListener("click", function () {});
      } catch (d) {
        console.log("Dummy node not found");
      }
    D ||
      ((D = !0),
      window.addEventListener("beforeunload", function (d) {
        d.preventDefault();
        d.returnValue = "";
      }));
    clearInterval(Z);
    Z = null;
    G = -1;
    O = R = !1;
    ia();
  }
  function ia() {
    var d = n[0];
    W && (d = ja(n[0], n[1]));
    Z = setTimeout(Aa, d);
  }
  function u() {
    var d = document.getElementById("onBtn");
    if (null != d && L) {
      L = !1;
      R = !0;
      var f = chrome.runtime.getURL("assets/onBtn2.png");
      d.innerHTML =
        '<img align="right" src="' +
        f +
        '"  height="' +
        x +
        '" width="' +
        x +
        '" style="' +
        N +
        '">';
    }
  }
  function Ba() {
    var d = document.getElementById("boxForfilters"),
      f = document.createElement("div");
    f.id = "ratePickerSpan";
    d.appendChild(f);
    ma();
    f = document.createElement("span");
    f.className = "departure_date";
    f.id = "switches";
    f.style = "max-width: 200px;";
    var g = "";
    h && (g = "checked");
    f.innerHTML =
      '<div class="form-check"><input type="checkbox" class="swiper" ' +
      g +
      ' id="highlightedOnTopBox" title="Highlight at the top"><div style="display: inline-flex;">Highlight at the top</div></div> <div class="form-check" ><input type="checkbox" id="easyBook" class="swiper" title="Click to book"><div style="display: inline-flex; ">Click to book</div></div>';
    g = document.createElement("span");
    g.id = "switches2";
    g.style = "max-width: 200px;";
    g.innerHTML =
      '<div class="form-check" ><input type="checkbox" id="autoExpand" class="swiper" ' +
      (H ? "checked " : " ") +
      ' style="margin-right: 0.5rem;" title="Auto expand first load"><div style="display: inline-flex; ">Auto expand</div></div> <div class="form-check" ><input type="checkbox" id="autoBook" class="swiper" style="margin-right: 0.5rem;" title="Auto book"><div style="display: inline-flex; ">Auto book</div></div>';
    d.appendChild(f);
    d.appendChild(g);
    document
      .getElementById("highlightedOnTopBox")
      .addEventListener("click", pa);
    document.getElementById("autoExpand").addEventListener("click", Da);
    document.getElementById("easyBook").addEventListener("click", ebf);
  }
  function ebf() {
    if (document.getElementById("easyBook")?.checked) {
      const interval = setInterval(() => {
        if (document.getElementsByClassName("load-card__selected")[0]) {
          const bookButton = document.createElement("button");
          bookButton.textContent = "CLICK BOOK";
          bookButton.classList.add("customBookButton");
          document
            .getElementsByClassName("load-card__selected")[0]
            .childNodes[0].childNodes[0].appendChild(bookButton);
          bookButton.addEventListener("click", () => {
            e.click();
            const inter = setInterval(() => {
              if (
                document.getElementsByClassName("css-1bbunrx")[0].innerText ===
                  document
                    .getElementsByClassName("load-card__selected")[0]
                    .getElementsByClassName("css-iw1w20")[0].innerText &&
                document.getElementsByClassName("wo-book-button")[0]
              ) {
                document.getElementsByClassName("wo-book-button")[0].click();
                const inter2 = setInterval(() => {
                  if (document.getElementsByClassName("css-c6ayu0")[0]) {
                    document.getElementsByClassName("css-c6ayu0")[0].click();
                    clearInterval(inter2);
                  }
                });
                clearInterval(inter);
              }
            }, 500);
          });
          clearInterval(interval);
        }

        document.querySelectorAll(".load-card").forEach((e) => {
          if (!e.getElementsByClassName("customBookButton")[0]) {
            const bookButton = document.createElement("button");
            bookButton.textContent = "CLICK BOOK";
            bookButton.classList.add("customBookButton");
            e.childNodes[0].childNodes[0].appendChild(bookButton);
            bookButton.addEventListener("click", () => {
              e.click();
              const inter = setInterval(() => {
                if (
                  document.getElementsByClassName("css-1bbunrx")[0]
                    .innerText ===
                    document
                      .getElementsByClassName("load-card__selected")[0]
                      .getElementsByClassName("css-iw1w20")[0].innerText &&
                  document.getElementsByClassName("wo-book-button")[0]
                ) {
                  document.getElementsByClassName("wo-book-button")[0].click();
                  const inter2 = setInterval(() => {
                    if (document.getElementsByClassName("css-c6ayu0")[0]) {
                      document.getElementsByClassName("css-c6ayu0")[0].click();
                      clearInterval(inter2);
                    }
                  });
                  clearInterval(inter);
                }
              }, 500);
            });
            clearInterval(interval);
          }
        });
      }, 100);
    } else {
      if (document.getElementsByClassName("load-card__selected")[0]) {
        if (
          document
            .getElementsByClassName("load-card__selected")[0]
            .getElementsByClassName("customBookButton")[0]
        ) {
          const bookButton = document
            .getElementsByClassName("load-card__selected")[0]
            .getElementsByClassName("customBookButton")[0];
          bookButton.remove();
        }
      }
      document.querySelectorAll(".load-card").forEach((e) => {
        if (e.getElementsByClassName("customBookButton")[0]) {
          const bookButton = e.getElementsByClassName("customBookButton")[0];
          bookButton.remove();
        }
      });
    }
  }

  function T() {
    if (isLogined) {
      501 > window.innerWidth
        ? ca(!0)
        : (ca(!1), K || document.getElementById("hideSettingsButton").click());
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
        } catch (d) {}
        t("relayAutoRefresher");
        z = 801 > window.innerWidth ? 0 : 1201 > window.innerWidth ? 1 : 2;
        M.id = "relayAutoRefresher";
        N = "";
        M.style.cssText =
          " display: grid;grid-template-columns: 90% 10%; padding:8px; font-size:14px; line-height:16px;";
        document
          .getElementById("utility-bar")
          .children[0].insertBefore(
            M,
            document.getElementById("utility-bar").children[0].children[0]
          );
        x = "30px";
        U
          ? (la(),
            (r = document.getElementsByClassName("css-1gp38wa").item(0)),
            null == r &&
              ((r = document.getElementsByClassName("css-ppc4rt").item(0)),
              null == r &&
                ((r = document.getElementsByClassName("css-174gqfj").item(0)),
                null == r && console.log("ERROR: 412"))),
            Ba(),
            document.getElementById("onBtn").addEventListener("click", oa))
          : chrome.runtime.sendMessage(
              { type: "6ad1f6as5f1" },
              function (d) {}
            );
      }
      addCustomComponents();
    }
  }
  function t(d) {
    null != document.getElementById(d) &&
      ((d = document.getElementById(d)), d.parentNode.removeChild(d));
  }
  function S() {
    clearInterval(Q);
    Q = setInterval(function () {
      if (null === Z) {
        if (
          800 < window.innerWidth &&
          (10 < document.getElementsByClassName("load-card").length &&
            (document.getElementsByClassName(
              "load-card"
            )[0].parentNode.style.cssText = "padding-bottom: 100px;"),
          1200 < window.innerWidth &&
            21 > document.getElementsByClassName("load-card").length)
        )
          try {
            0 < document.getElementsByClassName("filters__column-sheet").length
              ? (document.getElementsByClassName(
                  "filters__column-sheet"
                )[0].childNodes[0].style.cssText = "padding-bottom:100px;")
              : 0 < document.getElementsByClassName("css-1r4y4sy").length &&
                (document.getElementsByClassName(
                  "css-1r4y4sy"
                )[0].childNodes[0].style.cssText = "padding-bottom:70px;");
          } catch (d) {}
        clearInterval(Q);
      }
    }, 1e3);
    ebf();
  }
  function pa() {
    h = !h;
  }
  function ma() {
    W = !1;
    t("lwrsldr");
    t("pprsldr");
    document.querySelector("#ratePickerSpan").innerHTML =
      '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #077398;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important; font-size:0.9rem;}}</style>  <section class="range-sliders"><input id="rfrrtsldr" type="range" max="10" min="0.1" step="0.1" value="5" style = "width: 100%;"></input> </section><div><p id="rrr" align="left">Refresh Rate: 5X</p></div>';
    na();
    document.getElementById("rfrrtsldr").addEventListener("input", ya);
  }
  function ya() {
    var d = document.getElementById("rfrrtsldr").value;
    n[0] = 1e3 / d;
    da();
    document.getElementById("rrr").innerHTML = "Refresh Rate: " + d + "X";
  }
  function na() {
    if (W) {
      var d = +(Math.round(1e3 / n[0] + "e+1") + "e-1"),
        f = +(Math.round(1e3 / n[1] + "e+1") + "e-1");
      document.querySelector("#lwrsldr").value = d;
      document.querySelector("#pprsldr").value = f;
      document.getElementById("rrr").innerHTML =
        "Range: " + d + "X - " + f + "X";
    } else
      (d = +(Math.round(1e3 / n[0] + "e+1") + "e-1")),
        (document.querySelector("#rfrrtsldr").value = d),
        (document.querySelector("#rrr").innerHTML = "Refresh Rate: " + d + "X");
  }
  function da() {
    chrome.storage.local.set({ refRate: n, refreshRateRangeTypeIsRange: W });
  }
  function Da() {
    H = !H;
  }
  function ja(d, f) {
    d = Math.ceil(d);
    f = Math.floor(f);
    return Math.floor(Math.random() * (f - d) + d);
  }
  function xa(d) {
    var f = new MouseEvent("mousedown", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      }),
      g = new MouseEvent("click", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      }),
      q = new MouseEvent("mouseup", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      });
    d.dispatchEvent(new MouseEvent("mouseover"));
    E = !0;
    d.dispatchEvent(f);
    d.dispatchEvent(g);
    d.dispatchEvent(q);
  }
  function ca(d) {
    setTimeout(function () {
      try {
        document.getElementById("hideSettingsButtonContainer").style.display = d
          ? "block"
          : "none";
      } catch (f) {}
    }, 200);
  }
  var R = !1,
    Z = null,
    L = !1,
    fa = !1,
    ha = null,
    G = -1,
    P = new Audio(chrome.runtime.getURL("assets/n.mp3")),
    p = [],
    O = !1,
    U = !1,
    N = "margin-left: 5px; margin-right: 10px;",
    W = !1,
    m = null,
    B = document.getElementsByClassName("background-mode__light").item(0),
    C = 0,
    r = null,
    n = [200, -1],
    x = null,
    M = document.createElement("div"),
    J = !1,
    h = !1,
    I = 0,
    Y = 50,
    l = null,
    E = !1,
    D = !1,
    H = !1,
    Q = null,
    z = null,
    K = !0,
    EB = !1,
    AB = !1;
  w && setTimeout(T, 200);
  setTimeout(() => {
    U || (t("relayAutoRefresher"), (U = !0), T());
  }, 500);
  document.body.addEventListener("mouseup", function () {
    1 == E
      ? (E = !1)
      : ((J = L),
        setTimeout(function () {
          J && u();
        }, 50),
        setTimeout(function () {
          0 < document.getElementsByClassName("css-17dpd3l").length && S();
        }, 30),
        setTimeout(function () {
          T();
        }, 200));
  });
  document.body.onkeyup = function (d) {
    32 == d.keyCode ? u() : 192 == d.keyCode && oa();
  };
  window.addEventListener("resize", function () {
    0 === z
      ? 1200 < window.innerWidth
        ? ((z = 2), u())
        : 800 < window.innerWidth && ((z = 1), u())
      : 1 === z
      ? 801 > window.innerWidth
        ? ((z = 0), u())
        : 1200 < window.innerWidth && ((z = 2), u())
      : 2 === z &&
        (801 > window.innerWidth
          ? ((z = 0), u())
          : 1201 > window.innerWidth && ((z = 1), u()));
    T();
  });
}

function run2(w) {
  function F() {
    var c = document.createElement("div");
    c.id = "parentForFilters";
    var a = document.createElement("div");
    a.id = "boxForfilters";
    var b = document.createElement("style");
    b.innerText =
      ".swiper{accent-color:#077398} #boxForfilters{display: grid;grid-template-columns: 210px 210px 1fr;} #ratePickerSpan{max-width: 170px;} @media only screen and (max-width: 670px) {#boxForfilters{grid-template-columns: 1fr 1fr;} #ratePickerSpan{grid-column: 1/2;} #switches, #switches2{grid-column: 2/3 } } @media only screen and (max-width: 450px) {#ratePickerSpan{max-width: 130px;} #boxForfilters{grid-template-columns: 130px 1fr;}}";
    c.appendChild(b);
    b = document.createElement("div");
    b.id = "hideSettingsButtonContainer";
    b.style =
      "display: none; grid-column: 1/3; text-align: center; padding-bottom: 0.5rem; margin-top:-0.5rem;";
    b.innerHTML =
      "<span id='hideSettingsButton' style='background:none; border:none; cursor:pointer; line-height:1.5rem; padding:0 1rem;user-select: none; color: #077398' type='button' >Hide</span>";
    D.appendChild(b);
    c.appendChild(a);
    document
      .getElementById("hideSettingsButton")
      .addEventListener("click", function (e) {
        (X = !X)
          ? ((e.target.innerHTML = "Hide"),
            (document.getElementById("parentForFilters").style.display =
              "block"),
            (document.getElementById(
              "hideSettingsButtonContainer"
            ).style.gridColumn = "1/3"))
          : ((e.target.innerHTML = "Show"),
            (document.getElementById("parentForFilters").style.display =
              "none"),
            (document.getElementById(
              "hideSettingsButtonContainer"
            ).style.gridColumn = "1/2"));
      });
    D.appendChild(c);
    p = !1;
    c = document.createElement("div");
    c.id = "onBtn";
    a = chrome.runtime.getURL("assets/onBtn2.png");
    c.innerHTML =
      '<img align="right" src="' +
      a +
      '"  height="' +
      E +
      '" width="' +
      E +
      ' style="' +
      r +
      '">';
    a = document.createElement("div");
    a.id = "spanTagParent";
    t("spanTagParent");
    a.style.cssText =
      "display: flex; justify-content: right; align-items: center;";
    a.appendChild(c);
    D.appendChild(a);
  }
  function la() {
    t("parentForFilters");
    t("boxForfilters");
    t("onBtn");
    t("hideSettingsButtonContainer");
    F();
  }
  function oa() {
    console.log("oa");
    setTimeout(function () {
      var c = document.getElementById("onBtn"),
        a = "assets/offBtn.png";
      p ? ((p = !1), (a = "assets/onBtn2.png"), (G = !0)) : ((p = !0), va());
      a = chrome.runtime.getURL(a);
      c.innerHTML =
        '<img align="right" src="' +
        a +
        '" height="' +
        E +
        '" width="' +
        E +
        '" style="' +
        r +
        '">';
    }, 10);
  }
  function Aa() {
    if (B) return !1;
    if (1 > document.getElementsByClassName("css-17dpd3l").length) {
      if (G) return (G = B = !0), clearInterval(P), (P = null), !1;
      var c = document.getElementsByClassName("css-wck2if").item(0);
      null == c && (c = document.getElementsByClassName("no-results").item(0));
      if (null == c) {
        c = document.getElementsByClassName("wo-card").item(0).parentNode;
        if (
          document.getElementById("autoBook")?.checked &&
          c.childElementCount > 0
        ) {
          W.play();
          wa();
          u();
          c.childNodes[0].getElementsByClassName("wo-book-button")[0].click();
          return !1;
        }
        if (-1 == N) {
          m.length = 0;
          m = [];
          N = c.childElementCount;
          for (var a = (m.length = 0); a < c.childElementCount - 1; a++)
            if (
              "css-5tvjft" != c.childNodes[a].className &&
              "css-176mvq0" != c.childNodes[a].className &&
              "css-1ropudr" != c.childNodes[a].className &&
              "css-93d7hd" != c.childNodes[a].className
            ) {
              var b = c.childNodes[a].id,
                e = aa(c.childNodes[a]).innerText;
              m.push({ 1: b, 2: e });
            }
        } else {
          B = !0;
          a = !1;
          if (null == c) c = B = !1;
          else {
            b = null;
            for (e = 0; e < c.childElementCount - 1; e++)
              if (
                "css-5tvjft" != c.childNodes[e].className &&
                "css-176mvq0" != c.childNodes[e].className &&
                "css-1ropudr" != c.childNodes[e].className &&
                "css-93d7hd" != c.childNodes[e].className
              ) {
                var k = c.childNodes[e];
                k.childNodes[0].childNodes[0].setAttribute(
                  "style",
                  "background-color: #FFF !important"
                );
                for (
                  var V = k.id, za = aa(k), ta = za.innerText, ua = !1, ea = 0;
                  ea < m.length;
                  ea++
                )
                  if (V == m[ea][1]) {
                    ua = !0;
                    if (ta != m[ea][2]) {
                      V = parseInt(ta.substr(1).replace(/,/g, ""));
                      var ka = parseInt(m[ea][2].substr(1).replace(/,/g, ""));
                      50 < V - ka &&
                        ((a = !0),
                        (za.innerHTML = ta + " &#8593;"),
                        k.childNodes[0].childNodes[0].setAttribute(
                          "style",
                          "background-color:rgb(185, 232, 247) !important"
                        ),
                        Q ? (b = k) : null == b && (b = k),
                        Q && 0 < e && ya(c, e),
                        (m[ea][2] = ta));
                    }
                    m.push(m.splice(ea, 1)[0]);
                    break;
                  }
                ua ||
                  ((a = !0),
                  k.childNodes[0].childNodes[0].setAttribute(
                    "style",
                    "background-color:rgb(185, 232, 247) !important"
                  ),
                  Q ? (b = k) : null == b && (b = k),
                  Q && 0 < e && ya(c, e));
              }
            if (
              q &&
              null !== b &&
              (b.childNodes[0].childNodes[0].childNodes[0].click(),
              (c = b.childNodes[0].childNodes[1].childElementCount),
              1 < c)
            )
              for (e = 0; e < c; e++)
                b.childNodes[0].childNodes[1].childNodes[
                  e
                ].childNodes[0].click();
            B = !1;
            c = a;
          }
          if (c) return W.play(), wa(), u(), !1;
        }
        ba();
      } else {
        if (
          "There are no matches" == c.innerText ||
          "There are no matches" == c.innerText.slice(0, 20)
        )
          N = 0;
        ba();
        O = !1;
      }
    } else
      O
        ? 3e3 < new Date().getTime() - U && (ba(), (U = new Date().getTime()))
        : ((O = !0), (U = new Date().getTime()));
    ia();
  }
  function wa() {
    clearInterval(x);
    x = null;
    M.style.backgroundColor = "rgb(255,255,255)";
    J = 100;
    x = setInterval(function () {
      241 > J
        ? (J++,
          (M.style.backgroundColor = "rgb(" + J + ", " + J + ", " + J + ")"))
        : (clearInterval(x),
          (x = null),
          (M.style.backgroundColor = "rgb(255,255,255)"));
    }, 7);
  }
  function aa(c) {
    var a = "css-btlcoa",
      b = [0, 1];
    801 > window.innerWidth
      ? (a = "css-2iq9sy")
      : 1201 > window.innerWidth &&
        ((a = "css-i2uha"),
        null == document.getElementsByClassName(a).item(0) &&
          (a = "css-7sk8a6"),
        (b = [1, 0]));
    return c.getElementsByClassName(a).item(0).childNodes[b[0]].childNodes[b[1]]
      .childNodes[0].childNodes[0].childNodes[0].childNodes[0];
  }
  function ba() {
    z += 1;
    z == K &&
      null != d &&
      (fa(d), console.log("dnc"), (z = 0), (K = L(20, 50)));
    h = document.getElementsByClassName("css-10ebv51").item(0);
    null == h &&
      ((h =
        801 > window.innerWidth
          ? document.getElementsByClassName("css-1gp38wa").item(1)
          : document.getElementsByClassName("css-1gp38wa").item(0)),
      null == h &&
        ((h = document.getElementsByClassName("css-174gqfj").item(0)),
        null == h &&
          (h = document.getElementsByClassName("css-ppc4rt").item(0))));
    fa(h);
    qa();
  }
  function va() {
    z = 0;
    K = L(20, 50);
    if (null == d)
      try {
        (d = document.getElementsByClassName("css-1tjbqgb").item(0)),
          document
            .getElementsByClassName("css-1tjbqgb")
            .item(0)
            .addEventListener("click", function () {});
      } catch (c) {
        console.log("Dummy node not found");
      }
    g ||
      ((g = !0),
      window.addEventListener("beforeunload", function (c) {
        c.preventDefault();
        c.returnValue = "";
      }));
    clearInterval(P);
    P = null;
    N = -1;
    B = G = !1;
    ia();
  }
  function ia() {
    var c = l[0];
    n && (c = L(l[0], l[1]));
    P = setTimeout(Aa, c);
  }
  function u() {
    var c = document.getElementById("onBtn");
    if (null != c && p) {
      p = !1;
      G = !0;
      var a = chrome.runtime.getURL("assets/onBtn2.png");
      c.innerHTML =
        '<img align="right" src="' +
        a +
        '"  height="' +
        E +
        '" width="' +
        E +
        '" style="' +
        r +
        '">';
    }
  }
  function Ba() {
    var c = document.getElementById("boxForfilters"),
      a = document.createElement("div");
    a.id = "ratePickerSpan";
    c.appendChild(a);
    da();
    xa();
    a = document.createElement("span");
    a.className = "departure_date";
    a.id = "switches";
    a.style = "max-width: 200px;";
    var b = "";
    Q && (b = "checked");
    a.innerHTML =
      '<div class="form-check"><input type="checkbox" class="swiper" ' +
      b +
      ' id="highlightedOnTopBox" title="Highlight at the top"><div style="display: inline-flex;">Highlight at the top</div></div> <div class="form-check"><input type="checkbox" class="swiper" id="ncb" title="Click to book"><div style="display: inline-flex;">Click to book</div></div>';
    b = document.createElement("span");
    b.id = "switches2";
    b.style = "max-width: 200px;";
    b.innerHTML =
      '<div class="form-check" ><input type="checkbox" id="autoExpand" class="swiper" ' +
      (q ? "checked " : " ") +
      ' style="margin-right: 0.5rem;" title="Auto expand"><div style="display: inline-flex; ">Auto expand</div></div> <div class="form-check" ><input type="checkbox" id="autoBook" class="swiper" style="margin-right: 0.5rem;" title="Auto book"><div style="display: inline-flex; ">Auto book</div></div>  ';
    c.appendChild(a);
    c.appendChild(b);
    document.getElementById("ncb").addEventListener("click", ma);
    document
      .getElementById("highlightedOnTopBox")
      .addEventListener("click", sa);
    document.getElementById("autoExpand").addEventListener("click", Z);
    I && document.getElementById("ncb").click();
  }
  function T() {
    if (isLogined) {
      501 > window.innerWidth
        ? ha(!0)
        : (ha(!1), X || document.getElementById("hideSettingsButton").click());
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
        } catch (c) {}
        t("relayAutoRefresher");
        A = 801 > window.innerWidth ? 0 : 1201 > window.innerWidth ? 1 : 2;
        D.id = "relayAutoRefresher";
        r = "";
        D.style.cssText =
          " display: grid;grid-template-columns: 90% 10%; padding:8px; font-size:14px; line-height:16px;";
        document
          .getElementById("utility-bar")
          .children[0].insertBefore(
            D,
            document.getElementById("utility-bar").children[0].children[0]
          );
        E = "30px";
        C
          ? (la(),
            (h = document.getElementsByClassName("css-1gp38wa").item(0)),
            null == h &&
              ((h = document.getElementsByClassName("css-ppc4rt").item(0)),
              null == h &&
                ((h = document.getElementsByClassName("css-174gqfj").item(0)),
                null == h && console.log("ERROR: 412"))),
            Ba(),
            document.getElementById("onBtn").addEventListener("click", oa))
          : chrome.runtime.sendMessage(
              { type: "6ad1f6as5f1" },
              function (c) {}
            );
      }
      addCustomComponents();
    }
  }
  function t(c) {
    null != document.getElementById(c) &&
      ((c = document.getElementById(c)), c.parentNode.removeChild(c));
  }
  function S() {
    if (1 > document.getElementsByClassName("css-17dpd3l").length) {
      var c = document.getElementsByClassName("wo-card").item(0).parentNode,
        a = "wo-book-button css-njqtsz";
      null == c.getElementsByClassName(a).item(0) &&
        (a = "wo-book-button css-ymgcc0");
      null == c.getElementsByClassName(a).item(0) &&
        (a = "wo-book-button css-1nxp3bi");
      c = $jscomp.makeIterator(c.getElementsByClassName(a));
      for (a = c.next(); !a.done; a = c.next())
        (v = a.value),
          (v.style.backgroundColor = "#002e36"),
          (v.style.color = "#FFF"),
          (v.style.maxWidth = "100px"),
          (v.innerHTML = "CLICK BOOK"),
          v.addEventListener("click", pa);
      return !0;
    }
    return !1;
  }
  function pa() {
    var c = null,
      a = 0;
    c = setInterval(function () {
      a++;
      var b = null;
      100 > a
        ? ((b = document.getElementsByClassName("css-1by7sx9").item(0)),
          null == b &&
            ((b = document.getElementsByClassName("css-123rhkh").item(0)),
            null == b &&
              (b = document.getElementsByClassName("css-1v6nfka").item(0))))
        : clearInterval(c);
      null != b
        ? "css-1by7sx9" == b.className ||
          "css-123rhkh" == b.className ||
          "css-1v6nfka" == b.className
          ? (b.click(), clearInterval(c))
          : console.log("ERROR: 419")
        : console.log("ERROR: 420");
    }, 1);
  }
  function qa() {
    clearInterval(Y);
    I &&
      (Y = setInterval(function () {
        S() && clearInterval(Y);
      }, 10));
    ra();
  }
  function ra() {
    clearInterval(y);
    y = setInterval(function () {
      if (null === P) {
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
          } catch (c) {}
        clearInterval(y);
      }
    }, 1e3);
  }
  function ma() {
    document.getElementById("ncb").checked ? ((I = !0), S()) : ((I = !1), ba());
  }
  function ya(c, a) {
    var b = 0;
    if (
      "css-5tvjft" == c.childNodes[0].className ||
      "css-176mvq0" == c.childNodes[0].className ||
      "css-1ropudr" == c.childNodes[0].className
    )
      b = 1;
    c.insertBefore(c.childNodes[a], c.childNodes[b]);
  }
  function sa() {
    Q = !Q;
  }
  function Ca() {
    (n = !n) ? na() : da();
    R();
  }
  function na() {
    n = !0;
    t("rfrrtsldr");
    -1 == l[1] && (l = [500, 200]);
    document.querySelector("#ratePickerSpan").innerHTML =
      '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #077398;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important;font-size:0.9rem;}}</style>            <section class="range-sliders"><input id="lwrsldr" type="range" max="10" min="0.1" step="0.1" value="2.0"><input id="pprsldr" type="range" max="10" min="0.1" step="0.1" value="5.0"></section><div><p id="rrr" align="left">Range: 2X - 5X</p></div>';
    ca();
    document.getElementById("lwrsldr").addEventListener("input", ja);
    document.getElementById("pprsldr").addEventListener("input", ja);
  }
  function da() {
    n = !1;
    t("lwrsldr");
    t("pprsldr");
    document.querySelector("#ratePickerSpan").innerHTML =
      '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #077398;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important; font-size:0.9rem;}}</style>  <section class="range-sliders"><input id="rfrrtsldr" type="range" max="10" min="0.1" step="0.1" value="5" style = "width: 100%;"></input> </section><div><p id="rrr" align="left">Refresh Rate: 5X</p></div>';
    ca();
    document.getElementById("rfrrtsldr").addEventListener("input", Da);
  }
  function Da() {
    var c = document.getElementById("rfrrtsldr").value;
    l[0] = 1e3 / c;
    R();
    document.getElementById("rrr").innerHTML = "Refresh Rate: " + c + "X";
  }
  function ja() {
    var c = parseFloat(document.getElementById("lwrsldr").value),
      a = parseFloat(document.getElementById("pprsldr").value);
    if (c > a) {
      var b = a;
      a = c;
      c = b;
    }
    l = [1e3 / c, 1e3 / a];
    document.getElementById("rrr").innerHTML = "Range: " + c + "X - " + a + "X";
    R();
  }
  function xa() {
    chrome.storage.local.get(["refreshRateRangeTypeIsRange"], function (c) {
      var a = c.refreshRateRangeTypeIsRange;
      null != c.refreshRateRangeTypeIsRange &&
        chrome.storage.local.get(["refRate"], function (b) {
          null != b.refRate &&
            ((l = b.refRate),
            a
              ? ((document.querySelector("#refRateRange").checked = !0), na())
              : da(),
            ca());
        });
    });
  }
  function ca() {
    if (n) {
      var c = +(Math.round(1e3 / l[0] + "e+1") + "e-1"),
        a = +(Math.round(1e3 / l[1] + "e+1") + "e-1");
      document.querySelector("#lwrsldr").value = c;
      document.querySelector("#pprsldr").value = a;
      document.getElementById("rrr").innerHTML =
        "Range: " + c + "X - " + a + "X";
    } else
      (c = +(Math.round(1e3 / l[0] + "e+1") + "e-1")),
        (document.querySelector("#rfrrtsldr").value = c),
        (document.querySelector("#rrr").innerHTML = "Refresh Rate: " + c + "X");
  }
  function R() {
    chrome.storage.local.set({ refRate: l, refreshRateRangeTypeIsRange: n });
  }
  function Z() {
    q = !q;
  }
  function L(c, a) {
    c = Math.ceil(c);
    a = Math.floor(a);
    return Math.floor(Math.random() * (a - c) + c);
  }
  function fa(c) {
    var a = new MouseEvent("mousedown", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      }),
      b = new MouseEvent("click", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      }),
      e = new MouseEvent("mouseup", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      });
    c.dispatchEvent(new MouseEvent("mouseover"));
    f = !0;
    c.dispatchEvent(a);
    c.dispatchEvent(b);
    c.dispatchEvent(e);
  }
  function ha(c) {
    setTimeout(function () {
      try {
        document.getElementById("hideSettingsButtonContainer").style.display = c
          ? "block"
          : "none";
      } catch (a) {}
    }, 200);
  }
  var G = !1,
    P = null,
    p = !1,
    O = !1,
    U = null,
    N = -1,
    W = new Audio(chrome.runtime.getURL("assets/n.mp3")),
    m = [],
    B = !1,
    C = !1,
    r = "margin-left: 5px; margin-right: 10px;",
    n = !1,
    x = null,
    M = document.getElementsByClassName("background-mode__light").item(0),
    J = 0,
    h = null,
    I = !1,
    Y = null,
    l = [200, -1],
    E = null,
    D = document.createElement("div"),
    H = !1,
    Q = !1,
    z = 0,
    K = 50,
    d = null,
    f = !1,
    g = !1,
    q = !1,
    y = null,
    A = null,
    X = !0;
  w && setTimeout(T, 200);
  setTimeout(() => {
    C || (t("relayAutoRefresher"), (C = !0), T());
  }, 500);
  document.body.addEventListener("mouseup", function () {
    1 == f
      ? (f = !1)
      : ((H = p),
        setTimeout(function () {
          H && u();
        }, 50),
        setTimeout(function () {
          0 < document.getElementsByClassName("css-17dpd3l").length &&
            (I && qa(), ra());
        }, 30),
        setTimeout(function () {
          T();
        }, 200));
  });
  document.body.onkeyup = function (c) {
    32 == c.keyCode ? u() : 192 == c.keyCode && oa();
  };
  window.addEventListener("resize", function () {
    0 === A
      ? 1200 < window.innerWidth
        ? ((A = 2), u())
        : 800 < window.innerWidth && ((A = 1), u())
      : 1 === A
      ? 801 > window.innerWidth
        ? ((A = 0), u())
        : 1200 < window.innerWidth && ((A = 2), u())
      : 2 === A &&
        (801 > window.innerWidth
          ? ((A = 0), u())
          : 1201 > window.innerWidth && ((A = 1), u()));
    T();
  });
}
function run1() {
  function w() {
    var a = document.createElement("div");
    a.id = "parentForFilters";
    var b = document.createElement("div");
    b.id = "boxForfilters";
    var e = document.createElement("style");
    e.innerText =
      "#boxForfilters{display: grid;grid-template-columns: 210px 210px 100%;} #ratePickerSpan{max-width: 170px;} @media only screen and (max-width: 670px) {#boxForfilters{grid-template-columns: 1fr 1fr;} #ratePickerSpan{grid-column: 1/2;} #switches, #switches2{grid-column: 2/3 } } @media only screen and (max-width: 450px) {#ratePickerSpan{max-width: 130px;} #boxForfilters{grid-template-columns: 130px 1fr;}}";
    a.appendChild(e);
    a.appendChild(b);
    u();
    b = document.createElement("div");
    b.id = "hideSettingsButtonContainer";
    b.style =
      "display: none; grid-column: 1/3; text-align: center; padding-bottom: 0.5rem; margin-top:-0.5rem;";
    b.innerHTML =
      "<span id='hideSettingsButton' style='background:none; border:none; cursor:pointer; line-height:1.5rem; padding:0 1rem;user-select: none; color: #077398' type='button' >Hide</span>";
    H.appendChild(b);
    document
      .getElementById("hideSettingsButton")
      .addEventListener("click", function (k) {
        (c = !c)
          ? ((k.target.innerHTML = "Hide"),
            (document.getElementById("parentForFilters").style.display =
              "block"),
            (document.getElementById(
              "hideSettingsButtonContainer"
            ).style.gridColumn = "1/3"))
          : ((k.target.innerHTML = "Show"),
            (document.getElementById("parentForFilters").style.display =
              "none"),
            (document.getElementById(
              "hideSettingsButtonContainer"
            ).style.gridColumn = "1/2"));
      });
    H.appendChild(a);
    p = !1;
    a = document.createElement("div");
    a.id = "onBtn";
    b = chrome.runtime.getURL("assets/onBtn.png");
    a.innerHTML =
      '<img align="right" src="' +
      b +
      '"  height="' +
      D +
      '" width="' +
      D +
      ' style="' +
      r +
      '">';
    H.appendChild(a);
  }
  function F() {
    S("parentForFilters");
    S("boxForfilters");
    S("onBtn");
    S("hideSettingsButtonContainer");
    w();
  }
  function la() {
    console.log("la");
    setTimeout(function () {
      var a = document.getElementById("onBtn"),
        b = "assets/offBtn.png";
      p ? ((p = !1), (b = "assets/onBtn.png"), (G = !0)) : ((p = !0), ba());
      b = chrome.runtime.getURL(b);
      a.innerHTML =
        '<img align="right" src="' +
        b +
        '" height="' +
        D +
        '" width="' +
        D +
        '" style="' +
        r +
        '">';
    }, 10);
  }
  function oa() {
    if (B) return !1;
    if (1 > document.getElementsByClassName("css-17dpd3l").length) {
      if (G) return (G = B = !0), clearInterval(P), (P = null), !1;
      var a = document.getElementsByClassName("css-wck2if").item(0);
      null == a && (a = document.getElementsByClassName("no-results").item(0));
      if (null == a) {
        a = document.getElementById("relayAutoRefresher").nextSibling;
        if (-1 == N) {
          m.length = 0;
          m = [];
          N = a.childElementCount;
          for (var b = (m.length = 0); b < a.childElementCount - 1; b++)
            if (
              "css-5tvjft" != a.childNodes[b].className &&
              "css-176mvq0" != a.childNodes[b].className &&
              "css-1ropudr" != a.childNodes[b].className
            ) {
              var e = a.childNodes[b].id,
                k = wa(a.childNodes[b]).innerText;
              m.push({ 1: e, 2: k });
            }
        } else {
          B = !0;
          b = !1;
          if (null == a) a = B = !1;
          else {
            e = null;
            for (k = 0; k < a.childElementCount - 1; k++)
              if (
                "css-5tvjft" != a.childNodes[k].className &&
                "css-176mvq0" != a.childNodes[k].className &&
                "css-1ropudr" != a.childNodes[k].className
              ) {
                var V = a.childNodes[k];
                V.childNodes[0].childNodes[0].setAttribute(
                  "style",
                  "background-color: #FFF !important"
                );
                for (
                  var za = V.id, ta = wa(V), ua = ta.innerText, ea = !1, ka = 0;
                  ka < m.length;
                  ka++
                )
                  if (za == m[ka][1]) {
                    ea = !0;
                    if (ua != m[ka][2]) {
                      za = parseInt(ua.substr(1).replace(/,/g, ""));
                      var Ea = parseInt(m[ka][2].substr(1).replace(/,/g, ""));
                      50 < za - Ea &&
                        ((b = !0),
                        (ta.innerHTML = ua + " &#8593;"),
                        V.childNodes[0].childNodes[0].setAttribute(
                          "style",
                          "background-color:#bff7ff !important"
                        ),
                        K ? (e = V) : null == e && (e = V),
                        K && 0 < k && sa(a, k),
                        (m[ka][2] = ua));
                    }
                    m.push(m.splice(ka, 1)[0]);
                    break;
                  }
                ea ||
                  ((b = !0),
                  V.childNodes[0].childNodes[0].setAttribute(
                    "style",
                    "background-color:#bff7ff !important"
                  ),
                  K ? (e = V) : null == e && (e = V),
                  K && 0 < k && sa(a, k));
              }
            if (
              X &&
              null !== e &&
              (e.childNodes[0].childNodes[0].childNodes[0].click(),
              (a = e.childNodes[0].childNodes[1].childElementCount),
              1 < a)
            )
              for (k = 0; k < a; k++)
                e.childNodes[0].childNodes[1].childNodes[
                  k
                ].childNodes[0].click();
            B = !1;
            a = b;
          }
          if (a) return W.play(), Aa(), ia(), !1;
        }
        aa();
      } else {
        if (
          "There are no matches" == a.innerText ||
          "There are no matches" == a.innerText.slice(0, 20)
        )
          N = 0;
        aa();
        O = !1;
      }
    } else
      O
        ? 1500 < new Date().getTime() - U && (aa(), (U = new Date().getTime()))
        : ((O = !0), (U = new Date().getTime()));
    va();
  }
  function Aa() {
    clearInterval(x);
    x = null;
    M.style.backgroundColor = "rgb(255,255,255)";
    J = 100;
    x = setInterval(function () {
      241 > J
        ? (J++,
          (M.style.backgroundColor = "rgb(" + J + ", " + J + ", " + J + ")"))
        : (clearInterval(x),
          (x = null),
          (M.style.backgroundColor = "rgb(255,255,255)"));
    }, 7);
  }
  function wa(a) {
    var b = "css-btlcoa",
      e = [0, 1];
    801 > window.innerWidth
      ? (b = "css-2iq9sy")
      : 1201 > window.innerWidth &&
        ((b = "css-i2uha"),
        null == document.getElementsByClassName(b).item(0) &&
          (b = "css-7sk8a6"),
        (e = [1, 0]));
    return a.getElementsByClassName(b).item(0).childNodes[e[0]].childNodes[e[1]]
      .childNodes[0].childNodes[0].childNodes[0].childNodes[0];
  }
  function aa() {
    f += 1;
    f == g &&
      null != q &&
      (fa(q), console.log("dnc"), (f = 0), (g = L(20, 50)));
    h =
      801 > window.innerWidth
        ? document.getElementsByClassName("css-1gp38wa").item(1)
        : document.getElementsByClassName("css-1gp38wa").item(0);
    null == h &&
      ((h = document.getElementsByClassName("css-174gqfj").item(0)),
      null == h && (h = document.getElementsByClassName("css-ppc4rt").item(0)));
    fa(h);
    ma();
  }
  function ba() {
    f = 0;
    g = L(20, 50);
    if (null == q)
      try {
        (q = document.getElementsByClassName("css-1tjbqgb").item(0)),
          document
            .getElementsByClassName("css-1tjbqgb")
            .item(0)
            .addEventListener("click", function () {});
      } catch (a) {
        console.log("Dummy node not found");
      }
    A ||
      ((A = !0),
      window.addEventListener("beforeunload", function (a) {
        a.preventDefault();
        a.returnValue = "";
      }));
    clearInterval(P);
    P = null;
    N = -1;
    B = G = !1;
    va();
  }
  function va() {
    var a = l[0];
    n && (a = L(l[0], l[1]));
    P = setTimeout(oa, a);
  }
  function ia() {
    var a = document.getElementById("onBtn");
    if (null != a && p) {
      p = !1;
      G = !0;
      var b = chrome.runtime.getURL("assets/onBtn.png");
      a.innerHTML =
        '<img align="right" src="' +
        b +
        '"  height="' +
        D +
        '" width="' +
        D +
        '" style="' +
        r +
        '">';
    }
  }
  function u() {
    501 > window.innerWidth
      ? ha(!0)
      : (ha(!1), c || document.getElementById("hideSettingsButton").click());
  }
  function Ba() {
    var a = document.getElementById("boxForfilters"),
      b = document.createElement("div");
    b.id = "ratePickerSpan";
    a.appendChild(b);
    da();
    xa();
    b = document.createElement("span");
    b.className = "departure_date";
    b.id = "switches";
    b.style = "max-width: 200px;";
    var e = "";
    K && (e = "checked");
    b.innerHTML =
      '<div class="form-check"><input type="checkbox" class="swiper" ' +
      e +
      ' id="highlightedOnTopBox" title="Highlight at the top"><div style="display: inline-flex;">Highlight at the top</div></div>                                                                                                                                                                                                                                                                        <div class="form-check"><input type="checkbox" class="swiper" id="ncb" style="margin-right: 0.5rem;" title="Click to book"><div style="display: inline-flex;">Click to book</div></div>';
    e = document.createElement("span");
    e.id = "switches2";
    e.style = "max-width: 200px;";
    e.innerHTML =
      '<div class="form-check" ><input type="checkbox" id="autoExpand" class="swiper" ' +
      (X ? "checked " : " ") +
      ' style="margin-right: 0.5rem;" title="Auto expand"><div style="display: inline-flex; ">Auto expand</div></div>';
    a.appendChild(b);
    a.appendChild(e);
    document.getElementById("ncb").addEventListener("click", ya);
    document
      .getElementById("highlightedOnTopBox")
      .addEventListener("click", Ca);
    document.getElementById("autoExpand").addEventListener("click", Z);
    I && document.getElementById("ncb").click();
  }
  function T(a) {
    setTimeout(function () {
      H.id = "relayAutoRefresher";
      r = "";
      H.style.cssText =
        "display: grid;grid-template-columns: 90% 8%; padding:8px";
      var b = document.getElementById("base-container-body").childNodes[0]
        .childNodes[0];
      0 < document.getElementsByClassName("css-86j7sx").length
        ? b.parentElement.insertBefore(H, b.nextSibling.nextSibling.nextSibling)
        : 0 < document.getElementsByClassName("css-dsf1ob").length
        ? "css-1bpb3sf" ==
          document.getElementById("base-container-body").childNodes[0]
            .childNodes[1].className
          ? b.parentElement.insertBefore(
              H,
              b.nextSibling.nextSibling.nextSibling
            )
          : b.parentElement.insertBefore(H, b.nextSibling.nextSibling)
        : (Q++, 30 > Q && T(200));
      E = document.getElementsByClassName("css-1dyp3a5").item(0);
      null == E && (E = document.getElementsByClassName("css-18wuixk").item(0));
      null == E
        ? t()
        : ((D = E.offsetHeight - 12),
          chrome.runtime.sendMessage({ type: "6ad1f6as5f1" }, function (e) {}));
    }, a);
  }
  function t() {
    for (
      var a = document.getElementsByClassName("css-1tjbqgb").item(0).children,
        b = 0;
      b < a.length;
      b++
    ) {
      var e = a[b];
      "Search" == e.innerText && pa(e);
    }
  }
  function S(a) {
    null != document.getElementById(a) &&
      ((a = document.getElementById(a)), a.parentNode.removeChild(a));
  }
  function pa(a) {
    d ||
      ((d = !d),
      a.addEventListener("click", function () {
        null == document.getElementById("boxForfilters") && T(100);
      }));
  }
  function qa() {
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
          (v.style.maxWidth = "100px"),
          (v.innerHTML = "CLICK BOOK"),
          v.addEventListener("click", ra);
      return !0;
    }
    return !1;
  }
  function ra() {
    var a = null,
      b = 0;
    a = setInterval(function () {
      b++;
      var e = null;
      100 > b
        ? ((e = document.getElementsByClassName("css-1by7sx9").item(0)),
          null == e &&
            ((e = document.getElementsByClassName("css-123rhkh").item(0)),
            null == e &&
              (e = document.getElementsByClassName("css-1v6nfka").item(0))))
        : clearInterval(a);
      null != e
        ? "css-1by7sx9" == e.className ||
          "css-123rhkh" == e.className ||
          "css-1v6nfka" == e.className
          ? (e.click(), clearInterval(a))
          : console.log("ERROR: 419")
        : console.log("ERROR: 420");
    }, 1);
  }
  function ma() {
    clearInterval(Y);
    I &&
      (Y = setInterval(function () {
        qa() && clearInterval(Y);
      }, 10));
  }
  function ya() {
    document.getElementById("ncb").checked
      ? ((I = !0), qa())
      : ((I = !1), aa());
  }
  function sa(a, b) {
    var e = 0;
    if (
      "css-5tvjft" == a.childNodes[0].className ||
      ("css-176mvq0" == a.childNodes[0].className) |
        ("css-1ropudr" == a.childNodes[0].className)
    )
      e = 1;
    a.insertBefore(a.childNodes[b], a.childNodes[e]);
  }
  function Ca() {
    K = !K;
  }
  function na() {
    (n = !n)
      ? (S("rfrrtsldr"),
        -1 == l[1] && ((l = [500, 200]), R()),
        (document.querySelector("#ratePickerSpan").innerHTML =
          '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #34688c;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important;font-size:0.9rem;}}</style>            <section class="range-sliders"><input id="lwrsldr" type="range" max="10" min="0.1" step="0.1" value="2.0"><input id="pprsldr" type="range" max="10" min="0.1" step="0.1" value="5.0"></section><div><p id="rrr" align="left">Range: 2X - 5X</p></div>'),
        ca(),
        document.getElementById("lwrsldr").addEventListener("input", ja),
        document.getElementById("pprsldr").addEventListener("input", ja))
      : da();
  }
  function da() {
    S("lwrsldr");
    S("pprsldr");
    document.querySelector("#ratePickerSpan").innerHTML =
      '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #34688c;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important; font-size:0.9rem;}}</style>  <section class="range-sliders"><input id="rfrrtsldr" type="range" max="10" min="0.1" step="0.1" value="5" style = "width: 100%;"></input> </section><div><p id="rrr" align="left">Refresh Rate: 5X</p></div>';
    ca();
    document.getElementById("rfrrtsldr").addEventListener("input", Da);
  }
  function Da() {
    var a = document.getElementById("rfrrtsldr").value;
    l[0] = 1e3 / a;
    R();
    document.getElementById("rrr").innerHTML = "Refresh Rate: " + a + "X";
  }
  function ja() {
    var a = parseFloat(document.getElementById("lwrsldr").value),
      b = parseFloat(document.getElementById("pprsldr").value);
    if (a > b) {
      var e = b;
      b = a;
      a = e;
    }
    l = [1e3 / a, 1e3 / b];
    document.getElementById("rrr").innerHTML = "Range: " + a + "X - " + b + "X";
    R();
  }
  function xa() {
    chrome.storage.local.get(["refreshRateRangeTypeIsRange"], function (a) {
      null != a.refreshRateRangeTypeIsRange &&
        chrome.storage.local.get(["refRate"], function (b) {
          null != b.refRate &&
            ((l = b.refRate),
            a.refreshRateRangeTypeIsRange
              ? document.querySelector("#refRateRange").click()
              : ca());
        });
    });
  }
  function ca() {
    if (n) {
      var a = +(Math.round(1e3 / l[0] + "e+1") + "e-1"),
        b = +(Math.round(1e3 / l[1] + "e+1") + "e-1");
      document.querySelector("#lwrsldr").value = a;
      document.querySelector("#pprsldr").value = b;
      document.getElementById("rrr").innerHTML =
        "Range: " + a + "X - " + b + "X";
    } else
      (a = +(Math.round(1e3 / l[0] + "e+1") + "e-1")),
        (document.querySelector("#rfrrtsldr").value = a),
        (document.querySelector("#rrr").innerHTML = "Refresh Rate: " + a + "X");
  }
  function R() {
    chrome.storage.local.set({ refRate: l, refreshRateRangeTypeIsRange: n });
  }
  function Z() {
    X = !X;
  }
  function L(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a) + a);
  }
  function fa(a) {
    var b = new MouseEvent("mousedown", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      }),
      e = new MouseEvent("click", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      }),
      k = new MouseEvent("mouseup", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        clientX: 0,
      });
    a.dispatchEvent(new MouseEvent("mouseover"));
    y = !0;
    a.dispatchEvent(b);
    a.dispatchEvent(e);
    a.dispatchEvent(k);
  }
  function ha(a) {
    setTimeout(function () {
      try {
        document.getElementById("hideSettingsButtonContainer").style.display = a
          ? "block"
          : "none";
      } catch (b) {}
    }, 200);
  }
  var G = !1,
    P = null,
    p = !1,
    O = !1,
    U = null,
    N = -1,
    W = new Audio(chrome.runtime.getURL("assets/n.mp3")),
    m = [],
    B = !1,
    C = !1,
    r = "margin-left: 5px; margin-right: 10px;",
    n = !1,
    x = null,
    M = document.getElementsByClassName("background-mode__light").item(0),
    J = 0,
    h = null,
    I = !1,
    Y = null,
    l = [200, -1],
    E = null,
    D = null,
    H = document.createElement("div"),
    Q = 0,
    z = !1,
    K = !1,
    d = !1,
    f = 0,
    g = 50,
    q = null,
    y = !1,
    A = !1,
    X = !1,
    c = !0;
  setTimeout(() => {
    if (isLogined) {
      C ||
        (F(),
        (C = !0),
        (h = document.getElementsByClassName("css-1gp38wa").item(0)),
        null == h &&
          ((h = document.getElementsByClassName("css-ppc4rt").item(0)),
          null == h &&
            ((h = document.getElementsByClassName("css-174gqfj").item(0)),
            null == h && console.log("ERROR: 412"))),
        Ba(),
        document.getElementById("onBtn").addEventListener("click", la));
    }
  }, 500);
  document.body.addEventListener("mouseup", function () {
    1 == y
      ? (y = !1)
      : ((z = p),
        setTimeout(function () {
          z && ia();
        }, 50),
        setTimeout(function () {
          I &&
            0 < document.getElementsByClassName("css-17dpd3l").length &&
            ma();
        }, 30));
  });
  document.body.onkeyup = function (a) {
    32 == a.keyCode ? ia() : 192 == a.keyCode && la();
  };
  window.addEventListener("resize", u);
  T(200);
  document
    .querySelectorAll(".css-14dbfau")
    .item(2)
    .addEventListener("click", function () {
      pa(document.querySelectorAll(".css-14dbfau").item(1));
    });
  document
    .querySelectorAll(".css-14dbfau")
    .item(0)
    .addEventListener("click", function () {
      pa(document.querySelectorAll(".css-14dbfau").item(1));
    });
}
function mainFunction() {
  if (0 < document.querySelectorAll("#multi-work-container").length)
    if (0 < document.getElementsByClassName("css-17dpd3l").length)
      setTimeout(mainFunction, 100);
    else if (0 < document.getElementsByClassName("load-card").length) run3(!1);
    else if (0 < document.getElementsByClassName("wo-card").length) run2(!1);
    else {
      var w = function () {
        document.querySelectorAll(".tab")[0].className.includes("active") ||
          setTimeout(function () {
            if (0 < document.getElementsByClassName("css-17dpd3l").length)
              setTimeout(w, 200);
            else {
              var F = !1;
              0 < document.getElementsByClassName("load-card").length
                ? ((F = !0), run3(!0))
                : 0 < document.getElementsByClassName("wo-card").length &&
                  ((F = !0), run2(!0));
              F && document.removeEventListener("click", w);
            }
          }, 200);
      };
      document.addEventListener("click", w);
    }
  else run1();
}

chrome.runtime.onMessage.addListener((message) => {
  console.log(message);
  if (
    "name" in message &&
    message?.name.toLowerCase() ===
      document.getElementById("company-name").innerText.toLowerCase()
  ) {
    setTimeout(function () {
      isLogined = true;
      mainFunction();
    }, 100);
  }

  if ("exit" in message && document.getElementById("relayAutoRefresher")) {
    isLogined = false;
    document.getElementById("relayAutoRefresher").remove();
    document.getElementsByClassName("css-hkinvy")[0].style.height = "auto";
  }
});

function addCustomComponents() {
  const refresher = document.getElementById("relayAutoRefresher");
  const rangeBox = document.getElementById("ratePickerSpan");
  if (document.getElementsByClassName("css-hkinvy")[0]) {
    document.getElementsByClassName("css-hkinvy")[0].style.height = 0;
  }

  const clearFilter = document.createElement("span");
  clearFilter.id = "customClearFilter";
  clearFilter.innerHTML = `
    <svg width="112" height="26" viewBox="0 0 112 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="112" height="26" rx="4" fill="#FFEAED"/>
    <path d="M14.718 18.14C12.17 18.14 10.896 17.3187 10.896 15.676V11.364C10.896 9.628 12.17 8.76 14.718 8.76C15.586 8.76 16.4167 8.84867 17.21 9.026V10.034C16.314 9.81 15.4927 9.698 14.746 9.698C14.382 9.698 14.0647 9.72133 13.794 9.768C13.5233 9.80533 13.262 9.87533 13.01 9.978C12.4687 10.2113 12.198 10.6687 12.198 11.35V15.606C12.198 16.6513 13.066 17.174 14.802 17.174C15.5487 17.174 16.37 17.062 17.266 16.838V17.874C16.4727 18.0513 15.6233 18.14 14.718 18.14ZM18.9943 8.2H20.2543V18H18.9943V8.2ZM25.2957 18.14C23.2237 18.14 22.1877 17.4493 22.1877 16.068V13.394C22.1877 12.5727 22.421 11.9847 22.8877 11.63C23.3637 11.266 24.129 11.084 25.1837 11.084C26.1823 11.084 26.901 11.2567 27.3397 11.602C27.7877 11.9473 28.0117 12.5447 28.0117 13.394V14.892H23.4617V15.914C23.4617 16.3807 23.625 16.7167 23.9517 16.922C24.2783 17.1273 24.7823 17.23 25.4637 17.23C26.1077 17.23 26.8683 17.118 27.7457 16.894V17.86C26.887 18.0467 26.0703 18.14 25.2957 18.14ZM26.7517 14.066V13.002C26.7517 12.5913 26.6257 12.3113 26.3737 12.162C26.131 12.0033 25.711 11.924 25.1137 11.924C24.535 11.924 24.115 12.0033 23.8537 12.162C23.5923 12.3113 23.4617 12.5913 23.4617 13.002V14.066H26.7517ZM32.0178 18.14C31.3738 18.14 30.8745 18.0793 30.5198 17.958C30.1745 17.8367 29.9225 17.622 29.7638 17.314C29.6145 17.006 29.5398 16.5627 29.5398 15.984C29.5398 15.4707 29.6098 15.074 29.7498 14.794C29.8992 14.5047 30.1465 14.2993 30.4918 14.178C30.8465 14.0567 31.3458 13.996 31.9898 13.996H34.0198V12.918C34.0198 12.666 33.9685 12.4747 33.8658 12.344C33.7725 12.204 33.6092 12.106 33.3758 12.05C33.1518 11.994 32.8205 11.966 32.3818 11.966C31.6818 11.966 30.9072 12.022 30.0578 12.134V11.21C30.9818 11.126 31.8172 11.084 32.5638 11.084C33.3478 11.084 33.9265 11.1447 34.2998 11.266C34.6732 11.378 34.9298 11.5787 35.0698 11.868C35.2098 12.1573 35.2798 12.6053 35.2798 13.212V18H34.0618V17.356C33.9592 17.8787 33.2778 18.14 32.0178 18.14ZM32.2278 17.314C32.6852 17.314 33.0725 17.2813 33.3898 17.216C33.8098 17.132 34.0198 16.936 34.0198 16.628V14.78H32.0738C31.6725 14.78 31.3832 14.8127 31.2058 14.878C31.0285 14.934 30.9118 15.046 30.8558 15.214C30.7998 15.382 30.7718 15.6527 30.7718 16.026C30.7718 16.362 30.8045 16.6233 30.8698 16.81C30.9352 16.9873 31.0518 17.118 31.2198 17.202C31.3878 17.2767 31.6398 17.314 31.9758 17.314H32.2278ZM37.465 11.224H38.655V12.33C38.655 12.1153 38.7484 11.9147 38.935 11.728C39.1217 11.532 39.3597 11.378 39.649 11.266C39.9384 11.1447 40.223 11.084 40.503 11.084H41.119V12.162H40.419C39.8217 12.162 39.3877 12.2413 39.117 12.4C38.8557 12.5493 38.725 12.8247 38.725 13.226V18H37.465V11.224ZM46.2018 12.05H44.6478V11.224H46.2018V10.132C46.2018 9.35733 46.3698 8.82067 46.7058 8.522C47.0511 8.214 47.6298 8.06 48.4418 8.06C48.9458 8.06 49.4171 8.08333 49.8558 8.13V8.942C49.5011 8.89533 49.1838 8.872 48.9038 8.872C48.5025 8.872 48.1991 8.90467 47.9938 8.97C47.7978 9.03533 47.6578 9.152 47.5738 9.32C47.4991 9.47867 47.4618 9.72133 47.4618 10.048V11.224H49.8558V12.05H47.4618V18H46.2018V12.05ZM50.7798 8.2H52.0398V9.572H50.7798V8.2ZM50.7798 11.224H52.0398V18H50.7798V11.224ZM54.2268 8.2H55.4868V18H54.2268V8.2ZM60.5141 18.14C59.9354 18.14 59.4827 18.0793 59.1561 17.958C58.8294 17.8273 58.5914 17.6127 58.4421 17.314C58.3021 17.006 58.2321 16.5767 58.2321 16.026V12.05H56.7201V11.224H58.2321V9.124H59.5061V11.224H61.9281V12.05H59.5061V16.096C59.5061 16.432 59.5434 16.684 59.6181 16.852C59.7021 17.02 59.8421 17.1413 60.0381 17.216C60.2434 17.2813 60.5374 17.314 60.9201 17.314C61.0414 17.314 61.3774 17.2767 61.9281 17.202V18.028C61.4521 18.1027 60.9807 18.14 60.5141 18.14ZM66.1609 18.14C64.0889 18.14 63.0529 17.4493 63.0529 16.068V13.394C63.0529 12.5727 63.2862 11.9847 63.7529 11.63C64.2289 11.266 64.9942 11.084 66.0489 11.084C67.0476 11.084 67.7662 11.2567 68.2049 11.602C68.6529 11.9473 68.8769 12.5447 68.8769 13.394V14.892H64.3269V15.914C64.3269 16.3807 64.4902 16.7167 64.8169 16.922C65.1436 17.1273 65.6476 17.23 66.3289 17.23C66.9729 17.23 67.7336 17.118 68.6109 16.894V17.86C67.7522 18.0467 66.9356 18.14 66.1609 18.14ZM67.6169 14.066V13.002C67.6169 12.5913 67.4909 12.3113 67.2389 12.162C66.9962 12.0033 66.5762 11.924 65.9789 11.924C65.4002 11.924 64.9802 12.0033 64.7189 12.162C64.4576 12.3113 64.3269 12.5913 64.3269 13.002V14.066H67.6169ZM70.7971 11.224H71.9871V12.33C71.9871 12.1153 72.0804 11.9147 72.2671 11.728C72.4537 11.532 72.6917 11.378 72.9811 11.266C73.2704 11.1447 73.5551 11.084 73.8351 11.084H74.4511V12.162H73.7511C73.1537 12.162 72.7197 12.2413 72.4491 12.4C72.1877 12.5493 72.0571 12.8247 72.0571 13.226V18H70.7971V11.224ZM77.7773 18.14C77.0586 18.14 76.2839 18.084 75.4533 17.972V17.006C76.5453 17.1833 77.3293 17.272 77.8053 17.272C78.4026 17.272 78.8319 17.216 79.0933 17.104C79.3546 16.9827 79.4853 16.7633 79.4853 16.446V15.76C79.4853 15.4707 79.3873 15.2653 79.1913 15.144C78.9953 15.0227 78.6779 14.962 78.2393 14.962H77.4693C76.7693 14.962 76.2326 14.8173 75.8593 14.528C75.4953 14.2387 75.3133 13.8327 75.3133 13.31V12.68C75.3133 11.616 76.3213 11.084 78.3373 11.084C78.4866 11.084 79.1726 11.1213 80.3953 11.196V12.106C79.5646 11.9753 78.8599 11.91 78.2813 11.91C77.6186 11.91 77.1659 11.9753 76.9233 12.106C76.6806 12.2367 76.5593 12.456 76.5593 12.764V13.338C76.5593 13.7953 76.9746 14.024 77.8053 14.024H78.5893C80.0173 14.024 80.7313 14.556 80.7313 15.62V16.208C80.7313 16.908 80.4886 17.4073 80.0033 17.706C79.5179 17.9953 78.7759 18.14 77.7773 18.14Z" fill="#E13B54"/>
    <g clip-path="url(#clip0_1_40)">
    <path d="M88.8086 15.8071L92.1117 19.1102C92.7461 19.7446 93.7524 19.7446 94.3867 19.1102L97.5586 15.9383C98.0836 15.4133 98.3899 14.7133 98.3899 13.9477C98.3899 13.3571 98.2149 12.8102 97.8867 12.3508L101.102 9.13522C101.409 8.82897 101.584 8.43522 101.584 8.01959C101.584 7.58209 101.409 7.16647 101.102 6.86022C100.796 6.55397 100.38 6.40084 99.9649 6.40084C99.5492 6.40084 99.1336 6.55397 98.8274 6.86022L95.6117 10.0758C95.1305 9.72584 94.5617 9.55084 93.993 9.55084C93.2711 9.55084 92.5492 9.81334 92.0024 10.3602L88.8305 13.5321C88.5242 13.8383 88.3711 14.2321 88.3711 14.6696C88.3711 15.1071 88.5024 15.5008 88.8086 15.8071ZM99.5274 7.56022C99.768 7.31959 100.162 7.31959 100.402 7.56022C100.512 7.66959 100.577 7.84459 100.577 7.99772C100.577 8.15084 100.512 8.30397 100.402 8.43522L97.2305 11.6071L96.3555 10.7321L99.5274 7.56022ZM95.2617 11.0602L96.8586 12.6571C97.2086 13.0071 97.3836 13.4665 97.3836 13.9477C97.3836 14.429 97.1867 14.8883 96.8586 15.2383L96.3117 15.7852L92.1336 11.6071L92.6805 11.0602C93.4024 10.3602 94.5617 10.3602 95.2617 11.0602ZM89.5086 14.2321L91.4555 12.2852L95.6117 16.4633L93.6649 18.4102C93.4242 18.6508 93.0305 18.6508 92.7899 18.4102L89.4867 15.1071C89.3774 14.9977 89.3117 14.8446 89.3117 14.6696C89.3117 14.4946 89.3774 14.3633 89.5086 14.2321Z" fill="#E13B54"/>
    <path d="M93.993 12.2852C94.1899 12.4821 94.4961 12.4821 94.693 12.2852C94.8899 12.0883 94.8899 11.7821 94.693 11.5852C94.6055 11.4977 94.4742 11.4321 94.343 11.4321C94.2117 11.4321 94.0805 11.4758 93.993 11.5852C93.7961 11.7602 93.7961 12.0883 93.993 12.2852Z" fill="#E13B54"/>
    <path d="M95.6774 14.1883C95.8742 14.3852 96.1805 14.3852 96.3774 14.1883C96.5742 13.9915 96.5742 13.6852 96.3774 13.4883C96.2899 13.4008 96.1586 13.3352 96.0274 13.3352C95.8961 13.3352 95.7649 13.379 95.6774 13.4883C95.4805 13.6633 95.4805 13.9915 95.6774 14.1883Z" fill="#E13B54"/>
    </g>
    <defs>
    <clipPath id="clip0_1_40">
    <rect width="14" height="14" fill="white" transform="translate(88 6)"/>
    </clipPath>
    </defs>
    </svg>
  `;

  if (refresher?.firstChild?.id === "myBox") {
    document.getElementById("myBox").remove();
    createMyDiv(refresher);
  } else {
    createMyDiv(refresher);
  }

  if (!document.getElementById("customClearFilter")) {
    rangeBox?.appendChild(clearFilter);

    document
      .getElementById("customClearFilter")
      ?.addEventListener("click", () => {
        document
          .getElementsByClassName("css-1qoar0o")
          [document.getElementsByClassName("css-1qoar0o").length - 1].click();
      });
  }
}

function createMyDiv(refresher) {
  const myBox = document.createElement("div");
  myBox.id = "myBox";
  myBox.innerHTML = `
    <span id="customGoToTop">
      <svg width="102" height="28" viewBox="0 0 102 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="102" height="28" rx="3" fill="#E9F7FF"/>
      <path d="M15.082 19.14C14.6527 19.14 14.27 19.1213 13.934 19.084C13.6073 19.0467 13.262 18.9767 12.898 18.874C12.4873 18.762 12.142 18.622 11.862 18.454C11.582 18.2767 11.3533 18.0387 11.176 17.74C10.9893 17.4227 10.896 17.068 10.896 16.676V12.378C10.896 11.8553 11.0313 11.4073 11.302 11.034C11.5727 10.6607 11.946 10.39 12.422 10.222C12.8793 10.0633 13.3133 9.95133 13.724 9.886C14.144 9.81133 14.5967 9.774 15.082 9.774C16.2393 9.774 17.2847 9.84867 18.218 9.998V11.048C17.8633 10.964 17.3547 10.8893 16.692 10.824C16.0387 10.7493 15.5113 10.712 15.11 10.712C13.1967 10.712 12.24 11.2627 12.24 12.364V16.648C12.24 16.9467 12.3287 17.208 12.506 17.432C12.6927 17.656 12.9447 17.8193 13.262 17.922C13.5607 18.034 13.8593 18.1133 14.158 18.16C14.4567 18.1973 14.7927 18.216 15.166 18.216C15.7913 18.216 16.4587 18.132 17.168 17.964V14.786H15.04V13.834H18.428V18.72C17.2147 19 16.0993 19.14 15.082 19.14ZM23.2862 19.14C22.6889 19.14 22.2409 19.1167 21.9422 19.07C21.6436 19.0327 21.3449 18.944 21.0462 18.804C20.7382 18.664 20.5142 18.44 20.3742 18.132C20.2342 17.8147 20.1642 17.39 20.1642 16.858V14.506C20.1642 14.086 20.2156 13.7173 20.3182 13.4C20.4209 13.0827 20.5562 12.8353 20.7242 12.658C20.8642 12.4993 21.0742 12.378 21.3542 12.294C21.6436 12.2007 21.9376 12.14 22.2362 12.112C22.5722 12.0933 22.9222 12.084 23.2862 12.084C23.7716 12.084 24.1356 12.098 24.3782 12.126C24.6302 12.1447 24.8962 12.1913 25.1762 12.266C25.4656 12.35 25.6896 12.476 25.8482 12.644C26.0069 12.812 26.1422 13.0547 26.2542 13.372C26.3569 13.6987 26.4082 14.0767 26.4082 14.506V16.858C26.4082 17.6513 26.2262 18.23 25.8622 18.594C25.7129 18.7433 25.4982 18.86 25.2182 18.944C24.9382 19.028 24.6489 19.084 24.3502 19.112C23.9956 19.1307 23.6409 19.14 23.2862 19.14ZM23.2862 18.314C23.6782 18.314 23.9629 18.3047 24.1402 18.286C24.3176 18.2673 24.4902 18.216 24.6582 18.132C24.8262 18.0573 24.9429 17.936 25.0082 17.768C25.0829 17.5907 25.1202 17.348 25.1202 17.04V14.296C25.1202 13.876 25.0689 13.5727 24.9662 13.386C24.8636 13.19 24.6862 13.064 24.4342 13.008C24.1916 12.9427 23.8089 12.91 23.2862 12.91C22.7636 12.91 22.3762 12.9427 22.1242 13.008C21.8816 13.064 21.7089 13.19 21.6062 13.386C21.5036 13.5727 21.4522 13.876 21.4522 14.296V17.04C21.4522 17.348 21.4849 17.5907 21.5502 17.768C21.6249 17.936 21.7462 18.0573 21.9142 18.132C22.0822 18.216 22.2549 18.2673 22.4322 18.286C22.6096 18.3047 22.8942 18.314 23.2862 18.314ZM34.4418 19.14C33.8631 19.14 33.4105 19.0793 33.0838 18.958C32.7571 18.8273 32.5191 18.6127 32.3698 18.314C32.2298 18.006 32.1598 17.5767 32.1598 17.026V13.05H30.6478V12.224H32.1598V10.124H33.4338V12.224H35.8558V13.05H33.4338V17.096C33.4338 17.432 33.4711 17.684 33.5458 17.852C33.6298 18.02 33.7698 18.1413 33.9658 18.216C34.1711 18.2813 34.4651 18.314 34.8478 18.314C34.9691 18.314 35.3051 18.2767 35.8558 18.202V19.028C35.3798 19.1027 34.9085 19.14 34.4418 19.14ZM40.1026 19.14C39.5053 19.14 39.0573 19.1167 38.7586 19.07C38.46 19.0327 38.1613 18.944 37.8626 18.804C37.5546 18.664 37.3306 18.44 37.1906 18.132C37.0506 17.8147 36.9806 17.39 36.9806 16.858V14.506C36.9806 14.086 37.032 13.7173 37.1346 13.4C37.2373 13.0827 37.3726 12.8353 37.5406 12.658C37.6806 12.4993 37.8906 12.378 38.1706 12.294C38.46 12.2007 38.754 12.14 39.0526 12.112C39.3886 12.0933 39.7386 12.084 40.1026 12.084C40.588 12.084 40.952 12.098 41.1946 12.126C41.4466 12.1447 41.7126 12.1913 41.9926 12.266C42.282 12.35 42.506 12.476 42.6646 12.644C42.8233 12.812 42.9586 13.0547 43.0706 13.372C43.1733 13.6987 43.2246 14.0767 43.2246 14.506V16.858C43.2246 17.6513 43.0426 18.23 42.6786 18.594C42.5293 18.7433 42.3146 18.86 42.0346 18.944C41.7546 19.028 41.4653 19.084 41.1666 19.112C40.812 19.1307 40.4573 19.14 40.1026 19.14ZM40.1026 18.314C40.4946 18.314 40.7793 18.3047 40.9566 18.286C41.134 18.2673 41.3066 18.216 41.4746 18.132C41.6426 18.0573 41.7593 17.936 41.8246 17.768C41.8993 17.5907 41.9366 17.348 41.9366 17.04V14.296C41.9366 13.876 41.8853 13.5727 41.7826 13.386C41.68 13.19 41.5026 13.064 41.2506 13.008C41.008 12.9427 40.6253 12.91 40.1026 12.91C39.58 12.91 39.1926 12.9427 38.9406 13.008C38.698 13.064 38.5253 13.19 38.4226 13.386C38.32 13.5727 38.2686 13.876 38.2686 14.296V17.04C38.2686 17.348 38.3013 17.5907 38.3666 17.768C38.4413 17.936 38.5626 18.0573 38.7306 18.132C38.8986 18.216 39.0713 18.2673 39.2486 18.286C39.426 18.3047 39.7106 18.314 40.1026 18.314ZM51.2582 19.14C50.6796 19.14 50.2269 19.0793 49.9002 18.958C49.5736 18.8273 49.3356 18.6127 49.1862 18.314C49.0462 18.006 48.9762 17.5767 48.9762 17.026V13.05H47.4642V12.224H48.9762V10.124H50.2502V12.224H52.6722V13.05H50.2502V17.096C50.2502 17.432 50.2876 17.684 50.3622 17.852C50.4462 18.02 50.5862 18.1413 50.7822 18.216C50.9876 18.2813 51.2816 18.314 51.6642 18.314C51.7856 18.314 52.1216 18.2767 52.6722 18.202V19.028C52.1962 19.1027 51.7249 19.14 51.2582 19.14ZM56.919 19.14C56.3217 19.14 55.8737 19.1167 55.575 19.07C55.2764 19.0327 54.9777 18.944 54.679 18.804C54.371 18.664 54.147 18.44 54.007 18.132C53.867 17.8147 53.797 17.39 53.797 16.858V14.506C53.797 14.086 53.8484 13.7173 53.951 13.4C54.0537 13.0827 54.189 12.8353 54.357 12.658C54.497 12.4993 54.707 12.378 54.987 12.294C55.2764 12.2007 55.5704 12.14 55.869 12.112C56.205 12.0933 56.555 12.084 56.919 12.084C57.4044 12.084 57.7684 12.098 58.011 12.126C58.263 12.1447 58.529 12.1913 58.809 12.266C59.0984 12.35 59.3224 12.476 59.481 12.644C59.6397 12.812 59.775 13.0547 59.887 13.372C59.9897 13.6987 60.041 14.0767 60.041 14.506V16.858C60.041 17.6513 59.859 18.23 59.495 18.594C59.3457 18.7433 59.131 18.86 58.851 18.944C58.571 19.028 58.2817 19.084 57.983 19.112C57.6284 19.1307 57.2737 19.14 56.919 19.14ZM56.919 18.314C57.311 18.314 57.5957 18.3047 57.773 18.286C57.9504 18.2673 58.123 18.216 58.291 18.132C58.459 18.0573 58.5757 17.936 58.641 17.768C58.7157 17.5907 58.753 17.348 58.753 17.04V14.296C58.753 13.876 58.7017 13.5727 58.599 13.386C58.4964 13.19 58.319 13.064 58.067 13.008C57.8244 12.9427 57.4417 12.91 56.919 12.91C56.3964 12.91 56.009 12.9427 55.757 13.008C55.5144 13.064 55.3417 13.19 55.239 13.386C55.1364 13.5727 55.085 13.876 55.085 14.296V17.04C55.085 17.348 55.1177 17.5907 55.183 17.768C55.2577 17.936 55.379 18.0573 55.547 18.132C55.715 18.216 55.8877 18.2673 56.065 18.286C56.2424 18.3047 56.527 18.314 56.919 18.314ZM62.0061 12.224H63.2521V12.952H63.2661C63.3687 12.3733 64.1387 12.084 65.5761 12.084C66.4347 12.084 67.0834 12.266 67.5221 12.63C67.9607 12.9847 68.1801 13.442 68.1801 14.002V16.788C68.1801 17.1893 68.1194 17.5393 67.9981 17.838C67.8861 18.1367 67.7367 18.37 67.5501 18.538C67.3821 18.6967 67.1487 18.8227 66.8501 18.916C66.5607 19.0093 66.2714 19.07 65.9821 19.098C65.7207 19.126 65.4034 19.14 65.0301 19.14C64.6194 19.14 64.2414 19.0933 63.8961 19C63.5601 18.8973 63.3501 18.7527 63.2661 18.566V21.912H62.0061V12.224ZM65.0581 18.286C65.5434 18.286 65.9121 18.2533 66.1641 18.188C66.4254 18.1133 66.6121 17.9827 66.7241 17.796C66.8361 17.6093 66.8921 17.3247 66.8921 16.942V14.45C66.8921 14.03 66.8361 13.7173 66.7241 13.512C66.6121 13.3067 66.4254 13.1713 66.1641 13.106C65.9121 13.0313 65.5387 12.994 65.0441 12.994C64.5494 12.994 64.1807 13.0313 63.9381 13.106C63.6954 13.1713 63.5227 13.3067 63.4201 13.512C63.3174 13.708 63.2661 14.0207 63.2661 14.45V16.942C63.2661 17.3247 63.3174 17.6093 63.4201 17.796C63.5321 17.9827 63.7141 18.1133 63.9661 18.188C64.2181 18.2533 64.5821 18.286 65.0581 18.286Z" fill="#41A2DB"/>
      <path d="M79 17L84 12L89 17" stroke="#41A2DB" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>    
    </span>

    <div id="ref">
      <span id="updatedTime">Last updated</span>
      <div id="refre">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C6.50155 2.25 4.32014 3.60742 3.15303 5.625M3.15303 5.625V2.25M3.15303 5.625H6.46875" stroke="#41A2DB" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>      
      </div>
    </div>
  `;

  if (!document.getElementById("myBox")) {
    refresher?.appendChild(myBox);

    document.getElementById("customGoToTop")?.addEventListener("click", () => {
      document
        .getElementsByClassName("css-1qoar0o")
        [document.getElementsByClassName("css-1qoar0o").length - 2].click();
    });

    document.getElementById("refre")?.addEventListener("click", () => {
      document.getElementsByClassName("css-10ebv51")[0].click();
    });

    const elementToObserve = document.getElementsByClassName("css-f4cjug")[0];

    if (refresher && elementToObserve) {
      const observer = new MutationObserver((mutationsList) => {
        if (
          mutationsList[0].target.data &&
          document.getElementById("updatedTime")
        ) {
          document.getElementById("updatedTime").innerText =
            mutationsList[0]?.target?.data;
        }
      });

      observer.observe(elementToObserve, {
        subtree: true,
        childList: true,
        characterData: true,
      });
    }
  }
}

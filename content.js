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
    console.log("oa");
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
      ' id="highlightedOnTopBox" title="Show at the top"><div style="display: inline-flex;">&nbsp;&nbsp;Show at the top</div></div> <div class="form-check" ><input type="checkbox" id="easyBook" class="swiper" style="margin-right: 0.5rem;" title="Easy book"><div style="display: inline-flex; ">Easy book</div></div>';
    g = document.createElement("span");
    g.id = "switches2";
    g.style = "max-width: 200px;";
    g.innerHTML =
      '<div class="form-check" ><input type="checkbox" id="autoExpand" class="swiper" ' +
      (H ? "checked " : " ") +
      ' style="margin-right: 0.5rem;" title="Show details first load"><div style="display: inline-flex; ">Show details</div></div> <div class="form-check" ><input type="checkbox" id="autoBook" class="swiper" style="margin-right: 0.5rem;" title="Auto book"><div style="display: inline-flex; ">Auto book</div></div>';
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
        : chrome.runtime.sendMessage({ type: "6ad1f6as5f1" }, function (d) {});
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
      '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #077398;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important; font-size:0.9rem;}}</style>  <section class="range-sliders"><input id="rfrrtsldr" type="range" max="10" min="0.1" step="0.1" value="5" style = "width: 100%;"></input> </section><div><p id="rrr" align="center">Refresh Rate: 5X</p></div>';
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
      ' id="highlightedOnTopBox" title="Show at the top"><div style="display: inline-flex;">&nbsp;&nbsp;Show at the top</div></div> <div class="form-check"><input type="checkbox" class="swiper" id="ncb" style="margin-right: 0.5rem;" title="Easy book"><div style="display: inline-flex;">Easy book</div></div>';
    b = document.createElement("span");
    b.id = "switches2";
    b.style = "max-width: 200px;";
    b.innerHTML =
      '<div class="form-check" ><input type="checkbox" id="autoExpand" class="swiper" ' +
      (q ? "checked " : " ") +
      ' style="margin-right: 0.5rem;" title="Show details"><div style="display: inline-flex; ">Show details</div></div> <div class="form-check" ><input type="checkbox" id="autoBook" class="swiper" style="margin-right: 0.5rem;" title="Auto book"><div style="display: inline-flex; ">Auto book</div></div>  ';
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
        : chrome.runtime.sendMessage({ type: "6ad1f6as5f1" }, function (c) {});
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
      '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #077398;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important;font-size:0.9rem;}}</style>            <section class="range-sliders"><input id="lwrsldr" type="range" max="10" min="0.1" step="0.1" value="2.0"><input id="pprsldr" type="range" max="10" min="0.1" step="0.1" value="5.0"></section><div><p id="rrr" align="center">Range: 2X - 5X</p></div>';
    ca();
    document.getElementById("lwrsldr").addEventListener("input", ja);
    document.getElementById("pprsldr").addEventListener("input", ja);
  }
  function da() {
    n = !1;
    t("lwrsldr");
    t("pprsldr");
    document.querySelector("#ratePickerSpan").innerHTML =
      '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #077398;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important; font-size:0.9rem;}}</style>  <section class="range-sliders"><input id="rfrrtsldr" type="range" max="10" min="0.1" step="0.1" value="5" style = "width: 100%;"></input> </section><div><p id="rrr" align="center">Refresh Rate: 5X</p></div>';
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
      ' id="highlightedOnTopBox" title="Show at the top"><div style="display: inline-flex;">&nbsp;&nbsp;Show at the top</div></div>                                                                                                                                                                                                                                                                        <div class="form-check"><input type="checkbox" class="swiper" id="ncb" style="margin-right: 0.5rem;" title="Easy book"><div style="display: inline-flex;">Easy book</div></div>';
    e = document.createElement("span");
    e.id = "switches2";
    e.style = "max-width: 200px;";
    e.innerHTML =
      '<div class="form-check" ><input type="checkbox" id="autoExpand" class="swiper" ' +
      (X ? "checked " : " ") +
      ' style="margin-right: 0.5rem;" title="Show details"><div style="display: inline-flex; ">Show details</div></div> <div class="form-check" ><input type="checkbox" id="autoBook" class="swiper" style="margin-right: 0.5rem;" title="Auto book"><div style="display: inline-flex; ">Auto book</div></div>';
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
          '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #34688c;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important;font-size:0.9rem;}}</style>            <section class="range-sliders"><input id="lwrsldr" type="range" max="10" min="0.1" step="0.1" value="2.0"><input id="pprsldr" type="range" max="10" min="0.1" step="0.1" value="5.0"></section><div><p id="rrr" align="center">Range: 2X - 5X</p></div>'),
        ca(),
        document.getElementById("lwrsldr").addEventListener("input", ja),
        document.getElementById("pprsldr").addEventListener("input", ja))
      : da();
  }
  function da() {
    S("lwrsldr");
    S("pprsldr");
    document.querySelector("#ratePickerSpan").innerHTML =
      '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #34688c;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important; font-size:0.9rem;}}</style>  <section class="range-sliders"><input id="rfrrtsldr" type="range" max="10" min="0.1" step="0.1" value="5" style = "width: 100%;"></input> </section><div><p id="rrr" align="center">Refresh Rate: 5X</p></div>';
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
setTimeout(function () {
  mainFunction();
}, 100);

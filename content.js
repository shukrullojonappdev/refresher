var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (p) {
  console.log("arrayIteratorImpl");
  var B = 0;
  return function () {
    return B < p.length ? { done: !1, value: p[B++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (p) {
  console.log("arrayIterator");
  return { next: $jscomp.arrayIteratorImpl(p) };
};
$jscomp.makeIterator = function (p) {
  var B = "undefined" != typeof Symbol && Symbol.iterator && p[Symbol.iterator];
  if (B) return B.call(p);
  if ("number" == typeof p.length) return $jscomp.arrayIterator(p);
  throw Error(String(p) + " is not an iterable or ArrayLike");
};
function theFunction2() {
  console.log("theFunction2");

  // Yangi asosiy div yaratish funksiyasi
  function p() {
    console.log("p");
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
    console.log("B");
    k("parentForFilters");
    k("boxForfilters");
    k("onBtn");
    k("hideSettingsButtonContainer");
    p();
  }

  // Yangilashni bosilganda ikonkani o'zgartirish funksiyasi
  function ra() {
    console.log("ra");
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
      console.log(a, b, C, u, q, F);
    }, 10);
  }
  function ya() {
    console.log("ya");

    if (D) return !1;
    if (1 > document.getElementsByClassName("css-17dpd3l").length) {
      if (u) return (u = D = !0), clearInterval(G), (G = null), !1;
      var a = document.getElementsByClassName("css-wck2if").item(0);
      null == a && (a = document.getElementsByClassName("no-results").item(0));
      if (null == a) {
        a = document.getElementsByClassName("wo-card").item(0).parentNode;
        if (-1 == l) {
          console.log(l);
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
            ) {
              for (d = 0; d < a; d++)
                c.childNodes[0].childNodes[1].childNodes[
                  d
                ].childNodes[0].click();
              console.log(c, V, a);
            }
            D = !1;
            a = b;
          }
          console.log(a);
          if (a) return K.play(), ta(), E(), !1;
        }
        if (!A && document.getElementsByClassName("wo-card").length !== 0) {
          document
            .getElementsByClassName("wo-card")[0]
            .getElementsByClassName("wo-book-button")[0]
            .addEventListener("click", () => {
              console.log("booked");
            });
          document
            .getElementsByClassName("wo-card")[0]
            .getElementsByClassName("wo-book-button")[0]
            .click();
          return K.play(), ta(), E(), !1;
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
    console.log("ta");
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
    console.log("T");
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
    console.log("Y");
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
    console.log("sa");
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
    console.log("Z");
    var a = e[0];
    z && (a = aa(e[0], e[1]));
    G = setTimeout(ya, a);
  }
  function E() {
    console.log("E");
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
    console.log("ia");
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
      ' style="margin-right: 0.5rem;" title="Automatically expands (shows detailed information about) the first highlighted load"><div style="display: inline-flex; ">Show details</div></div>  <div class="form-check"><input type="checkbox" class="check-input swiper" id="autobook" style="margin-right: 0.5rem;" title="Allows to book loads with only one click"><div style="display: inline-flex;">Auto book</div></div>';
    a.appendChild(b);
    a.appendChild(c);
    document.getElementById("ncb").addEventListener("click", Aa);
    document
      .getElementById("highlightedOnTopBox")
      .addEventListener("click", Ba);
    document.getElementById("autobook").addEventListener("click", au);
    // document.getElementById("refRateRange").addEventListener("click", Ca);
    document.getElementById("autoExpand").addEventListener("click", la);
    h && document.getElementById("ncb").click();
  }
  function ma() {
    console.log("ma");
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
    console.log("k");
    null != document.getElementById(a) &&
      ((a = document.getElementById(a)), a.parentNode.removeChild(a));
  }
  function ca() {
    console.log("ca");
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
    console.log("va");
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
    console.log("ua");
    clearInterval(J);
    h &&
      (J = setInterval(function () {
        ca() && clearInterval(J);
      }, 10));
    na();
  }
  function na() {
    console.log("na");
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
    console.log("Aa");
    document.getElementById("ncb").checked ? ((h = !0), ca()) : ((h = !1), Y());
  }
  function fa(a, b) {
    console.log("fa");
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
    console.log("Ba");
    t = !t;
  }
  function Ca() {
    (z = !z) ? oa() : ja();
    pa();
  }
  function oa() {
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
    z = !1;
    k("lwrsldr");
    k("pprsldr");
    document.querySelector("#ratePickerSpan").innerHTML =
      '<style>section{padding-top:5px;}section.range-sliders input {position: absolute !important; margin: 0 !important;width: 100% !important;max-width: 170px !important;}section.range-sliders input::-webkit-slider-thumb {pointer-events: all !important;position: relative !important;z-index: 1 !important;outline: 0 !important;}section.range-sliders input {-webkit-appearance: none;height: 7px;background: #FFF;border-radius: 10px;border: 1px solid #ccc;}#rrr{margin-top:19px;}input::-webkit-slider-thumb {-webkit-appearance: none;appearance: none;width: 15px;height: 15px;border-radius: 15px; background: #077398;cursor: pointer;}@media only screen and (max-width: 450px) {section.range-sliders input {max-width: 120px !important;} #rrr{max-width: 120px !important; font-size:0.9rem;}}</style>  <section class="range-sliders"><input id="rfrrtsldr" type="range" max="10" min="0.1" step="0.1" value="5" style = "width: 100%;"></input> </section><div><p id="rrr" align="center">Refresh Rate: 5X</p></div>';
    W();
    document.getElementById("rfrrtsldr").addEventListener("input", xa);
  }
  function xa() {
    console.log("xa");
    var a = document.getElementById("rfrrtsldr").value;
    e[0] = 1e3 / a;
    pa();
    document.getElementById("rrr").innerHTML = "Refresh Rate: " + a + "X";
  }
  function wa() {
    console.log("wa");
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
    console.log("ka");
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
    console.log("W");
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
    chrome.storage.local.set({ refRate: e, refreshRateRangeTypeIsRange: z });
  }
  function la() {
    console.log("la");
    V = !V;
  }
  function au() {
    console.log("au");
    A = !A;
  }
  function aa(a, b) {
    console.log("aa");
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a) + a);
  }
  function P(a) {
    console.log("P");
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
    console.log("Q");
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
    A = !1,
    R = null,
    w = null,
    X = !0;

  // Extension run path
  setTimeout(() => {
    A || (k("relayAutoRefresher"), (A = !0), ma());
  }, 1000);

  document.body.addEventListener("mouseup", function () {
    console.log("mouseup");
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

function mainFunction() {
  theFunction2();
}

setTimeout(function () {
  mainFunction();
}, 100);

function triggerMouseEvent(node, eventType) {
  var clickEvent = document.createEvent("MouseEvents");
  clickEvent.initEvent(eventType, true, true);
  node.dispatchEvent(clickEvent);
}

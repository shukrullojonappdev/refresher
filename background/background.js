// function run() {
//   if (type(firebase) !== undefined) {
//     console.log("function run");

//     function u() {
//       console.log("function u");

//       // if (f) k("useLoggedIn", null, null, null);
//       // else {
//       //   var a = new firebase.auth.GoogleAuthProvider();
//       //   a.addScope("profile");
//       //   a.addScope("email");
//       //   firebase
//       //     .auth()
//       //     .signInWithPopup(a)
//       //     .then(function (b) {
//       //       k("useLoggedIn", null, null, null);
//       //     });
//       // }

//       k("useLoggedIn", null, null, null);
//     }
//     function l() {
//       var a = firebase.auth().currentUser;
//       a
//         ? ((d = !1),
//           (a = a.uid),
//           m
//             .collection("customers")
//             .doc(a)
//             .get()
//             .then(function (b) {
//               null != b.data() && (n = b.data().stripeId);
//             }),
//           m
//             .collection("customers")
//             .doc(a)
//             .collection("subscriptions")
//             .where("status", "==", "active")
//             .get()
//             .then(function (b) {
//               0 == b.size
//                 ? ((d = !0), (g = !1), p(), e(!0))
//                 : b.forEach(function (c) {
//                     c.data()
//                       .product.get()
//                       .then(function (q) {
//                         "Relay Auto-Refresher" === q.data().name
//                           ? ((d = g = !0), e(!1), p())
//                           : setTimeout(function () {
//                               d || ((d = !0), (g = !1), p(), e(!0));
//                             }, 5e3);
//                       });
//                   });
//             })
//             ["catch"](function (b) {
//               console.log("Error getting documents: ", b);
//             }))
//         : (e(!0), (d = !0));
//     }
//     function e(a) {
//       a && ((h = !1), chrome.storage.local.set({ smb: !1 }));
//       chrome.tabs.query({ url: v }, function (b) {
//         if (0 != b.length)
//           for (var c = 0; c < b.length; c++)
//             chrome.tabs.sendMessage(b[c].id, { k: "kr", s: a });
//       });
//     }
//     function p() {
//       r && ((r = !1), k("logged", t, n, g));
//     }
//     function k(a, b, c, q) {
//       chrome.runtime.sendMessage({ type: a, email: b, uid: c, sts: q });
//     }
//     firebase.initializeApp({
//       apiKey: "AIzaSyADHcRxjazlYgqVEuLDICW3srJqdtmaRzE",
//       authDomain: "relay-auto-refresher.firebaseapp.com",
//       projectId: "relay-auto-refresher",
//       storageBucket: "relay-auto-refresher.appspot.com",
//       messagingSenderId: "83403241982",
//       appId: "1:83403241982:web:76940fc5d327672074e8af",
//       measurementId: "G-0MZ5HXQ0XP",
//     });
//     firebase.analytics();
//     var m = firebase.firestore();
//     m.enablePersistence()["catch"](console.error);
//     var d = !1,
//       f = !1,
//       t = null,
//       n = null,
//       g = null,
//       r = !1;
//     firebase.auth().onAuthStateChanged(function (a) {
//       a ? ((f = !0), (t = a.email)) : ((f = !1), (g = n = t = null), e(!0));
//       l();
//     });
//     var v = ["https://*/tours/loadboard*", "https://*/loadboard*"];
//     chrome.runtime.onMessage.addListener(function (a, b, c) {
//       switch (a.type) {
//         case "nlg":
//           u();
//           break;
//         case "tgl":
//           firebase.auth().signOut();
//           e(!0);
//           break;
//         case "npp":
//           d
//             ? f
//               ? (l(), (r = !0), c({ type: "tw" }))
//               : c({ type: "dgl" })
//             : c({ type: "nac" });
//           break;
//         case "openPopupHtml":
//           chrome.tabs.create({
//             url: chrome.extension.getURL("popup/popup.html"),
//             selected: !0,
//           });
//           break;
//         case "6ad1f6as5f1":
//           l();
//           a = !0;
//           f && (a = !1);
//           c({ type: a });
//           break;
//         case "smb":
//           h = !a.val;
//       }
//     });

//     chrome.tabs.onCreated.addListener(function (a) {
//       chrome.tabs.update(a.id, { autoDiscardable: !1 });
//     });
//     chrome.tabs.onReplaced.addListener(function (a) {
//       chrome.tabs.update(a, { autoDiscardable: !1 });
//     });
//     chrome.runtime.onInstalled.addListener(function (a) {
//       chrome.tabs.query({}, function (b) {
//         b.forEach(function (c) {
//           chrome.tabs.update(c.id, { autoDiscardable: !1 });
//         });
//       });
//     });
//     var h = !1;
//     (function () {
//       chrome.storage.local.get(["smb"], function (a) {
//         h = "undefined" !== typeof a.smb && null !== a.smb ? a.smb : !1;
//       });
//     })();
//     chrome.webRequest.onBeforeRequest.addListener(
//       function () {
//         return h ? { cancel: !0 } : { cancel: !1 };
//       },
//       {
//         urls: [
//           "https://relay.amazon.com/api/loadboard/similar",
//           "https://relay.amazon.de/api/loadboard/similar",
//           "https://relay.amazon.co.uk/api/loadboard/similar",
//         ],
//       }
//     );
//   }
// }
// run();

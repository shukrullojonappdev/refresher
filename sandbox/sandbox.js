import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import {
  getDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCJZ59bgld15hSsoXEeynguDRy2LUdK4pA",
  authDomain: "al-raqam-refresher.firebaseapp.com",
  projectId: "al-raqam-refresher",
  storageBucket: "al-raqam-refresher.appspot.com",
  messagingSenderId: "515780813149",
  appId: "1:515780813149:web:da145d18e5b66042fe08b4",
  measurementId: "G-W67JEGZV36",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

window.addEventListener("message", async (e) => {
  window.parent.postMessage({ name: "Five Star Express LLC" }, "*");

  // await signInWithEmailAndPassword(auth, email, password)
  //   .then(async (userCredential) => {
  //     const user = userCredential.user;
  //     hideFormRow();
  //     console.log(user);
  //     const docRef = doc(db, "companies", user.uid);
  //     const docSnap = await getDoc(docRef);
  //     console.log(docSnap);
  //     if (docSnap.exists()) {
  //       window.parent.postMessage(docSnap.data(), "*");
  //       console.log("Document data:", docSnap.data());
  //     } else {
  //       console.log("No such document!");
  //     }
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode + ": " + errorMessage);
  //   });
});

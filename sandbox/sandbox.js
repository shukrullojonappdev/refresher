import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import {
  doc,
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

window.addEventListener("message", (e) => {
  const { email, password } = e.data;

  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      const docRef = doc(db, "companies", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        window.parent.postMessage(docSnap.data(), "*");
      } else {
        console.log("No such document!");
      }
    })
    .catch((err) => {
      window.parent.postMessage({ error: err.message }, "*");
    });
});

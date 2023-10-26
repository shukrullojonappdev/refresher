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

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      hideFormRow();

      console.log(user);

      const docRef = doc(db, "companies", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        window.parent.postMessage(docSnap.data(), "*");
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ": " + errorMessage);
    });
});

function hideFormRow() {
  document.getElementById("form-row").hidden = true;
  document.getElementById("company-row").hidden = false;
}

function hideCompanyRow() {
  document.getElementById("company-row").hidden = true;
  document.getElementById("form-row").hidden = false;
}

function showInfo(info) {
  const asdf = document.getElementById("info");
  if (info) {
    asdf.innerText = "you logined";
    return;
  }
  asdf.innerText = "please login";
}

showInfo(false);

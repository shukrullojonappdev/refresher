import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

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

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("login");
});

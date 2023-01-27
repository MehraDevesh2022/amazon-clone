// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu16n7GP9z5_IzOxoAjCBDJkuK9rXjw2I",
  authDomain: "clone-f9dba.firebaseapp.com",
  projectId: "clone-f9dba",
  storageBucket: "clone-f9dba.appspot.com",
  messagingSenderId: "495684317232",
  appId: "1:495684317232:web:1e4ba9dba0698182707df5",
  measurementId: "G-QKDZYDG9C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
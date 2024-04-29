// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaT_nVAwqZnNPwlffFn4VUGbRGJ5TD79Y",
    authDomain: "codevalidatorv2.firebaseapp.com",
    projectId: "codevalidatorv2",
    storageBucket: "codevalidatorv2.appspot.com",
    messagingSenderId: "458395962479",
    appId: "1:458395962479:web:f1ff832324e0bbe728d19a",
    measurementId: "G-FFCG0MKDVT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and get a reference to the service
const auth = getAuth(app);

export { auth };
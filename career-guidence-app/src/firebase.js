// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3ZoDZa9l0U3KWy_1BX1Dx2bJjemnWN6U",
  authDomain: "careercounsilingguide.firebaseapp.com",
  projectId: "careercounsilingguide",
  storageBucket: "careercounsilingguide.firebasestorage.app",
  messagingSenderId: "2488807141",
  appId: "1:2488807141:web:2b6d03261174bfa0d3ae0c",
  measurementId: "G-5QRBGXJLNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
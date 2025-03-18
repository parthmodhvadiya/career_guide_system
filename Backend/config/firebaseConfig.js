import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3ZoDZa9l0U3KWy_1BX1Dx2bJjemnWN6U",
  authDomain: "careercounsilingguide.firebaseapp.com",
  projectId: "careercounsilingguide",
  storageBucket: "careercounsilingguide.firebasestorage.app",
  messagingSenderId: "2488807141",
  appId: "1:2488807141:web:2b6d03261174bfa0d3ae0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

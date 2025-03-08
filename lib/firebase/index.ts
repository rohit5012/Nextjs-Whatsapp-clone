// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAapSY0UsCFz6g8w8Pv2mH8N2fsrcO7aVE",
  authDomain: "nextjs-whatsapp-22a05.firebaseapp.com",
  projectId: "nextjs-whatsapp-22a05",
  storageBucket: "nextjs-whatsapp-22a05.firebasestorage.app",
  messagingSenderId: "585130680135",
  appId: "1:585130680135:web:d042b45b4de564943a7662",
  measurementId: "G-KEEY46V2ZH",
};

// Initialize Firebase
const firestoreApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
export { firestoreApp, googleProvider, auth };

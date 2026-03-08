// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aiweb-d9dee.firebaseapp.com",
  projectId: "aiweb-d9dee",
  storageBucket: "aiweb-d9dee.firebasestorage.app",
  messagingSenderId: "192882588182",
  appId: "1:192882588182:web:dd52e56d1c2510ea495337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}

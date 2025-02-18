// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADrU10F_d5NC1Bbn9kkuBjmWExFEfGOko",
  authDomain: "netflix-gpt-acc6b.firebaseapp.com",
  projectId: "netflix-gpt-acc6b",
  storageBucket: "netflix-gpt-acc6b.firebasestorage.app",
  messagingSenderId: "127250005067",
  appId: "1:127250005067:web:61e4693bdccdd23c56e1ce",
  measurementId: "G-CG4BYHZCEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

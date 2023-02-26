// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe-Ct4DwqaLnbmUCI02BZB6BeqUosqvQw",
  authDomain: "table-reservation-f78b4.firebaseapp.com",
  projectId: "table-reservation-f78b4",
  storageBucket: "table-reservation-f78b4.appspot.com",
  messagingSenderId: "928421778937",
  appId: "1:928421778937:web:38049ffaadeeb417371928",
  measurementId: "G-E82M9FZ219",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

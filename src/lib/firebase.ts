// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM-LewzNzUSIo6JwhUPgoRhRSX3bC7xqo",
  authDomain: "visioncraft-a5fce.firebaseapp.com",
  projectId: "visioncraft-a5fce",
  storageBucket: "visioncraft-a5fce.appspot.com",
  messagingSenderId: "1055638315617",
  appId: "1:1055638315617:web:b1d4a254ae82f960bd0020",
  measurementId: "G-X9Z0K2MCY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const  auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6zhZ3r02gRJNpnUj6p-MgHrCADgsAxyU",
  authDomain: "main-project-37500.firebaseapp.com",
  projectId: "main-project-37500",
  storageBucket: "main-project-37500.appspot.com",
  messagingSenderId: "923213929278",
  appId: "1:923213929278:web:d226c1fb061e6816532a6f",
  measurementId: "G-DLKBL2ZGR4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAnalytics(app);
export const auth = getAuth()
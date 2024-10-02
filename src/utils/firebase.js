// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbu_RI6mfy4J7vqI5IyJNmbeo5B2EtVyQ",
  authDomain: "flixai-ef71e.firebaseapp.com",
  projectId: "flixai-ef71e",
  storageBucket: "flixai-ef71e.appspot.com",
  messagingSenderId: "237319329296",
  appId: "1:237319329296:web:519dc8223ec368a94e9c95",
  measurementId: "G-LF5Q6F3RXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
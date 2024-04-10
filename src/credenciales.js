// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe0EDaqSc4iHwCUAASvWpwT0e5bSY95I0",
  authDomain: "login-web-aprendix.firebaseapp.com",
  projectId: "login-web-aprendix",
  storageBucket: "login-web-aprendix.appspot.com",
  messagingSenderId: "993379979062",
  appId: "1:993379979062:web:7df5588f14c0c28a1bad97"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
export default appfirebase;
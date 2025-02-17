// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsrxmRBOgP40duJ-QfMIEzOVuqwPM5zpg",
  authDomain: "web2567-version2.firebaseapp.com",
  projectId: "web2567-version2",
  storageBucket: "web2567-version2.firebasestorage.app",
  messagingSenderId: "970566403217",
  appId: "1:970566403217:web:64d727c0a5965bf3e66b30",
  measurementId: "G-9T887SLZS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
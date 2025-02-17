import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBysrzppkmaHuRQTRBPRQ5Ks5GgV6IuVh8",
    authDomain: "web2567-7024f.firebaseapp.com",
    projectId: "web2567-7024f",
    storageBucket: "web2567-7024f.firebasestorage.app",
    messagingSenderId: "72778379705",
    appId: "1:72778379705:web:4ab261cf159ca4ee678668",
    measurementId: "G-91S1MWTDRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

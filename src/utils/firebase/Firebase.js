import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWW84CennnIr93AUYyGE3zdlsn18Lu_3U",
    authDomain: "flimchicks.firebaseapp.com",
    projectId: "flimchicks",
    storageBucket: "flimchicks.appspot.com",
    messagingSenderId: "318071807599",
    appId: "1:318071807599:web:fcc9c12d10941fbd6c779a",
    measurementId: "G-5Z9GXRNGJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export { GoogleAuthProvider, signInWithPopup, doc, getDoc, setDoc };

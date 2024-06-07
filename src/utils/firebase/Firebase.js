import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOWfYyni8mLUlaKDO3JUTf-bBCUUygupo",
  authDomain: "filmchicks-ccbe2.firebaseapp.com",
  projectId: "filmchicks-ccbe2",
  storageBucket: "filmchicks-ccbe2.appspot.com",
  messagingSenderId: "212509265711",
  appId: "1:212509265711:web:af2ebcf75fe3a77c7e9bda",
  measurementId: "G-1V3BX0VEVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;

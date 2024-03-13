// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxFYo5XkTUuj57lOGpUvHgkMKs2p1bGuc",
  authDomain: "micro2-mariac-franciscom.firebaseapp.com",
  projectId: "micro2-mariac-franciscom",
  storageBucket: "micro2-mariac-franciscom.appspot.com",
  messagingSenderId: "811563638156",
  appId: "1:811563638156:web:b7de004e732abcc1758aa9",
  measurementId: "G-G4S5PZ8XTH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const appFirebase= initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
export default appFirebase;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGXre4YhCUIxJLj2tAF4QYW7VBRXJhQyk",
  authDomain: "inventory-manager-3ed83.firebaseapp.com",
  projectId: "inventory-manager-3ed83",
  storageBucket: "inventory-manager-3ed83.appspot.com",
  messagingSenderId: "934415276159",
  appId: "1:934415276159:web:5bddd2636cb1791101474a",
  measurementId: "G-5YR6KGG9Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
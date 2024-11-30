// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfI_CpqI3jyfyTTpSF-y17CW55rqpE-vg",
  authDomain: "gestcondoapp.firebaseapp.com",
  databaseURL: "https://gestcondoapp-default-rtdb.firebaseio.com",
  projectId: "gestcondoapp",
  storageBucket: "gestcondoapp.firebasestorage.app",
  messagingSenderId: "608792537071",
  appId: "1:608792537071:web:db9b4920b47f0b4ca0b81a",
  measurementId: "G-N75XMEQXGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
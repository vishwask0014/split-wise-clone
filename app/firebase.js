// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvsqxPXVyWtMxsRZmScJ6AS0d_kC4wiLA",
  authDomain: "crud-operation-4b775.firebaseapp.com",
  projectId: "crud-operation-4b775",
  storageBucket: "crud-operation-4b775.appspot.com",
  messagingSenderId: "587668454593",
  appId: "1:587668454593:web:c1ba6b996de183f327e840",
  measurementId: "G-5HQEFBS2WT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

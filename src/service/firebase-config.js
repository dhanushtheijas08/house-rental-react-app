import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyABll5S8WtHJGzTf1nnxXBa_Yo7tt6MHJ8",
  authDomain: "house-rental-69320.firebaseapp.com",
  projectId: "house-rental-69320",
  storageBucket: "house-rental-69320.appspot.com",
  messagingSenderId: "708321506900",
  appId: "1:708321506900:web:4fda3d0ebeaaa6efd09fc1",
  measurementId: "G-TNGV4FKE5S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

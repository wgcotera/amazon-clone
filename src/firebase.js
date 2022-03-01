import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvVZ7t5DOJE8UntS0nbaPFpcuFMNB3B1Y",
  authDomain: "clone-f5772.firebaseapp.com",
  projectId: "clone-f5772",
  storageBucket: "clone-f5772.appspot.com",
  messagingSenderId: "169873278691",
  appId: "1:169873278691:web:8a85996a6f96612697a7d6",
  measurementId: "G-T7C7N3N2FL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

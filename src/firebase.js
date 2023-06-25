// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ6_0fv6SCv5Lr4AU6JQZGW0Se7gM1QqE",
  authDomain: "chatboxreact-e9ecb.firebaseapp.com",
  projectId: "chatboxreact-e9ecb",
  storageBucket: "chatboxreact-e9ecb.appspot.com",
  messagingSenderId: "728225648992",
  appId: "1:728225648992:web:8ccde24ccb67fa92834e05",
  measurementId: "G-HFM76KV9ED"
};

// Initialize Firebase
debugger
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

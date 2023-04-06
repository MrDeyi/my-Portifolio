// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFmPEP9HbS9TDpRGChVgfofWYSF-L7jTU",
  authDomain: "my-site-mandilake.firebaseapp.com",
  projectId: "my-site-mandilake",
  storageBucket: "my-site-mandilake.appspot.com",
  messagingSenderId: "179410636685",
  appId: "1:179410636685:web:605bbd570b922ca10cf7c4",
  measurementId: "G-MMRTD55QXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);

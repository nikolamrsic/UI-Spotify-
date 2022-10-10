// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzgcrKxGDuuAk9ZEs5KoN90u3hh-fgUp0",
  authDomain: "spot-d84e9.firebaseapp.com",
  projectId: "spot-d84e9",
  storageBucket: "spot-d84e9.appspot.com",
  messagingSenderId: "681610421943",
  appId: "1:681610421943:web:a53f229a60b577bb214f32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)


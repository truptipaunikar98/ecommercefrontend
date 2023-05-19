import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA10Y_3HzJ0gnvR-F8fD78y9rKd3mOoe9Q",
  authDomain: "ecommerweb-caa76.firebaseapp.com",
  projectId: "ecommerweb-caa76",
  storageBucket: "ecommerweb-caa76.appspot.com",
  messagingSenderId: "837047341912",
  appId: "1:837047341912:web:81a4d44fcf3fe9b0300b2d"
};
export  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
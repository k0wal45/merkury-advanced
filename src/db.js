import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0bByXMWgmVqnLXXAtzaFJn1nUVV7Kzvs",
  authDomain: "merkury-medica.firebaseapp.com",
  projectId: "merkury-medica",
  storageBucket: "merkury-medica.appspot.com",
  messagingSenderId: "1058615240277",
  appId: "1:1058615240277:web:2ed829693ac9eca81856dc",
  measurementId: "G-HRCDPFT8L4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);




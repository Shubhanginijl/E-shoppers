import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyDGiTexaVO1umoRqzmPu1YrYiU39mOlOG4",
  authDomain: "e-shoppers-74a7f.firebaseapp.com",
  projectId: "e-shoppers-74a7f",
  storageBucket: "e-shoppers-74a7f.appspot.com",
  messagingSenderId: "595609189453",
  appId: "1:595609189453:web:f560f42a57be6282e63004"
};

const firebaseApp = initializeApp(firebaseConfig);
const db= getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export {db,auth}



import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAXP-YWxV-M0_xOpdtOc-CjuojfcRUmyzQ",
  authDomain: "task-f5a63.firebaseapp.com",
  projectId: "task-f5a63",
  storageBucket: "task-f5a63.appspot.com",
  messagingSenderId: "175812986296",
  appId: "1:175812986296:web:97f80a61b308b34e8cbb4d",
  measurementId: "G-3NZ9ES41JQ"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

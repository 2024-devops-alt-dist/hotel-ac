import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage"; // Pour Storage
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIP6HAGHnw_8g145aEEmbwFG5fO34pr1I",
  authDomain: "clairdelune-b964b.firebaseapp.com",
  projectId: "clairdelune-b964b",
  storageBucket: "clairdelune-b964b.appspot.com",
  messagingSenderId: "502769962923",
  appId: "1:502769962923:web:e69df17744e2eb5e09ccee",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

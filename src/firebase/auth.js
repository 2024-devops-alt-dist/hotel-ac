import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase-config";

export const signUp = async (email, password, userData) => {
  try {
    // CREER LE USER
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // METTRE LES INFOS DANS FIRESTORE
    await setDoc(doc(db, "users", userCredential.user.uid), userData);
    return userCredential;
  } catch (error) {
    throw error;
  }
};

// CO
export const signIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// OBSERVER CHANGMENT D ETAT DU USER
export const observeAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// RECUP INFOS DE USER
export const getUserFromFirestore = async (userId) => {
  const userDoc = await getDoc(doc(db, "users", userId));
  if (userDoc.exists()) {
    return userDoc.data();
  } else {
    throw new Error("Utilisateur non trouvé dans Firestore");
  }
};

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

    //CREER UN ROLE PAR DEFAULT CLIENT
    userData.role = "client";

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

export const observeAuthState = (callback) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (userDoc.exists()) {
          const userData = userDoc.data();
          callback({ ...user, role: userData.role }); // Utilisateur avec rôle
        } else {
          console.warn("Utilisateur sans document Firestore");
          callback(user); // Utilisateur connecté mais sans document Firestore
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du document Firestore:",
          error
        );
        callback(user); // Retourner l'utilisateur même en cas d'erreur Firestore
      }
    } else {
      callback(user); // Aucun utilisateur connecté
    }
  });
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

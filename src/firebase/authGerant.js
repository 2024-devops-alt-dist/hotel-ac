import { getDoc, query, where, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config"; // Import Firestore

// CO GÉRANT
export const signInGerant = async (email, password) => {
  try {
    // REQUETE USER <==> EMAIL
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error("Aucun utilisateur trouvé avec cet email");
    }

    // VERIF MOT DE PASSE ET STOKER
    let gerantData = null;
    querySnapshot.forEach((doc) => {
      const data = doc.data();

      // Vérification du rôle
      if (data.role === "gerant" && data.motDePasse === password) {
        gerantData = { ...data, id: doc.id };
      }
    });

    if (!gerantData) {
      throw new Error("Mot de passe incorrect ou utilisateur non autorisé");
    }

    return gerantData;
  } catch (error) {
    throw error;
  }
};

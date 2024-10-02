import { getDoc, query, where, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config"; // Import Firestore

// CO gERANT
export const signInGerant = async (email, password) => {
  try {
    // REQUETE GERANT <==> EMAIL
    const gerantsRef = collection(db, "gerant");
    const q = query(gerantsRef, where("email", "==", email));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error("Aucun gérant trouvé avec cet email");
    }

    // VERIF MOT DE PASSE ET STOKER
    let gerantData = null;
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.motDePasse === password) {
        gerantData = { ...data, id: doc.id };
      }
    });

    if (!gerantData) {
      throw new Error("Mot de passe incorrect");
    }

    return gerantData;
  } catch (error) {
    throw error;
  }
};

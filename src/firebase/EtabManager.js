import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

// AJOUTER UN ETAB
export const addEtab = async (etabData) => {
  try {
    // AVEC UN ID AUTOGENERE
    const newDocRef = doc(collection(db, "etablissement"));
    await setDoc(newDocRef, etabData);
    return newDocRef.id;
  } catch (error) {
    throw error;
  }
};

//GET LES ETABS
export const getEtab = async () => {
  try {
    const etabsCollection = collection(db, "etablissement");
    const etabsSnapshot = await getDocs(etabsCollection);
    const etabsList = etabsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return etabsList;
  } catch (error) {
    throw error;
  }
};

//GET UN ETAB PAR SON ID
export const getEtabById = async (id) => {
  try {
    const etabDoc = await getDoc(doc(db, "etablissement", id));
    if (etabDoc.exists()) {
      return { id: etabDoc.id, ...etabDoc.data() };
    } else {
      throw new Error("Établissement non trouvé");
    }
  } catch (error) {
    throw error;
  }
};

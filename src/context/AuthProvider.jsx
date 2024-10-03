import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Englober les enfants et fournir le contexte dans le return afficher les enfants après le chargement
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [role, setRole] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setFirstName(userData.nom);
          setLastName(userData.prenom);
          setRole(userData.role);
        }

        setCurrentUser(user);
      } else {
        setCurrentUser(null);
        setFirstName(undefined);
        setLastName(undefined);
        setRole(undefined);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    firstName,
    lastName,
    role,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}{" "}
    </AuthContext.Provider>
  );
};

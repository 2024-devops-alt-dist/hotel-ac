import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//FIREBASE
import { db, auth } from "./firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

//COMPONENTS
import Home from "./containers/Home";
import Gerant from "./containers/Gerant";
import Error404 from "./containers/Error404";
import HotelsList from "./containers/HotelsList";
//import Header from "./components/Header";
import Private from "./containers/private/Private";
import PrivateHome from "./containers/private/privateHome/PrivateHome";
import { current } from "@reduxjs/toolkit";

function App() {
  const [etabs, setEtabs] = useState([]);
  const etabsCollectionRef = collection(db, "etablissement");
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  console.log("les etablissements", etabs);

  //useEffect pour les établissements
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(etabsCollectionRef);
      setEtabs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoadingData(false);
    };
    fetchData();
  }, []);

  //useEffect pour l'authentification
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user co => on stocke dans le state
        setCurrentUser(user);
      } else {
        // Sinon, on réinitialise l user
        setCurrentUser(null);
      }
    });

    // nettoyer le useEffect
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        {loadingData ? (
          <p>Chargement des données...</p>
        ) : (
          <Routes>
            <Route path="/" element={<Home etabs={etabs} />} />
            <Route path="/gerant" element={<Gerant />} />
            <Route path="/private" element={<Private />}>
              <Route path="/private/PrivateHome" element={<PrivateHome />} />
            </Route>
            <Route path="*" element={<Error404 />} />
            <Route path="/nosHotels" element={<HotelsList etabs={etabs} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;

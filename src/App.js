import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// FIREBASE
import { db } from "./firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { observeAuthState } from "./firebase/auth";

// COMPONENTS
import Home from "./containers/Home";
import Gerant from "./containers/Gerant";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Error404 from "./containers/Error404";
import HotelsList from "./containers/HotelsList";
import Private from "./containers/private/Private";
import PrivateHome from "./containers/private/privateHome/PrivateHome";
import PrivateHomeDuGerant from "./containers/private/privateHome/PrivateHomeDuGerant";
import HotelDetails from "./containers/HotelDetails";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  const [etabs, setEtabs] = useState([]);
  const etabsCollectionRef = collection(db, "etablissement");
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  // useEffect pour les etabs
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(etabsCollectionRef);
      setEtabs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoadingData(false);
    };
    fetchData();
  }, []);

  // useEffect pour l'auth
  useEffect(() => {
    const unsubscribe = observeAuthState((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthProvider>
      {" "}
      {/* Wrap the Router with AuthProvider */}
      <Router>
        <div className="App">
          {loadingData ? (
            <p>Chargement des données...</p>
          ) : (
            <Routes>
              <Route path="/" element={<Home etabs={etabs} />} />

              <Route path="/private" element={<Private />}>
                <Route path="/private/PrivateHome" element={<PrivateHome />} />
              </Route>

              <Route path="/private" element={<Private />}>
                <Route
                  path="/private/PrivateHomeDuGerant"
                  element={<PrivateHomeDuGerant />}
                />
              </Route>

              <Route path="/gerant" element={<Gerant />} />
              <Route path="*" element={<Error404 />} />
              <Route path="/nosHotels" element={<HotelsList etabs={etabs} />} />
              <Route
                path="/hotel/:id"
                element={<HotelDetails etabs={etabs} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

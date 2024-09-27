import React, { useEffect, useState } from "react";
import { db } from "./firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Gerant from "./containers/Gerant";
import Error404 from "./containers/Error404";

function App() {
  const [etabs, setEtabs] = useState([]);
  const etabsCollectionRef = collection(db, "etablissement");

  console.log("les etablissements", etabs);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(etabsCollectionRef);
      setEtabs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home etabs={etabs} />} />{" "}
          <Route path="/gerant" element={<Gerant />} />{" "}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { useSelector } from "react-redux";

// // FIREBASE
// import { db } from "./firebase/firebase-config";
// import { collection, getDocs } from "firebase/firestore";
// import { observeAuthState } from "./firebase/auth";

// // COMPONENTS
// import Home from "./containers/Home";
// import Gerant from "./containers/Gerant";
// import Error404 from "./containers/Error404";
// import HotelsList from "./containers/HotelsList";
// import Private from "./containers/private/Private";
// import PrivateHome from "./containers/private/privateHome/PrivateHome";
// import PrivateGer from "./containers/privateG/PrivateGer";
// import PrivateHomeGer from "./containers/privateG/privateHomeGer/PrivateHomeGer";
// import HotelDetails from "./containers/HotelDetails";

// function App() {
//   const [etabs, setEtabs] = useState([]);
//   const etabsCollectionRef = collection(db, "etablissement");
//   const [currentUser, setCurrentUser] = useState();
//   const [loadingData, setLoadingData] = useState(true);

//   //recpuerer le role de l'utilisateur
//   const role = useSelector((state) => state.auth.user?.role);
//   // useEffect pour les etabs
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getDocs(etabsCollectionRef);
//       setEtabs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//       setLoadingData(false);
//     };
//     fetchData();
//   }, []);

//   // useEffect pour l'auth
//   useEffect(() => {
//     const unsubscribe = observeAuthState((user) => {
//       setCurrentUser(user);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         {loadingData ? (
//           <p>Chargement des données...</p>
//         ) : (
//           <Routes>
//             <Route path="/" element={<Home etabs={etabs} />} />

//             {/* <Route path="/private" element={<Private />}>
//               <Route path="/private/PrivateHome" element={<PrivateHome />} />
//             </Route> */}
//             {role === "client" && (
//               <Route path="/private" element={<Private />}>
//                 <Route path="private/PrivateHome" element={<PrivateHome />} />
//               </Route>
//             )}

//             {role === "gerant" && (
//               <Route path="/privateG" element={<PrivateGer />}>
//                 <Route
//                   path="privateG/PrivateHomeG"
//                   element={<PrivateHomeGer />}
//                 />
//               </Route>
//             )}

//             {/* <Route path="/PrivateG" element={<PrivateGer />}>
//               <Route
//                 path="privateG/PrivateHomeG"
//                 element={<PrivateHomeGer />}
//               />
//             </Route> */}

//             {role === "gerant" && (
//               <Route path="/privateG" element={<PrivateGer />}>
//                 <Route
//                   path="privateG/PrivateHomeG"
//                   element={<PrivateHomeGer />}
//                 />
//               </Route>
//             )}

//             <Route path="/gerant" element={<Gerant />} />

//             <Route path="*" element={<Error404 />} />
//             <Route path="/nosHotels" element={<HotelsList etabs={etabs} />} />
//             <Route path="/hotel/:id" element={<HotelDetails etabs={etabs} />} />
//           </Routes>
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

// FIREBASE
import { db } from "./firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { observeAuthState } from "./firebase/auth";

// COMPONENTS
import Home from "./containers/Home";
import Gerant from "./containers/Gerant";
import Error404 from "./containers/Error404";
import HotelsList from "./containers/HotelsList";
import Private from "./containers/private/Private";
import PrivateHome from "./containers/private/privateHome/PrivateHome";
import PrivateGer from "./containers/privateG/PrivateGer";
import PrivateHomeGer from "./containers/privateG/privateHomeGer/PrivateHomeGer";
import HotelDetails from "./containers/HotelDetails";

function App() {
  const [etabs, setEtabs] = useState([]);
  const etabsCollectionRef = collection(db, "etablissement");
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  // Récupérer le rôle de l'utilisateur
  const role = useSelector((state) => state.auth.user?.role);

  // useEffect pour les établissements
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

  // Fonction de redirection en fonction du rôle
  const getRedirectPath = () => {
    if (role === "gerant") {
      return "/test";
    }
    if (role === "client") {
      return "/private/privateHome";
    }
    return "/";
  };

  return (
    <Router>
      <div className="App">
        {loadingData ? (
          <p>Chargement des données...</p>
        ) : (
          <Routes>
            <Route path="/" element={<Home etabs={etabs} />} />

            <Route path="/gerant" element={<Gerant />} />

            <Route
              path="/private"
              element={
                role === "client" ? (
                  <Private />
                ) : (
                  <Navigate to={getRedirectPath()} />
                )
              }
            >
              <Route
                path="privateHome"
                element={
                  role === "client" ? (
                    <PrivateHome />
                  ) : (
                    <Navigate to={getRedirectPath()} />
                  )
                }
              />
            </Route>

            <Route
              path="/privateG"
              element={
                role === "gerant" ? (
                  <PrivateGer />
                ) : (
                  <Navigate to={getRedirectPath()} />
                )
              }
            >
              <Route
                path="privateHomeG"
                element={
                  role === "gerant" ? (
                    <PrivateHomeGer />
                  ) : (
                    <Navigate to={getRedirectPath()} />
                  )
                }
              />
            </Route>

            <Route path="*" element={<Error404 />} />
            <Route path="/nosHotels" element={<HotelsList etabs={etabs} />} />
            <Route path="/hotel/:id" element={<HotelDetails etabs={etabs} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;

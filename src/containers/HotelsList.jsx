import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEtabsStart,
  fetchEtabsSuccess,
  fetchEtabsFailure,
} from "../redux/actions/etabAction";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { getEtab } from "../firebase/EtabManager";

import { serializeFirestoreData } from "../firebase/firebaseUtils";
import "../style/ListHotelsStyle.css";

function HotelsList() {
  const dispatch = useDispatch();
  const { etabs, isLoading, error } = useSelector((state) => state.fetchEtabs);
  // FETCH LES HOTELS DEPUIS FIREBASE
  useEffect(() => {
    const fetchHotels = async () => {
      // dispatch(fetchEtabsStart());
      // try {
      //   const hotelsCollection = collection(db, "etablissement");
      //   const hotelsSnapshot = await getDocs(hotelsCollection);
      //   const hotelsList = hotelsSnapshot.docs.map((doc) => ({
      //     id: doc.id,
      //     ...doc.data(),
      //   }));
      //   dispatch(fetchEtabsSuccess(hotelsList)); //MAJ STORE AVEC LES HOTELS FETCHES
      //   console.log("hotel list du dispatch", hotelsList);
      // }
      try {
        const data = await getEtab();
        const serializedData = serializeFirestoreData(data);
        dispatch(fetchEtabsSuccess(serializedData));
      } catch (error) {
        dispatch(fetchEtabsFailure(error.message));
      }
    };

    fetchHotels();
  }, [dispatch]);

  return (
    <div className="hotelPageContainer">
      <Header />
      <div className="listHotelContainer">
        <h1>Nos Hôtels</h1>
        {isLoading ? (
          <p>Chargement des hôtels...</p>
        ) : error ? (
          <p>Erreur: {error}</p>
        ) : (
          <div className="hotelList">
            {etabs.length === 0 ? (
              <p>Aucun hôtel disponible.</p>
            ) : (
              etabs.map((hotel) => (
                <div className="hotelCard" key={hotel.id}>
                  <h2>{hotel.nom}</h2>
                  <img src={hotel.urlPhotoPrincipale} alt={hotel.nom} />

                  <p>Prix: {hotel.prix} €</p>
                  <p>Étoiles: {hotel.nbEtoiles}</p>
                  <Link to={`/hotel/${hotel.id}`}>Voir détails</Link>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default HotelsList;

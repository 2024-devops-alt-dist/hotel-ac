import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import "../style/DetailsHotelStyle.css";

import Header from "../components/Header";

function HotelDetails() {
  //RECUP DEUIS L'URL
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      const docRef = doc(db, "etablissement", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setHotel(docSnap.data());
        console.log("details", docSnap.data());
      } else {
        console.log("L'hôtel n'existe pas.");
      }
    };
    fetchHotelDetails();
  }, [id]);

  if (!hotel) {
    return <p>Chargement des détails de l'hôtel...</p>;
  }

  return (
    <div className="hotelContainer">
      <Header />
      <div className="detailsHotelContainer">
        <h1>{hotel.nom}</h1>
        <p>{hotel.description}</p>
        {/* <p>{hotel.prix} €</p> */}
        <p>{hotel.adresse}</p>
        <p>Nombre d'étoiles: {hotel.nbEtoiles}</p>
      </div>
      <div className="imgVignettes">
        {hotel.vignettes.map((vignetteUrl, index) => (
          <img
            key={index}
            src={vignetteUrl}
            alt={hotel.nom}
            className="hotel-photo"
          />
        ))}
      </div>
      <div className="mapContainer">
        {hotel.iframe && (
          <div dangerouslySetInnerHTML={{ __html: hotel.iframe }} />
        )}
      </div>
    </div>
  );
}

export default HotelDetails;

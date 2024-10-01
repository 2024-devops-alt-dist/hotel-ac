import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

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
    <div>
      <h1>{hotel.nom}</h1>
      {/* <p>Description: {hotel.description}</p>
      <p>Prix: {hotel.prix} €</p>
      <p>Adresse: {hotel.adresse}</p>
      <p>Ville: {hotel.ville}</p>
      <p>Nombre d'étoiles: {hotel.nombreEtoiles}</p> */}
    </div>
  );
}

export default HotelDetails;

import React from "react";
import Header from "../components/Header";

function HotelsList() {
  return (
    <div className="hotelPageContainer">
      <Header />
      <h1>Page des hôtels</h1>
      <div className="hotelList">
        <div className="hotelCard">
          <h2>Nom de l'établissement</h2>
          <p>Description</p>
          <p>Prix</p>
          <p>Nombre d'étoiles</p>
        </div>

        <div className="hotelCard">
          <h2>Nom de l'établissement</h2>
          <p>Description</p>
          <p>Prix</p>
          <p>Nombre d'étoiles</p>
        </div>
      </div>
    </div>
  );
}

export default HotelsList;

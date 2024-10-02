import React, { useState } from "react";
import "../style/HomeStyle.css";
import Header from "../components/Header";
import Diapo from "../components/Diapo";
import SearchEtab from "../components/SearchEtab";
import SignUpModal from "../components/SignUpModal";
import Footer from "../components/Footer";
// import SignInModal from "../components/SignInModal";

function Home({ etabs }) {
  return (
    <div className="home">
      <Header />
      <SignUpModal />
      {/* <SignInModal /> */}

      <div className="presentation">
        <div className="bannerImg">
          <div className="searchContainer">
            <SearchEtab etabs={etabs} />
          </div>
        </div>
        <h2 className="presentationTitle">Lorem Ipsum</h2>
        <p className="presentationText">
          Bienvenue chez Hôtels 🌙 Clair de Lune ! Nous vous proposons des
          hôtels de luxe à travers le monde. Que vous soyez en voyage d'affaires
          ou en vacances, vous trouverez forcément l'hôtel qui vous convient.
        </p>
      </div>
      <div className="hotels">
        <h2 id="noshotels">NOS HÔTELS LES MIEUX NOTÉS</h2>
        <div className="hotel">
          {/* FILTRER DANS LE DIAPO ? si oui ne pas oublier le useEffect  <Diapo etabs={searchResults} />{" "} */}
          <Diapo etabs={etabs} />
          <h3>Find Us</h3>
          <p>
            - soit mettre une carte avec plusieurs points avec Google API - soit
            mettre une carte avec un seul point tranquillou
          </p>
        </div>
        <div className="map"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

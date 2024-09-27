import React from "react";
import "../style/HomeStyle.css";
import Header from "../components/Header";
import Diapo from "../components/Diapo";
import SearchEtab from "../components/SearchEtab";
import { useState, useEffect } from "react";

const Home = ({ etabs }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {}, [searchResults]);

  return (
    <div className="home">
      <Header />
      <div className="presentation">
        <div className="bannerImg">
          <div className="searchInput">
            <SearchEtab />
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
          <Diapo etabs={etabs} />
          <img
            src="https://images.unsplash.com/photo-1593642532937-7f9d6e1f0f0a"
            alt="Hôtel de luxe"
          />
          <h3>Find Us</h3>
          <p>
            - soit mettre une carte avec plusieurs points avec google api - soit
            mettre une carte avec un seul point tranquillou
          </p>
        </div>
        <div className="map"></div>
      </div>
    </div>
  );
};

export default Home;

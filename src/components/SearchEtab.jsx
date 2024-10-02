import React, { useState, useEffect } from "react";
import "../style/SearchEtabStyle.css";
//import { searchEtabSuccess } from "../redux/actions/searchEtabAction";

function SearchEtab({ etabs }) {
  //stocker la recherche de l'utilisateur
  const [search, setSearch] = useState("");
  //stocker les résultats
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (search === "") {
      console.log("etabs", etabs);
      setSearchResults([]);
    } else {
      const filteredResults = etabs.filter((etab) =>
        etab.nom.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [search, etabs]);

  //MAJ valeur de recherche
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchEtab">
      <form onSubmit={handleSearchChange}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un hôtel"
        />
        <button type="submit">🔍</button>
      </form>
      <div className="searchResults">
        {searchResults.length > 0 ? (
          searchResults.map((etab, index) => (
            <div key={index} className="search-result-item">
              <h3>{etab.nom}</h3>
              <p>{etab.adresse}</p>
            </div>
          ))
        ) : search !== "" ? (
          <p>Aucun résultat trouvé.</p>
        ) : null}
      </div>
    </div>
  );
}

export default SearchEtab;

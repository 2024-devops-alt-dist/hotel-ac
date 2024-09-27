import React, { useState, useEffect } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {
// faChevronLeft,
// faChevronRight,
//} from "@fortawesome/free-solid-svg-icons";
import "../style/DiapoStyle.css";
import {
  searchEtab,
  // searchEtabFailure,
  //searchEtabLoading,
} from "../redux/actions/searchEtabAction";
import { useDispatch, useSelector } from "react-redux";

function SearchEtab() {
  const dispatch = useDispatch();
  const etabs = useSelector((state) => state.searchEtab);
  const store = useSelector((state) => state.searchEtab);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchedEtab = store.searchEtab;

  useEffect(() => {
    dispatch(searchEtab(searchResults));
  }, [searchResults]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = etabs.filter((etab) => etab.name === search);
    setSearchResults(results);
  };

  return (
    <div className="search-etab">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un hôtel"
        />
        <button type="submit">🔍</button>
      </form>
      <div className="search-results">
        {searchedEtab.map((etab, index) => (
          <div key={index}>
            <h3>{etab.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchEtab;

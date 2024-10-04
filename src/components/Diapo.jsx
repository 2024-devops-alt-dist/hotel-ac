import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../style/DiapoStyle.css";

function Diapo({ etabs }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleBoxes = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, etabs.length - visibleBoxes)
    );
  };

  if (!etabs || etabs.length === 0) {
    return <p>chargement...</p>;
  }

  console.log("etabs", etabs);

  return (
    <div className="diapo-container">
      <button className="chevron chevron-left" onClick={handlePrev}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="diapo">
        <div
          className="diapo-inner"
          style={{
            transform: `translateX(-${(currentIndex / visibleBoxes) * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {etabs.map((etab, index) => (
            <div className="box" key={index}>
              <Link to={`/hotel/${etab.id}`}>
                <img
                  src={etab.urlPhotoPrincipale}
                  alt={etab.nom}
                  className="hotel-photo"
                />
                {<p>{etab.ville}</p>}
                <h3>{etab.nom}</h3>
                <div className="stars">
                  {Array.from({ length: etab.nbEtoiles }).map((_, i) => (
                    <FontAwesomeIcon
                      icon={faStar}
                      key={i}
                      style={{ color: "#ffc107" }}
                    />
                  ))}
                </div>{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <button className="chevron chevron-right" onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Diapo;

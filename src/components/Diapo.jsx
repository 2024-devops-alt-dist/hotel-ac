import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              <img
                src={etab.urlPhotoPrincipale}
                alt={etab.nom}
                className="hotel-photo"
              />
              {/* <p>{etab.description}</p>
              <p>{etab.prix} €</p>
              <p>{etab.adresse}</p>
              <p>{etab.ville}</p>
              <p>{etab.pays}</p> */}
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

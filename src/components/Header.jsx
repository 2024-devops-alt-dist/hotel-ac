import React, { useState } from "react";
import "../style/HeaderStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <h1>
        Hôtels <span>🌙</span>
        <br />
        Clair de Lune
      </h1>
      <div className="burger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>
      <nav className={menuOpen ? "nav-open" : ""}>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#apropos" onClick={() => setMenuOpen(false)}>
              À propos
            </a>
          </li>
          <li>
            <a href="#noshotels" onClick={() => setMenuOpen(false)}>
              Nos hôtels
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
          <button className="loginButton" onClick={() => setMenuOpen(false)}>
            Connexion
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

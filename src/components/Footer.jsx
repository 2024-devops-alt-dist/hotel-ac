import React from "react";
import "../style/FooterStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footerContainer">
      <footer className="footer">
        <div className="footerContent">
          <h3>
            Hôtels <span>🌙</span>
            <br />
            Clair de Lune
          </h3>
          <div className="socialMedia">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="addressContainer">
            <p>123 rue de la Lune</p>
            <p>75000 Paris</p>
          </div>
        </div>
        <div className="gerantContainer">
          <a href="/gerant" className="gerantLink">
            <FontAwesomeIcon icon={faLock} />
            <span>Espace gérant</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

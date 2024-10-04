import React from "react";
import "../style/FooterStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SignInModalGerant from "./signInModalGerant";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Link from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

export default function Footer({ signIn }) {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const openSignInModal = () => {
    setSignInModalOpen(true);
  };
  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const navigate = useNavigate();
  const [gerant, setGerant] = useState(null);

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
      setGerant(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setGerant(currentUser);
      } else {
        setGerant(null);
      }
    });
    return () => unsubscribe();
  }, []);

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
          <span>
            Espace gérant <FontAwesomeIcon icon={faLock} />
          </span>

          <div className="gerantButtons">
            <button className="gerantLink" onClick={openSignInModal}>
              Connexion
            </button>
            <button className="gerantLink" onClick={logOut}>
              Déconnexion
            </button>
            {/* <a href="/gerant" className="gerantLink">
            <FontAwesomeIcon icon={faLock} />
            <span>Espace gérant</span>
          </a> */}
            <SignInModalGerant
              isOpen={isSignInModalOpen}
              isClose={closeSignInModal}
              signIn={signIn}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import "../style/HeaderStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header({ signUp, signIn }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //gere modal inscription
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const openSignUpModal = () => {
    setSignUpModalOpen(true);
  };
  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };

  //gere modal connexion
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const openSignInModal = () => {
    setSignInModalOpen(true);
  };
  const closeSignInModal = () => {
    setSignInModalOpen(false);
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
      setUser(null); // Remet à jour l'état de l'utilisateur à null après la déconnexion
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect pour surveiller les changements d etat d auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // user co => maj state
        setUser(currentUser);
      } else {
        // user deco => maj state null
        setUser(null);
      }
    });

    // Nettoyer l'écouteur lorsqu'on quitte le composant pour éviter les fuites de mémoire
    return () => unsubscribe();
  }, []);

  return (
    <header className="navbar">
      <a href="/" className="logo">
        <h1>
          Hôtels <span>🌙</span>
          <br />
          Clair de Lune
        </h1>
      </a>

      <div className="helloName">{user && <p>Bonjour {user.email}</p>}</div>
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
            <Link to="/nosHotels" onClick={() => setMenuOpen(false)}>
              Nos hôtels
            </Link>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

          <button className="signUpButton" onClick={openSignUpModal}>
            S'inscrire
          </button>

          <button className="loginButton" onClick={openSignInModal}>
            Connexion
          </button>

          <button className="logoutButton" onClick={logOut}>
            Déconnexion
          </button>
        </ul>
      </nav>

      <SignUpModal
        isOpen={isSignUpModalOpen}
        isClose={closeSignUpModal}
        signUp={signUp}
      />
      <SignInModal
        isOpen={isSignInModalOpen}
        isClose={closeSignInModal}
        signIn={signIn}
      />
    </header>
  );
}

export default Header;

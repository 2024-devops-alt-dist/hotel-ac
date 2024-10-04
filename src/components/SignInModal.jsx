import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import "../style/SignUpModalStyle.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebase-config";
import { db } from "../firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {
  loginSuccess,
  loginFailure,
  setLoading,
} from "../redux/actions/authAction";

// Composant pour l'overlay de la modale
const ModalOverlay = ({ isClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [validation, setValidation] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignIn = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      // Co Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      const userRef = doc(db, "users", userCredential.user.uid);
      const userDoc = await getDoc(userRef);

      // MAJ STATE REDUX SI USER EXISTRE
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log("userData", userData);
        console.log("role", userData.role);
        dispatch(
          loginSuccess({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            role: userData.role,
            nom: userData.nom,
            prenom: userData.prenom,
          })
        );
      } else {
        console.log("Aucun document correspondant !");
      }

      console.log("User connected:", userCredential.user);
      if (userDoc.exists() && userDoc.data().role === "client") {
        navigate("/private/privateHome");
        // navigate("/test");
      } else {
        // navigate("/private/privateHome");
        alert(
          "Vous n'êtes pas autorisé à accéder à cette page. Si vous êtes un gérant, veuillez vous connecter sur le lien de connexion des gérants."
        );
        dispatch(
          loginFailure(
            "Vous n'êtes pas autorisé à accéder à cette page. Si vous êtes un gérant, veuillez vous connecter sur le lien de connexion des gérants."
          )
        );
      }

      isClose();
    } catch (error) {
      dispatch(loginFailure(error.message));
      setValidation("Erreur lors de la connexion: " + error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modalOverlay")) {
      isClose();
    }
  };

  return (
    <div className="modalOverlay" onClick={handleOverlayClick}>
      <div className="modalDialog">
        <div className="modalContent">
          <div className="modalHeader">
            <h3>Connexion</h3>
            <button className="close-btn" onClick={isClose}>
              ✖️
            </button>
          </div>
          <div className="modalBody">
            <form className="signInForm" onSubmit={handleSignIn}>
              <label htmlFor="signInEmail">Email</label>
              <input
                type="email"
                name="email"
                id="signInEmail"
                className="formControl"
                autoComplete="email"
                ref={emailRef}
                required
              />
              <label htmlFor="signInMdp">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="signInMdp"
                className="formControl"
                autoComplete="current-password"
                ref={passwordRef}
                required
              />
              {validation && <p className="error">{validation}</p>}
              <button type="submit" className="submit-btn">
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignInModal = ({ isOpen, isClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay isClose={isClose} />,
    document.getElementById("modal-root")
  );
};

export default SignInModal;

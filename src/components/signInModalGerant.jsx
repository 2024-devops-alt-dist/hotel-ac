import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import "../style/SignUpModalStyle.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginGerantSuccess,
  loginGerantFailure,
  setLoadingGerant,
} from "../redux/actions/authGerantAction";
import { signInGerant } from "../firebase/authGerant";

const ModalOverlayGerant = ({ isClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [validation, setValidation] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignInGerant = async (e) => {
    e.preventDefault();
    dispatch(setLoadingGerant(true));

    try {
      // Co GERANT
      const gerantData = await signInGerant(
        emailRef.current.value,
        passwordRef.current.value
      );

      // CO OK => maj state redux
      dispatch(
        loginGerantSuccess({
          email: gerantData.email,
          uid: gerantData.id,
        })
      );

      console.log("Gérant connecté:", gerantData);
      navigate("/privateG/privateHomeGer");
      isClose();
    } catch (error) {
      dispatch(loginGerantFailure(error.message));
      setValidation("Erreur lors de la connexion: " + error.message);
    } finally {
      dispatch(setLoadingGerant(false));
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
            <h3>Connexion Gérant</h3>
            <button className="close-btn" onClick={isClose}>
              ✖️
            </button>
          </div>
          <div className="modalBody">
            <form className="signInForm" onSubmit={handleSignInGerant}>
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
              {validation && <p className="error">{validation}</p>}{" "}
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

const SignInModalGerant = ({ isOpen, isClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlayGerant isClose={isClose} />,
    document.getElementById("modal-root")
  );
};

export default SignInModalGerant;

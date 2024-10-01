import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import "../style/SignUpModalStyle.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebase-config";
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
      // Co avec Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      // co ok => maj state redux
      dispatch(
        loginSuccess({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
        })
      );

      console.log("User connected:", userCredential.user);
      navigate("/private/PrivateHome");
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

const SignInModal = ({ isOpen, isClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay isClose={isClose} />,
    document.getElementById("modal-root")
  );
};

export default SignInModal;

// // SignInModal.js
// import React, { useRef, useState } from "react";
// import ReactDOM from "react-dom";
// import "../style/SignUpModalStyle.css";
// import { signIn } from "../firebase/auth"; // Update the import
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginSuccess, loginFailure, setLoading } from "../redux/actions/authAction";

// const ModalOverlay = ({ isClose }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [validation, setValidation] = useState("");
//   const emailRef = useRef();
//   const passwordRef = useRef();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     dispatch(setLoading(true));

//     try {
//       const userCredential = await signIn(
//         emailRef.current.value,
//         passwordRef.current.value
//       );
//       dispatch(
//         loginSuccess({
//           email: userCredential.user.email,
//           uid: userCredential.user.uid,
//         })
//       );
//       navigate("/private/PrivateHome");
//       isClose();
//     } catch (error) {
//       dispatch(loginFailure(error.message));
//       setValidation("Erreur lors de la connexion: " + error.message);
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target.classList.contains("modalOverlay")) {
//       isClose();
//     }
//   };

//   return (
//     <div className="modalOverlay" onClick={handleOverlayClick}>
//       <div className="modalDialog">
//         <div className="modalContent">
//           <div className="modalHeader">
//             <h3>Connexion</h3>
//             <button className="close-btn" onClick={isClose}>
//               ✖️
//             </button>
//           </div>
//           <div className="modalBody">
//             <form className="signInForm" onSubmit={handleSignIn}>
//               <label htmlFor="signInEmail">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="signInEmail"
//                 className="formControl"
//                 autoComplete="email"
//                 ref={emailRef}
//                 required
//               />
//               <label htmlFor="signInMdp">Mot de passe</label>
//               <input
//                 type="password"
//                 name="password"
//                 id="signInMdp"
//                 className="formControl"
//                 autoComplete="current-password"
//                 ref={passwordRef}
//                 required
//               />
//               {validation && <p className="error">{validation}</p>}
//               <button type="submit" className="submit-btn">
//                 Se connecter
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SignInModal = ({ isOpen, isClose }) => {
//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <ModalOverlay isClose={isClose} />,
//     document.getElementById("modal-root")
//   );
// };

// export default SignInModal;

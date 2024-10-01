// import React from "react";
// import ReactDOM from "react-dom";
// import { useRef, useState } from "react";
// import { signUp } from "../firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/actions/authAction";
// import "../style/SignUpModalStyle.css";
// import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";

// const ModalOverlay = ({ isClose }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [validation, setValidation] = useState("");
//   const inputs = useRef([]);
//   const addInputs = (el) => {
//     if (el && !inputs.current.includes(el)) {
//       inputs.current.push(el);
//     }
//   };

//   const formRef = useRef();
//   // soumission du form
//   const handleForm = async (e) => {
//     e.preventDefault();
//     console.log("signUp", signUp);
//     if (
//       inputs.current[0].value.length < 2 ||
//       inputs.current[1].value.length < 2
//     ) {
//       setValidation(
//         "Le nom et le prénom doivent contenir au moins 2 caractères"
//       );
//       return;
//     }
//     if (inputs.current[2].value.indexOf("@") === -1) {
//       setValidation("Email invalide");
//       return;
//     }
//     if (
//       inputs.current[3].value.length < 6 ||
//       inputs.current[4].value.length < 6
//     ) {
//       setValidation("Le mot de passe doit contenir au moins 6 caractères");
//       return;
//     }

//     if (inputs.current[3].value !== inputs.current[4].value) {
//       setValidation("Les mots de passe ne correspondent pas");
//       return;
//     }
//     try {
//       const userCredential = await signUp(
//         inputs.current[0].value,
//         inputs.current[1].value,
//         inputs.current[2].value,
//         inputs.current[3].value
//       );
//       // Si l'inscription est réussie, on met à jour le state Redux
//       // dispatch(loginSuccess(userCredential.user)); // Mise à jour de isAuth et user dans Redux
//       dispatch(
//         loginSuccess({
//           email: userCredential.user.email,
//           uid: userCredential.user.uid,
//           nom: inputs.current[0].value,
//           prenom: inputs.current[1].value,
//         })
//       );
//       console.log("userCredential", userCredential);

//       formRef.current.reset();
//       setValidation("");
//       console.log("userCredential", userCredential);
//       navigate("/private/PrivateHome");
//       isClose();
//     } catch (error) {
//       if (error.code === "auth/email-already-in-use") {
//         setValidation("Cet email est déjà utilisé");
//       } else {
//         setValidation("Erreur ! Veuillez réessayer");
//       }

//       console.dir(error);
//     }
//     console.log("inputs", inputs);
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
//             <h3>Créer un compte</h3>
//             <button className="close-btn" onClick={isClose}>
//               ✖️
//             </button>
//           </div>
//           <div className="modalBody">
//             <form className="signUpForm" ref={formRef} onSubmit={handleForm}>
//               <label htmlFor="signUpNom">Nom</label>
//               <input
//                 ref={addInputs}
//                 type="text"
//                 name="nom"
//                 id="signUpNom"
//                 className="formControl"
//                 autoComplete="nom"
//                 required
//               />

//               <label htmlFor="signUpPrenom">Prénom</label>
//               <input
//                 ref={addInputs}
//                 type="text"
//                 name="prenom"
//                 id="signUpPrenom"
//                 className="formControl"
//                 autoComplete="prenom"
//                 required
//               />

//               <label htmlFor="signUpEmail">Email</label>
//               <input
//                 ref={addInputs}
//                 type="email"
//                 name="email"
//                 id="signUpEmail"
//                 className="formControl"
//                 autoComplete="email"
//                 required
//               />

//               <label htmlFor="signUpMdp">Mot de passe</label>
//               <input
//                 ref={addInputs}
//                 type="password"
//                 name="password"
//                 id="signUpMdp"
//                 className="formControl"
//                 autoComplete="new-password"
//                 required
//               />

//               <label htmlFor="repeatMdp">Confirmer le mot de passe</label>
//               <input
//                 ref={addInputs}
//                 type="password"
//                 name="password"
//                 id="repeatMdp"
//                 className="formControl"
//                 autoComplete="new-password"
//                 required
//               />
//               <p>{validation}</p>

//               <button type="submit">Créer un compte</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SignUpModal = ({ isOpen, isClose }) => {
//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <ModalOverlay isClose={isClose} />,
//     document.getElementById("modal-root")
//   );
// };

// export default SignUpModal;

/////////////2 eme version

// import React from "react";
// import ReactDOM from "react-dom";
// import { useRef, useState } from "react";
// import { signUp } from "../firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/actions/authAction";
// import "../style/SignUpModalStyle.css";

// const ModalOverlay = ({ isClose }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [validation, setValidation] = useState("");
//   const inputs = useRef([]);

//   const addInputs = (el) => {
//     if (el && !inputs.current.includes(el)) {
//       inputs.current.push(el);
//     }
//   };

//   const formRef = useRef();

//   const handleForm = async (e) => {
//     e.preventDefault();
//     if (
//       inputs.current[0].value.length < 2 ||
//       inputs.current[1].value.length < 2
//     ) {
//       setValidation(
//         "Le nom et le prénom doivent contenir au moins 2 caractères"
//       );
//       return;
//     }
//     if (inputs.current[2].value.indexOf("@") === -1) {
//       setValidation("Email invalide");
//       return;
//     }
//     if (
//       inputs.current[3].value.length < 6 ||
//       inputs.current[4].value.length < 6
//     ) {
//       setValidation("Le mot de passe doit contenir au moins 6 caractères");
//       return;
//     }

//     if (inputs.current[3].value !== inputs.current[4].value) {
//       setValidation("Les mots de passe ne correspondent pas");
//       return;
//     }
//     try {
//       const userCredential = await signUp(
//         inputs.current[2].value,
//         inputs.current[3].value
//       );
//       dispatch(
//         loginSuccess({
//           email: userCredential.user.email,
//           uid: userCredential.user.uid,
//         })
//       );
//       formRef.current.reset();
//       setValidation("");
//       navigate("/private/PrivateHome");
//       isClose();
//     } catch (error) {
//       if (error.code === "auth/email-already-in-use") {
//         setValidation("Cet email est déjà utilisé");
//       } else {
//         setValidation("Erreur ! Veuillez réessayer");
//       }
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
//             <h3>Créer un compte</h3>
//             <button className="close-btn" onClick={isClose}>
//               ✖️
//             </button>
//           </div>
//           <div className="modalBody">
//             <form className="signUpForm" ref={formRef} onSubmit={handleForm}>
//               <label htmlFor="signUpNom">Nom</label>
//               <input
//                 ref={addInputs}
//                 type="text"
//                 name="nom"
//                 id="signUpNom"
//                 className="formControl"
//                 autoComplete="nom"
//                 required
//               />
//               <label htmlFor="signUpPrenom">Prénom</label>
//               <input
//                 ref={addInputs}
//                 type="text"
//                 name="prenom"
//                 id="signUpPrenom"
//                 className="formControl"
//                 autoComplete="prenom"
//                 required
//               />
//               <label htmlFor="signUpEmail">Email</label>
//               <input
//                 ref={addInputs}
//                 type="email"
//                 name="email"
//                 id="signUpEmail"
//                 className="formControl"
//                 autoComplete="email"
//                 required
//               />
//               <label htmlFor="signUpMdp">Mot de passe</label>
//               <input
//                 ref={addInputs}
//                 type="password"
//                 name="password"
//                 id="signUpMdp"
//                 className="formControl"
//                 autoComplete="new-password"
//                 required
//               />
//               <label htmlFor="repeatMdp">Confirmer le mot de passe</label>
//               <input
//                 ref={addInputs}
//                 type="password"
//                 name="password"
//                 id="repeatMdp"
//                 className="formControl"
//                 autoComplete="new-password"
//                 required
//               />
//               <p>{validation}</p>
//               <button type="submit">Créer un compte</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SignUpModal = ({ isOpen, isClose }) => {
//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <ModalOverlay isClose={isClose} />,
//     document.getElementById("modal-root")
//   );
// };

// export default SignUpModal;

/////////////3 eme version

// import React from "react";
// import ReactDOM from "react-dom";
// import { useRef, useState } from "react";
// import { signUp } from "../firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/actions/authAction";
// import "../style/SignUpModalStyle.css";
// const ModalOverlay = ({ isClose }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [validation, setValidation] = useState("");
//   const inputs = useRef([]);
//   const addInputs = (el) => {
//     if (el && !inputs.current.includes(el)) {
//       inputs.current.push(el);
//     }
//   };
//   const formRef = useRef();
//   // soumission du form
//   const handleForm = async (e) => {
//     e.preventDefault();
//     console.log("signUp", signUp);
//     if (
//       inputs.current[0].value.length < 2 ||
//       inputs.current[1].value.length < 2
//     ) {
//       setValidation(
//         "Le nom et le prénom doivent contenir au moins 2 caractères"
//       );
//       return;
//     }
//     if (inputs.current[2].value.indexOf("@") === -1) {
//       setValidation("Email invalide");
//       return;
//     }
//     if (
//       inputs.current[3].value.length < 6 ||
//       inputs.current[4].value.length < 6
//     ) {
//       setValidation("Le mot de passe doit contenir au moins 6 caractères");
//       return;
//     }
//     if (inputs.current[3].value !== inputs.current[4].value) {
//       setValidation("Les mots de passe ne correspondent pas");
//       return;
//     }

//     try {
//       const userCredential = await signUp(
//         inputs.current[2].value,
//         inputs.current[3].value
//       );
//       // Si l'inscription est réussie, on met à jour le state Redux
//       // dispatch(loginSuccess(userCredential.user)); // Mise à jour de isAuth et user dans Redux
//       dispatch(
//         loginSuccess({
//           email: userCredential.user.email,
//           uid: userCredential.user.uid,
//         })
//       );
//       console.log("userCredential", userCredential);
//       formRef.current.reset();
//       setValidation("");
//       console.log("userCredential", userCredential);
//       navigate("/private/PrivateHome");
//       isClose();
//     } catch (error) {
//       if (error.code === "auth/email-already-in-use") {
//         setValidation("Cet email est déjà utilisé");
//       } else {
//         setValidation("Erreur ! Veuillez réessayer");
//       }
//       console.dir(error);
//     }
//     console.log("inputs", inputs);
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
//             <h3>Créer un compte</h3>
//             <button className="close-btn" onClick={isClose}>
//               ✖️
//             </button>
//           </div>
//           <div className="modalBody">
//             <form className="signUpForm" ref={formRef} onSubmit={handleForm}>
//               <label htmlFor="signUpNom">Nom</label>
//               <input
//                 ref={addInputs}
//                 type="text"
//                 name="nom"
//                 id="signUpNom"
//                 className="formControl"
//                 autoComplete="nom"
//                 required
//               />
//               <label htmlFor="signUpPrenom">Prénom</label>
//               <input
//                 ref={addInputs}
//                 type="text"
//                 name="prenom"
//                 id="signUpPrenom"
//                 className="formControl"
//                 autoComplete="prenom"
//                 required
//               />
//               <label htmlFor="signUpEmail">Email</label>
//               <input
//                 ref={addInputs}
//                 type="email"
//                 name="email"
//                 id="signUpEmail"
//                 className="formControl"
//                 autoComplete="email"
//                 required
//               />
//               <label htmlFor="signUpMdp">Mot de passe</label>
//               <input
//                 ref={addInputs}
//                 type="password"
//                 name="password"
//                 id="signUpMdp"
//                 className="formControl"
//                 autoComplete="new-password"
//                 required
//               />
//               <label htmlFor="repeatMdp">Confirmer le mot de passe</label>
//               <input
//                 ref={addInputs}
//                 type="password"
//                 name="password"
//                 id="repeatMdp"
//                 className="formControl"
//                 autoComplete="new-password"
//                 required
//               />
//               <p>{validation}</p>
//               <button type="submit">Créer un compte</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// const SignUpModal = ({ isOpen, isClose }) => {
//   if (!isOpen) return null;
//   return ReactDOM.createPortal(
//     <ModalOverlay isClose={isClose} />,
//     document.getElementById("modal-root")
//   );
// };
// export default SignUpModal;

/////////////4 eme version

import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/actions/authAction";
import "../style/SignUpModalStyle.css";
import { signUp, getUserFromFirestore } from "../firebase/auth";
const ModalOverlay = ({ isClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [validation, setValidation] = useState("");
  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    // Validation des champs du formulaire
    if (
      inputs.current[0].value.length < 2 ||
      inputs.current[1].value.length < 2
    ) {
      setValidation(
        "Le nom et le prénom doivent contenir au moins 2 caractères"
      );
      return;
    }
    if (inputs.current[2].value.indexOf("@") === -1) {
      setValidation("Email invalide");
      return;
    }
    if (
      inputs.current[3].value.length < 6 ||
      inputs.current[4].value.length < 6
    ) {
      setValidation("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }
    if (inputs.current[3].value !== inputs.current[4].value) {
      setValidation("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      const userData = {
        nom: inputs.current[0].value,
        prenom: inputs.current[1].value,
        email: inputs.current[2].value,
      };

      // CREER LE COMPTE
      const userCredential = await signUp(
        inputs.current[2].value,
        inputs.current[3].value,
        userData
      );

      // RECUP USER DATA DE FIRESTORE
      const userDataFromFirestore = await getUserFromFirestore(
        userCredential.user.uid
      );

      dispatch(
        loginSuccess({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          nom: userDataFromFirestore.nom,
          prenom: userDataFromFirestore.prenom,
        })
      );

      formRef.current.reset();
      setValidation("");
      navigate("/private/PrivateHome");
      isClose();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setValidation("Cet email est déjà utilisé");
      } else {
        setValidation("Erreur ! Veuillez réessayer");
      }
      console.dir(error);
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
            <h3>Créer un compte</h3>
            <button className="close-btn" onClick={isClose}>
              ✖️
            </button>
          </div>
          <div className="modalBody">
            <form className="signUpForm" ref={formRef} onSubmit={handleForm}>
              <label htmlFor="signUpNom">Nom</label>
              <input
                ref={addInputs}
                type="text"
                name="nom"
                id="signUpNom"
                className="formControl"
                autoComplete="nom"
                required
              />
              <label htmlFor="signUpPrenom">Prénom</label>
              <input
                ref={addInputs}
                type="text"
                name="prenom"
                id="signUpPrenom"
                className="formControl"
                autoComplete="prenom"
                required
              />
              <label htmlFor="signUpEmail">Email</label>
              <input
                ref={addInputs}
                type="email"
                name="email"
                id="signUpEmail"
                className="formControl"
                autoComplete="email"
                required
              />
              <label htmlFor="signUpMdp">Mot de passe</label>
              <input
                ref={addInputs}
                type="password"
                name="password"
                id="signUpMdp"
                className="formControl"
                autoComplete="new-password"
                required
              />
              <label htmlFor="repeatMdp">Confirmer le mot de passe</label>
              <input
                ref={addInputs}
                type="password"
                name="repeatPassword"
                id="repeatMdp"
                className="formControl"
                autoComplete="new-password"
                required
              />
              <p>{validation}</p>
              <button type="submit">Créer un compte</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignUpModal = ({ isOpen, isClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <ModalOverlay isClose={isClose} />,
    document.getElementById("modal-root")
  );
};

export default SignUpModal;

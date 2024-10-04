import React from "react";
import "../style/ContactStyle.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="contactPage">
      <Header />
      <div className="formContactContainer">
        <div className="formContact">
          <h2>Contactez-nous</h2>
          <form>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
            <button className="buttonContact" type="submit">
              Envoyer
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

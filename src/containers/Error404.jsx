import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Error404() {
  return (
    <div className="err404">
      <Header />
      <h1>Erreur 404</h1>
      <p>lô pô trouvé</p>
      <Footer />
    </div>
  );
}

export default Error404;

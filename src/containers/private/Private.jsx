import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import "../../style/PrivateStyle.css";

export default function Private() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="RoutePriveeContainer">
      <Header />
      <div className="privateContainer">
        <h1 className="privateTitle">Espace privé</h1>
        <p>
          hello {user.prenom} {user.nom}
        </p>
        <Outlet />
      </div>
    </div>
  );
}

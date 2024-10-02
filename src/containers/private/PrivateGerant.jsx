import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/Header";

export default function PrivateGerant() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const gerant = useSelector((state) => state.auth.gerant);

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="privateContainer">
      <Header />
      <h1>Private Route</h1>
      <p>hello {gerant.email}</p>
      <Outlet />
    </div>
  );
}

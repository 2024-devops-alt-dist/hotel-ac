import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../../components/Header";

export default function Private() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="privateContainer">
      <Header />
      <h1>Private Route</h1>
      <p>hello {user.email}</p>
      <Outlet />
    </div>
  );
}

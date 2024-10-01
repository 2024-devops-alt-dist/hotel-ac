import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../containers/Home";
import Gerant from "../containers/Gerant";
import Error from "../containers/Error404";
import HotelsList from "../containers/HotelsList";
import HotelDetail from "./containers/HotelDetail";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gerant",
    element: <Gerant />,
  },

  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/nosHotels",
    element: <HotelsList />,
  },
  {
    path: "/hotel/:id",
    element: <HotelDetail />,
  },
]);

export default Router;

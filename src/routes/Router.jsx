import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../containers/Home";
import Gerant from "../containers/Gerant";
import Error from "../containers/Error404";
import HotelsList from "../containers/HotelsList";

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
]);

export default Router;

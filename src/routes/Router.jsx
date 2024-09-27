import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../containers/Home";
import Gerant from "../containers/Gerant";
import Error from "../containers/Error404";

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
]);

export default Router;

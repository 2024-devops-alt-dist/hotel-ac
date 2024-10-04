import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../containers/Home";
import Gerant from "../containers/Gerant";
import Error from "../containers/Error404";
import HotelsList from "../containers/HotelsList";
import HotelDetails from "../containers/HotelDetails";
import Test from "../containers/Test";
import About from "../containers/About";
import Contact from "../containers/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gerant",
    element: <Gerant />,
  },
  {
    path: "/nosHotels",
    element: <HotelsList />,
  },
  {
    path: "/hotel/:id",
    element: <HotelDetails />,
  },
  {
    path: "*",
    element: <Error />,
  },

  { path: "/test", element: <Test /> },

  { path: "/about", element: <About /> },

  { path: "/contact", element: <Contact /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

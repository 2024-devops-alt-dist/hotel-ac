import React from "react";
import ReactDOM from "react-dom/client";
//import { RouterProvider } from "react-router-dom";
//import Router from "./routes/Router";

//redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

//actions
import searchEtabSlice from "./redux/actions/searchEtabAction";
import App from "./App";
import "./index.css";

//import addEtabSlice from "./redux/actions/addEtabAction";

const store = configureStore({
  reducer: {
    searchEtab: searchEtabSlice,
    //addEtab: addEtabSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

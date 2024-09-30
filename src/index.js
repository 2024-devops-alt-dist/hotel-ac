import React from "react";
import ReactDOM from "react-dom/client";
//import { RouterProvider } from "react-router-dom";
//import Router from "./routes/Router";

//redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

//actions
import searchEtabsSlice from "./redux/actions/searchEtabAction";
import App from "./App";
import "./index.css";
import { auth } from "./firebase/firebase-config";
import authSlice from "./redux/actions/authAction";

//import addEtabSlice from "./redux/actions/addEtabAction";

const store = configureStore({
  reducer: {
    searchEtabs: searchEtabsSlice,
    auth: authSlice,
    //addEtab: addEtabSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";

//redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

//actions
import searchEtabsSlice from "./redux/actions/searchEtabAction";
import App from "./App";
import "./index.css";
import authSlice from "./redux/actions/authAction";
import etabSlice from "./redux/actions/etabAction";

//import addEtabSlice from "./redux/actions/addEtabAction";

const store = configureStore({
  reducer: {
    etabs: searchEtabsSlice,
    auth: authSlice,
    fetchEtabs: etabSlice,
    //addEtab: addEtabSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

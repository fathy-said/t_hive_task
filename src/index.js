import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { Store } from "./RTK/store";
import "./index.css";
import "./API/axios-global";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>
   </React.StrictMode>
);

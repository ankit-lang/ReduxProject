import React, { StrictMode } from "react";
import App from "./App";
import "./style/app.scss"
import  ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);


root.render(
  <StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
    
  </StrictMode>
);


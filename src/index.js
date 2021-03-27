import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import "bulma/css/bulma.css";
import "./styles.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootElement
);

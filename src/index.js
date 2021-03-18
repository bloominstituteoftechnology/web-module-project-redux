import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers";
import { Provider } from "react-redux";
const store = createStore(reducer, applyMiddleware());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

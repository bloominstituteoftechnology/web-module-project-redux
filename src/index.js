import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//* 💡 SET UP STORE, PROVIDER, REDUCER
import {createStore} from 'redux';
import {Provider} from "react-redux";
import {reducer} from "./reducers";

import 'bulma/css/bulma.css';
import './styles.scss';

//* 💡 SET UP STORE, PROVIDER
const store = createStore(reducer);
console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import { reducer } from './reducers'
import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from 'redux';

//Set up store and Provider
const store = createStore(reducer);
 console.log(store.getState())

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
,
  rootElement
);

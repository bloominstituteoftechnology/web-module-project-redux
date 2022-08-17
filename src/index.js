import React from 'react';
import ReactDOM from 'react-dom';

import reducer from './reducers/index';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

let store
export const resetStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(reducer, composeEnhancers())
}
resetStore()

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App/>
      </Provider>
  </Router>
,
  document.getElementById('root')
);

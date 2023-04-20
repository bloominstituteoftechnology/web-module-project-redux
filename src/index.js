import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import { legacy_createStore as createStore } from 'redux' 
import { Provider } from 'react-redux';

import reducer from './reducers';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import favoritesReducer from './reducers/favoritesReducers';


const store = createStore(reducer, favoritesReducer, window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION())

ReactDOM.render(
  
  <Router>
  <Provider store={store}>   
     <App />
     </Provider>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';


import { createStore } from 'redux';
import { Provider} from 'react-redux';

import movieReducer, {initialState} from './reducers';

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const store = createStore(movieReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

import {rootReducer} from './reducers/index';

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// Step 1: Create the Redux Store
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>,

  document.getElementById('root')
);

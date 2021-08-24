import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

import reducer from './reducers';

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// 1. creating store method
const store = createStore(reducer);

ReactDOM.render(
  // 2. use Provider to connect store by wrapping Provider
  <Provider store={store}>
  <Router>
      <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);

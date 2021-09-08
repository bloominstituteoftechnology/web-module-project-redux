import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

import reducer from './reducers';

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const store = createStore(reducer); //step 1

ReactDOM.render(// step 2 apply provider and include store
<Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

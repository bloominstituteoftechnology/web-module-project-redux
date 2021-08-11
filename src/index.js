import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

import reducer from './reducers';

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';


//Assign createStore to store, pass in reducer
const store = createStore(reducer);

ReactDOM.render(

  // Added provider and assign store
  <Router> 
    {/* Provider makes redux store available */}
    <Provider store = {store}> 
        <App />
    </Provider>
  </Router>, 
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';



// import createStore and Provider
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import reducer from './reducers';
// create The Store 
const store = createStore(reducer, );

ReactDOM.render(
  <Router>
    <Provider store={store}>
       <App />
    </Provider>  
  </Router>,
  document.getElementById('root')
);


// * [ ] In index.js, make use of the createStore method and Provider component to link your App to redux.
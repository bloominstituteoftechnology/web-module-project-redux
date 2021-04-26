import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import 'bulma/css/bulma.css';
import './styles.scss';
const store = createStore(reducers, applyMiddleware(thunk));
const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
      <App />
</Provider>, 
rootElement);
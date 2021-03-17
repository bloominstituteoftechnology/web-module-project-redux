import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import  {reducer}  from './reducers/index';


const store = createStore(reducer);
// console.log(store.getState())

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 rootElement);

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.scss';
import ConnectedApp from './App';
import {createStore} from 'redux';
import {reducer} from './reducer';

export const store = createStore(reducer);

const rootElement = document.getElementById('root');

ReactDOM.render(<Provider store={store}><ConnectedApp /></Provider>, rootElement);

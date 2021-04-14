import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.scss';
import ConnectedApp, {store} from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(<Provider store={store}><ConnectedApp /></Provider>, rootElement);

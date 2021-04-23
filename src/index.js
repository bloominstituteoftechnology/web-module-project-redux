import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"; //Connecting React to Redux here
import { rootReducer } from "./reducer/reducer";//importing reducer from our reducer file
import { createStore } from "redux"; //importing create store from redux here in App
import 'bulma/css/bulma.css';
import './styles.scss';

//Setting up the store + provider --hooking up the power lines
const store = createStore(rootReducer);
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement
    );

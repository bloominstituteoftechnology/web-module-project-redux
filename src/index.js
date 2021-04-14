import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'

import { reducer } from './reducers/index'
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);
console.log(store.getState)
// const initialState = {
//     additionalPrice: 0,
//     car: {
//         price: 26395,
//         name: '2019 Ford Mustang',
//         image:
//         'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//         features: []
//     },
//     additionalFeatures: [
//         { id: 1, name: 'V-6 engine', price: 1500 },
//         { id: 2, name: 'Racing detail package', price: 1500 },
//         { id: 3, name: 'Premium sound system', price: 500 },
//         { id: 4, name: 'Rear spoiler', price: 250 }
//     ]
// };


// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         default:
//             return state;
//     }

// }


// const HelloApp = (props) => {
//     return <h1>{props.additionalPrice}</h1>
// }

// const mapStateToProps = (state) => {
//     return { additionalPrice: state.additionalPrice }
// }

// const ConnectedApp = connect(mapStateToProps, {})(HelloApp)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}><App /></Provider>
        
    , rootElement);

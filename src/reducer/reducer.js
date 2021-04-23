//import React, { useState, useReducer } from 'react' - Do I need to do this here?


//Here we moved over the state to be initialized here in the reducer
const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };
  //Here we are hooking up the Redux flow
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FEATURE ://add_feature//
        console.log("ADD_FEATURE action running in reducer file");
        const newFeature = {feature: action.payload};
        return {
          ...state,
          feature: [...state.features, newFeature]
          
        };
      
        case REMOVE_FEATURE://remove_feature//
          console.log("REMOVE_FEATURE action running in reducer file")
          const takeAway = {op: action.payload}
          return {
            ...state,
            op: [...state.features, takeAway]
            
          };

        case ://update_total//
          console.log("update_total action running in reducer file")
          return {
            ...state,
            //update the total LOGIC
          };
        default:
          return state;
    }
};
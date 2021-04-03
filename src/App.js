import React, { useReducer }from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

function reducer(state, action) {
  switch(action.type) {
    case "buy":
      state.car.features.push(action.item)
      state.additionalPrice += action.item.price;
      break;
    case "cancel":
      // remove the given feuture from the array
      state.car.features.filter(feauture => {
        return !(feauture.id === action.item.id);
      })
      state.additionalPrice -= action.item.price;
  }
}
const App = () => {
  const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        // this is where we will add features that are bought
      features: []
    },
    // features that can be bought
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} dispatch={dispatch} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} dispatch={dispatch}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;

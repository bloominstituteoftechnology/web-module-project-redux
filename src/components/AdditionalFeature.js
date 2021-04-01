import React, { useReducer } from "react";
import reducer from '../reducers/featureReducer'

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
}

const AdditionalFeature = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddFeature = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_FEATURE', payload: props.feature.price })
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick= {handleAddFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
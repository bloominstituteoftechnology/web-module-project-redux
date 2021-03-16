import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import { updateAddlPrice, updateCarPrice,  updateCarName,  updateCarImage, updateCarFeatures, updateAddlFeatures } from './actions'
import Total from './components/Total';
import { connect } from 'react-redux';

const App = () => {
  const state = {
    newAddlPrice: '',
    newCar: {
      newPrice: null,
      newName: '',
      newImage: '',
      newFeatures: []
    },
    newAddlFeatures: [
      { id: Date.now(), name: '', price: null },
    ]
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.newCcar} />
        <AddedFeatures car={state.newCar} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.newAddlFeatures} />
        <Total car={state.newCar} additionalPrice={state.newAddlPrice} />
      </div>
    </div>
  );
};

const map = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    price: state.car.price,
    name: state.car.name,
    image: state.car.image,
    features: state.car.features,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect( map, { updateAddlPrice, updateCarPrice,  updateCarName,  updateCarImage, updateCarFeatures, updateAddlFeatures })(App);

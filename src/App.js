import React from 'react';
import { connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {addFeature, removeFeature} from './Actions'

export const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures/>
      </div>
      <div className="box">
        <AdditionalFeatures/>
        <Total/>
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
      additionalPrice: 0,
      car: {
        price: state.car.price,
        name: state.car.name,
        image: state.car.image,
        features: state.car.features
      },
      additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]};
  };
const ConnectedApp = connect(mapStateToProps, {})(App);
export default ConnectedApp;

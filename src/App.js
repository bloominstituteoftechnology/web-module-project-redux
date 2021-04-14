import React from 'react';
import { connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {createStore} from 'redux';
import {reducer} from './reducer';
import {addFeature, removeFeature} from './Actions'
export const store = createStore(reducer);

const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
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
const ConnectedApp = connect(mapStateToProps, {addFeature, removeFeature})(App);
export default ConnectedApp;

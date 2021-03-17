import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import { updateAddlPrice, updateCarPrice,  updateCarName,  updateCarImage, updateCarFeatures, updateAddlFeatures, addNewFeature, removeFeature } from './actions'
import Total from './components/Total';
import { connect } from 'react-redux';

const App = (state) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const map2App = (state) => {
  return {
    ...state
  }
}
const map2Dispatch = (dispatch) => {
  return  (addNewFeature, removeFeature)
}

export default connect( map2App, map2Dispatch )(App);

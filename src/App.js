import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { rootReducer } from "./reducer/reducer";//importing reducer from our reducer file
import { createStore } from "redux"; //importing create store from redux here in App
import { connect } from 'react-redux';//import the connect 
import { reducer } from "./reducer/reducer";//import the reducer
import { addFeature, removeFeature } from "./actions/action"; //Must import the explicit feature being exported from the file it lives in


const store = createStore(rootReducer);

const App = () => {
  

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

export default App;

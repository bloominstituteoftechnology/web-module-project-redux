import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from "react-redux";

import {addFeatures, removeFeatures} from "./actions";

const App = (props) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeatures={addFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//* 💡 Mapping values from redux store to props for components:
const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: {
      price: state.car.price,
      name: state.car.name,
      image: state.car.image,
      features: state.car.features,
    },
    additionalFeatures: state.additionalFeatures,
  }
};

//*💡 Call connect, pass in component want to connect to Store - Function currying:
export default connect(mapStateToProps, 
  {addFeatures, removeFeatures})(App);

/**Notes
 ** Flow:
 * 👉 Set up "empty" reducer and initial state 
 * 👉 Set up store and Provider 
 * 👉 Connect components 
 * 👉 Add events and event handlers in UI 
 * 👉 Build action creators 
 * 👉 write the reducer logic for the actions 
 * 👉 Rinse and repeat
 * -
 ** Steps:
 * 🕐 Make "actions" and "reducers" directories with index(s)
 * 🕑 Set up initial state for redux store to use in "./reducers/index.js"
 * 🕒 Setting up store & provider
 * 🕓 mapStateToProps and Connect function (function currying)
 * 🕔 update component to use props instead of state
 * 🕕 Set up action types in "./actions", create actions, build bulk exporter, import to App
 * 🕖 write reducer logic
 */

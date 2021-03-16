import React from 'react';
import { removeFeature } from '../actions';
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => removeFeature(props.feature) }>X</button>
      {props.feature.name}
    </li>
  );
};

const mapFeature = (state) => {
  return {
    car: state.car
  }
}

export default connect(mapFeature, {removeFeature})(AddedFeature);

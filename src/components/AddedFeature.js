import React from 'react';
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature) }>X</button>
      {props.feature.name}
    </li>
  );
};

const map = (state) => {
  return {
    car: state.car
  }
}

export default connect(map)(AddedFeature);

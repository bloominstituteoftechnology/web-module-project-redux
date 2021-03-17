import React from 'react';
import { removeFeature } from '../actions';
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
          props.removeFeature(props.feature)
        }}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapFeature = (state, props) => {
  return {
    ...state,
    feature: props.feature
  }
}

export default connect(mapFeature, {removeFeature})(AddedFeature);

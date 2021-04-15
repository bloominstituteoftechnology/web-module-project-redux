import React from 'react';
import { connect} from 'react-redux';
import {removeFeature} from './../Actions'


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props.feature.id)}className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    features: state.car.features
  };
};
export default connect(null, {removeFeature})(AddedFeature);

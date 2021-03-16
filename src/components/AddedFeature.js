import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeat(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  }
}

const DispatchToProps = dispatch => {
  return {
    removeFeat: (feature) => dispatch(removeFeature(feature))
  }
}

export default connect(mapStateToProps, DispatchToProps)(AddedFeature)

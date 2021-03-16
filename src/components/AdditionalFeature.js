import React from 'react';
import { connect } from 'react-redux';
import { action, addFeature } from '../actions';

const AdditionalFeature = (props) => {

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addFeat(props.feature.price, props.feature.name)}>Add</button>
      {props.feature.name} (+{props.feature.price})
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

const mapDispatchToProps = dispatch => {
  return {
    addFeat: (value, name) => dispatch(addFeature(value, name)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature)

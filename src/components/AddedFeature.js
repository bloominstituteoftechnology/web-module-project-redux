import React from 'react';
import { removeFeature } from '../actions/action';
import { connect } from 'react-redux';

//if you're using state, we do 'mapStateToProps'
//if we're using a function, we use 'mapDispatchToProps'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeatureFunction(props.feature)}className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return{
    removeFeatureFunction: feature => dispatch(removeFeature(feature)) //the removeFeature on the left can be named whatever, it's just the key name
  }
}

export default connect(null, mapDispatchToProps)(AddedFeature);
//connect takes arguments in a certain order, the first is mapsstatetoprops, if it doesn't take that, we put in null
//This way it knows there isn't a mapsstatetoprops
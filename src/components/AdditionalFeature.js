import React from 'react';
import { connect } from 'react-redux';

import { ADD_FEATURE } from '../actions/actions'

const AdditionalFeature = props => {
  
  function onClick(){
    props.dispatch({type: ADD_FEATURE, data: props.feature})
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={onClick}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect()(AdditionalFeature);

import React from 'react';
import { connect } from 'react-redux';

import { REMOVE_FEATURE } from '../actions/actions'

const AddedFeature = props => {
  
  function onClick(){
    props.dispatch({type: REMOVE_FEATURE, data: props.feature})
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={onClick} >X</button>
      {props.feature.name}
    </li>
  );
};

export default connect()(AddedFeature);

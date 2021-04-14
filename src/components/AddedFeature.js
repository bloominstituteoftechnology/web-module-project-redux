import React from 'react';
import { connect } from "react-redux";
import {deleteFeature} from '../actions/carListActions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      onClick={() => props.dispatch(deleteFeature(props.feature))}
      className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect()(AddedFeature);

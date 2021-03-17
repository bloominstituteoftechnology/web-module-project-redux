import React from 'react';
import { updateAddFeature } from '../actions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      className="button" 
      onClick={() => {

      }} >X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

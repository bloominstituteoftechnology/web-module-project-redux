import React from 'react';
import { deleteFeature } from '../actions'

import {connect} from 'react-redux'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      className="button" 
      onClick={() => {
        props.deleteFeature(props.feature)
      }} >X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = (state) => {
  return {
   deleteFeature: state.deleteFeature
  }
}

export default connect(mapStateToProps, {deleteFeature} )(AddedFeature);

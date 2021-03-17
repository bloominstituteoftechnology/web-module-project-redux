import React from 'react';
import { connect } from 'react-redux'

import { updateAddFeature } from '../actions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
      className="button" 
      onClick={() => {
        props.updateAddFeature(props.feature)
      }} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = (state) => {
  return {
    updateAddFeature: state.updateAddFeature
  }
}

export default connect(mapStateToProps, {updateAddFeature})(AdditionalFeature);

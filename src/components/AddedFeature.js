import React from 'react';
import {connect} from 'react-redux'
import {removeFeature} from '../components/action/action'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick ={ () =>props.removeFeature(props.feature.id)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToprops = (state) => {
  return {feature: state.car.feature
  }
}
export default connect(null, {removeFeature})(AddedFeature);

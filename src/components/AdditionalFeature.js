import React from 'react';
import { connect } from "react-redux";
import { addNewFeature } from '../actions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {props.addNewFeature(props.feature)}}
      > Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state, props) => {
  return {
    ...state,
    feature: props.feature
  }
}

export default connect(mapStateToProps, {addNewFeature})(AdditionalFeature);

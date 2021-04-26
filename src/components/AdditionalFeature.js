import React, { useReducer } from 'react';
import { connect } from "react-redux";
import { featuresReducer } from '../reducers/featuresReducer';
import { addFeature, removeFeature } from './../actions/updateFeatures';
const AdditionalFeature = props => {
  const initialState = {
    feature: []
  }
  const [feature, dispatch] = useReducer(featuresReducer,initialState );
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"  onClick= {() => dispatch(addFeature(feature))}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = (state) => {
  return {
    feature: state.AdditionalFeature
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFeature: feature => dispatch(addFeature(feature)),
    removeFeature: feature => dispatch(removeFeature(feature))
  }
}
export default connect(mapStateToProps,mapDispatchToProps )(AdditionalFeature);
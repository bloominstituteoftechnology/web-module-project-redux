import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/index";

const AddedFeature = (props) => {
  const onClick = () => {
    props.removeFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={onClick}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { removeFeature })(AddedFeature);

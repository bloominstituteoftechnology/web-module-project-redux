import React from "react";
import { removeFeature } from "../actions/index";
import { connect } from "react-redux";

const AddedFeature = (props) => {
  const handleClick = () => {
    props.removeFeature();
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>
        X
      </button>
      {props.car.features}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);

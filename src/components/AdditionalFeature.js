import React from "react";
import { addFeature } from "../actions/index";
import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  const handleClick = () => {
    props.addFeature(props.feature.price, props.feature.name);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleClick}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);

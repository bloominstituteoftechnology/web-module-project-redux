import React from "react";
import { addFeature } from "../actions/index";
import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  const handleClick = (feature) => {
    props.addFeature(feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => handleClick(1000)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);

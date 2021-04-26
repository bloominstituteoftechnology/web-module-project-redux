import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/featureAction";

const AdditionalFeature = (props) => {
  // const handleAddFeature = () => {
  //   props.addFeature(props.feature);
  // };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => props.addFeature(props.feature)}
        className="button"
      >
        Add
      </button>
      {props.feature.name} + {props.feature.price}
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);

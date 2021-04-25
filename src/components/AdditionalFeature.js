import React, { useState } from "react";
import { toggleEditing, updateCar } from "../actions/carActions";

const AdditionalFeature = (props) => {
  // const [state, dispatch] = useReducer(carReducer, initialState);

  const handleChanges = (e) => {
    setNewCarFeature(e.target.value);
  };

  const toggleEditingHandler = () => {
    dispatchEvent(toggleEditing());
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={toggleEditingHandler}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

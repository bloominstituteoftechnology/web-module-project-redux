import React from "react";
import { toggleEditing, updateCar } from "../actions/carActions";

// const [state, dispatch] = useReducer(carReducer, initialState);

const handleChanges = e => {
  setNewCarFeature(e.target.value);
};

const AddedFeature = (props) => {
  const toggleEditingHandler = () => {
    dispatchEvent(toggleEditing());
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={toggleEditingHandler}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

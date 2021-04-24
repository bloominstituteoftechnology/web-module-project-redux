import React from 'react';
import { connect } from "react-redux";
import { deleteFeature } from '../actions';



const AddedFeature = props => {

  const handleClick = (e) => {
    props.deleteFeature(props.feature.id);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      className="button"
      onClick={handleClick}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(null,{ deleteFeature })(AddedFeature);

import React from 'react';

const AddedFeature = ({feature, dispatch}) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClicke={dispatch()} className="button">X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;

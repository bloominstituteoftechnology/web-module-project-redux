import React from 'react';

const AddedFeature = ({feature}) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;

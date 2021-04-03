import React from 'react';

const AdditionalFeature = ({feature, dispatch}) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      {/* onClick={dispatch({type: "buy", item: feature})} */}
      <button  className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;

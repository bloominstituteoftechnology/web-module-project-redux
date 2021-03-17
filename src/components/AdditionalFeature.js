import React from 'react';

const AdditionalFeature = props => {
  const handleClick = e => {
    e.preventDefault();
    console.log(props.feature);
    props.addFeatures(props.feature);
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car - call addFeature, pass in props.feature */}
      <button className="button" onClick={handleClick}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;

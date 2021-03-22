import React from 'react';

import { removeFeature } from "../actions/carSalesActions';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(props.feature.id))}className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removerFeature })(AddedFeature);

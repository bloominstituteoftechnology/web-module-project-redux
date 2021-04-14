import React from 'react';
import { connect } from "react-redux";
import { addFeature, } from "../actions/action";

class AdditionalFeature extends React.Component {
  
render() {
  return (
    <li>
      {this.props.additionalFeatures.map((feature, id) => (
      
      <button className="button" key={id} onClick={() => addFeature(id)}>
        {feature.name} (+{feature.price})
      </button>))}
      
      
    </li>
  );
}
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, { addFeature, })(
  AdditionalFeature
  );

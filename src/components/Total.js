import React from 'react';
import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapTotal = (state) => {
  return {
    car: state.car
  }
}
export default connect(mapTotal)(Total);
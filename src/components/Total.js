import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		car: state.car,
		additionalPrice: state.additionalPrice,
	};
};

const Total = (props) => {
	return (
		<div className="content">
			<h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
		</div>
	);
};

export default connect(mapStateToProps, {})(Total);

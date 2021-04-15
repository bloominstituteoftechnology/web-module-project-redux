import React from "react";
import { connect } from "react-redux";

import { removeFeature } from "../action/index";

const AddedFeature = (props) => {
	const remove = (e) => {
		e.preventDefault();
		props.removeFeature(props.feature.id);
	};

	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			<button className="button" onClick={remove}>
				X
			</button>
			{props.feature.name}
		</li>
	);
};

export default connect(null, { removeFeature })(AddedFeature);

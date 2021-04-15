import { REMOVE_FEATURE, ADD_FEATURE } from "../action/index";

const initialState = {
	additionalPrice: 0,
	car: {
		price: 26395,
		name: "2019 Ford Mustang",
		image:
			"https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
		features: [],
	},
	additionalFeatures: [
		{ id: 1, name: "V-6 engine", price: 1500 },
		{ id: 2, name: "Racing detail package", price: 1500 },
		{ id: 3, name: "Premium sound system", price: 500 },
		{ id: 4, name: "Rear spoiler", price: 250 },
	],
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case REMOVE_FEATURE:
			return {
				...state,
				car: {
					...state.car,
					features: state.car.features.filter(
						(feature) => feature.id !== payload
					),
				},
				additionalFeatures: [
					...state.additionalFeatures,
					...state.car.features.filter((feature) => feature.id === payload),
				],
				additionalPrice:
					state.additionalPrice -
					state.car.features.find((feature) => feature.id === payload).price,
			};

		case ADD_FEATURE:
			return {
				...state,
				car: {
					...state.car,
					features: [...state.car.features, payload],
				},
				additionalFeatures: state.additionalFeatures.filter(
					(feature) => feature.id !== payload.id
				),
				additionalPrice: state.additionalPrice + payload.price,
			};

		default:
			return state;
	}
};
export default reducer;

import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/index";

export const initialState = {
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        additionalPrice: action.payload,
        car: {
          ...state.car,
          price: state.car.price + state.additionalPrice,
          features: [...state.car.features, action.name],
        },
      };

    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: 0,
      };

    default:
      return state;
  }
};

export default reducer;

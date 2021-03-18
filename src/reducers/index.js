const initalState = {
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

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        car: {
          ...state.car,
          price: state.car.price + action.payload.price,
        },
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
      };
    case "REMOVE_FEATURE": {
      console.log(action.payload);
      var array = [...state.car.features];
      var index = state.car.features.indexOf(action.payload);
      console.log(index);
      if (index !== -1) {
        array.splice(index, 1);
        console.log(array);
      }
      return {
        ...state,
        car: {
          ...state.car,
          features: array,
        },
      };
    }
    default:
      return state;
  }
};

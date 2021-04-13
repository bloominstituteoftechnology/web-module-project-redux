import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/featuresActions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};


export const featuresReducer = (state = initialState, action) => {
  // console.log('REDUCER: ', state, action)
  switch(action.type) {
    case(ADD_FEATURE):
      console.log('adding feature: ', action.payload)
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        // additionalFeatures:
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            action.payload
          ]
        },
        additionalFeatures: state.additionalFeatures.filter(feature => action.payload.id !== feature.id)
      };
    case(REMOVE_FEATURE):
      console.log('removing feature: ', action.payload)
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          // features: 
        }
      };
    default:
      return state;
  }
}
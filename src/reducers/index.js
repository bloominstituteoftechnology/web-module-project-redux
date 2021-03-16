import {  UPDATE_ADDL_PRICE, UPDATE_CAR_PRICE, UPDATE_CAR_NAME, UPDATE_CAR_IMAGE, UPDATE_CAR_FEATURES, UPDATE_ADDL_FEATURES } from '../actions'

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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ADDL_PRICE:
      return {
        ...state,
        additionalPrice: action.payload,
        car: {
          ...state.car,
          price: initialState.car.price,
          name: initialState.car.name,
          image: initialState.car.image,
          features: initialState.car.features
        },
        additionalFeatures: [
          ...state.additionalFeatures,
          state.additionalFeatures.map((item) => ({id: item.id, name: item.name, price: item.price}))
        ]
      }
    default:
      return state;
  }
}
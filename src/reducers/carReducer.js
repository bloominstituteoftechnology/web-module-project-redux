import { ADD_FEATURE } from '../actions/carActions';
import { DELETE_FEATURE } from '../actions/carActions';

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

function findTotalPrice(features) {
  let sum = 0;
  features.forEach(feature => {
    sum += feature.price;
  });
  return sum;
}

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE :
          const selectedId = action.payload;
          const selectedFeature = state.additionalFeatures.find(feature => feature.id === selectedId);
          if (!selectedFeature) {
            return state; 
          }
          const updatedAdditionalFeatures = state.additionalFeatures.filter(feature => {
            return feature.id !== selectedId
          });

          return {
            ...state,
            additionalPrice: findTotalPrice([...state.car.features, selectedFeature]),
            car: {
              ...state.car,
              features: [...state.car.features, selectedFeature],
            },
            additionalFeatures: updatedAdditionalFeatures,
          };



        case DELETE_FEATURE :
          const deletedId = action.payload;
          const deletedFeature = state.car.features.find(feature => feature.id === deletedId);
          if (!deletedFeature) {
            return state; 
          }
          const updatedDeletedFeatures = state.car.features.filter(feature => {
            return feature.id !== deletedId
          });

          return {
            ...state,
            additionalPrice: findTotalPrice(updatedDeletedFeatures),
            car: {
              ...state.car,
              features: updatedDeletedFeatures,
            },
            additionalFeatures: [...state.additionalFeatures, deletedFeature],
          }


          default:
           return state
    }

};
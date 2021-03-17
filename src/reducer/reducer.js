import { ADD_FEATURE, REMOVE_FEATURE } from '../actions/actions'

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
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case(ADD_FEATURE):
      return addFeature(state, action.data)
    case(REMOVE_FEATURE):
      return removeFeature(state, action.data)
    default:
      return state
  }
}

function addFeature(state, data){
  const match = state.car.features.filter( feature => feature.id === data.id).length === 1 ? true : false
  if(match){
    return state
  }

  const newFeatures = [ ...state.car.features, data ]
  const newAdditionalPrice = featuresPrice(newFeatures)

  return {
    ...state,
    car: {
      ...state.car,
      features: newFeatures
    },
    additionalPrice: newAdditionalPrice
  }
}

function removeFeature(state, data){
  const newFeatures = [ ...state.car.features.filter( feature => feature.id !== data.id ) ]
  const newAdditionalPrice = featuresPrice(newFeatures)

  return {
    ...state,
    car: {
      ...state.car,
      features: newFeatures
    },
    additionalPrice: newAdditionalPrice
  }
}

function featuresPrice(features){
  return features.reduce( (accumlator, feature) => feature.price + accumlator, 0)
}
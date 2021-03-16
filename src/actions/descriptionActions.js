export const UPDATE_ADDL_PRICE = 'UPDATE_ADDL_PRICE';
export const updateAddlPrice = (price) => {
  return { type: UPDATE_ADDL_PRICE, payload: price };
}
export const UPDATE_CAR_PRICE = 'UPDATE_CAR_PRICE';
export const updateCarPrice = (car_price) => {
  return { type: UPDATE_CAR_PRICE, payload: car_price };
}

export const UPDATE_CAR_NAME = 'UPDATE_CAR_NAME';
export const updateCarName = (car_name) => {
  return { type: UPDATE_CAR_NAME, payload: car_name };
}
  
export const UPDATE_CAR_IMAGE = 'UPDATE_CAR_IMAGE';
export const updateCarImage = (car_image) => {
  return { type: UPDATE_CAR_IMAGE, payload: car_image };
}
export const UPDATE_CAR_FEATURES = 'UPDATE_CAR_FEATURES';
export const updateCarFeatures = (car_features) => {
  return { type: UPDATE_CAR_FEATURES, payload: car_features };
}
export const UPDATE_ADDL_FEATURES = 'UPDATE_ADDL_FEATURES';
export const updateAddlFeatures = (addl_features) => {
  return { type: UPDATE_ADDL_FEATURES, payload: addl_features };
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = (feature) => {
  return { type: REMOVE_FEATURE, payload: feature}
}
  

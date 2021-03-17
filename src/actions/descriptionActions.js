
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = (feature) => {
  return { type: REMOVE_FEATURE, payload: feature}
}
export const ADD_NEW_FEATURE = 'ADD_NEW_FEATURE';
export const addNewFeature = (feature) => {
  return { type: ADD_NEW_FEATURE, payload: feature}
}
  

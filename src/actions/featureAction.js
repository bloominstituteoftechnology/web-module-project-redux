export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "DELETE_FEATURE";

export function addFeature(feature) {
  return { type: ADD_FEATURE, payload: feature };
}

export function removeFeature(feature) {
  return { type: REMOVE_FEATURE, payload: feature };
}

export const ADD_FEATURE = "ADD_FEATURE";
export const DELETE_FEATURE = "DELETE_FEATURE";

export function addFeature(feature) {
  return { type: ADD_FEATURE, payload: feature };
}

export function deleteFeature(feature) {
  return { type: DELETE_FEATURE, payload: feature };
}

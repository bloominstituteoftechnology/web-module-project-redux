export const ADD_FEATURE = "ADD_FEATURE";
export const DELETE_FEATURE = "DELETE_FEATURE";

export function addFeature() {
  return { type: ADD_FEATURE };
}

export function deleteFeature() {
  return { type: DELETE_FEATURE };
}

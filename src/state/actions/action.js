//no imports only exports
// - User should be able to add features to their car
// - User should be able to remove added features from their car
// - Total should update as user adds and removes features from their car

export const ADD_FEATURES = "ADD_FEATURES";
export const REMOVE_FEATURES = "REMOVE_FEATURES";

export function AddedFeatures(features) {
  return {
    type: ADD_FEATURES,
    payload: features,
  };
}

export function RemovedFeatures(features) {
  return {
    type: REMOVE_FEATURES,
    payload: features,
  };
}

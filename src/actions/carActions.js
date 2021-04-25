export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_CAR = "UPDATE_CAR";

export function toggleEditing() {
  return { type: TOGGLE_EDITING };
}

export const updateCar = newCar => {
  return { type: UPDATE_CAR, payload: newCar };
};
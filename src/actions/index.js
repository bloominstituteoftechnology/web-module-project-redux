export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (feature, name) => {
  return {
    type: ADD_FEATURE,
    payload: feature,
    name: name,
  };
};

export const removeFeature = () => {
  return {
    type: REMOVE_FEATURE,
  };
};

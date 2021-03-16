export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (additionalFeatures) => {
    return { type: ADD_FEATURE, payload: additionalFeatures };
}

export const removeFeature = (feature) => {
    return { type: REMOVE_FEATURE, payload: feature}
}
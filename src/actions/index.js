export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE"

export function removeFeature(feature) {
    return {
        type: REMOVE_FEATURE,
        payload: feature,
    }
}

export function addFeature(feature) {
    return {
        type: ADD_FEATURE,
        payload: feature,
    }
}
//* 💡 1. CREATE ACTION TYPE CONSTANTS
export const ADD_FEATURES = "ADD_FEATURES";
export const REMOVE_FEATURES = "REMOVE_FEATURES";

//* 💡 2. ACTION CREATOR
export const addFeatures = (featureByID) => {
    console.log(featureByID);
    return {type: ADD_FEATURES, payload: featureByID};
}

export const removeFeatures = (featureByID) => {
    return {type: REMOVE_FEATURES, payload: featureByID};
}

//* 💡 3. ➡ BULK EXPORT IN ./INDEX.JS

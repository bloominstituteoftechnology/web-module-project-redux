export const ACTION = "ACTION";
export const ADD_FEATURE = "ADD_FEATURE"

export function action(data) {
    return {
        type: ACTION,
        payload: data
    }
}

export function addFeature(value, name) {
    return {
        type: ADD_FEATURE,
        payloadv: value,
        payloadn: name
    }
}



// MVP Requirements:
// Move the given state to the reducer as the initial state for the Redux store.
// Set up the Redux flow
// User should be able to add features to their car
// User should be able to remove added features from their car
// Total should update as user adds and removes features from their car
export const ADD_FEATURE = 'ADD_FEATURE';

export function addFeature(feature) {
    return {
      type: ADD_FEATURE,
      payload: feature
    }
  }
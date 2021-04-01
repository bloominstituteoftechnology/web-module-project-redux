export const ADD_FEATURE = 'ADD_FEATURE';

export const handleAddFeature = e => {
    e.preventDefault();
    return {
        type: ADD_FEATURE,
        payload: e
      }
  }
export const featuresReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FEATURE":
        console.log("ADD_FEATURE action running in the feature reducer")
        return {
          ...state,
          feature: action.payload
        };
      case "REMOVE_FEATURE":
        console.log("REMOVE_FEATURE action running in the feature reducer")
        return {
          ...state,
          feature: state.feature !== action.payload
        };
      default:
        return state;
    }
  };
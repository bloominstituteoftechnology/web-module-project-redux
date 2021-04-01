
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      return { ...state, additionalPrice: state.additionalPrice + action.payload };
    case "REMOVE_FEATURE":
      return { ...state, additionalPrice: state.additionalPrice - action.payload };
    default:
      return state;
  }
};

export default reducer;
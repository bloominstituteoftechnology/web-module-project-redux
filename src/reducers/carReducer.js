import { findAllByTestId } from "@testing-library/react";

export const initialState = {};

export const carReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CARS":
      return {
        ...state,
        title: action.payload,
        editing: false,
      };
    case "TOGGLE_EDITING":
      return {
        ...state,
        editing: !state.editing,
      };
    default:
      return state;
  }
};

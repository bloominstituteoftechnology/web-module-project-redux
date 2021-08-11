import { TOGGLE_FAVS } from "../actions/favActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(TOGGLE_FAVS):
      return ({
        ...state,
        displayFavorites: !state.displayFavorites,
      });
    default:
      return state;
  }
}

export default reducer;
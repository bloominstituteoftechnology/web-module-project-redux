import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  TOGGLE_FAVORITES,
} from "./../actions/favoritesActions";

const initialState = {
  //   favorites: favorites,
  //   displayFavorites: true,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.playload],
      };
    case DELETE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id != action.playload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;

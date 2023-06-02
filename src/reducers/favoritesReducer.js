import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter((movie) => {
          movie.id !== action.payload;
        }),
      };
    }
    default:
      return state;
  }
};

export default favoritesReducer;

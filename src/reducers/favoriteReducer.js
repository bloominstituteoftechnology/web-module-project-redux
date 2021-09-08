import { ADD_FAVORITES, REMOVE_FAVORITES } from "./../actions/favoriteAction";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      if (state.favorites.find((movie) => movie.id == action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((item) => {
          return item.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};

export default reducer;

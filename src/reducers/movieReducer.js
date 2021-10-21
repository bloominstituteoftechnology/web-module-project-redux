import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "./../data.js";

const initialState = {
  favorites: [],
  movies: movies,
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_MOVIE:
    //   return {};
    case DELETE_MOVIE:
      return {
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default reducer;

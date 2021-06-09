import { connect } from "react-redux";
import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "./../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: action.payload.id,
            title: action.payload.title,
            director: action.payload.director,
            metascore: action.payload.metascore,
            genre: action.payload.genre,
            description: action.payload.description,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;

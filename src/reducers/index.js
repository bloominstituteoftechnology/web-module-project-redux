import { combineReducers } from "redux";
import movies from "../data";
import movieReducer from "./movieReducer";
import favoriteMovieList from "./favoritesReducer";

export default combineReducers({
  movie: movieReducer,
  favorite: favoriteMovieList,
});

import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoritesReducer from "./favoritesReducer";

const combinedReducers = combineReducers({
  movieReducer,
  favoritesReducer,
});

export default combinedReducers;

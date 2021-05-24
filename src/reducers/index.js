import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  favorite: favoriteReducer,
});

export default rootReducer;

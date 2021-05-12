import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer';

export const rootReducer = combineReducers({
  movie: movieReducer,
  favorite: favoriteReducer
});
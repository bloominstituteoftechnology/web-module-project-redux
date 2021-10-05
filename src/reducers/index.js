import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  movieState:movieReducer,
  favoriteState:favoriteReducer
});

export default rootReducer;
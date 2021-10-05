import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  movieState:movieReducer,
  favoriteState:favoritesReducer
});

export default rootReducer;
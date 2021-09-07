import { combineReducers } from 'redux';
import favoriteMoviesReducer from './favorites.reducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({ movieReducer, favoriteMoviesReducer });

export default rootReducer;
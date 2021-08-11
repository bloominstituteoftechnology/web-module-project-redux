import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducers'
import movieReducer from './movieReducer';

export default combineReducers({ movies: movieReducer, favorites: favoritesReducer })
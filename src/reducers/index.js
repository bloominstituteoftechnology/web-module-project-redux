import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer'

export default combineReducers({
    movieReducer, favoritesReducer
});
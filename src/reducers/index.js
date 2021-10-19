import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoritesReducer';

const combineReducer = combineReducers({
    favoritesState: favoriteReducer,
    moviesState: movieReducer
})

export default combineReducer;
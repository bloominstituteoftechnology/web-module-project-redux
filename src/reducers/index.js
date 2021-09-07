import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import favoriteReducer from './favoriteMovie';

export default combineReducers({
    favorite: favoriteReducer,
    movie: movieReducer
});
import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteMovieReducer from './favoriteMovieReducer';


export default combineReducers({
    movie: movieReducer,
    favoriteMovie: favoriteMovieReducer
});
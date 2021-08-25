import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteMoviesReducer from './favoriteMoviesReducer';

const rootReducer = combineReducers({ movieReducer, favoriteMoviesReducer })

export default rootReducer;
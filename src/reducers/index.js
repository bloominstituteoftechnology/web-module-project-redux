import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducers';
const rootReducer = combineReducers({
    movieReducer
    ,favoritesReducer})

export default rootReducer;

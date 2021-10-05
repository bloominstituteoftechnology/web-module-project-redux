import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducers';

const rootReducer = combineReducers({
    favoritesState: favoritesReducer,
    movieState:movieReducer
})

export default rootReducer;
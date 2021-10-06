import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    favoritesState:favoritesReducer,
    moviesState:movieReducer
});
export default rootReducer;
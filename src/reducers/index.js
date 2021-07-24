import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer'
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    movie: movieReducer,
    favorites: favoritesReducer
});
export default rootReducer
import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import movieReducer from './movieReducer';


const rootReducer = combineReducers({
    favoriteState: favoritesReducer, 
    movieState: movieReducer
});

export default rootReducer;
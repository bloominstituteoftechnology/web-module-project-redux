import { combineReducers } from 'redux';
import favoritesReducer from '../reducers/favoritesReducer';
import movieReducer from './movieReducer';


export const combine = combineReducers({
    movie: movieReducer,
    favorites: favoritesReducer
})

export default movieReducer;
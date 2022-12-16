import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import favoritesRducer from './favoritesReducer'

const rootReducers = combineReducers({movie: movieReducer, favorite: favoritesRducer})

export default rootReducers;
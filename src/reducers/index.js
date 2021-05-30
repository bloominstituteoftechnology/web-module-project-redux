import { combineReducers } from 'redux';
import reducer from './favoritesReducer'
import movieReducer from './movieReducer';
export const reducerCombine = combineReducers({
    movie: movieReducer,
    favorite: reducer
  });
export default movieReducer;
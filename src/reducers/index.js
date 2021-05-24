import { combineReducers } from 'redux';
import reducer from './favoriteReducer';
import movieReducer from './movieReducer';

export const rootCombine = combineReducers({
    movie: movieReducer,
    favorite: reducer
  });

export default movieReducer;

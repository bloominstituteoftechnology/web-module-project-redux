import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import businessReducer from './businessReducer';

export default movieReducer;


export const rootReducer = combineReducers({
    movie: movieReducer,
    business: businessReducer
});




// [ ] **In reducers/index.js, use the combineReducers method to connect both movies and favorite movies to redux.**

// * [ ] **Notice that your movie functions no longer work. Why?** Make changes necessary to get the component connected to the movie reducer working again.

// * [ ] Connect the favorites state to the FavoriteMovieList component and test.

// * [ ] Connect the displayFavorites state to the Movie and MovieHeader component.
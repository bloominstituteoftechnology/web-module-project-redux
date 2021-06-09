import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/movieActions.js';
 

export const initialState = {
    favorites: [],
    displayFavorites: true
}

// console.log("FAVORITES:", initialState.favorites)

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: ! state.displayFavorites
            }
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, {title: action.payload}]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites]
            }
        default: 
            return state;
     }
}

// Add in reducer cases, action creators and event handler code for the following actions:
//   - toggleFavorites : Switches the displayFavorites state value between true and false. When displayFavorites is true, the favorite button does not show on the Movie page.
  
//   - addFavorites: Adds in a new movie object into the favorites list.
//   - removeFavorite: Removes a movie Object from the favorites list with an id passed in.

export default favoritesReducer;

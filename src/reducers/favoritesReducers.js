import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from '../actions/favoritesActions.js';
import movies from '../data.js';


const initialState = {
    favorites: [],
    displayFavorites: true,
    movies: movies
}


const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        
        case (ADD_FAVORITE): {

            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }

        case (TOGGLE_FAVORITES): {
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        }

        case (REMOVE_FAVORITE): {
            return {
                ...state,
                favorites: state.favorites.filter(item => (item.id !== action.payload))
            }
        }

        default:
            return state
    }

}

export default favoritesReducer;
import { ADD_MOVIE_TO_FAV, REMOVE_FAV, TOGGLE_FAV } from "../actions/movieActions";


export const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state  = initialState, action) => {
    switch(action.type) {
        case ADD_MOVIE_TO_FAV:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case TOGGLE_FAV:
           
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case REMOVE_FAV:
            return {
                ...state,
                favorites: state.favorites.filter((movie) => movie.id !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;
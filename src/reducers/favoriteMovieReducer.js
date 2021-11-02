import movies from "../data"
import { DISPLAY_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE } from "../actions/favoriteActions";

const initialState = {
    favorites: [],
    displayFavorites: true,
    favButton: true
}

const favoriteMovieReducer = (state = initialState, action) => {
    switch(action.type){
        case(DISPLAY_FAVORITES):
        return({
            ...state,
            displayFavorites: !state.displayFavorites
    })
        case(ADD_FAVORITE):
        return({
            ...state,
            favorites: [...state.favorites, action.payload],
            favButton: !state.favButton
        })
        case(DELETE_FAVORITE):
        return({
            ...state,
            favorites: state.favorites.filter(item=>(action.payload !== item.id)),
            favButton: !state.favButton
        })
    default:
            return state;
}}

export default favoriteMovieReducer;
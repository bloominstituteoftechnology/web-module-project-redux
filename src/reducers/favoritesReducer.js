import { ADD_FAVORITE, DELETE_FAVORITE } from '../actions/movieActions.js';


export const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
            case DELETE_FAVORITE:
                return {
                    favorites: state.favorites.filter(favorite=>(action.payload !== favorite.id))
             };    
            default:
                return state;
            }
}

export default favoritesReducer;
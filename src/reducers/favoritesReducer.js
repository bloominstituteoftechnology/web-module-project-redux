import { TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITES } from "../actions/favoriteActions";

export const initialState = {
    favorites: [
       {
           title: '',
           director: ''
       },
       {
           title: '',
           director: ''
       }
    ],
    displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            };
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, {...action.payload}]
            };
        case REMOVE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(movie => (action.payload !== movie.id))
            };
        default:
            return state;
    }
}

export default favoritesReducer;
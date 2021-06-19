import { ADD_FAVORITE, DELETE_FAVORITE, TOGGLE_FAVORITES } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_FAVORITE:
            return {
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        case ADD_FAVORITE:
            return {
                favorites: state.favorites.filter(item => (action.payload === item.id))
            }
        case TOGGLE_FAVORITES:
            console.log("toggle favorites button in the favoritesReducer");
            return {
                ...state.favorites,
                displayFavorites: !state.displayFavorites
            }
        default:
            return state;
    }
}

export default favoritesReducer;
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
            // const newFavorite = {
            //     id: state.id,
            //     title: state.title,
            //     director: state.director,
            //     genre: state.genre,
            //     metascore: state.metascore,
            //     description: state.description
            // }
            return {
                // ...state,
                // favorites: [...state.favorites, newFavorite]
                favorites: state.favorites.filter(item=>(action.payload === item.id))
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